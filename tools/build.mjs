/*! Earthling Field Guide | (c) 2026 J.E. Lynch | All rights reserved | EFG-JEL-VWZSHV */
/* Makes the scrambled public copy of the game in the "dist" folder.
   Your readable files are never changed. Run through publish.sh. */
import { readdir, readFile, writeFile, mkdir, copyFile, rm } from "node:fs/promises";
import { join, dirname, extname } from "node:path";
import { fileURLToPath } from "node:url";
import { minify } from "terser";
import { minify as minifyHTML } from "html-minifier-terser";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const OUT = join(ROOT, "dist");
// Never copied to the public site: private notes, tools, old versions, zips.
const SKIP = new Set([".git", ".gitignore", ".DS_Store", "dist", "tools", "notes",
  "publish.sh", "previous_version_v32", "keystone-game_V1", "BioFlashCards.html"]);
// Third-party files copied exactly as they are (their license notices must stay).
const KEEP_AS_IS = new Set(["GLTFLoader.js"]);

const jsOptions = {
  compress: { passes: 2 },
  mangle: true,              // short meaningless names inside each file
  format: { comments: /^!/ } // keeps the /*! J.E. Lynch signature */ lines
};

async function walk(dir, rel = "") {
  for (const ent of await readdir(dir, { withFileTypes: true })) {
    if (SKIP.has(ent.name) || ent.name.endsWith(".zip")) continue;
    const src = join(dir, ent.name), relPath = join(rel, ent.name), dst = join(OUT, relPath);
    if (ent.isDirectory()) { await mkdir(dst, { recursive: true }); await walk(src, relPath); continue; }
    const ext = extname(ent.name).toLowerCase();
    if (ext === ".js" && !KEEP_AS_IS.has(ent.name)) {
      const r = await minify(await readFile(src, "utf8"), jsOptions);
      await writeFile(dst, r.code);
    } else if (ext === ".html") {
      const html = await minifyHTML(await readFile(src, "utf8"), {
        collapseWhitespace: true, removeComments: true,
        minifyCSS: true, minifyJS: jsOptions
      });
      await writeFile(dst, html);
    } else {
      await copyFile(src, dst);
    }
    console.log("  " + relPath);
  }
}

await rm(OUT, { recursive: true, force: true });
await mkdir(OUT, { recursive: true });
console.log("Making the scrambled copy:");
await walk(ROOT);
console.log("Done. Scrambled copy is in the dist folder.");
