**Last Synced from PRD Revision**: 1.2 | **Last Updated**: 2026-06-28

---

## Module ID & Name

MOD-008: About Page

## Purpose

Short, human narrative about Leon's pivot story at route /about. Renders two body paragraphs verbatim from site-copy.md and an education block. No photo is included.

## Context

**Business problem:** From PRD section 4.7: "A short, human narrative plus a photo. Tells Leon's pivot story and frames it as a differentiator." The About page humanizes the portfolio and provides context for Leon's non-traditional path into engineering — from International Business to full-stack development. The PRD notes: "The pivot is the point." This page differentiates Leon from CS graduates by framing his marketing and product background as an asset.

**User stories:** The PRD does not define US-IDs for this project. The following page-level requirements from PRD section 4.7 govern this module:

- Route: /about
- Page heading: "About"
- No photo (not included per PRD section 4.7).
- Two body paragraphs verbatim from site-copy.md.
- Education block included here (can appear here or on Experience per PRD; default for this module is to include it).

**Non-goals (from PRD section 8 — Out of Scope):**
- No contact form.
- No internationalization (i18n).

## Related User Stories

- No formal US-IDs defined in PRD revision 1.2. Requirements are drawn directly from PRD section 4.7.

## Requirements

- Page route: `/about`
- Page heading: "About"
- No photo or headshot on this page.
- First body paragraph (verbatim from site-copy.md): "My path into engineering did not start in a computer science classroom. I studied International Business in Taipei and spent the early part of my career on the product and marketing side, where I taught myself to code so I could build the things I was responsible for shipping. That habit grew into building full-stack products that real companies and real users came to depend on. I am now pursuing my MS in Computer Science at Northeastern to strengthen the fundamentals beneath the work I had already been doing."
- Second body paragraph (verbatim from site-copy.md): "The pivot is the point. I learned to engineer by shipping software that people actually use, and I bring that same bias toward real, working results to everything I build, whether that is a production analytics platform or a system of AI agents that ships software on its own."
- Education block (from site-copy.md):
  - Northeastern University, MS in Computer Science, GPA 3.9 / 4.0, expected Dec 2027, Seattle, WA
  - National Chengchi University, BA in International Business, GPA 3.5 / 4.0, Taipei, Taiwan
- Body paragraphs and education content must be rendered verbatim — no paraphrasing or alterations.
- No em dashes anywhere in the copy (PRD section 2 tone requirement: "No em dashes anywhere in site copy. Use hyphens or sentence rewrites instead.").
- Page exports a `metadata` object with title "About — Leon Wu" and a page-specific description.
- Page exports Open Graph tags and Twitter card tags.
- Page exports a canonical URL tag.
- [AMBIGUITY: PRD lists domain name as a still-needed blocking asset — og:url and canonical URL values cannot be populated until the domain is confirmed. PM must provide the domain before production deploy.]
- Page is a Server Component (no `'use client'`).

## Input / Output Contract

**Input:**
- No dynamic data inputs — all copy is static, drawn verbatim from PRD section 4.7 (sourced from site-copy.md).

**Output:**
- Rendered page at route `/about` inside the Site Shell layout (MOD-001).
- Page heading "About".
- Two body paragraphs verbatim.
- Education block with two entries.
- Page-level `metadata` object for SEO and Open Graph.

## Dependencies

- MOD-001 (Site Shell) — the about page is rendered inside the layout shell.

## Acceptance Criteria

- AC-059: The system shall render the page heading "About" on the /about route.
- AC-060: The system shall render the first body paragraph verbatim: "My path into engineering did not start in a computer science classroom..." (full text as specified in PRD section 4.7).
- AC-061: The system shall render the second body paragraph verbatim: "The pivot is the point..." (full text as specified in PRD section 4.7).
- AC-062: The system shall render the education block with Northeastern University (MS in Computer Science, GPA 3.9/4.0, expected Dec 2027, Seattle WA) and National Chengchi University (BA in International Business, GPA 3.5/4.0, Taipei Taiwan).
- AC-063: The system shall not include a photo or headshot on the /about page.
- AC-064: The system shall contain no em dashes in any rendered copy.
- AC-065: The system shall export a metadata object with title "About — Leon Wu" and Open Graph and Twitter card tags.
