**Last Synced from PRD Revision**: 1.4 | **Last Updated**: 2026-11-01

---

## Module ID & Name

MOD-011: Project Detail: ProjectDay

## Purpose

Detail page for ProjectDay at route /projects/projectday. Source file: `asset/content/case-study-projectday-detailed.md`. Renders a header area with H1 project name, At-a-glance line (muted, below title), tag chips, and description as a pull-quote, and then six sections from structured TypeScript data (each section: h2 heading + paragraphs with inline bold). Content is stored as Record 4 (a `ProjectEntry`) in the projects data file, `site/data/projects-data.ts`. The page has no external links and, until the screenshots are supplied, no feature image.

Note: MOD-004, MOD-005, MOD-006, and MOD-011 are all served by a single dynamic route file `app/projects/[slug]/page.tsx`. The slug for this module is "projectday".

## Context

**Business problem:** From PRD Goal 2: "Showcase four strong projects as full case studies, each reachable in one click from the projects sidebar." From PRD Success Criteria: "Every project links to its GitHub repository when that repository is public and, where one exists, to a working live product (a website or an App Store listing)." ProjectDay: "An iOS app for indoor bouldering climbers in Taiwan: log a send in a few taps, watch beta videos tied to a specific route, and browse gym route lists. Built with my multi-agent development system and submitted to the App Store."

**User stories:** The PRD does not define US-IDs for this project. The following page-level requirements from PRD sections 4.6, 5, and 6 govern this module:

- Route: /projects/projectday
- Source file: `asset/content/case-study-projectday-detailed.md`
- Header area: H1 "ProjectDay", At-a-glance line, seven tag chips, description pull-quote.
- Links: None. The GitHub repository stays private, and the App Store listing is not live yet.
- Feature image: Leon's iPhone screenshots from the App Store Connect submission. The files are not supplied yet; until they are, the page renders without a feature image.
- Sections: The problem, My role, How it works end to end, Notable technical decisions, Impact and status, What I learned and what I'd improve.
- Inline bold: paragraphs may contain `**bold text**` markdown, which renders as `<strong>` in the UI.

**Non-goals:** No non-goals stated in PRD for this module.

## Related User Stories

- No formal US-IDs defined in PRD revision 1.4. Requirements are drawn directly from PRD sections 4.6, 5, and 6.

## Requirements

- Page route: `/projects/projectday` (served via `app/projects/[slug]/page.tsx`, slug = "projectday").
- All routes are statically generated at build time (`generateStaticParams` + `dynamicParams = false`).
- Header area elements:
  - H1: "ProjectDay"
  - At-a-glance: "Product owner + orchestrator · 12 modules, built by my multi-agent system · Supabase + AWS video pipeline · Submitted to the App Store (Oct 2026)"
  - Tags: TypeScript · React Native / Expo · Supabase (Postgres, Auth, Edge Functions) · AWS (S3, MediaConvert, CloudFront, CDK) · EAS · i18next · GitHub Actions
  - Links: None. The GitHub repository stays private, and the App Store listing is not live yet.
  - Feature image: Leon's iPhone screenshots from the App Store Connect submission. The files are not supplied yet (see section 7); until they are, the page renders without a feature image.
- Case study sections (in order):
  1. The problem
  2. My role
  3. How it works end to end
  4. Notable technical decisions
  5. Impact and status
  6. What I learned and what I'd improve
- Inline bold: paragraphs may contain `**bold text**` markdown, which renders as `<strong>` in the UI.
- Every page must include: `<title>`: `"{Page Name} — Leon Wu"`; `<meta name="description">`; Open Graph and Twitter card tags; canonical URL tag.
- [AMBIGUITY: PRD lists domain name as a still-needed blocking asset — og:url and canonical URL values cannot be populated until the domain is confirmed. PM must provide the domain before production deploy.]

**ProjectDay ProjectEntry record (Record 4, from PRD section 5):**
```
slug: "projectday"
year: "2026"
date: "09/19"
title: "ProjectDay"
tech: "Mobile · React Native · Supabase · AWS"
tags: ["TypeScript", "React Native / Expo", "Supabase (Postgres, Auth, Edge Functions)", "AWS (S3, MediaConvert, CloudFront, CDK)", "EAS", "i18next", "GitHub Actions"]
atAGlance: "Product owner + orchestrator · 12 modules, built by my multi-agent system · Supabase + AWS video pipeline · Submitted to the App Store (Oct 2026)"
description: "An iOS app for indoor bouldering climbers in Taiwan: log a send in a few taps, watch beta videos tied to a specific route, and browse gym route lists. Built with my multi-agent development system and submitted to the App Store."
links: []
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
- `params` for the `[slug]` route, with slug "projectday".
- Record 4 (`ProjectEntry`) from the projects data file, looked up by slug.
- Source file `asset/content/case-study-projectday-detailed.md`.

**Output:**
- Rendered page at route `/projects/projectday`.
- Header: H1 title, At-a-glance line (muted), seven tag chips, description pull-quote. No links row.
- Sections: six sections, each h2 heading followed by paragraphs with inline bold rendered as `<strong>`.
- Page-level metadata: title "ProjectDay — Leon Wu", description, Open Graph and Twitter card tags, canonical URL.

## Dependencies

- MOD-003 (Projects Split Panel) — see AC-086 and Integration Points.
- MOD-002 (Home Page) — see AC-087 and Integration Points.

## Acceptance Criteria

- AC-079: /projects/projectday renders the H1 "ProjectDay".
- AC-080: The At-a-glance line below the H1 reads exactly as in the header table, in the same muted style as the other project pages.
- AC-081: Exactly seven tag chips render, with the labels in the header table, in that order.
- AC-082: No external links render on /projects/projectday, and no empty links row appears. No GitHub link renders while the repository is private, and no App Store link renders until the listing is confirmed live.
- AC-083: The description pull-quote reads exactly as Record 4's `description`, in the same style as the other project pages.
- AC-084: Six sections render in the order listed, with exactly those headings. Every paragraph matches the source file word for word. The editor's notes "(confirm it is live before publishing)" and "Suggested listing fields: ..." do not appear anywhere on the page.
- AC-085: Text written as `**bold**` in the source renders as bold, and no literal asterisks show.
- AC-086: ProjectDay appears in the projects side panel at the position set in section 4.2, showing its title and tech line. It is highlighted as active while /projects/projectday is open.
- AC-087: ProjectDay appears in the Home page projects list with its title and tech line, links to /projects/projectday, and shows no date.
- AC-088: The page title is "ProjectDay — Leon Wu". The page has a description meta tag, Open Graph and Twitter card tags, and a canonical URL, like the other project pages.
- AC-089: Once the screenshots are supplied, the feature image renders with meaningful alt text and no cropping on desktop (1280px wide) and mobile (375px wide). Until then, the page renders without an empty image slot or a broken image.
- AC-090: /projects/projectday is generated at build time. /projects/siteplus, /projects/multi-agent-system and /projects/tabvault still render, and an unknown slug under /projects still returns 404.

## Integration Points

### Integration with MOD-003 (Projects Split Panel)
- AC-086: ProjectDay appears in the projects side panel at the position set in section 4.2, showing its title and tech line. It is highlighted as active while /projects/projectday is open.
- Position (section 4.2): ProjectDay appears directly after Multi-Agent Software Development System in the project list. The order of the other projects does not change, and `/projects` still redirects to `/projects/multi-agent-system`.

### Integration with MOD-002 (Home Page)
- AC-087: ProjectDay appears in the Home page projects list with its title and tech line, links to /projects/projectday, and shows no date.
