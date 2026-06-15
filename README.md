# yuval-site

Personal site for Yuval Tserlin, guitar teacher.

## Quick start

```bash
npm install && npm run dev
```

## Build

```bash
npm run build
```

Output is written to `dist/`.

## Planning docs

The brief, plan, design tokens, and revision notes live in [`docs/`](docs/):

- [`docs/brief.md`](docs/brief.md) — project brief (authoritative source of intent)
- [`docs/PLAN.md`](docs/PLAN.md) — sitemap, wireframes, components, deploy plan
- [`docs/design-tokens.md`](docs/design-tokens.md) — color, type, spacing, breakpoints
- [`docs/revision-1.md`](docs/revision-1.md) — revision notes

## Brand-defining files

The visual identity is defined in two places that must stay in sync:

- [`src/styles/global.css`](src/styles/global.css) — the implemented design tokens (Tailwind v4 `@theme` + `:root`)
- [`docs/design-tokens.md`](docs/design-tokens.md) — the spec those tokens implement

## Deploy

Cloudflare Pages, static output, served from `*.pages.dev` (no custom domain).
Build command `npm run build`, output directory `dist`.
