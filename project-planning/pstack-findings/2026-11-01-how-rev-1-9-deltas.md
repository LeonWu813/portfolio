# /pstack:how: PRD rev 1.9 deltas against the current site code (6ca5be9)

Run by: coordinator, 2026-11-01, after PM applied PRD rev 1.9 (6ca5be9) tagged [SUBSTANTIVE] [ARCHITECTURAL], before the Tech Lead change review. Covers only what rev 1.9 adds; the shell, slideshow escape and overlay basics are in `2026-11-01-how-shell-slideshow-overlay.md` and the Tech Lead's rev 1.7 + 1.8 review.
Status: findings only. Nothing has been applied. The Tech Lead accepts or rejects each one.

## Overview

None of the rev 1.7, 1.8 or 1.9 behaviour exists in `site/` yet: no `site/app/slideshow/`, no 7th nav item, no `<dialog>` (grep for `dialog|repeat|fullscreen` in `site/app` and `site/components` finds only `no-repeat` in globals.css:79), no overlay component, no ProjectDay images or Images section in `projectday.ts`. Every delta adds new code. What exists:
- Sidebar number keys: one window `keydown` handler, `site/components/Sidebar.tsx:177-187`.
- `SectionItem = string | { image: string }` (`site/data/projects-data.ts:12`); `featureImageAlt?` already on `ProjectEntry` (line 30).
- `site/app/projects/[slug]/page.tsx`: feature image uses `featureImageAlt ?? ""` (132); both section-image sites hard-code `alt=""` (160, 169).
- "Tsan-Yu (Leon) Wu" in 13 lines across 5 files (section 5).

Stack: Next 16.2.9, React 19.2.4, Tailwind 4.3.1. `next.config.ts` is empty, so App Router Strict Mode is on in dev; Cache Components (`<Activity>` route preservation) is off.

## 1. CONV-006 as amended: the "Press F" hint, sessionStorage and the full-screen exit

The hint no longer depends on origin (prd.md:925, 4.11 Opening :595, AC-096 :612); the sessionStorage entry now decides only where leaving returns to.

Hint rule: slide 1 showing, `document.fullscreenElement === null`, `document.fullscreenEnabled` true, and "the opening full-screen request has settled".

MOD-012 cannot see that request: it is made in MOD-001's handlers (Slideshow link click; key `7` at Sidebar.tsx:183, which today only calls `router.push`), and the promise is caught and dropped there (TL Q2, status.md:410). On an opening from the site, `/slideshow` usually mounts while the request is pending (both `router.push` and the full-screen transition are async). So:
- Showing the hint at mount while windowed flashes it until `fullscreenchange` arrives (macOS Safari's animation may delay that by a few hundred ms; unverified). PRD-compliant ("hides once full screen starts") but not the design intent.
- Waiting for failure: a refusal fires `fullscreenerror` on `document`; if it happens before MOD-012 subscribes, MOD-012 never sees it.
- CONV-006 does not say how MOD-012 learns the request has settled (Q1).

The hint button (pointer-only, F is its keyboard equivalent; click calls `requestFullscreen`; hides once full screen starts or right after a refused click):
- Must stop its own event reaching the slide-advance handler. If MOD-012 advances on `pointerup`/`pointerdown` (likely given UX 14's pointerType handling), stopping `click` alone is not enough; stop the same event type the root listens to.
- Chrome focuses a clicked `<button>`, Safari does not. If it stays mounted and focused, a later Space/Enter would activate it natively as well as reaching the slideshow keydown. Use `tabIndex={-1}` plus `onPointerDown={e => e.preventDefault()}`, or unmount on click ("disappears for good" already implies unmounting).
- Request on `document.documentElement`, like MOD-001, so `fullscreenElement` means the same on every entry path.
- Whether `document.fullscreenEnabled` is falsy on iPhone Safari is unverified; the rule relies on it.

Can the hint's own request plus a later exit trigger "leave" wrongly? No, under the TL's rule that only in→out counts as leaving (status.md:411). Direct visit → hint click (in) → Esc (out) → leave to "/" is what PRD 4.11 Controls (:606) and AC-099 require. Cases that would be wrong:
- Missed entry: if "was in full screen" starts from the render value (always false in static prerender) and MOD-001's request resolves between render and the effect subscribing, the "in" is never seen; a later Esc reads as out→out and is ignored. The visitor stays on a windowed slideshow (and the hint reappears on slide 1), breaking AC-099. Fix: read `document.fullscreenElement` at subscribe time, e.g. `useSyncExternalStore` with a server snapshot of `false`.
- Double navigation (close button `exitFullscreen()` then navigate, plus the listener's in→out): already covered by the TL's guard; the hint adds no path.
- A refused hint request fires `fullscreenerror`, not `fullscreenchange`, so it cannot trigger leaving.

sessionStorage under React 19 dev double-mount: the TL said to cache the read value in a module-level variable (status.md:411). Module scope survives client-side navigations until a full reload. A visitor who opens from /about, leaves, then reaches /slideshow again in the same document via an in-site start link `<Link>` (meant to count as a direct visit) would inherit `{path:"/about"}`. The 10 s `t` check only limits the window. A `useRef` guard on the mounted instance avoids this (Strict Mode's extra setup/cleanup keeps the fiber's refs; React docs, not run here). Read in the effect (not render: static prerender, no sessionStorage on the server), store in the ref, remove the key once. The double mount can now only affect the return path.

## 2. Number keys while a `dialog[open]` exists (CONV-007, AC-129)

- Sidebar.tsx:178-184 checks only INPUT/TEXTAREA/contentEditable targets (179-180) and meta/ctrl/alt (181), then pushes any matching key (182-183).
- Missing: the `/slideshow` bail (CONV-007, AC-094) and the `dialog[open]` bail, both before line 182, e.g. `if (document.querySelector("dialog[open]")) return;`.
- `showModal()` makes the page inert and keeps focus inside, but a keydown still bubbles from the focused element in the dialog to `document` and `window`; inert does not stop window listeners, so Sidebar's handler still runs.
- Listener order matters only if the overlay closes on the key itself, or synchronously before the event reaches `window`. Esc closes via the dialog's `cancel`, the keydown's default action after bubbling, and the TL design routes the close through async `history.back()`, so `dialog[open]` is still present when the window listener sees a digit. Digits do not close the overlay (AC-129). React's handlers sit on the root container (Next hydrates `document`), before `window`: if MOD-003 ever added an `onKeyDown` calling `dialog.close()`, `open` could be gone when the window listener runs and the digit would navigate (React flushes discrete updates in a microtask; unverified whether a state-driven close would also run first). Rule for MOD-003: never close the dialog synchronously from a keydown other than via `cancel`; or Sidebar also checks `e.defaultPrevented`.
- `dialog[open]` also matches non-modal `show()` dialogs; none exist today.
- Not active: with `cacheComponents` on, Next keeps up to 3 routes hidden with `<Activity>` (display:none, DOM kept; `docs/01-app/02-guides/preserving-ui-state.md:17-19, 76-80`); a hidden page holding an open `<dialog>` would disable number keys. Does not apply with the current config.

## 3. SectionItem `alt?`, `featureImageAlt` on Records 1 and 3, and the Images height cap (AC-127, AC-128)

Content model and records:
- `projects-data.ts:12` becomes `string | { image: string; alt?: string }` (PRD :648).
- `siteplus.ts:9` featureImage without featureImageAlt; section items 43-44.
- `tabvault.ts:8` featureImage without featureImageAlt; section items 43-44.
- `multi-agent-system.ts:38-41` already has featureImageAlt and no section images: no MOD-005 change.
- `projectday.ts`: no featureImage or Images section yet (rev 1.7 MOD-011 work).

Template (`[slug]/page.tsx`):
- `groupItems` (5-28) keeps only `src`: `ItemGroup.srcs: string[]` (7) and the cast `(items[i] as { image: string }).image` (21). It must carry `{ src, alt }`: change the type at 7, the push at 21, the object at 24.
- Render site A (156-162, single image), `alt=""` at 160; render site B (164-173, 2-column grid), `alt=""` at 169. Both become the overlay client component (TL Q6) with `alt={item.alt ?? ""}` while the type is optional.
- Feature image (128-141): no template change; Records 1 and 3 fill `featureImageAlt`.

Order under CONV-005: records import types from `projects-data`; the excess-property check on the literal in a `ProjectEntry`-annotated const rejects `alt` on `{ image }` until the type has it. So MOD-003 (type, groupItems, both render sites) first, then MOD-004, MOD-006, MOD-011 fill `alt`. `featureImageAlt` is already typed, so MOD-004/MOD-006 can add it independently. AC-127's "no empty alt" holds only once every record is filled; making `alt` required afterwards is an optional MOD-003 follow-up (Q3).

Height cap at 1280x800 (arithmetic from classes, not measured):

| Element | Width |
|---|---|
| Viewport | 1280 |
| Sidebar offset `md:ml-64` (layout.tsx:44) | −256 |
| ProjectList `w-64 xl:w-72` (ProjectList.tsx:11; xl starts at 1280, so 288) | −288 |
| Panel | 736 |
| Article `max-w-4xl px-8` (page.tsx:85) | 672 content |
| One grid column (`sm:grid-cols-2 gap-3`) | 330 |

Heights in a column: `tabvault-mobile.jpeg` (1170x2532) about 714 px, over 640, the only current violation; `tabvault-plugin.png` (936x994) about 350; SitePlus+ 1920x996 about 171; ProjectDay singles (0.46:1, not yet present) about 717, so the same cap covers AC-111. Classic scrollbars shave ~15 px, which only lowers heights.

The cap belongs in the template (MOD-003). It must not be `w-full` + `object-contain` inside a taller box: the TL overlay design needs the `<img>` box to be the visible image (status.md:415). E.g. `max-h-[640px] w-auto max-w-full h-auto` with border/rounding on the img; or `max-h-[80vh]`. The PRD only fixes the 1280x800 number; the TL picks.

Ownership (`module_scope.py check` from the repo root, exit 0):

| Path | Owner |
|---|---|
| `site/data/projects-data.ts` | mod-projects-grid (MOD-003) |
| `site/app/projects/[slug]/page.tsx` | mod-projects-grid |
| `site/app/projects/[slug]/ZoomableImage.tsx` (planned) | mod-projects-grid |
| `site/data/projects/siteplus.ts` | mod-project-marketing (MOD-004) |
| `site/data/projects/tabvault.ts` | mod-project-tabvault (MOD-006) |
| `site/public/tabvault-mobile.jpeg` | mod-project-tabvault (pattern `site/public/tabvault-*`, status.md:153) |
| `site/data/projects/projectday.ts` | mod-project-projectday (MOD-011) |
| `site/data/projects/multi-agent-system.ts` | mod-project-multi-agent (MOD-005) |

The PM entry says "MOD-006 ... AC-128 shrinks tabvault-mobile.jpeg"; PRD 4.2 (:236) says the screenshot "shows smaller", a rendering change. Whether MOD-006 must edit the file is ambiguous (Q4).

## 4. Idle pointer (AC-130) and held-key repeats (AC-131) in a Next 16 client component

- Key repeat: `if (e.repeat) return;` at the top of MOD-012's keydown (native and React synthetic both expose `repeat`), before the F, M, Home, Esc and number branches so a held F or M acts once. Sidebar's handler bails on /slideshow, so it needs nothing.
- Idle pointer: full-screen state from `fullscreenchange` (`useSyncExternalStore`, server snapshot `false`, keeps prerender safe for AC-107); a 3 s timer reset on `pointermove` with `pointerType === "mouse"` (touch and pen never trigger it, P-3); `data-idle` on the slideshow root gating `cursor:none` and card hover styles.
- Tailwind v4 already wraps `hover:` in `@media (hover: hover)` (confirmed in `node_modules/tailwindcss/dist/lib.js`), which covers touch, but `:hover` still matches under a hidden cursor, so the idle state needs its own gate (a custom variant or `[data-idle] &` selectors; globals.css:3 already uses `@variant dark`).
- Browser gotcha (known Chrome behaviour, unverified here): Chrome can dispatch a zero-movement synthetic `mousemove`/`pointermove` when the layout under a still pointer changes; slides change instantly, so the pointer could reappear on every slide change. Ignore events with `movementX` and `movementY` both 0, or unchanged `clientX`/`clientY`.
- Next 16 / React 19.2 specifics:
  - Strict Mode (dev) runs setup, cleanup, setup. Clear timers and listeners in cleanup, or two key handlers advance two slides per key in dev, which looks like the AC-131 bug but is not (`docs/01-app/03-api-reference/05-config/01-next-config-js/reactStrictMode.md:8`).
  - `useEffectEvent` is available in React 19.2 (`docs/01-app/02-guides/upgrading/version-16.md:399-405`); optional, lets window listeners read current state without re-subscribing.
  - `<Activity>` only with `cacheComponents: true` (off); even then effects clean up (`migrating-to-cache-components.md:185`; `preserving-ui-state.md`), so AC-130/131 are unaffected.
  - React Compiler is not enabled.

## 5. The name rule (AC-125, "Leon Wu")

`grep -rnI "Tsan-Yu\|Tsan Yu" site --exclude-dir=node_modules --exclude-dir=.next`; no other hits:

| file:line | Text | Owner (module_scope verified) |
|---|---|---|
| site/app/layout.tsx:16 | root description "Portfolio of Tsan-Yu (Leon) Wu — …" | mod-site-shell (MOD-001) |
| site/app/about/page.tsx:6, :10, :22 | description, OG, Twitter | mod-about (MOD-008) |
| site/app/contact/page.tsx:6, :9, :20 | description, OG, Twitter | mod-contact (MOD-010) |
| site/app/experience/page.tsx:7, :10, :19 | description, OG, Twitter (full text replaced by AC-121) | mod-experience (MOD-007) |
| site/app/skills/page.tsx:7, :11, :23 | description, OG, Twitter (full text replaced by AC-122) | mod-skills (MOD-009) |

Unchanged per AC-125: "tsan-yu" in the LinkedIn URL (Sidebar.tsx:77, app/page.tsx:52, contact/page.tsx:57, :62), the email "leon.wu.tsan.yu" (Sidebar.tsx:79, contact/page.tsx:45, :48), `site/public/Leon_cv.pdf` (binary, outside the rule). The visible name is already "Leon Wu" (Sidebar.tsx:158, :163, :197, every `<title>`). Outside `site/`, prd.md:38 still says "Tsan-Yu Wu (Leon)" in the Purpose prose; out of scope for code.

## Where things live

- `site/components/Sidebar.tsx` (MOD-001): key handler 177-187 (add `/slideshow` and `dialog[open]` bails before 182); `7` and link-click full-screen requests (not present); name already correct.
- `site/app/layout.tsx:16` (MOD-001): root description name.
- `site/data/projects-data.ts:12` (MOD-003): `SectionItem.alt?`.
- `site/app/projects/[slug]/page.tsx` (MOD-003): groupItems 5-28; render sites 156-162 and 164-173 (alt, height cap, overlay); feature image 128-141 unchanged.
- `site/data/projects/siteplus.ts:9, 43-44` (MOD-004), `tabvault.ts:8, 43-44` (MOD-006): featureImageAlt and item alt.
- `site/data/projects/projectday.ts` (MOD-011): feature image, Images section, alts, still to write.
- `site/app/slideshow/` (MOD-012, not created): hint, F key, fullscreenchange leave logic, sessionStorage read, `e.repeat`, idle pointer.
- Next docs used: reactStrictMode.md, preserving-ui-state.md, migrating-to-cache-components.md, upgrading/version-16.md, appDir.md.

## Gotchas

1. CONV-006's "once the opening request has settled" has no channel to MOD-012: the request and promise live in MOD-001. Showing at mount flashes; waiting for `fullscreenerror` can miss a fast refusal.
2. A module-level cache of the sessionStorage value outlives the component across client navigations; a later in-site start link inherits a stale return path. A `useRef` survives Strict Mode without that leak.
3. Starting "was in full screen" from the render/prerender value can miss MOD-001's entry and break AC-099. Read at subscribe time.
4. The hint button must stop the exact event type the slide-advance uses (pointerup/pointerdown, not only click) and must not keep focus (Chrome focuses clicked buttons).
5. AC-129 holds only while digits and the window listener see `dialog[open]`; any synchronous `dialog.close()` from a keydown in MOD-003 undoes it.
6. The height cap must shrink the `<img>` box itself (`max-h` + `w-auto`), not letterbox inside a `w-full` box, or the overlay's measured rectangle is wrong.
7. Today only `tabvault-mobile.jpeg` (~714 px) breaks AC-128; the ProjectDay singles will too unless the template cap lands first.
8. A record adding `alt` before MOD-003's type change fails `tsc` (excess property). MOD-003 first.
9. In dev, a missing effect cleanup in MOD-012 doubles key handlers, which looks like the AC-131 bug but is Strict Mode.
10. Chrome's zero-movement synthetic mousemove on layout change (unverified) could re-show the pointer on every instant slide change.
11. `document.fullscreenEnabled` is false in an iframe without `allow="fullscreen"` (some preview tools); the hint and full-screen entry silently disappear. Expected; QA should test top-level.

## Open questions for the Tech Lead

1. How MOD-012 knows the opening request has settled (CONV-006): (a) MOD-001 writes the result into the sessionStorage value (e.g. `fs: "pending"`, updated on resolve/reject), MOD-012 reads it plus `fullscreenchange`/`fullscreenerror` (extends the contract in both specs); (b) show the hint only after a settle window with no `fullscreenchange` (~500 ms; Safari timing unverified; heuristic, no contract change); (c) show at mount and accept a brief flash (PRD-compliant).
2. StrictMode-safe one-time read: (a) `useRef` guard on the mounted instance; (b) keep the module variable but clear it on leave and when the key is absent and `t` is over 10 s; (c) module variable as written.
3. `SectionItem.alt` once every record is filled: (a) leave optional, AC-127 enforced by QA; (b) MOD-003 makes it required after MOD-004/006/011 land (one more MOD-003 run).
4. AC-128 and `tabvault-mobile.jpeg`: (a) template CSS cap only (MOD-003), MOD-006 has no file change and "shrinks" means "shows smaller"; (b) MOD-006 also re-encodes the file smaller.
5. Cap unit: (a) `max-h-[640px]`; (b) `max-h-[80vh]`; (c) `min(640px, 80vh)`.
6. The hint's full-screen target: (a) `document.documentElement`, like MOD-001 (recommended; put it in CONV-006); (b) the slideshow root.
7. AC-129 robustness: (a) the `dialog[open]` check plus a MOD-003 rule (no synchronous `close()` from keydown; close only via `cancel` and `history.back()`); (b) also have Sidebar ignore `e.defaultPrevented`, with the overlay calling `preventDefault` on keys it handles.
8. Pointer-only hint and accessibility: (a) `<button tabIndex={-1}>` with a visible label (screen readers can reach it; F announced in its text); (b) `aria-hidden` plus `tabIndex={-1}` (lint may flag a focusable aria-hidden element).
