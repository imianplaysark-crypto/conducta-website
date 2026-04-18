# Cuba Alerts — Sister Service to @conductadade

A separate, always-on backend service that watches for breaking Cuba news and delivers it to Daren's phone with a ready-to-paste Spanish social caption for @conductadade. **Not part of the conductadade.com website codebase.** Lives in its own repo, its own Railway project, its own domain of concerns.

## What it does

1. Every 5 minutes, fetches 13 Cuba-relevant RSS feeds (Google News per-outlet for Reuters, AP, CNN, Fox, BBC, Miami Herald, NYT, WaPo; plus native feeds for Diario de Cuba, CubaNet, CiberCuba, Cubadebate; 14ymedio's feed currently 404).
2. Pre-filters on Cuba keywords (English + Spanish morphology: cuba, cubano/a/s, havana/habana, díaz-canel, castro, guantánamo, 11j, balsero, cubadebate, granma, etc.).
3. Dedups against a 72h rolling SeenStory table.
4. Classifies each new candidate with **Haiku 4.5** (`claude-haiku-4-5-20251001`) against a strict rubric: only concrete enacted events qualify — no rhetoric, no speculation, no op-eds. Returns JSON with `alert`, `severity`, `category`, `event_is_concrete`, `reason`.
5. **Corroboration gate with tier-1 fast path:**
   - If source is **Reuters / AP / BBC / CNN / Fox / NYT / WaPo / Miami Herald** → single-source fire (those outlets don't break fake news about Cuba).
   - Otherwise → require at least one other source at severity ≥ 5 matching by title-token overlap or shared category.
6. Generates a ready-to-paste **Spanish** social post in @conductadade's voice (180–280 chars + 4–6 hashtags, no URLs, one 🇨🇺 flag).
7. Fires a **Pushover priority=2 Emergency** push that retries every 30s until acknowledged. With iOS Critical Alerts enabled, it wails through Focus/DND/Sleep. The push includes headline, confirming sources, URL, and the prepared social caption — copyable in one long-press.
8. Rate limit: max 2 Emergency pushes per rolling 60 min; overflow goes as normal-priority pushes.

## Where it lives

| | |
|---|---|
| Local working copy | `/Users/darenmesa/cuba-alerts` |
| GitHub | `https://github.com/imianplaysark-crypto/cuba-alerts` (private) |
| Railway project | `fd943991-5ca5-468b-adcb-5956ada6b86a` (`cuba-alerts` service) |
| Deploy trigger | GitHub push to `main` → auto-deploy (after Option-B wiring is done in the Railway dashboard) |
| Runtime | Python 3.12, APScheduler (5-min interval), Flask `/health` on `$PORT` |

## Tech stack

- **Language:** Python 3.11+ (pinned 3.12 via `.python-version`)
- **Deps:** anthropic, apscheduler, sqlalchemy (SQLite), feedparser, requests, loguru, python-dotenv, flask
- **Classifier:** Claude Haiku 4.5 with ephemeral prompt-cache on the system prompt
- **Storage:** SQLite (`cuba_alerts.db`) — ephemeral unless Railway Volume is attached. Stores SeenStory (dedup) + AlertLog (fire history).
- **Notifier:** Pushover REST (`api.pushover.net/1/messages.json`). Critical-Alert entitlement comes from the Pushover iOS app — we don't need our own.
- **No Twilio, no A2P registration, no Apple Developer account.**

## Env vars (set in Railway, not in code)

| Var | Purpose |
|---|---|
| `ANTHROPIC_API_KEY` | Haiku classifier + social-copy generator |
| `PUSHOVER_TOKEN` | Application token (from pushover.net/apps/build) |
| `PUSHOVER_USER` | User key (top of pushover.net dashboard) |
| `DATABASE_URL` | Optional; defaults to `sqlite:///cuba_alerts.db` |
| `LOG_LEVEL` | Optional; defaults to `INFO` |

## File map

```
config.py         env + tunables (poll interval, rate limits, rubric constants)
db.py             SeenStory, AlertLog SQLAlchemy models
fetcher.py        13 RSS feeds with 10s HTTP timeout + custom UA
prefilter.py      Cuba-keyword gate (English + Spanish morphology)
classifier.py     Haiku call; SYSTEM_PROMPT is the rubric — edit here to tune
corroboration.py  TIER1_SOURCES set + second-source matching
social.py         Spanish social-post generator for @conductadade
notifier.py       Pushover send_push + fire_emergency/fire_normal + test_blast
health.py         Flask /health endpoint
main.py           CLI, cold-start seeding, scheduler loop, pipeline
railway.json      nixpacks config + healthcheck
```

## CLI modes

```bash
python main.py --backfill --hours 48   # classify last N hours, print verdicts, no fires (rubric tuning)
python main.py --dryrun                # full pipeline, log "would fire" instead of pushing
python main.py --test                  # send one real Emergency push using a canned story
python main.py                         # scheduler loop (what Railway runs)
```

## How to change things (standard dev flow)

```bash
cd /Users/darenmesa/cuba-alerts
source .venv/bin/activate
# edit the file you want to change
python main.py --backfill --hours 24   # preview against live stories
python main.py --dryrun                # full end-to-end, no pushes
git add -A && git commit -m "..." && git push
# Railway auto-deploys on push to main (Option B connected via dashboard)
```

Common change recipes:
- **Rubric too loose/tight** → `classifier.py::SYSTEM_PROMPT`, then `--backfill --hours 48` to eyeball.
- **Social voice** → `social.py::SOCIAL_SYSTEM_PROMPT`.
- **Add/remove RSS feed** → `fetcher.py::FEEDS`.
- **Keyword gate** → `prefilter.py::KEYWORDS` (add Spanish morphology carefully — regex uses negative lookaround for accented letters).
- **Tier-1 membership** → `corroboration.py::TIER1_SOURCES`.
- **Severity threshold for firing** → `main.py` — two places: `cycle()` and `cmd_backfill()`, both check `v.severity >= 7`.
- **Emergency retry / expire** → `config.py::PUSHOVER_RETRY_SEC`, `PUSHOVER_EXPIRE_SEC`.

## Design decisions worth remembering

- **Pushover, not CallMeBot.** Original spec had CallMeBot GSM calls; their WhatsApp activation handshake was unresponsive across two attempts. Pivoted to Pushover Emergency + iOS Critical Alerts. Tradeoff: Pushover needs phone online (APNs queues when offline); CallMeBot would have dropped a voicemail regardless. For a device that's typically online, fine.
- **Tier-1 fast path.** Waiting for 2-source corroboration on every alert was too slow when Reuters/AP/CNN alone is already authoritative. Cuban outlets (DDC, CubaNet, Cubadebate, CiberCuba) still need a second source because they have editorial slants — anti-regime for the exile press, state propaganda for Cubadebate.
- **Concrete-event classifier.** First version fired a severity-8 false positive on a Trump rhetorical remark ("new dawn for Cuba"). Rubric rewritten to require past-tense concrete action verbs and reject all speculative / attributive framing. Validated on 48h of live stories before shipping — zero false positives in that window.
- **Spanish social copy.** The whole point is to feed @conductadade — the channel posts in Spanish to a Cuban audience. English copy would require translation overhead the user doesn't have time for at 3am.
- **No GitHub in `main.py`, no Twitter API, no IG Graph API auto-posting.** IG/TikTok/FB auto-posting requires Facebook Business verification which is the same paperwork trap we avoided with CallMeBot. Copy-paste from the notification is the ship-today solution.

## Observability

- `railway logs` — live scheduler output
- `/health` on the service's Railway URL — returns `{"status":"ok","last_cycle":"<iso>"}` for healthcheck
- AlertLog table (SQLite) — full history of every fire including Pushover response; inspectable via `railway run python -c "..."` or a temporary script

## Known gaps (non-blocking)

- **14ymedio feed** is 404. Other 13 sources cover the signal; if the user wants 14ymedio back, grep their site for the current RSS path.
- **Cross-language corroboration** is weak. "Cuba blackout" (English) vs "Apagón nacional" (Spanish) have near-zero token overlap; Jaccard can miss. Category fallback partly catches it. For a real grid collapse we'd almost certainly get enough English-language hits anyway. Could add an LLM-based "same event" judge; extra spend.
- **Flask dev server** serves `/health`. Fine for a single healthcheck endpoint; swap to waitress if load ever matters.
- **SQLite ephemeral** on Railway without a Volume. Cold-start seeding prevents alert spam after reboot. AlertLog history is lost on redeploy — attach a Volume + set `DATABASE_URL=sqlite:////app/cuba_alerts.db` if you care about persistence.
