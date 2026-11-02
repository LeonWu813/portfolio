**Last Synced from PRD Revision**: 1.10 | **Last Updated**: 2026-11-01

---

## Module ID & Name

MOD-012: Interview Slideshow

## Purpose

A full-screen presentation Leon runs from his own site in interviews for engineering intern and junior roles. Three slides about Leon lead to a menu of four projects. Leon picks the project that fits the interview. After its numbers, intro, and role and stack slides, every project tells one story in order: the problem, the solution Leon built, the key decision, the hardest part, and the lesson (TabVault has no numbers slide and goes from its solution straight to its hardest part, which ends the track). After that project, the menu comes back, so he can show another one or stop.

Route: /slideshow. Source Path: site/app/slideshow/.

## Context

**Business problem:** From PRD Goal 5: "Give Leon a ready-to-present interview deck on the site, one click or one key press from any page." From PRD section 4.11, Purpose: a full-screen presentation Leon runs from his own site in interviews for engineering intern and junior roles.

**User stories:** The PRD does not define US-IDs for this project. The following page-level requirements from PRD section 4.11 govern this module (full text under Requirements).

**Non-goals (from PRD section 8 — Out of Scope):**
- Slideshow extras: No presenter view, no speaker notes on screen, no PDF export or print layout, no slide editing in the browser, no slide number in the URL, no autoplay, no theme switch inside the slideshow, no intro line tailored from the URL, no backup slides, no Thank-you slide, and no installable offline copy (the deck works offline only after it has loaded).
- Turning keyboard shortcuts off: No setting to turn off or remap the single-key shortcuts: the site's `1`–`7` (section 6) and the slideshow's `F`, `M` and number keys (section 4.11). Known accessibility limitation, accepted by Leon in revision 1.10: these keys do not fully meet WCAG 2.1.4 (Character Key Shortcuts), so a speech-input user may trigger one by speaking a word.
- Internationalization (i18n): English only.

## Related User Stories

- No formal US-IDs defined in PRD revision 1.10. Requirements are drawn directly from PRD sections 4.11 and 9.

## Requirements

**Approved design files (read these; they are the visual and interaction design).** Directory `project-planning/design/ux-team/`, at commit ac1a07d (status.md Decisions, "Slideshow design approval (rev 1.9)", 2026-11-01; read the files at that commit, they are unchanged on main at the time of this sync): `slideshow-brief.md`, `slideshow-research.md`, `slideshow-ux.md`, `slideshow-ui.md`, `slideshow-motion.md`, `slideshow-mock.html`, the 40 `slideshow-mock-*.png` files, `reviews/slideshow-review-1.md` and `reviews/slideshow-review-2.md`. Where the files and this spec differ, this spec (the PRD text) wins. Design Lead review 2 section 3 corrects the files: UI 6.4 (the F hint is sized in em from the frame, not px) and UI 7.4 (the photos are about 51% larger, not 23%); text-wrap fallbacks in Firefox and older Safari are not regressions. `slideshow-ui.md` section 14 (the sidebar Slideshow icon) is an input to MOD-001, not to this module.

**Deck source (read this; word-for-word source of every slide's text):** `asset/content/interview-deck.md` at commit ac1a07d (`git show ac1a07d:asset/content/interview-deck.md`).

**PRD section 4.11 (copied verbatim):**

**Route:** /slideshow

**Source file:** `asset/content/interview-deck.md` (as of commit ac1a07d). It is the word-for-word source of every slide's text.

**Design:** The slideshow's visual and interaction design comes from the design team, not from a preview file. The UX Researcher, UX Designer, UI Designer and Motion Designer write it under `project-planning/design/ux-team/`. The Design Lead reviews it in `project-planning/design/ux-team/reviews/slideshow-review-<n>.md`, and Leon approves it after a PASS. The approved design is the set of files, at the commit, named in Leon's slideshow design approval in `status.md` Decisions; engineers and QA read it from those files. It sets each slide type's layout, text sizes, spacing, where the project name and position sit, the close button, the hints, focus styles, and the phone layout. It works inside this section: it does not change the on-screen text, the slides or their order, the controls, or the acceptance criteria below. A design that needs any of those changed needs a PRD change first. `asset/content/interview-deck-preview.html` was a content review aid; it is not the design reference and not site code.

**Slides:**
- About me: 1 Hi, I'm Leon; 2 Timeline; 3 Life in Seattle.
- Hidden job slides: 2a Exascend, 2b GoFreight, reached only from slide 2 (see Hidden job slides).
- Menu: 4 Project menu.
- Project tracks, in this order on the menu: A Multi-Agent System (A1 to A8), B ProjectDay (B1 to B8), C SitePlus+ (C1 to C8), D TabVault (D1 to D5).

Slide labels in the source file (such as "A3: Role and stack") do not show on screen.

**On-screen text:** Every slide shows its Title and the copy fields under it in the source file (Titles, Timeline, Subtitle, Big numbers, Cards, Footer, Roles, Bullets, Role, Stack, Captions) word for word. Text may wrap or be split across lines (for example, a timeline entry's dates, role and place on separate lines), but words, numbers and punctuation do not change. Speaker notes, editor's notes, slide labels and "Visual:" lines never show. Two slides draw a small diagram from text, defined here (the arrangement follows the approved design):
- A2: boxes reading "Requirements", "PM", "Doc-Sync", "Engineer ⇄ QA", "Tech Lead", "Shipped", in this order, joined by arrows; with them the line "Retrospective feeds improvements back into the system" and a bar reading "I approve the key handoffs". The bar connects only to the handoffs into PM, into Doc-Sync and into Shipped. The Retrospective line stands apart from the row of boxes and feeds the system as a whole, not one box.
- B6: chips reading "Upload", "S3", "MediaConvert", "CloudFront", in this order, joined by arrows, shown with the bullets.

The only other text on screen: the key number on each menu card, the project name and position on project slides (see Look), the menu hint (see Menu), and the full-screen hint (see Opening). The field names in the source file (such as "Role" and "Stack") do not show. Where a timeline entry on slide 2 is split across lines, the colon after its dates and the comma after its role fall at the line breaks and are not drawn; no other punctuation changes.

**Slide images:**

| Slide | Image | Alt text |
|---|---|---|
| 3 | Snowboarding photo (`site/public/IMG_6875.JPG`, or a smaller copy), caption "Snowboarding" | Leon on a snowboard on a snowy slope, giving a peace sign, with forested mountains behind. |
| 3 | Bouldering photo (`site/public/4D0BDA8A-B273-40DC-BD3D-3098AF6BBB73.JPG`, or a smaller copy), caption "Bouldering" | Leon on an indoor bouldering wall, reaching for orange holds. |
| B2 | The ProjectDay three-screen image `/projectday-screens.webp` (MOD-011 asset, section 4.6) | Record 4's `featureImageAlt` |
| B5 | Three single ProjectDay screenshots side by side, left to right: Route (`/projectday-route.webp`), Route beta (`/projectday-route-beta.webp`), Profile (`/projectday-profile.webp`), MOD-011 files | Route: "ProjectDay route screen showing a V0 route at CORNER gym with its photo, send and attempt counts, and a Log climb button." Route beta and Profile: the alt texts in section 4.6. |
| C2 | `/siteplusplus-home.jpg` (MOD-004 asset) | Screenshot of the SitePlus+ home dashboard. |
| C5 | `/siteplusplus-reports.jpeg` (MOD-004 asset) | Screenshot of the SitePlus+ reports page. |
| D1 | `/tabvault-home.png` (MOD-006 asset) | Screenshot of the TabVault web app home screen. |

**Hidden job slides:** On slide 2, the two work cards (GoFreight, Exascend) show only their timeline text, with no "Details" cue and no key. A click or tap on a card, or Enter or Space on a focused card, opens that job's slide; a click or tap anywhere else on slide 2 works as listed under Controls (a mouse click goes to slide 3). On slide 2 the keys `1` (GoFreight) and `2` (Exascend) also open the job slides, as a shortcut that nothing on screen shows. On a job slide, Next or Previous (any control) returns to slide 2. Next and Previous never reach a job slide from any other slide.

**Menu:**
- The title always reads "Pick a project".
- Four cards, in the order listed under Slides, each with its key number (1 to 4), name and one line from the source file. A click or tap on a card, Enter or Space on a focused card, or its number key starts that project at its first slide. The footer line shows as plain text, not as links.
- Next on the menu starts the project pre-selected by a start link, if there is one and it has not been shown yet. A project counts as shown once any of its slides has been displayed, by any route. Otherwise Next shows the hint "Pick a project: press 1 to 4 or click a card" for about 2 seconds and stays on the menu. Previous on the menu goes to slide 3.
- From a project: Next on its last slide, Previous on its first slide, or M on any slide returns to the menu.

**Start link:** `/slideshow?project=<name>`, where `<name>` is `multi-agent`, `projectday`, `siteplus` or `tabvault`, still opens on slide 1. On the menu, that project's card is highlighted and Next starts it, until that project has been shown (see Menu); from then on the card is no longer highlighted. Any other value is ignored.

**Opening:** Selecting the Slideshow nav item or pressing `7` puts the browser in full screen, where the browser supports it, and shows slide 1. Where full screen is not available (for example on iPhone), the slideshow fills the browser window instead. A direct visit to /slideshow (a typed or shared link, a start link, or a reload) fills the browser window. Whenever slide 1 shows in a browser window on a browser that supports full screen, the hint "Press F for full screen" shows: after a direct visit it shows with slide 1, without waiting, and after an opening from the site whose full-screen request the browser refused it shows within about 1.5 seconds. When the site's full-screen request succeeds, the hint never shows, not even for a moment. It never shows in full screen or on a browser without full-screen support. It goes away for good on the first key press, click or tap, or when full screen starts. Pressing `F`, or clicking or tapping the hint, enters full screen; a click or tap on the hint never changes the slide. The hint is not a Tab stop: `F` is its keyboard equivalent. In full screen, `F` does nothing.

**Controls:**
- Next slide: Space, Right arrow, Down arrow, Page Down, Enter; a mouse click anywhere on the screen, including the area around the 16:9 frame; on a touchscreen, a tap on the right half of the screen or a swipe left or up.
- Previous slide: Shift+Space, Left arrow, Up arrow, Page Up; on a touchscreen, a tap on the left half of the screen or a swipe right or down. A mouse click never goes back.
- Space or Enter on a focused card opens it, and Space or Enter on the focused close button leaves the slideshow, instead of moving to another slide.
- A click or tap on a menu card or a slide-2 work card opens it, a click or tap on the close button leaves the slideshow, and a click or tap on the full-screen hint enters full screen, instead of moving to another slide.
- A pen works like touch. Two-finger gestures never change slides, so pinch-zoom keeps working on a phone.
- A key held down acts once: its automatic repeats do nothing.
- Number keys: on slide 2, `1` and `2` open the job slides; on the menu, `1` to `4` start the projects; on every other slide they do nothing.
- M goes to the menu from any slide. Home goes to slide 1. Previous on slide 1 does nothing.
- Leaving: Esc, or the close button in a corner of the screen, returns to the page the slideshow was opened from (Home after a direct visit). A single Esc press does this even in full screen. Leaving full screen any other way also returns to that page.

**Look:** Each slide is a 16:9 frame, scaled to the largest size that fits the screen, with a plain background around it. Layouts follow the approved design (see Design). The slideshow uses the site's palette and Roboto, and follows the site's current light or dark theme. Slides change instantly, with no animation. On project slides, the project name and the position (for example "ProjectDay" and "3 / 8") show where the approved design places them. The about, job and menu slides show neither. In full screen, the mouse pointer hides after 3 seconds without movement, and card hover styles do not show while it is hidden; moving the mouse shows it again. It never hides in a browser window or for touch.

**CONV-006 (PRD section 9, copied verbatim) — MOD-012's side is the read-once, the leaving rule and the hint rule:**

- CONV-006: Slideshow entry contract between MOD-001 and MOD-012. When the site opens the slideshow (the Slideshow nav link or key `7`), MOD-001, in the same event handler and in this order: writes `sessionStorage["slideshow-return"] = JSON.stringify({ path: location.pathname, t: Date.now(), fs })`, where `fs` is `true` when it is about to call `document.documentElement.requestFullscreen()` in the same handler (that is, when `document.fullscreenEnabled`), otherwise `false`; calls `document.documentElement.requestFullscreen()` if `document.fullscreenEnabled`, ignoring a rejection; and navigates client-side to `/slideshow`. MOD-012 reads and removes that key once on first mount. A value whose `path` starts with "/" and is not "/slideshow", and whose `t` is at most 10 seconds old, means "opened from the site": leaving returns to `path` with `router.replace`. Anything else means a direct visit: leaving goes to "/". A value without `fs` reads as `fs: false` (no request made). MOD-012 shows the "Press F for full screen" hint only while slide 1 is in a browser window and `document.fullscreenEnabled` is true. After an opening from the site with `fs: true`, it waits until full screen starts (the hint then never shows) or about 1.5 seconds pass with the browser still windowed. On any other opening it shows the hint at once, after its entrance delay. Every full-screen request the slideshow makes (`F` and the hint) targets `document.documentElement`. (Tech Lead Reviews, 2026-11-01 change review rev 1.7 + 1.8; hint rule changed by Leon's design decision L-2; `fs` field and hint timing from the 2026-11-01 change review rev 1.9, D1 (a) and Q6)
- CONV-007 (PRD section 9, copied verbatim): The shell on /slideshow. On `/slideshow` the site shell renders nothing: Sidebar returns `null`, its number-key handler does nothing, and no shell image is requested (no `/head.png`, no `/Subject.png`, verified in DevTools Network). MOD-001 moves or guards the `main::after` decoration so it is not generated there. The slideshow root is a fixed full-viewport layer above the shell, owned by MOD-012. Sidebar's number-key handler also does nothing while a `dialog[open]` exists, and in-page overlays are native `<dialog>` elements opened with `showModal()`. (Tech Lead Reviews, 2026-11-01 change review rev 1.7 + 1.8; T1 (b), T3 (a), T6)

**Technical limits for the design team (Tech Lead, change review rev 1.7 + 1.8, 0051840; the design files were written inside these limits and the engineer builds inside them):**
1. One static route, /slideshow. There is no URL per slide; the only parameter is `?project=`. Slides change instantly with no transition. Motion is allowed only for the hints and focus, and it must respect `prefers-reduced-motion`.
2. No site chrome appears: no sidebar, top bar, theme toggle, profile photo or corner decoration. The slideshow is its own full-viewport layer on an opaque `--bg` background.
3. The slideshow follows the active theme through the existing CSS variables only. There are no theme-specific images, and all text meets AA in both themes.
4. Full screen is optional, and the design must work the same in a browser window of any aspect ratio. iPhone Safari never goes full screen.
5. While a browser enters full screen, it shows its own "Press Esc to exit full screen" banner at the top center, and Safari reveals its menu bar at the top edge. Keep the "Press F for full screen" hint and the close button away from the top center and the very top edge.
6. Esc in full screen never reaches the page. Leaving is handled through the browser's full-screen exit, so the design must not depend on an Esc animation.
7. Every size is in frame units: design on one 16:9 artboard that scales uniformly. AC-102's minimums are fractions of the frame height: titles 7%, bullets, Titles, Roles and Role 4.2%, everything else 2.4%. At 375x667 portrait, the frame is 375x211 px, so the minimums come out at about 14.8, 8.9 and 5.1 px (see T4).
8. Place the close button relative to the screen, not the frame, so it does not shrink with the frame. It must be at least 24x24 CSS px; 44 px is preferred for touch. It needs a visible focus style. Cards also need visible focus styles.
9. State explicitly whether a click or tap on the background around the frame counts as "on a slide". The PRD does not say. (Answered by the PRD: AC-098, a click on the area outside the 16:9 frame behaves exactly like a click on the slide.)
10. Images: only the files in PRD 4.11, each shown whole (`object-fit: contain`, no cropping). Aspect ratios: SitePlus+ home 1.92:1, SitePlus+ reports 1.93:1, TabVault home 1.65:1, both Seattle photos 0.75:1 (portrait), ProjectDay single screens 0.46:1, the three-screen image about 1.5:1. No new decorative images or icon files: draw icons and diagrams (A2, B6) with inline SVG or CSS. Any new image counts against the 3 MB.
11. Use only Roboto 400, 500 and 700, with no italic. These are the only font files the site loads, and the deck must work offline after it loads.
12. Screen readers announce the slide title on every change, and the position on project slides, through a visually hidden live region. Nothing visible is needed for this.
13. The design files are inputs. Engineers implement them only in `site/app/slideshow/` (MOD-012). Reusing a site component such as the tag chip means rebuilding its look inside MOD-012, not importing another module's component.

**Engineering rules (Tech Lead change review rev 1.7 + 1.8, 0051840, and rev 1.9, b8395f1):**
- Only the slideshow route changes the shell's absence: /slideshow stays inside the single root layout. The slideshow root is a `fixed inset-0` layer with an opaque `var(--bg)` background and a z-index above the shell's z-40 (T1 (b)).
- /slideshow is static (AC-107): read `?project=` on the client with `useSearchParams`, inside `<Suspense>`. Never read the page `searchParams` prop (it would make the route dynamic).
- Images: plain `<img>`, every slide image rendered eagerly at mount (hidden off-screen, or held with `new Image()`); slide state lives in React state, not the URL; do not use `next/dynamic` for slides; do not use `next/image` (it loads lazily and serves a different `srcset` candidate after a resize or rotation, which fails offline). The extra `no-img-element` warnings are accepted; lint stays at 0 errors. Only Roboto 400, 500 and 700 are loaded, so slides use no other weights and no italics.
- Image files: MOD-012 references the existing public URLs (`/IMG_6875.JPG`, `/4D0BDA8A-B273-40DC-BD3D-3098AF6BBB73.JPG`, `/siteplusplus-home.jpg`, `/siteplusplus-reports.jpeg`, `/tabvault-home.png`) and MOD-011's files (`/projectday-screens.webp`, `/projectday-route.webp`, `/projectday-route-beta.webp`, `/projectday-profile.webp`). If a copy is ever needed, it goes in `site/app/slideshow/images/` as a static import, not in `site/public/slideshow-*`.
- Byte budget (AC-106): the five existing slide images total 1,844,955 bytes; MOD-011's four files stay at or under 800,000 bytes together. The Seattle photos stay as they are. MOD-012's self-check adds up the real bytes from DevTools Network with the cache disabled.
- Full screen, inline (Q2, rev 1.7): MOD-012 calls `document.documentElement.requestFullscreen()` in its own `F` handler (and the hint's click), only if `document.fullscreenEnabled`, catching a rejected promise and doing nothing with it. No shared helper file.
- One-time read (corrects the rev 1.7 module-level-variable wording; rev 1.9 Q2): read the CONV-006 key in an effect into a `useRef` on the slideshow component and remove the key on the first read; never a module-level variable. React Strict Mode's extra setup/cleanup keeps the ref. A reload finds no key, which makes it a direct visit.
- Leaving: `router.replace(<that path>)`, or `router.replace("/")` after a direct visit, never `router.back()`. Leaving also exits full screen if it is still on. On unmount (for example the browser's Back while in full screen), call `document.exitFullscreen()` if `document.fullscreenElement` is set, so the site is never left in full screen.
- Full-screen state comes from `useSyncExternalStore` with `document.fullscreenElement` ("in") read at subscribe time and server snapshot `false`. Only a change from "in" to "out" counts as leaving. The close button's own `exitFullscreen()` and the `fullscreenchange` listener share one "already leaving" guard. A refused request fires `fullscreenerror`, not `fullscreenchange`, so it cannot trigger leaving.
- The hint is `<button type="button" tabIndex={-1} aria-keyshortcuts="F">` named by its visible text (Q8); it calls `preventDefault` on `mousedown` and returns focus to the layer after its click. The root pointer handler ignores any event whose target is inside a `button` (`closest("button")`), so cards, the close button and the hint never also change the slide. Do not put `aria-hidden` on the hint. The hint's full-screen target is `document.documentElement` (Q6).
- Keydown: check `isComposing` and modifiers first, then `e.repeat` (`if (e.repeat) return;`), all before any branch. Strict Mode cleanup removes every listener and timer.
- Idle pointer: the idle state has its own `[data-idle]` gate (Tailwind `hover:` still matches under a hidden cursor) and ignores pointer moves with unchanged `clientX`/`clientY`.
- Design tokens (T1): `--ss-edge: color-mix(in srgb, var(--text-muted) 65%, var(--bg))` and every other `--ss-*` token are declared on the slideshow root element, not in `globals.css` (MOD-001's file). A custom property that uses `var()` is resolved where it is declared; the root sits under `<html class="dark">`, so it picks up the right theme.
- A2 "⇄" (T2): drawn as an `aria-hidden` SVG; the visible "Engineer" and "QA" are `aria-hidden`; a hidden span carries exactly "Engineer ⇄ QA" and is hidden with a clip-based sr-only class, not `display:none` or `visibility:hidden`. QA checks AC-100 for A2 on the accessible name and by eye, not on raw `textContent`.
- Sizing (T3): the F hint is screen-anchored, `max(14px, 2.8% of frame height)`, em-based chip and gaps; use `100dvh` for both the hint and the frame so they scale from the same height on iPhone (UI 6.8 says `100dvh`, UI 5 says `100vh`; use `dvh` for both).
- B2 (T4): uses `/projectday-screens.webp` from MOD-011 (about 1.43:1; the B2 box uses `contain`, so any ratio works). MOD-011 is built before MOD-012.
- UX 14 hand-offs to the Tech Lead, accepted as engineering rules: navigation from pointer events by `pointerType` (the synthetic `click` after a tap must not fire Next again); `touch-action: pinch-zoom` on the layer and `overscroll-behavior: none` on the root; digits matched by `event.key` or `event.code` (Digit1-4, Numpad1-4), `F` and `M` by `event.key`; skip `focus()` when the layer is already `document.activeElement`.

**Design-file notes (Tech Lead and PM; where the approved files and the PRD differ, the PRD wins):**
- `slideshow-motion.md` line 16 still lists the "Details" cue (removed in revision 2, PRD Hidden job slides). It is stale and is not part of this spec.
- Design Lead review 2's L-3 row says the hint "becomes the first Tab stop on slide 1". UX 4.1 (revision 2) and the PRD (Opening) say it is not a Tab stop. The PRD wins.
- UX 6.1's "about 500 ms" settle window is replaced by CONV-006 (the `fs` field and the 1.5 second rule).
- In `interview-deck.md` slide 2, the Timeline entries carry "(opens the GoFreight detail slide)" and "(opens the Exascend detail slide)" inside the copy lines, and the deck has a note under the timeline. These are annotations, not on-screen text. AC-100 does not require them on screen.
- Review 2 section 3 wins over UI 6.4 and UI 7.4 (see the design files paragraph above).

**Out of QA's scope (Tech Lead):** the case of a slideshow inside an iframe without `allow="fullscreen"` (gotcha 11); QA tests top-level only.

## Input / Output Contract

**Input:**
- Deck copy from `asset/content/interview-deck.md` at commit ac1a07d.
- The approved design files in `project-planning/design/ux-team/` at commit ac1a07d.
- URL `/slideshow`, optionally with `?project=<name>` (`multi-agent`, `projectday`, `siteplus` or `tabvault`).
- `sessionStorage["slideshow-return"]`, written by MOD-001 (CONV-006).
- Image files listed under Slide images.

**Output:**
- Rendered full-screen route `/slideshow` with the slides, hidden job slides and menu described in section 4.11, with no site shell visible (CONV-007).
- Page-level `metadata`: title "Slideshow — Leon Wu", description, Open Graph and Twitter card tags, canonical URL https://www.leon-wu.com/slideshow with no parameters (AC-107).

## Dependencies

- MOD-001 (Site Shell) — nav entry and shortcut (status.md PM Updates, rev 1.7 entry, "New module" note); CONV-006, CONV-007.
- MOD-004 (Project Detail: SitePlus+) — `/siteplusplus-home.jpg`, `/siteplusplus-reports.jpeg` (slides C2 and C5).
- MOD-006 (Project Detail: TabVault) — `/tabvault-home.png` (slide D1).
- MOD-011 (Project Detail: ProjectDay) — `/projectday-screens.webp`, `/projectday-route.webp`, `/projectday-route-beta.webp`, `/projectday-profile.webp` (slides B2 and B5).
- mod-site-shell's Seattle photos in `site/public/` (slide 3) and the approved slideshow design.

## Acceptance Criteria

- AC-095: Selecting the Slideshow nav item or pressing `7` shows slide 1 with the browser in full screen in desktop Chrome, Safari and Firefox. On a browser without full-screen support (iPhone Safari), the slideshow fills the window. In both cases no sidebar, top bar or other site element is visible.
- AC-096 (timing added in revision 1.10): Whenever slide 1 shows in a browser window on a browser with full-screen support, the hint "Press F for full screen" shows: with slide 1, without waiting, after a direct visit, a start link or a reload, and within about 1.5 seconds after an opening from the site whose full-screen request the browser refused. After an opening from the site whose full-screen request succeeds (Slideshow nav item or `7` in desktop Chrome, Safari and Firefox), the hint never shows, not even for a moment. It does not show in full screen or on iPhone Safari. It disappears for good after the first key press, click or tap, or when full screen starts. Pressing `F`, or a click or tap on the hint, enters full screen, and a click or tap on the hint does not change the slide. In full screen, `F` does nothing.
- AC-097: The keyboard controls listed under Controls work exactly as listed on the about, job, menu and project slides. From slide 1, Next goes to slide 2, slide 3, then the menu; inside a project it goes through that project's slides in the order of the source file, then back to the menu.
- AC-098: The mouse, tap, pen and swipe controls listed under Controls work as listed with a mouse on desktop and with touch on a 375px-wide phone, including opening menu cards and slide-2 work cards. A mouse click anywhere on the screen other than a card, the close button or the full-screen hint goes to the next slide and never to the previous one, and a mouse click on the area outside the 16:9 frame behaves exactly like a click on the slide. A pinch on a phone zooms and does not change the slide. The close button is visible on every slide and can be reached with Tab, and Enter or Space on it leaves the slideshow.
- AC-099: Esc or the close button returns to the page the slideshow was opened from, or to Home after a direct visit, with one Esc press, including while in full screen. Leaving full screen through the browser's own controls also returns to that page. Back on the site, the sidebar and keyboard shortcuts work as before.
- AC-100: Every slide's on-screen text matches `asset/content/interview-deck.md` word for word, as described under On-screen text, and the A2 and B6 diagrams read exactly as defined there. No speaker note, editor's note, slide label or "Visual:" line appears anywhere on /slideshow. There is no Thank-you slide, no "Shown" tag on menu cards, no avatar and no GPA. The copy contains no em dashes.
- AC-102: At 1280x720, 1920x1080, 1440x900 and 375x667 (portrait and landscape), every slide shows whole, with no scrolling and no clipped text. Slide titles are at least 7% of the slide frame's height, bullet, Titles, Roles and Role text at least 4.2%, and all other text at least 2.4%. All slide text meets WCAG AA contrast in both themes.
- AC-103: The project name and position show on project slides as described under Look, and on no other slide. Screen readers announce the new slide's title on every slide change, and its position on project slides.
- AC-104: The slideshow uses the site's palette in the active theme (light or dark) and Roboto, each slide type matches its layout in the approved design (see Design), and slide changes show no animation.
- AC-105: After /slideshow has finished loading, with the network switched off, every slide, including every slide image, still shows.
- AC-106: The slide images listed under Slide images load on their slides (no broken image), each with the alt text listed, and the captions "Snowboarding" and "Bouldering" show on slide 3. All the image files /slideshow loads together total at most 3 MB.
- AC-107: /slideshow is generated at build time. Its title is "Slideshow — Leon Wu", and it has a description meta tag, Open Graph and Twitter card tags, and the canonical URL https://www.leon-wu.com/slideshow with no parameters. Every other route still builds and renders.
- AC-113: The menu behaves as described under Menu: its title is "Pick a project" every time it shows, and "Pick another project" never appears; the four cards show in order with their key numbers; the footer line shows as plain text; Next with nothing pre-selected, or with the pre-selected project already shown, shows the hint and stays; and Previous goes to slide 3. Next on any project's last slide, Previous on its first slide, and M on any slide show the menu.
- AC-114: On slide 2, the GoFreight card (key `1`) and the Exascend card (key `2`) each open their own job slide by click, tap, focused Enter or Space, or key. Neither card shows a "Details" cue or a key, and a mouse click on slide 2 outside the cards goes to slide 3. Next or Previous on a job slide returns to slide 2, and no sequence of Next or Previous from any other slide reaches a job slide.
- AC-115: `/slideshow?project=projectday` opens on slide 1. On the menu the ProjectDay card is highlighted, and Next starts ProjectDay at B1. Once any ProjectDay slide has been shown, by any route, the card is no longer highlighted and Next on the menu shows the hint. The same holds for `multi-agent`, `siteplus` and `tabvault`. Any other value, or no parameter, behaves as no start link.
- AC-130: In full screen with a mouse, the pointer hides after 3 seconds without movement and card hover styles do not show while it is hidden; any mouse movement shows the pointer again. In a browser window, and with touch, the pointer never hides.
- AC-131: Holding down any key that changes slides (for example Right arrow or Space) moves exactly one slide; the key's automatic repeats do nothing.
- AC-117 (section 4.5, applies here): In the built HTML of every route, including /slideshow, no link points to tab-vault.com, the text "tab-vault.com" does not appear, and no copy says TabVault is live. AC-117 does not cover the contents of the CV PDF served at /Leon_cv.pdf: the CV Leon chose on 2026-11-01 still names tab-vault.com (see section 6, Resume Hosting).
- AC-126 (section 4.10, applies here): In the built HTML of every route, including /slideshow, no phone number appears: no `tel:` link, and neither "206-677-7544" nor "2066777544" nor any other phone number in text, links or meta tags. AC-126 does not cover the contents of the CV PDF served at /Leon_cv.pdf, which lists Leon's phone number (see section 6, Resume Hosting).

QA notes (Tech Lead, b8395f1 and 0051840): in Chrome, click the hint, then press Space: exactly one slide change. Leaving by the browser's Back while in full screen leaves the site not in full screen. QA checks only Roboto 400, 500 and 700 are used (AC-105). QA verifies on the build; MOD-012 and MOD-001 are QA'd together because AC-094, AC-095, AC-096, AC-099, AC-129, AC-130 and AC-131 need both.

[AMBIGUITY: AC-096's refused-request case ("within about 1.5 seconds after an opening from the site whose full-screen request the browser refused") needs a way for QA to make the browser refuse the site's full-screen request. The Tech Lead review b8395f1 says the MOD-012 QA spec states how and that the Tech Lead supplies it if Doc-Sync cannot; neither the PRD nor the review states the method, and Doc-Sync does not invent it — PM must have the Tech Lead supply the method.]

## Integration Points

### Integration with MOD-001 (Site Shell) — Entry contract and shell
- **Contract:** CONV-006 (MOD-001 writes `sessionStorage["slideshow-return"]` with `{ path, t, fs }`, requests full screen, navigates to `/slideshow`; MOD-012 reads and removes it once on first mount) and CONV-007 (the shell renders nothing on `/slideshow`; MOD-012 owns the fixed full-viewport root), both copied verbatim under Requirements.
- **AC:** AC-094, AC-095, AC-096, AC-099, AC-129 (MOD-001 spec), AC-130, AC-131 gate QA; MOD-012 and MOD-001 are QA'd together.

### Integration with MOD-004, MOD-006 and MOD-011 — Slide images
- The Slide images table under Requirements names the files each module supplies (`/siteplusplus-home.jpg` and `/siteplusplus-reports.jpeg` from MOD-004; `/tabvault-home.png` from MOD-006; `/projectday-screens.webp`, `/projectday-route.webp`, `/projectday-route-beta.webp` and `/projectday-profile.webp` from MOD-011). Renaming any of these files breaks MOD-012.
- **AC:** AC-106: The slide images listed under Slide images load on their slides (no broken image), each with the alt text listed, and the captions "Snowboarding" and "Bouldering" show on slide 3. All the image files /slideshow loads together total at most 3 MB.
