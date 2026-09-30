import { readFile, writeFile } from "node:fs/promises";
import sharp from "sharp";
const map = JSON.parse(await readFile("data/product-assets.json", "utf8"));
const files = [...new Set(Object.values(map))];
for (let i = 0; i < files.length; i += 4) {
  await Promise.all(
    files.slice(i, i + 4).map(async (file) => {
      const r = await fetch(`https://gedikpilic.com/storage/files/${file}`);
      if (!r.ok) throw Error(`${file}: ${r.status}`);
      const buffer = Buffer.from(await r.arrayBuffer());
      await sharp(buffer)
        .resize({ width: 700, withoutEnlargement: true })
        .webp({ quality: 82 })
        .toFile(`public/images/products/${file.replace(/\.[^.]+$/, ".webp")}`);
    }),
  );
  console.log(`Downloaded ${Math.min(i + 4, files.length)}/${files.length}`);
}
await writeFile(
  "public/images/products/SOURCES.json",
  JSON.stringify(
    Object.fromEntries(
      Object.entries(map).map(([name, file]) => [
        name,
        `https://gedikpilic.com/storage/files/${file}`,
      ]),
    ),
    null,
    2,
  ),
);
