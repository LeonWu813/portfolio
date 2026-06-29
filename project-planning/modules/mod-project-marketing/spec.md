**Last Synced from PRD Revision**: 1.3 | **Last Updated**: 2026-06-29

---

## Module ID & Name

MOD-004: Project Detail: SitePlus+

## Purpose

Detail page for SitePlus+ at route /projects/siteplus. Renders a header area with H1 project name, atAGlance line (muted, below title), tag chips, external links row, description as a pull-quote (border-l-2 accent), and then sections from structured TypeScript data (each section: h2 heading + paragraphs with inline bold). Content is stored as a `ProjectEntry` in `site/data/projects-data.ts` — not read from markdown via fs.readFileSync.

Note: MOD-004, MOD-005, and MOD-006 are all served by a single dynamic route file `app/projects/[slug]/page.tsx`. The slug for this module is "siteplus".

## Context

**Business problem:** From PRD Goal 2: "Showcase three strong projects as full case studies, each reachable in one click from the projects sidebar." Each project detail page must give recruiters and engineers a full picture of the project — problem, role, decisions, impact, and learnings — without requiring them to open an external document. SitePlus+ is described as "Sole engineer · Full-stack + AWS infra · Live in production · Cut recurring analytics work ~60%."

**User stories:** The PRD does not define US-IDs for this project. The following page-level requirements from PRD sections 4.3 and 5 govern this module:

- Route: /projects/siteplus
- Source file reference: `asset/content/case-study-siteplus-detailed.md` (content stored as structured TypeScript data in `site/data/projects-data.ts`).
- Header area: H1 "SitePlus+", atAGlance line (muted, below title), tag chips, external links row (plain `<a>` tags, no ↗), description as pull-quote (border-l-2 accent).
- Sections: The problem, My role, How it works end to end, Architecture, Key engineering decisions, Challenges and how I resolved them, Impact, What I learned and what I would improve.
- Inline bold: paragraphs may contain `**bold text**` markdown rendered as `<strong>` via an InlineBold helper component.

**Non-goals (from PRD section 8 — Out of Scope):**
- No blog infrastructure.
- Optional assets (screenshots) are non-blocking — the page renders correctly without them.

## Related User Stories

- No formal US-IDs defined in PRD revision 1.3. Requirements are drawn directly from PRD sections 4.3 and 5.

## Requirements

- Page route: `/projects/siteplus` (served via `app/projects/[slug]/page.tsx`, slug = "siteplus").
- The `[slug]` page uses a single dynamic route that handles all three project slugs (siteplus, multi-agent-system, tabvault).
- `params` is `Promise<{ slug: string }>` and must be awaited: `const { slug } = await params`. This applies to both the page component and `generateMetadata`.
- `export const dynamicParams = false` is set in the `[slug]` page to return 404 for unknown slugs.
- `generateStaticParams` iterates the projects array in `site/data/projects-data.ts` — no hard-coded slug strings.
- Content is NOT rendered from markdown via `fs.readFileSync` + `marked`. Content is stored as structured TypeScript data (`ProjectEntry` with `sections: ProjectSection[]`) in `site/data/projects-data.ts`.
- Header area elements (rendered in this order):
  - H1: "SitePlus+"
  - atAGlance line (muted, below title): "Sole engineer · Full-stack + AWS infra · Live in production · Cut recurring analytics work ~60%"
  - Tag chips: Full-Stack · Java/Spring Boot · React · TypeScript · Redux Toolkit · PostgreSQL · Redis · Docker · GitHub Actions · AWS
  - External links row (plain `<a>` tags, no ↗ icon):
    - "Live demo" — https://www.siteplusplus.space — with `target="_blank" rel="noopener noreferrer"`
    - "GitHub: marketing-analytics" — https://github.com/LeonWu813/marketing-analytics — with `target="_blank" rel="noopener noreferrer"`
  - Description as pull-quote (`border-l-2 accent`): "A full-stack analytics platform for tracking user behavior, managing campaigns, and auditing SEO across multiple websites. Built end to end on my own and adopted in production by a real company, where it cut recurring analytics work by roughly 60 percent."
- Sections (each: h2 heading + paragraphs with inline bold):
  1. The problem
  2. My role
  3. How it works end to end
  4. Architecture
  5. Key engineering decisions
  6. Challenges and how I resolved them
  7. Impact
  8. What I learned and what I would improve
- InlineBold helper: splits paragraph text on `**...**` and renders `<strong>` tags for bolded spans.
- All external links include `target="_blank" rel="noopener noreferrer"`.
- Page exports a `metadata` object with title "SitePlus+ — Leon Wu" and page-specific description.
- Page exports Open Graph tags and Twitter card tags.
- Page exports a canonical URL tag.
- [AMBIGUITY: PRD lists domain name as a still-needed blocking asset — og:url and canonical URL values cannot be populated until the domain is confirmed. PM must provide the domain before production deploy.]
- Page is a Server Component (no `'use client'`).
- Optional assets (screenshots) are not yet provided; the page must render correctly without them.

**SitePlus+ ProjectEntry record (from PRD section 5):**
```
slug: "siteplus"
title: "SitePlus+"
tech: "Full-Stack · Java/Spring Boot · React · AWS"
tags: ["Full-Stack", "Java/Spring Boot", "React", "TypeScript", "Redux Toolkit", "PostgreSQL", "Redis", "Docker", "GitHub Actions", "AWS"]
atAGlance: "Sole engineer · Full-stack + AWS infra · Live in production · Cut recurring analytics work ~60%"
description: "A full-stack analytics platform for tracking user behavior, managing campaigns, and auditing SEO across multiple websites. Built end to end on my own and adopted in production by a real company, where it cut recurring analytics work by roughly 60 percent."
links:
  - { label: "Live demo", href: "https://www.siteplusplus.space" }
  - { label: "GitHub: marketing-analytics", href: "https://github.com/LeonWu813/marketing-analytics" }
```

**ProjectEntry TypeScript interface (from PRD section 5):**
```typescript
interface ProjectLink { label: string; href: string; }
interface ProjectSection { heading: string; paragraphs: string[]; }
interface ProjectEntry {
  slug: string;
  year: string;
  date: string;
  title: string;
  tech: string;
  tags: string[];
  atAGlance: string;
  description: string;
  links: ProjectLink[];
  sections: ProjectSection[];
}
```

## Input / Output Contract

**Input:**
- `params: Promise<{ slug: string }>` — awaited to obtain `slug = "siteplus"`.
- `ProjectEntry` record for slug "siteplus" from `site/data/projects-data.ts`, looked up by slug.

**Output:**
- Rendered page at route `/projects/siteplus` inside the projects split-panel layout (MOD-003) and the Site Shell layout (MOD-001).
- Header: H1 title, atAGlance line (muted), tag chips, external links row, description pull-quote.
- Sections: each h2 heading followed by paragraphs with inline bold rendered via InlineBold helper.
- Page-level `metadata` object for SEO and Open Graph.

## Dependencies

- MOD-001 (Site Shell) — the detail page is rendered inside the layout shell.
- MOD-003 (Projects Split Panel) — the detail page is rendered as `{children}` in the right panel of the projects layout; shares `site/data/projects-data.ts` and the `ProjectEntry` interface; `generateStaticParams` relies on the same data array.

## Acceptance Criteria

- AC-029: The system shall render "SitePlus+" as H1 on the /projects/siteplus route.
- AC-030: The system shall render the atAGlance line "Sole engineer · Full-stack + AWS infra · Live in production · Cut recurring analytics work ~60%" in a muted style below the H1.
- AC-031: The system shall render tag chips for: Full-Stack, Java/Spring Boot, React, TypeScript, Redux Toolkit, PostgreSQL, Redis, Docker, GitHub Actions, AWS.
- AC-032: The system shall render a "Live demo" link to https://www.siteplusplus.space and a "GitHub: marketing-analytics" link to https://github.com/LeonWu813/marketing-analytics, both as plain `<a>` tags with `target="_blank" rel="noopener noreferrer"`.
- AC-033: The system shall render the description as a pull-quote with `border-l-2 accent` styling above the sections.
- AC-034: The system shall render the eight sections in order (The problem, My role, How it works end to end, Architecture, Key engineering decisions, Challenges and how I resolved them, Impact, What I learned and what I would improve), each with an h2 heading and paragraph content.
- AC-035: The system shall render `**bold**` syntax within paragraph text as `<strong>` elements via the InlineBold helper.
- AC-036: The system shall serve content from structured TypeScript data in `site/data/projects-data.ts` — not from `fs.readFileSync` or any markdown parsing at request time.
- AC-037: The system shall await `params` before reading the slug, with `params` typed as `Promise<{ slug: string }>`.
- AC-038: The system shall set `dynamicParams = false` so that an unknown slug returns 404.
- AC-039: The system shall populate `generateStaticParams` by iterating the projects data array, not by hard-coding slug strings.
- AC-040: The system shall export a metadata object with title "SitePlus+ — Leon Wu" and Open Graph and Twitter card tags.
