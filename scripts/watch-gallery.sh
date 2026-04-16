#!/usr/bin/env bash
# Background watcher: polls gallery-drop/ every POLL seconds. When images are
# present and the most-recently-modified one has been settled for at least
# DEBOUNCE seconds, runs sync-gallery.sh. Designed to run under launchd.

set -euo pipefail

REPO="/Users/darenmesa/Documents/Conducta/conducta-website"
DROP="$REPO/gallery-drop"
SYNC="$REPO/scripts/sync-gallery.sh"

POLL=5
DEBOUNCE=30

mkdir -p "$DROP"

while true; do
  shopt -s nullglob nocaseglob
  files=("$DROP"/*.jpg "$DROP"/*.jpeg "$DROP"/*.png "$DROP"/*.heic)
  shopt -u nocaseglob

  if (( ${#files[@]} > 0 )); then
    newest=0
    for f in "${files[@]}"; do
      m=$(stat -f %m "$f")
      (( m > newest )) && newest=$m
    done
    age=$(( $(date +%s) - newest ))
    if (( age >= DEBOUNCE )); then
      "$SYNC" || true
    fi
  fi

  sleep "$POLL"
done
