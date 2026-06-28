**Last Synced from PRD Revision**: 1.2 | **Last Updated**: 2026-06-28

---

## Module ID & Name

MOD-010: Contact Page

## Purpose

Contact page at route /contact that makes contact effortless. Shows a real email address as a mailto link, LinkedIn link, GitHub link, and a resume PDF download. No contact form.

## Context

**Business problem:** From PRD Goal 3: "Make contact and resume access effortless from any page." From PRD Success Criteria: "A visitor can reach Leon's email, LinkedIn, GitHub, and resume PDF from any page." The contact page is the dedicated destination for recruiters and engineers to take action. From PRD section 4.9: "Showing a real email address (not only a contact form) is required. Forms can break silently; a visible email address always works."

**User stories:** The PRD does not define US-IDs for this project. The following page-level requirements from PRD section 4.9 govern this module:

- Route: /contact
- Page heading: "Contact"
- Intro line (verbatim): "Looking for a Summer 2026 internship in full-stack, frontend, or backend engineering. If you're working on something interesting, I'd love to hear about it."
- Three contact methods required: Email (mailto link), LinkedIn, GitHub.
- Resume download: `<a href="/Leon_cv.pdf" download="Leon_Wu_Resume.pdf">`.
- A visible real email address is required — not hidden behind a form.
- No contact form.

**Non-goals (from PRD section 8 — Out of Scope):**
- No contact form — contact page shows a real email address and links only.
- No internationalization (i18n).

## Related User Stories

- No formal US-IDs defined in PRD revision 1.2. Requirements are drawn directly from PRD section 4.9.

## Requirements

- Page route: `/contact`
- Page heading: "Contact"
- Intro line (verbatim): "Looking for a Summer 2026 internship in full-stack, frontend, or backend engineering. If you're working on something interesting, I'd love to hear about it."
- Email: display text "leon.wu.tsan.yu@gmail.com" as a `mailto:leon.wu.tsan.yu@gmail.com` link.
- LinkedIn: display text "linkedin.com/in/leon-wu-tsan-yu" linking to https://www.linkedin.com/in/leon-wu-tsan-yu/ with `target="_blank" rel="noopener noreferrer"`.
- GitHub: display text "github.com/LeonWu813" linking to https://github.com/LeonWu813 with `target="_blank" rel="noopener noreferrer"`.
- Resume download: `<a href="/Leon_cv.pdf" download="Leon_Wu_Resume.pdf">` — labeled "Download resume" or "Resume (PDF)". Not `next/link`. The file `asset/Leon_cv.pdf` must be copied to `site/public/Leon_cv.pdf` before deploying.
- All external links include `target="_blank" rel="noopener noreferrer"`.
- No contact form — visible email address is required.
- Page exports a `metadata` object with title "Contact — Leon Wu" and a page-specific description.
- Page exports Open Graph tags and Twitter card tags.
- Page exports a canonical URL tag.
- [AMBIGUITY: PRD lists domain name as a still-needed blocking asset — og:url and canonical URL values cannot be populated until the domain is confirmed. PM must provide the domain before production deploy.]
- Page is a Server Component (no `'use client'`).

## Input / Output Contract

**Input:**
- No dynamic data inputs — all contact information is static, drawn from PRD section 4.9.
- Static file at `public/Leon_cv.pdf` (copied from `asset/Leon_cv.pdf` before deploy) served by Next.js at the path `/Leon_cv.pdf`.

**Output:**
- Rendered page at route `/contact` inside the Site Shell layout (MOD-001).
- Page heading "Contact" and intro line.
- Email as a visible `mailto:` link.
- LinkedIn link.
- GitHub link.
- Resume download link (`<a href="/Leon_cv.pdf" download="Leon_Wu_Resume.pdf">`).
- Page-level `metadata` object for SEO and Open Graph.

## Dependencies

- MOD-001 (Site Shell) — the contact page is rendered inside the layout shell.

## Acceptance Criteria

- AC-072: The system shall render the page heading "Contact" and the intro line verbatim on the /contact route.
- AC-073: The system shall render the email address "leon.wu.tsan.yu@gmail.com" as a visible `mailto:leon.wu.tsan.yu@gmail.com` link.
- AC-074: The system shall render a LinkedIn link displaying "linkedin.com/in/leon-wu-tsan-yu" linking to https://www.linkedin.com/in/leon-wu-tsan-yu/ with `target="_blank" rel="noopener noreferrer"`.
- AC-075: The system shall render a GitHub link displaying "github.com/LeonWu813" linking to https://github.com/LeonWu813 with `target="_blank" rel="noopener noreferrer"`.
- AC-076: The system shall render a resume download link using `<a href="/Leon_cv.pdf" download="Leon_Wu_Resume.pdf">` labeled "Download resume" or "Resume (PDF)" — not next/link.
- AC-077: The system shall not render a contact form on the /contact page.
- AC-078: The system shall export a metadata object with title "Contact — Leon Wu" and Open Graph and Twitter card tags.
