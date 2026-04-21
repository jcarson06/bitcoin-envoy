

## Plan: Delete unused `useDebounce` hook

### Change
Delete the file `src/hooks/useDebounce.ts`.

### Why
- The file is not imported anywhere in the project (verified — no references in `src/`).
- It contains a TypeScript error (`NodeJS.Timeout` is a Node-only type, and this is a browser project) that's currently breaking the build.
- It's a 12-line generic utility that can be trivially recreated or replaced with a library if ever needed.

### Impact
- Build error goes away.
- No runtime behavior changes (file was unused).
- No other files need to be modified.

