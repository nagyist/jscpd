# @jscpd/core

## 4.1.1

### Patch Changes

- Update hash function, improve performance and keep browser support

Core types, interfaces, events, and utilities shared across all jscpd packages. This package defines the fundamental data structures — clones, tokens, source files, stores, and reporters — that everything else is built on.

---

## [4.1.0](https://www.npmjs.com/package/@jscpd/core/v/4.1.0) — 2026-05-09

### Changes

- Updated to align with the monorepo's 4.1.0 release. No breaking API changes.
- Tokenizer performance improvements flow through core types (lazy grammar loading, O(n) hot paths) via the updated `@jscpd/tokenizer` dependency.
- CI now tests against Node.js 22.x and 24.x; Node.js 20.x dropped.

### Dependency Updates

- `@jscpd/tokenizer` → 4.1.0

---

## [4.0.5](https://www.npmjs.com/package/@jscpd/core/v/4.0.5) — 2026-04-10

### Changes

- Aligned with the AI reporter release cycle. No core API changes.

### Dependency Updates

- `@jscpd/tokenizer` → 4.0.5

---

## [4.0.4](https://www.npmjs.com/package/@jscpd/core/v/4.0.4) — 2026-01-30

### Changes

- Aligned with the MCP server and GDScript support release. No core API changes.

### Dependency Updates

- `@jscpd/tokenizer` → 4.0.4

---

## [4.0.3](https://www.npmjs.com/package/@jscpd/core/v/4.0.3) — 2026-01-11

### Bug Fixes

- Fixed an issue with the build output.

### Dependency Updates

- `@jscpd/tokenizer` → 4.0.3

---

## [4.0.2](https://www.npmjs.com/package/@jscpd/core/v/4.0.2) — 2026-01-11

### Changes

- Merged several community pull requests; minor housekeeping.

### Dependency Updates

- `@jscpd/tokenizer` → 4.0.2

---

## [4.0.1](https://www.npmjs.com/package/@jscpd/core/v/4.0.1) — 2024-05-26

### Changes

- First public release of `@jscpd/core` as a standalone versioned package under the v4 monorepo.

### Dependency Updates

- `@jscpd/tokenizer` → 4.0.1

---

## [4.0.0](https://www.npmjs.com/package/@jscpd/core/v/4.0.0) — 2024-05-26

### Breaking Changes

- **Monorepo restructure** — the package was extracted from the old monorepo layout into the new `packages/core` location. Import paths are unchanged but the build system has changed from `tsc` to `tsup`, producing clean ESM+CJS dual-mode bundles.
- Test runner migrated from `ava` to **Vitest**.
- Requires **Node.js 18+**.

### Changes

- Cyclic dependency between `@jscpd/core` and `@jscpd/tokenizer` removed.
- Interfaces cleaned up; unused code removed.

---

## [3.3.0-rc.3](https://github.com/kucherenko/jscpd/commit/9f388ff) — 2020-05-02

First release of `@jscpd/core` as a separate package in the monorepo, splitting core functionality out of the main `jscpd` package to enable independent versioning.

- Removed cyclic dependency between core and tokenizer packages.
- Internal imports and interfaces reorganised.
