**Last Synced from PRD Revision**: 1.2 | **Last Updated**: 2026-06-28

---

## Module ID & Name

MOD-003: Projects Grid Page

## Purpose

Show all three projects at a glance at route /projects. Recruiters should be able to see the project name, the strongest fact, and the tech stack without clicking through. Renders three project cards in a responsive grid (1 column on mobile, 2–3 columns on tablet/desktop). Each card shows name, tagline, description, tags, status badge, and action links. Cards are visually equivalent in weight — no featured card that visually dominates.

## Context

**Business problem:** From PRD Goal 2: "Showcase three strong projects as full case studies, each reachable in one click from the projects grid." From PRD Success Criteria: "The top three projects, each showing role and stack, are visible without scrolling on the Projects page." Recruiters scanning the site need enough information on each card to decide whether to click through.

**User stories:** The PRD does not define US-IDs for this project. The following page-level requirements from PRD section 4.2 govern this module:

- Route: /projects
- Page heading: "Projects"
- Intro line (verbatim): "Things I have designed, built, and shipped"
- Three project cards in fixed order: Marketing Analytics Platform, Multi-Agent Software Development System, TabVault.
- Each card contains: name, tagline, description, tags, status badge, action links.
- Cards link to their respective detail routes.
- Responsive grid: 1 column on mobile, 2–3 columns on tablet/desktop.
- Cards are visually equivalent in weight — no "featured" card that visually dominates.
- Tags render as small chip/badge elements.
- Status renders as a small "Active" badge (green dot or similar).

**Non-goals (from PRD section 8 — Out of Scope):**
- No blog or blog infrastructure.

## Related User Stories

- No formal US-IDs defined in PRD revision 1.2. Requirements are drawn directly from PRD section 4.2.

## Requirements

- Page route: `/projects`
- Page heading: "Projects"
- Intro line (verbatim): "Things I have designed, built, and shipped"
- Three project cards rendered in fixed order: Card 1 Marketing Analytics Platform, Card 2 Multi-Agent Software Development System, Card 3 TabVault.
- Project data is read from the data file (TypeScript data file, e.g., `lib/project-data.ts` or `data/projects.ts`) — not hardcoded in the component.
- Each card displays: project name, tagline, description, tags (as chip/badge elements), status badge (Active), and action links.
- Card 1 action links: "Live demo" (https://www.siteplusplus.space) and "GitHub" (https://github.com/LeonWu813/marketing-analytics) with `target="_blank" rel="noopener noreferrer"`. Card routes to /projects/marketing-analytics.
- Card 2 action links: "GitHub" (https://github.com/LeonWu813/multi-agent-software-development-system) and "Built by the system" (https://tab-vault.com) with `target="_blank" rel="noopener noreferrer"`. Card routes to /projects/multi-agent-system.
- Card 3 action links: "Live" (https://tab-vault.com) and "GitHub" (https://github.com/LeonWu813/tab-management) with `target="_blank" rel="noopener noreferrer"`. Card routes to /projects/tabvault.
- All external links include `target="_blank" rel="noopener noreferrer"`.
- Responsive grid: 1 column on mobile, 2–3 columns on tablet/desktop.
- Cards are visually equivalent in weight — no featured card.
- Status badge renders as "Active" with a green dot or similar indicator.
- Tags render as small chip/badge elements.
- Each card's name/heading links to its respective detail route (internal navigation).
- Page exports a `metadata` object with title "Projects — Leon Wu" and page-specific description.
- Page exports Open Graph tags and Twitter card tags.
- Page exports a canonical URL tag.
- [AMBIGUITY: PRD lists domain name as a still-needed blocking asset — og:url and canonical URL values cannot be populated until the domain is confirmed. PM must provide the domain before production deploy.]
- Page is a Server Component (no `'use client'`).
- Project data must use the `Project` TypeScript interface as defined in PRD section 5.

**Project data records (from PRD section 5):**

Record 1:
- id: "marketing-analytics"
- name: "Marketing Analytics Platform"
- tagline: "Adopted in production, cut recurring analytics work by ~60%"
- description: "A full-stack platform for tracking user behavior, managing campaigns, and auditing SEO across multiple websites. Designed, built, and deployed end to end on a multi-AZ AWS setup."
- tags: ["Full-Stack", "Java/Spring Boot", "React", "AWS"]
- status: "Active"
- liveUrl: "https://www.siteplusplus.space"
- repoUrl: "https://github.com/LeonWu813/marketing-analytics"
- detailSlug: "marketing-analytics"
- caseStudyFile: "asset/content/case-study-marketing-analytics.md"

Record 2:
- id: "multi-agent-system"
- name: "Multi-Agent Software Development System"
- tagline: "Six AI agents that plan, build, and ship full-stack software"
- description: "A development team of specialized Claude Code agents that coordinate through files and version control, with a human approving every handoff. It shipped a deployed full-stack app end to end."
- tags: ["AI Agents", "Systems Design", "Claude Code"]
- status: "Active"
- liveUrl: null
- repoUrl: "https://github.com/LeonWu813/multi-agent-software-development-system"
- extraLinks: [{ label: "Built by the system", url: "https://tab-vault.com" }, { label: "TabVault repo", url: "https://github.com/LeonWu813/tab-management" }]
- detailSlug: "multi-agent-system"
- caseStudyFile: "asset/content/case-study-multi-agent-system.md"

Record 3:
- id: "tabvault"
- name: "TabVault"
- tagline: "A live full-stack PWA, built by my multi-agent system"
- description: "A production tab manager spanning a Chrome extension, a React PWA, and a Spring Boot backend with an AI content-analysis pipeline. I produced it by running my agent system and reviewing every step."
- tags: ["Full-Stack", "PWA", "AI", "AWS"]
- status: "Active"
- liveUrl: "https://tab-vault.com"
- repoUrl: "https://github.com/LeonWu813/tab-management"
- detailSlug: "tabvault"
- caseStudyFile: "asset/content/case-study-tabvault.md"

**Project TypeScript interface (from PRD section 5):**
```typescript
interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  tags: string[];
  status: "Active" | "Archived" | "In Progress";
  liveUrl: string | null;
  repoUrl: string;
  extraLinks?: { label: string; url: string; }[];
  detailSlug: string;
  caseStudyFile: string;
  images?: string[];
}
```

## Input / Output Contract

**Input:**
- Project data array from the TypeScript data file (e.g., `lib/project-data.ts`), typed against the `Project` interface.

**Output:**
- Rendered page at route `/projects` inside the Site Shell layout (MOD-001).
- Page heading "Projects" and intro line.
- Three project cards in fixed order, each with name, tagline, description, tag chips, status badge, and action links.
- Page-level `metadata` object for SEO and Open Graph.

## Dependencies

- MOD-001 (Site Shell) — the projects grid is rendered inside the layout shell.

## Acceptance Criteria

- AC-019: The system shall render the page heading "Projects" and intro line "Things I have designed, built, and shipped" on the /projects route.
- AC-020: The system shall render three project cards in the fixed order: Marketing Analytics Platform, Multi-Agent Software Development System, TabVault.
- AC-021: The system shall display each card's name, tagline, description, tags as chip/badge elements, status as an "Active" badge, and action links.
- AC-022: The system shall render the top three projects without scrolling on a standard desktop viewport.
- AC-023: The system shall render the grid in 1 column on mobile and 2–3 columns on tablet/desktop.
- AC-024: The system shall render all cards at visually equivalent weight — no card is visually featured over others.
- AC-025: The system shall apply `target="_blank" rel="noopener noreferrer"` to all external action links on project cards.
- AC-026: The system shall link each card to its corresponding detail route (/projects/marketing-analytics, /projects/multi-agent-system, /projects/tabvault).
- AC-027: The system shall export a metadata object with title "Projects — Leon Wu" and Open Graph and Twitter card tags.
- AC-028: The system shall read project data from the TypeScript data file rather than hardcoding values in the component.
