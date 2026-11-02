# Project Detail: Multi-Agent System Status

## Engineering Progress

*(No entries yet.)*

### Engineer run: spec-update (rev 1.10/1.11), 2026-11-01
- Changed ACs: AC-042, AC-044, AC-092, AC-117 (record file only). atAGlance now "Shipped 3 products: TabVault, ProjectDay and this site"; description says three products incl. this portfolio site; the tab-vault.com link removed (two links remain); My role "three real products"; Impact paragraph 1 "three products ... deployed to production on AWS and now offline ... The third is this portfolio site. In each, ..." per source file.
- Feature image path, alt, caption unchanged; the overlay is rendered by MOD-003 (AC-091/AC-127 data side unchanged).
- Verified: every long string matches asset/content/case-study-multi-agent-detailed.md (script, only the alt differs by design); no "tab-vault"/"live" in record. Build PASS, eslint on record PASS (run in site/).

### Engineer run: spec-update (E1 = A2 step 2), 2026-11-01
- Created site/data/projects/multi-agent-system.ts (CONV-005: type-only import, one named export `multiAgentSystem: ProjectEntry`) with rev 1.6 content: atAGlance, tags incl. Python, description, 3 prefix+label links, featureImage /multi-agent-horizontal.png with alt and caption, 8 sections from case-study-multi-agent-detailed.md. Touches ACs 041-048, 091, 092 (data side).
- Copied asset/diagrams/multi-agent-horizontal.png to site/public/multi-agent-horizontal.png. site/public/multi-agent.png kept until cutover.
- projects-data.ts not edited; record file is not imported yet (MOD-003 cutover).
- Self-check: git scope PASS. Build PASS and lint PASS (0 errors, 9 pre-existing warnings), run manually in site/ because self-check.sh runs from repo root and fails with exit 254 / "none" test command (script/layout mismatch, not a code failure).
- Judgment items: no hardcoded config, no new deps, no comments needed, content strings match source verbatim (generated from the md).

## QA Results

**QA Agent:** qa-mod-project-multi-agent
**Workflow:** functional-test (first-time verification)
**Date:** 2026-06-29
**Verdict:** FAIL — 2 implementation bugs found (AC-046, AC-052)

---

### Automated Test Suite

No automated test suite defined for this project (production.md: "Test: (none — static site, no automated test suite defined)"). Exit code 127 from run-qa.sh is expected. Proceeding with manual verification only.

---

### Manual Verification — AC-by-AC Results

**AC-041:** PASS
H1 renders "Multi-Agent Software Development System" — `project.title` in `projects-data.ts` is "Multi-Agent Software Development System"; page.tsx renders it as `<h1>`.

**AC-042:** PASS
atAGlance line renders "Sole architect · 6 specialized agents · Human-approved at every handoff · Shipped TabVault (live)" in muted style — `project.atAGlance` matches spec exactly; styled `text-[var(--text-muted)]` below the H1.

**AC-043:** PASS
Tag chips render for all five tags — `tags: ["Claude Code", "Bash", "Git", "Multi-agent", "Systems Design"]` exactly matches spec; each rendered as a `<span>` chip.

**AC-044:** PASS
Three external links render as plain `<a>` tags with correct hrefs and `target="_blank" rel="noopener noreferrer"`:
- "Built by the system: tab-vault.com" → https://tab-vault.com ✓
- "System repo" → https://github.com/LeonWu813/multi-agent-software-development-system ✓
- "TabVault repo" → https://github.com/LeonWu813/tab-management ✓
No ↗ icon in the link template. ✓

**AC-045:** PASS
Description pull-quote renders with `border-l-2 border-[var(--accent)] pl-4` class on the paragraph; text matches spec exactly. ✓

**AC-046:** FAIL — Route to Engineer
Input: GET /projects/multi-agent-system
Actual sections in `projects-data.ts` for slug "multi-agent-system" (7 sections):
  1. "The problem"
  2. "My role"
  3. "How it works, end to end"
  4. "Design principles"
  5. "The six agents"
  6. "Impact"
  7. "What I learned, and what I would improve"

Expected sections per spec (8 sections, exact headings):
  1. "The problem"
  2. "My role"
  3. "How it works end to end"
  4. "Design principles"
  5. "The six agents"
  6. "Decisions worth calling out"
  7. "Impact"
  8. "What I learned and what I would improve"

Three distinct failures:
  (a) Section 3 heading: Actual="How it works, end to end" — Expected="How it works end to end" (spec has no comma)
  (b) Section "Decisions worth calling out" is entirely absent from the data. The data jumps from "The six agents" directly to "Impact", skipping this section entirely.
  (c) Section 8 heading: Actual="What I learned, and what I would improve" — Expected="What I learned and what I would improve" (spec has no comma after "learned")
  (d) Total section count: Actual=7 — Expected=8 (missing "Decisions worth calling out")

**AC-047:** PASS
InlineBold helper correctly splits on `/\*\*(.+?)\*\*/g` and renders odd-indexed parts as `<strong>` elements. Verified against paragraph text in "Design principles" section which contains `**Single responsibility.**`, `**Least-privilege information boundaries.**`, etc.

**AC-048:** PASS
No `fs.readFileSync`, `marked`, or any filesystem import present in `site/app/projects/[slug]/page.tsx`. Content imported from `@/data/projects-data` as structured TypeScript. ✓

**AC-049:** PASS
`params` typed as `Promise<{ slug: string }>` and awaited with `const { slug } = await params` in both the page component (line 41) and `generateMetadata` (line 16). ✓

**AC-050:** PASS
`export const dynamicParams = false` present at line 5 of `page.tsx`. ✓

**AC-051:** PASS
`generateStaticParams` returns `projects.map((p) => ({ slug: p.slug }))` — no hard-coded slug strings. ✓

**AC-052:** FAIL — Route to Engineer
Input: GET /projects/multi-agent-system (generateMetadata called with slug "multi-agent-system")
Actual: `generateMetadata` returns `{ title: "Multi-Agent Software Development System — Leon Wu", description: project.description }` only — no `openGraph`, no `twitter`, no `alternates.canonical`.
Expected per spec: metadata object must include Open Graph tags (`og:title`, `og:description`, `og:image`, `og:url`, `og:type`), Twitter card tags (`twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`), and a canonical URL tag.

Note: The spec includes an AMBIGUITY marker on domain/og:url — canonical URL and og:url values cannot be fully populated until the domain is confirmed. However, the Open Graph and Twitter card fields themselves (title, description, type, card) do not require a domain and must still be present. The absence of openGraph and twitter blocks entirely (not just the URL fields) is an implementation bug, not a domain-ambiguity issue.

---

### Integration Checks

- Server Component: PASS — no `'use client'` directive in `page.tsx`. ✓
- No gold-plating: PASS — no features beyond spec present in the route file.
- Shared convention — params as Promise: PASS (AC-049 above). ✓
- Shared convention — external links with target/rel: PASS (AC-044 above). ✓
- Shared convention — generateStaticParams from data array: PASS (AC-051 above). ✓
- Shared convention — no fs.readFileSync: PASS (AC-048 above). ✓
- HTML template comments in spec.md: none found. ✓

---

### Failure Routing Summary

| AC | Failure | Route |
|----|---------|-------|
| AC-046 | "Decisions worth calling out" section missing; 3 heading strings differ from spec (comma discrepancies + missing section) | Engineer |
| AC-052 | openGraph, twitter, and canonical metadata blocks absent from generateMetadata return | Engineer |

---

## QA Run 2 — Regression — 2026-06-29

**QA Agent:** qa-mod-project-multi-agent
**Workflow:** regression-test (re-verification after Engineer bug fix)
**Date:** 2026-06-29
**Re-verifying:** AC-046 (sections), AC-052 (metadata OG/twitter/canonical)
**Verdict:** PASS — both previously failing ACs now fixed; no regressions found in passing ACs

---

### Automated Test Suite

No automated test suite defined (production.md: "Test: (none — static site, no automated test suite defined)"). Exit code 127 from run-qa.sh expected and observed. Manual verification only.

---

### Previously Failing ACs — Regression Verification

**AC-046:** REGRESSION PASS
Input: multi-agent-system entry in `site/data/projects-data.ts`
Previously: 7 sections; commas in section 3 and section 8 headings; "Decisions worth calling out" entirely absent.
Now: 8 sections in exact spec order with exact spec headings (no commas):
  1. "The problem" ✓
  2. "My role" ✓
  3. "How it works end to end" ✓ (comma removed)
  4. "Design principles" ✓
  5. "The six agents" ✓
  6. "Decisions worth calling out" ✓ (section added with 5 paragraphs)
  7. "Impact" ✓
  8. "What I learned and what I would improve" ✓ (comma removed)
All three sub-failures resolved: correct section count (8), correct heading strings, "Decisions worth calling out" present.

**AC-052:** REGRESSION PASS
Input: generateMetadata called with slug "multi-agent-system" in `site/app/projects/[slug]/page.tsx`
Previously: returned only `{ title, description }` — no openGraph, no twitter, no canonical.
Now: returns full metadata object:
  - title: `${project.title} — Leon Wu` ✓
  - description: project.description ✓
  - openGraph: { title, description, type: "website", url: placeholder domain + slug, images: [{ url: "/og-image.png", width: 1200, height: 630 }] } ✓
  - twitter: { card: "summary_large_image", title, description, images: ["/og-image.png"] } ✓
  - alternates: { canonical: placeholder domain + slug } ✓
Note: og:url and canonical use placeholder domain "your-domain.com" — consistent with the spec AMBIGUITY marker that domain cannot be populated until confirmed. All required fields present.

---

### Previously Passing ACs — Regression Re-verification

**AC-041:** PASS
`project.title` remains "Multi-Agent Software Development System"; page renders it as `<h1>`. Unchanged.

**AC-042:** PASS
`project.atAGlance` = "Sole architect · 6 specialized agents · Human-approved at every handoff · Shipped TabVault (live)"; styled `text-[var(--text-muted)]` below H1. Unchanged.

**AC-043:** PASS
`tags: ["Claude Code", "Bash", "Git", "Multi-agent", "Systems Design"]` — 5 tags, exact spec match. Unchanged.

**AC-044:** PASS
Three links with correct hrefs and `target="_blank" rel="noopener noreferrer"` — no ↗ icon. Unchanged.
  - "Built by the system: tab-vault.com" → https://tab-vault.com ✓
  - "System repo" → https://github.com/LeonWu813/multi-agent-software-development-system ✓
  - "TabVault repo" → https://github.com/LeonWu813/tab-management ✓

**AC-045:** PASS
Description pull-quote: `border-l-2 border-[var(--accent)] pl-4` class confirmed in page.tsx; description text matches spec. Unchanged.

**AC-047:** PASS
InlineBold helper splits on `/\*\*(.+?)\*\*/g`; odd-indexed parts rendered as `<strong>`. "Decisions worth calling out" section newly added by fix contains bold spans (Doc-Sync, synchronization, handoff hook, QA honesty, self-improvement); InlineBold correctly handles them. No regression; bold rendering intact and exercised by new section content.

**AC-048:** PASS
No `fs.readFileSync`, `marked`, or filesystem import in page.tsx. Import remains `from "@/data/projects-data"`. Unchanged.

**AC-049:** PASS
`params: Promise<{ slug: string }>` in both generateMetadata and page component; `const { slug } = await params` appears twice. Unchanged.

**AC-050:** PASS
`export const dynamicParams = false` at line 5 of page.tsx. Unchanged.

**AC-051:** PASS
`generateStaticParams` returns `projects.map((p) => ({ slug: p.slug }))` — no hard-coded slug strings. Unchanged.

---

### Integration Checks — Regression

- Server Component: PASS — no `'use client'` in page.tsx. ✓
- No gold-plating: PASS — only spec-required functionality present. ✓
- Shared convention — params as Promise: PASS. ✓
- Shared convention — external links target/rel: PASS. ✓
- Shared convention — generateStaticParams from data array: PASS. ✓
- Shared convention — no fs.readFileSync: PASS. ✓

---

### Regression Summary

| AC | Run 1 Result | Run 2 Result |
|----|-------------|-------------|
| AC-041 | PASS | PASS — no regression |
| AC-042 | PASS | PASS — no regression |
| AC-043 | PASS | PASS — no regression |
| AC-044 | PASS | PASS — no regression |
| AC-045 | PASS | PASS — no regression |
| AC-046 | FAIL | REGRESSION PASS — fixed |
| AC-047 | PASS | PASS — no regression |
| AC-048 | PASS | PASS — no regression |
| AC-049 | PASS | PASS — no regression |
| AC-050 | PASS | PASS — no regression |
| AC-051 | PASS | PASS — no regression |
| AC-052 | FAIL | REGRESSION PASS — fixed |

All 12 ACs pass. Module verified PASS.

### Engineer run: spec-update, E1 = A2 step 4 (delete legacy image)
- grep for "multi-agent.png" in site (excl. node_modules, .next): no references.
- Deleted site/public/multi-agent.png (git rm). featureImage is /multi-agent-horizontal.png.
- Build (site/): pass, /projects/multi-agent-system prerendered. Lint (site/): 0 errors, 9 pre-existing warnings.
- No ACs changed.

## QA Run 3 — Regression after PRD rev 1.5/1.6 — 2026-11-01

**Workflow:** regression (record-file cutover + horizontal feature image; chosen because prior QA Results exist and Engineer spec-update entries are newer)
**Verdict:** all ACs PASS except AC-091 mobile (375px) part, which needs a human check. Result: needs-signoff.

Evidence: `npm run build` in site/ passes (/projects/multi-agent-system prerendered); `npm run lint` 0 errors, 9 pre-existing warnings. Real HTML fetched from `next start` on a local port; headless Chrome screenshots at 1280 and 375.

- AC-041 PASS: H1 in served HTML.
- AC-042 PASS: atAGlance (with "+ coordinator" and ProjectDay clause) is in a muted `<p>` under H1.
- AC-043 PASS: 6 chips: Claude Code, Bash, Python, Git, Multi-agent, Systems Design.
- AC-044 PASS: three `<p>` with prefix text then `<a>` containing only the label; hrefs correct; target=_blank rel="noopener noreferrer".
- AC-045 PASS: description in `border-l-2 border-[var(--accent)]` paragraph.
- AC-046 PASS: 8 h2 in spec order. Headings carry commas ("How it works, end to end"; "What I learned, and what I would improve"), matching spec Sections list and source file.
- AC-047 PASS: `<strong>` rendered in Design principles and Decisions sections.
- AC-048 PASS: page.tsx has no fs/marked; data from record file via projects-data.ts import.
- AC-049/050/051 PASS: unchanged page.tsx (params awaited, dynamicParams=false, generateStaticParams maps projects). /projects/nope returns 404.
- AC-052 PASS: title, og:title/description/url/type/image, twitter card tags, canonical https://www.leon-wu.com/projects/multi-agent-system all present in HTML.
- AC-092 PASS: script compared the 31 headings and paragraph blocks on the page against the source md (bold markers stripped): 0 differences, no extras; "Feature image:" editor line absent; caption matches.
- AC-091 PARTIAL: PASS for image src /multi-agent-horizontal.png (3080x1560, served 200), exact alt text, caption directly below in a figure, and the 1280px screenshot shows the full diagram uncropped, full column width. Old /multi-agent.png returns 404 (deleted, no references). The 375px check is NOT concluded: headless Chrome screenshot at 375 shows content clipped on the right, which looks like a headless minimum-viewport artifact (not conclusive). CSS is `w-full` with no fixed height or object-fit, so no crop is expected, but a human must confirm.

### Human test script (AC-091 at 375px)
1. Run `npm run build && npx next start` in site/, open /projects/multi-agent-system in a browser.
2. Use device toolbar at 375px wide (or a phone).
3. Verify: the whole diagram is visible edge to edge within the column (no clipped edges, no horizontal page scroll), the caption is directly below it, the alt text is present (inspect the img).
4. Reply with PASS or the observed problem.

### Integration notes (for Tech Lead)
- og:image and twitter:image resolve to http://localhost:3000/og-image.png in built HTML (no metadataBase set); shared metadata, outside this module's files (MOD-001/003 area).

### Open items
- [x] AC-091 needs-signoff — 375px visual check — passed 2026-11-01 (human-reported)

### Human UI results (2026-11-01)
Workflow: regression (ui-results continuation; same mode as the needs-signoff stop).
AC-091 (375px): PASS — reported by the human 2026-11-01. Question asked: diagram fully visible, no clipped edges, no sideways scroll, caption right under it. Human's reply, quoted: "The two browser checks need you to actually look at the pages: both check and pass" (the first clause repeats the coordinator's heading; "both check and pass" covers AC-017 and AC-091). Recorded as the human's report, not as QA's own observation. All module ACs now PASS; verdict: PASS.

## QA Run 4 — Regression after spec-update (rev 1.10/1.11) and MOD-003 overlay — 2026-11-01

**Workflow:** regression (prior QA Results exist; Engineer spec-update 7b8d8cb and MOD-003 overlay f66a813 are newer). Dependencies: MOD-003 QA 17e339f (overlay ACs pass, device checks pending); MOD-001 status read (not blocking this module).
**Verdict:** all ACs PASS in the built app, one overlay-interaction item left to the human. Result: needs-signoff.

Evidence: `npm run build` in site/ passes; `next start` on port 3457; served HTML fetched for /, /about, /contact, /experience, /skills, /projects/{multi-agent-system,projectday,siteplus,tabvault}; headless Chrome screenshot at 1280 (feature image full column width, uncropped, caption directly under it, header shows two links with "GitHub: " prefixes). Server stopped afterwards. No project verify skill exists (.claude/skills/verify absent).

- AC-041 PASS: H1 in served HTML.
- AC-042 PASS: muted line reads "...Shipped 3 products: TabVault, ProjectDay and this site".
- AC-043 PASS: 6 chips in order.
- AC-044 PASS: two `<p>` with plain "GitHub: " prefix then `<a>` holding only the label ("System repo", "TabVault repo"); hrefs correct; target=_blank rel="noopener noreferrer"; no third link.
- AC-045 PASS: pull-quote with border-l-2 accent; three-products text.
- AC-046 PASS: 8 h2 in spec order (headings with commas, as in spec Sections list).
- AC-047 PASS: 9 `<strong>` elements rendered.
- AC-048/049/050/051 PASS (page.tsx unchanged from Run 3; /projects/nope returns 404).
- AC-052 PASS: canonical and og:url https://www.leon-wu.com/projects/multi-agent-system.
- AC-092 PASS: script compared every heading and paragraph block on the page to asset/content/case-study-multi-agent-detailed.md (bold markers stripped): the only block not in the source is the sidebar tech string (not page content). "Feature image:" editor line absent. No tab-vault.com link. TabVault described as "now offline".
- AC-091 PASS (structure, desktop): image src /multi-agent-horizontal.png, exact spec alt, `w-full h-auto` (no crop), now inside `button.cursor-zoom-in`; caption in the figcaption directly below; 1280 screenshot confirms. 375px was human-passed in Run 3; layout classes are unchanged by the button wrap, but re-check under the overlay is in the script below.
- AC-116/AC-117 PASS: no "tab-vault" text and no tab-vault.com link in the HTML of any fetched route; no copy says TabVault is live ("Live in production" in the RSC payload belongs to the Marketing project). NOTE: /slideshow returns 404 in this build (route not built yet), so "including /slideshow" cannot be checked; re-check when that route lands.
- AC-126 PASS: no `tel:`, "206-677-7544", "2066777544" or phone-pattern text in any fetched route (including /projects/multi-agent-system).
- AC-127 PASS: feature image alt equals the Record 2 text exactly; the dialog's aria-label equals that alt; no empty alt on any /projects/* page (empty alts exist only on /about decorative photos, not project images).
- AC-125: not defined in this module's spec (only AC-126 is listed); nothing to verify here. Flagging for the coordinator in case it is meant to be in scope.

Could not be judged by me: the overlay open/close motion on this image (headless scripted click harness would not run). MOD-003 QA covers the overlay mechanism in headless Chrome.

### Human test script (MOD-005 under the overlay)
1. `cd site && npm run build && npx next start`, open /projects/multi-agent-system at 1280px wide.
2. Click the diagram: it should zoom to the center over a dimmed page; click anywhere or press Esc: it returns to the same spot, nothing on the page jumps.
3. At 375px (device toolbar or phone): the whole diagram visible edge to edge before opening, no sideways scroll; tap it, the zoomed diagram fits the screen; tap to close.
4. With VoiceOver, opening the image announces a dialog named by the diagram description.
Reply with PASS or the step that failed.

### Integration notes (for Tech Lead)
- scan-integration.sh not run separately in this pass; no new leads beyond Run 3 note (metadataBase unset, og:image resolves to localhost:3000).
- /slideshow route absent in the build; AC-117/AC-126 "every route including /slideshow" is untestable until it exists.

### Open items
- [ ] AC-091 needs-signoff — overlay zoom/close on the feature image at 1280 and 375 (2026-11-01)
