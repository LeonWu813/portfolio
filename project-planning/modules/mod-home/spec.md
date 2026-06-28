**Last Synced from PRD Revision**: 1.2 | **Last Updated**: 2026-06-28

---

## Module ID & Name

MOD-002: Home Page

## Purpose

A single, short hero screen that orients the visitor immediately. Renders the greeting headline, role subtitle, bio paragraph, current status line, primary CTA linking to LinkedIn, and secondary CTA linking to /contact. Hero content is visible without scrolling on a standard laptop viewport. No featured blog card. No long scroll.

## Context

**Business problem:** From PRD Goal 1: "Give technical recruiters and hiring managers a fast, credible picture of Leon's engineering ability within their first few seconds on the page." The Home page is the first impression. It must orient the visitor immediately with Leon's identity, role, and a direct path to connect.

**User stories:** The PRD does not define US-IDs for this project. The following page-level requirements from PRD section 4.1 govern this module:

- Route: /
- Hero content visible without scrolling on a standard laptop viewport.
- No headshot on home page.
- No featured blog card.
- Primary CTA links to https://www.linkedin.com/in/leon-wu-tsan-yu/
- Secondary CTA "Reach out" links to /contact.

**Non-goals (from PRD section 8 — Out of Scope):**
- No blog or blog infrastructure.
- No contact form — contact page shows email address and links only.

## Related User Stories

- No formal US-IDs defined in PRD revision 1.2. Requirements are drawn directly from PRD section 4.1.

## Requirements

- Page route: `/`
- Greeting headline (H1): "Hey, I'm Leon"
- Title / role (H2 or subtitle): "Full-Stack Engineer"
- Primary CTA button text: "Connect me on LinkedIn" — links to https://www.linkedin.com/in/leon-wu-tsan-yu/ with `target="_blank" rel="noopener noreferrer"`.
- Bio paragraph (verbatim): "I'm a full-stack engineer and CS master's student at Northeastern. I build production systems by hand, from the database schema to the cloud deployment, and I design multi-agent systems that plan, implement, and ship software end to end. What I care about most is the engineering that makes software hold up in the real world, not just in a demo."
- Current status line (verbatim): "Currently pursuing my MS in Computer Science at Northeastern and looking for a Summer 2026 software engineering internship across full-stack, frontend, or backend roles."
- Secondary CTA text: "Reach out" — links to /contact (internal link, use next/link or `<a href="/contact">`).
- All hero content is visible without scrolling on a standard laptop viewport.
- No headshot on this page.
- No blog card or blog-related content.
- Page exports a `metadata` object with title "Home — Leon Wu" and a page-specific description.
- Page exports Open Graph tags: `og:title`, `og:description`, `og:image`, `og:url`, `og:type`.
- Page exports Twitter card tags: `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`.
- Page exports a canonical URL tag.
- [AMBIGUITY: PRD lists domain name as a still-needed blocking asset — og:url and canonical URL values cannot be populated until the domain is confirmed. PM must provide the domain before production deploy.]
- Page is a Server Component (no `'use client'`).

## Input / Output Contract

**Input:**
- No dynamic data inputs — all copy is static, drawn verbatim from PRD section 4.1 (sourced from site-copy.md).

**Output:**
- Rendered page at route `/` inside the Site Shell layout (MOD-001).
- H1: "Hey, I'm Leon"
- H2 / subtitle: "Full-Stack Engineer"
- Bio paragraph verbatim.
- Current status line verbatim.
- Primary CTA button linking to LinkedIn.
- Secondary CTA "Reach out" linking to /contact.
- Page-level `metadata` object for SEO and Open Graph.

## Dependencies

- MOD-001 (Site Shell) — the home page is rendered inside the layout shell.

## Acceptance Criteria

- AC-011: The system shall render "Hey, I'm Leon" as an H1 on the home page when the route / is visited.
- AC-012: The system shall render "Full-Stack Engineer" as an H2 or role subtitle on the home page.
- AC-013: The system shall render the bio paragraph verbatim as specified in PRD section 4.1.
- AC-014: The system shall render the current status line verbatim as specified in PRD section 4.1.
- AC-015: The system shall render a primary CTA button labeled "Connect me on LinkedIn" linking to https://www.linkedin.com/in/leon-wu-tsan-yu/ with `target="_blank" rel="noopener noreferrer"`.
- AC-016: The system shall render a secondary CTA labeled "Reach out" linking to /contact.
- AC-017: The system shall display all hero content above the fold (visible without scrolling) on a standard laptop viewport.
- AC-018: The system shall export a metadata object with title "Home — Leon Wu" and Open Graph and Twitter card tags.
