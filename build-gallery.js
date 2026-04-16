const fs = require("fs");
const path = require("path");

const dir = path.join(__dirname, "public", "gallery");
const exts = [".jpg", ".jpeg", ".png", ".webp"];

let manifest = [];

if (fs.existsSync(dir)) {
  const files = fs.readdirSync(dir)
    .filter((f) => exts.includes(path.extname(f).toLowerCase()))
    .sort();

  manifest = files.map((f) => {
    const base = path.basename(f, path.extname(f));
    const captionFile = path.join(dir, base + ".txt");
    const caption = fs.existsSync(captionFile)
      ? fs.readFileSync(captionFile, "utf8").trim()
      : null;
    return { src: "public/gallery/" + f, caption };
  });
}

fs.writeFileSync(
  path.join(__dirname, "gallery.json"),
  JSON.stringify(manifest, null, 2)
);

console.log("gallery.json: " + manifest.length + " image(s)");
