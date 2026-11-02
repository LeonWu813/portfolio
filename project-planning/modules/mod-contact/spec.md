**Last Synced from PRD Revision**: 1.11 | **Last Updated**: 2026-11-01

---

## Module ID & Name

MOD-010: Contact Page

## Purpose

Contact page at route /contact that makes contact effortless. Shows a real email address as a mailto link, LinkedIn link, GitHub link, and a resume PDF download. No contact form.

## Context

**Business problem:** From PRD Goal 3: "Make contact and resume access effortless from any page." From PRD Success Criteria: "A visitor can reach Leon's email, LinkedIn, GitHub, and resume PDF from any page." The contact page is the dedicated destination for recruiters and engineers to take action. From PRD section 4.10: "Showing a real email address (not only a contact form) is required. Forms can break silently; a visible email address always works."

**User stories:** The PRD does not define US-IDs for this project. The following page-level requirements from PRD section 4.10 govern this module:

- Route: /contact
- Page heading: "Contact" (PRD section 4.10)
- Intro line (verbatim): "Looking for a 2026/2027 internship in full-stack, frontend, or backend engineering. If you're working on something interesting, I'd love to hear about it."
- Three contact methods required: Email (mailto link), LinkedIn, GitHub.
- Resume download: label "Download CV" or "Resume (PDF)"; file served at `/Leon_cv.pdf` (`<a href="/Leon_cv.pdf" download="Leon_Wu_Resume.pdf">`).
- Layout: outer wrapper `px-8 py-16 max-w-2xl mx-auto w-full`.
- Email is the only direct contact method. The email stays the Gmail address, not the CV's university address, and the site shows no phone number, although the CV lists one (Leon's choices, 2026-11-01).
- A visible real email address is required — not hidden behind a form.
- No contact form.

**Non-goals (from PRD section 8 — Out of Scope):**
- No contact form — contact page shows a real email address and links only.
- No internationalization (i18n).

## Related User Stories

- No formal US-IDs defined in PRD revision 1.10. Requirements are drawn directly from PRD section 4.10.

## Requirements

- Page route: `/contact`
- Page heading: "Contact"
- Intro line (verbatim): "Looking for a 2026/2027 internship in full-stack, frontend, or backend engineering. If you're working on something interesting, I'd love to hear about it."
- Email: display text "leon.wu.tsan.yu@gmail.com" as a `mailto:leon.wu.tsan.yu@gmail.com` link.
- LinkedIn: display text "linkedin.com/in/leon-wu-tsan-yu" linking to https://www.linkedin.com/in/leon-wu-tsan-yu/ with `target="_blank" rel="noopener noreferrer"`.
- GitHub: display text "github.com/LeonWu813" linking to https://github.com/LeonWu813 with `target="_blank" rel="noopener noreferrer"`.
- Resume download: `<a href="/Leon_cv.pdf" download="Leon_Wu_Resume.pdf">` — labeled "Download CV" or "Resume (PDF)". Not `next/link`. The file `asset/Leon_cv.pdf` must be copied to `site/public/Leon_cv.pdf` before deploying.
- Contact methods are listed in this order, each in the same style as each other: Email, LinkedIn, GitHub, Resume. No other email address appears on the page, and the sidebar's Online block is unchanged.
- All external links include `target="_blank" rel="noopener noreferrer"`.
- No phone number appears on the site (no `tel:` link and no phone number in text, links or meta tags; AC-126). Email is the only direct contact method.
- The site names Leon "Leon Wu"; where page text or a meta tag gives his full name it is "Leon Wu" (AC-125).
- Layout: outer wrapper `px-8 py-16 max-w-2xl mx-auto w-full`.
- No contact form — visible email address is required.
- Page exports a `metadata` object with title "Contact — Leon Wu" and a page-specific description.
- Page exports Open Graph tags and Twitter card tags.
- Page exports a canonical URL tag.
- Canonical URL and og:url use the domain https://www.leon-wu.com followed by the page path.
- Page is a Server Component (no `'use client'`).

**Engineering note (Tech Lead, change review rev 1.7 + 1.8, 0051840):** the code locations that carry the full name are `contact/page.tsx:6,9,20`.

## Input / Output Contract

**Input:**
- No dynamic data inputs — all contact information is static, drawn from PRD section 4.10.
- Static file at `public/Leon_cv.pdf` (copied from `asset/Leon_cv.pdf` before deploy) served by Next.js at the path `/Leon_cv.pdf`.

**Output:**
- Rendered page at route `/contact` inside the Site Shell layout (MOD-001).
- Page heading "Contact" and intro line.
- Email as a visible `mailto:` link.
- LinkedIn link.
- GitHub link.
- Resume download link (`<a href="/Leon_cv.pdf" download="Leon_Wu_Resume.pdf">`).
- No phone number.
- Page-level `metadata` object for SEO and Open Graph.

## Dependencies

- MOD-001 (Site Shell) — the contact page is rendered inside the layout shell.

## Acceptance Criteria

- AC-072: The system shall render the page heading "Contact" and the intro line verbatim on the /contact route.
- AC-073: The system shall render the email address "leon.wu.tsan.yu@gmail.com" as a visible `mailto:leon.wu.tsan.yu@gmail.com` link.
- AC-074: The system shall render a LinkedIn link displaying "linkedin.com/in/leon-wu-tsan-yu" linking to https://www.linkedin.com/in/leon-wu-tsan-yu/ with `target="_blank" rel="noopener noreferrer"`.
- AC-075: The system shall render a GitHub link displaying "github.com/LeonWu813" linking to https://github.com/LeonWu813 with `target="_blank" rel="noopener noreferrer"`.
- AC-076: The system shall render a resume download link using `<a href="/Leon_cv.pdf" download="Leon_Wu_Resume.pdf">` labeled "Download CV" or "Resume (PDF)" — not next/link.
- AC-077: The system shall not render a contact form on the /contact page.
- AC-078: The system shall export a metadata object with title "Contact — Leon Wu" and Open Graph and Twitter card tags.
- AC-123: /contact lists, in this order, Email, LinkedIn, GitHub and Resume, each with the label and display text above, in the same style as each other. No other email address appears on the page, and the sidebar's Online block is unchanged.
- AC-125 (changed in revision 1.9): In the built HTML of every route, neither "Tsan-Yu (Leon) Wu", "Tsan-Yu Wu (Leon)" nor "Tsan-Yu Wu" appears. Every meta description, Open Graph description and Twitter description that named Leon by his full name names him "Leon Wu" instead, with the rest of its text unchanged unless AC-121 or AC-122 gives the full text. For example, the root description reads "Portfolio of Leon Wu — full-stack engineer and CS master's student at Northeastern University." The LinkedIn URL and the email address, which contain "tsan-yu" and "tsan.yu", are unchanged.
- AC-126: In the built HTML of every route, including /slideshow, no phone number appears: no `tel:` link, and neither "206-677-7544" nor "2066777544" nor any other phone number in text, links or meta tags. AC-126 does not cover the contents of the CV PDF served at /Leon_cv.pdf, which lists Leon's phone number (see section 6, Resume Hosting). (For MOD-010, the /contact route.)
