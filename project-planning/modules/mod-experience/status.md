# Experience Page Status

## Engineering Progress

### 2026-06-28 — implementation complete

**Files created / modified:**
- `site/data/experience-data.ts` — ExperienceEntry and EducationEntry interfaces + data arrays (2 roles, 2 education entries)
- `site/app/experience/page.tsx` — reads from data file, renders roles in reverse-chron order, education section, metadata with OG/Twitter tags

**Self-check:** lint PASS, build PASS

### spec-update (PRD 1.10/1.11)
- Changed ACs: AC-118 (CV content, new Exascend dates/bullets, GoFreight title/bullets/tags), AC-119 (full degree names, `period` field), AC-121 (meta descriptions, "Leon Wu"), AC-125, AC-126. Education now renders after work entries (was merged by date).
- Self-check (run in site/: tsc, lint, build): pass. Built /experience HTML has no "Tsan-Yu" or "350%".

## QA Results

**Date:** 2026-11-01
**Mode:** verify (first-time verification against rebuilt spec at PRD 1.11; the 2026-06-28 results below the line are superseded: AC-055/056 no longer exist, old data differed). Workflow chosen because the invocation said `verify` and the spec was rebuilt after the prior QA.
**Build:** PASS (`npm run build`, /experience static). Verified on `next start -p 3917` (stopped afterwards); built HTML fetched with curl; screenshots via headless Chrome at 1280 and 375 wide (scratchpad exp-1280.png, exp-375.png). No project `verify` skill exists.

- AC-053: PASS. h1 "Experience" in built HTML.
- AC-054: PASS. Exascend first, GoFreight second (SSR text order).
- AC-057: PASS. Both arrays imported from `site/data/experience-data.ts`; interfaces match spec (`EducationEntry.period`). Note: `ExperienceEntry.tags` is required, spec marks it optional (`tags?`); harmless, both roles have tags.
- AC-058: PASS. Title "Experience — Leon Wu", og:* and twitter:* tags present, canonical https://www.leon-wu.com/experience, og:url same.
- AC-118: PASS. Title, company, location, dates, every bullet and every chip compared word for word against the spec in the built HTML, in order; no extra bullets or chips. Forbidden strings counted in built /experience HTML: "Growth Marketer" 0, "0.38%" 0, "Baidu Ads" 0, "JCTrans" 0, "350%" 0, "670%" 0. Exascend bullet keeps "22.3%".
- AC-119: PASS. Northeastern then NCCU; degree, institution, GPA, period, location word for word (rendered as "Seattle, WA · GPA 3.9 / 4.0").
- AC-121: PASS. Meta description exact; og:description and twitter:description exactly "Professional experience and education of Leon Wu."; "Growth Marketer" and "MS in Computer Science" appear 0 times on the page.
- AC-125: PASS for /experience (no "Tsan-Yu" in any case-sensitive form; only the 2 lowercase "tsan-yu" in LinkedIn URL, allowed). SEE FAIL below for other routes (not this module).
- AC-126: PASS for /experience: no `tel:`, no "206-677-7544", no "2066777544", no phone-number pattern. Also none on /, /contact, /about, /skills, project routes. /slideshow returns 404 in this build, so that part is not checkable.

**Education order question (spec check):** the spec settles it. Purpose says Education is "followed by an Education section ... at the bottom of the page" and Requirements say "same timeline visual, at the bottom of the page"; AC-119 fixes Northeastern then NCCU. The engineer's order (work first, education after) is correct; a merged date sort is not required by the spec.

**"Jul 2025 – Dec 2027 (Expected)" wrapping:**
- 1280 wide: it wraps to two lines, "Jul 2025 – Dec 2027" / "(Expected)", right-aligned, because the date cell is 9rem minus padding (about 120px). The break falls before "(Expected)", never between start and end; it looks tidy and the dot/line stay aligned. The 9rem column rule in the spec makes this unavoidable without a spec change. Judged acceptable, not a failure.
- 375 wide: layout is single column (date above entry, left-aligned); the date is on one line, no wrap. The headless screenshot at 375 shows body text clipped at the right edge, but headless Chrome enforces a minimum window width so the screenshot is probably an artifact; not judged. Human check recommended (script below).

**Failures:** none in MOD-007.

### Integration notes (for Tech Lead)
- AC-125 is violated on other routes' built HTML: "Tsan-Yu (Leon) Wu" appears in meta description / og:description on /about, /contact, /skills, and the root/layout default (seen on the /slideshow 404 page and the /projects redirect body). Owned by those modules, not MOD-007; the layout default description is likely MOD-001.
- /slideshow does not exist in this build (404), so AC-126 cannot be checked there.
- Old QA lines for AC-055/AC-056 are obsolete; no such ACs in the current spec.

### Open items
- [ ] AC-125 bugs-found, other modules (about, contact, skills, site-shell layout): full name "Tsan-Yu (Leon) Wu" still in built meta (2026-11-01)
- [ ] AC-126 /slideshow part not checkable, route 404 (2026-11-01)

### Human check (optional, visual only)
Open /experience on a real phone (or Chrome devtools at 375 wide, not headless): confirm bullets and chips wrap inside the screen with no right-edge clipping or horizontal scroll, and that "Jul 2025 – Dec 2027 (Expected)" sits on one line above the Northeastern entry.
