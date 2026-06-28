**Last Synced from PRD Revision**: 1.2 | **Last Updated**: 2026-06-28

---

## Module ID & Name

MOD-009: Skills Page

## Purpose

Technical skills listed by category at route /skills, scannable at a glance. Each category is rendered as a labeled group with chip/badge elements per skill. Renamed from "Tools" (as on the reference site) to "Skills".

## Context

**Business problem:** From PRD Goal 1: "Give technical recruiters and hiring managers a fast, credible picture of Leon's engineering ability within their first few seconds on the page." The Skills page gives recruiters a quick, scannable inventory of Leon's technical toolkit, organized by category so they can find the specific technologies they care about at a glance.

**User stories:** The PRD does not define US-IDs for this project. The following page-level requirements from PRD section 4.8 govern this module:

- Route: /skills
- Page heading: "Skills"
- Intro line (verbatim): "Languages, frameworks, and tools I work with."
- Six skill groups, each rendered as a labeled group with chip/badge elements.
- Do not pad with tools touched only once. List represents genuine working familiarity.

**Non-goals (from PRD section 8 — Out of Scope):**
- No internationalization (i18n).

## Related User Stories

- No formal US-IDs defined in PRD revision 1.2. Requirements are drawn directly from PRD section 4.8.

## Requirements

- Page route: `/skills`
- Page heading: "Skills"
- Intro line (verbatim): "Languages, frameworks, and tools I work with."
- Six skill groups rendered in the following order with the following contents (from PRD section 4.8):

  | Category | Skills |
  | --- | --- |
  | Languages | Java, JavaScript, TypeScript, Python, SQL, C++, C, HTML, CSS |
  | Backend | Spring Boot, Spring Security, Spring Data JPA, Hibernate, JWT, REST APIs, JUnit, Mockito |
  | Frontend | React, Redux Toolkit, Vite, Axios, Recharts |
  | Databases and Cloud | PostgreSQL, Redis, AWS (EC2, ALB, RDS, ElastiCache, S3, CloudFront) |
  | DevOps and Tools | Docker, GitHub Actions, Nginx, Git, Maven |
  | Analytics and Design | Figma, GA4, SEO, WCAG |

- Each category is rendered as a labeled group heading with individual chip/badge elements per skill item.
- Skills data is read from a TypeScript data file — not hardcoded in the component.
- Page exports a `metadata` object with title "Skills — Leon Wu" and a page-specific description.
- Page exports Open Graph tags and Twitter card tags.
- Page exports a canonical URL tag.
- [AMBIGUITY: PRD lists domain name as a still-needed blocking asset — og:url and canonical URL values cannot be populated until the domain is confirmed. PM must provide the domain before production deploy.]
- Page is a Server Component (no `'use client'`).

## Input / Output Contract

**Input:**
- Skills data from a TypeScript data file: array of skill groups, each with a category label and array of skill strings.

**Output:**
- Rendered page at route `/skills` inside the Site Shell layout (MOD-001).
- Page heading "Skills" and intro line.
- Six labeled skill groups, each with chip/badge elements for each skill.
- Page-level `metadata` object for SEO and Open Graph.

## Dependencies

- MOD-001 (Site Shell) — the skills page is rendered inside the layout shell.

## Acceptance Criteria

- AC-066: The system shall render the page heading "Skills" and intro line "Languages, frameworks, and tools I work with." on the /skills route.
- AC-067: The system shall render six skill groups in the order: Languages, Backend, Frontend, Databases and Cloud, DevOps and Tools, Analytics and Design.
- AC-068: The system shall render each skill item as a chip/badge element within its category group.
- AC-069: The system shall render all skill items verbatim as specified in PRD section 4.8, with no additions or omissions.
- AC-070: The system shall read skills data from a TypeScript data file rather than hardcoding values in the component.
- AC-071: The system shall export a metadata object with title "Skills — Leon Wu" and Open Graph and Twitter card tags.
