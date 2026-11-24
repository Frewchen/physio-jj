// @ts-check
import { defineConfig } from "astro/config";

// Statisch gehostet auf GitHub Pages unter der eigenen Domain (siehe public/CNAME).
// Für die nicht öffentliche Vorschau wird mit BASE=/<geheimer-ordner>/ in einen Unterordner gebaut.
export default defineConfig({
  site: "https://physiotherapie-jasinski.de",
  base: process.env.BASE || "/",
});
