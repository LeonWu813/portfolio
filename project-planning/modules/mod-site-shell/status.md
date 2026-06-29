# Site Shell (Layout, Sidebar, Nav, Footer, Dark Mode) Status

## Engineering Progress

### 2026-06-28 — implementation complete

**Files created / modified:**
- `site/app/globals.css` — removed `@import url()` Google Fonts line; added `@variant dark (&:where(.dark, .dark *));`; updated `--font-sans` to use `var(--font-roboto)`; removed hardcoded font-family from html/body rules
- `site/app/layout.tsx` — replaced Geist/Geist_Mono with Roboto via `next/font/google` (weights 400/500/700, variable `--font-roboto`); added blocking inline `<script>` via `dangerouslySetInnerHTML` as first child of `<html>` for dark mode hydration prevention; wired Sidebar + footer into layout
- `site/components/Sidebar.tsx` — Client Component; fixed desktop sidebar (w-56) + mobile off-canvas drawer with hamburger toggle; wordmark "Leon", NavLinks with active state, ConnectLinks (LinkedIn, GitHub, Email) with `target="_blank" rel="noopener noreferrer"`, ThemeToggle
- `site/components/ThemeToggle.tsx` — Client Component; lazy `useState` initializer reads current DOM class; toggles `dark` class on `document.documentElement` and writes to `localStorage`
- `site/app/projects/[slug]/page.tsx` — placeholder with `dynamicParams = false`, `generateStaticParams` returning all three slugs, awaited `params: Promise<{ slug: string }>`
- `site/app/projects/page.tsx` — stub
- `site/app/page.tsx` — stub (replaces scaffold default)
- `site/app/about/page.tsx`, `contact/page.tsx`, `experience/page.tsx`, `skills/page.tsx` — stubs for other modules to replace

**Scaffold cleanup completed:**
1. Geist/Geist_Mono imports removed from layout.tsx ✓
2. `@import url()` Google Fonts removed from globals.css ✓
3. Static project directories deleted; single `[slug]` dynamic route created ✓
4. `@variant dark` registered in globals.css ✓
5. Blocking inline theme script added to layout.tsx ✓

**Self-check results:**
- `npm run lint` — PASS (0 errors, 0 warnings)
- `npm run build` — PASS; 12 routes generated (/, /about, /contact, /experience, /projects, /skills, /projects/[slug] × 3 slugs, /_not-found)
- All AC requirements met at shell level; browser-only ACs (AC-001 to AC-005) require QA visual verification

## QA Results

*(No entries yet.)*
