**Last Synced from PRD Revision**: 1.2 | **Last Updated**: 2026-06-28

---

## Module ID & Name

MOD-007: Experience Page

## Purpose

Reverse-chronological list of professional roles at route /experience. Each entry emphasizes engineering substance first, with outcomes as supporting evidence. Education entries are included on this page.

## Context

**Business problem:** From PRD Goal 1: "Give technical recruiters and hiring managers a fast, credible picture of Leon's engineering ability within their first few seconds on the page." The Experience page provides concrete evidence of Leon's professional history and the engineering work he has done in prior roles. From PRD section 4.6: "Each entry emphasizes engineering substance first, with outcomes as supporting evidence."

**User stories:** The PRD does not define US-IDs for this project. The following page-level requirements from PRD section 4.6 govern this module:

- Route: /experience
- Page heading: "Experience"
- Reverse-chronological order for roles.
- Education included on this page (default per PRD section 4.6).

**Non-goals (from PRD section 8 — Out of Scope):**
- No internationalization (i18n).

## Related User Stories

- No formal US-IDs defined in PRD revision 1.2. Requirements are drawn directly from PRD section 4.6.

## Requirements

- Page route: `/experience`
- Page heading: "Experience"
- Experience entries rendered in reverse-chronological order.
- Experience data is read from a TypeScript data file typed against the `ExperienceEntry` interface — not hardcoded in the component.
- Education entries are included on this page.
- Education data is read from a TypeScript data file typed against the `EducationEntry` interface — not hardcoded in the component.

**Experience entries (from PRD section 4.6):**

Role 1: Front-End Developer
- Company: Exascend
- Location: Taipei, Taiwan
- Dates: Sep 2023 – Jun 2025
- Bullets:
  1. "Designed and implemented a custom JavaScript event-tracking system posting structured user interactions to CRM and GA4 APIs, automating cross-platform data capture and cutting manual reporting by 70%."
  2. "Led end-to-end development of two customer-facing websites from scratch (HTML, CSS, JavaScript), growing monthly active users by 350% and increasing average session engagement time by 22.3%."
  3. "Ran technical SEO and accessibility audits (Google Search Console, Lighthouse, WCAG) validated via A/B testing, driving a 48.84% increase in page views while ensuring inclusive, accessible experiences."

Role 2: Growth Marketer / Marketing Project Manager
- Company: GoFreight
- Location: Taipei, Taiwan
- Dates: Jul 2021 – Mar 2023
- Bullets:
  1. "Planned and executed conversion rate optimization experiments, growing conversion from 0.38% to 2.55%, and improved technical SEO by raising Lighthouse score from 20 to 70."
  2. "Managed Google Ads campaigns to cut cost per demo from $5,000 to below $2,000, and expanded into the China market via Baidu Ads, generating $3,150 in inbound pipeline."
  3. "Planned and executed an SEO migration strategy that held the primary keyword to a one-rank drop, and organized the JCTrans GFFC 12th event achieving a $16,500 target pipeline."

**Education entries (from PRD section 4.6):**

- Degree: MS in Computer Science | Institution: Northeastern University | GPA: 3.9 / 4.0 | Period: Expected Dec 2027 | Location: Seattle, WA
- Degree: BA in International Business | Institution: National Chengchi University | GPA: 3.5 / 4.0 | Period: Completed | Location: Taipei, Taiwan

**TypeScript interfaces (from PRD section 5):**
```typescript
interface ExperienceEntry {
  title: string;
  company: string;
  location: string;
  startDate: string;    // "MMM YYYY" format
  endDate: string;      // "MMM YYYY" or "Present"
  bullets: string[];
}

interface EducationEntry {
  degree: string;
  institution: string;
  gpa: string;
  period: string;       // e.g., "Expected Dec 2027" or "Graduated Jun 2019"
  location: string;
}
```

- Page exports a `metadata` object with title "Experience — Leon Wu" and a page-specific description.
- Page exports Open Graph tags and Twitter card tags.
- Page exports a canonical URL tag.
- [AMBIGUITY: PRD lists domain name as a still-needed blocking asset — og:url and canonical URL values cannot be populated until the domain is confirmed. PM must provide the domain before production deploy.]
- Page is a Server Component (no `'use client'`).
- Semantic HTML: use appropriate elements for the role list (e.g., `<section>`, `<article>`, or `<ul>`).

## Input / Output Contract

**Input:**
- Experience data array from the TypeScript data file, typed against the `ExperienceEntry` interface.
- Education data array from the TypeScript data file, typed against the `EducationEntry` interface.

**Output:**
- Rendered page at route `/experience` inside the Site Shell layout (MOD-001).
- Page heading "Experience".
- Two experience entries in reverse-chronological order with company, title, location, dates, and bullets.
- Education section with two entries.
- Page-level `metadata` object for SEO and Open Graph.

## Dependencies

- MOD-001 (Site Shell) — the experience page is rendered inside the layout shell.

## Acceptance Criteria

- AC-053: The system shall render the page heading "Experience" on the /experience route.
- AC-054: The system shall render experience entries in reverse-chronological order (Exascend Sep 2023 – Jun 2025 first, GoFreight Jul 2021 – Mar 2023 second).
- AC-055: The system shall render each experience entry with company name, job title, location, date range, and all bullet points verbatim as specified in PRD section 4.6.
- AC-056: The system shall render education entries on the /experience page with institution, degree, GPA, period, and location as specified in PRD section 4.6.
- AC-057: The system shall read experience and education data from TypeScript data files rather than hardcoding values in the component.
- AC-058: The system shall export a metadata object with title "Experience — Leon Wu" and Open Graph and Twitter card tags.
