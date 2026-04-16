# Gallery — Drop-and-Deploy Workflow

Place images in this directory. The slideshow on the homepage auto-discovers them.

## Supported formats

`.jpg` `.jpeg` `.png` `.webp`

## Optional captions

To add a caption to an image, create a `.txt` file with the same basename:

```
street-portrait-01.jpg
street-portrait-01.txt    ← caption text (one line)
```

## Naming

Use descriptive, kebab-case filenames: `overtown-distribution-march-2026.jpg`

Images are sorted alphabetically by filename in the slideshow.

## Notes

- No build step required — drop files, push, Vercel redeploys automatically.
- The slideshow lazy-loads images and preloads the next slide.
- If this directory is empty, the site shows a "coming soon" state.
