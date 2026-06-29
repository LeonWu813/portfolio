**Last Synced from PRD Revision**: 1.3 | **Last Updated**: 2026-06-29

---

## Module ID & Name

MOD-005: Project Detail: Multi-Agent System

## Purpose

Detail page for the Multi-Agent Software Development System at route /projects/multi-agent-system. Renders a header area with H1 project name, atAGlance line (muted, below title), tag chips, external links row, description as a pull-quote (border-l-2 accent), and then sections from structured TypeScript data (each section: h2 heading + paragraphs with inline bold). Content is stored as a `ProjectEntry` in `site/data/projects-data.ts` — not read from markdown via fs.readFileSync.

Note: MOD-004, MOD-005, and MOD-006 are all served by a single dynamic route file `app/projects/[slug]/page.tsx`. The slug for this module is "multi-agent-system".

## Context

**Business problem:** From PRD Goal 2: "Showcase three strong projects as full case studies, each reachable in one click from the projects sidebar." The Multi-Agent Software Development System is described as "Sole architect · 6 specialized agents · Human-approved at every handoff · Shipped TabVault (live)." This project demonstrates Leon's systems design skills and his ability to build AI-powered development tooling. The detail page must convey the full story of how the system works and what it shipped.

**User stories:** The PRD does not define US-IDs for this project. The following page-level requirements from PRD sections 4.4 and 5 govern this module:

- Route: /projects/multi-agent-system
- Source file reference: `asset/content/case-study-multi-agent-detailed.md` (content stored as structured TypeScript data in `site/data/projects-data.ts`).
- Header area: H1 "Multi-Agent Software Development System", atAGlance line (muted, below title), tag chips, external links row (plain `<a>` tags, no ↗), description as pull-quote (border-l-2 accent).
- Sections: The problem, My role, How it works end to end, Design principles, The six agents, Decisions worth calling out, Impact, What I learned and what I would improve.
- Inline bold: paragraphs may contain `**bold text**` markdown rendered as `<strong>` via an InlineBold helper component.

**Non-goals (from PRD section 8 — Out of Scope):**
- No blog infrastructure.
- Optional assets (diagram, demo clip) are non-blocking — the page renders correctly without them.

## Related User Stories

- No formal US-IDs defined in PRD revision 1.3. Requirements are drawn directly from PRD sections 4.4 and 5.

## Requirements

- Page route: `/projects/multi-agent-system` (served via `app/projects/[slug]/page.tsx`, slug = "multi-agent-system").
- The `[slug]` page uses a single dynamic route that handles all three project slugs (siteplus, multi-agent-system, tabvault).
- `params` is `Promise<{ slug: string }>` and must be awaited: `const { slug } = await params`. This applies to both the page component and `generateMetadata`.
- `export const dynamicParams = false` is set in the `[slug]` page to return 404 for unknown slugs.
- `generateStaticParams` iterates the projects array in `site/data/projects-data.ts` — no hard-coded slug strings.
- Content is NOT rendered from markdown via `fs.readFileSync` + `marked`. Content is stored as structured TypeScript data (`ProjectEntry` with `sections: ProjectSection[]`) in `site/data/projects-data.ts`.
- Header area elements (rendered in this order):
  - H1: "Multi-Agent Software Development System"
  - atAGlance line (muted, below title): "Sole architect · 6 specialized agents · Human-approved at every handoff · Shipped TabVault (live)"
  - Tag chips: Claude Code · Bash · Git · Multi-agent · Systems Design
  - External links row (plain `<a>` tags, no ↗ icon):
    - "Built by the system: tab-vault.com" — https://tab-vault.com — with `target="_blank" rel="noopener noreferrer"`
    - "System repo" — https://github.com/LeonWu813/multi-agent-software-development-system — with `target="_blank" rel="noopener noreferrer"`
    - "TabVault repo" — https://github.com/LeonWu813/tab-management — with `target="_blank" rel="noopener noreferrer"`
  - Description as pull-quote (`border-l-2 accent`): "A team of six AI agents that plan, build, and QA software through a controlled, human-approved workflow. The system shipped a deployed full-stack app, TabVault, from start to finish."
- Sections (each: h2 heading + paragraphs with inline bold):
  1. The problem
  2. My role
  3. How it works end to end
  4. Design principles
  5. The six agents
  6. Decisions worth calling out
  7. Impact
  8. What I learned and what I would improve
- InlineBold helper: splits paragraph text on `**...**` and renders `<strong>` tags for bolded spans.
- All external links include `target="_blank" rel="noopener noreferrer"`.
- Page exports a `metadata` object with title "Multi-Agent Software Development System — Leon Wu" and page-specific description.
- Page exports Open Graph tags and Twitter card tags.
- Page exports a canonical URL tag.
- [AMBIGUITY: PRD lists domain name as a still-needed blocking asset — og:url and canonical URL values cannot be populated until the domain is confirmed. PM must provide the domain before production deploy.]
- Page is a Server Component (no `'use client'`).
- Optional assets (diagram, demo clip) are not yet provided; the page must render correctly without them.

**Multi-Agent System ProjectEntry record (from PRD section 5):**
```
slug: "multi-agent-system"
title: "Multi-Agent Software Development System"
tech: "Harness Engineering · AI Agents · Systems Design · Claude Code"
tags: ["Claude Code", "Bash", "Git", "Multi-agent", "Systems Design"]
atAGlance: "Sole architect · 6 specialized agents · Human-approved at every handoff · Shipped TabVault (live)"
description: "A team of six AI agents that plan, build, and QA software through a controlled, human-approved workflow. The system shipped a deployed full-stack app, TabVault, from start to finish."
links:
  - { label: "Built by the system: tab-vault.com", href: "https://tab-vault.com" }
  - { label: "System repo", href: "https://github.com/LeonWu813/multi-agent-software-development-system" }
  - { label: "TabVault repo", href: "https://github.com/LeonWu813/tab-management" }
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
- `params: Promise<{ slug: string }>` — awaited to obtain `slug = "multi-agent-system"`.
- `ProjectEntry` record for slug "multi-agent-system" from `site/data/projects-data.ts`, looked up by slug.

**Output:**
- Rendered page at route `/projects/multi-agent-system` inside the projects split-panel layout (MOD-003) and the Site Shell layout (MOD-001).
- Header: H1 title, atAGlance line (muted), tag chips, external links row (three links), description pull-quote.
- Sections: each h2 heading followed by paragraphs with inline bold rendered via InlineBold helper.
- Page-level `metadata` object for SEO and Open Graph.

## Dependencies

- MOD-001 (Site Shell) — the detail page is rendered inside the layout shell.
- MOD-003 (Projects Split Panel) — the detail page is rendered as `{children}` in the right panel of the projects layout; shares `site/data/projects-data.ts` and the `ProjectEntry` interface; `generateStaticParams` relies on the same data array.

## Acceptance Criteria

- AC-041: The system shall render "Multi-Agent Software Development System" as H1 on the /projects/multi-agent-system route.
- AC-042: The system shall render the atAGlance line "Sole architect · 6 specialized agents · Human-approved at every handoff · Shipped TabVault (live)" in a muted style below the H1.
- AC-043: The system shall render tag chips for: Claude Code, Bash, Git, Multi-agent, Systems Design.
- AC-044: The system shall render three external links — "Built by the system: tab-vault.com" (https://tab-vault.com), "System repo" (https://github.com/LeonWu813/multi-agent-software-development-system), and "TabVault repo" (https://github.com/LeonWu813/tab-management) — as plain `<a>` tags with `target="_blank" rel="noopener noreferrer"`.
- AC-045: The system shall render the description as a pull-quote with `border-l-2 accent` styling above the sections.
- AC-046: The system shall render the eight sections in order (The problem, My role, How it works end to end, Design principles, The six agents, Decisions worth calling out, Impact, What I learned and what I would improve), each with an h2 heading and paragraph content.
- AC-047: The system shall render `**bold**` syntax within paragraph text as `<strong>` elements via the InlineBold helper.
- AC-048: The system shall serve content from structured TypeScript data in `site/data/projects-data.ts` — not from `fs.readFileSync` or any markdown parsing at request time.
- AC-049: The system shall await `params` before reading the slug, with `params` typed as `Promise<{ slug: string }>`.
- AC-050: The system shall set `dynamicParams = false` so that an unknown slug returns 404.
- AC-051: The system shall populate `generateStaticParams` by iterating the projects data array, not by hard-coding slug strings.
- AC-052: The system shall export a metadata object with title "Multi-Agent Software Development System — Leon Wu" and Open Graph and Twitter card tags.
