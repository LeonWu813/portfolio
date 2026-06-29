**Last Synced from PRD Revision**: 1.3 | **Last Updated**: 2026-06-29

---

## Module ID & Name

MOD-003: Projects Split Panel

## Purpose

Provide the /projects route and its persistent split-panel layout. The /projects route immediately redirects to /projects/multi-agent-system. The projects layout renders a persistent left aside (w-64, xl:w-72) showing a scrollable project list alongside a right panel that renders the active project detail page. The aside shows each project's title and tech string; the active item is highlighted. Both panels scroll independently.

## Context

**Business problem:** From PRD Goal 2: "Showcase three strong projects as full case studies, each reachable in one click from the projects sidebar." From PRD Success Criteria: "The top three projects are visible in the projects sidebar without scrolling on a standard laptop viewport." The split-panel layout gives recruiters a persistent project list on the left while the selected project case study fills the right panel, enabling fast switching between projects without losing context.

**User stories:** The PRD does not define US-IDs for this project. The following page-level requirements from PRD section 4.2 govern this module:

- Route: /projects
- Behavior: immediately redirects to /projects/multi-agent-system (the first project).
- Layout: persistent split panel — left aside (w-64, xl:w-72) + right panel (flex-1 overflow-y-auto).
- Aside: scrollable project list with "Projects" header and count. Shows each project's title and tech string. Active item: `bg-[var(--text)] text-[var(--bg)]`.
- Right panel: renders the project detail page as {children}.
- Scroll isolation: body is `h-screen overflow-hidden`; projects layout is `flex flex-1 min-h-0 overflow-hidden`; each panel scrolls independently.
- Aside is hidden on screens smaller than lg.
- Implementation: `app/projects/layout.tsx` renders ProjectList component + {children}; `app/projects/page.tsx` redirects to first project.

**Non-goals (from PRD section 8 — Out of Scope):**
- No blog or blog infrastructure.
- No "Projects" page heading or intro line on the /projects route (redirect replaces the page).

## Related User Stories

- No formal US-IDs defined in PRD revision 1.3. Requirements are drawn directly from PRD section 4.2.

## Requirements

- Page route: `/projects` — immediately redirects to `/projects/multi-agent-system`.
- `app/projects/page.tsx` implements the redirect to `/projects/multi-agent-system`.
- `app/projects/layout.tsx` renders the split-panel layout wrapping all project detail pages.
- Left aside: `w-64 xl:w-72`, scrollable (`overflow-y-auto`), contains a ProjectList component.
- ProjectList shows a "Projects" header and count, then each project's title and tech string.
- Active project item in the aside is highlighted: `bg-[var(--text)] text-[var(--bg)]`.
- Right panel: `flex-1 overflow-y-auto` — renders `{children}` (the active project detail page).
- Scroll isolation: the projects layout uses `flex flex-1 min-h-0 overflow-hidden`; body is `h-screen overflow-hidden`.
- Each panel (aside and right panel) scrolls independently; the window never scrolls.
- Aside is hidden on screens smaller than lg (`hidden lg:block` or equivalent).
- Project data is read from `site/data/projects-data.ts` using the `ProjectEntry` TypeScript interface.
- The ProjectList component iterates the projects array from the data file — no hard-coded titles or slugs.
- All project routes are statically generated at build time via `generateStaticParams` in the `[slug]` page.

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

**Project records order in aside (from PRD section 5):**
1. Multi-Agent Software Development System (slug: multi-agent-system)
2. SitePlus+ (slug: siteplus)
3. TabVault (slug: tabvault)

## Input / Output Contract

**Input:**
- Project data array from `site/data/projects-data.ts`, typed against the `ProjectEntry` interface.
- Current URL path — used to determine the active project in the aside.

**Output:**
- On `/projects`: a redirect to `/projects/multi-agent-system`.
- On `/projects/[slug]`: the split-panel layout shell rendered inside the Site Shell layout (MOD-001), with the aside showing the project list and the right panel rendering the active project detail page via `{children}`.

## Dependencies

- MOD-001 (Site Shell) — the projects split panel is rendered inside the layout shell.

## Acceptance Criteria

- AC-019: The system shall redirect `/projects` immediately to `/projects/multi-agent-system` without rendering a grid or page heading.
- AC-020: The system shall render a persistent left aside (`w-64 xl:w-72`) on all `/projects/[slug]` routes showing the project list.
- AC-021: The system shall show each project's title and tech string in the aside list.
- AC-022: The system shall highlight the active project item in the aside using `bg-[var(--text)] text-[var(--bg)]`.
- AC-023: The system shall render the project detail as `{children}` in the right panel (`flex-1 overflow-y-auto`) alongside the aside.
- AC-024: The system shall use `flex flex-1 min-h-0 overflow-hidden` on the projects layout so that both panels scroll independently and the window never scrolls.
- AC-025: The system shall hide the aside on screens smaller than `lg`.
- AC-026: The system shall populate the aside list by iterating the projects data array — no hard-coded titles or slugs in the layout component.
