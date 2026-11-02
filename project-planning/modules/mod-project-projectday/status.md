# mod-project-projectday Status

## Engineering Progress

- Mode: spec-update (spec rev 1.10/1.11). Changed ACs: AC-084 (Images section, 7 sections), AC-089 (feature image, alt, caption), AC-111 (Images items with alts), AC-112 (image files), AC-127 (alts). Record: added featureImage, featureImageAlt, featureImageCaption and the Images section (Route beta, Profile, with alts) between "How it works end to end" and "Notable technical decisions".
- Images made with Pillow (run with python3 -I): each 1206x2622 RGBA PNG from asset/screenshots/projectday/ resized with LANCZOS to height H=1300 (width 598); singles saved with `Image.save(out, "WEBP", quality=80, method=6)` for route, route-beta, profile. Screens: canvas RGBA (0,0,0,0) of width 3*598+2*30 = 1854 x 1300 (gap = round(598*0.05) = 30 px, no outer margin), Home, Gyms, Route pasted left to right, saved with the same WEBP call. Sizes: screens 124,140 B; route 41,120 B; route-beta 27,478 B; profile 26,538 B; total 219,276 B (limit 800,000; each under 300 KB). Gap pixels are alpha 0 (checked); the screens themselves are opaque.
- Build: pass. Lint: 0 errors (6 warnings, none in this module). self-check.sh not run (fails at repo root).
- Mode: implement (E1 = A2 step 2). Created site/data/projects/projectday.ts (CONV-005: type-only import, one named export `projectday`). Record 4 fields, six sections with PRD headings, word-for-word from source; editor's notes excluded (AC-084); links: []; no featureImage (AC-089).
- projects-data.ts not edited. MOD-003 imports at index 1 in cutover.
- Template check: app/projects/[slug]/page.tsx guards links (`links.length > 0`) and featureImage (`project.featureImage &&`), so no links row and no image slot render. No change needed.
- Build: pass. Lint: 0 errors (9 pre-existing warnings). self-check.sh not run (known to fail at repo root; package.json in site/).

## QA Results

### QA Run 1 (2026-11-01) — workflow: verify (first-time; module implemented at 8d90bb0, wired by MOD-003 cutover f95eb9d)
Method: `npm run build` and `npm run lint` in site/ (build pass, 13 static pages, /projects/projectday listed under generateStaticParams; lint 0 errors, 9 pre-existing warnings). `next start -p 3055`, real HTML fetched with curl and parsed with a script. run-qa.sh exits 127 (no test command at repo root, known); not counted as a failure. No verify skill in project. No AC needs a browser: the feature image is absent, so there is no visual criterion left (AC-089 second sentence is not triggerable).

- PASS AC-079: GET /projects/projectday 200; one h1 "ProjectDay".
- PASS AC-080: At-a-glance `<p class="text-sm text-[var(--text-muted)] mb-3">` text identical to spec; same classes as /projects/siteplus.
- PASS AC-081: exactly 7 chip spans, in spec order, same classes as siteplus chips.
- PASS AC-082: no `<a>` or links row in the header (`links: []`); the only external hrefs in the page are the shared sidebar LinkedIn, GitHub profile and mailto. No App Store link, no repo link.
- PASS AC-083: pull-quote `<p>` (border-l-2 accent style, same classes as siteplus) text equals Record 4 description exactly.
- PASS AC-084: six h2 in order: The problem, My role, How it works end to end, Notable technical decisions, Impact and status, What I learned and what I'd improve. All 17 body paragraphs of the source file are found verbatim (bold markers stripped, whitespace normalized) in the rendered text. Searched the rendered text for "confirm it is live", "Suggested listing", "Editor", "not page copy": none present. (The page's RSC payload contains only the data fields, not the editor lines.)
- PASS AC-085: 10 `<strong>` elements (Client., Gyms and routes., Backend., Video., Social and safety., Shipping., and the four decision lead-ins); no literal `**` in rendered text.
- PASS AC-086: sidebar and mobile pill list order Multi-Agent, ProjectDay, SitePlus+, TabVault; ProjectDay shows title and "Mobile · React Native · Supabase · AWS"; on /projects/projectday its link carries the active classes (bg-[var(--text)] text-[var(--bg)]), others do not. /projects returns 307 to /projects/multi-agent-system.
- PASS AC-087: Home list contains ProjectDay linking to /projects/projectday with the tech line and no date text.
- PASS AC-088: title "ProjectDay — Leon Wu"; meta description; og:title, og:description, og:url https://www.leon-wu.com/projects/projectday, og:type; twitter:card summary_large_image and twitter:title; canonical https://www.leon-wu.com/projects/projectday.
- PASS AC-089 (current state): the page has no `<img>` other than the sidebar avatar, no `<figure>`, no empty slot, no broken image. No `site/public/projectday-*` files exist, as expected. The post-screenshot clause is not yet testable; re-verify when screenshots are supplied.
- PASS AC-090: build output lists projectday as static; /projects/siteplus, /projects/multi-agent-system, /projects/tabvault return 200; /projects/nope returns 404.
- PASS CONV-005: record file has one named export typed ProjectEntry, type-only import; projects-data.ts holds the array with projectday at index 1.
- Gold-plating: none found.

### Integration notes (for Tech Lead)
scan-integration.sh: no hits involving mod-project-projectday (only the module listing).

### QA Run 2 (2026-11-01) - workflow: verify (spec-update 26eeede; MOD-003 overlay/alt/640 px cap f66a813, QA'd 17e339f)
Method: `npm run build` (pass, 13 static pages) and `next start -p 3071`; real HTML via curl; headless Chrome (CDP) at 1280x800 and 375x800 for geometry and overlay; screenshot of the full page Read by eye; composed image checked with Pillow and composited on magenta and viewed. Server and Chrome stopped afterwards. No project verify skill. run-qa.sh not applicable (no test command at repo root, known).

- PASS AC-079, AC-080, AC-081, AC-082, AC-083, AC-085, AC-086, AC-087, AC-088, AC-090: re-checked on the rebuilt app, unchanged from Run 1 (h1, glance, 7 chips, no links/tel, pull-quote, 10 strong and no literal `**` in rendered text, order Multi-Agent/ProjectDay/SitePlus+/TabVault, title/description/og/twitter/canonical, siteplus/multi-agent-system/tabvault 200, /projects/nope 404, /projects 307).
- PASS AC-084: seven h2 in order: The problem, My role, How it works end to end, Images, Notable technical decisions, Impact and status, What I learned and what I'd improve. Every body paragraph of the source file is found verbatim in the rendered text (the only unmatched source lines are the At-a-glance line, tag line, and the editor lines, which must not render). Images section has no paragraphs. "confirm it is live" and "Suggested listing" absent from the built HTML.
- PASS AC-089: feature image /projectday-screens.webp, alt equals Record 4 featureImageAlt, figcaption "ProjectDay's interface is in Traditional Chinese, for climbers in Taiwan." directly below. 1280 wide: 657x461 in the 721 px column, natural 1854x1300, aspect preserved; 375 wide: 296x208, no horizontal scroll (scrollWidth 375). Image viewed: Home, Gyms, Route left to right, each whole (no crop), gaps exactly 30 px (x 598-627 and 1226-1255, alpha 0; 5% of 598 = 29.9), corners and gaps transparent (alpha 0), no outer margin. Rendered page screenshot shows it intact.
- PASS AC-111: Images section shows route-beta then profile, exact alts from the table, no empty alts. 1280x800: each 295x640 (not taller than 640), aspect preserved; 375: each 295x640 at x=32, inside the 360 px column, no horizontal scroll.
- PASS AC-112: sizes projectday-screens 124,140 B; route 41,120; route-beta 27,478; profile 26,538; served bytes by HTTP equal file sizes. Each under 300 KB; total 219,276 B (limit 800,000). Singles 598x1300 (at least 1000 tall); screens 1854x1300 (at least 1500 wide); WebP with alpha on screens.
- PASS AC-127: feature image and both Images images carry exactly the spec alts, none empty; the overlay dialog opened by each of the three images (via click in headless Chrome) has aria-label equal to that alt text and an inner img with the same alt.
- PASS AC-126 (/projects/projectday part): no `tel:`, no "206-677-7544" or "2066777544", no phone-number-like digit string in text, links or meta of the built HTML. The "/slideshow" part is NOT YET CHECKABLE (route does not exist).
- PASS CONV-001, CONV-005: record file has one named export typed ProjectEntry, type-only import; only projectday-* assets owned.
- Gold-plating: none.
- Note, not a failure: og:image / twitter:image resolve to http://localhost:3000/og-image.png because metadataBase is unset (build warning); site-wide, not in this module's AC scope.
- Human script: none needed. Visual feel of the overlay open/close animation is owned by MOD-003 sign-off.

### Integration notes (for Tech Lead)
Not re-run this round (no new dependency change). Run 1: no hits for this module.

### Open items
- [x] AC-089 post-screenshot clause - passed 2026-11-01 (1280 and 375)
- [ ] AC-126 /slideshow part - not yet checkable, /slideshow does not exist; re-verify when MOD-012 lands (2026-11-01)
