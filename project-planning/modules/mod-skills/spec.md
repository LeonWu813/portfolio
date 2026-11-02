**Last Synced from PRD Revision**: 1.10 | **Last Updated**: 2026-11-01

---

## Module ID & Name

MOD-009: Skills Page

## Purpose

Technical skills listed by category at route /skills, scannable at a glance. Each category is rendered as a labeled group with chip/badge elements per skill.

## Context

**Business problem:** From PRD Goal 1: "Give technical recruiters and hiring managers a fast, credible picture of Leon's engineering ability within their first few seconds on the page." The Skills page gives recruiters a quick, scannable inventory of Leon's technical toolkit, organized by category so they can find the specific technologies they care about at a glance.

**User stories:** The PRD does not define US-IDs for this project. The following page-level requirements from PRD section 4.9 govern this module:

- Route: /skills
- Page heading: "Skills"
- Intro line (verbatim): "Languages, frameworks, and tools I work with."
- Layout: outer wrapper `px-8 py-16 max-w-2xl mx-auto w-full`.
- Source file: `asset/content/skills.md` (as of commit e479e22). The first five groups are the CV's skills section, item for item and in the CV's order. The last group, "Also", keeps true skills from the site that the CV does not list (Leon's choice, 2026-11-01).
- Six skill groups, each rendered as a labeled group with chip/badge elements.

**Non-goals (from PRD section 8 — Out of Scope):**
- No internationalization (i18n).

## Related User Stories

- No formal US-IDs defined in PRD revision 1.10. Requirements are drawn directly from PRD section 4.9.

## Requirements

- Page route: `/skills`
- Page heading: "Skills"
- Intro line (verbatim): "Languages, frameworks, and tools I work with."
- Layout: outer wrapper `px-8 py-16 max-w-2xl mx-auto w-full`.
- Six skill groups rendered in the following order with the following contents (from PRD section 4.9):

  | Category | Skills |
  | --- | --- |
  | Languages | Java, TypeScript, JavaScript, Python, SQL, C++ |
  | Backend | Spring Boot, Spring Security, Spring Data JPA/Hibernate, JWT, PostgreSQL, Redis, REST APIs, JUnit/Mockito |
  | Frontend | React, Redux Toolkit/Zustand, TanStack Query, Tailwind CSS |
  | Infrastructure & DevOps | Git, Docker, CI/CD (GitHub Actions), AWS (EC2, ALB, RDS, ElastiCache, S3, CloudFront) |
  | AI & Agentic Development | Claude Code (subagents, skills, hooks), agentic workflow orchestration, LLM API integration |
  | Also | C, HTML, CSS, Vite, Axios, Recharts, Nginx, Maven, Quartz, AWS ECS Fargate, Claude API, Figma, GA4, SEO, WCAG |

- Each category is rendered as a labeled group heading with individual chip/badge elements per skill item (one chip per comma-separated item; "AWS (EC2, ALB, RDS, ElastiCache, S3, CloudFront)" and "Claude Code (subagents, skills, hooks)" are one chip each).
- The meta, Open Graph and Twitter descriptions are exactly "Technical skills of Leon Wu: languages, backend, frontend, infrastructure and DevOps, and AI and agentic development." (AC-122)
- The site names Leon "Leon Wu"; the full-name forms "Tsan-Yu (Leon) Wu" and "Tsan-Yu Wu (Leon)" do not appear on the site (AC-125).
- Skills data is read from a TypeScript data file — not hardcoded in the component.
- Page exports a `metadata` object with title "Skills — Leon Wu" and a page-specific description.
- Page exports Open Graph tags and Twitter card tags.
- Page exports a canonical URL tag.
- Canonical URL and og:url use the domain https://www.leon-wu.com followed by the page path.
- Page is a Server Component (no `'use client'`).

**Engineering note (Tech Lead, change review rev 1.7 + 1.8, 0051840):** the code locations that carry the full name are `skills/page.tsx:7,11,23`, which AC-122 replaces anyway.

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
- AC-067: The system shall render six skill groups in the order: Languages, Backend, Frontend, Infrastructure & DevOps, AI & Agentic Development, Also.
- AC-068: The system shall render each skill item as a chip/badge element within its category group.
- AC-069: The system shall render all skill items verbatim as specified in PRD section 4.9, with no additions or omissions.
- AC-070: The system shall read skills data from a TypeScript data file rather than hardcoding values in the component.
- AC-071: The system shall export a metadata object with title "Skills — Leon Wu" and Open Graph and Twitter card tags.
- AC-122 (added in revision 1.8, name changed in revision 1.9): /skills shows exactly the six groups in the table above, in that order, with each category name and each skill chip word for word and in the order listed (one chip per comma-separated item; "AWS (EC2, ALB, RDS, ElastiCache, S3, CloudFront)" and "Claude Code (subagents, skills, hooks)" are one chip each). No other group or chip appears. The intro line stays "Languages, frameworks, and tools I work with." The meta, Open Graph and Twitter descriptions are exactly "Technical skills of Leon Wu: languages, backend, frontend, infrastructure and DevOps, and AI and agentic development."
- AC-125 (changed in revision 1.9): In the built HTML of every route, neither "Tsan-Yu (Leon) Wu", "Tsan-Yu Wu (Leon)" nor "Tsan-Yu Wu" appears. Every meta description, Open Graph description and Twitter description that named Leon by his full name names him "Leon Wu" instead, with the rest of its text unchanged unless AC-121 or AC-122 gives the full text. For example, the root description reads "Portfolio of Leon Wu — full-stack engineer and CS master's student at Northeastern University." The LinkedIn URL and the email address, which contain "tsan-yu" and "tsan.yu", are unchanged.
- AC-126: In the built HTML of every route, including /slideshow, no phone number appears: no `tel:` link, and neither "206-677-7544" nor "2066777544" nor any other phone number in text, links or meta tags. AC-126 does not cover the contents of the CV PDF served at /Leon_cv.pdf, which lists Leon's phone number (see section 6, Resume Hosting). (For MOD-009, the /skills route.)
