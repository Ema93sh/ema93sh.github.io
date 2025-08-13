# Personal site

This site is built with [Next.js](https://nextjs.org) and Tailwind CSS.

All resume content lives in [`src/data/resume.ts`](src/data/resume.ts). Update that file to refresh the site with new experience, projects, or education.

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Export

```bash
npm run export
```

The `deploy` GitHub Actions workflow builds and exports the site on each push to `main`, then publishes the static files from `out/` to GitHub Pages.
