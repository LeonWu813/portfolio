# Contact Page Status

## Engineering Progress

### 2026-06-28 — implementation complete

**Files created / modified:**
- `site/app/contact/page.tsx` — heading, intro line, email mailto, LinkedIn, GitHub (all with target/rel), resume `<a download>`, no form, metadata

**Self-check:** lint PASS, build PASS

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
