**Last Synced from PRD Revision**: 1.6 | **Last Updated**: 2026-11-01

---

## Module ID & Name

MOD-002: Home Page

## Purpose

A single, short hero screen that orients the visitor immediately. Renders the greeting headline, bio paragraph, current status line, primary CTA linking to LinkedIn, secondary CTA linking to /contact, and tertiary CTA linking to /Leon_cv.pdf. Hero content is visible without scrolling on a standard laptop viewport. No featured blog card. No long scroll.

## Context

**Business problem:** From PRD Goal 1: "Give technical recruiters and hiring managers a fast, credible picture of Leon's engineering ability within their first few seconds on the page." The Home page is the first impression. It must orient the visitor immediately with Leon's identity, role, and a direct path to connect.

**User stories:** The PRD does not define US-IDs for this project. The following page-level requirements from PRD section 4.1 govern this module:

- Route: /
- Hero content visible without scrolling on a standard laptop viewport.
- No headshot on home page.
- No featured blog card.
- Primary CTA links to https://www.linkedin.com/in/leon-wu-tsan-yu/
- Secondary CTA "Reach out" links to /contact.
- Tertiary CTA "Download CV" links to /Leon_cv.pdf; the file downloads as Leon_Wu_Resume.pdf.
- No title/role subtitle appears under the H1.

**Non-goals (from PRD section 8 — Out of Scope):**
- No blog or blog infrastructure.
- No contact form — contact page shows email address and links only.

## Related User Stories

- No formal US-IDs defined in PRD revision 1.2. Requirements are drawn directly from PRD section 4.1.

## Requirements

- Page route: `/`
- Greeting headline (H1): "Hey, I'm Leon 👋"
- No title/role subtitle appears under the H1.
- Primary CTA button text: "Connect on LinkedIn" — links to https://www.linkedin.com/in/leon-wu-tsan-yu/ with `target="_blank" rel="noopener noreferrer"`.
- Bio paragraph (verbatim): "I'm a full-stack engineer and CS master's student at Northeastern. I build production systems by hand. From the database schema to the cloud deployment. And I design multi-agent systems that plan, implement, and ship software end to end."
- Current status line (verbatim): "Currently seeking a 2026/2027 software engineering internship across full-stack, frontend, or backend roles."
- Secondary CTA text: "Reach out" — links to /contact (internal link, use next/link or `<a href="/contact">`).
- Tertiary CTA text: "Download CV" — links to /Leon_cv.pdf; the file downloads as Leon_Wu_Resume.pdf.
- All hero content is visible without scrolling on a standard laptop viewport.
- No headshot on this page.
- No blog card or blog-related content.
- Page exports a `metadata` object with title "Home — Leon Wu" and a page-specific description.
- Page exports Open Graph tags: `og:title`, `og:description`, `og:image`, `og:url`, `og:type`.
- Page exports Twitter card tags: `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`.
- Page exports a canonical URL tag.
- Canonical URL and og:url use the domain https://www.leon-wu.com followed by the page path.
- Page is a Server Component (no `'use client'`).
- Projects list (below bio, no dates): project title + tech string (e.g. "Full-Stack · Java/Spring Boot · React · AWS"); no year/date column shown; each entry links to its project detail page.
- ProjectDay appears in the Home page projects list with its title and tech line, links to /projects/projectday, and shows no date.

## Input / Output Contract

**Input:**
- No dynamic data inputs — all copy is static, drawn verbatim from PRD section 4.1 (sourced from site-copy.md).

**Output:**
- Rendered page at route `/` inside the Site Shell layout (MOD-001).
- H1: "Hey, I'm Leon 👋"
- No title/role subtitle under the H1.
- Bio paragraph verbatim.
- Current status line verbatim.
- Primary CTA button linking to LinkedIn.
- Secondary CTA "Reach out" linking to /contact.
- Tertiary CTA "Download CV" linking to /Leon_cv.pdf.
- Page-level `metadata` object for SEO and Open Graph.

## Dependencies

- MOD-001 (Site Shell) — the home page is rendered inside the layout shell.

## Acceptance Criteria

- AC-011: The system shall render "Hey, I'm Leon 👋" as an H1 on the home page when the route / is visited.
- AC-012: The system shall not render a title/role subtitle under the H1 on the home page.
- AC-013: The system shall render the bio paragraph verbatim as specified in PRD section 4.1.
- AC-014: The system shall render the current status line verbatim as specified in PRD section 4.1.
- AC-015: The system shall render a primary CTA button labeled "Connect on LinkedIn" linking to https://www.linkedin.com/in/leon-wu-tsan-yu/ with `target="_blank" rel="noopener noreferrer"`.
- AC-016: The system shall render a secondary CTA labeled "Reach out" linking to /contact.
- AC-017: The system shall display all hero content above the fold (visible without scrolling) on a standard laptop viewport.
- AC-018: The system shall export a metadata object with title "Home — Leon Wu" and Open Graph and Twitter card tags.
- AC-087: ProjectDay appears in the Home page projects list with its title and tech line, links to /projects/projectday, and shows no date.

## Integration Points

### Integration with MOD-011 (Project Detail: ProjectDay)
- AC-087: ProjectDay appears in the Home page projects list with its title and tech line, links to /projects/projectday, and shows no date.
