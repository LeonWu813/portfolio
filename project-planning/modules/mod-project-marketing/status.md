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
