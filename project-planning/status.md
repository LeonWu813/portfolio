# Project Status — Leon's Portfolio Website

---

## Last Action

```
agent: qa-mod-home/experience/about/skills/contact
mode: verify
module: mod-home/mod-experience/mod-about/mod-skills/mod-contact
result: bugs-found
commit: d2f47364bbb3d3ede4617bb399677863e2887529
timestamp: 2026-06-28T00:00:00Z
```

---

## PM Updates

2026-06-28 — PRD revision 1.2 confirmed by user. PRD covers all nine pages (Home, Projects grid, three Project Detail case studies, Experience, About, Skills, Contact), the persistent sidebar layout, dark mode toggle, SEO/OG metadata, and static Vercel deployment. Content assets (case studies, site copy, experience entries, resume PDF, favicon) are all present in `asset/`. Next.js 16 scaffold exists at `site/`. Status.md created; waiting for Tech Lead Setup Confirmation before tagging [INIT].

2026-06-28 — Tech Lead review confirmed present (Concerns, Recommendations, Approved, Proposed Shared Conventions). Next.js 16 scaffold at `site/` verified. Setup complete per user confirmation. PRD formally initialized. **[INIT]**

**Open items before launch:**
- Domain name: not yet selected. Required for canonical URLs, OG tags, and Vercel domain configuration. Blocking for production deploy.
- OG / social preview image (1200x630px): not yet produced. Non-blocking — affects link preview appearance only.
- Project screenshot(s) for Marketing Analytics detail page: not yet provided. Non-blocking.
- Diagram or demo clip for Multi-Agent System detail page: not yet provided. Non-blocking.
- Screenshot(s) for TabVault detail page: not yet provided. Non-blocking.

---

## Build Config

```
Build: npm run build
Lint:  npm run lint
Test:  (none — static site, no automated test suite defined)
```

*Note: Commands assume execution from the `site/` subdirectory where the Next.js scaffold lives.*

---

## Module Map

| MOD-ID  | Directory                  | Module Name                          |
|---------|----------------------------|--------------------------------------|
| MOD-001 | mod-site-shell             | Site Shell (Layout, Sidebar, Nav, Footer, Dark Mode) |
| MOD-002 | mod-home                   | Home Page                            |
| MOD-003 | mod-projects-grid          | Projects Grid Page                   |
| MOD-004 | mod-project-marketing      | Project Detail: Marketing Analytics  |
| MOD-005 | mod-project-multi-agent    | Project Detail: Multi-Agent System   |
| MOD-006 | mod-project-tabvault       | Project Detail: TabVault             |
| MOD-007 | mod-experience             | Experience Page                      |
| MOD-008 | mod-about                  | About Page                           |
| MOD-009 | mod-skills                 | Skills Page                          |
| MOD-010 | mod-contact                | Contact Page                         |

---

## Tech Lead Reviews

### Review — 2026-06-28 — init

**Concerns** (must address before proceeding):

- **`params` is a Promise in Next.js 16 — breaking API change**: The docs in `node_modules/next/dist/docs/01-app/03-api-reference/03-file-conventions/page.md` confirm that `params` is now `Promise<{ slug: string }>` and must be awaited: `const { slug } = await params`. Every project detail page using a `[slug]` dynamic segment must declare `async function Page({ params }: { params: Promise<{ slug: string }> })` and await params before reading the slug. Treating params as a plain synchronous object (as in Next.js 14 and earlier examples) will cause a TypeScript error or runtime mismatch. This applies to both the page component and any `generateMetadata` function in the same file.

- **`next/image` default loader is incompatible with `output: 'export'`**: The static exports guide confirms the default `next/image` loader is an unsupported feature under `output: 'export'`. If project screenshots or an OG image are added later and use `<Image>`, the build will break unless a custom loader is configured. The recommended resolution is to not use `output: 'export'` at all — see the Deployment recommendation below. This must be decided in MOD-001 before any image component is written.

- **Dark mode hydration flash**: The PRD requires reading `localStorage` and defaulting to `prefers-color-scheme`, then persisting overrides. `localStorage` is a browser-only API — it is not available during server-side rendering. If the `dark` class is applied only inside a `useEffect`, users will see a flash of the wrong theme on every page load. The only reliable fix is a blocking inline `<script>` tag injected into `<html>` before any body content, written as a raw string via `dangerouslySetInnerHTML`. This script must run synchronously before React hydrates — it cannot be wrapped in a React component or a Next.js `<Script>` tag with `strategy="lazyOnload"`. The engineer must add this script directly to `app/layout.tsx` as the first child of `<html>`. Any implementation that relies on `useEffect` alone will produce a visible flash in production.

- **Tailwind v4 dark mode `dark:` utilities require an explicit `@variant` declaration**: The current `globals.css` defines `.dark { ... }` CSS custom property overrides correctly, but that alone does not enable Tailwind's `dark:` prefix utilities. In Tailwind v4 with class-based dark mode, the variant must be explicitly registered: `@variant dark (&:where(.dark, .dark *));` must appear in `globals.css`. Without this line, any `dark:bg-surface` or `dark:text-text-muted` utility class in a component will compile to an empty rule. The custom property overrides and the Tailwind variant registration are two separate concerns — both are required.

- **Google Fonts `@import` in `globals.css` is wrong for App Router and hurts performance**: `globals.css` already contains `@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap")`. This causes a browser-to-Google network request on every page load, is render-blocking until the stylesheet resolves, leaks visitor IPs to Google, and undermines the `>90 Lighthouse` goal. The App Router migration guide explicitly states that `@import` font loading does not work in `app/` and that `next/font` must be used instead. The `@import` line and the `--font-sans` declaration in `@theme inline` must both be removed. Font loading must be moved to `layout.tsx` using `import { Roboto } from 'next/font/google'` with `weight: ['400', '500', '700']`, `subsets: ['latin']`, `display: 'swap'`, and `variable: '--font-roboto'`. The scaffold currently loads `Geist` and `Geist_Mono` — those imports must be deleted entirely.

**Recommendations** (suggested improvements):

- **Do not add `output: 'export'` to `next.config.ts` — deploy to Vercel as a standard Node.js server**: Vercel is already the chosen host. Vercel's native Next.js integration handles App Router deployments with zero configuration and no `output` setting required. All pages will still be statically rendered at build time because they have no dynamic server-side dependencies. Keeping the default output mode means `next/image` works without a custom loader, Image Optimization is available for free on Vercel, and no future capability is foreclosed. Leave `next.config.ts` as is (or add only `reactStrictMode: true`).

- **Collapse the three project detail directories into a single `[slug]` dynamic route**: The scaffold has three empty directories: `app/projects/marketing-analytics/`, `app/projects/multi-agent-system/`, `app/projects/tabvault/`. These must be deleted and replaced with a single `app/projects/[slug]/page.tsx`. `generateStaticParams` returns `projects.map(p => ({ slug: p.detailSlug }))` from the data file. The page awaits params, looks up the matching project record, reads the case study markdown, and renders it. Adding a fourth project later requires only a new data record. Three copies of the same template would be an immediate maintenance burden.

- **Do not install shadcn/ui for the sidebar — build it from scratch**: The sidebar is a fixed `<aside>` on desktop, hidden off-canvas on mobile with a hamburger toggle. This is approximately 50 lines of Tailwind and a single `useState` in a Client Component. No component library is warranted. Installing shadcn/ui adds opinionated component structure and a larger dependency surface for one layout primitive. The portfolio itself is evidence of frontend skill — a hand-built sidebar is a stronger signal than one generated by a CLI tool.

- **Render case study content from the markdown source files, not inline TypeScript strings**: The three case study files are confirmed at `asset/content/case-study-*.md`. Each is multi-section prose (~600-700 words). Embedding that content as TypeScript template literals in a data file creates an unreadable and unmaintainable source. The correct approach is to read the `.md` file from disk in the Server Component using `fs.readFileSync` (resolved via `path.join(process.cwd(), '../asset/content/', filename)`) and parse it with a lightweight library (`marked` is 6KB minified; `remark` is also appropriate). Alternatively, copy the `.md` files into `site/content/` during setup to keep them inside the project root. Either way, the data file's `caseStudyFile` field serves as the file reference. Do not inline the prose as strings.

- **Use the `app/` file conventions for favicon and web manifest — do not use `public/` with manual link tags**: The `asset/favicon_io/` directory contains `favicon.ico`, `apple-touch-icon.png`, and `site.webmanifest`. In Next.js App Router, placing `favicon.ico` and `apple-icon.png` directly in `app/` causes Next.js to generate the correct `<link>` tags automatically, without any manual metadata configuration. Copy these files to `site/app/` rather than `site/public/`. This is the idiomatic Next.js 16 approach documented under file conventions.

- **Serve the resume PDF as a plain `<a download>` link, not `next/link`**: `next/link` performs client-side navigation and will not trigger a file download. Copy `asset/Leon_cv.pdf` to `site/public/Leon_cv.pdf` and link with `<a href="/Leon_cv.pdf" download="Leon_Wu_Resume.pdf">`. The `download` attribute triggers the browser save dialog with a clean filename.

- **Add `dynamicParams: false` as a route segment config export in the `[slug]` page**: With `output` unset (Node server deploy), Next.js will attempt to render unknown slugs on demand if `dynamicParams` is not explicitly set to `false`. Since all valid project slugs are enumerated at build time, set `export const dynamicParams = false` in `app/projects/[slug]/page.tsx`. This ensures a 404 is returned for any slug not in `generateStaticParams`, which is the correct behavior.

**Approved**:

- The module breakdown (MOD-001 through MOD-010) is well-structured. MOD-001 as the site shell covering layout, sidebar, nav, and dark mode is the right first module — everything else depends on it.
- The `Project` TypeScript interface in PRD section 5 is well-designed. `detailSlug` correctly decouples the URL slug from the data `id`. `extraLinks` handles the multi-repo case for the multi-agent project.
- Tailwind v4 `@theme inline` block in `globals.css` is the correct approach — no `tailwind.config.js` exists or is needed in v4. Color tokens are correctly defined.
- `@tailwindcss/postcss` in `postcss.config.mjs` is the correct v4 PostCSS plugin.
- `@/*` path alias in `tsconfig.json` is set up correctly and points to the site root.
- The nine-route information architecture maps cleanly to App Router `app/` directories with no ambiguity.
- Metadata API (`export const metadata: Metadata`) is the correct SEO approach for App Router — no `<Head>` component needed.
- Using a real `mailto:` link on the Contact page rather than a form eliminates all server-side concerns and is the correct call for a static portfolio.
- All content assets confirmed present: `case-study-marketing-analytics.md`, `case-study-multi-agent-system.md`, `case-study-tabvault.md`, `site-copy.md`, `experience.md`, `skills.md`, `favicon_io/`, `Leon_cv.pdf`.
- Vercel deployment with GitHub integration is the right host for this project. Zero infrastructure overhead.

**Proposed Shared Conventions** (for Doc-Sync to carry into production.md):

- All route layouts and page components are Server Components by default. Add `'use client'` only when a component requires `useState`, `useEffect`, or browser APIs. The dark mode toggle and mobile nav toggle are the only expected Client Components in MOD-001. Do not mark page or layout files as client components.
- Dynamic route pages must declare `params` as `Promise<{ slug: string }>` and always await it: `const { slug } = await params`. This applies to both page components and `generateMetadata` functions.
- The `dark` CSS class on `<html>` is the single source of truth for the active theme. It is set by a blocking inline script in `layout.tsx` (reads `localStorage`, falls back to `prefers-color-scheme`). The Client Component toggle writes to `localStorage` and toggles the class on `document.documentElement`. No other component should read or write the theme state.
- Tailwind v4 dark mode variant must be registered in `globals.css`: `@variant dark (&:where(.dark, .dark *));`. Theme values use CSS custom properties defined in the `.dark` block. Use `dark:` utilities freely once the variant is registered.
- Roboto is loaded exclusively via `next/font/google` in `layout.tsx`. No `@import url()` for any Google Font anywhere in the codebase.
- External links (LinkedIn, GitHub, live demos) must always include `target="_blank" rel="noopener noreferrer"`.
- The resume PDF is served from `public/Leon_cv.pdf` via a plain `<a href="/Leon_cv.pdf" download="Leon_Wu_Resume.pdf">` — not `next/link`.
- Path alias `@/*` maps to the `site/` root. Use it for all cross-directory imports. No `../../` relative imports except within the same feature directory.
- File naming follows SKILL.md defaults: React component files use PascalCase (`Sidebar.tsx`, `ProjectCard.tsx`); data, utility, and config files use kebab-case (`project-data.ts`, `markdown-utils.ts`).
- `generateStaticParams` iterates the data array — it never contains hard-coded slug strings. Adding a project means adding a record to the data file only.

### Setup Confirmation — 2026-06-28

Infrastructure verified against live scaffold at `site/`.

**Runtime versions confirmed:**
- Node.js v24.14.1 (exceeds >= 20.x LTS requirement)
- npm 11.11.0 (exceeds >= 10.x requirement)

**Lint status:** PASS — `npm run lint` exits with zero errors or warnings on the unmodified scaffold.

**Build status:** PASS — `npm run build` compiles successfully and generates static pages for `/` and `/_not-found`. One CSS warning is emitted about the `@import url(...)` order in `globals.css` — this is a warning only, not an error, and is resolved by MOD-001 scaffold cleanup.

**`marked` installed:** v18.0.5 added to `dependencies` in `site/package.json`.

**Assets verified present:**
- `site/app/favicon.ico` — confirmed (App Router file convention)
- `site/public/Leon_cv.pdf` — confirmed (served as plain `<a download>` link)

**Known scaffold items MOD-001 engineer must clean up (not blockers, but required before MOD-001 is complete):**
1. `site/app/layout.tsx` — `Geist` and `Geist_Mono` imports must be deleted; replaced with `Roboto` via `next/font/google`.
2. `site/app/globals.css` line 2 — `@import url("https://fonts.googleapis.com/css2?family=Roboto:...")` must be removed; font loading moves to `layout.tsx`.
3. `site/app/projects/marketing-analytics/`, `multi-agent-system/`, `tabvault/` — three empty static directories must be deleted and replaced with a single `app/projects/[slug]/page.tsx` dynamic route.
4. `globals.css` — `@variant dark (&:where(.dark, .dark *));` must be added for Tailwind v4 dark mode utilities to compile correctly.
5. `layout.tsx` — blocking inline theme script must be added as the first child of `<html>` to prevent dark mode hydration flash.

**`project-planning/setup.md` created:** step-by-step runbook covering runtime requirements, repository layout, dependency install, dev server, production build, lint, scaffold cleanup checklist, and asset locations.

Environment is ready for MOD-001. Engineer may begin immediately.

---

## Phase Plan

[AMBIGUITY: PRD revision 1.2 does not contain a Phases and Milestones section. No phase names, milestone names, or sequencing dates are defined in the PRD. The following phase structure is derived from the module dependency order stated in the Tech Lead review (MOD-001 must be first; all other modules depend on it) and the grouping of modules by function. PM must confirm or revise this phase structure and add it to prd.md before the Engineer begins work.]

**Proposed phase structure based on module dependencies:**

Phase 1 — Site Shell
- MOD-001: Site Shell (Layout, Sidebar, Nav, Footer, Dark Mode)
- Milestone: Layout shell renders on all routes; dark mode toggle works without hydration flash; Roboto font loads via next/font; sidebar collapses correctly on mobile.

Phase 2 — Core Content Pages
- MOD-002: Home Page
- MOD-003: Projects Grid Page
- MOD-007: Experience Page
- MOD-008: About Page
- MOD-009: Skills Page
- MOD-010: Contact Page
- Milestone: All six content pages render inside the site shell with correct copy, metadata, and external links.

Phase 3 — Project Detail Pages
- MOD-004: Project Detail: Marketing Analytics
- MOD-005: Project Detail: Multi-Agent System
- MOD-006: Project Detail: TabVault
- Milestone: All three project detail pages render case study markdown correctly; [slug] dynamic route returns 404 for unknown slugs; generateStaticParams iterates the data file.

Phase 4 — Deploy
- Production deploy to Vercel; domain configured; canonical URLs and OG tags updated with confirmed domain.
- Milestone: Site live on custom domain; Lighthouse score above 90; all external links verified working.

---

## Current Phase

Phase 1 — Site Shell

[AMBIGUITY: PRD revision 1.2 does not define phases. Current Phase is set to Phase 1 (Site Shell / MOD-001) based on the Tech Lead's approval of the module breakdown ordering. PM must confirm this phase structure.]

---

## Engineering Progress

*(No entries yet.)*

---

## QA Results

*(No entries yet.)*

---

## Checkpoint History

*(No checkpoints yet.)*

---

## Sync Reports

### Sync Report — Initial Sync — 2026-06-28
**Sync type:** initial
**PRD Revision:** 1.2
**Files created:**
- project-planning/production.md
- project-planning/modules/mod-site-shell/spec.md
- project-planning/modules/mod-site-shell/status.md
- project-planning/modules/mod-home/spec.md
- project-planning/modules/mod-home/status.md
- project-planning/modules/mod-projects-grid/spec.md
- project-planning/modules/mod-projects-grid/status.md
- project-planning/modules/mod-project-marketing/spec.md
- project-planning/modules/mod-project-marketing/status.md
- project-planning/modules/mod-project-multi-agent/spec.md
- project-planning/modules/mod-project-multi-agent/status.md
- project-planning/modules/mod-project-tabvault/spec.md
- project-planning/modules/mod-project-tabvault/status.md
- project-planning/modules/mod-experience/spec.md
- project-planning/modules/mod-experience/status.md
- project-planning/modules/mod-about/spec.md
- project-planning/modules/mod-about/status.md
- project-planning/modules/mod-skills/spec.md
- project-planning/modules/mod-skills/status.md
- project-planning/modules/mod-contact/spec.md
- project-planning/modules/mod-contact/status.md
- .claude/agents/engineer-mod-site-shell.md
- .claude/agents/qa-mod-site-shell.md
- .claude/agents/engineer-mod-home.md
- .claude/agents/qa-mod-home.md
- .claude/agents/engineer-mod-projects-grid.md
- .claude/agents/qa-mod-projects-grid.md
- .claude/agents/engineer-mod-project-marketing.md
- .claude/agents/qa-mod-project-marketing.md
- .claude/agents/engineer-mod-project-multi-agent.md
- .claude/agents/qa-mod-project-multi-agent.md
- .claude/agents/engineer-mod-project-tabvault.md
- .claude/agents/qa-mod-project-tabvault.md
- .claude/agents/engineer-mod-experience.md
- .claude/agents/qa-mod-experience.md
- .claude/agents/engineer-mod-about.md
- .claude/agents/qa-mod-about.md
- .claude/agents/engineer-mod-skills.md
- .claude/agents/qa-mod-skills.md
- .claude/agents/engineer-mod-contact.md
- .claude/agents/qa-mod-contact.md

**AMBIGUITY markers logged:**
- production.md: PRD lists domain name as a still-needed blocking asset — og:url and canonical URL values cannot be populated until the domain is confirmed. PM must provide the domain before production deploy.
- mod-home/spec.md: same domain/og:url ambiguity (replicated to each affected module spec).
- mod-projects-grid/spec.md: same domain/og:url ambiguity.
- mod-project-marketing/spec.md: same domain/og:url ambiguity.
- mod-project-multi-agent/spec.md: same domain/og:url ambiguity.
- mod-project-tabvault/spec.md: same domain/og:url ambiguity.
- mod-experience/spec.md: same domain/og:url ambiguity.
- mod-about/spec.md: same domain/og:url ambiguity.
- mod-skills/spec.md: same domain/og:url ambiguity.
- mod-contact/spec.md: same domain/og:url ambiguity.
- status.md Phase Plan: PRD revision 1.2 does not contain a Phases and Milestones section. Phase structure is proposed from module dependency order. PM must confirm.
- status.md Current Phase: same — PM must confirm phase structure.

**CONFLICT markers logged:** none

**verify-sync.sh result:** Script requires prd.md to be inside the project-planning/ directory; this project keeps prd.md at the repo root. Manual verification performed in lieu of script: Check 1 (MOD-IDs) — PASS (PRD has no MOD-IDs, nothing to verify); Check 2 (orphan specs) — PASS (all 10 spec.md files map to Module Map entries); Check 3 (Tech Stack) — PASS (Next.js 16.2.9, TypeScript, Tailwind CSS v4, Roboto, marked, Vercel all present in production.md); Check 4 (US-IDs) — PASS (PRD has no US-IDs, nothing to verify); Check 5 (AMBIGUITY markers logged) — PASS (all 10 AMBIGUITY markers logged in status.md Sync Reports); Check 6 (Phase names) — N/A (PRD has no Phases section; AMBIGUITY marker placed in Phase Plan).

---

## Skill Recommendations

Pattern: Next.js App Router dark mode without hydration flash — blocking inline script in layout.tsx sets the theme class synchronously before React hydration, reading localStorage with prefers-color-scheme fallback. This avoids the flash that useEffect-only solutions produce on SSR pages.
Why: This pattern recurs on every SSR project with class-based theming and is non-obvious. A reusable skill would save the engineer from rediscovering the dangerouslySetInnerHTML script approach each time.
Agent: tech-lead
