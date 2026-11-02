# Home Page Status

## Engineering Progress

### 2026-06-28 — implementation complete

**Files created / modified:**
- `site/app/page.tsx` — H1 "Hey, I'm Leon", H2 "Full-Stack Engineer", bio paragraph, status line, primary CTA (LinkedIn), secondary CTA (/contact), metadata with OG/Twitter tags

**Self-check:** lint PASS, build PASS (12 routes)

## QA Results

**Date:** 2026-06-28
**Mode:** functional-test
**Lint:** PASS — `npm run lint` exits with zero errors or warnings
**Build:** PASS — `npm run build` succeeds, route `/` generated as static

---

### AC-011 — PASS
Renders `<h1>Hey, I'm Leon</h1>` on the home page route `/`. Verified in `site/app/page.tsx` line 29.

### AC-012 — PASS
Renders `<h2>Full-Stack Engineer</h2>` as role subtitle. Verified in `site/app/page.tsx` line 31.

### AC-013 — PASS
Bio paragraph matches spec verbatim: "I'm a full-stack engineer and CS master's student at Northeastern. I build production systems by hand, from the database schema to the cloud deployment, and I design multi-agent systems that plan, implement, and ship software end to end. What I care about most is the engineering that makes software hold up in the real world, not just in a demo." Verified by normalized text comparison.

### AC-014 — PASS
Status line matches spec verbatim: "Currently pursuing my MS in Computer Science at Northeastern and looking for a Summer 2026 software engineering internship across full-stack, frontend, or backend roles." Verified by normalized text comparison.

### AC-015 — PASS
Primary CTA renders as `<a href="https://www.linkedin.com/in/leon-wu-tsan-yu/" target="_blank" rel="noopener noreferrer">Connect me on LinkedIn</a>`. All attributes correct. Verified in `site/app/page.tsx` lines 49–56.

### AC-016 — PASS
Secondary CTA renders as `<Link href="/contact">Reach out</Link>` using next/link. Verified in `site/app/page.tsx` lines 57–62.

### AC-017 — CONDITIONAL PASS
Spec requires all hero content to be visible above-the-fold on a standard laptop viewport. Code inspection confirms all content (H1, H2, bio, status, CTAs) is within a single `<section className="flex flex-col gap-6 py-4">` with no pagination, modal, or scroll-trigger — consistent with above-the-fold layout. Cannot definitively confirm without a browser render at a 1280x800 viewport.

### AC-018 — PASS (fixed after QA report)
`og:url: "https://your-domain.com/"` and `alternates.canonical: "https://your-domain.com/"` added to metadata export. Placeholder domain used pending domain confirmation. All required SEO/OG/Twitter fields now present.

**No headshot on home page:** PASS — no `<img>`, `<Image>`, or photo reference in `site/app/page.tsx`.
**No blog card:** PASS — no blog content detected.
**Server Component:** PASS — no `'use client'` directive in `site/app/page.tsx`.
**No gold-plating:** PASS — no features beyond spec requirements detected.

### 2026-11-01 — spec-update (E1 = A2 step 5): no-change verification
- No code change to site/app/page.tsx. Verified against spec (PRD 4.1 rev 1.5/1.6): AC-011..018 and AC-087 met; copy untouched.
- Projects list renders from `projects` array: Multi-Agent, ProjectDay (2nd), SitePlus+, TabVault; each links /projects/<slug>, title + tech, no date. ProjectDay: /projects/projectday, "Mobile · React Native · Supabase · AWS".
- `npm run lint` in site/: 0 errors (9 pre-existing img warnings, other modules). `npm run build`: pass, all four project routes prerendered.
- Self-check items: build pass, lint pass, Server Component pass, no new deps pass, no hardcoded config pass.

### 2026-11-01 — QA regression (spec rev 1.6; replaces the 2026-06-28 results above)
**Workflow:** regression — spec updated for PRD rev 1.5/1.6, engineer no-change verification (bd95835), MOD-003 cutover (f95eb9d) changed the rendered array. Checked against real HTML from `next start` (port 3107) after build.
**Lint:** PASS (0 errors, 9 pre-existing img warnings in other modules). **Build:** PASS (13 static pages, all 4 project routes prerendered).

- AC-011: PASS — HTML `<h1>Hey, I&#x27;m Leon 👋</h1>`.
- AC-012: PASS — no subtitle in `<main>` after the H1 (the "Full-Stack Engineer" text is only in the Sidebar, MOD-001).
- AC-013: PASS — bio verbatim in HTML (sentence form with periods per spec).
- AC-014: PASS — status line verbatim ("2026/2027 ... internship").
- AC-015: PASS — "Connect on LinkedIn", href linkedin.com/in/leon-wu-tsan-yu/, target=_blank, rel="noopener noreferrer".
- AC-016: PASS — "Reach out" href="/contact".
- Tertiary CTA: PASS — "Download CV" href=/Leon_cv.pdf download=Leon_Wu_Resume.pdf.
- AC-017: PENDING HUMAN — needs a browser render at laptop viewport (not verifiable from HTML).
- AC-018: PASS — title "Home — Leon Wu"; og:title/description/image/url/type; twitter:card/title/description/image; canonical and og:url = https://www.leon-wu.com/.
- AC-087: PASS — projects list order Multi-Agent, ProjectDay, SitePlus+, TabVault; ProjectDay href=/projects/projectday, "Mobile · React Native · Supabase · AWS", no date; all entries link to /projects/<slug>, title + tech, no dates.
- Other: no headshot, no blog content, Server Component (no 'use client'), no gold-plating. PASS.

### Integration notes (for Tech Lead)
- `og:image` and `twitter:image` render as `http://localhost:3000/og-image.png` because no `metadataBase` is set (build warning). Spec does not require an absolute domain for images, so not a failure, but social previews in production would point at localhost. Also `asset/og-image.png` is untracked at repo root; check `site/public/og-image.png` exists.

### Human sign-off script (AC-017)
1. `cd site && npm run build && npx next start`, open http://localhost:3000/ at about 1280x800.
2. Without scrolling, confirm H1, bio, status line and all three buttons (Connect on LinkedIn, Reach out, Download CV) are visible.
3. Click Download CV: file saves as Leon_Wu_Resume.pdf.

### Human UI results (2026-11-01)
- AC-017: NOT RECORDED — the human's reply ("4. no need a branch / other go with recommend and approve") answered an unrelated branch question; item 5 (AC-017) had no recommendation to approve, and the reply reports no observation of the page or the download. Not treated as sign-off.

### Human UI results (2026-11-01, second reply)
- AC-017: PASS — reported by the human 2026-11-01. Exact reply: "The two browser checks need you to actually look at the pages: both check and pass". The first clause repeats the coordinator's heading; "both check and pass" was given in answer to the AC-017 and AC-091 questions. The reply does not itemize the fold or the filename, so the pass rests on the human's word, not on QA's own observation. (Workflow: ui-results, mode verify.)

### Open items
- [x] AC-017 needs-signoff — above-the-fold check at laptop viewport — passed (human-reported) 2026-11-01
