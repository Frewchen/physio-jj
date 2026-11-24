// Erzeugt aus dem Build (dist/) eine Offline-Vorschau zum Öffnen per Doppelklick.
// Jede Seite wird zu EINER eigenständigen HTML-Datei: CSS, Schriften und Bilder sind eingebettet.
// Aufruf: npm run vorschau  →  vorschau/index.html
import { readFile, writeFile, mkdir, rm } from "node:fs/promises";
import { extname, join } from "node:path";

const DIST = "dist";
const ZIEL = "vorschau";

const seiten = {
  "index.html": "index.html",
  "impressum/index.html": "impressum.html",
  "datenschutz/index.html": "datenschutz.html",
};

const mime = {
  ".woff2": "font/woff2",
  ".webp": "image/webp",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".svg": "image/svg+xml",
};

const cache = new Map();
async function dataUri(pfad) {
  if (!cache.has(pfad)) {
    const daten = await readFile(join(DIST, pfad));
    cache.set(pfad, `data:${mime[extname(pfad)]};base64,${daten.toString("base64")}`);
  }
  return cache.get(pfad);
}

async function ersetzeAsync(text, regex, fn) {
  const treffer = [...text.matchAll(regex)];
  const werte = await Promise.all(treffer.map((m) => fn(...m)));
  let i = 0;
  return text.replace(regex, () => werte[i++]);
}

async function css(pfad) {
  let inhalt = await readFile(join(DIST, pfad), "utf8");
  // Nur lateinische Schriftschnitte behalten (Kyrillisch usw. wird nicht gebraucht).
  inhalt = inhalt.replace(/@font-face\{[^}]*\}/g, (block) =>
    /-(latin|latin-ext)-/.test(block) ? block : "",
  );
  // .woff-Fallbacks entfernen, .woff2 einbetten.
  inhalt = inhalt.replace(/,\s*url\([^)]*\.woff\)\s*format\("woff"\)/g, "");
  return ersetzeAsync(inhalt, /url\((\/[^)]+\.woff2)\)/g, async (_, p) => `url(${await dataUri(p)})`);
}

function links(html) {
  return html
    .replace(/href="\/(impressum|datenschutz)\/(#[^"]*)?"/g, (_, s, h = "") => `href="${s}.html${h}"`)
    .replace(/href="\/(#[^"]*)?"/g, (_, h = "") => `href="index.html${h}"`);
}

await rm(ZIEL, { recursive: true, force: true });
await mkdir(ZIEL, { recursive: true });

for (const [quelle, ziel] of Object.entries(seiten)) {
  let html = await readFile(join(DIST, quelle), "utf8");

  html = await ersetzeAsync(
    html,
    /<link rel="stylesheet" href="(\/_astro\/[^"]+\.css)">/g,
    async (_, p) => `<style>${await css(p)}</style>`,
  );
  html = await ersetzeAsync(html, /(src|href)="(\/(?:_astro\/)?[^"]+\.(?:webp|png|jpg|svg))"/g, async (_, attr, p) => `${attr}="${await dataUri(p)}"`);
  html = await ersetzeAsync(html, /srcset="([^"]+)"/g, async (_, set) => {
    const teile = await Promise.all(
      set.split(",").map(async (t) => {
        const [url, d] = t.trim().split(/\s+/);
        return `${url.startsWith("/") ? await dataUri(url) : url} ${d}`;
      }),
    );
    return `srcset="${teile.join(", ")}"`;
  });
  html = links(html);
  html = html.replace("<body>", '<body><div style="position:fixed;bottom:12px;left:12px;z-index:999;background:#1b1717;color:#fff;font:500 12px/1 system-ui;padding:8px 12px;border-radius:999px;opacity:.85">Vorschau – nicht veröffentlicht</div>');

  await writeFile(join(ZIEL, ziel), html);
  console.log(`${ZIEL}/${ziel}  ${(html.length / 1024).toFixed(0)} KB`);
}
