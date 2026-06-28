**Last Synced from PRD Revision**: 1.2 | **Last Updated**: 2026-06-28

---

## Module ID & Name

MOD-004: Project Detail: Marketing Analytics

## Purpose

Detail page for the Marketing Analytics Platform at route /projects/marketing-analytics. Renders a header area with project name, tagline, stack chips, live demo link, and GitHub link, followed by the full case study body rendered verbatim from `asset/content/case-study-marketing-analytics.md`.

Note: MOD-004, MOD-005, and MOD-006 are all served by a single dynamic route file `app/projects/[slug]/page.tsx` per the Tech Lead's recommendation (collapse three project detail directories into one [slug] route). The engineer implementing this module writes that single shared file. The slug for this module is "marketing-analytics".

## Context

**Business problem:** From PRD Goal 2: "Showcase three strong projects as full case studies, each reachable in one click from the projects grid." Each project detail page must give recruiters and engineers a full picture of the project — problem, role, decisions, impact, and learnings — without requiring them to open an external document. The Marketing Analytics Platform is described as "Adopted in production, cut recurring analytics work by ~60%."

**User stories:** The PRD does not define US-IDs for this project. The following page-level requirements from PRD section 4.3 govern this module:

- Route: /projects/marketing-analytics
- Source file: `asset/content/case-study-marketing-analytics.md` — case study is fully written and ready.
- Header area: project name (H1) "Marketing Analytics Platform", tagline "Adopted in production, cut recurring analytics work by ~60%", stack chips, live demo link, GitHub link.
- Case study body: render verbatim from the markdown source file.
- Sections in case study: The problem, My role, Approach and key decisions, Impact, What I learned.

**Non-goals (from PRD section 8 — Out of Scope):**
- No blog infrastructure.
- Optional assets (screenshots, demo clip) are non-blocking — the page renders correctly without them.

## Related User Stories

- No formal US-IDs defined in PRD revision 1.2. Requirements are drawn directly from PRD section 4.3.

## Requirements

- Page route: `/projects/marketing-analytics` (served via `app/projects/[slug]/page.tsx`, slug = "marketing-analytics").
- The `[slug]` page uses a single dynamic route that handles all three project slugs (marketing-analytics, multi-agent-system, tabvault).
- `params` is `Promise<{ slug: string }>` and must be awaited: `const { slug } = await params`. This applies to both the page component and `generateMetadata`.
- `export const dynamicParams = false` is set in the `[slug]` page to return 404 for unknown slugs.
- `generateStaticParams` iterates the projects data array to return all valid slugs — no hard-coded slug strings.
- Header area elements:
  - Project name H1: "Marketing Analytics Platform"
  - Tagline: "Adopted in production, cut recurring analytics work by ~60%"
  - Stack chips: Java 21 / Spring Boot · React / TypeScript · Redux Toolkit · PostgreSQL · Redis · Docker · GitHub Actions · AWS (EC2, ALB, RDS, ElastiCache, S3, CloudFront)
  - Live demo link: https://www.siteplusplus.space — labeled "Live demo" with `target="_blank" rel="noopener noreferrer"`
  - GitHub link: https://github.com/LeonWu813/marketing-analytics — labeled "GitHub" with `target="_blank" rel="noopener noreferrer"`
- Case study body: read from `asset/content/case-study-marketing-analytics.md` using `fs.readFileSync` (path resolved via `path.join(process.cwd(), '../asset/content/', filename)`) and parsed with `marked`. Render verbatim — do not alter the markdown content.
- All external links include `target="_blank" rel="noopener noreferrer"`.
- Page exports a `metadata` object with title "Marketing Analytics Platform — Leon Wu" and page-specific description.
- Page exports Open Graph tags and Twitter card tags.
- Page exports a canonical URL tag.
- [AMBIGUITY: PRD lists domain name as a still-needed blocking asset — og:url and canonical URL values cannot be populated until the domain is confirmed. PM must provide the domain before production deploy.]
- Page is a Server Component (no `'use client'`).
- Optional assets (screenshots, demo clip) are not yet provided; the page must render correctly without them.

## Input / Output Contract

**Input:**
- `params: Promise<{ slug: string }>` — awaited to obtain `slug = "marketing-analytics"`.
- Project record for "marketing-analytics" from the TypeScript data file, looked up by slug.
- Markdown content of `asset/content/case-study-marketing-analytics.md` read via `fs.readFileSync`.

**Output:**
- Rendered page at route `/projects/marketing-analytics` inside the Site Shell layout (MOD-001).
- Header: H1 project name, tagline, stack chips, live demo link, GitHub link.
- Case study body: HTML rendered from the markdown source file.
- Page-level `metadata` object for SEO and Open Graph.

## Dependencies

- MOD-001 (Site Shell) — the detail page is rendered inside the layout shell.
- MOD-003 (Projects Grid) — shares the project data file and the `Project` TypeScript interface; `generateStaticParams` relies on the same data array.

## Acceptance Criteria

- AC-029: The system shall render "Marketing Analytics Platform" as H1 and the tagline "Adopted in production, cut recurring analytics work by ~60%" on the /projects/marketing-analytics route.
- AC-030: The system shall render stack chips for Java 21 / Spring Boot, React / TypeScript, Redux Toolkit, PostgreSQL, Redis, Docker, GitHub Actions, and AWS (EC2, ALB, RDS, ElastiCache, S3, CloudFront).
- AC-031: The system shall render a "Live demo" link to https://www.siteplusplus.space and a "GitHub" link to https://github.com/LeonWu813/marketing-analytics, both with `target="_blank" rel="noopener noreferrer"`.
- AC-032: The system shall render the case study body verbatim from `asset/content/case-study-marketing-analytics.md` parsed from markdown.
- AC-033: The system shall await `params` before reading the slug, with `params` typed as `Promise<{ slug: string }>`.
- AC-034: The system shall set `dynamicParams = false` so that an unknown slug returns 404.
- AC-035: The system shall populate `generateStaticParams` by iterating the projects data array, not by hard-coding slug strings.
- AC-036: The system shall export a metadata object with title "Marketing Analytics Platform — Leon Wu" and Open Graph and Twitter card tags.
