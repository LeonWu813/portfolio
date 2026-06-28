**Last Synced from PRD Revision**: 1.2 | **Last Updated**: 2026-06-28

---

## Module ID & Name

MOD-005: Project Detail: Multi-Agent System

## Purpose

Detail page for the Multi-Agent Software Development System at route /projects/multi-agent-system. Renders a header area with project name, tagline, stack chips, primary GitHub link, TabVault repo link, and "Built by the system" link, followed by the full case study body rendered verbatim from `asset/content/case-study-multi-agent-system.md`.

Note: MOD-004, MOD-005, and MOD-006 are all served by a single dynamic route file `app/projects/[slug]/page.tsx` per the Tech Lead's recommendation. The slug for this module is "multi-agent-system".

## Context

**Business problem:** From PRD Goal 2: "Showcase three strong projects as full case studies, each reachable in one click from the projects grid." The Multi-Agent Software Development System is described as "Six AI agents that plan, build, and ship full-stack software." This project demonstrates Leon's systems design skills and his ability to build AI-powered development tooling. The detail page must convey the full story of how the system works and what it shipped.

**User stories:** The PRD does not define US-IDs for this project. The following page-level requirements from PRD section 4.4 govern this module:

- Route: /projects/multi-agent-system
- Source file: `asset/content/case-study-multi-agent-system.md` — case study is fully written and ready.
- Header area: project name (H1) "Multi-Agent Software Development System", tagline "Six AI agents that plan, build, and ship full-stack software", stack chips, GitHub (system repo) link, GitHub (TabVault repo) link, "Built by the system" link.
- Case study body: render verbatim from the markdown source file.
- Sections in case study: The problem, My role, Approach and key decisions, Impact, What I learned.

**Non-goals (from PRD section 8 — Out of Scope):**
- No blog infrastructure.
- Optional assets (diagram, demo clip) are non-blocking — the page renders correctly without them.

## Related User Stories

- No formal US-IDs defined in PRD revision 1.2. Requirements are drawn directly from PRD section 4.4.

## Requirements

- Page route: `/projects/multi-agent-system` (served via `app/projects/[slug]/page.tsx`, slug = "multi-agent-system").
- The `[slug]` page uses a single dynamic route that handles all three project slugs (marketing-analytics, multi-agent-system, tabvault).
- `params` is `Promise<{ slug: string }>` and must be awaited: `const { slug } = await params`. This applies to both the page component and `generateMetadata`.
- `export const dynamicParams = false` is set in the `[slug]` page to return 404 for unknown slugs.
- `generateStaticParams` iterates the projects data array to return all valid slugs — no hard-coded slug strings.
- Header area elements:
  - Project name H1: "Multi-Agent Software Development System"
  - Tagline: "Six AI agents that plan, build, and ship full-stack software"
  - Stack chips: Claude Code (subagents, skills, hooks) · Bash · Git
  - GitHub (system repo) link: https://github.com/LeonWu813/multi-agent-software-development-system — with `target="_blank" rel="noopener noreferrer"`
  - GitHub (TabVault repo) link: https://github.com/LeonWu813/tab-management — labeled "TabVault repo" with `target="_blank" rel="noopener noreferrer"`
  - "Built by the system" link: https://tab-vault.com — with `target="_blank" rel="noopener noreferrer"`
- Case study body: read from `asset/content/case-study-multi-agent-system.md` using `fs.readFileSync` (path resolved via `path.join(process.cwd(), '../asset/content/', filename)`) and parsed with `marked`. Render verbatim — do not alter the markdown content.
- All external links include `target="_blank" rel="noopener noreferrer"`.
- Page exports a `metadata` object with title "Multi-Agent Software Development System — Leon Wu" and page-specific description.
- Page exports Open Graph tags and Twitter card tags.
- Page exports a canonical URL tag.
- [AMBIGUITY: PRD lists domain name as a still-needed blocking asset — og:url and canonical URL values cannot be populated until the domain is confirmed. PM must provide the domain before production deploy.]
- Page is a Server Component (no `'use client'`).
- Optional assets (diagram, demo clip) are not yet provided; the page must render correctly without them.

## Input / Output Contract

**Input:**
- `params: Promise<{ slug: string }>` — awaited to obtain `slug = "multi-agent-system"`.
- Project record for "multi-agent-system" from the TypeScript data file, looked up by slug.
- Markdown content of `asset/content/case-study-multi-agent-system.md` read via `fs.readFileSync`.

**Output:**
- Rendered page at route `/projects/multi-agent-system` inside the Site Shell layout (MOD-001).
- Header: H1 project name, tagline, stack chips, GitHub (system repo) link, GitHub (TabVault repo) link, "Built by the system" link.
- Case study body: HTML rendered from the markdown source file.
- Page-level `metadata` object for SEO and Open Graph.

## Dependencies

- MOD-001 (Site Shell) — the detail page is rendered inside the layout shell.
- MOD-003 (Projects Grid) — shares the project data file and the `Project` TypeScript interface; `generateStaticParams` relies on the same data array.

## Acceptance Criteria

- AC-037: The system shall render "Multi-Agent Software Development System" as H1 and the tagline "Six AI agents that plan, build, and ship full-stack software" on the /projects/multi-agent-system route.
- AC-038: The system shall render stack chips for Claude Code (subagents, skills, hooks), Bash, and Git.
- AC-039: The system shall render a GitHub link for the system repo (https://github.com/LeonWu813/multi-agent-software-development-system), a "TabVault repo" link (https://github.com/LeonWu813/tab-management), and a "Built by the system" link (https://tab-vault.com), all with `target="_blank" rel="noopener noreferrer"`.
- AC-040: The system shall render the case study body verbatim from `asset/content/case-study-multi-agent-system.md` parsed from markdown.
- AC-041: The system shall await `params` before reading the slug, with `params` typed as `Promise<{ slug: string }>`.
- AC-042: The system shall set `dynamicParams = false` so that an unknown slug returns 404.
- AC-043: The system shall populate `generateStaticParams` by iterating the projects data array, not by hard-coding slug strings.
- AC-044: The system shall export a metadata object with title "Multi-Agent Software Development System — Leon Wu" and Open Graph and Twitter card tags.
