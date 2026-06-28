**Last Synced from PRD Revision**: 1.2 | **Last Updated**: 2026-06-28

---

## Module ID & Name

MOD-006: Project Detail: TabVault

## Purpose

Detail page for TabVault at route /projects/tabvault. Renders a header area with project name, tagline, stack chips, live link, and GitHub link, followed by the full case study body rendered verbatim from `asset/content/case-study-tabvault.md`.

Note: MOD-004, MOD-005, and MOD-006 are all served by a single dynamic route file `app/projects/[slug]/page.tsx` per the Tech Lead's recommendation. The slug for this module is "tabvault".

## Context

**Business problem:** From PRD Goal 2: "Showcase three strong projects as full case studies, each reachable in one click from the projects grid." TabVault is described as "A live full-stack PWA, built by my multi-agent system" — it demonstrates both Leon's full-stack engineering capability and his multi-agent system in action. The detail page must give recruiters the full story of the product's architecture, Leon's role, and the outcomes.

**User stories:** The PRD does not define US-IDs for this project. The following page-level requirements from PRD section 4.5 govern this module:

- Route: /projects/tabvault
- Source file: `asset/content/case-study-tabvault.md` — case study is fully written and ready.
- Header area: project name (H1) "TabVault", tagline "A live full-stack PWA, built by my multi-agent system", stack chips, live link, GitHub link.
- Case study body: render verbatim from the markdown source file.
- Sections in case study: The problem, My role, Approach and key decisions, Impact, What I learned.

**Non-goals (from PRD section 8 — Out of Scope):**
- No blog infrastructure.
- Optional assets (screenshots, demo clip) are non-blocking — the page renders correctly without them.

## Related User Stories

- No formal US-IDs defined in PRD revision 1.2. Requirements are drawn directly from PRD section 4.5.

## Requirements

- Page route: `/projects/tabvault` (served via `app/projects/[slug]/page.tsx`, slug = "tabvault").
- The `[slug]` page uses a single dynamic route that handles all three project slugs (marketing-analytics, multi-agent-system, tabvault).
- `params` is `Promise<{ slug: string }>` and must be awaited: `const { slug } = await params`. This applies to both the page component and `generateMetadata`.
- `export const dynamicParams = false` is set in the `[slug]` page to return 404 for unknown slugs.
- `generateStaticParams` iterates the projects data array to return all valid slugs — no hard-coded slug strings.
- Header area elements:
  - Project name H1: "TabVault"
  - Tagline: "A live full-stack PWA, built by my multi-agent system"
  - Stack chips: Java 21 / Spring Boot · React / TypeScript PWA · Chrome Extension (MV3) · PostgreSQL · Redis · Quartz · Claude API · AWS ECS Fargate
  - Live link: https://tab-vault.com — labeled "Live" with `target="_blank" rel="noopener noreferrer"`
  - GitHub link: https://github.com/LeonWu813/tab-management — labeled "GitHub" with `target="_blank" rel="noopener noreferrer"`
- Case study body: read from `asset/content/case-study-tabvault.md` using `fs.readFileSync` (path resolved via `path.join(process.cwd(), '../asset/content/', filename)`) and parsed with `marked`. Render verbatim — do not alter the markdown content.
- All external links include `target="_blank" rel="noopener noreferrer"`.
- Page exports a `metadata` object with title "TabVault — Leon Wu" and page-specific description.
- Page exports Open Graph tags and Twitter card tags.
- Page exports a canonical URL tag.
- [AMBIGUITY: PRD lists domain name as a still-needed blocking asset — og:url and canonical URL values cannot be populated until the domain is confirmed. PM must provide the domain before production deploy.]
- Page is a Server Component (no `'use client'`).
- Optional assets (screenshots, demo clip) are not yet provided; the page must render correctly without them.

## Input / Output Contract

**Input:**
- `params: Promise<{ slug: string }>` — awaited to obtain `slug = "tabvault"`.
- Project record for "tabvault" from the TypeScript data file, looked up by slug.
- Markdown content of `asset/content/case-study-tabvault.md` read via `fs.readFileSync`.

**Output:**
- Rendered page at route `/projects/tabvault` inside the Site Shell layout (MOD-001).
- Header: H1 project name, tagline, stack chips, live link, GitHub link.
- Case study body: HTML rendered from the markdown source file.
- Page-level `metadata` object for SEO and Open Graph.

## Dependencies

- MOD-001 (Site Shell) — the detail page is rendered inside the layout shell.
- MOD-003 (Projects Grid) — shares the project data file and the `Project` TypeScript interface; `generateStaticParams` relies on the same data array.

## Acceptance Criteria

- AC-045: The system shall render "TabVault" as H1 and the tagline "A live full-stack PWA, built by my multi-agent system" on the /projects/tabvault route.
- AC-046: The system shall render stack chips for Java 21 / Spring Boot, React / TypeScript PWA, Chrome Extension (MV3), PostgreSQL, Redis, Quartz, Claude API, and AWS ECS Fargate.
- AC-047: The system shall render a "Live" link to https://tab-vault.com and a "GitHub" link to https://github.com/LeonWu813/tab-management, both with `target="_blank" rel="noopener noreferrer"`.
- AC-048: The system shall render the case study body verbatim from `asset/content/case-study-tabvault.md` parsed from markdown.
- AC-049: The system shall await `params` before reading the slug, with `params` typed as `Promise<{ slug: string }>`.
- AC-050: The system shall set `dynamicParams = false` so that an unknown slug returns 404.
- AC-051: The system shall populate `generateStaticParams` by iterating the projects data array, not by hard-coding slug strings.
- AC-052: The system shall export a metadata object with title "TabVault — Leon Wu" and Open Graph and Twitter card tags.
