## Plan (COMPLETED — this work shipped; kept for historical context)

Replace `react-snap` with a deterministic Vite SSR + static-render pipeline.

### Steps

1. **Remove react-snap**
   - Delete the `postbuild` script.
   - Delete the `reactSnap` config block in `package.json`.
   - Remove `react-snap` from devDependencies.

2. **Refactor App for dual routing**
   - Change `src/App.tsx` so it accepts a `Router` prop (or split into `<AppRoutes/>`).
   - `src/main.tsx` mounts with `BrowserRouter`.
   - New `src/entry-server.tsx` renders with `StaticRouter` from `react-router-dom/server`, wrapped in `HelmetProvider` with a server `helmetContext`.

3. **SEO component SSR safety**
   - `useLayoutEffect` already guards `typeof document`. Switch to `useEffect` to avoid SSR warnings; rely on react-helmet-async's server output during prerender (Helmet already includes the same tags).
   - Keep client-side DOM mutation for runtime navigation.

4. **Prerender script** (`scripts/prerender.mjs`)
   - Read `dist/index.html` template.
   - For each route, import `dist/server/entry-server.js`, render to string, extract Helmet head tags, and inject into the template's `<head>` and `<div id="root">`.
   - Write to `dist/<route>/index.html` (and `dist/index.html` for `/`).
   - Routes: `/`, `/learn`, `/faq`, `/about`, `/privacy-policy`, `/terms-of-service`.

5. **Verify**
   - Run `npm run build`.
   - Cat `dist/faq/index.html` and `dist/about/index.html` and show their rendered body content.