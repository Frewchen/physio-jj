# physiotherapie-jasinski.de

Website der Praxis Physiotherapie Jeannette Jasinski, gebaut mit [Astro](https://astro.build) und statisch gehostet auf GitHub Pages.

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # Ausgabe in dist/
```

- `src/pages/` – Seiten (aktuell: Baustellen-Startseite)
- `src/data/praxis.ts` – Adresse, Telefon, Leistungen (zentral gepflegt)
- `public/CNAME` – eigene Domain für GitHub Pages
- `reference/entwurf-v1.html` – erster Entwurf der vollständigen Website (wird nicht veröffentlicht)

Deployment: Jeder Push auf `main` baut und veröffentlicht die Seite über `.github/workflows/deploy.yml`.
