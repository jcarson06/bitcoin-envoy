## Problem

Sub-pages (`/faq`, `/coaching`, `/about`, `/learn`) prerender as the loading spinner / homepage shell instead of their real content.

Root cause: `src/App.tsx` wraps `Learn`, `FAQ`, `Coaching`, and `About` in `React.lazy()` + `<Suspense fallback={<PageLoader />}>`. When react-snap visits `/faq`:

1. Puppeteer loads `/faq` → React boots → router matches `/faq` → triggers a **dynamic `import()`** for the FAQ chunk.
2. While the chunk is loading, the rendered DOM is just the `PageLoader` spinner.
3. react-snap's puppeteer environment frequently fails to resolve those dynamic chunk requests reliably (the dev `gptengineer.js` script and chunk URLs can stall), so the snapshot freezes on the spinner — which visually looks empty / like a fallback to the homepage shell after hydration.
4. On the user's browser the spinner snapshot then hydrates and the client-side router eventually loads the real page, but crawlers only see the spinner HTML.

`Index`, `PrivacyPolicy`, and `TermsOfService` are imported eagerly, which is why the homepage does prerender correctly.

## Fix

Eagerly import every route that we want prerendered, so the route's full content is in the synchronous render tree and gets captured by react-snap.

### Changes

**1. `src/App.tsx`** — remove `React.lazy` for the four prerendered routes. Keep `Suspense` only if needed (it can be removed entirely since no route is lazy anymore).

```ts
import Learn from "./pages/Learn";
import FAQ from "./pages/FAQ";
import Coaching from "./pages/Coaching";
import About from "./pages/About";
// remove: const Learn = lazy(...) etc.
// remove: <Suspense fallback={<PageLoader />}> wrapper
```

The Vite build still code-splits per route via its own chunking heuristics, but the route components are part of the main entry graph so they're available synchronously at first paint — which is what react-snap needs.

**2. `package.json` `reactSnap` config** — tighten settings to make snapshots deterministic:

- Lower `waitFor` to `2000` (no longer waiting on dynamic imports).
- Add `"crawl": false` so react-snap only renders the explicit `include` list (prevents accidental crawling that overwrites files).
- Add `"skipThirdPartyRequests": true` to avoid puppeteer hanging on Calendly / fonts / `gptengineer.js`.

**3. Verification (run after build)**

```bash
npm run build
grep -c "Frequently Asked" dist/faq/index.html        # expect >=1
grep -c "Bitcoin Coaching" dist/coaching/index.html   # expect >=1
grep -c "Jeffrey Carson" dist/about/index.html        # expect >=1
grep -c "What Is Bitcoin" dist/learn/index.html       # expect >=1
```

Each sub-page's HTML should contain its own section text, not just the spinner.

## Out of scope

- Keeping lazy loading for prerendered routes (incompatible with snapshotting without an SSR runtime).
- Switching off react-snap to a different SSG tool — current setup works once lazy is removed.
