# Bitcoin Envoy

Source for [bitcoinenvoy.co](https://www.bitcoinenvoy.co) — free Bitcoin
education for beginners. The site teaches the most important Bitcoin
fundamentals in about an hour, with no jargon and no technical background
required.

It is a static, prerendered marketing and education site. There are no user
accounts, no login, no database, and no backend API. It does not take payments
and never asks for wallet keys or seed phrases.

## Stack

Vite · React 18 · TypeScript · React Router · Tailwind CSS · shadcn/ui

## Getting started

Requires Node.js 20+.

```sh
npm install
npm run dev
```

## Scripts

| Script | What it does |
| --- | --- |
| `npm run dev` | Vite dev server with hot reload |
| `npm run build` | Full production build — see below |
| `npm run lint` | ESLint across the project |
| `npm run typecheck` | `tsc -b`, no emit |
| `npm run preview` | Serve the built `dist/` locally |

## How the build works

`npm run build` is three steps, in order:

1. `vite build` — the client bundle.
2. `vite build --ssr src/entry-server.tsx` — an SSR bundle into `dist/server`.
3. `node scripts/prerender.mjs` — renders each route to static HTML.

The prerender step is the reason this project doesn't use a plain SPA build.
Six routes — `/`, `/learn`, `/faq`, `/about`, `/privacy-policy`, and
`/terms-of-service` — are written to disk as real HTML with their content and
`<head>` tags already in place, so crawlers and link unfurlers see each page's
actual content without executing JavaScript. `public/_redirects` then serves
those files directly, and unknown paths fall back to the SPA shell with a
genuine 404 status rather than a soft 404.

## Deploys

Netlify builds and deploys from `main` automatically. Build settings live in
the Netlify dashboard; there is no `netlify.toml`.

GitHub Actions (`.github/workflows/ci.yml`) runs lint → typecheck → build and
verifies all six prerendered routes emitted, so a break fails in CI before
Netlify ships it. Response headers, including the Content-Security-Policy, are
set in `public/_headers`.

## Security

Please report vulnerabilities privately — see [SECURITY.md](SECURITY.md). The
same contact is published at
[/.well-known/security.txt](https://www.bitcoinenvoy.co/.well-known/security.txt).

## License

[MIT](LICENSE) © Jeffrey Carson.

The license covers the code. The written Bitcoin education content and the
Bitcoin Envoy name and branding remain the author's — please don't republish
the articles wholesale or present the brand as your own.
