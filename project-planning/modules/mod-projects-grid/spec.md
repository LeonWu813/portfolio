**Last Synced from PRD Revision**: 1.6 | **Last Updated**: 2026-11-01

---

## Module ID & Name

MOD-003: Projects Split Panel

## Purpose

Provide the /projects route and its persistent split-panel layout. The /projects route immediately redirects to /projects/multi-agent-system. The projects layout renders a persistent left aside (w-64, xl:w-72) showing a scrollable project list alongside a right panel that renders the active project detail page. The aside shows each project's title and tech string; the active item is highlighted. Both panels scroll independently.

## Context

**Business problem:** From PRD Goal 2: "Showcase four strong projects as full case studies, each reachable in one click from the projects sidebar." From PRD Success Criteria: "All four projects are visible in the projects sidebar without scrolling on a standard laptop viewport." The split-panel layout gives recruiters a persistent project list on the left while the selected project case study fills the right panel, enabling fast switching between projects without losing context.

**User stories:** The PRD does not define US-IDs for this project. The following page-level requirements from PRD section 4.2 govern this module:

- Route: /projects
- Behavior: immediately redirects to /projects/multi-agent-system (the first project).
- Layout: persistent split panel — left aside (w-64, xl:w-72) + right panel (flex-1 overflow-y-auto).
- Aside: scrollable project list with "Projects" header and count. Shows each project's title and tech string. Active item: `bg-[var(--text)] text-[var(--bg)]`.
- Right panel: renders the project detail page as {children}.
- Scroll isolation: body is `h-screen overflow-hidden`; projects layout is `flex flex-1 min-h-0 overflow-hidden`; each panel scrolls independently.
- Aside is hidden on screens smaller than lg.
- Implementation: `app/projects/layout.tsx` renders ProjectList component + {children}; `app/projects/page.tsx` redirects to first project.
- Project order: ProjectDay appears directly after Multi-Agent Software Development System in the project list. The order of the other projects does not change, and `/projects` still redirects to `/projects/multi-agent-system`.

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
- The shared project frame belongs to MOD-003: `site/app/projects/`, `site/components/ProjectList.tsx`, `site/components/ProjectMobileNav.tsx`, and the interfaces and ordered `projects` array in `site/data/projects-data.ts`. Each project-detail module owns only its record file `site/data/projects/<slug>.ts` and its `site/public/<prefix>*` assets. A detail module that needs a template change logs `blocked-technical` for MOD-003 and does not edit the template itself. (CONV-001)
- A project record's position in `projects` is its display order everywhere: the side panel, the mobile switcher and the Home list. `projects[0]` is the `/projects` redirect target. (CONV-002)
- A project record file `site/data/projects/<slug>.ts` exports exactly one named constant annotated `ProjectEntry` and imports only types from `@/data/projects-data`. `site/data/projects-data.ts` holds only the interfaces and the ordered `projects` array. (CONV-005)
- Each link in a project's header shows its plain-text prefix (`ProjectLink.name`) followed by the linked label (`ProjectLink.label`); only the label is a link. No links row appears when `links` is empty.
- A section's `items` are rendered in order: a string is a paragraph (may contain `**bold**`), an `{ image }` item is an image.
- `featureImage` is the image shown after the pull-quote and before the sections. `featureImageAlt` is its alt text. `featureImageCaption` is the caption shown directly below the feature image. The feature image renders with no cropping on desktop (1280px wide) and mobile (375px wide). When a record has no `featureImage`, the page renders without an empty image slot or a broken image.
- The ProjectList component iterates the projects array from the data file — no hard-coded titles or slugs.
- All project routes are statically generated at build time via `generateStaticParams` in the `[slug]` page.
- ProjectDay appears directly after Multi-Agent Software Development System in the project list. The order of the other projects does not change, and `/projects` still redirects to `/projects/multi-agent-system`.

**ProjectEntry TypeScript interface (from PRD section 5):**
```typescript
interface ProjectLink {
  name: string;    // plain-text prefix shown before the link, e.g. "GitHub: "
  label: string;   // the linked text
  href: string;
}

type SectionItem = string | { image: string };   // a paragraph (may contain **bold**) or an image

interface ProjectSection {
  heading: string;
  items: SectionItem[];
}

interface ProjectEntry {
  slug: string;           // URL slug, e.g. "siteplus"
  year: string;
  date: string;           // "MM/DD" format
  title: string;
  tech: string;           // single string shown in sidebar and home list
  tags: string[];         // chip labels shown on detail page header
  atAGlance: string;      // one-line summary shown under title
  description: string;    // pull-quote shown above sections
  links: ProjectLink[];   // external links shown in detail header; no links row when empty
  featureImage?: string;        // image shown after the pull-quote, before the sections
  featureImageAlt?: string;     // alt text for the feature image
  featureImageCaption?: string; // caption shown directly below the feature image
  sections: ProjectSection[];
}
```

**Project records order in aside (from PRD section 5):**
1. Multi-Agent Software Development System (slug: multi-agent-system)
2. ProjectDay (slug: projectday)
3. SitePlus+ (slug: siteplus)
4. TabVault (slug: tabvault)

## Input / Output Contract

**Input:**
- Project data array from `site/data/projects-data.ts`, typed against the `ProjectEntry` interface. The array holds the records exported by the record files `site/data/projects/<slug>.ts` (CONV-005).
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
- AC-086: ProjectDay appears in the projects side panel at the position set in section 4.2, showing its title and tech line. It is highlighted as active while /projects/projectday is open.

## Integration Points

### Integration with MOD-011 (Project Detail: ProjectDay)
- AC-086: ProjectDay appears in the projects side panel at the position set in section 4.2, showing its title and tech line. It is highlighted as active while /projects/projectday is open.
- AC-089: Once the screenshots are supplied, the feature image renders with meaningful alt text and no cropping on desktop (1280px wide) and mobile (375px wide). Until then, the page renders without an empty image slot or a broken image.

### Integration with MOD-005 (Project Detail: Multi-Agent System)
- AC-091: On /projects/multi-agent-system, the feature image is the landscape diagram from `asset/diagrams/multi-agent-horizontal.png`, not the earlier portrait diagram. It fills the width of the content column with no cropping on desktop (1280px wide) and mobile (375px wide). It has alt text describing the workflow (proposed: "Workflow diagram of the multi-agent system. A planning row runs from user requirements through PM, Tech Lead, human setup and approval, PM finalize, and Doc-Sync. A build row runs through Engineer, QA, Tech Lead integration review, PM checkpoint, and project complete, with loops for bugs, repeat failures, spec issues and retrospectives, all run by a coordinator session."), and the caption above appears directly below it.
- AC-092: The At-a-glance line, tags, three links, description pull-quote, and every section paragraph on /projects/multi-agent-system match this section and the source file word for word. Each link shows its plain-text prefix followed by the linked label, as in the header table, and only the label is a link. The editor's line "Feature image: ..." from the source file does not appear on the page.
