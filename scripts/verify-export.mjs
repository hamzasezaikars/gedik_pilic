import { readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";
import assert from "node:assert/strict";
const root = path.resolve("out");
async function walk(dir) {
  const result = [];
  for (const item of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, item.name);
    if (item.isDirectory()) result.push(...(await walk(full)));
    else if (item.name.endsWith(".html")) result.push(full);
  }
  return result;
}
const files = await walk(root);
let checked = 0;
const titles = new Set();
for (const file of files) {
  const html = await readFile(file, "utf8");
  assert(html.includes('lang="tr"'), file);
  if (
    !file.endsWith("404.html") &&
    !file.includes(path.sep + "404" + path.sep) &&
    !file.includes("_not-found")
  ) {
    assert(/rel="canonical"/.test(html), `Missing canonical ${file}`);
    assert(/property="og:title"/.test(html), `Missing OG ${file}`);
    const title = html.match(/<title>(.*?)<\/title>/)?.[1];
    assert(title, `Missing title ${file}`);
    assert(!titles.has(title), `Duplicate title: ${title}`);
    titles.add(title);
  }
  assert(
    !/href="\/(admin|login|dashboard|sepet|odeme)/.test(html),
    `Unexpected route ${file}`,
  );
  for (const match of html.matchAll(
    /(?:href|src)="(\/[^"#?]*)(?:[?#][^"]*)?"/g,
  )) {
    const url = match[1];
    if (url.startsWith("//")) continue;
    const target = path.join(root, decodeURIComponent(url));
    let valid = false;
    try {
      valid = (await stat(target)).isFile();
    } catch {}
    if (!valid)
      try {
        valid = (await stat(path.join(target, "index.html"))).isFile();
      } catch {}
    assert(valid, `Broken reference ${url} in ${file}`);
    checked++;
  }
}
console.log(
  `PASS: ${files.length} HTML pages; ${titles.size} unique page metadata; ${checked} internal links/assets; no restricted routes.`,
);
