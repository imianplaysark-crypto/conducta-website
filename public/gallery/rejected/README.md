# Rejected

Dumping ground for gallery images that don't fit the slideshow well —
too hard to crop, awkward aspect ratio, bad on mobile, off-brand, etc.

Anything in this folder is **excluded from the manifest** by
`build-gallery.js` (it's non-recursive and only scans the parent `gallery/`
directory, so subfolders are ignored).

To retire an image: `mv ../01.jpg ./01.jpg` and re-run `node build-gallery.js`.
To restore one: move it back up to `public/gallery/` and rebuild.
