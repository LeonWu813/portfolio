# Project Detail: Marketing Analytics Status

## Engineering Progress

*(No entries yet.)*

## QA Results

### MOD-004 — First-time verification — 2026-06-29

**Workflow:** functional-test
**Automated test suite:** No test suite defined (static site). Script exited with code 127 — expected; production.md confirms "(none — static site, no automated test suite defined)". Manual verification performed for all ACs.

**Key files inspected:**
- `site/app/projects/[slug]/page.tsx`
- `site/data/projects-data.ts` (siteplus record)

---

**AC-029:** PASS
Route `/projects/siteplus` renders `{project.title}` as `<h1>`. Data record has `title: "SitePlus+"`. H1 content is correct.

**AC-030:** PASS
atAGlance line "Sole engineer · Full-stack + AWS infra · Live in production · Cut recurring analytics work ~60%" is present in the data record and rendered in a `<p>` with `text-[var(--text-muted)]` class (muted style) below the H1.

**AC-031:** FAIL — Route to Engineer
Input: `projects-data.ts` siteplus `tags` array.
Actual: `["Java 21", "Spring Boot 3.4", "React", "TypeScript", "Redux Toolkit", "PostgreSQL", "Redis", "Docker", "AWS", "GitHub Actions", "Cloudflare"]` — 11 tags.
Expected per spec: `["Full-Stack", "Java/Spring Boot", "React", "TypeScript", "Redux Toolkit", "PostgreSQL", "Redis", "Docker", "GitHub Actions", "AWS"]` — 10 tags.
Discrepancies:
1. "Full-Stack" tag is absent from data; replaced by "Java 21" and "Spring Boot 3.4" as separate entries.
2. "Java/Spring Boot" (single tag per spec) is split into "Java 21" and "Spring Boot 3.4" (two separate tags).
3. "Cloudflare" tag is present in data but not in spec — this is a gold-plating addition.
4. The ordering of "AWS" and "GitHub Actions" is swapped (AWS before GitHub Actions in data, spec says GitHub Actions before AWS).

**AC-032:** FAIL — Route to Engineer
Input: `projects-data.ts` siteplus `links` array.
Actual: link label for first link is `"Live demo: siteplusplus.space"`.
Expected per spec: label must be `"Live demo"` (plain label, no URL embedded in the label text).
Note: The href `https://www.siteplusplus.space` is correct. The second link label "GitHub: marketing-analytics" matches the spec. Both links have correct `target="_blank" rel="noopener noreferrer"` attributes in `page.tsx`. No ↗ icon is present — that part is correct. Only the first link label is wrong.

**AC-033:** PASS
Description pull-quote is rendered with `border-l-2 border-[var(--accent)]` and `pl-4` in `page.tsx` (line 85). The description text matches the spec exactly.

**AC-034:** FAIL — Route to Engineer
Input: `projects-data.ts` siteplus `sections` array.
Actual: 6 sections present — "The problem", "My role", "How it works, end to end", "Key engineering decisions", "Impact", "What I learned, and what I would improve".
Expected per spec: 8 sections in this order — "The problem", "My role", "How it works end to end", "Architecture", "Key engineering decisions", "Challenges and how I resolved them", "Impact", "What I learned and what I would improve".
Discrepancies:
1. "Architecture" section is entirely absent from the siteplus data.
2. "Challenges and how I resolved them" section is entirely absent from the siteplus data.
3. Section heading "How it works, end to end" has a comma not present in the spec heading "How it works end to end".
4. Section heading "What I learned, and what I would improve" has a comma not present in the spec heading "What I learned and what I would improve".

**AC-035:** PASS
The `InlineBold` helper in `page.tsx` (line 25–34) splits paragraph text on `\*\*(.+?)\*\*` and renders odd-indexed parts as `<strong>`. The siteplus "Key engineering decisions" section paragraphs contain `**bold text**` syntax. The helper is present and correctly implemented.

**AC-036:** PASS
`page.tsx` imports from `@/data/projects-data` (line 3). No `fs.readFileSync`, `marked`, or filesystem reads present. Content is served entirely from structured TypeScript data.

**AC-037:** PASS
Both `generateMetadata` (line 11–23) and `ProjectDetailPage` (line 36–108) declare `params` as `Promise<{ slug: string }>` and await it: `const { slug } = await params`. Complies with shared convention.

**AC-038:** PASS
`export const dynamicParams = false` is present at line 5 of `page.tsx`.

**AC-039:** PASS
`generateStaticParams` at line 7–9 returns `projects.map((p) => ({ slug: p.slug }))`. No hard-coded slug strings.

**AC-040:** FAIL — Route to Engineer
Input: `generateMetadata` function in `page.tsx`.
Actual: Returns only `{ title: "${project.title} — Leon Wu", description: project.description }`. No `openGraph`, `twitter`, or `canonical` fields.
Expected per spec: metadata object must include Open Graph tags (at minimum `og:title`, `og:description`, `og:type`) and Twitter card tags (`twitter:card`, `twitter:title`, `twitter:description`). Production.md shared conventions also require `og:url`, `og:image`, `twitter:image`, and a canonical URL tag.
Note: The og:url and canonical URL are acknowledged as ambiguous (domain not yet confirmed — flagged in spec and production.md). However, the remaining OG and Twitter fields (title, description, type, card) do not depend on the domain and must still be present.

---

**Summary**

| AC | Result |
|----|--------|
| AC-029 | PASS |
| AC-030 | PASS |
| AC-031 | FAIL — tag list incorrect (wrong tag names, extra tag, missing "Full-Stack" tag) |
| AC-032 | FAIL — "Live demo" link label has URL appended ("Live demo: siteplusplus.space" instead of "Live demo") |
| AC-033 | PASS |
| AC-034 | FAIL — 2 of 8 required sections absent ("Architecture", "Challenges and how I resolved them"); 2 heading strings have spurious commas |
| AC-035 | PASS |
| AC-036 | PASS |
| AC-037 | PASS |
| AC-038 | PASS |
| AC-039 | PASS |
| AC-040 | FAIL — Open Graph and Twitter card tags absent from generateMetadata |

**Overall result: FAIL — 4 ACs failing (AC-031, AC-032, AC-034, AC-040). All failures are implementation bugs. Route all four to Engineer.**

---

### MOD-004 — Regression test — 2026-06-29

**Workflow:** regression-test
**Automated test suite:** No test suite defined (static site). Script exited with code 127 — expected; same as first-time run.
**Re-verifying:** AC-031, AC-032, AC-034, AC-040 (previously failing). Re-running all previously passing ACs for regression check.

**Key files inspected:**
- `site/app/projects/[slug]/page.tsx`
- `site/data/projects-data.ts` (siteplus record)

---

**AC-031 — REGRESSION PASS**
Input: `projects-data.ts` siteplus `tags` array.
Actual: `["Full-Stack", "Java/Spring Boot", "React", "TypeScript", "Redux Toolkit", "PostgreSQL", "Redis", "Docker", "GitHub Actions", "AWS"]` — 10 tags.
Expected per spec: `["Full-Stack", "Java/Spring Boot", "React", "TypeScript", "Redux Toolkit", "PostgreSQL", "Redis", "Docker", "GitHub Actions", "AWS"]` — 10 tags.
All discrepancies from first run resolved: "Full-Stack" is present, "Java/Spring Boot" is a single tag, "Cloudflare" is absent, and ordering matches spec exactly.

**AC-032 — REGRESSION PASS**
Input: `projects-data.ts` siteplus `links` array, first entry.
Actual: `{ label: "Live demo", href: "https://www.siteplusplus.space" }`.
Expected per spec: label `"Live demo"`, href `https://www.siteplusplus.space`.
First link label is now exactly "Live demo" with no appended URL text. Second link label "GitHub: marketing-analytics" and href unchanged — still correct. Both links retain `target="_blank" rel="noopener noreferrer"` in `page.tsx`.

**AC-034 — REGRESSION PASS**
Input: `projects-data.ts` siteplus `sections` array.
Actual: 8 sections in order — "The problem", "My role", "How it works end to end", "Architecture", "Key engineering decisions", "Challenges and how I resolved them", "Impact", "What I learned and what I would improve".
Expected per spec: same 8 sections in same order.
All discrepancies from first run resolved: "Architecture" section is present, "Challenges and how I resolved them" section is present, no spurious commas in any heading.

**AC-040 — REGRESSION PASS**
Input: `generateMetadata` function in `page.tsx`.
Actual: Returns `{ title, description, openGraph: { title, description, type: "website", url, images }, twitter: { card: "summary_large_image", title, description, images }, alternates: { canonical } }`.
Expected per spec: metadata object with Open Graph tags (title, description, type, url, images) and Twitter card tags (card, title, description, images) and alternates.canonical.
All required fields are now present. Placeholder domain (`https://your-domain.com`) is used for `url` and `canonical` — this is acceptable per the AMBIGUITY note in the spec (domain not yet confirmed, non-blocking for current phase).

---

**Re-verification of previously passing ACs (regression check):**

**AC-029:** PASS — `{project.title}` rendered as `<h1>`; data title is "SitePlus+". No change.

**AC-030:** PASS — atAGlance rendered in `<p>` with `text-[var(--text-muted)]`; data value matches spec. No change.

**AC-033:** PASS — Description pull-quote at `page.tsx` line 99 with `border-l-2 border-[var(--accent)] pl-4`. No change.

**AC-035:** PASS — InlineBold helper at lines 39–48 of `page.tsx` unchanged; splits on `\*\*(.+?)\*\*`, renders odd-indexed parts as `<strong>`. No change.

**AC-036:** PASS — Content still served from `@/data/projects-data`; no `fs.readFileSync` or markdown parsing. No change.

**AC-037:** PASS — `params: Promise<{ slug: string }>` awaited in both `generateMetadata` and `ProjectDetailPage`. No change.

**AC-038:** PASS — `export const dynamicParams = false` present at line 5. No change.

**AC-039:** PASS — `generateStaticParams` maps over `projects` array with no hard-coded slugs. No change.

---

**Summary**

| AC | First Run | Regression Run |
|----|-----------|----------------|
| AC-029 | PASS | PASS |
| AC-030 | PASS | PASS |
| AC-031 | FAIL | REGRESSION PASS |
| AC-032 | FAIL | REGRESSION PASS |
| AC-033 | PASS | PASS |
| AC-034 | FAIL | REGRESSION PASS |
| AC-035 | PASS | PASS |
| AC-036 | PASS | PASS |
| AC-037 | PASS | PASS |
| AC-038 | PASS | PASS |
| AC-039 | PASS | PASS |
| AC-040 | FAIL | REGRESSION PASS |

**Overall result: PASS — All 12 ACs pass. 4 previously failing ACs now fixed. No regressions introduced. No new failures found.**
