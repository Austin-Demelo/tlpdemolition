# TLP Demolition — single-page site

## Run locally

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

`npm run build` outputs static files to `dist/` — you can deploy that
folder to any static host (Netlify, Vercel, S3, GitHub Pages, etc.).

## Structure

```
tlp-demolition/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx            # React entry point
    └── TLPDemolition.jsx   # the site itself
```

## Notes

- All logo, project, and contact-info content is placeholder — swap it
  out in `src/TLPDemolition.jsx`.
- Fonts (Oswald, Inter, IBM Plex Mono) load from Google Fonts via an
  `@import` in the component's `<style>` block. If you're offline, swap
  those font-family values for system fonts.
- The contact form is UI-only (no backend wired up yet) — it just shows
  a confirmation message on submit.
