# Project Detail: TabVault Status

## Engineering Progress

*(No entries yet.)*

## QA Results

**QA Agent:** qa-mod-project-tabvault
**Workflow:** functional-test (first-time verification)
**Date:** 2026-06-29
**Spec revision:** PRD 1.3 (spec.md last synced 2026-06-29)

### Automated Test Suite

No automated test suite defined for this project (static Next.js site). Test command per production.md: `(none — static site, no automated test suite defined)`. Automated suite result: N/A. All verification is manual via source code inspection.

### Manual Verification — AC-by-AC

**AC-053: H1 "TabVault"**
PASS. `page.tsx` line 49 renders `{project.title}` inside an `<h1>`. The tabvault record in `projects-data.ts` has `title: "TabVault"`. The H1 will render "TabVault".

**AC-054: atAGlance line — muted style below H1**
PASS. `page.tsx` line 52 renders `{project.atAGlance}` in a `<p>` with `text-sm text-[var(--text-muted)]` directly below the H1. The tabvault record has `atAGlance: "Orchestrator + reviewer · 3 clients (Chrome MV3, React PWA, Spring Boot API) · Built by my multi-agent system · Live on AWS ECS Fargate"` which matches the spec exactly.

**AC-055: 8 tag chips (exact labels per spec)**
FAIL. Input: tabvault `tags` array in `projects-data.ts`. Expected per spec: 8 chips — "Java 21 / Spring Boot", "React / TypeScript PWA", "Chrome Extension (MV3)", "PostgreSQL", "Redis", "Quartz", "Claude API", "AWS ECS Fargate". Actual: 11 chips — "Java 21", "Spring Boot 3.3", "React", "TypeScript", "PWA", "Chrome Extension MV3", "PostgreSQL", "Redis", "Quartz", "Claude API", "AWS ECS Fargate".

Specific mismatches:
- "Java 21 / Spring Boot" (1 chip) split into "Java 21" and "Spring Boot 3.3" (2 chips). Version suffix "3.3" also deviates from spec.
- "React / TypeScript PWA" (1 chip) split into "React", "TypeScript", "PWA" (3 chips).
- "Chrome Extension (MV3)" rendered as "Chrome Extension MV3" — parentheses missing.
- Total chip count: 11 instead of 8.

Routing: Implementation bug — send to Engineer.

**AC-056: Two external links — exact labels, hrefs, target, rel**
PASS. `projects-data.ts` tabvault links: `{ label: "Live: tab-vault.com", href: "https://tab-vault.com" }` and `{ label: "GitHub: tab-management", href: "https://github.com/LeonWu813/tab-management" }`. Labels match spec exactly. `page.tsx` renders them as plain `<a>` tags with `target="_blank" rel="noopener noreferrer"`. No ↗ icon present in the label strings or template. Both hrefs match spec exactly.

**AC-057: Description pull-quote with border-l-2 accent styling**
PASS. `page.tsx` line 85 renders description in a `<p>` with `border-l-2 border-[var(--accent)] pl-4`. The `border-l-2` and accent color border match the spec requirement. The tabvault description text matches the spec verbatim: "A production full-stack tab manager spanning a Chrome extension, a React PWA, and a Spring Boot backend, with an AI content-analysis pipeline. I produced it by running my own multi-agent development system, reviewing and approving every step."

**AC-058: 8 sections in exact order with exact headings**
FAIL. Input: tabvault `sections` array in `projects-data.ts`. Expected per spec (8 sections in order): "The problem", "My role", "How it works end to end", "Architecture", "Key engineering decisions", "Challenges and how I resolved them", "Impact", "What I learned and what I would improve". Actual (7 sections): "The problem", "My role", "How it works, end to end", "Key engineering decisions", "Challenges and how I resolved them", "Impact", "What I learned, and what I would improve".

Specific mismatches:
1. Section 3 heading: actual "How it works, end to end" — spec requires "How it works end to end" (comma present in data, absent in spec).
2. Section 4 "Architecture" is entirely missing from the data. The implementation jumps from "My role" directly to "Key engineering decisions", skipping "Architecture" entirely. Only 7 sections are present; spec requires 8.
3. Section 8 heading: actual "What I learned, and what I would improve" — spec requires "What I learned and what I would improve" (comma after "learned" present in data, absent in spec).

Routing: Implementation bug — send to Engineer.

**AC-059: InlineBold helper renders **bold** as `<strong>`**
PASS. `page.tsx` lines 25-34 define `InlineBold` which splits text on `/\*\*(.+?)\*\*/g` and renders odd-indexed parts as `<strong>`. The data contains paragraphs with `**...**` syntax (e.g., "**Scheduled jobs that survive ephemeral infrastructure.**"). The helper is applied to every paragraph via line 99. Implementation is correct.

**AC-060: Content from structured TypeScript data — no fs.readFileSync**
PASS. `page.tsx` has no import of `fs`, no call to `readFileSync`, and no markdown parsing. Content is read from the `projects` array imported from `@/data/projects-data`. The `ProjectEntry` interface with `sections: ProjectSection[]` is the data model used. No markdown files read at request time.

**AC-061: params typed as Promise<{slug:string}>, awaited in both page and generateMetadata**
PASS. `page.tsx` line 14: `params: Promise<{ slug: string }>` in `generateMetadata`. Line 40: `params: Promise<{ slug: string }>` in `ProjectDetailPage`. Both await at line 16 and line 41 respectively: `const { slug } = await params`.

**AC-062: dynamicParams = false**
PASS. `page.tsx` line 5: `export const dynamicParams = false`. An unknown slug will return 404.

**AC-063: generateStaticParams iterates data array — no hard-coded slug strings**
PASS. `page.tsx` lines 7-9: `return projects.map((p) => ({ slug: p.slug }))`. The function iterates the imported `projects` array. No slug strings are hard-coded in the function body.

**AC-064: metadata title "TabVault — Leon Wu", Open Graph tags, Twitter card tags, canonical URL**
FAIL. `generateMetadata` (lines 11-23) returns only `{ title: \`${project.title} — Leon Wu\`, description: project.description }`. The title "TabVault — Leon Wu" is correct. However, the following required metadata properties are entirely absent:
- `openGraph.title`
- `openGraph.description`
- `openGraph.url`
- `openGraph.type`
- `openGraph.images`
- `twitter.card`
- `twitter.title`
- `twitter.description`
- `twitter.images`
- canonical URL (`alternates.canonical`)

Spec requires all of these. Production.md Shared Conventions confirm: "Every page exports a metadata object (Next.js Metadata API)... Every page includes `description`, `og:title`, `og:description`, `og:image`, `og:url`, `og:type`, `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`, and a canonical URL tag."

Routing: Implementation bug — send to Engineer.

**Server Component (no 'use client'):**
PASS. No `'use client'` directive in `page.tsx`. The page is a Server Component as required.

**No gold-plating check:**
PASS. No features implemented beyond what the spec requires. No extraneous UI elements or logic detected.

**Spec template comments check:**
PASS. `spec.md` contains no HTML template comments (`<!-- ... -->`).

---

### Summary

| AC | Result | Notes |
|----|--------|-------|
| AC-053 | PASS | H1 "TabVault" renders correctly |
| AC-054 | PASS | atAGlance line exact match, muted style |
| AC-055 | FAIL | 11 chips instead of 8; wrong labels (split chips, version suffix, missing parentheses) |
| AC-056 | PASS | Two exact-label links with correct hrefs, target, rel, no ↗ |
| AC-057 | PASS | border-l-2 accent pull-quote renders correct description |
| AC-058 | FAIL | 7 sections instead of 8 ("Architecture" missing); 2 heading commas differ from spec |
| AC-059 | PASS | InlineBold splits on **...** and renders `<strong>` correctly |
| AC-060 | PASS | No fs.readFileSync; structured TypeScript data used |
| AC-061 | PASS | params typed as Promise and awaited in both exports |
| AC-062 | PASS | dynamicParams = false exported |
| AC-063 | PASS | generateStaticParams iterates array, no hard-coded slugs |
| AC-064 | FAIL | Title correct; OG tags, Twitter card tags, canonical URL all missing |

**Overall result: FAIL — 3 ACs failing (AC-055, AC-058, AC-064)**

All failures are implementation bugs. Route to Engineer.
