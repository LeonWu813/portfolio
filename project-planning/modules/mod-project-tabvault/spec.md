**Last Synced from PRD Revision**: 1.12 | **Last Updated**: 2026-11-01

---

## Module ID & Name

MOD-006: Project Detail: TabVault

## Purpose

Detail page for TabVault at route /projects/tabvault. Renders a header area with H1 project name, atAGlance line (muted, below title), tag chips, external links row, description as a pull-quote (border-l-2 accent), and then sections from structured TypeScript data (each section: h2 heading + items: paragraphs with inline bold, or images). Content is stored as a `ProjectEntry` in the record file `site/data/projects/tabvault.ts` — not read from markdown via fs.readFileSync.

Note: MOD-004, MOD-005, MOD-006, and MOD-011 are all served by a single dynamic route file `app/projects/[slug]/page.tsx`. The slug for this module is "tabvault".

## Context

**Business problem:** From PRD Goal 2: "Showcase four strong projects as full case studies, each reachable in one click from the projects sidebar." TabVault is described as "Orchestrator + reviewer · 3 clients (Chrome MV3, React PWA, Spring Boot API) · Built by my multi-agent system · Deployed to AWS ECS Fargate (now offline)" — it demonstrates both Leon's full-stack engineering capability and his multi-agent system in action. The detail page must give recruiters the full story of the product's architecture, Leon's role, and the outcomes.

**User stories:** The PRD does not define US-IDs for this project. The following page-level requirements from PRD sections 4.5 and 5 govern this module:

- Route: /projects/tabvault
- Source file reference: `asset/content/case-study-tabvault-detailed.md` (content stored as structured TypeScript data in the record file `site/data/projects/tabvault.ts`).
- Header area: H1 "TabVault", atAGlance line (muted, below title), tag chips, external links row, description as pull-quote (border-l-2 accent).
- Links: each link shows its plain-text prefix followed by the linked label; only the label is a link.
- Sections: The problem, My role, How it works, end to end, Images, Architecture, Key engineering decisions, Challenges and how I resolved them, Impact, What I learned, and what I would improve.
- The Images section shows the TabVault screenshots below, in this order, and has no paragraphs. The feature image, `/tabvault-home.png`, has the alt text "Screenshot of the TabVault web app home screen." (Record 3).
- TabVault is not live. It was deployed to production on AWS and is offline now, so the page has no live link, and no copy on it says TabVault is live.
- Inline bold: paragraphs may contain `**bold text**` markdown rendered as `<strong>` via an InlineBold helper component.

**Non-goals (from PRD section 8 — Out of Scope):**
- No blog infrastructure.

## Related User Stories

- No formal US-IDs defined in PRD revision 1.12. Requirements are drawn directly from PRD sections 4.5 and 5.

## Requirements

- Page route: `/projects/tabvault` (served via `app/projects/[slug]/page.tsx`, slug = "tabvault").
- The `[slug]` page uses a single dynamic route that handles all four project slugs (siteplus, multi-agent-system, tabvault, projectday).
- `params` is `Promise<{ slug: string }>` and must be awaited: `const { slug } = await params`. This applies to both the page component and `generateMetadata`.
- `export const dynamicParams = false` is set in the `[slug]` page to return 404 for unknown slugs.
- `generateStaticParams` iterates the projects array in `site/data/projects-data.ts` — no hard-coded slug strings.
- Content is NOT rendered from markdown via `fs.readFileSync` + `marked`. Content is stored as structured TypeScript data (`ProjectEntry` with `sections: ProjectSection[]`) in the record file `site/data/projects/tabvault.ts`.
- This module owns only its record file `site/data/projects/tabvault.ts` and its `site/public/tabvault-*` assets. A detail module that needs a template change logs `blocked-technical` for MOD-003 and does not edit the template itself. (CONV-001)
- A project record file `site/data/projects/<slug>.ts` exports exactly one named constant annotated `ProjectEntry` and imports only types from `@/data/projects-data`. `site/data/projects-data.ts` holds only the interfaces and the ordered `projects` array. (CONV-005)
- Header area elements (rendered in this order):
  - H1: "TabVault"
  - atAGlance line (muted, below title): "Orchestrator + reviewer · 3 clients (Chrome MV3, React PWA, Spring Boot API) · Built by my multi-agent system · Deployed to AWS ECS Fargate (now offline)"
  - Tag chips: Java 21 / Spring Boot · React / TypeScript PWA · Chrome Extension (MV3) · PostgreSQL · Redis · Quartz · Claude API · AWS ECS Fargate
  - External links row (each link shows its plain-text prefix followed by the linked label; only the label is a link):
    - Link 1: "GitHub: " followed by the linked label "tab-management" — https://github.com/LeonWu813/tab-management — with `target="_blank" rel="noopener noreferrer"`
  - Description as pull-quote (`border-l-2 accent`): "A production full-stack tab manager spanning a Chrome extension, a React PWA, and a Spring Boot backend, with an AI content-analysis pipeline. I produced it by running my own multi-agent development system, reviewing and approving every step."
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
- The Images section shows the TabVault screenshots below, in this order, and has no paragraphs. The feature image, `/tabvault-home.png`, has the alt text "Screenshot of the TabVault web app home screen." (Record 3).

  | Screenshot | Alt text |
  |---|---|
  | `/tabvault-mobile.jpeg` | Screenshot of the TabVault web app on an iPhone, showing saved items grouped by category, with search and filters. |
  | `/tabvault-plugin.png` | Screenshot of the TabVault Chrome extension popup, with buttons to save the current tab, save all tabs or write a quick note, and a list of recent saves. |

- TabVault is not live. It was deployed to production on AWS and is offline now, so the page has no live link, and no copy on it says TabVault is live.
- Section headings are the list above. The paragraphs of "The problem" and "Impact" match the source file `asset/content/case-study-tabvault-detailed.md` word for word and say TabVault was deployed and is offline now (AC-116).
- Body copy (added in revision 1.12): The page keeps the shorter text Leon chose, not the full source file. This is an exception to CONV-003, chosen by Leon on 2026-11-01. The reference for every paragraph outside "The problem" and "Impact" is the paragraph text in `site/data/projects/tabvault.ts` at commit c612306, the text MOD-006 QA Run 4 checked. Compared with the source file, that text has three paragraphs in "Architecture" (the source has five), leaves out the intro and three challenges in "Challenges and how I resolved them" (missing dependency, wrong status code on bad credentials, ISP blocking the new domain), the "lesson" sentences and a sentence of the secrets paragraph, and in "What I learned, and what I would improve" drops one sentence, puts 'done' in single quotes and uses two em dashes where the source has commas. The paragraphs of "The problem" and "Impact" still match the source file word for word (AC-116). A later edit to the source file changes the page only through a PRD change.
- In the built HTML of every route, no link points to tab-vault.com, the text "tab-vault.com" does not appear, and no copy says TabVault is live (AC-117).
- Every image on the page (the feature image and each Images-section image) carries exactly the alt text above and no project image has an empty alt (AC-127). Each image opens in the image overlay owned by MOD-003.
- The file `/tabvault-home.png` is used on slide D1 of the slideshow (MOD-012): renaming any `site/public/tabvault-*` file breaks MOD-012.
- InlineBold helper: splits paragraph text on `**...**` and renders `<strong>` tags for bolded spans.
- All external links include `target="_blank" rel="noopener noreferrer"`.
- Page exports a `metadata` object with title "TabVault — Leon Wu" and page-specific description.
- Page exports Open Graph tags and Twitter card tags.
- Page exports a canonical URL tag.
- Canonical URL and og:url use the domain https://www.leon-wu.com followed by the page path.
- Page is a Server Component (no `'use client'`).

**TabVault ProjectEntry record (from PRD section 5):**
```
slug: "tabvault"
title: "TabVault"
tech: "Full-Stack · PWA · AI · AWS"
tags: ["Java 21 / Spring Boot", "React / TypeScript PWA", "Chrome Extension (MV3)", "PostgreSQL", "Redis", "Quartz", "Claude API", "AWS ECS Fargate"]
atAGlance: "Orchestrator + reviewer · 3 clients (Chrome MV3, React PWA, Spring Boot API) · Built by my multi-agent system · Deployed to AWS ECS Fargate (now offline)"
description: "A production full-stack tab manager spanning a Chrome extension, a React PWA, and a Spring Boot backend, with an AI content-analysis pipeline. I produced it by running my own multi-agent development system, reviewing and approving every step."
links:
  - { name: "GitHub: ", label: "tab-management", href: "https://github.com/LeonWu813/tab-management" }
featureeImage: "/tabvault-home.png"
featureImageAlt: "Screenshot of the TabVault web app home screen."
```

**Engineering rules (Tech Lead change review rev 1.7 + 1.8, 0051840, and rev 1.9, b8395f1):** this module runs after MOD-003 has added `SectionItem.alt` (the excess-property check rejects `alt` in a record until the type has it). Fill the offline copy and links, `featureImageAlt` and the two section-item `alt` values. There is no image-file change for this module (AC-128 belongs to MOD-003 only; `tabvault-mobile.jpeg` is shown smaller by the template cap, the file is unchanged).

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
- `params: Promise<{ slug: string }>` — awaited to obtain `slug = "tabvault"`.
- `ProjectEntry` record for slug "tabvault" from the record file `site/data/projects/tabvault.ts`, looked up by slug in the `projects` array.

**Output:**
- Rendered page at route `/projects/tabvault` inside the projects split-panel layout (MOD-003) and the Site Shell layout (MOD-001).
- Header: H1 title, atAGlance line (muted), tag chips, external links row (one link), description pull-quote.
- Sections: each h2 heading followed by paragraphs with inline bold rendered via InlineBold helper.
- Page-level `metadata` object for SEO and Open Graph.

## Dependencies

- MOD-001 (Site Shell) — the detail page is rendered inside the layout shell.
- MOD-003 (Projects Split Panel) — the detail page is rendered as `{children}` in the right panel of the projects layout; owns the shared frame, including the `ProjectEntry` interface and the ordered `projects` array in `site/data/projects-data.ts`; `generateStaticParams` relies on the same data array.

## Acceptance Criteria

- AC-053: The system shall render "TabVault" as H1 on the /projects/tabvault route.
- AC-054: The system shall render the atAGlance line "Orchestrator + reviewer · 3 clients (Chrome MV3, React PWA, Spring Boot API) · Built by my multi-agent system · Deployed to AWS ECS Fargate (now offline)" in a muted style below the H1.
- AC-055: The system shall render tag chips for: Java 21 / Spring Boot, React / TypeScript PWA, Chrome Extension (MV3), PostgreSQL, Redis, Quartz, Claude API, AWS ECS Fargate.
- AC-056: The system shall render one external link — "GitHub: " followed by the linked label "tab-management" (https://github.com/LeonWu813/tab-management). The link shows its plain-text prefix followed by the linked label, and only the label is a link; it uses `target="_blank" rel="noopener noreferrer"`.
- AC-057: The system shall render the description as a pull-quote with `border-l-2 accent` styling above the sections.
- AC-058: The system shall render the nine sections in order (The problem, My role, How it works, end to end, Images, Architecture, Key engineering decisions, Challenges and how I resolved them, Impact, What I learned, and what I would improve), each with an h2 heading. The Images section shows the TabVault screenshots (`/tabvault-mobile.jpeg`, `/tabvault-plugin.png`, in order, with the alt texts above) and has no paragraphs; every other section has paragraph content.
- AC-059: The system shall render `**bold**` syntax within paragraph text as `<strong>` elements via the InlineBold helper.
- AC-060: The system shall serve content from structured TypeScript data in the record file `site/data/projects/tabvault.ts` — not from `fs.readFileSync` or any markdown parsing at request time.
- AC-061: The system shall await `params` before reading the slug, with `params` typed as `Promise<{ slug: string }>`.
- AC-062: The system shall set `dynamicParams = false` so that an unknown slug returns 404.
- AC-063: The system shall populate `generateStaticParams` by iterating the projects data array, not by hard-coding slug strings.
- AC-064: The system shall export a metadata object with title "TabVault — Leon Wu" and Open Graph and Twitter card tags.
- AC-116: On /projects/tabvault, the At-a-glance line reads exactly as in the header table, exactly one external link renders ("GitHub: " followed by the linked label "tab-management"), and the paragraphs of "The problem" and "Impact" match the source file word for word (they say TabVault was deployed and is offline now).
- AC-117: In the built HTML of every route, including /slideshow, no link points to tab-vault.com, the text "tab-vault.com" does not appear, and no copy says TabVault is live. AC-117 does not cover the contents of the CV PDF served at /Leon_cv.pdf: the CV Leon chose on 2026-11-01 still names tab-vault.com (see section 6, Resume Hosting).
- AC-133: On /projects/tabvault, the paragraphs of every section other than "Images", "The problem" and "Impact" match the paragraph text in `site/data/projects/tabvault.ts` at commit c612306 word for word, including its punctuation ('done' in single quotes, the em dashes in "What I learned, and what I would improve"). In those sections the page does not have to match `asset/content/case-study-tabvault-detailed.md`.
- AC-127: On every /projects/<slug> page, the feature image and every image in an Images section have exactly the alt text given for them in sections 4.3 to 4.6 and 5, and no project image has an empty alt. The overlay dialog each one opens is named by that alt text. (For MOD-006, /projects/tabvault.)
- AC-126: In the built HTML of every route, including /slideshow, no phone number appears: no `tel:` link, and neither "206-677-7544" nor "2066777544" nor any other phone number in text, links or meta tags. AC-126 does not cover the contents of the CV PDF served at /Leon_cv.pdf, which lists Leon's phone number (see section 6, Resume Hosting). (For MOD-006, the /projects/tabvault route.)

## Integration Points

### Integration with MOD-012 (Interview Slideshow) — Slide images
- Slide D1 uses `/tabvault-home.png` (PRD 4.11 Slide images: "MOD-006 asset"), with alt text "Screenshot of the TabVault web app home screen.". Renaming the file breaks MOD-012.
- **AC:** AC-106 (MOD-012 spec) gates QA for the slideshow images.
