# Projects Grid Page Status

## Engineering Progress

- spec-update (E1 = A2 cutover): projects-data.ts now holds only the interfaces, imports the four record files, and exports projects = [multiAgentSystem, projectday, siteplus, tabvault] (ProjectDay at index 1, so /projects still redirects to multi-agent-system). Inline records deleted. Only projects-data.ts changed.
- Build (site/): pass, /projects/projectday among the static pages. Lint: 0 errors, 9 warnings (pre-existing img warnings). self-check.sh not run (known root package.json issue).

**spec-update (E1 = A2 step 1), 2026-11-01.** Added `featureImageAlt?` and `featureImageCaption?` to `ProjectEntry`. Detail page renders the feature image as `<figure>` with alt text and a `<figcaption>` when a caption exists; `height="500px"` removed. No data split or reorder (later run). Rev 1.4 preservation list untouched.
- Build (`npm run build` in site/): pass
- Lint (`eslint .` in site/): pass, 0 errors (9 pre-existing warnings)
- self-check.sh: could not run meaningfully (script runs at repo root, package.json is in site/; exit 254/127 are environment, not code)
- Tests: none for this module

**spec-update (PRD 1.10/1.11: AC-108 to AC-110, AC-127 to AC-129), 2026-11-01.** Added `alt?` to SectionItem; `groupItems` carries `{src, alt}`; both Images render sites and the feature image go through new client component `site/app/projects/[slug]/ImageZoom.tsx` (native `<dialog>` + `showModal()`, button with zoom-in cursor, `<img alt>` names it, dialog `aria-label` = alt). Original stays at opacity 0 while a copy animates (WAAPI, 250ms, fade only under reduced motion); pushState without URL on open; Esc (cancel: preventDefault + history.back()) and click call history.back(); `dialog.close()` runs only from popstate after the closing animation; no synchronous close from keydown. Images cap: `w-auto max-w-full h-auto max-h-[640px]` on the img (AC-128). Digits 1-7: dialog keydown handler stops propagation so MOD-001's window handler never sees them (AC-129). Scope question for PM/Tech Lead: CONV-007 also wants Sidebar.tsx's handler to check `dialog[open]`; Sidebar is MOD-001's file, not touched. Record files untouched (AC-127 alt grep will fail until MOD-004/005/006/011 fill alts).
- Build (site/): pass. Lint: 0 errors, warnings only (img). self-check.sh not run (package.json in site/). Not browser-tested (QA/human device check for AC-109).


## QA Results

**QA Agent:** qa-mod-projects-grid
**Workflow:** functional-test (first-time verification)
**Date:** 2026-06-29
**Spec revision verified against:** PRD 1.3 (split-panel layout; spec.md last updated 2026-06-29)

---

### Automated Test Suite

No test command configured in production.md (static site, no automated test suite defined). Build and lint run as proxy:

- `npm run build`: PASS — clean build, 0 errors, 0 TypeScript errors. Three project slugs statically generated: `/projects/multi-agent-system`, `/projects/siteplus`, `/projects/tabvault`.
- Automated test run: SKIPPED (no test command) — all verification is manual code inspection + build confirmation.

---

### AC-by-AC Results

**PASS AC-019**: `/projects` redirects to `/projects/multi-agent-system` without rendering a grid or page heading.
- `app/projects/page.tsx` calls `redirect(`/projects/${projects[0].slug}`)`. `projects[0].slug` is `multi-agent-system`. No JSX is rendered (pure redirect). Build confirms `/projects` as a static route with redirect behavior.

**PASS AC-020**: Persistent left aside `w-64 xl:w-72` renders on all `/projects/[slug]` routes.
- `app/projects/layout.tsx` renders `<ProjectList projects={projects} />`. `ProjectList` renders `<aside className="hidden lg:flex lg:flex-col w-64 xl:w-72 ...">`. Width classes match spec exactly.

**PASS AC-021**: Each project's title and tech string shown in the aside list.
- `components/ProjectList.tsx` line 35: `{project.title}`. Line 42: `{project.tech}`. Header "Projects" rendered at line 15, count `{projects.length}` at line 17.

**PASS AC-022**: Active project item highlighted with `bg-[var(--text)] text-[var(--bg)]`.
- `components/ProjectList.tsx` line 30: `isActive ? "bg-[var(--text)] text-[var(--bg)]" : "hover:bg-[var(--hover)] text-[var(--text)]"`. Active state computed via `usePathname()` comparing against `/projects/${project.slug}` (with and without trailing slash).

**PASS AC-023**: Right panel renders `{children}` with `flex-1 overflow-y-auto`.
- `app/projects/layout.tsx` line 12: `<div className="flex-1 overflow-y-auto">{children}</div>`.

**PASS AC-024**: Projects layout uses `flex flex-1 min-h-0 overflow-hidden`; body uses `h-screen overflow-hidden`.
- `app/projects/layout.tsx` line 10: `<div className="flex flex-1 min-h-0 overflow-hidden">`.
- `app/layout.tsx` line 40: `<body className="h-screen overflow-hidden flex flex-col ...">`.
- Flex chain: body (h-screen overflow-hidden) → div.md:ml-64 (flex-1 flex flex-col min-h-0) → main (flex-1 flex flex-col overflow-y-auto) → projects layout (flex flex-1 min-h-0 overflow-hidden). Both panels scroll independently within the constrained viewport.

**PASS AC-025**: Aside hidden on screens smaller than `lg`.
- `components/ProjectList.tsx` line 11: `className="hidden lg:flex lg:flex-col ..."`. Hidden by default; displayed as flex column at `lg` breakpoint and above.

**PASS AC-026**: Aside list populated by iterating the projects data array — no hard-coded titles or slugs in layout or list components.
- `app/projects/page.tsx` uses `projects[0].slug` (data-driven, not hardcoded string).
- `app/projects/layout.tsx` passes `projects` array from `@/data/projects-data` to `ProjectList`.
- `components/ProjectList.tsx` iterates `projects.map((project) => ...)` using `project.slug`, `project.title`, `project.tech`. `grep` for slug literals (`multi-agent-system`, `siteplus`, `tabvault`) in the component returned zero matches.

---

### Additional Spec Requirements (not ACs)

- **ProjectEntry interface**: `data/projects-data.ts` exports `ProjectEntry`, `ProjectLink`, `ProjectSection` interfaces matching the spec verbatim (slug, year, date, title, tech, tags, atAGlance, description, links, sections). **PASS**
- **Project records order**: Data array order — [0] multi-agent-system, [1] siteplus, [2] tabvault — matches spec section "Project records order". **PASS**
- **generateStaticParams**: `app/projects/[slug]/page.tsx` exports `generateStaticParams()` that iterates `projects.map((p) => ({ slug: p.slug }))`. No hardcoded slugs. **PASS**
- **dynamicParams = false**: Set in `app/projects/[slug]/page.tsx` line 5. **PASS**

---

### Shared Convention Checks

- `'use client'` on `ProjectList` only (justified: uses `usePathname()`). Layout and page are Server Components. **PASS**
- `@/` path alias used for all cross-directory imports; no `../` relative imports. **PASS**
- No `@import url()` for Google Fonts anywhere in modified files. **PASS**
- No HTML template comments in spec.md. **PASS**

---

### Gold-Plating Check

No features implemented beyond spec. Extra styling (border-r, bg-[var(--surface)], sticky header, focus-visible outline on links) is purely visual and does not add functionality beyond what the spec requires.

---

### Overall Result

**QA PASS** — All 8 acceptance criteria (AC-019 through AC-026) verified. Build clean. No regressions, no gold-plating, no spec violations.

---

## QA Results — regression (2026-11-01)

**Workflow:** regression (prior QA PASS on rev 1.3; Engineer commits cdec492 and f95eb9d changed the module for rev 1.5/1.6). Spec rev verified: 1.6. Checked against the production build served with `next start` and the real HTML. No UI-only AC needed a human.

- `npm run build` (site/): PASS. Static pages include /projects/multi-agent-system, projectday, siteplus, tabvault. `eslint .`: 0 errors, 9 pre-existing img warnings. self-check.sh not run (root package.json issue, as instructed).
- Record files: all four exist (siteplus, multi-agent-system, tabvault, projectday); each has one `import type { ProjectEntry }` line and one named export (CONV-005). `projects-data.ts` holds only the interfaces and `projects = [multiAgentSystem, projectday, siteplus, tabvault]` (CONV-001/002/005). MOD-004/005/006/011 status files each confirm their record file.

**PASS AC-019**: GET /projects returns 307 with `location: /projects/multi-agent-system`.
**PASS AC-020**: project aside is `w-64 xl:w-72` on all four slugs.
**PASS AC-021**: the aside shows title and tech on each of the four rows (HTML checked).
**PASS AC-022**: exactly one row has `bg-[var(--text)] text-[var(--bg)]` on each slug page, and it is the matching slug.
**PASS AC-023**: right panel `flex-1 overflow-y-auto` wraps children.
**PASS AC-024**: layout class is `flex flex-col flex-1 min-h-0 overflow-hidden lg:flex-row`. It contains the required classes; flex-col and lg:flex-row are the as-built mobile-nav addition, which is not a violation. Body class unchanged since prior QA.
**PASS AC-025**: aside is `hidden lg:flex`.
**PASS AC-026**: ProjectList, layout and page iterate `projects` with no hard-coded slugs. `generateStaticParams` is data-driven.
**PASS AC-086**: ProjectDay is row 2 (title "ProjectDay", tech "Mobile · React Native · Supabase · AWS") and is active on /projects/projectday.
**PASS AC-089 (template side)**: projectday renders no `<figure>` and no broken image. Feature images are `w-full` with no fixed height or object-fit, so there is no cropping at any width (checked from classes and HTML, not rendered at 1280/375).
**PASS AC-091 (template side)**: /projects/multi-agent-system renders `<figure>` with `/multi-agent-horizontal.png`, the exact proposed alt text, and the caption in `<figcaption>` directly below. `height="500px"` is absent on all pages.
**PASS AC-092 (frame side)**: links render as plain prefix plus `<a>` label only ("GitHub: <a>TabVault repo</a>"). The "Feature image:" editor's line does not appear. Word-for-word content belongs to MOD-005 and was not verified here.
**PASS** projectday renders no links row (links empty). `ProjectMobileNav` iterates `projects` in the same order.

Non-blocking observation: siteplus and tabvault feature images render with `alt=""` because those records have no `featureImageAlt`. The spec does not require alt for them, so this is not a failure. It is an accessibility note for MOD-004 and MOD-006.

### Integration notes (for Tech Lead)
None. scan-integration.sh was not run (build/HTML verification only).

### Open items
- none
