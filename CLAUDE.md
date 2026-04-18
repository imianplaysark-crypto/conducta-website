# Conducta DADE — Project Brief for Claude Code

## Sister services
- **Cuba breaking-news alert system** — separate backend that watches 13 RSS feeds, classifies with Haiku, and sends a ready-to-paste Spanish @conductadade social caption via Pushover Emergency alert. **Not part of this repo.** See `CUBA_ALERTS.md` in this folder for full brief; lives at `/Users/darenmesa/cuba-alerts` and `github.com/imianplaysark-crypto/cuba-alerts`.

## What this is
Conducta is a Miami-based nonprofit (501(c)(3) pending) documenting and supporting unhoused/vulnerable populations through direct food/clothing distribution and unfiltered photojournalism. The site (conductadade.com) is the public-facing home: mission, gallery, donations, blog, contact.

## Design language — DO NOT VIOLATE
This is an **editorial / documentary magazine** aesthetic, not a typical nonprofit site. Reference points: The New York Times opinion pieces, Magnum Photos, MR PORTER editorial, Aperture magazine.

- **Typography:** Newsreader (serif, headlines and display) + Inter (sans, body and UI). Do not introduce other fonts. Italic emphasis on key emotional words ("historia", "dignidad").
- **Section pattern:** Numbered sections "N.º 01", "N.º 02" etc. with a small label above ("Galería", "Apóyanos", "En contacto"). Always preserve.
- **Color:** Muted, paper-like palette. Off-white background, near-black text, single accent. No gradients, no purple, no card shadows, no rounded-XL chunks.
- **Spacing:** Generous, magazine-grade. Lots of vertical breathing room. Single-column or asymmetric two-column.
- **Tone:** Spanish-first, English toggle. Voice is restrained, dignified, journalistic — never saccharine, never guilt-tripping, never "make a difference today!" CTA-speak.
- **Banned:** Stock photo aesthetics, generic SaaS fonts (Inter for headings — Inter is body only here), gradients, drop shadows, purple/teal accents, emoji in copy, exclamation points.

## Tech stack
- **Framework:** None — static HTML/CSS/JS, no build step, no bundler, no npm
- **Pages:** `index.html` (main SPA-style single page), `blog.html`, `admin.html` (noindex)
- **Styles:** Single `styles.css` file, vanilla CSS custom properties, no preprocessor
- **Scripts:** Single `script.js` file, vanilla ES6+, no dependencies
- **i18n:** Custom `data-i18n` attribute system with `translations` object in script.js (es/en)
- **Blog data:** `posts.json` flat file, fetched client-side, rendered via JS
- **Images:** Static files in repo root (logo.png, hero-logo.png, nav-logo.png, favicon.png). No /public directory yet. No image optimization pipeline.
- **Fonts:** Google Fonts (Newsreader + Inter), loaded via `<link>` with preconnect
- **Deploy:** Vercel static hosting, `vercel.json` for headers/clean URLs, auto-deploy on push to main
- **Version control:** Git, GitHub (imianplaysark-crypto/conducta-website)

## Deployment
- GitHub: imianplaysark-crypto/conducta-website
- Hosted: Vercel (auto-deploys on push to main)
- Domain: Namecheap (DNS → Vercel)

## Working agreement
- Make one logical change per commit. Commit message in present tense, English.
- Before any destructive change (deleting files, rewriting whole sections), confirm with me.
- Spanish-first for all copy. English toggle must continue working for new sections.
- After substantial UI changes, run the frontend-design skill review on what you built.
- TODOs in code are fine — clearly mark them `// TODO(Daren): ...`
- Never commit secrets, API keys, or .env files.

## What's intentionally not on the site yet
- 501(c)(3) status / EIN (in progress)
- Real photography (placeholder slots OK)
- Founder bio
- Recurring donations infrastructure
