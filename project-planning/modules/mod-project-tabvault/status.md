# Project Detail: TabVault Status

## Engineering Progress

### spec-update (rev 1.5/1.6, E1 = A2 step 2)
- Created site/data/projects/tabvault.ts (CONV-005): type-only import, one named export `tabvault: ProjectEntry`, copied from the inline record with as-built content (Images section, prefix+label links, featureImage "/tabvault-home.png").
- ACs changed: section headings now "How it works, end to end" and "What I learned, and what I would improve" (PRD heading commas).
- site/data/projects-data.ts not edited; MOD-003 imports the file at cutover.
- Self-check: build pass, lint 0 errors (9 pre-existing warnings), run in site/ (self-check.sh not run, package.json in site/).

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

---

## QA Run 2 — Regression — 2026-06-29

**QA Agent:** qa-mod-project-tabvault
**Workflow:** regression-test (re-verification after bug fix)
**Date:** 2026-06-29
**Spec revision:** PRD 1.3 (spec.md last synced 2026-06-29)
**Re-verifying:** AC-055, AC-058, AC-064 (all three previously failing ACs)

### Automated Test Suite

Exit code 127 — no automated test suite defined for this static Next.js site (test command is a literal placeholder string, same as QA Run 1). Automated suite result: N/A. All verification is manual via source code inspection.

### Re-verification of Previously Failing ACs

**REGRESSION PASS AC-055: tag chips — original failure resolved**

Input: tabvault `tags` array in `projects-data.ts` line 185.
Previous actual: 11 chips with split labels and missing parentheses.
Current actual: `["Java 21 / Spring Boot", "React / TypeScript PWA", "Chrome Extension (MV3)", "PostgreSQL", "Redis", "Quartz", "Claude API", "AWS ECS Fargate"]` — exactly 8 chips, combined labels with slash notation, parentheses around "MV3".
Expected per spec: same 8 chips verbatim.
Result: FIXED. Exact match on all 8 chip labels, count, and parentheses formatting.

**REGRESSION PASS AC-058: 8 sections in exact order — original failure resolved**

Input: tabvault `sections` array in `projects-data.ts` starting at line 194.
Previous actual: 7 sections; "Architecture" missing; spurious commas in headings 3 and 8.
Current actual (8 sections in order):
1. "The problem"
2. "My role"
3. "How it works end to end"
4. "Architecture"
5. "Key engineering decisions"
6. "Challenges and how I resolved them"
7. "Impact"
8. "What I learned and what I would improve"
Expected per spec: same 8 headings in same order, no commas.
Result: FIXED. All 8 sections present, "Architecture" now at position 4, no spurious commas in any heading.

**REGRESSION PASS AC-064: generateMetadata OG, Twitter card, canonical URL — original failure resolved**

Input: `generateMetadata` in `page.tsx` lines 11-36.
Previous actual: returned only `{ title, description }` — all OG, Twitter, and canonical fields absent.
Current actual: returns:
- `title: "${project.title} — Leon Wu"` — correct
- `description: project.description` — correct
- `openGraph.title`, `openGraph.description`, `openGraph.type: "website"`, `openGraph.url`, `openGraph.images` — all present
- `twitter.card: "summary_large_image"`, `twitter.title`, `twitter.description`, `twitter.images` — all present
- `alternates.canonical` — present
Expected per spec: all of the above.
Result: FIXED. All required metadata fields now present. OG url and canonical use placeholder domain `https://your-domain.com/...` which is consistent with the acknowledged AMBIGUITY in spec.md and production.md (domain not yet confirmed; values cannot be finalized until domain is provided by PM).

### Re-verification of Previously Passing ACs

**AC-053: H1 "TabVault"**
PASS (no regression). `page.tsx` renders `{project.title}` in `<h1>`; tabvault record `title: "TabVault"` unchanged.

**AC-054: atAGlance line — muted style below H1**
PASS (no regression). `page.tsx` renders `{project.atAGlance}` with `text-sm text-[var(--text-muted)]`; atAGlance value unchanged and matches spec verbatim.

**AC-056: Two external links — exact labels, hrefs, target, rel**
PASS (no regression). tabvault links array unchanged; `page.tsx` template unchanged; both links render as plain `<a>` with `target="_blank" rel="noopener noreferrer"`, no ↗ icon.

**AC-057: Description pull-quote with border-l-2 accent styling**
PASS (no regression). `page.tsx` pull-quote element unchanged (`border-l-2 border-[var(--accent)] pl-4`); description text unchanged and matches spec verbatim.

**AC-059: InlineBold helper renders **bold** as `<strong>`**
PASS (no regression). `InlineBold` implementation unchanged; tabvault sections still contain `**...**` syntax; helper applied to every paragraph.

**AC-060: Content from structured TypeScript data — no fs.readFileSync**
PASS (no regression). No `fs` import or `readFileSync` call in `page.tsx`; content from `@/data/projects-data` unchanged.

**AC-061: params typed as Promise<{slug:string}>, awaited in both page and generateMetadata**
PASS (no regression). Both `generateMetadata` and `ProjectDetailPage` still declare `params: Promise<{ slug: string }>` and await it. The fix to `generateMetadata` only extended the return value; it did not change the params signature or await pattern.

**AC-062: dynamicParams = false**
PASS (no regression). `export const dynamicParams = false` at line 5 unchanged.

**AC-063: generateStaticParams iterates data array — no hard-coded slug strings**
PASS (no regression). `return projects.map((p) => ({ slug: p.slug }))` unchanged.

**Server Component (no 'use client'):**
PASS (no regression). No `'use client'` directive in `page.tsx`.

**No gold-plating:**
PASS. The fix to `generateMetadata` added exactly the fields required by spec. No features added beyond spec requirements. The `InlineBold` function definition remains unchanged. The page template remains unchanged.

**Spec template comments:**
PASS. `spec.md` contains no HTML template comments.

---

### Summary — QA Run 2

| AC | QA Run 1 | QA Run 2 | Notes |
|----|----------|----------|-------|
| AC-053 | PASS | PASS | No regression |
| AC-054 | PASS | PASS | No regression |
| AC-055 | FAIL | REGRESSION PASS | 8 combined chips, correct labels, parentheses fixed |
| AC-056 | PASS | PASS | No regression |
| AC-057 | PASS | PASS | No regression |
| AC-058 | FAIL | REGRESSION PASS | 8 sections, "Architecture" added, commas removed |
| AC-059 | PASS | PASS | No regression |
| AC-060 | PASS | PASS | No regression |
| AC-061 | PASS | PASS | No regression |
| AC-062 | PASS | PASS | No regression |
| AC-063 | PASS | PASS | No regression |
| AC-064 | FAIL | REGRESSION PASS | OG, Twitter card, canonical all present |

**Overall result: PASS — all 12 ACs pass. No regressions. All 3 previously failing ACs are now fixed.**

---

## QA Run 3 — Regression (PRD 1.5/1.6 record-file cutover) — 2026-11-01

**Workflow:** regression (record file site/data/projects/tabvault.ts created 501fd95; MOD-003 cutover f95eb9d). Spec rev 1.6.
**Evidence:** `npm run build` in site/ passes (/projects/tabvault SSG); `npm run lint` 0 errors, 9 pre-existing warnings; `next start` on :3917, real HTML fetched with curl. No automated test suite (static site). `.claude/skills/verify` not used.

| AC | Result | Evidence |
|----|--------|----------|
| AC-053 | PASS | HTML `<h1>TabVault` |
| AC-054 | PASS | atAGlance text matches verbatim (record file), muted style unchanged |
| AC-055 | PASS | 8 tags in record; labels incl. "Chrome Extension (MV3)" in HTML |
| AC-056 | PASS | HTML: `Live: <a href="https://tab-vault.com" target="_blank" rel="noopener noreferrer">tab-vault.com</a>`; `GitHub: <a href="https://github.com/LeonWu813/tab-management" ...>tab-management</a>`; prefix outside the anchor |
| AC-057 | PASS | `<p ... border-l-2 border-[var(--accent)] pl-4>` description |
| AC-058 | PASS | h2s in order: The problem, My role, How it works, end to end, Images, Architecture, Key engineering decisions, Challenges and how I resolved them, Impact, What I learned, and what I would improve. Images section items = `/tabvault-mobile.jpeg`, `/tabvault-plugin.png` in order, no paragraphs; all other sections have paragraphs. (Spec says "nine" and lists nine headings; matches.) Feature image /tabvault-home.png renders before sections; files exist in site/public. |
| AC-059 | PASS | 8 `<strong>` in HTML (e.g. "Scheduled jobs that survive ephemeral infrastructure.") |
| AC-060 | PASS | Content from site/data/projects/tabvault.ts (type-only import of ProjectEntry, one export `tabvault`); imported in projects-data.ts and in `projects` array; no fs/readFileSync in page.tsx |
| AC-061 | PASS | unchanged page.tsx (awaits params) ; build OK |
| AC-062 | PASS | /projects/nope returns 404 |
| AC-063 | PASS | generateStaticParams maps projects; build lists tabvault |
| AC-064 | PASS | title "TabVault — Leon Wu"; og:title/description/url/type/image, twitter:card/title/description/image, canonical `https://www.leon-wu.com/projects/tabvault` all present |

Other: no 'use client'; no gold-plating; spec has no template comments; CONV-005 shape satisfied. Images alt="" (spec defines no alt for section images; not a failure).

### Integration notes (for Tech Lead)
- og:image / twitter:image render as `http://localhost:3000/og-image.png` in the local build (relative URL resolved against default metadataBase). Not MOD-006 (page-level template, MOD-003/MOD-001); verify metadataBase is set for production deploy.

**Overall: PASS — all 12 ACs. No human sign-off needed.**


### Engineering Progress (spec-update, 2026-11-01)
- Changed ACs: AC-054, AC-056, AC-116, AC-117, AC-127. Record file only: offline wording, live link removed, featureImageAlt and two section alts added. No image file changed.
- lint 0 errors, build pass (run in site/); self-check not run at repo root per instructions.

---

## QA Run 4 - Verify (spec-update c612306, rev 1.10) - 2026-11-01

**Workflow:** verify (first run against the rev 1.10 spec; prior runs were against older revisions). **Evidence:** `npm run build` in site/ passes (13 pages); `next start -p 3947`, real HTML fetched with curl for /, /about, /contact, /experience, /skills, /projects/{siteplus,multi-agent-system,projectday,tabvault}; server stopped. No automated suite (static site); project `verify` skill not present. Lint not re-run by QA.

| AC | Result | Evidence |
|----|--------|----------|
| AC-053 | PASS | `<h1>TabVault</h1>` |
| AC-054 | PASS | muted `<p>` reads "...Built by my multi-agent system · Deployed to AWS ECS Fargate (now offline)" exactly |
| AC-055 | PASS | 8 tags in record, exact labels |
| AC-056 | PASS | one external link: `GitHub: <a href="https://github.com/LeonWu813/tab-management" target="_blank" rel="noopener noreferrer">tab-management</a>`; prefix outside the anchor |
| AC-057 | PASS | description in `border-l-2 border-[var(--accent)]` pull-quote (unchanged, verbatim text in record) |
| AC-058 | PASS | h2s in order: The problem, My role, How it works, end to end, Images, Architecture, Key engineering decisions, Challenges and how I resolved them, Impact, What I learned, and what I would improve. Images section = `/tabvault-mobile.jpeg`, `/tabvault-plugin.png`, no paragraphs; other sections have paragraphs |
| AC-059 | PASS | `<strong>` rendered from `**...**` (Key engineering decisions, Challenges) |
| AC-060 | PASS | content from site/data/projects/tabvault.ts; no fs/markdown at request time |
| AC-061 | PASS | page.tsx unchanged since Run 3; build OK |
| AC-062 | PASS | /projects/nope 404 |
| AC-063 | PASS | build lists /projects/tabvault via generateStaticParams |
| AC-064 | PASS | canonical and og:url `https://www.leon-wu.com/projects/tabvault`; title/OG/Twitter present (unchanged) |
| AC-116 | PASS | atAGlance exact; exactly one external link in the page body; "The problem" and "Impact" paragraphs match asset/content/case-study-tabvault-detailed.md word for word (checked by normalized substring comparison) and say deployed and offline now |
| AC-117 | PASS (slideshow not yet checkable) | grep of all fetched routes: no "tab-vault.com", no link to it, no "is/now live", "live on AWS", or "Live:" copy. /slideshow returns 404 (MOD-012 not built): that part is not yet checkable. CV PDF excluded per spec |
| AC-127 | PASS | tabvault page: feature image and both Images-section images carry exactly the spec alt text, no empty project-image alt; the overlay copy of each image has the same alt and the overlay dialog has `aria-label` equal to that alt (all three). `<img src="/head.png" alt="Leon Wu">` is the shell avatar, not a project image |
| AC-126 | PASS (slideshow not yet checkable) | no `tel:`, no "206-677-7544", "2066777544" or other phone pattern in any fetched route. /slideshow 404: not yet checkable |

### Requirement check: CONV-003 word for word (spec Requirements, not an AC)
FAIL (requirement, not covered by an AC other than AC-116). Section headings match the source exactly (Images is spec-added, not in source). Paragraph text deviates from asset/content/case-study-tabvault-detailed.md in these places outside "The problem"/"Impact":
- Architecture: source has 5 paragraphs (intro, client layer, backend, data layer, "One detail"); page has 3: intro and client layer are merged, backend and data layer are merged, and the data-layer sentences "Two design patterns in the data layer carry a lot of weight. First, ... Second, ..." are reworded into one sentence.
- Architecture: "One detail I insisted on" in page vs "One detail I am glad I insisted on" in source.
- Challenges: source intro paragraph and four paragraphs omitted (missing dependency, wrong status code on bad credentials, ISP/new domain, plus the intro and each "The lesson..." sentence on the health-check item); "secrets-exposure" paragraph omits ", and I fixed the order so the ignore file is created first".
- What I learned: 1st paragraph uses 'done' (single quotes) vs "done" in source and omits the last sentence ("And because I reviewed and approved every step, I can speak to every decision in this build."); 2nd paragraph replaces ", with metrics" and "observability, with" commas by em dashes ("observability — metrics and tracing ... pipeline so a slow ...").
Classification: implementation bug against the spec's word-for-word requirement (first report for this requirement). Caveat for the human: the page body was accepted in earlier runs while condensed, and the spec only names AC-116 for the two sections it checks. If condensing is intended, that is a spec/PRD wording decision for PM, not an engineering fix.

### Other checks
No 'use client'; no gold-plating; spec has no template comments; CONV-005 record shape satisfied; no image file changed. MOD-003 overlay and 640 px cap are verified by MOD-003 QA (17e339f); here only the markup (cap class `max-h-[640px]` on the two Images-section images) was seen.

### Integration notes (for Tech Lead)
- metadataBase not set: build warns and og:image resolves to http://localhost:3000 locally (already noted in Run 3; not MOD-006).
- /slideshow does not exist; re-run AC-117 and AC-126 for the slideshow route after MOD-012.

### Human script
None required for this module (all ACs are verifiable in HTML). Optional glance: on /projects/tabvault click each of the three images, confirm the overlay opens and Esc closes it (feel is owned by MOD-003 sign-off).

### Open items
- [ ] CONV-003 bugs-found - paragraphs outside "The problem" and "Impact" not word for word with the source (details above) (2026-11-01)
- [ ] AC-117 / AC-126 - /slideshow part not yet checkable until MOD-012 exists (2026-11-01)
