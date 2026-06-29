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

### AC-018 — FAIL
**FAIL AC-018 (partial):** The metadata object exports `title: "Home — Leon Wu"`, OpenGraph tags (`og:title`, `og:description`, `og:type`, `og:image`), and Twitter card tags (`twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`). However, the spec also requires `og:url` and a canonical URL tag.
- Input: `site/app/page.tsx` metadata export
- Actual: `openGraph` object contains no `url` property; no `alternates: { canonical: ... }` field in metadata export
- Expected per spec: `og:url` present in openGraph object; canonical URL tag exported via `alternates.canonical`
- Note: The spec AMBIGUITY marker acknowledges the domain is unconfirmed, but the spec still requires the tags to be present (even as placeholder values). The tags are entirely absent.

**No headshot on home page:** PASS — no `<img>`, `<Image>`, or photo reference in `site/app/page.tsx`.
**No blog card:** PASS — no blog content detected.
**Server Component:** PASS — no `'use client'` directive in `site/app/page.tsx`.
**No gold-plating:** PASS — no features beyond spec requirements detected.
