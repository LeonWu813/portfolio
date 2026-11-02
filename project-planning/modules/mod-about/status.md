# About Page Status

## Engineering Progress

### 2026-06-28 — implementation complete

**Files created / modified:**
- `site/app/about/page.tsx` — two verbatim body paragraphs, education block, no photo, metadata with OG/Twitter tags

**Self-check:** lint PASS, build PASS

### 2026-11-01 - spec-update (PRD 1.10/1.11)

- Changed AC-125: about/page.tsx description, Open Graph description and Twitter description now read "About Leon Wu — ..." (rest unchanged).
- AC-132, AC-126 (no tel/phone in page), AC-064: already satisfied by the existing page (Meeee/Hobbies/Background, five empty-alt photos, no phone, no education); no change.
- Self-check (run in site/): lint PASS (0 errors, img warnings only), build PASS, grep of built /about for Tsan-Yu/phone: none.

## QA Results

**Date:** 2026-11-01
**Mode:** verify (functional-test) - spec rebuilt against PRD 1.10/1.11; supersedes the 2026-06-28 results below (old AC-062 education and AC-063 "no photo" records are void).
**Method:** `npm run build` PASS, `next start -p 3917` (stopped after), curl of /about plus parsing of built HTML. Server Component and no-`'use client'` confirmed in source. No project verify skill exists; no human script needed (all ACs judged from HTML text/attributes).

- AC-059: PASS - h1 "About".
- AC-060: PASS - first paragraph verbatim under Background (normalized text compare).
- AC-061: PASS - second paragraph verbatim.
- AC-062: PASS - no education text (Northeastern University / Chengchi / GPA / Expected) in /about main.
- AC-132: PASS - headings in order About, Meeee, Hobbies, Background. Meeee: three lines word for word with emojis, then IMG_6605.jpg, IMG_6591.jpg. Hobbies: "Ski ⛷️ Snowboard 🏂", IMG_6353.jpg, IMG_6875.JPG, "Bouldering 🧗", 4D0BDA...BB73.JPG. Background: two paragraphs. Exactly five img, all alt="", all five files return 200. No other section/line/photo.
- AC-064: PASS - no em dash in rendered body copy (em dashes only in title/meta, where the spec mandates "About — Leon Wu").
- AC-065: PASS - title "About — Leon Wu", og:title/description/url, twitter:card/title/description, canonical and og:url https://www.leon-wu.com/about.
- AC-125 (on /about): PASS - description, og:description, twitter:description all "About Leon Wu — ..."; no "Tsan-Yu" anywhere in /about HTML (the one hit in the page is the shell's email/LinkedIn URL, which is exempt).
- AC-126 (on /about): PASS - no tel: link, no 206-677-7544 / 2066777544 in /about HTML. All other built routes also clean of phone; /slideshow does not exist (404) in this build.
- Layout wrapper `px-8 py-16 max-w-2xl mx-auto w-full` present (plus flex classes). No gold-plating found.

### Open items
- [ ] AC-125 bugs-found (other modules, not MOD-008) - built HTML still contains "Tsan-Yu (Leon) Wu" in /contact meta descriptions and /skills description (also reflected in /projects and _not-found output); belongs to the contact and skills modules (2026-11-01)

### Integration notes (for Tech Lead)
- AC-125 route-wide leftover noted above is outside MOD-008; scan-integration not run because the finding was reached by direct grep of .next output.

---
### Superseded 2026-06-28 record (historical)

**Date:** 2026-06-28
**Mode:** functional-test
**Lint:** PASS — `npm run lint` exits with zero errors or warnings
**Build:** PASS — `npm run build` succeeds, route `/about` generated as static

---

### AC-059 — PASS
Renders `<h1>About</h1>` as page heading on the `/about` route. Verified in `site/app/about/page.tsx` line 27.

### AC-060 — PASS
First body paragraph matches spec verbatim: "My path into engineering did not start in a computer science classroom. I studied International Business in Taipei and spent the early part of my career on the product and marketing side, where I taught myself to code so I could build the things I was responsible for shipping. That habit grew into building full-stack products that real companies and real users came to depend on. I am now pursuing my MS in Computer Science at Northeastern to strengthen the fundamentals beneath the work I had already been doing." Verified by normalized text comparison.

### AC-061 — PASS
Second body paragraph matches spec verbatim: "The pivot is the point. I learned to engineer by shipping software that people actually use, and I bring that same bias toward real, working results to everything I build, whether that is a production analytics platform or a system of AI agents that ships software on its own." Verified by normalized text comparison.

### AC-062 — PASS
Education block renders both entries:
- Northeastern University: MS in Computer Science, GPA 3.9 / 4.0, Expected Dec 2027, Seattle, WA — PASS
- National Chengchi University: BA in International Business, GPA 3.5 / 4.0, Completed, Taipei, Taiwan — PASS

### AC-063 — PASS
No photo or headshot on the `/about` page. No `<img>`, `<Image>`, or photo/headshot/avatar reference found in `site/app/about/page.tsx`.

### AC-064 — PASS
No em dashes in rendered copy. All 6 em dash characters (U+2014) found in the file are located exclusively within the `metadata` export object (in `title` and `description` string values used as SEO meta tags), not in any rendered JSX body copy. The two visible body paragraphs and education block contain no em dashes.

### AC-065 — PASS (fixed after QA report)
`og:url: "https://your-domain.com/about"` and `alternates.canonical` added. Placeholder domain pending confirmation. All SEO/OG/Twitter fields now present.

**Server Component:** PASS — no `'use client'` directive in `site/app/about/page.tsx`.
**No gold-plating:** PASS — no features beyond spec requirements detected.
