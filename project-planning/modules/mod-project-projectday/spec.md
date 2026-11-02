**Last Synced from PRD Revision**: 1.10 | **Last Updated**: 2026-11-01

---

## Module ID & Name

MOD-011: Project Detail: ProjectDay

## Purpose

Detail page for ProjectDay at route /projects/projectday. Source file: `asset/content/case-study-projectday-detailed.md`. Renders a header area with H1 project name, At-a-glance line (muted, below title), tag chips, description as a pull-quote and a three-screen feature image with caption, and then seven sections from structured TypeScript data (each section: h2 heading + items: paragraphs with inline bold, or images). Content is stored as Record 4 (a `ProjectEntry`) in the record file `site/data/projects/projectday.ts`. The page has no external links. This module also supplies the four WebP files the page and the slideshow (MOD-012) load.

Note: MOD-004, MOD-005, MOD-006, and MOD-011 are all served by a single dynamic route file `app/projects/[slug]/page.tsx`. The slug for this module is "projectday".

## Context

**Business problem:** From PRD Goal 2: "Showcase four strong projects as full case studies, each reachable in one click from the projects sidebar." From PRD Success Criteria: "Every project links to its GitHub repository when that repository is public and, where one exists, to a working live product (a website or an App Store listing)." ProjectDay: "An iOS app for indoor bouldering climbers in Taiwan: log a send in a few taps, watch beta videos tied to a specific route, and browse gym route lists. Built with my multi-agent development system and submitted to the App Store."

**User stories:** The PRD does not define US-IDs for this project. The following page-level requirements from PRD sections 4.6, 5, and 6 govern this module:

- Route: /projects/projectday
- Source file: `asset/content/case-study-projectday-detailed.md`
- Header area: H1 "ProjectDay", At-a-glance line, seven tag chips, description pull-quote, feature image with caption.
- Links: None. The GitHub repository stays private, and the App Store listing is not live yet.
- Sections: The problem, My role, How it works end to end, Images, Notable technical decisions, Impact and status, What I learned and what I'd improve.
- Inline bold: paragraphs may contain `**bold text**` markdown, which renders as `<strong>` in the UI.

**Non-goals:** No non-goals stated in PRD for this module.

## Related User Stories

- No formal US-IDs defined in PRD revision 1.10. Requirements are drawn directly from PRD sections 4.2, 4.6, 5, and 6.

## Requirements

- Page route: `/projects/projectday` (served via `app/projects/[slug]/page.tsx`, slug = "projectday").
- All routes are statically generated at build time (`generateStaticParams` + `dynamicParams = false`).
- This module owns only its record file `site/data/projects/projectday.ts` and its `site/public/projectday-*` assets. A detail module that needs a template change logs `blocked-technical` for MOD-003 and does not edit the template itself. (CONV-001)
- A project record file `site/data/projects/<slug>.ts` exports exactly one named constant annotated `ProjectEntry` and imports only types from `@/data/projects-data`. `site/data/projects-data.ts` holds only the interfaces and the ordered `projects` array. (CONV-005)
- Section headings and paragraphs match the project's own source file in `asset/content/` word for word. Editor's notes in a source file never render. (CONV-003)

**Header area (PRD section 4.6, copied verbatim):**

**Header area:**

| Element | Value |
|---|---|
| Project name (H1) | ProjectDay |
| At-a-glance | Product owner + orchestrator · 12 modules, built by my multi-agent system · Supabase + AWS video pipeline · Submitted to the App Store (Oct 2026) |
| Tags | TypeScript · React Native / Expo · Supabase (Postgres, Auth, Edge Functions) · AWS (S3, MediaConvert, CloudFront, CDK) · EAS · i18next · GitHub Actions |
| Links | None. The GitHub repository stays private, and the App Store listing is not live yet. |
| Feature image | One wide image showing three of Leon's iPhone screenshots side by side, left to right: Home (`projectday-home.png`), Gyms (`projectday-gyms.png`), Route (`projectday-route.png`), from `asset/screenshots/projectday/`. Each screen is whole and uncropped, with even gaps and a transparent background. The MOD-011 engineer makes it from the three files and serves it as `/projectday-screens.webp` (Tech Lead, 2026-11-01). |
| Feature image caption | ProjectDay's interface is in Traditional Chinese, for climbers in Taiwan. |

**Case study sections (in order; PRD section 4.6, copied verbatim):**
1. The problem
2. My role
3. How it works end to end
4. Images
5. Notable technical decisions
6. Impact and status
7. What I learned and what I'd improve

The Images section shows two screenshots from `asset/screenshots/projectday/`, in this order, and has no paragraphs. Each is served as a web-sized file made by the MOD-011 engineer. Its heading is not in the source file, as on SitePlus+ and TabVault. The screenshots show demo data and are cleared for publishing (Leon, 2026-11-01).

| Screenshot (source → served file) | Alt text |
|---|---|
| `projectday-route-beta.png` → `/projectday-route-beta.webp` | ProjectDay route screen scrolled to the Beta videos section, showing the thumbnail of a climber's beta video for a V0 route. |
| `projectday-profile.png` → `/projectday-profile.webp` | ProjectDay profile screen with climbing stats: top grade V10, 10 sends, 9 climbing days, and a bar chart of sends per grade. |

**Inline bold:** Paragraphs may contain `**bold text**` markdown, which renders as `<strong>` in the UI.

- Every page must include: `<title>`: `"{Page Name} — Leon Wu"`; `<meta name="description">`; Open Graph and Twitter card tags; canonical URL tag.
- Canonical URL and og:url use the domain https://www.leon-wu.com followed by the page path.

**Image files (PRD sections 4.6 and 4.11 and AC-112; file names and the maker from the Tech Lead, change review rev 1.7 + 1.8, 0051840, and rev 1.9, b8395f1):**
- The three-screen image is `site/public/projectday-screens.webp`: WebP with alpha, at least 1500 px wide (AC-112), with even gaps and a transparent background. The engineer composes it from the three PNGs in `asset/screenshots/projectday/` (Home `projectday-home.png`, Gyms `projectday-gyms.png`, Route `projectday-route.png`). The engineer commits only the output and records the exact command in Engineering Progress. Pillow, `cwebp` and sharp are all present on the machine.
- Composition (Tech Lead T4): the three screens at the same height, left to right Home, Gyms, Route, gaps of 5% of one screen's width, no outer margin, transparent background, at least 1500 px wide (AC-112). At that ratio the file is about 1.43:1; the B2 slide box uses `contain`, so any ratio works.
- The singles are `site/public/projectday-route.webp`, `projectday-route-beta.webp` and `projectday-profile.webp`, each about 1300 px tall (at least 1000 px, per AC-112). Safari supports WebP with alpha from version 14.
- The Images section and slide B5 of the slideshow share the Route beta and Profile files, so the browser caches them once. Slide B2 uses `/projectday-screens.webp`; slide B5 uses `/projectday-route.webp`, `/projectday-route-beta.webp` and `/projectday-profile.webp` (PRD 4.11 Slide images: "MOD-011 files").
- Byte allocation: the four files /slideshow loads together total at most 800,000 bytes (AC-112); each file is at most 300 KB. The three-screen image's bytes count toward this allocation. In the Tech Lead's test encoding, WebP at 1300 px tall, quality 80, came out at 26-50 KB per single.
- The Images section has no paragraphs and its items are `{ image, alt }` items with the alt texts in the table above. Record 4's `featureImageAlt` and the two section-item alts are filled by this module (after MOD-003 has added `SectionItem.alt`; the excess-property check rejects `alt` in a record until the type has it).
- Every image on the page carries exactly the alt text given for it and no project image has an empty alt (AC-127). Each image opens in the image overlay owned by MOD-003.
- Renaming any `site/public/projectday-*` file breaks MOD-012.

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
featureImage: "/projectday-screens.webp" (the three-screen image in section 4.6)
featureImageAlt: "Three ProjectDay screens in Traditional Chinese. Home shows saved gyms, a target route and new beta videos. Gyms lists climbing gyms with search and city filters. A route screen shows a V0 route at CORNER gym with its photo, send and attempt counts, and a Log climb button."
featureImageCaption: "ProjectDay's interface is in Traditional Chinese, for climbers in Taiwan."
```

**ProjectEntry TypeScript interface (from PRD section 5):**
```typescript
interface ProjectLink {
  name: string;    // plain-text prefix shown before the link, e.g. "GitHub: "
  label: string;   // the linked text
  href: string;
}

type SectionItem = string | { image: string; alt?: string };   // a paragraph (may contain **bold**) or an image with its alt text

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

## Input / Output Contract

**Input:**
- `params` for the `[slug]` route, with slug "projectday".
- Record 4 (`ProjectEntry`) from the record file `site/data/projects/projectday.ts`, looked up by slug in the `projects` array.
- Source file `asset/content/case-study-projectday-detailed.md`.
- Screenshots in `asset/screenshots/projectday/`.

**Output:**
- Rendered page at route `/projects/projectday`.
- Header: H1 title, At-a-glance line (muted), seven tag chips, description pull-quote, three-screen feature image with caption. No links row.
- Sections: seven sections, each h2 heading followed by paragraphs with inline bold rendered as `<strong>`, or (Images) two images with alt text.
- Page-level metadata: title "ProjectDay — Leon Wu", description, Open Graph and Twitter card tags, canonical URL.
- Files `site/public/projectday-screens.webp`, `projectday-route.webp`, `projectday-route-beta.webp`, `projectday-profile.webp`.

## Dependencies

- MOD-003 (Projects Split Panel) — see AC-086 and Integration Points.
- MOD-002 (Home Page) — see AC-087 and Integration Points.

## Acceptance Criteria

- AC-079: /projects/projectday renders the H1 "ProjectDay".
- AC-080: The At-a-glance line below the H1 reads exactly as in the header table, in the same muted style as the other project pages.
- AC-081: Exactly seven tag chips render, with the labels in the header table, in that order.
- AC-082: No external links render on /projects/projectday, and no empty links row appears. No GitHub link renders while the repository is private, and no App Store link renders until the listing is confirmed live.
- AC-083: The description pull-quote reads exactly as Record 4's `description`, in the same style as the other project pages.
- AC-084: Seven sections render in the order listed, with exactly those headings. Every paragraph matches the source file word for word. The Images section has no paragraphs. The editor's notes "(confirm it is live before publishing)" and "Suggested listing fields: ..." do not appear anywhere on the page.
- AC-085: Text written as `**bold**` in the source renders as bold, and no literal asterisks show.
- AC-086: ProjectDay appears in the projects side panel at the position set in section 4.2, showing its title and tech line. It is highlighted as active while /projects/projectday is open.
- AC-087: ProjectDay appears in the Home page projects list with its title and tech line, links to /projects/projectday, and shows no date.
- AC-088: The page title is "ProjectDay — Leon Wu". The page has a description meta tag, Open Graph and Twitter card tags, and a canonical URL, like the other project pages.
- AC-089: The feature image is the three-screen image described in the header table (Home, Gyms, Route, left to right), with Record 4's `featureImageAlt` as alt text. It shows whole, with no cropping, across the content column on desktop (1280px wide) and mobile (375px wide), and Record 4's `featureImageCaption` appears directly below it.
- AC-090: /projects/projectday is generated at build time. /projects/siteplus, /projects/multi-agent-system and /projects/tabvault still render, and an unknown slug under /projects still returns 404.
- AC-111: The Images section shows the screenshots listed in the table above, in that order, each whole with no cropping and with its alt text from the table. At 1280x800 no screenshot is taller than 640px; at 375px wide each fits the column width.
- AC-112: Every ProjectDay image file the page loads is at most 300 KB. Each single screenshot is at least 1000 pixels tall, and the three-screen image is at least 1500 pixels wide, so they stay sharp at the size the image overlay shows them (AC-108). The four ProjectDay files /slideshow loads (`/projectday-screens.webp`, `/projectday-route.webp`, `/projectday-route-beta.webp`, `/projectday-profile.webp`) together total at most 800,000 bytes.
- AC-127: On every /projects/<slug> page, the feature image and every image in an Images section have exactly the alt text given for them in sections 4.3 to 4.6 and 5, and no project image has an empty alt. The overlay dialog each one opens is named by that alt text. (For MOD-011, /projects/projectday.)
- AC-126: In the built HTML of every route, including /slideshow, no phone number appears: no `tel:` link, and neither "206-677-7544" nor "2066777544" nor any other phone number in text, links or meta tags. AC-126 does not cover the contents of the CV PDF served at /Leon_cv.pdf, which lists Leon's phone number (see section 6, Resume Hosting). (For MOD-011, the /projects/projectday route.)

## Integration Points

### Integration with MOD-003 (Projects Split Panel)
- AC-086: ProjectDay appears in the projects side panel at the position set in section 4.2, showing its title and tech line. It is highlighted as active while /projects/projectday is open.
- AC-089: The feature image is the three-screen image described in the header table (Home, Gyms, Route, left to right), with Record 4's `featureImageAlt` as alt text. It shows whole, with no cropping, across the content column on desktop (1280px wide) and mobile (375px wide), and Record 4's `featureImageCaption` appears directly below it.
- AC-111: The Images section shows the screenshots listed in the table above, in that order, each whole with no cropping and with its alt text from the table. At 1280x800 no screenshot is taller than 640px; at 375px wide each fits the column width.
- Position (section 4.2): ProjectDay appears directly after Multi-Agent Software Development System in the project list. The order of the other projects does not change, and `/projects` still redirects to `/projects/multi-agent-system`.
- Image overlay and Images-section cap: AC-108, AC-109, AC-110 and AC-128 (MOD-003's template) apply to every ProjectDay image.

### Integration with MOD-002 (Home Page)
- AC-087: ProjectDay appears in the Home page projects list with its title and tech line, links to /projects/projectday, and shows no date.

### Integration with MOD-012 (Interview Slideshow) — Slide images
- Slide B2 uses `/projectday-screens.webp`; slide B5 uses `/projectday-route.webp`, `/projectday-route-beta.webp` and `/projectday-profile.webp` (PRD 4.11 Slide images: "MOD-011 asset" and "MOD-011 files"). Alt texts: B2 Record 4's `featureImageAlt`; B5 Route "ProjectDay route screen showing a V0 route at CORNER gym with its photo, send and attempt counts, and a Log climb button."; Route beta and Profile the alt texts in the Images table.
- **AC:** AC-112 (the four files total at most 800,000 bytes) and AC-106 (MOD-012 spec) gate QA.
