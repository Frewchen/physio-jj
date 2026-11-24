# physiotherapie-jasinski.de

Website der Praxis Physiotherapie Jeannette Jasinski, gebaut mit [Astro](https://astro.build) und statisch gehostet auf GitHub Pages.

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # Ausgabe in dist/
npm run vorschau # Offline-Vorschau in vorschau/index.html (per Doppelklick öffnen)
```

- `src/pages/` – Seiten (Startseite, Impressum, Datenschutz)
- `src/components/` – Kopfzeile, Fußzeile, Icons, E-Mail-Link
- `src/data/inhalte.ts` – Texte: Leistungen, Beschwerden, Ablauf (Stellen mit „PRÜFEN“ bestätigen lassen)
- `src/data/praxis.ts` – Adresse, Telefon, Leistungen (zentral gepflegt)
- `public/CNAME` – eigene Domain für GitHub Pages
- `reference/entwurf-v1.html` – erster Entwurf der vollständigen Website (wird nicht veröffentlicht)

Deployment: Jeder Push auf `main` baut und veröffentlicht die Seite über `.github/workflows/deploy.yml`.
