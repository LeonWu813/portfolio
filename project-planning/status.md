# Project Status — Leon's Portfolio Website

---

## Last Action

agent: engineer-mod-home
mode: spec-update
module: mod-home
result: success
next: claude --agent qa-mod-home "regression"
timestamp: 2026-11-01T00:00:00Z

## PM Updates

2026-06-28 — PRD revision 1.2 confirmed by user. PRD covers all nine pages (Home, Projects grid, three Project Detail case studies, Experience, About, Skills, Contact), the persistent sidebar layout, dark mode toggle, SEO/OG metadata, and static Vercel deployment. Content assets (case studies, site copy, experience entries, resume PDF, favicon) are all present in `asset/`. Next.js 16 scaffold exists at `site/`. Status.md created; waiting for Tech Lead Setup Confirmation before tagging [INIT].

2026-06-28 — Tech Lead review confirmed present (Concerns, Recommendations, Approved, Proposed Shared Conventions). Next.js 16 scaffold at `site/` verified. Setup complete per user confirmation. PRD formally initialized. **[INIT]**

**Open items before launch:**
- Domain name: not yet selected. Required for canonical URLs, OG tags, and Vercel domain configuration. Blocking for production deploy.
- OG / social preview image (1200x630px): not yet produced. Non-blocking — affects link preview appearance only.
- Project screenshot(s) for SitePlus+ detail page: not yet provided. Non-blocking.
- Diagram or demo clip for Multi-Agent System detail page: not yet provided. Non-blocking.
- Screenshot(s) for TabVault detail page: not yet provided. Non-blocking.

2026-06-29 — Phases 1, 2, and 3 completed in a single engineering session (2026-06-28). Checkpoint recorded. Current phase advanced to Phase 4 — Deploy. PRD updated to revision 1.3 to reflect all implemented changes. [SUBSTANTIVE] — scope changes: footer removed, split-panel replaces grid on projects page, SitePlus+ rename from "Marketing Analytics Platform", keyboard shortcuts 1–6 wired globally, IBM Carbon palette formalized as design system.

2026-06-29 — Phase 2 and Phase 3 QA formally closed after dedicated QA agent passes. All Phase 2 modules (MOD-002/007/008/009/010) confirmed PASS. All Phase 3 modules (MOD-003/004/005/006) confirmed PASS after one bug-fix round. Project is ready for Phase 4 — Deploy. Blocking item remains: domain name not yet selected (required before Vercel domain config, canonical URLs, and OG tags can be finalized). [TRIVIAL]

- 2026-11-01 [SUBSTANTIVE] Add ProjectDay as a fourth project (MOD-011, /projects/projectday) and update the Multi-Agent System page content, tags, At-a-glance and feature image (MOD-005); PRD rev 1.4
  Approved by Leon in the coordinator session: "8. it stays private
  
  Approve all recommendations"
  Proposal: project-planning/pm-proposals/2026-11-01-projectday-and-multi-agent-update.md
  Answers applied: Q2 substantive; Q3 not architectural; Q4 App Store listing not live on 2026-11-01 (coordinator check: HTTP 404), so no App Store link, ProjectDay At-a-glance "Submitted to the App Store (Oct 2026)", multi-agent At-a-glance "Shipped TabVault (live) · ProjectDay submitted to the App Store"; Q5 designer collaborator stays unnamed; Q6 feature image = Leon's App Store Connect iPhone screenshots, files not yet supplied, non-blocking, page renders without them; Q7 ProjectDay directly after Multi-Agent, slug "projectday", year 2026, date 09/19; Q8 ProjectDay repo stays private, so both ProjectDay repo links are removed (multi-agent page keeps three links; ProjectDay page has no external links); Q9 add Python to multi-agent tags; Q10 multi-agent tech line unchanged; Q11 success criterion reworded (adjusted for Q8: "links to its GitHub repository when that repository is public"); Q12 PRD moved from repo-root prd.md to project-planning/prd.md (git mv); Q13 ProjectDay is section 4.6, Experience/About/Skills/Contact renumbered 4.7-4.10 (numbers only); Q14 work joins current Phase 4 — Deploy; Q15 diagram caption shown; Q16 diagram re-exported without em dashes (done by the coordinator); Q17 module name and directory confirmed; Q18 recording the SitePlus+ and TabVault screenshots in the PRD is a separate small change after this one.
  Sections changed: 1 (three -> four projects; success criterion on links), 4.2 (project order), 4.4 (At-a-glance, tags, feature image + caption, body copy, AC-091, AC-092), new 4.6 ProjectDay (AC-079 to AC-090), 4.6-4.9 renumbered to 4.7-4.10, 5 (Record 2 updated, Record 4 added with links: []), 6 (routing row), 7 (assets).
  Modules affected: MOD-005 (content, tags, At-a-glance, image), MOD-003 (one more item in the project list), MOD-002 (one more item in the Home projects list), new MOD-011.
  Phase: MOD-011 and the MOD-005 update join the current phase, Phase 4 — Deploy. Current Phase unchanged.
  Proposed source path for MOD-011 (no Source Path column in this Module Map): the ProjectDay record in the shared project data file, plus image files under site/public/ named projectday-*. The project detail modules share one data file and one [slug] page; ownership of those shared files is for the Tech Lead to decide.
  Notes for Doc-Sync: the site changed outside the framework since the last checkpoint (commits 6fb90ad..29b3a16, including site/public/multi-agent.png and project screenshots in f3834eb); heading commas in the MOD-005 section list still differ between the PRD and the spec; the ProjectDay source file has a header note "No public links yet: the repo is private and the App Store listing is not live." that is not one of the six sections (AC-082 requires no links to render; whether that note shows is not specified by this change).

- 2026-11-01 [SUBSTANTIVE] [ARCHITECTURAL] Source Paths for every module with the shared project files split per D1=A, and the PRD records the as-built site (content model, links, Images sections, Demo Video, domain, Home copy); PRD rev 1.5
  Approved by Leon in the coordinator session: "Approve as written (Recommended)" (multiple-choice answer to Q1/Q2/Q6/Q7; option text: "Values P1–P6 as shown above; substantive; architectural (adds /pstack:how + Tech Lead change review before Doc-Sync)."); Q3 "(a) Update both (Recommended)"; Q4 "Yes (Recommended)"; Q5 "mod-site-shell"
  Proposal: project-planning/pm-proposals/2026-11-01-rev-1-5-as-built-and-source-paths.md
  As-built values P1-P6 pasted by the coordinator from the code at f7de263 and shown to Leon before he approved; written to PRD 4.1, 4.3, 4.5 and 5 exactly as pasted.
  Answers Tech Lead Reviews "Review — 2026-11-01 — change (rev 1.4 cross-module: shared project files, out-of-framework drift)" (f7de263): D1 "A: split files (Recommended)"; D2 "Keep as-built (Recommended)" (also confirms the SitePlus+ Demo Video link, the Images sections, and www.leon-wu.com); D3 "Keep mine (Recommended)"; D4 "Per source file (Recommended)".
  Sections changed: header, ToC, 1 (Summer 2026 -> 2026/2027), 4.1 (Home copy: H1 emoji, no subtitle, CTA labels, bio, status line), 4.3 and 4.5 (links as prefix + linked label, Images section as section 4 of 9), 4.4 (links, AC-092), 4.10 (Contact intro 2026/2027), 5 (ProjectLink, SectionItem/ProjectSection, ProjectEntry featureImage/featureImageAlt/featureImageCaption, Records 1-3), 6 (canonical domain, Deployment domain), 7 (assets), new 9 Adopted Conventions CONV-001 to CONV-004.
  Module Map: Source Path column and Project files line added (owner mod-site-shell; Q5: the About photos, head.png and Subject.png stay with mod-site-shell). No module added, removed or renamed. Current Phase unchanged (Phase 4 — Deploy).
  Markers resolved: the domain/og:url AMBIGUITY marker in every page spec ("PRD lists domain name as a still-needed blocking asset ...") is resolved by PRD 6 and 7: https://www.leon-wu.com.
  Modules affected: MOD-002 (AC-011 to AC-015 follow the live Home copy, so the spec changes and the code does not), MOD-003 (owns the shared frame; splits projects-data.ts into one record file per project; adds feature-image alt and caption to the template), MOD-004 and MOD-006 (links, Images section, comma headings, "four projects"), MOD-005 (links form for AC-044 and AC-092), MOD-011 (record file and content model), MOD-010 (Contact intro line now says 2026/2027: spec-update), every page spec (domain).
  Notes for Doc-Sync: also fix the drift your 2026-11-01 Sync Report listed, which this entry triggers: the MOD-004 and MOD-006 specs drop commas the PRD has (D4: each page matches its own source file), and still say "three strong projects" and "all three project slugs"; production.md still has rev 1.2 text for the design palette, layout, data-file/markdown statements, and the Module Index descriptions for MOD-003 and MOD-004. Copy section 9 CONV-001 to CONV-004 into production.md.
  Notes for Tech Lead (change review): engineering order and the preservation list are in your 2026-11-01 review (option A order). Note A in the proposal: the Source Paths give site/data/projects/siteplus.ts to MOD-004, multi-agent-system.ts to MOD-005 and tabvault.ts to MOD-006, while option A has MOD-003 create them in the split; settle who creates each record file. The Project files line names some site/public/ files by description ("files no module pattern matches"), not by path; check that module_scope.py reads it as intended.

- 2026-11-01 [SUBSTANTIVE] Module Map Project files line becomes the folder site/public/ (E2), and PRD 9 adopts CONV-005, the project record-file contract; PRD rev 1.6
  Approved by Leon in the coordinator session: "Approve as written (Recommended)" (Q1, multiple-choice; question: "Approve the `Project files:` line (ending in `site/public/`, so mod-site-shell owns every unclaimed public file incl. og-image.png) and the two Decisions lines (E1 = A2; og-image.png stays open and non-blocking) exactly as written?"); Q4 "Yes, adopt (Recommended)" (option text: "PRD rev 1.6, substantive, not architectural. Puts the contract in production.md where the engineers read it."); Q2 substantive and Q3 not architectural follow from that Q4 option text.
  Proposal: project-planning/pm-proposals/2026-11-01-project-files-line.md
  Answers Tech Lead Reviews "Review — 2026-11-01 — change (rev 1.5: Source Paths, record-file split, engineering sequence)" (db8a1ba): E2 "site/public/ (Recommended)"; E1 "A2 (Recommended)", recorded in Decisions; E3 not answered, the OG image stays open and non-blocking (Leon separately asked the coordinator to draft an OG image for his approval; it stays open until he approves a file in asset/); Proposed Convention (record-file contract) adopted as CONV-005.
  Sections changed: header (Revision 1.6), 9 (CONV-005 added).
  No module added, removed or renamed; no Source Path in the table changed. Current Phase unchanged (Phase 4 — Deploy).
  Modules affected: MOD-001 (mod-site-shell now owns every unclaimed site/public/ file, including og-image.png); MOD-003, MOD-004, MOD-005, MOD-006, MOD-011 (CONV-005 governs the record files and projects-data.ts).
  Notes for Doc-Sync: rev 1.5 has not been synced yet. Sync rev 1.5 and 1.6 together with this Project files line. Copy CONV-005 into production.md.

---

## Build Config

```
Build: npm run build
Lint:  npm run lint
Test:  (none — static site, no automated test suite defined)
```

*Note: Commands assume execution from the `site/` subdirectory where the Next.js scaffold lives.*

---

## Decisions

- 2026-11-01 Q5 (rev 1.5): the unmatched images in site/public/ are not project screenshots. IMG_6353.jpg, IMG_6591.jpg, IMG_6605.jpg, IMG_6875.JPG and 4D0BDA8A-B273-40DC-BD3D-3098AF6BBB73.JPG are About photos, head.png is used by the Sidebar, and Subject.png by globals.css. All seven stay with mod-site-shell as project files. Leon: "mod-site-shell".
- 2026-11-01 E1 (rev 1.5 change review): record files are created by option A2. MOD-003 adds featureImageAlt and featureImageCaption first; MOD-005, MOD-004, MOD-006 and MOD-011 each write their own record file once, with updated content; then one MOD-003 cutover imports all four, with ProjectDay second. 7 engineer runs. Leon: "A2 (Recommended)".
- 2026-11-01 E3 (rev 1.5 change review): og-image.png not answered yet; it stays an open, non-blocking item (PRD 7). Owner when supplied: mod-site-shell (by E2). Until then every page's og:image returns 404.

---

## Module Map

| MOD-ID  | Directory                  | Module Name                          | Source Path |
|---------|----------------------------|--------------------------------------|-------------|
| MOD-001 | mod-site-shell             | Site Shell (Layout, Sidebar, Nav, Footer, Dark Mode) | site/app/layout.tsx, site/app/globals.css, site/app/favicon.ico, site/app/apple-touch-icon.png, site/components/Sidebar.tsx, site/components/ThemeToggle.tsx, site/components/TopNav.tsx |
| MOD-002 | mod-home                   | Home Page                            | site/app/page.tsx |
| MOD-003 | mod-projects-grid          | Projects Grid Page                   | site/app/projects/, site/components/ProjectList.tsx, site/components/ProjectMobileNav.tsx, site/data/projects-data.ts |
| MOD-004 | mod-project-marketing      | Project Detail: SitePlus+            | site/data/projects/siteplus.ts, site/public/siteplus* |
| MOD-005 | mod-project-multi-agent    | Project Detail: Multi-Agent System   | site/data/projects/multi-agent-system.ts, site/public/multi-agent* |
| MOD-006 | mod-project-tabvault       | Project Detail: TabVault             | site/data/projects/tabvault.ts, site/public/tabvault-* |
| MOD-007 | mod-experience             | Experience Page                      | site/app/experience/, site/data/experience-data.ts |
| MOD-008 | mod-about                  | About Page                           | site/app/about/ |
| MOD-009 | mod-skills                 | Skills Page                          | site/app/skills/, site/data/skills-data.ts |
| MOD-010 | mod-contact                | Contact Page                         | site/app/contact/ |
| MOD-011 | mod-project-projectday     | Project Detail: ProjectDay           | site/data/projects/projectday.ts, site/public/projectday-* |

Project files: mod-site-shell | .gitignore, site/package.json, site/package-lock.json, site/next.config.ts, site/tsconfig.json, site/eslint.config.mjs, site/postcss.config.mjs, site/.gitignore, site/AGENTS.md, site/CLAUDE.md, site/README.md, site/public/

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

### Review — 2026-11-01 — change (rev 1.4 cross-module: shared project files, out-of-framework drift)

pstack input: none. No findings file exists for this review, and none was named in the invocation.

**Baseline checked at 8fb7253:** `npm run build` passes (12 static pages; /projects/[slug] builds multi-agent-system, siteplus, tabvault). `npm run lint` shows 0 errors and 9 `@next/next/no-img-element` warnings, all from Leon's `<img>` tags. Engineers must leave lint at 0 errors. They should not switch to `next/image` as part of this change, because that would be scope creep.

**Concerns** (must address before proceeding):

- **The PRD and specs describe a content model the code no longer uses.** Leon's commits a8b292e..29b3a16 changed `site/data/projects-data.ts`. `ProjectSection` now has `items: SectionItem[]` (`string | { image: string }`) instead of `paragraphs`. `ProjectLink` gained a `name` prefix field, and `ProjectEntry` gained `featureImage?`. The SitePlus+ and TabVault records also gained "Images" sections. PRD section 5 and the MOD-003, MOD-005 and MOD-011 specs still quote the old interface. Failure scenario: the MOD-005 or MOD-011 engineer follows its spec literally and writes `paragraphs: [...]`. That fails TypeScript. Or the engineer "fixes" the interface back to the spec, which breaks the MOD-004 and MOD-006 records and the image grid in `[slug]/page.tsx`. That would revert Leon's screenshots without anyone noticing. Leon must decide (D2) before MOD-005 or MOD-011 run.
- **AC-044 and AC-092 cannot pass on the current link layout without reverting Leon's change.** The multi-agent links render as plain text plus a link: "Built by the system: " + `<a>tab-vault.com</a>`, then "GitHub: " + `<a>System repo</a>`, then "GitHub: " + `<a>TabVault repo</a>` (`[slug]/page.tsx` lines 108-116). The spec expects the link text to be "Built by the system: tab-vault.com", "System repo" and "TabVault repo". Leon decides (D2).
- **AC-091 needs a change to the shared template.** The feature image in `site/app/projects/[slug]/page.tsx` (line 127-134) renders `alt=""` and has no caption. A meaningful alt text and the caption directly below the image need two new optional `ProjectEntry` fields (proposed: `featureImageAlt`, `featureImageCaption`), rendered as `<figure>`/`<figcaption>`. MOD-011's AC-089 needs the same alt support later. This edits the file that four modules share, so ownership has to be settled first (D1).
- **The MOD-002 spec-update will collide with Leon's Home edits.** The current `site/app/page.tsx` H1 reads "Hey, I'm Leon 👋", and there is no "Full-Stack Engineer" subtitle. The bio has different wording and no em dashes. The status line and metadata say "2026/2027" where the PRD says "Summer 2026", and the CTA reads "Connect on LinkedIn" where the PRD says "Connect me on LinkedIn". So AC-011 to AC-015 already fail against the PRD. A `spec-update` run "updates the code to match" and would rewrite Leon's copy. The QA re-verify that follows would fail those ACs either way. Leon decides (D3).
- **Nothing in the framework can enforce ownership of the shared files right now.** The Module Map has no Source Path column, so `module_scope.py` returns 3 and both the hook and the self-check skip the scope check. The older wrappers (MOD-005, MOD-003, MOD-002) carry no Source Path at all. Ownership is also file-level only, so one shared `projects-data.ts` cannot express "each module edits only its own record". Adding a Source Path column is a PRD-level change (PM, then Doc-Sync).

**Recommendations** (suggested improvements):

- **Ownership (Q1), recommended option A.** MOD-003 (Projects split panel) owns the shared frame: `site/app/projects/` (layout.tsx, page.tsx, [slug]/page.tsx), `site/components/ProjectList.tsx`, `site/components/ProjectMobileNav.tsx`, and `site/data/projects-data.ts`. MOD-003 is the module that already owns the /projects route and every consumer of the list. In A, `projects-data.ts` keeps only the interfaces and the ordered `projects` array, which imports one record file per project:
  - `site/data/projects/multi-agent-system.ts` (MOD-005), plus assets `site/public/multi-agent*`
  - `site/data/projects/siteplus.ts` (MOD-004), plus assets `site/public/siteplus*` (this pattern also matches Leon's existing `siteplusplus-*` files)
  - `site/data/projects/tabvault.ts` (MOD-006), plus assets `site/public/tabvault-*`
  - `site/data/projects/projectday.ts` (MOD-011), plus assets `site/public/projectday-*`
  
  MOD-002 only reads the data. With this split, ownership becomes file-level, so the hook can enforce it, and no two engineers edit the same file. The split itself does not change behavior, and MOD-003 makes it together with the template extension above. Option B (lighter): keep one file and record an interim rule that each detail module edits only its own record and assets, with MOD-005 allowed a one-time change to the template. B adds no step, but nothing enforces it and it breaks the "one owner" rule for the template. Leon decides (D1).
- **Content model (D2), recommended: the PRD follows the as-built code.** The PRD section 5 interfaces would become `items: (string | { image: string })[]`, `ProjectLink { name, label, href }`, `featureImage?`, plus the new `featureImageAlt?` and `featureImageCaption?`. AC-044 and AC-092 would state the "prefix + link" form, for example "Built by the system: tab-vault.com" with only "tab-vault.com" linked. The other possibility is that Leon wants the PRD link text, in which case MOD-005 changes only its own record.
- **Same PM change: record what else Leon changed.** The PRD does not yet describe these items:
  - the SitePlus+ link "Demo Video: link" (supademo URL), where PRD 4.3 says "Live demo" (siteplusplus.space)
  - the "Images" H2 sections in SitePlus+ and TabVault, which make 9 sections where PRD 4.3 and 4.5 list 8
  - the hard-coded domain `https://www.leon-wu.com` in every canonical URL and og:url, while PRD section 7 still lists the domain as "[ASSET NEEDED]" and every spec carries the domain AMBIGUITY marker
  
  PM should ask Leon to confirm each one. The edits are not part of this change's scope, but leaving them out lets MOD-004 and MOD-006 QA revert them later.
- **Heading commas (Q3).** The source files for Multi-Agent, SitePlus+ and TabVault use commas ("How it works, end to end"; "What I learned, and what I would improve"). The ProjectDay source does not. PRD 4.3 to 4.5 already carry the commas. The code has none because the QA run of 2026-06-29 failed commas against the rev 1.2/1.3 specs. Recommended: each page matches its own source file. The MOD-004 and MOD-006 spec gap is Doc-Sync drift, not a requirements change, so it needs no new PRD decision. It does need a PM Update entry to trigger the Doc-Sync delta. Fold it into the rev 1.5 change, together with the production.md rev 1.2 drift (palette, layout, data-file/markdown statements, Module Index text). MOD-004 and MOD-006 spec-updates for commas can run after MOD-011, any time before the Phase 4 checkpoint. Until then, the Multi-Agent page will have commas and SitePlus+ and TabVault will not. That is visible but harmless. Leon may instead want no commas anywhere, in which case PM changes PRD 4.3 to 4.5 and the MOD-005 spec (D4).
- **Engineering order (Q4), changed.** MOD-003 and MOD-002 have nothing to change until the ProjectDay record exists, because both lists iterate `projects` in array order. If either runs before MOD-011, it would have to add the record itself, which is outside its scope.
  - With A: PM rev 1.5, then Doc-Sync, then `engineer-mod-projects-grid "spec-update"` (split the data file and extend the template with alt/caption), then `engineer-mod-project-multi-agent "spec-update"`, then `engineer-mod-project-projectday "implement"`, then `engineer-mod-home "spec-update"`. MOD-002 should be verification only; no code change is expected.
  - With B: PM rev 1.5, then Doc-Sync, then MOD-005, then MOD-011, then MOD-003, then MOD-002.
  - Both orders: insert ProjectDay at index 1 of `projects`, never index 0, so that `/projects` still redirects to multi-agent-system (`app/projects/page.tsx` uses `projects[0]`).
- **Multi-agent image (Q4).** Copy `asset/diagrams/multi-agent-horizontal.png` (3080x1560, 296 KB) to the new file `site/public/multi-agent-horizontal.png`. Point the record's `featureImage` at it, and delete `site/public/multi-agent.png` (2998x7775 portrait, 988 KB, referenced only by that record) in the same commit. A new name keeps the source and the copy traceable to each other and rules out any stale cache of the old URL. Deleting the old file means no orphaned asset is left behind. The image keeps its current position (after the pull-quote, before the sections), which satisfies "same position". Tailwind preflight sets `height: auto`, so the `height="500px"` attribute does not distort the image. Still, MOD-005 or the template owner should drop that attribute, because AC-091 requires no cropping.
- **What every engineer in this change must preserve (Q2): Leon's direct changes, 6fb90ad..29b3a16.**
  - `[slug]/page.tsx`: the `groupItems` image grid, the link layout as `<p>{name}<a>{label}</a></p>`, the article padding `px-8 py-12 pt-16 lg:pt-12 max-w-4xl` (mobile nav and H1 margin fix), the conditional links row (AC-082 relies on it), the conditional feature image (AC-089 relies on it), and the metadata domain.
  - `app/projects/layout.tsx`: `flex flex-col ... lg:flex-row` together with `ProjectMobileNav`. The MOD-003 spec does not mention ProjectMobileNav, but it is Leon's mobile project switcher, and ProjectDay appears in it automatically.
  - `projects-data.ts`: the SitePlus+ and TabVault records as they are, including the "Images" sections, the "Demo Video" link and the `name` prefixes, and the record order.
  - `app/page.tsx`: all hero copy, the emoji, `mt-5 md:mt-0`, the CTA labels and the metadata.
  - All `site/public/` assets except `multi-agent.png`.
  - Sidebar.tsx, globals.css, layout.tsx, and the about, experience, skills and contact pages are outside this change entirely.
  
  A spec-update changes only the ACs listed in the 2026-11-01 Sync Report (plus any rev 1.5 delta). It never "corrects" code that Leon changed directly.
- **Asking Leon (needs-human):**
  - **D1, ownership of the shared project files.** Option A (recommended): MOD-003 owns the shared frame, and each project gets its own record file plus asset pattern, enforced by a Source Path column. This adds one MOD-003 step. Option B: keep one data file, with an unenforced rule that each module edits only its own record, and MOD-005 makes the template change once. Which?
  - **D2, content model and links.** Should the PRD and specs follow your as-built `projects-data.ts` model, with links shown as "GitHub: " + linked "System repo", image items in sections, and `featureImage` plus the new alt and caption? Or should the site go back to the PRD link text ("System repo", "Built by the system: tab-vault.com" as one link)?
  - **D3, Home copy.** Your Home page differs from PRD 4.1:
    - the H1 has the 👋 emoji
    - there is no "Full-Stack Engineer" subtitle
    - the bio wording differs
    - the page says "2026/2027" internship, not "Summer 2026"
    - the CTA reads "Connect on LinkedIn"
    
    Keep your version, so that PM updates PRD 4.1 and AC-011 to AC-015, or restore the PRD copy?
  - **D4, section-heading commas.** Should each page match its own source file, which gives Multi-Agent, SitePlus+ and TabVault commas and ProjectDay none (recommended)? Or no commas on any page?
  
  The same PM change also needs your confirmation of the "Demo Video" link, the "Images" sections, and the www.leon-wu.com domain.

**Approved**:
- The single `[slug]` route with `generateStaticParams` over the data array, `dynamicParams = false` and awaited `params` (verified in the code). A fourth project needs no routing change. AC-090 is met once the record exists.
- The conditional links row and the conditional feature image in the template already give AC-082 (no empty links row) and the "no image slot until screenshots" half of AC-089.
- `ProjectList`, `ProjectMobileNav`, the Home list and the redirect all derive from the `projects` array. That makes AC-086 and AC-087 a matter of where the record sits in the array, not new UI work.
- Leon's direct changes build cleanly and add no lint errors, so nothing in them blocks engineering technically. The blockers are the spec and PRD conflicts above.

**Proposed Shared Conventions** (once the user approves, PM adds them to PRD section 9 Adopted Conventions; Doc-Sync carries them into production.md from there):
- Proposed Convention: The shared project frame belongs to MOD-003: `site/app/projects/**`, `site/components/ProjectList.tsx`, `site/components/ProjectMobileNav.tsx`, and the interfaces and ordered array in `site/data/projects-data.ts`. Each project-detail module owns only its record file `site/data/projects/<slug>.ts` and its `site/public/<prefix>*` assets. A detail module that needs a template change logs `blocked-technical` for MOD-003 rather than editing the template itself. (This applies if D1 = A.)
- Proposed Convention: A project record's position in `projects` is its display order everywhere (the side panel, the mobile switcher and the Home list). `projects[0]` is the `/projects` redirect target.
- Proposed Convention: Section headings and paragraphs match the project's own source file in `asset/content/` word for word. Editor's notes in a source file never render.
- Proposed Convention: A `spec-update` changes only the ACs named in the triggering Sync Report. Code that differs from the spec in other ACs is reported in Engineering Progress, not changed.

### Review — 2026-11-01 — change (rev 1.5: Source Paths, record-file split, engineering sequence)

pstack input: project-planning/pstack-findings/2026-11-01-how-project-pages.md (47aafe3). I re-ran the scope checks myself at 47aafe3 with `module_scope.py` (`check` and `paths`, plus a walk over `git ls-files`), and read `[slug]/page.tsx:127-135`, `site/tsconfig.json` and the importers of `@/data/projects-data`.
- **F1 accepted.** `check mod-projects-grid site/data/projects/siteplus.ts` returns 1 (owned by mod-project-marketing), `projectday.ts` returns 1 (mod-project-projectday), and `site/data/projects/index.ts` returns 1 (unowned). Failure scenario: MOD-003 runs the split that my rev 1.4 order gave it, and pstack-guard blocks its first Write. If MOD-003 uses Bash instead, handoff `changed` fails it. Also accepted: no step in that order adds `projectday` to the array after MOD-011 runs, so `/projects/projectday` would return 404 (`dynamicParams = false`) and AC-086, AC-087 and AC-090 would fail. My rev 1.4 order is superseded by the sequence below.
- **F2 accepted.** `paths mod-site-shell` prints junk entries (`site/public/ files no module pattern matches (favicons`, `Subject.png)`), and bare names like `head.png` match only at the repo root. 23 tracked files under `site/public/` have no owner: every favicon, `favicon_io/*`, `site.webmanifest`, `Leon_cv.pdf`, the five About photos, `head.png` and `Subject.png`. Only the five `*.svg` files resolve to mod-site-shell. `site/public/og-image.png` is referenced in the metadata of `app/page.tsx`, `about`, `contact`, `experience` and `projects/[slug]`, but the file does not exist and has no owner. Failure scenario: the moment anyone has to change `Leon_cv.pdf` or a favicon, no engineer can write it.
- **F3 accepted.** `projects[0]` is the redirect target (CONV-002). Index 1 keeps the redirect on multi-agent-system.
- **F4 accepted, with an added rule.** Records use `import type` only. The types stay in `projects-data.ts`, because `types.ts` and `index.ts` would have no owner.
- **F5 accepted.** `[slug]/page.tsx:129-134` renders `alt=""` and `height="500px"`, and `ProjectEntry` has no alt or caption field. Under CONV-001 only MOD-003 may change these, so this supersedes the part of my rev 1.4 review that let MOD-005 drop the attribute.
- **F6 accepted as information only.** The MOD-003 Source Path already uses the folder form `site/app/projects/`. The Edit/Write-only guard is covered by `changed` at handoff. No action needed.
- **Open question 1:** answered by the sequence below (E1 for Leon).
- **Open question 2:** answered under E2 and E3 below.
- **Open question 3 rejected for this change.** AC-089 and AC-091 name only the feature image. Section-image alt text (`alt=""` at `[slug]/page.tsx:154,163`) is a real accessibility gap against the PRD goal "WCAG-conscious", but adding it is a new requirement. It belongs in a later PM change (`SectionItem` image gains `alt?`, owned by MOD-003, then each record fills in its own). It is not part of this sequence.
- **Open question 4 rejected for this change.** Passing only `{slug, title, tech}` to the nav components is an optimization that no AC asks for. Under CONV-004 a spec-update must not add it. I will consider it at the Phase 4 integration review.

**Concerns** (must address before proceeding):
- **Record files cannot be created in one step by anyone inside the framework (F1, PM Note A).** Under rev 1.5 each record file belongs to its detail module, the array belongs to MOD-003, and importing a file that does not exist breaks the build. So the split has to be staged: owners create their files first, then MOD-003 cuts over. Leon chooses how (E1).
- **The type change must land before any record uses the new fields (F5).** `featureImageAlt` and `featureImageCaption` in a record annotated `ProjectEntry` fail the excess-property check until MOD-003 adds them to the interface. MOD-005's AC-091 depends on this.
- **The `Project files:` line has to be fixed before Doc-Sync carries it into specs (F2).** This is a Module Map change, so it goes through PM. Without the fix, mod-site-shell cannot write any favicon, the CV or `og-image.png`.

**Recommendations** (suggested improvements):
- **Record-file contract (cross-module; MOD-003 depends on it):**
  - Each file `site/data/projects/<slug>.ts` contains only `import type { ProjectEntry } from "@/data/projects-data";` and one named export annotated with the type: `export const multiAgentSystem: ProjectEntry = {...}`, `siteplus`, `tabvault`, `projectday`.
  - The annotation is required, because it makes the build check each record's shape while the file is not yet imported. `tsconfig` includes `**/*.ts`, so the unimported file is still type-checked.
  - Records never import a value from `projects-data.ts`, which avoids the cycle in F4.
  - `projects-data.ts` keeps only the interfaces and `export const projects: ProjectEntry[] = [multiAgentSystem, projectday, siteplus, tabvault];`. It contains no helpers or constants.
- **Engineering sequence, recommended E1 = A2 (each owner writes its own record once, one cutover).** Every step must keep `npm run build` passing and lint at 0 errors (baseline: 9 `no-img-element` warnings). The rev 1.4 preservation list still applies in full.
  0. **PM trivial change:** fix the `Project files:` line (E2). Then **`claude --agent doc-sync`** syncs rev 1.5 and the fixed line into the specs and `production.md`.
  1. **`claude --agent engineer-mod-projects-grid "spec-update"` (MOD-003, step 1 of 2).** Scope:
     - Add `featureImageAlt?: string` and `featureImageCaption?: string` to `ProjectEntry`.
     - In `[slug]/page.tsx`, render the feature image as `<figure><img alt={project.featureImageAlt ?? ""} .../>{caption && <figcaption>}</figure>` and remove `height="500px"`.
     - Do not split the data file and do not change the array yet.
     - Visible result: none, because no record sets the new fields.
  2. **Record files.** These four runs are independent of each other and can run in any order. Each creates only its own file, under the contract above, with the content its rev 1.5 spec requires. While a file is not imported, it does not render. Each engineer therefore checks it with build/lint only, and records "renders after the MOD-003 cutover" in Engineering Progress.
     - `engineer-mod-project-multi-agent "spec-update"` (MOD-005): the record with the rev 1.4/1.5 content, tags, At-a-glance, links, `featureImage: "/multi-agent-horizontal.png"` plus alt and caption. Copy `asset/diagrams/multi-agent-horizontal.png` to `site/public/`. Do not delete `site/public/multi-agent.png` yet, because the inline record still uses it until the cutover.
     - `engineer-mod-project-marketing "spec-update"` (MOD-004): the SitePlus+ record copied from `projects-data.ts`, plus its rev 1.5 delta (commas per D4, "four projects").
     - `engineer-mod-project-tabvault "spec-update"` (MOD-006): the same for TabVault.
     - `engineer-mod-project-projectday "implement"` (MOD-011): the new ProjectDay record, with `links: []` and no `featureImage`.
  3. **`claude --agent engineer-mod-projects-grid "spec-update"` (MOD-003, step 2 of 2: cutover).**
     - Replace the three inline records with imports of the four record files, in the order `[multiAgentSystem, projectday, siteplus, tabvault]`.
     - Verify that the build produces four `/projects/[slug]` pages and that `/projects` still redirects to multi-agent-system.
     - MOD-003 touches only `projects-data.ts`.
  4. **`engineer-mod-project-multi-agent "spec-update"`, a short finishing run (MOD-005):** delete `site/public/multi-agent.png`, which is now unreferenced. Skip this step if Leon prefers to keep the orphaned file until the Phase 4 integration review.
  5. **`engineer-mod-home "spec-update"` (MOD-002):** verification only, with no code change expected. ProjectDay appears in the Home list from the array.
  6. **`engineer-mod-contact "spec-update"` (MOD-010):** change the intro to 2026/2027. This step is independent and can run any time after step 0.
  7. **QA, after step 3**, for MOD-003, 005, 011, 004, 006, then MOD-002 and MOD-010. QA failures go back to the owning engineer, who by then edits a live file.
  - **Why A2 over (a), "owners copy verbatim first":** (a) needs three extra copy runs, a third MOD-003 run to add ProjectDay, and separate MOD-004/006 spec-updates later. That is about 10 engineer runs, against 7 for A2. The cost of A2 is that steps 2 and 3 are one "big bang": nothing from step 2 is visible until step 3. In both options, two copies of the SitePlus+ and TabVault records exist for a short time. A2 keeps that window short and ends it at step 3, which deletes the inline copies.
  - **Option (b), Leon makes a `human:` commit for the mechanical split** (three verbatim files plus the import array). `changed` ignores that commit. It saves no engineer runs compared with A2, because A2 already folds the copy into each owner's single run. It is also one more change made outside the framework, which is exactly the kind of drift rev 1.5 just cleaned up. MOD-003 step 1, all of step 2 except the copy, and a MOD-003 run to add `projectday` at index 1 are still needed.
  - **Option (c), PM widens MOD-003's Source Path for the split.** This is not recommended, because it is a second PRD change to undo the first.
- **E2, the `Project files:` line. Recommended: `Project files: mod-site-shell | .gitignore, site/package.json, site/package-lock.json, site/next.config.ts, site/tsconfig.json, site/eslint.config.mjs, site/postcss.config.mjs, site/.gitignore, site/AGENTS.md, site/CLAUDE.md, site/README.md, site/public/`.**
  - Longest-prefix matching keeps `site/public/siteplus*`, `multi-agent*`, `tabvault-*` and `projectday-*` with their modules. Their literal prefix is 20 or more characters, against 11 for `site/public`.
  - Everything else under `site/public/`, including the About photos (Decision Q5) and `og-image.png`, goes to mod-site-shell. That is what the line already means in words.
  - The risk is small and visible. A mis-named project asset (for example `pd-home.png`) is assigned to mod-site-shell, so the MOD-011 engineer is blocked with exit 1. It is never silently written by the wrong module.
  - Alternative: full paths (`site/public/favicon*`, `site/public/favicon_io/`, `site/public/android-chrome-*`, `site/public/apple-touch-icon.png`, `site/public/site.webmanifest`, `site/public/Leon_cv.pdf`, `site/public/*.svg`, `site/public/IMG_*`, `site/public/4D0BDA8A-*`, `site/public/head.png`, `site/public/Subject.png`, `site/public/og-image.png`). This is more precise, but every new shell asset then needs another Module Map change.
  - Either way, PM writes it (Module Map), and the line must not contain parentheses or words inside the comma list.
- **E3, `og-image.png`.** The owner is mod-site-shell (by E2). The file is a Leon-supplied asset (PRD 7, 1200×630). Until it exists, every page's og:image returns 404. That does not break the build and does not block this sequence. Once Leon supplies it in `asset/`, run `engineer-mod-site-shell` to copy it to `site/public/og-image.png`. This works only after E2.

**Approved**:
- The rev 1.5 Source Paths for MOD-001 to MOD-011 resolve correctly, apart from the Project files line. Specifically: `check mod-projects-grid site/data/projects-data.ts` returns 0, `check mod-project-marketing site/data/projects/siteplus.ts` returns 0, and the asset patterns match the existing `siteplusplus-*`, `tabvault-*` and `multi-agent*` files.
- CONV-001 to CONV-004 as written in PRD section 9.
- MOD-002 needs no code change. `app/page.tsx` imports only `projects`.

**Proposed Shared Conventions**:
- Proposed Convention: A project record file exports exactly one named constant annotated `ProjectEntry` and imports only types from `@/data/projects-data`. `projects-data.ts` holds only the interfaces and the ordered `projects` array.

**Asking Leon (needs-human):**
- **E1, how the record files get created.** A2 (recommended): MOD-003 adds the alt/caption fields first, then MOD-005, MOD-004, MOD-006 and MOD-011 each write their own record file once with their updated content, then a single MOD-003 cutover adds all four, with ProjectDay second. This takes 7 engineer runs, and nothing new shows on the site until the cutover. (a): each owner first copies its record unchanged, MOD-003 cuts over, then the updates follow. This takes about 10 runs, and the site changes step by step. (b): you make one `human:` commit that splits the file unchanged, and the engineers do the rest. This also takes about 7 runs, because the copy work is folded into A2's runs anyway, so it saves no runs and it puts a source change outside the framework. Which?
- **E2, the `Project files:` line.** Replace the descriptive part with the folder `site/public/` (recommended; every unclaimed public file, including og-image.png, goes to site-shell)? Or with the full list of paths? Either way PM makes it as a trivial Module Map change before Doc-Sync.
- **E3, OG image.** Will you supply the 1200×630 `og-image.png` now, so that `engineer-mod-site-shell` copies it in during this change? Or should it stay an open, non-blocking item (every page's og:image returns 404 until then)?

---

## Phase Plan

Phase 1 — Site Shell
- MOD-001: Site Shell (Layout, Sidebar, Nav, Dark Mode)
- Milestone: Layout shell renders on all routes; dark mode toggle works without hydration flash; Roboto font loads via next/font; sidebar collapses correctly on mobile.

Phase 2 — Core Content Pages
- MOD-002: Home Page
- MOD-007: Experience Page
- MOD-008: About Page
- MOD-009: Skills Page
- MOD-010: Contact Page
- Milestone: All five content pages render inside the site shell with correct copy, metadata, and external links.

Phase 3 — Project Detail Pages
- MOD-003/004/005/006: Projects split panel + three detail pages (SitePlus+, Multi-Agent System, TabVault)
- Milestone: Projects split panel renders with independent scroll; all three project detail pages render case study content correctly; [slug] dynamic route returns 404 for unknown slugs.

Phase 4 — Deploy
- Production deploy to Vercel; domain configured; canonical URLs and OG tags updated with confirmed domain.
- Milestone: Site live on custom domain; Lighthouse score above 90; all external links verified working.

---

## Current Phase

Phase 4 — Deploy

---

## Engineering Progress

### Phase 1 — Site Shell — MOD-001 — 2026-06-28 — COMPLETE

**Engineer commit:** `3d3f7db`

Deliverables confirmed:
- Next.js 16 App Router scaffold cleaned up (Geist/Geist_Mono removed, `@import url()` removed, static project dirs deleted)
- Persistent left sidebar (fixed, w-56 desktop, off-canvas mobile) — IBM Carbon color tokens applied
- Profile section: "Leon" wordmark, nav links (Home, Projects, Experience, About, Skills, Contact) with SVG icons
- Connect block: LinkedIn, GitHub, Email with `target="_blank" rel="noopener noreferrer"`
- Keyboard shortcuts 1–6 wired as global `keydown` listener in `Sidebar.tsx`; suppressed on inputs and modifier keys
- Dark mode: blocking inline script in `layout.tsx`, class-based (`dark` on `<html>`), localStorage + prefers-color-scheme, no hydration flash
- Mobile: fixed top bar (h-12) + off-canvas drawer + hamburger toggle
- IBM Carbon Design System color tokens (White + G100 themes) defined in `globals.css` via `@theme inline`
- `@variant dark (&:where(.dark, .dark *));` registered in `globals.css`
- Roboto via `next/font/google`; no `@import url()` in any CSS
- Body `h-screen overflow-hidden`; root layout `main.flex-1.flex.flex-col.overflow-y-auto`
- `[slug]` dynamic route with `dynamicParams = false` and `generateStaticParams`
- Footer removed (no footer in the PRD or implementation)

**QA result (2026-06-28):** PASS (after AC-006 apple-touch-icon fix applied inline by QA)

---

### Phase 2 — Core Content Pages — MOD-002/007/008/009/010 — 2026-06-28 — COMPLETE

**Engineer commit:** `0a1835b` (initial) → `db942ab` (og:url/canonical fix)

Deliverables confirmed:

**Home (MOD-002):** `site/app/page.tsx` — H1 "Hey, I'm Leon", H2 "Full-Stack Engineer", bio and status line per spec, three CTAs (LinkedIn external, /contact, /Leon_cv.pdf download), projects list (title + tech, no dates). Wrapper `px-8 py-16 max-w-2xl mx-auto`. No headshot.

**Experience (MOD-007):** `site/app/experience/page.tsx` + `site/data/experience-data.ts` — two-column timeline grid, dot + vertical line, two roles (Exascend, GoFreight) in reverse-chron order with verbatim bullets and tech chip badges, date format "MMM YYYY", Education section at bottom (Northeastern MS, NCCU BA). No em dashes.

**About (MOD-008):** `site/app/about/page.tsx` — two verbatim paragraphs per spec, no education block on this page, no photo.

**Skills (MOD-009):** `site/app/skills/page.tsx` + `site/data/skills-data.ts` — six labeled chip groups with all skill items verbatim per spec.

**Contact (MOD-010):** `site/app/contact/page.tsx` — intro line verbatim, email mailto, LinkedIn, GitHub (all with target/rel), resume `<a download>`, no form.

All five pages: lint PASS, build PASS, OG/canonical tags present (placeholder domain pending).

**QA result (2026-06-28):** PASS (after og:url and canonical fix applied; all ACs pass)

---

### Phase 3 — Project Detail Pages — MOD-003/004/005/006 — 2026-06-28 — COMPLETE

**Engineer commits:** implemented in same session; final state reflected in PRD revision 1.3

**Key design decisions beyond original spec:**

1. **Split panel replaces grid:** Projects page redesigned from a grid (MOD-003 original spec) to an onur.dev-style split panel — persistent `<aside>` (w-64, independent scroll) on the left, project detail pane (`flex-1 overflow-y-auto`) on the right. The projects layout uses `flex flex-1 min-h-0 overflow-hidden` for scroll isolation.

2. **Single `[slug]` dynamic route:** `site/app/projects/[slug]/page.tsx` serves all three project detail pages via `generateStaticParams`. `dynamicParams = false` ensures 404 on unknown slugs.

3. **SitePlus+ rename:** "Marketing Analytics Platform" renamed to "SitePlus+" with slug `siteplus`. Source file updated to `case-study-siteplus-detailed.md`. MOD-004 now tracks Project Detail: SitePlus+.

4. **ProjectEntry data model:** New TypeScript interfaces — `ProjectEntry`, `ProjectLink`, `ProjectSection` — replacing the original `Project` interface. `atAGlance` field, `links: ProjectLink[]`, and `sections: ProjectSection[]` added.

5. **Inline bold renderer:** Paragraphs containing `**bold**` markdown syntax render as `<strong>` in the UI via a lightweight inline parser.

6. **Case study content from asset files:** Full case study content read from `asset/content/case-study-*-detailed.md` files; content not inlined as TypeScript strings.

7. **/projects redirect:** `/projects` redirects immediately to `/projects/multi-agent-system` (first project).

Three project detail pages delivered: SitePlus+ (`/projects/siteplus`), Multi-Agent System (`/projects/multi-agent-system`), TabVault (`/projects/tabvault`).

**QA result:** Not formally logged in module status files (Phase 3 implementation preceded formal QA pass assignment). Build PASS, lint PASS confirmed via engineer self-check. PRD revision 1.3 synced to reflect all implemented changes.

---

## QA Results

### Phase 1 — MOD-001 — 2026-06-28 — PASS

See `project-planning/modules/mod-site-shell/status.md` for full AC-by-AC results.
Overall: PASS after AC-006 (apple-touch-icon) fixed inline. 10 of 10 ACs pass.

### Phase 2 — MOD-002/007/008/009/010 — 2026-06-28 — PASS

See individual module status files for full AC-by-AC results.
Overall: PASS after og:url/canonical fix applied to all five pages.
- MOD-002 (Home): ACs 011–018 all PASS
- MOD-007 (Experience): ACs 053–058 all PASS
- MOD-008 (About): ACs 059–065 all PASS
- MOD-009 (Skills): ACs 066–071 all PASS
- MOD-010 (Contact): ACs 072–078 all PASS

### Phase 3 — MOD-003/004/005/006 — not formally QA'd

Phase 3 was implemented without a separate QA agent pass. Build PASS and lint PASS confirmed. The implementation diverged significantly from the original MOD-003 spec (grid to split panel), which is why no module-level QA entries exist for MOD-003/004/005/006. PRD revision 1.3 captures the as-built state.

### MOD-003 — Projects Split Panel — 2026-06-29 — PASS

See `project-planning/modules/mod-projects-grid/status.md` for full AC-by-AC results.
Overall: PASS. All 8 ACs (AC-019 through AC-026) verified. Build clean.

### MOD-006 — Project Detail: TabVault — 2026-06-29 — FAIL (QA Run 1)

3 ACs failing. See `project-planning/modules/mod-project-tabvault/status.md` for full details.
- AC-055 FAIL: Tags wrong — 11 chips instead of 8; wrong chip labels (spec: "Java 21 / Spring Boot" as 1 chip; data: "Java 21" + "Spring Boot 3.3" as 2 chips; spec: "React / TypeScript PWA" as 1 chip; data: "React" + "TypeScript" + "PWA" as 3 chips; spec: "Chrome Extension (MV3)"; data: "Chrome Extension MV3" missing parentheses)
- AC-058 FAIL: "Architecture" section entirely missing; only 7 sections instead of 8; section 3 heading has spurious comma ("How it works, end to end" vs "How it works end to end"); section 7 heading has spurious comma ("What I learned, and what I would improve" vs "What I learned and what I would improve")
- AC-064 FAIL: generateMetadata returns only title and description; OG tags (og:title, og:description, og:url, og:type, og:images), Twitter card tags, and canonical URL all absent

### MOD-006 — Project Detail: TabVault — 2026-06-29 — PASS (QA Run 2 — Regression)

All 3 previously failing ACs now fixed. No regressions in any previously passing ACs. All 12 ACs pass.
- AC-055 REGRESSION PASS: tags array now exactly 8 combined-chip labels per spec with parentheses around "MV3" restored
- AC-058 REGRESSION PASS: 8 sections in correct order, "Architecture" section added at position 4, spurious commas removed from headings 3 and 8
- AC-064 REGRESSION PASS: generateMetadata now returns full OG block (title, description, type, url, images), Twitter card block (card, title, description, images), and alternates.canonical
See `project-planning/modules/mod-project-tabvault/status.md` QA Run 2 for full AC-by-AC results.

### MOD-005 — Project Detail: Multi-Agent System — 2026-06-29 — PASS

Regression test run. Both previously failing ACs (AC-046, AC-052) now fixed. All 12 ACs pass.
See `project-planning/modules/mod-project-multi-agent/status.md` for full AC-by-AC results.

---

## Checkpoint History

Phase 1 approved — 2026-06-29 — commit: 8ad37237db6db4bdb632c5103484eefa679981a4

Phases 1, 2, and 3 completed in a single engineering session on 2026-06-28. No prior checkpoints were recorded. This entry covers all three phases retroactively.

**Phase 1 — Site Shell:** COMPLETE. MOD-001 QA PASS (10/10 ACs). Sidebar, dark mode, mobile layout, IBM Carbon tokens, keyboard shortcuts all delivered.

**Phase 2 — Core Content Pages:** COMPLETE. MOD-002/007/008/009/010 QA PASS (all ACs). Home, Experience, About, Skills, Contact all delivered with correct copy, metadata, and external links.

**Phase 3 — Project Detail Pages:** COMPLETE. Split-panel projects layout, three detail pages via single [slug] route, SitePlus+ rename, new ProjectEntry data model, inline bold renderer, scroll isolation all delivered. Build PASS, lint PASS. No separate QA agent pass logged — implementation reviewed against PRD 1.3.

**Design decisions made beyond original spec (approved by user, reflected in PRD 1.3):**
- Footer removed from all pages
- IBM Carbon White/G100 palette formalized as primary design system
- Projects page redesigned from grid to onur.dev-style split panel with independent scroll
- "Marketing Analytics Platform" renamed to "SitePlus+" with slug `siteplus`
- Keyboard shortcuts 1–6 wired globally in Sidebar.tsx
- ProjectEntry data model replaces original Project interface

**Proceeding to Phase 4 — Deploy.**

---

Phase 2 approved — 2026-06-29 — commit: 25138ee6a9de35de1d81e8e11255e973fc9b5911

**Phase 2 — Core Content Pages — QA formally closed.**

All five Phase 2 modules passed dedicated QA agent verification on 2026-06-29. All acceptance criteria confirmed:
- MOD-002 Home: H1/H2, bio, status line, three CTAs (LinkedIn / Reach out / Download CV), projects list with tech strings. ACs 011–018 all PASS.
- MOD-007 Experience: two-column timeline, dot + vertical line, tech chips, "MMM YYYY – MMM YYYY" date format, GoFreight including "Project Planning" tag, Education section. ACs 053–058 all PASS.
- MOD-008 About: two verbatim paragraphs, no education block on the about page, no photo. ACs 059–065 all PASS.
- MOD-009 Skills: six labeled chip groups, all skill items verbatim per spec. ACs 066–071 all PASS.
- MOD-010 Contact: intro line verbatim, email mailto, LinkedIn, GitHub (all target/rel), resume `<a download>`, no form. ACs 072–078 all PASS.

One fix round was required across all five pages: og:url and alternates.canonical were absent in the initial implementation; engineer applied a single fix commit (`db942ab`) and all five pages then passed. No other issues found.

---

Phase 3 approved — 2026-06-29 — commit: 25138ee6a9de35de1d81e8e11255e973fc9b5911

**Phase 3 — Project Detail Pages — QA formally closed.**

All four Phase 3 modules passed dedicated QA agent verification on 2026-06-29. All acceptance criteria confirmed:

- MOD-003 Projects Split Panel: 8/8 ACs (AC-019 through AC-026) PASS on first QA run. /projects redirect, persistent aside (w-64 xl:w-72), active highlight, scroll isolation, aside hidden below lg — all verified. No bug-fix round required.

- MOD-004 SitePlus+: 12/12 ACs PASS after one bug-fix round. Failures in QA Run 1: tags wrong (11 chips instead of 10, "Full-Stack" missing, "Java/Spring Boot" split, "Cloudflare" extra tag, wrong ordering), "Live demo" link label had URL appended, "Architecture" and "Challenges and how I resolved them" sections absent, two heading commas, OG/Twitter/canonical metadata absent. All fixed by engineer before QA Run 2 (regression); all 12 ACs pass.

- MOD-005 Multi-Agent System: 12/12 ACs PASS after one bug-fix round. Failures in QA Run 1: "Decisions worth calling out" section entirely absent (7 sections instead of 8), heading commas on sections 3 and 8, OG/Twitter/canonical metadata absent. All fixed; all 12 ACs pass in regression run.

- MOD-006 TabVault: 12/12 ACs PASS after one bug-fix round. Failures in QA Run 1: tags wrong (11 chips instead of 8, combined labels split, parentheses missing from "Chrome Extension (MV3)"), "Architecture" section missing (7 sections instead of 8), heading commas on sections 3 and 8, OG/Twitter/canonical metadata absent. All fixed; all 12 ACs pass in regression run.

**Common pattern in the bug-fix round:** MOD-004, MOD-005, and MOD-006 all shared the same two classes of defects — (1) missing case study sections and spurious heading commas, and (2) OG/Twitter/canonical metadata entirely absent from generateMetadata. These were consistent engineer implementation gaps across all three detail pages, resolved in a single fix pass.

**Open items affecting Phase 4:**
- Domain name: not yet selected. Blocking — required for Vercel domain configuration, canonical URLs, and OG url tags. All placeholder `your-domain.com` values across all ten pages must be updated once the domain is confirmed.
- OG image 1200x630px: not yet produced. Non-blocking — OG image placeholder `/og-image.png` used in metadata; affects social link preview appearance only.
- Project screenshots: not yet provided for any of the three detail pages. Non-blocking.

**Proceeding to Phase 4 — Deploy.**

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

### Sync Report — Delta Sync — 2026-06-29
**Sync type:** delta
**PRD Revision:** 1.3
**PM Update reference:** 2026-06-29 — [SUBSTANTIVE] — split-panel replaces grid, SitePlus+ rename, ProjectEntry data model, structured TypeScript content, inline bold renderer, /projects redirect
**Files modified:**
- project-planning/modules/mod-projects-grid/spec.md — rewrote entirely: grid layout replaced with split-panel layout; /projects now redirects to /projects/multi-agent-system; aside (w-64, xl:w-72) with project list and active highlight; scroll isolation via flex flex-1 min-h-0 overflow-hidden; aside hidden below lg; stale grid ACs (AC-019 through AC-028) replaced with split-panel ACs
- project-planning/modules/mod-project-marketing/spec.md — route changed from /projects/marketing-analytics to /projects/siteplus; title changed to "SitePlus+"; source file changed to case-study-siteplus-detailed.md; atAGlance field added; description pull-quote rendering added; content model changed from fs.readFileSync+marked to structured ProjectEntry TypeScript data; InlineBold helper added; tag list updated; link labels updated; stale ACs replaced with PRD 1.3 ACs (AC-029 through AC-040)
- project-planning/modules/mod-project-multi-agent/spec.md — source file changed to case-study-multi-agent-detailed.md; atAGlance field added; description pull-quote rendering added; content model changed from fs.readFileSync+marked to structured ProjectEntry TypeScript data; InlineBold helper added; sections list updated (8 sections per PRD 1.3); link labels updated; stale ACs replaced with PRD 1.3 ACs (AC-041 through AC-052)
- project-planning/modules/mod-project-tabvault/spec.md — source file changed to case-study-tabvault-detailed.md; atAGlance field added; description pull-quote rendering added; content model changed from fs.readFileSync+marked to structured ProjectEntry TypeScript data; InlineBold helper added; link label updated to "GitHub: tab-management"; stale ACs replaced with PRD 1.3 ACs (AC-053 through AC-064)
- project-planning/status.md — Last Action updated; this sync report appended
**Files created:** none
**Module removals noted:** none
**AMBIGUITY markers added:** none (domain/og:url ambiguity carried forward in all four updated specs — it was present in revision 1.2 and remains unresolved in revision 1.3)
**AMBIGUITY markers resolved:** none
**CONFLICT markers added:** none
**verify-sync.sh result:** Script requires prd.md inside the project-planning/ directory; prd.md is at the repo root. Manual verification performed: Check 1 (MOD-IDs) — PASS (PRD 1.3 has no MOD-IDs); Check 2 (orphan specs) — PASS (all 10 spec.md files map to Module Map entries); Check 3 (Tech Stack) — PASS (unchanged from revision 1.2 sync); Check 4 (US-IDs) — PASS (no US-IDs in PRD 1.3); Check 5 (AMBIGUITY markers) — PASS (domain/og:url ambiguity carried forward and logged); Check 6 (Phase names) — PASS (Phase Plan unchanged).

---

### Sync Report — Delta Sync — 2026-11-01
**Sync type:** delta
**PRD Revision:** 1.4
**PM Update reference:** 2026-11-01 [SUBSTANTIVE] Add ProjectDay as a fourth project (MOD-011, /projects/projectday) and update the Multi-Agent System page content, tags, At-a-glance and feature image (MOD-005); PRD rev 1.4
**Files modified:**
- project-planning/production.md — Project Summary (four projects, sidebar, success criteria) per PRD section 1; routing table replaced with PRD section 6 table (adds /projects/projectday, fixes stale rows); "three" to "four" project detail pages; Assets rows (case-study-*-detailed.md, multi-agent feature image, ProjectDay case study); Module Index row MOD-011; revision header 1.4
- project-planning/modules/mod-project-multi-agent/spec.md (MOD-005) — At-a-glance, tags (adds Python), description, feature image + caption, body-copy statement, section headings with PRD commas ("How it works, end to end"; "What I learned, and what I would improve"; AC-046 updated to match), removed "optional assets" lines (diagram now confirmed), four slugs, AC-091 and AC-092 added
- project-planning/modules/mod-projects-grid/spec.md (MOD-003) — Goal/success-criterion quotes (four projects), project order (ProjectDay second), AC-086, Integration Points entry
- project-planning/modules/mod-home/spec.md (MOD-002) — Projects list requirement (PRD 4.1), ProjectDay list requirement, AC-087, Integration Points entry
**Files created:**
- project-planning/modules/mod-project-projectday/spec.md (MOD-011, AC-079 to AC-090)
- project-planning/modules/mod-project-projectday/status.md
- .claude/agents/engineer-mod-project-projectday.md
- .claude/agents/qa-mod-project-projectday.md
**Module removals noted:** none
**AMBIGUITY markers added:**
- mod-project-projectday/spec.md: the existing domain/og:url ambiguity, carried into the new spec exactly as in every other page spec ("PRD lists domain name as a still-needed blocking asset — og:url and canonical URL values cannot be populated until the domain is confirmed. PM must provide the domain before production deploy."). It is the open item PM already tracks; no new question.
**AMBIGUITY markers resolved:** none
**CONFLICT markers added:** none
**PM-noted open point resolved by the source file:** the ProjectDay source file no longer carries the "No public links yet" header line; its remaining editor lines ("Editor's note (not page copy)" and "Suggested listing fields") are labeled as not page copy, and PRD AC-082 and AC-084 already say no links and no editor's notes render. No marker placed.
**Notes for PM / Tech Lead (not written into specs):**
- Module Map has no Source Path column. The MOD-011 wrapper quotes PM's proposed source path (ProjectDay record in site/data/projects-data.ts plus site/public/projectday-*). Ownership of the shared data file and shared [slug]/page.tsx is for the Tech Lead; the multi-agent feature image copy into site/public is MOD-005 work.
- Drift not covered by this change and left untouched (PM listed only MOD-002/003/005/011): PRD 4.3 and 4.5 section headings carry commas ("How it works, end to end"; "What I learned, and what I would improve") while MOD-004 and MOD-006 specs and ACs (AC-058, AC-046-style) have none; MOD-004 and MOD-006 specs still quote the "three strong projects" goal and say "all three project slugs"; production.md still carries rev 1.2 text for Design palette, Layout, data-file/markdown statements, and Module Index descriptions for MOD-003 and MOD-004.
- site/data/projects-data.ts section headings for MOD-005 have no commas; the revised AC-046 and AC-092 require the PRD/source wording, so MOD-005 needs a spec-update.
**verify-sync.sh result:** Script aborts at check 1 (set -e with grep finding no MOD-IDs in prd.md); same pre-existing failure mode as earlier syncs. Manual verification: Check 1 PASS (PRD has no MOD-IDs); Check 2 PASS (all 11 spec.md files map to Module Map rows); Check 3 PASS (Tech Stack unchanged); Check 4 PASS (no US-IDs); Check 5 PASS (the one new AMBIGUITY marker is logged above and is the already-tracked domain item); Check 6 N/A (no PRD phase section; Phase Plan unchanged, MOD-011 and MOD-005 join the current Phase 4 per PM). No HTML template comments remain.


---

### Sync Report — Delta Sync — 2026-11-01 (rev 1.5 + rev 1.6)
**Sync type:** delta (rev 1.5 [SUBSTANTIVE] [ARCHITECTURAL] and rev 1.6 [SUBSTANTIVE], synced together)
**PRD Revision:** 1.6
**PM Update reference:** 2026-11-01 [SUBSTANTIVE] Module Map Project files line becomes the folder site/public/ (E2), and PRD 9 adopts CONV-005; PRD rev 1.6 (also covers the 2026-11-01 [SUBSTANTIVE] [ARCHITECTURAL] rev 1.5 entry before it)
**Files modified:**
- project-planning/production.md — rev header 1.6; Project Summary 2026/2027; removed the `marked` Tech Stack row and the "case studies rendered from markdown" convention (rev 1.2 drift; PRD 5 content model); Layout and Color Palette replaced with PRD 2 text (IBM Carbon tokens, no footer); Data files paragraph now describes record files; Assets rows (Domain, SitePlus+ and TabVault screenshots); domain statement, OG image, Deployment and non-blocking assets from PRD 6 and 7 replace the old AMBIGUITY marker; CONV-001 to CONV-005 copied verbatim under Shared Conventions; Module Index descriptions for MOD-001, 002, 003, 004, 005, 006, 008, 011
- modules/mod-home/spec.md (MOD-002) — Home copy per PRD 4.1: H1 with emoji, no subtitle, CTA labels, tertiary CTA "Download CV", bio, status line; AC-011, AC-012, AC-013 and AC-014 follow (AC-013/014 text refers to PRD 4.1, which the Requirements now carry), AC-015 label; domain line
- modules/mod-projects-grid/spec.md (MOD-003) — ProjectEntry interfaces per PRD 5; CONV-001, CONV-002, CONV-005 as Requirements; link prefix + label, section items, feature image alt/caption requirements; Integration Points for MOD-011 (AC-089 added) and MOD-005 (AC-091, AC-092)
- modules/mod-project-marketing/spec.md (MOD-004) — "four projects"; nine sections with PRD commas and Images; links as prefix + label (Demo Video, GitHub); Record 1 with `name` and featureImage; interfaces per PRD 5; record file site/data/projects/siteplus.ts and CONV-001/CONV-005 lines; AC-032, AC-034, AC-036; removed the screenshots-optional non-goal; domain line
- modules/mod-project-tabvault/spec.md (MOD-006) — same set as MOD-004 for TabVault (nine sections, Images, links, Record 3, record file tabvault.ts); AC-056, AC-058, AC-060
- modules/mod-project-multi-agent/spec.md (MOD-005) — links as prefix + label, Record 2 with featureImageAlt and featureImageCaption, alt text requirement, interfaces per PRD 5, record file multi-agent-system.ts and CONV lines, AC-044, AC-048, AC-092 per PRD 4.4, new Integration Points (MOD-003, AC-091); domain line
- modules/mod-project-projectday/spec.md (MOD-011) — record file projectday.ts and CONV lines, interfaces per PRD 5, Integration Points gains AC-089; domain line
- modules/mod-contact/spec.md (MOD-010) — intro line "2026/2027" (Context, Requirements; AC-072 refers to it); PRD section numbers 4.9 to 4.10; domain line
- modules/mod-experience/spec.md, modules/mod-about/spec.md, modules/mod-skills/spec.md — domain line; PRD section numbers (4.6 to 4.7, 4.7 to 4.8, 4.8 to 4.9)
- .claude/agents/engineer-<dir>.md and qa-<dir>.md for all 11 modules — regenerated from the current templates (tools and model copied unchanged; body verbatim); each now carries its Module Map Source Path; MOD-001 also carries the Project files line; dependencies aligned with the specs (MOD-004/005/006 now MOD-001 and MOD-003 only; the old "MOD-004 creates [slug]/page.tsx" wording is gone, since CONV-001 gives the template to MOD-003); MOD-003 also gets read access to the MOD-004/005/006/011 status files for the cutover; descriptions normalised
- project-planning/status.md — Last Action; this report
**Files created:** none
**Module removals noted:** none
**AMBIGUITY markers added:** none
**AMBIGUITY markers resolved:** the domain/og:url marker in the specs of MOD-002, 004, 005, 006, 007, 008, 009, 010, 011 and in production.md (PRD 6 and 7: https://www.leon-wu.com). The OG image stays an open non-blocking item (PRD 7), written into production.md as the PRD says it, without a marker.
**CONFLICT markers added:** none
**Drift fixed that the PM entry listed:** MOD-004 and MOD-006 commas ("How it works, end to end"; "What I learned, and what I would improve") and "four projects"; production.md palette, layout, data-file/markdown statements, Module Index text for MOD-003 and MOD-004. Also fixed in production.md because they contradict the PRD the same way (not listed by PM): MOD-001 "footer", MOD-002 "role subtitle", MOD-005/006 "renders case study markdown", MOD-008 "education block".

**Spec-update scope per module (ACs changed; CONV-004 limits each engineer to these)**
- MOD-003 (mod-projects-grid): no AC text changed. New Requirements: ProjectEntry fields featureImageAlt/featureImageCaption, feature image caption directly below, link prefix + label, items. Integration Points carry AC-089, AC-091, AC-092.
- MOD-005 (mod-project-multi-agent): AC-044, AC-048, AC-092 changed; AC-091 unchanged (alt, caption, landscape image); new Requirements: record file, alt text, CONV-001/005.
- MOD-004 (mod-project-marketing): AC-032, AC-034, AC-036 changed.
- MOD-006 (mod-project-tabvault): AC-056, AC-058, AC-060 changed.
- MOD-011 (mod-project-projectday): no AC text changed; Requirements add the record file and CONV-001/005; AC-089 added to Integration Points.
- MOD-002 (mod-home): AC-011, AC-012, AC-013 (via Requirements), AC-014 (via Requirements), AC-015 changed. Per Tech Lead review the code already matches the new copy: verification only, no code change expected.
- MOD-010 (mod-contact): AC-072 (intro line now 2026/2027). The code already says it.

**Engineer sequence (source: Tech Lead Reviews 2026-11-01 change review, db8a1ba, and Decisions E1 = A2; these are Tech Lead decisions, not PRD text, so they are recorded here and not written into the specs)**
1. MOD-003 step 1: add `featureImageAlt?` and `featureImageCaption?` to `ProjectEntry`; in `[slug]/page.tsx` render the feature image as `<figure><img alt={project.featureImageAlt ?? ""} ...>{caption && <figcaption>}</figure>` and remove `height="500px"`; do not split the data file and do not change the array yet.
2. Record files, any order, each only its own file under CONV-005 (one named export annotated `ProjectEntry`, `import type` only): MOD-005 `multiAgentSystem` with `featureImage: "/multi-agent-horizontal.png"` plus alt and caption, and copy `asset/diagrams/multi-agent-horizontal.png` to `site/public/multi-agent-horizontal.png` (do not delete `multi-agent.png` yet); MOD-004 `siteplus` copied from `projects-data.ts` plus the delta; MOD-006 `tabvault` likewise; MOD-011 `projectday` with `links: []` and no `featureImage`. These files are not imported until step 3, so each engineer checks build and lint only and records "renders after the MOD-003 cutover".
3. MOD-003 step 2 (cutover): replace the three inline records with imports of the four record files, array order `[multiAgentSystem, projectday, siteplus, tabvault]` (ProjectDay at index 1, so `/projects` still redirects to multi-agent-system); `projects-data.ts` keeps only interfaces and the array; build must produce four `/projects/[slug]` pages.
4. MOD-005 finishing run: delete `site/public/multi-agent.png` (skip if Leon keeps the file until the Phase 4 integration review).
5. MOD-002: verification only. 6. MOD-010: any time. 7. QA after step 3.
Every step keeps `npm run build` passing and lint at 0 errors (baseline 9 `no-img-element` warnings). The rev 1.4 preservation list in the Tech Lead review still applies in full.

**Noted, not changed (no PM Updates entry lists them; nothing was invented):**
- The MOD-001, MOD-007, MOD-008 and MOD-009 specs were last synced at PRD 1.2 and still differ from the PRD (MOD-001: footer, old palette `#f2f0ef`, "Connect" block; MOD-008: education block; others not checked line by line). MOD-001 will run only for a future og-image copy (E3); run a PM-triggered delta first if that matters.
- MOD-010 AC-076 and the Requirement allow the label "Download resume"; PRD 4.10 now says "Download CV" or "Resume (PDF)". The code reads "Download resume (PDF)". Left as is.
- The PRD 4.1 "Layout notes" (outer wrapper classes) are not in the MOD-002 spec; no AC asks for them.
**verify-sync.sh result:** the script passes checks 1 to 3 and then aborts at check 4 (set -e with grep finding no US-IDs in the PRD), the same pre-existing failure as earlier syncs. Manual checks: Check 4 PASS (the PRD has no US-IDs); Check 5 PASS (no AMBIGUITY markers remain in any spec or production.md); Check 6 N/A (no PRD phase section; Phase Plan and Current Phase unchanged, Phase 4). No HTML template comments in any spec or production.md.

---

## Skill Recommendations

Pattern: Next.js App Router dark mode without hydration flash — blocking inline script in layout.tsx sets the theme class synchronously before React hydration, reading localStorage with prefers-color-scheme fallback. This avoids the flash that useEffect-only solutions produce on SSR pages.
Why: This pattern recurs on every SSR project with class-based theming and is non-obvious. A reusable skill would save the engineer from rediscovering the dangerouslySetInnerHTML script approach each time.
Agent: tech-lead
