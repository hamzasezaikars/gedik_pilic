import sharp from "sharp";
import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
async function walk(dir) {
  let files = [];
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) files.push(...(await walk(p)));
    else files.push(p);
  }
  return files;
}
const images = (await walk("public/images")).filter((p) =>
  /\.(jpg|png)$/i.test(p),
);
const replacements = [];
for (const file of images) {
  const dest = file.replace(/\.(jpg|png)$/i, ".webp");
  await sharp(file)
    .resize({
      width: file.includes("hero") ? 1600 : 1000,
      withoutEnlargement: true,
    })
    .webp({ quality: 84 })
    .toFile(dest);
  replacements.push([
    file.replaceAll("\\", "/").replace("public", ""),
    dest.replaceAll("\\", "/").replace("public", ""),
  ]);
}
for (const root of ["app", "components", "data"])
  for (const file of await walk(root)) {
    if (!/\.(tsx|ts)$/.test(file)) continue;
    let content = await readFile(file, "utf8");
    for (const [from, to] of replacements)
      content = content.replaceAll(from, to);
    await writeFile(file, content);
  }
console.log(`Optimized ${images.length} image assets.`);
