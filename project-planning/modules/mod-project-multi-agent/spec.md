**Last Synced from PRD Revision**: 1.4 | **Last Updated**: 2026-11-01

---

## Module ID & Name

MOD-005: Project Detail: Multi-Agent System

## Purpose

Detail page for the Multi-Agent Software Development System at route /projects/multi-agent-system. Renders a header area with H1 project name, atAGlance line (muted, below title), tag chips, external links row, description as a pull-quote (border-l-2 accent), a feature image with caption, and then sections from structured TypeScript data (each section: h2 heading + paragraphs with inline bold). Content is stored as a `ProjectEntry` in `site/data/projects-data.ts` — not read from markdown via fs.readFileSync.

Note: MOD-004, MOD-005, MOD-006, and MOD-011 are all served by a single dynamic route file `app/projects/[slug]/page.tsx`. The slug for this module is "multi-agent-system".

## Context

**Business problem:** From PRD Goal 2: "Showcase four strong projects as full case studies, each reachable in one click from the projects sidebar." The Multi-Agent Software Development System is described as "Sole architect · 6 specialized agents + coordinator · Human-approved at every handoff · Shipped TabVault (live) · ProjectDay submitted to the App Store." This project demonstrates Leon's systems design skills and his ability to build AI-powered development tooling. The detail page must convey the full story of how the system works and what it shipped.

**User stories:** The PRD does not define US-IDs for this project. The following page-level requirements from PRD sections 4.4 and 5 govern this module:

- Route: /projects/multi-agent-system
- Source file reference: `asset/content/case-study-multi-agent-detailed.md` (content stored as structured TypeScript data in `site/data/projects-data.ts`).
- Header area: H1 "Multi-Agent Software Development System", atAGlance line (muted, below title), tag chips, external links row (plain `<a>` tags, no ↗), description as pull-quote (border-l-2 accent).
- Feature image: `asset/diagrams/multi-agent-horizontal.png` with caption "Human approval sits on every arrow. The coordinator runs the next step only after the human says yes."
- Sections: The problem, My role, How it works, end to end, Design principles, The six agents, Decisions worth calling out, Impact, What I learned, and what I would improve.
- Inline bold: paragraphs may contain `**bold text**` markdown rendered as `<strong>` via an InlineBold helper component.
- Feature image: `asset/diagrams/multi-agent-horizontal.png` (landscape, 3080x1560), in the same position as the current portrait diagram.
- Feature image caption: Human approval sits on every arrow. The coordinator runs the next step only after the human says yes.

**Non-goals (from PRD section 8 — Out of Scope):**
- No blog infrastructure.

## Related User Stories

- No formal US-IDs defined in PRD revision 1.3. Requirements are drawn directly from PRD sections 4.4 and 5.

## Requirements

- Page route: `/projects/multi-agent-system` (served via `app/projects/[slug]/page.tsx`, slug = "multi-agent-system").
- The `[slug]` page uses a single dynamic route that handles all four project slugs (siteplus, multi-agent-system, tabvault, projectday).
- `params` is `Promise<{ slug: string }>` and must be awaited: `const { slug } = await params`. This applies to both the page component and `generateMetadata`.
- `export const dynamicParams = false` is set in the `[slug]` page to return 404 for unknown slugs.
- `generateStaticParams` iterates the projects array in `site/data/projects-data.ts` — no hard-coded slug strings.
- Content is NOT rendered from markdown via `fs.readFileSync` + `marked`. Content is stored as structured TypeScript data (`ProjectEntry` with `sections: ProjectSection[]`) in `site/data/projects-data.ts`.
- Header area elements (rendered in this order):
  - H1: "Multi-Agent Software Development System"
  - atAGlance line (muted, below title): "Sole architect · 6 specialized agents + coordinator · Human-approved at every handoff · Shipped TabVault (live) · ProjectDay submitted to the App Store"
  - Tag chips: Claude Code · Bash · Python · Git · Multi-agent · Systems Design
  - External links row (plain `<a>` tags, no ↗ icon):
    - "Built by the system: tab-vault.com" — https://tab-vault.com — with `target="_blank" rel="noopener noreferrer"`
    - "System repo" — https://github.com/LeonWu813/multi-agent-software-development-system — with `target="_blank" rel="noopener noreferrer"`
    - "TabVault repo" — https://github.com/LeonWu813/tab-management — with `target="_blank" rel="noopener noreferrer"`
  - Description as pull-quote (`border-l-2 accent`): "A team of six AI agents, run by a coordinator session, that plan, build, and QA software through a human-approved workflow. It has shipped two products: TabVault, a live full-stack web app, and ProjectDay, an iOS app submitted to the App Store."
  - Feature image: `asset/diagrams/multi-agent-horizontal.png` (landscape, 3080x1560). It replaces the current portrait diagram in the same position on the page. Editable source: `asset/diagrams/multi-agent-horizontal.html`.
  - Feature image caption: Human approval sits on every arrow. The coordinator runs the next step only after the human says yes.
- Sections (each: h2 heading + paragraphs with inline bold):
  1. The problem
  2. My role
  3. How it works, end to end
  4. Design principles
  5. The six agents
  6. Decisions worth calling out
  7. Impact
  8. What I learned, and what I would improve
- InlineBold helper: splits paragraph text on `**...**` and renders `<strong>` tags for bolded spans.
- All external links include `target="_blank" rel="noopener noreferrer"`.
- Page exports a `metadata` object with title "Multi-Agent Software Development System — Leon Wu" and page-specific description.
- Page exports Open Graph tags and Twitter card tags.
- Page exports a canonical URL tag.
- [AMBIGUITY: PRD lists domain name as a still-needed blocking asset — og:url and canonical URL values cannot be populated until the domain is confirmed. PM must provide the domain before production deploy.]
- Page is a Server Component (no `'use client'`).
- Body copy: Section paragraphs match `asset/content/case-study-multi-agent-detailed.md` as of revision 1.4 (6 agents plus a coordinator, PM two-pass approval, scope check, pstack reviews, integration review, repeat-failure escalation, and an Impact section covering TabVault and ProjectDay).

**Multi-Agent System ProjectEntry record (from PRD section 5):**
```
slug: "multi-agent-system"
title: "Multi-Agent Software Development System"
tech: "Harness Engineering · AI Agents · Systems Design · Claude Code"
tags: ["Claude Code", "Bash", "Python", "Git", "Multi-agent", "Systems Design"]
atAGlance: "Sole architect · 6 specialized agents + coordinator · Human-approved at every handoff · Shipped TabVault (live) · ProjectDay submitted to the App Store"
description: "A team of six AI agents, run by a coordinator session, that plan, build, and QA software through a human-approved workflow. It has shipped two products: TabVault, a live full-stack web app, and ProjectDay, an iOS app submitted to the App Store."
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
- Header: H1 title, atAGlance line (muted), tag chips, external links row (three links), description pull-quote, feature image with caption.
- Sections: each h2 heading followed by paragraphs with inline bold rendered via InlineBold helper.
- Page-level `metadata` object for SEO and Open Graph.

## Dependencies

- MOD-001 (Site Shell) — the detail page is rendered inside the layout shell.
- MOD-003 (Projects Split Panel) — the detail page is rendered as `{children}` in the right panel of the projects layout; shares `site/data/projects-data.ts` and the `ProjectEntry` interface; `generateStaticParams` relies on the same data array.

## Acceptance Criteria

- AC-041: The system shall render "Multi-Agent Software Development System" as H1 on the /projects/multi-agent-system route.
- AC-042: The system shall render the atAGlance line "Sole architect · 6 specialized agents + coordinator · Human-approved at every handoff · Shipped TabVault (live) · ProjectDay submitted to the App Store" in a muted style below the H1.
- AC-043: The system shall render tag chips for: Claude Code, Bash, Python, Git, Multi-agent, Systems Design.
- AC-044: The system shall render three external links — "Built by the system: tab-vault.com" (https://tab-vault.com), "System repo" (https://github.com/LeonWu813/multi-agent-software-development-system), and "TabVault repo" (https://github.com/LeonWu813/tab-management) — as plain `<a>` tags with `target="_blank" rel="noopener noreferrer"`.
- AC-045: The system shall render the description as a pull-quote with `border-l-2 accent` styling above the sections.
- AC-046: The system shall render the eight sections in order (The problem, My role, How it works, end to end, Design principles, The six agents, Decisions worth calling out, Impact, What I learned, and what I would improve), each with an h2 heading and paragraph content.
- AC-047: The system shall render `**bold**` syntax within paragraph text as `<strong>` elements via the InlineBold helper.
- AC-048: The system shall serve content from structured TypeScript data in `site/data/projects-data.ts` — not from `fs.readFileSync` or any markdown parsing at request time.
- AC-049: The system shall await `params` before reading the slug, with `params` typed as `Promise<{ slug: string }>`.
- AC-050: The system shall set `dynamicParams = false` so that an unknown slug returns 404.
- AC-051: The system shall populate `generateStaticParams` by iterating the projects data array, not by hard-coding slug strings.
- AC-052: The system shall export a metadata object with title "Multi-Agent Software Development System — Leon Wu" and Open Graph and Twitter card tags.
- AC-091: On /projects/multi-agent-system, the feature image is the landscape diagram from `asset/diagrams/multi-agent-horizontal.png`, not the earlier portrait diagram. It fills the width of the content column with no cropping on desktop (1280px wide) and mobile (375px wide). It has alt text describing the workflow (proposed: "Workflow diagram of the multi-agent system. A planning row runs from user requirements through PM, Tech Lead, human setup and approval, PM finalize, and Doc-Sync. A build row runs through Engineer, QA, Tech Lead integration review, PM checkpoint, and project complete, with loops for bugs, repeat failures, spec issues and retrospectives, all run by a coordinator session."), and the caption above appears directly below it.
- AC-092: The At-a-glance line, tags, three links, description pull-quote, and every section paragraph on /projects/multi-agent-system match revision 1.4 and the source file word for word. The editor's line "Feature image: ..." from the source file does not appear on the page.
