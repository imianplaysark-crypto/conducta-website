#!/usr/bin/env bash
# Process new images dropped in gallery-drop/ → public/gallery/, regenerate
# manifest, commit + push so Vercel redeploys.
#
# Safe to run repeatedly. Exits 0 with no side effects when drop is empty.

set -euo pipefail

REPO="/Users/darenmesa/Documents/Conducta/conducta-website"
DROP="$REPO/gallery-drop"
ARCHIVE="$DROP/_archive"
OUT="$REPO/public/gallery"
LOG="$DROP/.sync.log"
LOCK="$DROP/.sync.lock"

MAX_WIDTH=1600
JPEG_QUALITY=82

mkdir -p "$ARCHIVE" "$OUT" "$DROP"

# Single-instance lock (release on any exit, including errors)
exec 9>"$LOCK"
if ! flock -n 9; then
  exit 0
fi

log() { printf '%s  %s\n' "$(date '+%Y-%m-%d %H:%M:%S')" "$*" >> "$LOG"; }

shopt -s nullglob nocaseglob
images=()
for f in "$DROP"/*.jpg "$DROP"/*.jpeg "$DROP"/*.png "$DROP"/*.heic; do
  [[ -f "$f" ]] && images+=("$f")
done
shopt -u nocaseglob

if [[ ${#images[@]} -eq 0 ]]; then
  exit 0
fi

# Sort by mtime so drops process in the order they were added
IFS=$'\n' images=($(
  for f in "${images[@]}"; do
    printf '%s\t%s\n' "$(stat -f %m "$f")" "$f"
  done | sort -n | cut -f2-
))
unset IFS

# Find next sequence number based on existing public/gallery/NN.jpg
next=1
shopt -s nullglob
existing=("$OUT"/[0-9][0-9].jpg)
if [[ ${#existing[@]} -gt 0 ]]; then
  last_name=$(basename "${existing[-1]}" .jpg)
  next=$((10#$last_name + 1))
fi
shopt -u nullglob

count=0
for src in "${images[@]}"; do
  num=$(printf '%02d' "$next")
  dst="$OUT/$num.jpg"

  # sips: resize (preserving aspect), convert to JPEG, set quality, strip EXIF
  if ! sips \
        -Z "$MAX_WIDTH" \
        -s format jpeg \
        -s formatOptions "$JPEG_QUALITY" \
        "$src" --out "$dst" >/dev/null 2>&1; then
    log "FAILED to process $src — leaving in drop"
    continue
  fi

  # Caption: same basename .txt → copy to NN.txt for build-gallery.js
  base="${src%.*}"
  if [[ -f "$base.txt" ]]; then
    cp "$base.txt" "$OUT/$num.txt"
    mv "$base.txt" "$ARCHIVE/"
  fi

  mv "$src" "$ARCHIVE/"
  log "added $(basename "$src") → public/gallery/$num.jpg"
  next=$((next + 1))
  count=$((count + 1))
done

if [[ $count -eq 0 ]]; then
  exit 0
fi

# Regenerate gallery.json
cd "$REPO"
/usr/local/bin/node build-gallery.js >> "$LOG" 2>&1 \
  || /opt/homebrew/bin/node build-gallery.js >> "$LOG" 2>&1 \
  || node build-gallery.js >> "$LOG" 2>&1

# Commit + push only if something actually changed
if [[ -n "$(git status --porcelain public/gallery gallery.json)" ]]; then
  git add public/gallery gallery.json
  msg="gallery: add $count image"
  [[ $count -gt 1 ]] && msg="${msg}s"
  git commit -m "$msg" >> "$LOG" 2>&1
  if git push >> "$LOG" 2>&1; then
    log "pushed $count image(s) to main"
  else
    log "PUSH FAILED — commit is local; resolve manually"
  fi
fi
