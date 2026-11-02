**Last Synced from PRD Revision**: 1.10 | **Last Updated**: 2026-11-01

---

## Module ID & Name

MOD-008: About Page

## Purpose

Short, human narrative about Leon's pivot story at route /about. Renders two body paragraphs verbatim from PRD section 4.8. No education block on this page (education lives on Experience). No photo is included.

## Context

**Business problem:** From PRD section 4.8, second paragraph: "The pivot is the point. I learned to engineer by shipping software that people actually use, and I bring that same bias toward real, working results to everything I build, whether that is a production analytics platform or a system of AI agents that ships software on its own." The About page gives context for Leon's non-traditional path into engineering — from International Business to full-stack development.

**User stories:** The PRD does not define US-IDs for this project. The following page-level requirements from PRD section 4.8 govern this module:

- Route: /about
- Page heading: "About"
- No photo (carried from earlier syncs; PRD section 4.8 does not restate it).
- Layout: outer wrapper `px-8 py-16 max-w-2xl mx-auto w-full`. No education block on this page (education lives on Experience).
- Two body paragraphs verbatim from PRD section 4.8.

**Non-goals (from PRD section 8 — Out of Scope):**
- No contact form.
- No internationalization (i18n).

## Related User Stories

- No formal US-IDs defined in PRD revision 1.10. Requirements are drawn directly from PRD section 4.8.

## Requirements

- Page route: `/about`
- Page heading: "About"
- No photo or headshot on this page.
- Layout: outer wrapper `px-8 py-16 max-w-2xl mx-auto w-full`. No education block on this page (education lives on Experience).
- First body paragraph (verbatim, PRD section 4.8): "My path into engineering did not start in a computer science classroom. I studied International Business in Taipei and spent the early part of my career on the product and marketing side, where I taught myself to code so I could build the things I was responsible for shipping. That habit grew into building full-stack products that real companies and real users came to depend on. I am now pursuing my MS in Computer Science at Northeastern to strengthen the fundamentals beneath the work I had already been doing."
- Second body paragraph (verbatim, PRD section 4.8): "The pivot is the point. I learned to engineer by shipping software that people actually use, and I bring that same bias toward real, working results to everything I build, whether that is a production analytics platform or a system of AI agents that ships software on its own."
- Body paragraphs must be rendered verbatim — no paraphrasing or alterations.
- No em dashes anywhere in the copy (PRD section 2 tone requirement: "No em dashes anywhere in site copy. Use hyphens or sentence rewrites instead.").
- Page exports a `metadata` object with title "About — Leon Wu" and a page-specific description.
- Page exports Open Graph tags and Twitter card tags.
- Where page text or a meta tag gives Leon's full name, it is "Leon Wu"; the full-name forms "Tsan-Yu (Leon) Wu" and "Tsan-Yu Wu (Leon)" do not appear (AC-125).
- Page exports a canonical URL tag.
- Canonical URL and og:url use the domain https://www.leon-wu.com followed by the page path.
- Page is a Server Component (no `'use client'`).

**Engineering note (Tech Lead, change review rev 1.7 + 1.8, 0051840):** the code locations that carry the full name are `about/page.tsx:6,10,22`; MOD-008 was missing from the rev 1.8 affected-module list and is added (PM Updates, rev 1.9).

## Input / Output Contract

**Input:**
- No dynamic data inputs — all copy is static, drawn verbatim from PRD section 4.8 .

**Output:**
- Rendered page at route `/about` inside the Site Shell layout (MOD-001).
- Page heading "About".
- Two body paragraphs verbatim. No education block.
- Page-level `metadata` object for SEO and Open Graph.

## Dependencies

- MOD-001 (Site Shell) — the about page is rendered inside the layout shell.

## Acceptance Criteria

- AC-059: The system shall render the page heading "About" on the /about route.
- AC-060: The system shall render the first body paragraph verbatim: "My path into engineering did not start in a computer science classroom..." (full text as specified in PRD section 4.8).
- AC-061: The system shall render the second body paragraph verbatim: "The pivot is the point..." (full text as specified in PRD section 4.8).
- AC-062: The system shall not render an education block on the /about page (education lives on Experience).
- AC-063: The system shall not include a photo or headshot on the /about page.
- AC-064: The system shall contain no em dashes in any rendered copy.
- AC-065: The system shall export a metadata object with title "About — Leon Wu" and Open Graph and Twitter card tags.
- AC-125 (changed in revision 1.9): In the built HTML of every route, neither "Tsan-Yu (Leon) Wu", "Tsan-Yu Wu (Leon)" nor "Tsan-Yu Wu" appears. Every meta description, Open Graph description and Twitter description that named Leon by his full name names him "Leon Wu" instead, with the rest of its text unchanged unless AC-121 or AC-122 gives the full text. For example, the root description reads "Portfolio of Leon Wu — full-stack engineer and CS master's student at Northeastern University." The LinkedIn URL and the email address, which contain "tsan-yu" and "tsan.yu", are unchanged.
- AC-126: In the built HTML of every route, including /slideshow, no phone number appears: no `tel:` link, and neither "206-677-7544" nor "2066777544" nor any other phone number in text, links or meta tags. AC-126 does not cover the contents of the CV PDF served at /Leon_cv.pdf, which lists Leon's phone number (see section 6, Resume Hosting). (For MOD-008, the /about route.)
