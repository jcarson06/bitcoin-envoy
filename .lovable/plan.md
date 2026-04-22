

## Plan: Full dead code sweep

### Background
Reverse-reachability scan from `App.tsx` and all routed pages. A file is "dead" only if nothing reachable from the app entry imports it.

### Files to delete

**App-level dead code (4 files)**
- `src/components/LottieAnimation.tsx` — never imported
- `src/components/common/AnimatedCard.tsx` — never imported
- `src/components/common/Chip.tsx` — never imported
- `src/hooks/useScrollToTop.ts` — duplicate of the active `src/components/ScrollToTop.tsx`; never imported

**Unused shadcn UI components (34 files)**

Directly unused:
`alert-dialog`, `alert`, `aspect-ratio`, `avatar`, `breadcrumb`, `calendar`, `carousel`, `chart`, `checkbox`, `collapsible`, `command`, `context-menu`, `drawer`, `dropdown-menu`, `form`, `hover-card`, `input-otp`, `menubar`, `navigation-menu`, `pagination`, `popover`, `progress`, `radio-group`, `resizable`, `scroll-area`, `select`, `sidebar`, `slider`, `switch`, `table`, `tabs`, `textarea`, `toggle-group`

Transitively dead once the above are removed:
- `sheet.tsx` — only consumed by the unused `sidebar`
- `toggle.tsx` — only consumed by the unused `toggle-group`

Re-export shim that becomes pointless:
- `src/components/ui/use-toast.ts` — just re-exports from `@/hooks/use-toast`; nothing in `src/` imports it (the hook is imported directly)

### Components verified KEPT (in active use)
`button`, `card`, `accordion`, `badge`, `dialog`, `separator`, `skeleton`, `sonner`, `toast`, `toaster`, `tooltip`, `input`, `label`, plus the hook `src/hooks/use-toast.ts`.

### npm dependencies to remove from `package.json`

Truly unreferenced in source:
- `date-fns`
- `zod`
- `@hookform/resolvers`

Removed because their only consumer was a deleted UI component:
- `@radix-ui/react-alert-dialog` (alert-dialog)
- `@radix-ui/react-aspect-ratio` (aspect-ratio)
- `@radix-ui/react-avatar` (avatar)
- `@radix-ui/react-checkbox` (checkbox)
- `@radix-ui/react-collapsible` (collapsible)
- `@radix-ui/react-context-menu` (context-menu)
- `@radix-ui/react-dropdown-menu` (dropdown-menu)
- `@radix-ui/react-hover-card` (hover-card)
- `@radix-ui/react-menubar` (menubar)
- `@radix-ui/react-navigation-menu` (navigation-menu)
- `@radix-ui/react-popover` (popover)
- `@radix-ui/react-progress` (progress)
- `@radix-ui/react-radio-group` (radio-group)
- `@radix-ui/react-scroll-area` (scroll-area)
- `@radix-ui/react-select` (select)
- `@radix-ui/react-slider` (slider)
- `@radix-ui/react-switch` (switch)
- `@radix-ui/react-tabs` (tabs)
- `@radix-ui/react-toggle` + `@radix-ui/react-toggle-group` (toggle/toggle-group)
- `react-day-picker` (calendar)
- `react-hook-form` (form)
- `embla-carousel-react` (carousel)
- `recharts` (chart)
- `cmdk` (command)
- `input-otp` (input-otp)
- `vaul` (drawer)
- `react-resizable-panels` (resizable)

KEEP: `tailwindcss-animate` (referenced in `tailwind.config.ts`), all radix packages backing the kept UI components, `react-helmet-async`, `react-router-dom`, `react`, `react-dom`, `@tanstack/react-query`, `tailwind-merge`, `clsx`, `class-variance-authority`, `lucide-react`, `next-themes`, `sonner`, `lottie-react` (used by `index.css`/elsewhere — actually let me note: `lottie-react` was only used by the deleted `LottieAnimation.tsx`, so it can also be removed).

Adding to removal list:
- `lottie-react`

### Impact
- ~38 files deleted, ~30 npm packages removed.
- No runtime behavior changes — every removed item is verified unreachable from `App.tsx`.
- Smaller install, faster `npm install`, cleaner search results, fewer audit false positives.
- Single deletion pass; if shadcn components are needed later, `npx shadcn@latest add <name>` recreates them.

### Verification step after changes
Build the project (`vite build`) to confirm no broken imports. If anything fails, restore that one file/dep.

