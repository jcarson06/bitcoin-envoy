## Goal

Convert the site so each route (`/`, `/learn`, `/faq`, `/coaching`, `/about`, `/privacy-policy`, `/terms-of-service`) is published as a fully-rendered HTML file. Search engine and AI crawlers will see the complete content — headings, paragraphs, links, FAQ schema — without executing any JavaScript. React still hydrates on top for interactivity (mobile menu, smooth scroll, accordion).

## Approach: Prerendering via `vite-plugin-prerender-spa` style flow

Since this is a pure static marketing site (no auth, no per-user data, no API calls), the cleanest fit is **build-time prerendering**, not a framework migration. We keep Vite + React Router exactly as-is and add a post-build step that:

1. Runs the normal `vite build` to produce the SPA bundle in `dist/`.
2. Boots a headless renderer that loads each route, waits for React to finish, then snapshots the resulting HTML.
3. Writes `dist/index.html`, `dist/learn/index.html`, `dist/faq/index.html`, etc. — each containing the full markup plus the existing `<script>` tags that hydrate React on the client.

We will use **`react-snap`** (or equivalently a small custom Puppeteer script) wired into a `postbuild` npm script. `react-snap` is the de-facto standard for this exact pattern with Vite + React Router + react-helmet-async, and it correctly handles `<Helmet>` tags, lazy-loaded routes (via `Suspense`), and hash links.

### Why not Next.js / Astro / vite-ssg?
- Next.js / Astro = full framework migration. Out of scope and risky.
- `vite-ssg` requires switching to its own router setup. Workable but invasive.
- `react-snap` is drop-in: zero source changes required for content to appear in HTML; just add the package + a build script.

## Changes

### 1. Add dependency
- `react-snap` (devDependency).
- Puppeteer (its peer dep) downloads Chromium during install.

### 2. `package.json` scripts
```json
"build": "vite build && react-snap",
"postbuild": "react-snap"
```
Plus a `reactSnap` config block listing every route to crawl:
```json
"reactSnap": {
  "source": "dist",
  "include": ["/", "/learn", "/faq", "/coaching", "/about", "/privacy-policy", "/terms-of-service"],
  "puppeteerArgs": ["--no-sandbox", "--disable-setuid-sandbox"],
  "inlineCss": false,
  "minifyHtml": { "collapseWhitespace": true, "removeComments": true }
}
```

### 3. Hydration entry point (`src/main.tsx`)
Switch from `createRoot(...).render(...)` to:
```ts
const root = document.getElementById("root")!;
if (root.hasChildNodes()) {
  hydrateRoot(root, <App />);
} else {
  createRoot(root).render(<App />);
}
```
This lets the prerendered HTML be reused on the client instead of being thrown away.

### 4. Guard browser-only code
Audit and wrap any direct `window` / `document` access that runs during render so it doesn't crash the headless prerender:
- `src/components/SEO.tsx` already uses `typeof window !== 'undefined'` — fine.
- `src/main.tsx` `window.addEventListener('beforeunload', ...)` — already top-level after render, runs only in browser, but we'll move it behind a `typeof window` check for safety during the snapshot.
- `useScrollToSection`, `useThrottledScroll`, `useOptimizedIntersectionObserver` — confirm all DOM access is inside `useEffect` (which doesn't fire during SSR/prerender). Quick read-through; add guards if any escape.
- `IndexIntro`, `IndexCTA`, `IndexDollarHistory`, `Navbar` — verify `useState`/`useEffect` patterns are SSR-safe.

### 5. Static asset paths
`public/robots.txt`, `public/llms.txt`, `public/logo.svg`, favicon, fonts — already copied verbatim by Vite. No change.

### 6. Verify after build
Run `npm run build`, then for each route inspect `dist/<route>/index.html`:
- Confirm headings, body copy, FAQ Q&A text, About bio, pricing, footer all appear as plain HTML.
- Confirm the `<title>`, meta description, OG tags, and JSON-LD from `<SEO>` are present in `<head>` (react-helmet-async + react-snap supports this).
- Confirm `<script type="module" src="/assets/index-*.js">` is still there so the client hydrates.

Spot-check with `curl https://bitcoinenvoy.co/learn` (after deploy) and "View Page Source" — content should be visible without JS.

### 7. Hosting note
Lovable's static hosting already serves `dist/<route>/index.html` for `/route` requests, so no rewrite rule changes needed. Existing `_redirects`/SPA fallback continues to work for unknown routes (NotFound).

## What this does NOT change

- No source-level rewrite of any page or component.
- No router change — `react-router-dom` stays.
- No styling, copy, or behavior change.
- All current interactivity (mobile nav, accordions, Calendly embed, smooth scroll) keeps working after hydration.

## Result

- Every page's full content is in the initial HTML response.
- Google, Bing, GPTBot, ClaudeBot, PerplexityBot etc. (already allowed in your `robots.txt`) can index the content without running JS.
- Page load is also faster (content paints before JS parses).
- Build time increases by ~10–30s for the prerender step.
