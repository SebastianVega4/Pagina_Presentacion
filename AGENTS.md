# AGENTS.md

## Stack
- **Angular 22** standalone (no `NgModule`), **TypeScript 6**, **CSS** (no Tailwind)
- **HashLocationStrategy** — all routes are `/#/foo` (required for GitHub Pages SPA compat)
- **vitest** via `@angular/build:unit-test` (no Karma/Jasmine)
- **No SSR**, no Angular Universal

## Routes
| Path | Component | Description |
|------|-----------|-------------|
| `/` | `Portfolio` (lazy) | Hero + About + Skills + Projects + Contact |
| `/links` | `Links` (lazy) | Linktree-style social links page |

## Commands
```sh
npm start          # ng serve (dev)
npm run build      # ng build (production, output → dist/browser/)
npm test           # ng test (vitest)
npm run deploy     # build + publish to GitHub Pages via angular-cli-ghpages
```

## Key files
- `public/CNAME` — custom domain `SebastianVega.site` (copied verbatim to build output)
- `public/CV_SebastianVega.pdf` — CV available at `/CV_SebastianVega.pdf`
- `src/app/app.routes.ts` — all route definitions
- `src/app/app.config.ts` — providers (router with hash location)
- `src/index.html` — `<base href="/">`, Google Fonts (Courgette + Inter)

## Conventions
- **Standalone components only** — never create `NgModule` classes
- **CSS only** — no Tailwind, SCSS, or CSS-in-JS
- Lazy-load every route via `loadComponent` in `app.routes.ts`
- Color scheme: background `#0e0e0e`, accent `#5bd5df`, shadow `#0f7f87`

## Deploy
1. `npm run build`
2. Push `dist/browser/` content to GitHub Pages (or use `npm run deploy`)
3. GitHub Pages repo settings must point custom domain `SebastianVega.site`
