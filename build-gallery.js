const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const dir = path.join(__dirname, "public", "gallery");
const rejectedDir = path.join(dir, "rejected");
const exts = [".jpg", ".jpeg", ".png", ".webp"];

function hashFile(filePath) {
  const buf = fs.readFileSync(filePath);
  return crypto.createHash("sha256").update(buf).digest("hex");
}

let manifest = [];
let rejectedDupes = [];

if (fs.existsSync(dir)) {
  if (!fs.existsSync(rejectedDir)) fs.mkdirSync(rejectedDir, { recursive: true });

  const files = fs.readdirSync(dir)
    .filter((f) => exts.includes(path.extname(f).toLowerCase()))
    .sort();

  const seen = new Map();
  const kept = [];

  for (const f of files) {
    const src = path.join(dir, f);
    const hash = hashFile(src);
    if (seen.has(hash)) {
      const dest = path.join(rejectedDir, f);
      fs.renameSync(src, dest);
      const capSrc = path.join(dir, path.basename(f, path.extname(f)) + ".txt");
      if (fs.existsSync(capSrc)) {
        fs.renameSync(capSrc, path.join(rejectedDir, path.basename(capSrc)));
      }
      rejectedDupes.push({ duplicate: f, original: seen.get(hash) });
      continue;
    }
    seen.set(hash, f);
    kept.push(f);
  }

  manifest = kept.map((f) => {
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
if (rejectedDupes.length) {
  console.log("rejected " + rejectedDupes.length + " duplicate(s):");
  for (const d of rejectedDupes) {
    console.log("  " + d.duplicate + " (dupe of " + d.original + ")");
  }
}
