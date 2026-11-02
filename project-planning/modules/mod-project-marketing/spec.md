**Last Synced from PRD Revision**: 1.10 | **Last Updated**: 2026-11-01

---

## Module ID & Name

MOD-004: Project Detail: SitePlus+

## Purpose

Detail page for SitePlus+ at route /projects/siteplus. Renders a header area with H1 project name, atAGlance line (muted, below title), tag chips, external links row, description as a pull-quote (border-l-2 accent), and then sections from structured TypeScript data (each section: h2 heading + items: paragraphs with inline bold, or images). Content is stored as a `ProjectEntry` in the record file `site/data/projects/siteplus.ts` — not read from markdown via fs.readFileSync.

Note: MOD-004, MOD-005, MOD-006, and MOD-011 are all served by a single dynamic route file `app/projects/[slug]/page.tsx`. The slug for this module is "siteplus".

## Context

**Business problem:** From PRD Goal 2: "Showcase four strong projects as full case studies, each reachable in one click from the projects sidebar." Each project detail page must give recruiters and engineers a full picture of the project — problem, role, decisions, impact, and learnings — without requiring them to open an external document. SitePlus+ is described as "Sole engineer · Full-stack + AWS infra · Live in production · Cut recurring analytics work ~60%."

**User stories:** The PRD does not define US-IDs for this project. The following page-level requirements from PRD sections 4.3 and 5 govern this module:

- Route: /projects/siteplus
- Source file reference: `asset/content/case-study-siteplus-detailed.md` (as of commit e479e22; it was aligned with Leon's CV on 2026-11-01) (content stored as structured TypeScript data in the record file `site/data/projects/siteplus.ts`).
- Header area: H1 "SitePlus+", atAGlance line (muted, below title), tag chips, external links row, description as pull-quote (border-l-2 accent).
- Links: each link shows its plain-text prefix followed by the linked label; only the label is a link.
- Sections: The problem, My role, How it works, end to end, Images, Architecture, Key engineering decisions, Challenges and how I resolved them, Impact, What I learned, and what I would improve.
- The Images section shows the SitePlus+ screenshots below, in this order, and has no paragraphs. The feature image, `/siteplusplus-home.jpg`, has the alt text "Screenshot of the SitePlus+ home dashboard." (Record 1).
- Inline bold: paragraphs may contain `**bold text**` markdown rendered as `<strong>` via an InlineBold helper component.

**Non-goals (from PRD section 8 — Out of Scope):**
- No blog infrastructure.

## Related User Stories

- No formal US-IDs defined in PRD revision 1.10. Requirements are drawn directly from PRD sections 4.3 and 5.

## Requirements

- Page route: `/projects/siteplus` (served via `app/projects/[slug]/page.tsx`, slug = "siteplus").
- The `[slug]` page uses a single dynamic route that handles all four project slugs (siteplus, multi-agent-system, tabvault, projectday).
- `params` is `Promise<{ slug: string }>` and must be awaited: `const { slug } = await params`. This applies to both the page component and `generateMetadata`.
- `export const dynamicParams = false` is set in the `[slug]` page to return 404 for unknown slugs.
- `generateStaticParams` iterates the projects array in `site/data/projects-data.ts` — no hard-coded slug strings.
- Content is NOT rendered from markdown via `fs.readFileSync` + `marked`. Content is stored as structured TypeScript data (`ProjectEntry` with `sections: ProjectSection[]`) in the record file `site/data/projects/siteplus.ts`.
- This module owns only its record file `site/data/projects/siteplus.ts` and its `site/public/siteplus*` assets. A detail module that needs a template change logs `blocked-technical` for MOD-003 and does not edit the template itself. (CONV-001)
- A project record file `site/data/projects/<slug>.ts` exports exactly one named constant annotated `ProjectEntry` and imports only types from `@/data/projects-data`. `site/data/projects-data.ts` holds only the interfaces and the ordered `projects` array. (CONV-005)
- Header area elements (rendered in this order):
  - H1: "SitePlus+"
  - atAGlance line (muted, below title): "Sole engineer · Full-stack + AWS infra · Live in production · Cut recurring analytics work ~60%"
  - Tag chips: Full-Stack · Java/Spring Boot · Spring Security / JWT · React · TypeScript · Redux Toolkit · PostgreSQL · Redis · Docker · GitHub Actions · AWS
  - External links row (each link shows its plain-text prefix followed by the linked label; only the label is a link):
    - Link 1: "Demo: " followed by the linked label "interactive walkthrough" — https://app.supademo.com/demo/cmosxfpu96m3ew9doctdnhtah — with `target="_blank" rel="noopener noreferrer"`
    - Link 2: "GitHub: " followed by the linked label "marketing-analytics" — https://github.com/LeonWu813/marketing-analytics — with `target="_blank" rel="noopener noreferrer"`
  - Description as pull-quote (`border-l-2 accent`): "A full-stack analytics platform for tracking user behavior, managing campaigns, and auditing SEO across multiple websites. Built end to end on my own and adopted in production by a real company, where it cut recurring analytics work by roughly 60 percent."
- Sections (each: h2 heading + items):
  1. The problem
  2. My role
  3. How it works, end to end
  4. Images
  5. Architecture
  6. Key engineering decisions
  7. Challenges and how I resolved them
  8. Impact
  9. What I learned, and what I would improve
- The Images section shows the SitePlus+ screenshots below, in this order, and has no paragraphs. The feature image, `/siteplusplus-home.jpg`, has the alt text "Screenshot of the SitePlus+ home dashboard." (Record 1).

  | Screenshot | Alt text |
  |---|---|
  | `/siteplusplus-reports.jpeg` | Screenshot of the SitePlus+ reports page. |
  | `/siteplusplus-sites.jpeg` | Screenshot of the SitePlus+ Sites page, with a form to register a new site and a card for a registered test site. |

- Section headings and paragraphs match the source file `asset/content/case-study-siteplus-detailed.md` (as of commit e479e22) word for word (CONV-003). In particular, "Key engineering decisions" includes the paragraph that starts "**Resilience on purpose.**" and ends "fails over 100% of traffic to the survivor automatically.", and the paragraph that starts "**Securing an endpoint that has to be public.**" says "50 requests per minute per IP". The tag chips match the Tags row above, in that order (AC-120).
- Every image on the page (the feature image and each Images-section image) carries exactly the alt text above and no project image has an empty alt (AC-127). Each image opens in the image overlay owned by MOD-003.
- The two screenshots `/siteplusplus-home.jpg` and `/siteplusplus-reports.jpeg` are used on slides C2 and C5 of the slideshow (MOD-012): renaming any `site/public/siteplus*` file breaks MOD-012.
- InlineBold helper: splits paragraph text on `**...**` and renders `<strong>` tags for bolded spans.
- All external links include `target="_blank" rel="noopener noreferrer"`.
- Page exports a `metadata` object with title "SitePlus+ — Leon Wu" and page-specific description.
- Page exports Open Graph tags and Twitter card tags.
- Page exports a canonical URL tag.
- Canonical URL and og:url use the domain https://www.leon-wu.com followed by the page path.
- Page is a Server Component (no `'use client'`).

**SitePlus+ ProjectEntry record (from PRD section 5):**
```
slug: "siteplus"
title: "SitePlus+"
tech: "Full-Stack · Java/Spring Boot · React · AWS"
tags: ["Full-Stack", "Java/Spring Boot", "Spring Security / JWT", "React", "TypeScript", "Redux Toolkit", "PostgreSQL", "Redis", "Docker", "GitHub Actions", "AWS"]
atAGlance: "Sole engineer · Full-stack + AWS infra · Live in production · Cut recurring analytics work ~60%"
description: "A full-stack analytics platform for tracking user behavior, managing campaigns, and auditing SEO across multiple websites. Built end to end on my own and adopted in production by a real company, where it cut recurring analytics work by roughly 60 percent."
links:
  - { name: "Demo: ", label: "interactive walkthrough", href: "https://app.supademo.com/demo/cmosxfpu96m3ew9doctdnhtah" }
  - { name: "GitHub: ", label: "marketing-analytics", href: "https://github.com/LeonWu813/marketing-analytics" }
featureImage: "/siteplusplus-home.jpg"
featureImageAlt: "Screenshot of the SitePlus+ home dashboard."
```

**Engineering rules (Tech Lead change review rev 1.7 + 1.8, 0051840, and rev 1.9, b8395f1):** this module runs after MOD-003 has added `SectionItem.alt` (the excess-property check rejects `alt` in a record until the type has it). Fill `featureImageAlt` and the two section-item `alt` values, and the rev 1.8 paragraphs, tags and demo link. Keep the two screenshot files named as above (slides C2 and C5 use them).

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
- `params: Promise<{ slug: string }>` — awaited to obtain `slug = "siteplus"`.
- `ProjectEntry` record for slug "siteplus" from the record file `site/data/projects/siteplus.ts`, looked up by slug in the `projects` array.

**Output:**
- Rendered page at route `/projects/siteplus` inside the projects split-panel layout (MOD-003) and the Site Shell layout (MOD-001).
- Header: H1 title, atAGlance line (muted), tag chips, external links row (two links), description pull-quote.
- Sections: each h2 heading followed by paragraphs with inline bold rendered via InlineBold helper.
- Page-level `metadata` object for SEO and Open Graph.

## Dependencies

- MOD-001 (Site Shell) — the detail page is rendered inside the layout shell.
- MOD-003 (Projects Split Panel) — the detail page is rendered as `{children}` in the right panel of the projects layout; owns the shared frame, including the `ProjectEntry` interface and the ordered `projects` array in `site/data/projects-data.ts`; `generateStaticParams` relies on the same data array.

## Acceptance Criteria

- AC-029: The system shall render "SitePlus+" as H1 on the /projects/siteplus route.
- AC-030: The system shall render the atAGlance line "Sole engineer · Full-stack + AWS infra · Live in production · Cut recurring analytics work ~60%" in a muted style below the H1.
- AC-031: The system shall render tag chips for: Full-Stack, Java/Spring Boot, Spring Security / JWT, React, TypeScript, Redux Toolkit, PostgreSQL, Redis, Docker, GitHub Actions, AWS.
- AC-032: The system shall render a link showing "Demo: " followed by the linked label "interactive walkthrough" to https://app.supademo.com/demo/cmosxfpu96m3ew9doctdnhtah and a link showing "GitHub: " followed by the linked label "marketing-analytics" to https://github.com/LeonWu813/marketing-analytics. Each link shows its plain-text prefix followed by the linked label, and only the label is a link; both links use `target="_blank" rel="noopener noreferrer"`.
- AC-033: The system shall render the description as a pull-quote with `border-l-2 accent` styling above the sections.
- AC-034: The system shall render the nine sections in order (The problem, My role, How it works, end to end, Images, Architecture, Key engineering decisions, Challenges and how I resolved them, Impact, What I learned, and what I would improve), each with an h2 heading. The Images section shows the SitePlus+ screenshots (`/siteplusplus-reports.jpeg`, `/siteplusplus-sites.jpeg`, in order, with the alt texts above) and has no paragraphs; every other section has paragraph content.
- AC-035: The system shall render `**bold**` syntax within paragraph text as `<strong>` elements via the InlineBold helper.
- AC-036: The system shall serve content from structured TypeScript data in the record file `site/data/projects/siteplus.ts` — not from `fs.readFileSync` or any markdown parsing at request time.
- AC-037: The system shall await `params` before reading the slug, with `params` typed as `Promise<{ slug: string }>`.
- AC-038: The system shall set `dynamicParams = false` so that an unknown slug returns 404.
- AC-039: The system shall populate `generateStaticParams` by iterating the projects data array, not by hard-coding slug strings.
- AC-040: The system shall export a metadata object with title "SitePlus+ — Leon Wu" and Open Graph and Twitter card tags.
- AC-120 (added in revision 1.8): On /projects/siteplus, every section heading and paragraph matches the source file at commit e479e22 word for word, as CONV-003 requires. In particular, "Key engineering decisions" includes the paragraph that starts "**Resilience on purpose.**" and ends "fails over 100% of traffic to the survivor automatically.", and the paragraph that starts "**Securing an endpoint that has to be public.**" says "50 requests per minute per IP". The tag chips match the Tags row above, in that order.
- AC-127: On every /projects/<slug> page, the feature image and every image in an Images section have exactly the alt text given for them in sections 4.3 to 4.6 and 5, and no project image has an empty alt. The overlay dialog each one opens is named by that alt text. (For MOD-004, /projects/siteplus.)
- AC-126: In the built HTML of every route, including /slideshow, no phone number appears: no `tel:` link, and neither "206-677-7544" nor "2066777544" nor any other phone number in text, links or meta tags. AC-126 does not cover the contents of the CV PDF served at /Leon_cv.pdf, which lists Leon's phone number (see section 6, Resume Hosting). (For MOD-004, the /projects/siteplus route.)

## Integration Points

### Integration with MOD-012 (Interview Slideshow) — Slide images
- Slide C2 uses `/siteplusplus-home.jpg` and slide C5 uses `/siteplusplus-reports.jpeg` (PRD 4.11 Slide images: "MOD-004 asset"), with alt texts "Screenshot of the SitePlus+ home dashboard." and "Screenshot of the SitePlus+ reports page.". Renaming either file breaks MOD-012.
- **AC:** AC-106 (MOD-012 spec) gates QA for the slideshow images.
