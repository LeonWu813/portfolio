**Last Synced from PRD Revision**: 1.10 | **Last Updated**: 2026-11-01

---

## Module ID & Name

MOD-007: Experience Page

## Purpose

Reverse-chronological list of professional roles at route /experience, in a two-column timeline (`grid grid-cols-[9rem_1fr]`), followed by an Education section in the same timeline visual at the bottom of the page. Content follows Leon's CV: `asset/content/experience.md` (as of commit e479e22), aligned with the CV (`asset/Leon_cv.pdf`, commit cfa3367) on 2026-11-01; the CV is the source of truth for titles, dates and bullets.

## Context

**Business problem:** From PRD Goal 1: "Give technical recruiters and hiring managers a fast, credible picture of Leon's engineering ability within their first few seconds on the page." The Experience page provides concrete evidence of Leon's professional history and the engineering work he has done in prior roles.

**User stories:** The PRD does not define US-IDs for this project. The following page-level requirements from PRD section 4.7 govern this module:

- Route: /experience
- Layout: two-column timeline (`grid grid-cols-[9rem_1fr]`). Left column: date range right-aligned. Right column: dot indicator with vertical line connector, role title, company, bullets, tech chips.
- Date format: `{startDate} – {endDate}` (no line break between start and end).
- Tech chips: small `px-2 py-0.5 rounded` badges.
- Outer wrapper: `px-8 py-16 max-w-2xl mx-auto w-full`.
- Source file: `asset/content/experience.md` (as of commit e479e22). It was aligned with Leon's CV (`asset/Leon_cv.pdf`, replaced on 2026-11-01 with his newer CV, commit cfa3367) on 2026-11-01; the CV is the source of truth for titles, dates and bullets. One true detail that is not on the CV stays at Leon's choice: the 22.3% session-engagement figure on the Exascend bullet.

**Non-goals (from PRD section 8 — Out of Scope):**
- Internationalization (i18n): English only.

## Related User Stories

- No formal US-IDs defined in PRD revision 1.10. Requirements are drawn directly from PRD sections 4.7 and 5.

## Requirements

- Page route: `/experience`
- Page heading: "Experience" (carried from earlier syncs; PRD section 4.7 does not restate it)
- Layout: two-column timeline (`grid grid-cols-[9rem_1fr]`). Left column: date range right-aligned. Right column: dot indicator with vertical line connector, role title, company, bullets, tech chips.
- Date format: `{startDate} – {endDate}` (no line break between start and end).
- Tech chips: small `px-2 py-0.5 rounded` badges.
- Outer wrapper: `px-8 py-16 max-w-2xl mx-auto w-full`.
- Experience entries rendered in reverse-chronological order.
- Experience data is read from a TypeScript data file typed against the `ExperienceEntry` interface — not hardcoded in the component.
- Education entries (same timeline visual, at the bottom of the page) are read from a TypeScript data file typed against the `EducationEntry` interface — not hardcoded in the component.

**Experience entries (from PRD section 4.7, reverse-chronological):**

Role 1: Front-End Developer
- Company: Exascend
- Location: Taipei, Taiwan
- Dates: Sep 2023 – Aug 2025
- Tags: JavaScript · HTML · CSS · GA4 · SEO · Lighthouse · WCAG
- Bullets:
  1. "Built a custom JavaScript event-tracking system posting structured user interactions to CRM and GA4 APIs, cutting manual reporting 70%."
  2. "Two customer-facing websites went from requirements to shipped product under my ownership (HTML, CSS, JavaScript), growing monthly active users 3.5x, from 12,000 to 41,350, and increasing average session engagement time by 22.3%."
  3. "Page views rose 48.8% after a round of technical SEO and accessibility audits (Google Search Console, Lighthouse, WCAG) that I validated with A/B testing."

Role 2: Marketing Project Manager
- Company: GoFreight
- Location: Taipei, Taiwan
- Dates: Jul 2021 – Mar 2023
- Tags: HTML · CSS · JavaScript · A/B Testing · Event Tracking · Project Management
- Bullets:
  1. "Built and maintained a front-end codebase (HTML, CSS, JavaScript) with an A/B testing pipeline of variant logic and event tracking, lifting conversion rate 67% through iterative experimentation."
  2. "Led cross-functional teams through a product launch, coordinating tracking integrations and a cross-channel strategy that generated $16.5K in MRR."

**Education section (same timeline visual, at the bottom of the page):**

| Degree | Institution | GPA | Period | Location |
|---|---|---|---|---|
| Master of Science in Computer Science | Northeastern University | 3.9 / 4.0 | Jul 2025 – Dec 2027 (Expected) | Seattle, WA |
| Bachelor of International Business | National Chengchi University | 3.5 / 4.0 | Sep 2017 – Jun 2021 | Taipei, Taiwan |

**TypeScript interfaces (from PRD section 5):**
```typescript
interface ExperienceEntry {
  title: string;
  company: string;
  location: string;
  startDate: string;    // "MMM YYYY"
  endDate: string;      // "MMM YYYY" or "Present"
  bullets: string[];
  tags?: string[];      // optional tech/skill chips (both roles have them)
}

interface EducationEntry {
  degree: string;
  institution: string;
  gpa: string;
  period: string;
  location: string;
}
```

- The /experience meta description is exactly "Professional experience and education of Leon Wu: Front-End Developer at Exascend, Marketing Project Manager at GoFreight, Master of Science in Computer Science at Northeastern University." The Open Graph and Twitter descriptions are exactly "Professional experience and education of Leon Wu." No meta tag on /experience contains "Growth Marketer" or "MS in Computer Science". (AC-121)
- Page exports a `metadata` object with title "Experience — Leon Wu"; Open Graph tags and Twitter card tags; a canonical URL tag.
- Canonical URL and og:url use the domain https://www.leon-wu.com followed by the page path.
- The site names Leon "Leon Wu"; the full-name forms "Tsan-Yu (Leon) Wu" and "Tsan-Yu Wu (Leon)" do not appear on the site (AC-125).
- Page is a Server Component (no `'use client'`).
- Semantic HTML: use appropriate elements for the role list (e.g., `<section>`, `<article>`, or `<ul>`).

**Engineering note (Tech Lead, change review rev 1.7 + 1.8, 0051840):** the code locations that carry the full name are `experience/page.tsx:7,10,19`, which AC-121 replaces anyway.

## Input / Output Contract

**Input:**
- Experience data array from the TypeScript data file, typed against the `ExperienceEntry` interface.
- Education data array from the TypeScript data file, typed against the `EducationEntry` interface.

**Output:**
- Rendered page at route `/experience` inside the Site Shell layout (MOD-001).
- Page heading "Experience".
- Two experience entries in reverse-chronological order with company, title, location, dates, bullets and tag chips.
- Education section with two entries.
- Page-level `metadata` object for SEO and Open Graph.

## Dependencies

- MOD-001 (Site Shell) — the experience page is rendered inside the layout shell.

## Acceptance Criteria

- AC-053: The system shall render the page heading "Experience" on the /experience route.
- AC-054: The system shall render experience entries in reverse-chronological order (Exascend first, GoFreight second).
- AC-057: The system shall read experience and education data from TypeScript data files rather than hardcoding values in the component.
- AC-058: The system shall export a metadata object with title "Experience — Leon Wu" and Open Graph and Twitter card tags.
- AC-118: /experience shows Exascend first and GoFreight second. Each role's title, company, location, dates, every bullet and every tag chip match this section word for word, in the order listed. No other bullet or chip appears; in particular none of the earlier copy shows ("Growth Marketer", "0.38% to 2.55%", "Baidu Ads", "JCTrans", "350%", "670%"). (Changed in revision 1.8: the Exascend bullet keeps "22.3%", so it is no longer on this list.)
- AC-119: The Education section shows the two entries in the table above, in that order, with degree, institution, GPA, period and location word for word.
- AC-121 (added in revision 1.8, name changed in revision 1.9): The /experience meta description is exactly "Professional experience and education of Leon Wu: Front-End Developer at Exascend, Marketing Project Manager at GoFreight, Master of Science in Computer Science at Northeastern University." The Open Graph and Twitter descriptions are exactly "Professional experience and education of Leon Wu." No meta tag on /experience contains "Growth Marketer" or "MS in Computer Science".
- AC-125 (changed in revision 1.9): In the built HTML of every route, neither "Tsan-Yu (Leon) Wu", "Tsan-Yu Wu (Leon)" nor "Tsan-Yu Wu" appears. Every meta description, Open Graph description and Twitter description that named Leon by his full name names him "Leon Wu" instead, with the rest of its text unchanged unless AC-121 or AC-122 gives the full text. For example, the root description reads "Portfolio of Leon Wu — full-stack engineer and CS master's student at Northeastern University." The LinkedIn URL and the email address, which contain "tsan-yu" and "tsan.yu", are unchanged.
- AC-126: In the built HTML of every route, including /slideshow, no phone number appears: no `tel:` link, and neither "206-677-7544" nor "2066777544" nor any other phone number in text, links or meta tags. AC-126 does not cover the contents of the CV PDF served at /Leon_cv.pdf, which lists Leon's phone number (see section 6, Resume Hosting). (For MOD-007, the /experience route.)
