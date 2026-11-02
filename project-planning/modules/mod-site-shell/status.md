# Site Shell (Layout, Sidebar, Nav, Footer, Dark Mode) Status

## Engineering Progress

### Engineer integration-fix: INT-001 (part 1), INT-002, INT-010, INT-011 (2026-11-02)
- INT-001: `metadataBase: new URL("https://www.leon-wu.com")` added to root metadata. Part 2 (og-image.png) not done, not approved.
- INT-002 (sips, in place, same names/format; `sips -Z N`, `--resampleWidth`, `-s format jpeg -s formatOptions 80`):
  - head.png 1,834,627 B 1300x1300 -> 93,952 B 256x256 (`sips -Z 256`, RGBA)
  - Subject.png 1,387,704 B 2410x938 -> 88,804 B 480x187 (`sips --resampleWidth 480`, RGBA)
  - IMG_6353.jpg 1,460,372 -> 424,752 B; IMG_6591.jpg 1,565,008 -> 549,479 B; IMG_6605.jpg 1,026,073 -> 373,006 B; each 4032x3024 -> 1600x1200 (`sips -Z 1600 -s format jpeg -s formatOptions 80`)
  - 4D0BDA8A-...JPG 796,301 B 2480x3307 -> 549,484 B 1500x2000 (`sips -Z 2000 -s format jpeg -s formatOptions 80`)
  - IMG_6875.JPG untouched.
  - Note: `file` reports an EXIF orientation tag on the three IMG_*.jpg in both the old and new files (unchanged by sips, pixel dims landscape), so browser rendering is as before. Leon to check visually.
- INT-010: git rm of TopNav.tsx, public/{file,globe,next,vercel,window}.svg, favicon_io/, favicon.ico, apple-touch-icon.png, site.webmanifest, android-chrome-*.png, favicon-16x16.png, favicon-32x32.png. Grep first: no references in app/, components/, data/, next.config.ts; cmp showed public favicon/touch icon identical to app/ ones.
- INT-011: `inert={!mobileOpen}` on the mobile drawer aside. AC-094 on mobile to be checked by QA.
- Checks in site/: tsc clean, lint 0 errors (6 pre-existing warnings), build passes.

### Bugfix (AC-003/AC-004, dark class stripped at hydration)
- Mode: bugfix. Root cause was NOT the html className: ThemeToggle's useState initializer read document.documentElement.classList during hydration, so client render (dark) differed from server HTML (light) -> React error #418 -> root client re-render discarded the class the inline script had added. layout.tsx unchanged.
- Fix: ThemeToggle.tsx now uses useSyncExternalStore (server snapshot false, client snapshot reads html.dark, MutationObserver on class). Toggle writes class + localStorage only; label/icon follow the DOM.
- Headless Chrome (production build): stored dark /about and /slideshow -> dark, no #418; system dark no stored value -> dark; light default -> light; toggle then reload -> dark, label "Switch to light mode"; toggle back + reload -> light.
- LinkedIn outline: sidebar link already uses focus-visible:outline-[var(--accent)]; rgb(22,22,22) seen only with programmatic focus() (outline-style none, not focus-visible), so not a defect. Home/contact page LinkedIn links belong to other modules.
- Self-check: lint 0 errors, build passes.

### 2026-11-02 — spec-update (rev 1.11)

ACs changed: AC-093 (7th Slideshow nav item, key 7, icon from slideshow-ui.md s14), CONV-006 entry in link click + key-7 handler (sessionStorage write, requestFullscreen, router.push; untrusted events not ignored), CONV-007/AC-094/AC-095/AC-129 (Sidebar returns null on /slideshow, key handler off there and while dialog[open]; main::after Subject.png removed from globals.css and replaced by a Sidebar-rendered fixed div so it is not emitted on /slideshow), AC-124 subtitle, AC-125 layout description "Leon Wu", AC-126 (built HTML has no tel:/phone), public/Leon_cv.pdf replaced from asset/Leon_cv.pdf (cfa3367).
- lint (site/): 0 errors: pass
- build (site/): pass; slideshow.html contains no head.png/Subject.png: pass
- no phone in built HTML: pass
- TopNav.tsx untouched: pass

### 2026-06-28 — implementation complete

**Files created / modified:**
- `site/app/globals.css` — removed `@import url()` Google Fonts line; added `@variant dark (&:where(.dark, .dark *));`; updated `--font-sans` to use `var(--font-roboto)`; removed hardcoded font-family from html/body rules
- `site/app/layout.tsx` — replaced Geist/Geist_Mono with Roboto via `next/font/google` (weights 400/500/700, variable `--font-roboto`); added blocking inline `<script>` via `dangerouslySetInnerHTML` as first child of `<html>` for dark mode hydration prevention; wired Sidebar + footer into layout
- `site/components/Sidebar.tsx` — Client Component; fixed desktop sidebar (w-56) + mobile off-canvas drawer with hamburger toggle; wordmark "Leon", NavLinks with active state, ConnectLinks (LinkedIn, GitHub, Email) with `target="_blank" rel="noopener noreferrer"`, ThemeToggle
- `site/components/ThemeToggle.tsx` — Client Component; lazy `useState` initializer reads current DOM class; toggles `dark` class on `document.documentElement` and writes to `localStorage`
- `site/app/projects/[slug]/page.tsx` — placeholder with `dynamicParams = false`, `generateStaticParams` returning all three slugs, awaited `params: Promise<{ slug: string }>`
- `site/app/projects/page.tsx` — stub
- `site/app/page.tsx` — stub (replaces scaffold default)
- `site/app/about/page.tsx`, `contact/page.tsx`, `experience/page.tsx`, `skills/page.tsx` — stubs for other modules to replace

**Scaffold cleanup completed:**
1. Geist/Geist_Mono imports removed from layout.tsx ✓
2. `@import url()` Google Fonts removed from globals.css ✓
3. Static project directories deleted; single `[slug]` dynamic route created ✓
4. `@variant dark` registered in globals.css ✓
5. Blocking inline theme script added to layout.tsx ✓

**Self-check results:**
- `npm run lint` — PASS (0 errors, 0 warnings)
- `npm run build` — PASS; 12 routes generated (/, /about, /contact, /experience, /projects, /skills, /projects/[slug] × 3 slugs, /_not-found)
- All AC requirements met at shell level; browser-only ACs (AC-001 to AC-005) require QA visual verification

## QA Results

### 2026-11-02 — QA run (rev 1.11 spec-update, 1dffb80). Workflow: functional-test (first QA of the new rev-1.11 ACs; the June results below are history)

Method: `npm run build`, `next start` on port 3123, headless Chrome driven over CDP (real key events, no isTrusted shortcuts), built-HTML grep. Server and Chrome stopped. No project verify skill exists. run-qa.sh: no test command in production.md (exit 127 is the script's "none" placeholder, not a failure). Build passes, 14 routes.

**Overall: FAIL (AC-003, AC-004).**

- FAIL AC-003: Input=[`localStorage.theme="dark"`, load /about at 1280x800], Actual=[inline script adds `dark` at DOMContentLoaded (className ends "variable dark"), then about 35 ms later, at hydration, `<html>` class is rewritten to just `roboto_..._variable`; `document.documentElement.classList.contains('dark')` is false from then on, so the page renders light], Expected=[`dark` class present before and after hydration per spec]. Same with `prefers-color-scheme: dark` emulated and no stored value: false. Cause lead: `<html className={roboto.variable}>` in layout.tsx is re-applied by React and drops the class the script added (suppressHydrationWarning does not preserve it). Origin unknown (I could not build the pre-1dffb80 tree to compare); June QA only inspected the code for this AC.
- FAIL AC-004: Input=[click/Enter on ThemeToggle to set dark, then reload /], Actual=[`localStorage.theme` is "dark" but class is gone after reload ("persist false"); toggle's aria-label reads "Switch to light mode" while the page is light], Expected=[stored override applied on subsequent loads]. Same root cause as AC-003. Routing: implementation bug, Engineer (1st failure for both; June results passed them).
- PASS AC-001: sidebar with profile, 7 nav links in order, Online block, on /; screenshot of /about at 1280.
- PASS AC-002: at 375 the top bar shows "Leon Wu", theme toggle, hamburger; drawer lists all 7 items with profile and Online block (screenshot).
- PASS AC-005: 0 `<footer>` elements; no bottom bar.
- PASS AC-006: favicon.ico and apple-touch-icon.png in site/app, no manual link tags (unchanged; build serves them).
- PASS AC-007, AC-008: unchanged files; no `@import url()`; `@variant dark` present.
- PASS AC-009 (keyboard): Tab reaches nav, Online links and toggle; Enter on toggle activates; outline 2px solid on focused links. Note: the focused LinkedIn link's outline color was rgb(22,22,22), not the accent; not a rev-1.11 change, spec says "outline using --accent" for focus states; recorded as an observation, not failed (Online links were not previously flagged).
- PASS AC-010: unchanged Online links (target=_blank, rel=noopener noreferrer).
- PASS AC-093: 7th item "Slideshow" after Contact, svg icon (section-14 presentation icon, `M2 3h20 ... m7 21 5-5 5 5`), badge "7", identical class string to the other items (sameCls true), in desktop sidebar and mobile drawer; click goes to /slideshow.
- PASS AC-094 (with MOD-012, qa-mod-slideshow fb2151e): real key `7` from /about opens /slideshow with sessionStorage written then consumed, `document.fullscreenElement` set, aside count 0; Ctrl+7 stays on /about; `2` in a focused input does not navigate; keys 1-6 navigate on normal pages (`2` lands on /projects/multi-agent-system through /projects's 307 redirect); `3` on /slideshow does nothing.
- PASS AC-095 (headless Chrome only): key 7 and link click both enter full screen, no sidebar, top bar or shell element on /slideshow. Safari, Firefox and iPhone Safari not exercisable here: human script below.
- PASS AC-099 (headless Chrome): Esc returns to /about from both key and click entry, and to / after a direct visit; sidebar present again (2 aside nodes) and keys work. Browser-own fullscreen exit not testable here (covered by qa-mod-slideshow).
- PASS AC-124: subtitle "Full-Stack Software Engineer" on one line, scrollWidth 153 = clientWidth 153, height 15 px, at 1280 (desktop sidebar) and 375 (drawer); the other copy of the span is display:none at each width.
- PASS AC-125: no "Tsan-Yu (Leon) Wu", "Tsan-Yu Wu (Leon)" or "Tsan-Yu Wu" in any of the 14 built HTML files (case-insensitive scan finds only the LinkedIn URL and email address); root description in layout.tsx reads "Portfolio of Leon Wu — full-stack engineer and CS master's student at Northeastern University."
- PASS AC-126: no `tel:`, "206-677-7544", "2066777544" or any phone-number pattern in any built HTML, including slideshow.html.
- PASS AC-129: on /projects/multi-agent-system with the dialog open (confirmed open first), real keys 1-7 leave it open and the URL unchanged; after Esc closes it, key 5 navigates to /about.
- PASS CONV-007: direct load of /slideshow requests no /head.png or /Subject.png (Network events), and none after client-side nav from /contact; 0 aside, 0 header, no decoration div there; key handler inert there; decoration div reappears after Esc.
- PASS decoration on normal pages: fixed div at 1140,700 120x80 (bottom 20 / right 20), pointer-events none, visible in the /about screenshot; same geometry as the old main::after (z-index 10 is new, harmless). `main::after` content is now none.
- PASS CV: site/public/Leon_cv.pdf is byte-identical to asset/Leon_cv.pdf, served 200; both the Home and Contact CV links carry `download="Leon_Wu_Resume.pdf"` (attribute-level check; the saved filename itself is a browser behavior a CLI browser cannot show, in the human script).
- Gold-plating: none found.

### QA Run 2 — Regression — 2026-11-02 (engineer fix c2ef6af). Workflow: regression (Engineer bugfix entry newer than the failing rev-1.11 run)

Method: `npm run build` (14 routes), `next start` on port 3157, headless Chrome over CDP with real key events, built-HTML scan. Server and Chrome stopped afterwards. run-qa.sh: no test command in production.md (same as run 1).

**Overall: PASS. REGRESSION PASS for AC-003 and AC-004; no new regressions.**

- REGRESSION PASS AC-003: original failure scenario resolved. `localStorage.theme="dark"` on /, /about, /projects/multi-agent-system, /slideshow, /experience: `dark` on `<html>` from about 10-16 ms (before first paint at 36-258 ms), never removed after hydration, body bg rgb(22,22,22). `prefers-color-scheme: dark` emulated with no stored value on /about and /slideshow: dark, same timing. Stored "light" with system dark: stays light (correct). No stored value, light system: light (bg rgb(255,255,255)). Class history shows a single add before DCL and no later removal.
- REGRESSION PASS AC-004: toggle (click) light to dark: class and `localStorage.theme="dark"`, aria-label "Switch to light mode"; reload keeps dark; navigate to /projects/siteplus keeps dark; toggle back: `theme="light"`, reload stays light. Enter key on the focused toggle also switches to dark and the reload keeps it. At 375 px, dark persists and the label is correct. Toggle count 2 (sidebar and mobile bar), as before.
- Console: 0 errors, 0 warnings, 0 uncaught exceptions on every load above (no React #418 / hydration error). Both ACs: closes the earlier FAIL.
- Light flash: headless evidence only. The `dark` class is applied by the blocking head script about 10 ms in, 25 to 250 ms before the first paint, so no light frame is painted in these runs. Real-device flash is not observable here.
- LinkedIn focus outline (engineer's claim confirmed): with real keyboard Tab, every focused sidebar link (7 nav, LinkedIn, GitHub, email) and the toggle is `:focus-visible` with `outline: solid 2px rgb(15,98,254)` = `--accent` #0f62fe. The rgb(22,22,22) seen in run 1 came from programmatic focus(). AC-009 observation withdrawn.
- PASS (re-run) AC-093 / nav item 7: 7 links in order (Home, Projects, Experience, Skills, About, Contact, Slideshow with badge 7) in sidebar and drawer.
- PASS (re-run) AC-094 key 7: from /about opens /slideshow with fullscreenElement set, 0 aside, 0 header; Esc returns to /about; Ctrl+7 stays; key 2 goes to /projects(/multi-agent-system redirect); key 3 on /slideshow does nothing.
- PASS (re-run) CONV-007: direct /slideshow load has 0 aside, 0 header, and no head.png or Subject.png resource entries.
- PASS (re-run) AC-124: subtitle scrollWidth 153 = clientWidth 153, height 15, at 1280 and 375 (drawer open).
- PASS (re-run) AC-125: no "Tsan-Yu (Leon) Wu", "Tsan-Yu Wu (Leon)" or "Tsan-Yu Wu" in any of the 14 built HTML files (only the LinkedIn URL and email contain the substring tsan-yu).
- PASS (re-run) AC-126: no `tel:`, 206-677-7544 or 2066777544 in any built HTML.
- PASS (re-run) AC-129: overlay opened on /projects/multi-agent-system (dialog[open] confirmed); keys 1 to 7 leave it open, URL unchanged; after Esc, key 5 goes to /about.
- PASS (re-run) CV: public/Leon_cv.pdf byte-identical to asset/Leon_cv.pdf.
- Not re-run (unchanged files, run 1 stands): AC-001, AC-002, AC-005 to AC-008, AC-010, AC-095/AC-099 headless detail, decoration geometry.
- Gold-plating: none (diff is ThemeToggle.tsx only).

### QA Run 3 - Integration-fix verification INT-001, INT-002, INT-010, INT-011 - 2026-11-02 (engineer fix 7cf7f7b). Workflow: integration-fix-verify (rows at FIXED - AWAITING QA)

Method: `npm run build` (passes, no warnings, 14 pages), `next start -p 3457` (stopped afterwards), headless Chrome via puppeteer-core in the scratchpad (old files served via request interception from `git show 4fc10d3:site/public/<name>` for before/after pixel comparison). No project verify skill exists.

- INT-001 part 1: PASS. All 10 built routes: og:image and twitter:image = https://www.leon-wu.com/og-image.png; canonical and og:url unchanged (own URL on each route); no metadataBase warning. /og-image.png 404 (expected).
- INT-002: PASS. Dimensions and formats as specified, IMG_6875.JPG unchanged, names/paths unchanged, EXIF orientation tags same as before. Old vs new pixel diff: /about 0.06 percent, slide 3 at 1920x1080 0.005 percent, home (avatar and corner decoration) 0.009 percent; diff images show only edge resampling noise. Image bytes: /about 9.35 MB to 3.36 MB, /slideshow 2.08 MB to 1.83 MB (AC-106 under 3 MB: PASS).
- INT-011: PASS. At 390 px closed drawer inert, links not in a11y tree or Tab order; opened drawer not inert, 12 links, Tab enters it; visible Slideshow link opens /slideshow and writes slideshow-return (AC-094 mobile); /skills click navigates and re-closes (inert).
- INT-010: FAIL (partial). TopNav and listed files unreferenced; build passes; favicon.ico 200; no 404 or console errors on any of the 10 built pages. FAIL: `GET /apple-touch-icon.png` Actual=404 (no apple-touch-icon `<link>` in HTML either), Expected=still served (finding says "favicon and touch icon still serve from app/"). Cause: App Router serves only `apple-icon.png` from app/; `app/apple-touch-icon.png` is not a metadata convention, so the deleted `public/apple-touch-icon.png` was what served it. Related: AC-006 and spec line 110 say "apple-touch-icon.png in site/app/ ... Next generates link tags automatically", which is not how Next behaves for that filename. [SPEC ISSUE: AC-006 mechanism wrong for the apple touch icon; if the fix is to rename to app/apple-icon.png the AC text must change - PM/Doc-Sync]. Alternative with no spec change: Engineer restores `site/public/apple-touch-icon.png`.

Regression re-check: AC-006 favicon part still PASS; AC-009/AC-093/AC-094/AC-124 unaffected by the one-line inert change.

### Human script (what headless cannot judge)

1. Safari and Firefox desktop: from /about click Slideshow, then repeat with key 7. Expect slide 1 in full screen, no sidebar or top bar. Esc once returns to /about.
2. iPhone Safari: open the drawer, tap Slideshow. Expect slide 1 filling the window, no top bar. Close returns to the page.
3. Click "Download CV" on Home and Contact in Chrome. Expect a saved file named Leon_Wu_Resume.pdf with the new CV.
4. (Headless-verified in run 2; optional real-browser confirmation) Set dark mode, reload, navigate between pages; expect dark to stay and no light flash on reload.

### Open items

- [ ] INT-010 / AC-006 spec-issue - /apple-touch-icon.png returns 404 after deleting public copy (2026-11-02)
- [ ] AC-095 needs-signoff — Safari, Firefox, iPhone Safari check by the human (script above) (2026-11-02)
- [ ] CV download filename needs-signoff — saved name check in a real browser (2026-11-02)

---

### History: 2026-06-28 QA run (superseded)

**Date:** 2026-06-28
**Workflow:** functional-test (first-time verification)
**Overall result:** PASS (AC-006 bug fixed inline; all 10 ACs pass or conditionally pass pending browser verification)
**Build:** PASS — `npm run build` compiles cleanly, 12 routes generated
**Lint:** PASS — `npm run lint` exits with 0 errors, 0 warnings

---

### AC-001 — Persistent sidebar with wordmark, nav links, Connect block (desktop)

CONDITIONAL PASS

Code inspection confirms:
- Wordmark "Leon" present as `<Link href="/">Leon</Link>` in the desktop `<aside>` (Sidebar.tsx line 144).
- Navigation links in correct spec order: Home (/), Projects (/projects), Experience (/experience), About (/about), Skills (/skills), Contact (/contact) — `navLinks` array, Sidebar.tsx lines 8–15.
- Connect block present with LinkedIn, GitHub, Email links in correct order — `connectLinks` array, Sidebar.tsx lines 17–29.
- Desktop sidebar is `hidden md:flex` — visible only on md+ breakpoints.

Requires browser verification: actual desktop visual layout and column placement.

---

### AC-002 — Mobile sidebar collapses to hamburger menu, Connect block accessible

CONDITIONAL PASS

Code inspection confirms:
- Mobile `<header>` bar rendered with `md:hidden` class (Sidebar.tsx line 91) containing wordmark "Leon" and a hamburger button with `aria-label="Open menu"` / `aria-expanded` toggle.
- Off-canvas `<aside>` drawer slides in on hamburger click (translate-x-0 / -translate-x-full), containing `NavLinks` and `ConnectLinks` (Sidebar.tsx lines 132–140).
- `ThemeToggle` included in the mobile top bar alongside the hamburger (Sidebar.tsx line 99).
- Overlay backdrop closes the drawer on click (Sidebar.tsx lines 123–129).

Requires browser verification: actual mobile viewport rendering, drawer animation, and usability of Connect block from collapsed state.

---

### AC-003 — dark class applied to `<html>` before React hydration via blocking inline script

PASS

Blocking inline script is present in `layout.tsx` lines 19–28, injected via `dangerouslySetInnerHTML={{ __html: themeScript }}` inside `<head>` as its first child (layout.tsx line 38–39).

Script logic verified:
- Reads `localStorage.getItem('theme')`.
- Adds `dark` class if stored value is `"dark"`.
- Adds `dark` class if no stored value and `window.matchMedia('(prefers-color-scheme: dark)').matches` is true.
- Wrapped in try/catch to handle environments where localStorage is unavailable.
- Executed as synchronous IIFE — runs before React hydration.

Note: spec says "first child of the `<html>` element"; implementation places it as first child of `<head>` (which is the first child of `<html>` in the rendered DOM). In Next.js App Router there is no mechanism to place a `<script>` directly as a child of `<html>` outside `<head>` — placing it first in `<head>` achieves identical blocking behavior. The observable requirement (set `dark` class before React hydrates) is fully met.

---

### AC-004 — ThemeToggle persists to localStorage, applies on toggle

CONDITIONAL PASS

Code inspection confirms:
- `ThemeToggle` is a Client Component (`'use client'`) with no server-side rendering of localStorage (ThemeToggle.tsx line 1).
- `useState` initializer reads the current DOM class at mount time: `document.documentElement.classList.contains("dark")` (ThemeToggle.tsx lines 6–8).
- `toggle()` function (ThemeToggle.tsx lines 10–20): adds/removes `dark` class on `document.documentElement`; writes `"dark"` or `"light"` to `localStorage.setItem("theme", ...)`.
- No other component reads or writes theme state (confirmed by full grep of app/ and components/).

Requires browser verification: toggle behavior across page navigation and full page reload.

---

### AC-005 — Footer "Made by Leon · {current year}" on every page

PASS

Footer rendered in root layout `layout.tsx` lines 46–48:
```
<footer ...>
  Made by Leon · {new Date().getFullYear()}
</footer>
```
Year is computed dynamically via `new Date().getFullYear()`. Footer appears in the root layout wrapping all routes — present on every page. Semantic `<footer>` element used.

---

### AC-006 — Favicon served via app/ file convention (no manual link tags)

PASS (fixed after QA bug report)

`site/app/favicon.ico` — present. `site/app/apple-touch-icon.png` — copied from `asset/favicon_io/` after QA reported it missing. Both files now present in `site/app/`. No manual `<link>` tags in layout.tsx. Build passes with both files in place.

---

### AC-007 — Roboto via next/font, no @import url() in any CSS

PASS

- `layout.tsx` lines 2–11: `import { Roboto } from "next/font/google"` with `weight: ["400", "500", "700"]`, `subsets: ["latin"]`, `display: "swap"`, `variable: "--font-roboto"`. All four spec-required properties present.
- `globals.css` line 6: `--font-sans: var(--font-roboto)` — Roboto wired as the default sans font via CSS custom property.
- No Geist or Geist_Mono imports remain in layout.tsx (confirmed by grep).
- `grep -r "@import url(" site/ --include="*.css"` — zero results in user code (only node_modules hits, which are irrelevant).

---

### AC-008 — @variant dark registered in globals.css

PASS

`globals.css` line 3: `@variant dark (&:where(.dark, .dark *));` — exact string required by spec is present.

---

### AC-009 — All nav/toggle keyboard-navigable with visible focus states (code inspection)

CONDITIONAL PASS

Code inspection confirms focus styles on all interactive elements:
- Nav links (`Link` elements in `NavLinks`): `focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)]` (Sidebar.tsx line 44).
- Connect block links (`<a>` elements in `ConnectLinks`): `focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)]` (Sidebar.tsx line 74).
- Hamburger button: `focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)]` (Sidebar.tsx line 104).
- Mobile wordmark link: `focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)]` (Sidebar.tsx line 93).
- Desktop wordmark link: `focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)]` (Sidebar.tsx line 146).
- ThemeToggle button: `focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)]` (ThemeToggle.tsx line 27).

Requires browser verification: actual keyboard tab order, focus ring visibility at accent color `#b2ac88`, and that no focus styles are suppressed by global CSS resets.

---

### AC-010 — target="_blank" rel="noopener noreferrer" on Connect block external links

PASS

All three Connect block links in `ConnectLinks` (Sidebar.tsx lines 68–80) render `<a>` elements with:
- `target="_blank"` (line 72)
- `rel="noopener noreferrer"` (line 73)

URLs verified:
- LinkedIn: `https://www.linkedin.com/in/leon-wu-tsan-yu/` — matches spec.
- GitHub: `https://github.com/LeonWu813` — matches spec.
- Email: `mailto:leon.wu.tsan.yu@gmail.com` — matches spec.

---

### Additional Shared Convention Checks

- No `output: 'export'` in `next.config.ts`: PASS
- No shadcn/ui: PASS (sidebar built from scratch with Tailwind + useState)
- `'use client'` only in Sidebar.tsx and ThemeToggle.tsx; no `'use client'` in any app/ file: PASS
- Semantic HTML — `<nav>`, `<aside>`, `<main>`, `<footer>`, `<header>` all present: PASS
- `dynamicParams = false` exported from `[slug]/page.tsx`: PASS
- `params` declared as `Promise<{ slug: string }>` and awaited: PASS
- Path alias `@/` used for cross-directory imports (no `../../` in components): PASS
- No spec template comments (`<!-- ... -->`) in spec.md: PASS

---

### Overall Verdict

FAIL — one implementation bug found.

**Failing AC:** AC-006
**Bug:** `apple-touch-icon.png` not copied to `site/app/`. Source: `asset/favicon_io/apple-touch-icon.png`. Fix: copy file to `site/app/apple-touch-icon.png`.

**Conditionally passing ACs** (require browser verification): AC-001, AC-002, AC-004, AC-009.
All other ACs: PASS.
