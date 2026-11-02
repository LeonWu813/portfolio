# Contact Page Status

## Engineering Progress

### 2026-11-01 — spec-update (AC-123, AC-125, AC-126; PRD rev 1.11)

- AC-125: name changed to "Leon Wu" in meta, Open Graph and Twitter descriptions (page.tsx:6,9,20); rest of text unchanged.
- AC-076: resume link label set to "Resume (PDF)".
- AC-123 / AC-126: already satisfied (order Email, LinkedIn, GitHub, Resume; no phone, no Location, no tel:). Built /contact HTML grep shows no tel:, no phone number, no old full name.
- Self-check (run in site/): lint PASS (0 errors), build PASS.

### 2026-06-28 — implementation complete

**Files created / modified:**
- `site/app/contact/page.tsx` — heading, intro line, email mailto, LinkedIn, GitHub (all with target/rel), resume `<a download>`, no form, metadata

**Self-check:** lint PASS, build PASS

### 2026-11-01 — spec-update (AC-072, PRD rev 1.5, Doc-Sync dabc190)
- Changed AC-072 only: intro in site/app/contact/page.tsx read "2026/ 2027" (stray space); now "2026/2027" verbatim. No other copy touched.
- npm run lint (site/): PASS, 0 errors (9 pre-existing warnings elsewhere). npm run build (site/): PASS.
- self-check.sh not run (fails at repo root, per instruction).

## QA Results

**Date:** 2026-06-28
**Mode:** functional-test
**Lint:** PASS — `npm run lint` exits with zero errors or warnings
**Build:** PASS — `npm run build` succeeds, route `/contact` generated as static

---

### AC-072 — PASS
Renders `<h1>Contact</h1>` and intro line verbatim: "Looking for a Summer 2026 internship in full-stack, frontend, or backend engineering. If you're working on something interesting, I'd love to hear about it." Verified by normalized text comparison (JSX `&apos;` entities decode correctly to apostrophes).

### AC-073 — PASS
Email renders as `<a href="mailto:leon.wu.tsan.yu@gmail.com">leon.wu.tsan.yu@gmail.com</a>`. Display text and mailto href both correct. Verified in `site/app/contact/page.tsx` lines 41–45.

### AC-074 — PASS
LinkedIn renders as `<a href="https://www.linkedin.com/in/leon-wu-tsan-yu/" target="_blank" rel="noopener noreferrer">linkedin.com/in/leon-wu-tsan-yu</a>`. URL, display text, target, and rel all correct. Verified in `site/app/contact/page.tsx` lines 52–58.

### AC-075 — PASS
GitHub renders as `<a href="https://github.com/LeonWu813" target="_blank" rel="noopener noreferrer">github.com/LeonWu813</a>`. URL, display text, target, and rel all correct. Verified in `site/app/contact/page.tsx` lines 66–72.

### AC-076 — PASS
Resume link renders as `<a href="/Leon_cv.pdf" download="Leon_Wu_Resume.pdf">Download resume (PDF)</a>`. The label "Download resume (PDF)" satisfies the spec requirement of "Download resume" or "Resume (PDF)". Uses plain `<a>` tag — not `next/link`. File confirmed present at `site/public/Leon_cv.pdf`. Verified in `site/app/contact/page.tsx` lines 81–86.

### AC-077 — PASS
No contact form on the `/contact` page. No `<form>` or `<input>` elements detected in `site/app/contact/page.tsx`.

### AC-078 — PASS (fixed after QA report)
`og:url: "https://your-domain.com/contact"` and `alternates.canonical` added. Placeholder domain pending confirmation. All SEO/OG/Twitter fields now present.

**Server Component:** PASS — no `'use client'` directive in `site/app/contact/page.tsx`.
**External links target/rel:** PASS — LinkedIn and GitHub both have `target="_blank" rel="noopener noreferrer"`.
**No next/link for PDF:** PASS — plain `<a>` element used for PDF download.
**No gold-plating:** PASS — no features beyond spec requirements detected.

---

## QA Results — 2026-11-01 (regression, PRD rev 1.5/1.6, AC-072 intro "2026/2027")

Workflow: regression — prior QA all PASS; Engineer spec-update changed AC-072 only (commit 9396456).
Lint (site/): PASS, 0 errors (9 pre-existing warnings elsewhere). Build (site/): PASS, /contact static.
Evidence: real HTML from `next start` on port 3917, curl of /contact.

- AC-072: PASS — `<h1>Contact</h1>`; intro "Looking for a 2026/2027 internship in full-stack, frontend, or backend engineering. If you're working on something interesting, I'd love to hear about it." (apostrophes as &#x27;); no stray space.
- AC-073: PASS — `<a href="mailto:leon.wu.tsan.yu@gmail.com">leon.wu.tsan.yu@gmail.com</a>`.
- AC-074: PASS — LinkedIn href/text/target/rel correct.
- AC-075: PASS — GitHub href/text/target/rel correct.
- AC-076: PASS — `<a href="/Leon_cv.pdf" download="Leon_Wu_Resume.pdf">Download resume (PDF)</a>`; /Leon_cv.pdf returns HTTP 200.
- AC-077: PASS — 0 `<form>`, 0 `<input>`.
- AC-078: PASS — title "Contact — Leon Wu"; canonical and og:url https://www.leon-wu.com/contact (the earlier placeholder domain is gone); og and twitter tags present.

Human sign-off: not needed (text-only copy change).

### Integration notes (for Tech Lead)
- og:image / twitter:image resolve to http://localhost:3000/og-image.png because no metadataBase is set (build warning). Not a MOD-010 AC, but affects social previews in production.

### Open items
- (none)
