**Last Synced from PRD Revision**: 1.3 | **Last Updated**: 2026-06-29

---

## Module ID & Name

MOD-006: Project Detail: TabVault

## Purpose

Detail page for TabVault at route /projects/tabvault. Renders a header area with H1 project name, atAGlance line (muted, below title), tag chips, external links row, description as a pull-quote (border-l-2 accent), and then sections from structured TypeScript data (each section: h2 heading + paragraphs with inline bold). Content is stored as a `ProjectEntry` in `site/data/projects-data.ts` — not read from markdown via fs.readFileSync.

Note: MOD-004, MOD-005, and MOD-006 are all served by a single dynamic route file `app/projects/[slug]/page.tsx`. The slug for this module is "tabvault".

## Context

**Business problem:** From PRD Goal 2: "Showcase three strong projects as full case studies, each reachable in one click from the projects sidebar." TabVault is described as "Orchestrator + reviewer · 3 clients (Chrome MV3, React PWA, Spring Boot API) · Built by my multi-agent system · Live on AWS ECS Fargate" — it demonstrates both Leon's full-stack engineering capability and his multi-agent system in action. The detail page must give recruiters the full story of the product's architecture, Leon's role, and the outcomes.

**User stories:** The PRD does not define US-IDs for this project. The following page-level requirements from PRD sections 4.5 and 5 govern this module:

- Route: /projects/tabvault
- Source file reference: `asset/content/case-study-tabvault-detailed.md` (content stored as structured TypeScript data in `site/data/projects-data.ts`).
- Header area: H1 "TabVault", atAGlance line (muted, below title), tag chips, external links row (plain `<a>` tags, no ↗), description as pull-quote (border-l-2 accent).
- Sections: The problem, My role, How it works end to end, Architecture, Key engineering decisions, Challenges and how I resolved them, Impact, What I learned and what I would improve.
- Inline bold: paragraphs may contain `**bold text**` markdown rendered as `<strong>` via an InlineBold helper component.

**Non-goals (from PRD section 8 — Out of Scope):**
- No blog infrastructure.
- Optional assets (screenshots, demo clip) are non-blocking — the page renders correctly without them.

## Related User Stories

- No formal US-IDs defined in PRD revision 1.3. Requirements are drawn directly from PRD sections 4.5 and 5.

## Requirements

- Page route: `/projects/tabvault` (served via `app/projects/[slug]/page.tsx`, slug = "tabvault").
- The `[slug]` page uses a single dynamic route that handles all three project slugs (siteplus, multi-agent-system, tabvault).
- `params` is `Promise<{ slug: string }>` and must be awaited: `const { slug } = await params`. This applies to both the page component and `generateMetadata`.
- `export const dynamicParams = false` is set in the `[slug]` page to return 404 for unknown slugs.
- `generateStaticParams` iterates the projects array in `site/data/projects-data.ts` — no hard-coded slug strings.
- Content is NOT rendered from markdown via `fs.readFileSync` + `marked`. Content is stored as structured TypeScript data (`ProjectEntry` with `sections: ProjectSection[]`) in `site/data/projects-data.ts`.
- Header area elements (rendered in this order):
  - H1: "TabVault"
  - atAGlance line (muted, below title): "Orchestrator + reviewer · 3 clients (Chrome MV3, React PWA, Spring Boot API) · Built by my multi-agent system · Live on AWS ECS Fargate"
  - Tag chips: Java 21 / Spring Boot · React / TypeScript PWA · Chrome Extension (MV3) · PostgreSQL · Redis · Quartz · Claude API · AWS ECS Fargate
  - External links row (plain `<a>` tags, no ↗ icon):
    - "Live: tab-vault.com" — https://tab-vault.com — with `target="_blank" rel="noopener noreferrer"`
    - "GitHub: tab-management" — https://github.com/LeonWu813/tab-management — with `target="_blank" rel="noopener noreferrer"`
  - Description as pull-quote (`border-l-2 accent`): "A production full-stack tab manager spanning a Chrome extension, a React PWA, and a Spring Boot backend, with an AI content-analysis pipeline. I produced it by running my own multi-agent development system, reviewing and approving every step."
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
- Page exports a `metadata` object with title "TabVault — Leon Wu" and page-specific description.
- Page exports Open Graph tags and Twitter card tags.
- Page exports a canonical URL tag.
- [AMBIGUITY: PRD lists domain name as a still-needed blocking asset — og:url and canonical URL values cannot be populated until the domain is confirmed. PM must provide the domain before production deploy.]
- Page is a Server Component (no `'use client'`).
- Optional assets (screenshots, demo clip) are not yet provided; the page must render correctly without them.

**TabVault ProjectEntry record (from PRD section 5):**
```
slug: "tabvault"
title: "TabVault"
tech: "Full-Stack · PWA · AI · AWS"
tags: ["Java 21 / Spring Boot", "React / TypeScript PWA", "Chrome Extension (MV3)", "PostgreSQL", "Redis", "Quartz", "Claude API", "AWS ECS Fargate"]
atAGlance: "Orchestrator + reviewer · 3 clients (Chrome MV3, React PWA, Spring Boot API) · Built by my multi-agent system · Live on AWS ECS Fargate"
description: "A production full-stack tab manager spanning a Chrome extension, a React PWA, and a Spring Boot backend, with an AI content-analysis pipeline. I produced it by running my own multi-agent development system, reviewing and approving every step."
links:
  - { label: "Live: tab-vault.com", href: "https://tab-vault.com" }
  - { label: "GitHub: tab-management", href: "https://github.com/LeonWu813/tab-management" }
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
- `params: Promise<{ slug: string }>` — awaited to obtain `slug = "tabvault"`.
- `ProjectEntry` record for slug "tabvault" from `site/data/projects-data.ts`, looked up by slug.

**Output:**
- Rendered page at route `/projects/tabvault` inside the projects split-panel layout (MOD-003) and the Site Shell layout (MOD-001).
- Header: H1 title, atAGlance line (muted), tag chips, external links row (two links), description pull-quote.
- Sections: each h2 heading followed by paragraphs with inline bold rendered via InlineBold helper.
- Page-level `metadata` object for SEO and Open Graph.

## Dependencies

- MOD-001 (Site Shell) — the detail page is rendered inside the layout shell.
- MOD-003 (Projects Split Panel) — the detail page is rendered as `{children}` in the right panel of the projects layout; shares `site/data/projects-data.ts` and the `ProjectEntry` interface; `generateStaticParams` relies on the same data array.

## Acceptance Criteria

- AC-053: The system shall render "TabVault" as H1 on the /projects/tabvault route.
- AC-054: The system shall render the atAGlance line "Orchestrator + reviewer · 3 clients (Chrome MV3, React PWA, Spring Boot API) · Built by my multi-agent system · Live on AWS ECS Fargate" in a muted style below the H1.
- AC-055: The system shall render tag chips for: Java 21 / Spring Boot, React / TypeScript PWA, Chrome Extension (MV3), PostgreSQL, Redis, Quartz, Claude API, AWS ECS Fargate.
- AC-056: The system shall render two external links — "Live: tab-vault.com" (https://tab-vault.com) and "GitHub: tab-management" (https://github.com/LeonWu813/tab-management) — as plain `<a>` tags with `target="_blank" rel="noopener noreferrer"`.
- AC-057: The system shall render the description as a pull-quote with `border-l-2 accent` styling above the sections.
- AC-058: The system shall render the eight sections in order (The problem, My role, How it works end to end, Architecture, Key engineering decisions, Challenges and how I resolved them, Impact, What I learned and what I would improve), each with an h2 heading and paragraph content.
- AC-059: The system shall render `**bold**` syntax within paragraph text as `<strong>` elements via the InlineBold helper.
- AC-060: The system shall serve content from structured TypeScript data in `site/data/projects-data.ts` — not from `fs.readFileSync` or any markdown parsing at request time.
- AC-061: The system shall await `params` before reading the slug, with `params` typed as `Promise<{ slug: string }>`.
- AC-062: The system shall set `dynamicParams = false` so that an unknown slug returns 404.
- AC-063: The system shall populate `generateStaticParams` by iterating the projects data array, not by hard-coding slug strings.
- AC-064: The system shall export a metadata object with title "TabVault — Leon Wu" and Open Graph and Twitter card tags.
