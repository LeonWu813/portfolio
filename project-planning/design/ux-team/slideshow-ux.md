# Slideshow UX: interaction and flow (MOD-012, /slideshow)

Written by: ux-designer, 2026-11-01. Intended path: `project-planning/design/ux-team/slideshow-ux.md`.
Inputs: `slideshow-brief.md` (with the Tech Lead's 13 limits), `slideshow-research.md`, `project-planning/prd.md` sections 2, 3, 4.11 and 6 (Revision 1.8), `asset/content/interview-deck.md` at HEAD (last changed in e479e22), the Tech Lead change review of 2026-11-01 in `status.md` (CONV-006, CONV-007, Q2 to Q5, T4), `site/components/Sidebar.tsx` (existing focus style).

Advisory only. This document does not change any slide text, the slides or their order, the controls or the acceptance criteria. Where the PRD is silent, I give a recommendation in section 13 (Open questions) instead of deciding. "Research N.N" points to a section of `slideshow-research.md`. "Limit N" is the Tech Lead's numbered limit in the brief.

Words used below:
- **Screen**: the browser viewport (full screen or windowed).
- **Frame**: the 16:9 slide box, scaled to the largest size that fits the screen and centered in it.
- **Bars**: the screen area outside the frame (letterbox or pillarbox). Same opaque `--bg` as the frame, no border (research 2.2 item 8), so they are invisible.
- **Layer**: the full-screen MOD-012 root (`fixed inset-0`, opaque `var(--bg)`, CONV-007). It contains the frame, the bars, the close button, the hints and the live region.
- **fh / fw**: percent of frame height / frame width (limit 7).
- **Next / Previous**: the abstract actions. Section 3 lists every input that fires them.

---

## 1. Slide map and state

### 1.1 Slides, in Next order

| Id | Slide type (brief) | On-screen title | Interactive elements | Name + position cue |
|---|---|---|---|---|
| 1 | Intro | Hi, I'm Leon | none | no |
| 2 | Timeline | From marketing to engineering | 2 work cards: GoFreight (key 1), Exascend (key 2) | no |
| 2a (hidden) | Hidden job slide (big numbers) | Front-End Developer at Exascend | none | no |
| 2b (hidden) | Hidden job slide (big numbers) | Marketing Project Manager at GoFreight | none | no |
| 3 | Photo slide | Based in Seattle, usually on snow or a wall | none | no |
| M | Menu | Pick a project / Pick another project | 4 project cards (keys 1 to 4) | no |
| A1, B1, C1 | Project numbers cover | project name | none | yes |
| A2 | Simple workflow diagram | An AI dev team with a human in charge | none | yes |
| B2, C2, D1 | Intro with screenshot (bullets + image) | per deck | none | yes |
| A3, B3, C3, D2 | Role and stack (chips) | My role and stack | none | yes |
| A5 | Role grid | So I split it into six focused agents | none | yes |
| A4, A6, A7, A8, B4, B7, B8, C4, C6, C7, C8, D3, D4, D5 | Bullet slide | per deck | none | yes |
| B5, C5 | Bullet slide with screenshot(s) | per deck | none | yes |
| B6 | Flow chips (with bullets) | Beta videos needed a real video pipeline | none | yes |

Track lengths: A 8, B 8, C 8, D 5 (D has no numbers slide; D1 is its first slide).

Note on labels: the hidden slides are labelled 2a = Exascend and 2b = GoFreight in the source, but the keys follow the timeline's left-to-right order: key 1 = GoFreight (2b), key 2 = Exascend (2a). Engineers and QA should map by key and name, never by "a/b" order.

### 1.2 Session state (all in memory, none in the URL, limit 1)

| State | Initial value | Changes when |
|---|---|---|
| `current` | slide 1 | any navigation |
| `origin` | from CONV-006: "site" (with a return path) or "direct" | never after mount |
| `menuTitleAnother` | false | set true when a project is finished (Next on its last slide) or left with M from a project slide. Never reset in the session. |
| `preselected` | the `?project=` value if exactly one of `multi-agent`, `projectday`, `siteplus`, `tabvault`; else none | never |
| `preselectedShown` | false | set true the first time any slide of the preselected project is shown (see Q5, Q6) |
| `fullscreenHint` | visible if `origin` = direct; else hidden | hides on the first keydown, pointerdown, or full-screen entry (section 6) |
| `menuHint` | hidden | shown by Next on the menu when nothing is preselected or already shown; hides after about 2 s or when the menu is left |

A reload is a direct visit (CONV-006): state resets to the initial values and slide 1.

---

## 2. Navigation model: what every action does on every slide

### 2.1 Transition table

"no-op" means nothing changes: no hint, no sound, no announcement.

| On | Next | Previous | M | Home | Number keys | F | Esc / close button |
|---|---|---|---|---|---|---|---|
| 1 | 2 | no-op | Menu | no-op | no-op | full screen (section 6) | leave |
| 2 | 3 | 1 | Menu | 1 | `1` opens 2b GoFreight, `2` opens 2a Exascend, `3`/`4` no-op | same | leave |
| 2a / 2b | 2 | 2 | Menu | 1 | no-op | same | leave |
| 3 | Menu | 2 | Menu | 1 | no-op | same | leave |
| Menu | preselected project's first slide if `preselected` and not `preselectedShown`; otherwise show the menu hint and stay | 3 | no-op | 1 | `1`-`4` start that project at its first slide | same | leave |
| Project first slide (A1, B1, C1, D1) | second slide | Menu (title flag unchanged, see Q8) | Menu, set `menuTitleAnother` | 1 | no-op | same | leave |
| Project middle slide | next in track | previous in track | Menu, set `menuTitleAnother` | 1 | no-op | same | leave |
| Project last slide (A8, B8, C8, D5) | Menu, set `menuTitleAnother` | previous in track | Menu, set `menuTitleAnother` | 1 | no-op | same | leave |

Rules that hold across the table:
- Next and Previous never reach 2a or 2b from anywhere except as listed (AC-114). From 1, Previous does nothing; from 3, Previous goes to 2, not to a job slide.
- M from slides 1, 2, 2a, 2b or 3 goes to the menu but does not set `menuTitleAnother` ("left with M" applies only to a project).
- Home keeps all session state (title flag, preselection). Only a reload resets it.
- Opening a project from the menu always starts at its first slide, even if it was shown before.
- After the menu returns from a track, there is no "visited" or "shown" styling of any kind on the cards (no tag, no dimming, no check mark). AC-100 forbids a "Shown" tag, and a visual stand-in for it would break the same intent.

### 2.2 Flows

**Main flow (Leon in an interview, opened from the site):**
1. Leon presses `7` or clicks Slideshow. MOD-001 requests full screen and navigates (CONV-006). Slide 1 shows full screen, no hint.
2. Space, Space: slide 2, slide 3. On slide 2 he may press `1` (GoFreight job slide), then Space to come back to slide 2, then `2` (Exascend), then Space back to 2, then Space to 3.
3. Space: menu, titled "Pick a project". He presses `2`: B1 to B8.
4. Space on B8: menu, now titled "Pick another project". He presses another number, or Esc to leave.
5. Esc (one press, even in full screen): back on the page he came from (CONV-006, AC-099).

**Start link flow (`/slideshow?project=siteplus`, direct visit):**
1. Slide 1 in the browser window, with the "Press F for full screen" hint. He presses F (full screen, hint gone) or Space (slide 2, hint gone).
2. Through 2 and 3 to the menu. The SitePlus+ card is highlighted. Space (or a click anywhere off the cards) starts C1.
3. After C8, the menu returns as "Pick another project". The highlight is gone (see Q5) and Space now shows the menu hint.

**Detour flows:** M from any slide jumps to the menu (for example, an interviewer says "skip ahead to your projects"). Home from anywhere restarts at slide 1 without forgetting what was shown.

### 2.3 Menu hint (the "Pick a project: press 1 to 4 or click a card" message)

- **Trigger:** Next on the menu when Next has no project to start.
- **Duration:** visible for 2 s after the last trigger. A repeated Next while visible restarts the 2 s and re-announces it (section 9).
- **Hides early when:** the menu is left (any navigation), or a card opens.
- **Placement:** inside the frame, in a slot reserved under the card row and above the footer line, centered on the card row. The slot is always reserved (empty when hidden), so nothing moves when the hint appears. It must never cover a card, the footer or the close button (WCAG 2.4.11, research 4.4).
- **Size:** at least 3.3 fh (research 3.2: text the interviewer reads).
- **Motion:** owned by the motion designer, with an instant show and hide under `prefers-reduced-motion` (limit 1).
- **Not interactive:** a click on it is a click on the slide (Next), which re-triggers it. That is harmless.

---

## 3. Inputs

### 3.1 Keyboard

The key handler listens on `window`, so keys work whether focus is on the layer, on a card, on the close button or on `<body>`. It ignores any key pressed with Ctrl, Meta (Cmd) or Alt (so Cmd+F, Cmd+R, Ctrl+Home and browser shortcuts keep working) and any key during IME composition (`isComposing`). Shift matters only for Shift+Space.

| Key | Action | Notes |
|---|---|---|
| Space | Next | When focus is on a card: opens the card instead. When focus is on the close button: leaves (see Q11). |
| Shift+Space | Previous | |
| Right, Down, Page Down | Next | Also when focus is on a card or the close button (arrows never move between cards). Presenter clickers send Page Down / Page Up, so they work. |
| Left, Up, Page Up | Previous | |
| Enter | Next | When focus is on a card: opens the card. When focus is on the close button: leaves (see Q11). |
| `1`, `2` | On slide 2 only: open GoFreight, Exascend | |
| `1`-`4` | On the menu only: start Multi-Agent, ProjectDay, SitePlus+, TabVault | |
| M | Menu | `m` or `M` (Caps Lock). |
| Home | Slide 1 | |
| F | Enter full screen | `f` or `F`. See section 6. |
| Esc | Leave | In full screen the browser takes Esc and exits full screen; the `fullscreenchange` listener then leaves (limit 6). No Esc animation. |
| Tab / Shift+Tab | Move focus | Section 4. |
| Anything else (End, Backspace, `5`-`9`, `0`, letters) | Nothing | `7` and the other site shortcuts never navigate the site while the slideshow is open (AC-094). |

Number-key matching: accept `event.key` "1" to "4", and also `event.code` Digit1-Digit4 and Numpad1-Numpad4. This makes the number row work on layouts such as French AZERTY, where the unshifted key produces "&" and not "1". F and M match by `event.key` (layout-aware letters).

Held keys: see Q10. Recommended: ignore auto-repeat (`event.repeat`) for every action key, so a key held a moment too long on a laptop does not skip slides in front of an interviewer.

### 3.2 Mouse (pointerType "mouse")

- **Primary-button click anywhere in the layer = Next**, including the bars around the frame (section 8, limit 9), the slide text, images, diagrams, the position cue, the menu footer, the menu hint and the "Press F" hint (but see Q3).
- **Exceptions:** a click on a slide-2 work card opens it; a click on a menu card starts it; a click on the close button leaves. These never also fire Next (the handler stops there).
- **Never Previous** (PRD Controls). See Q1 for the missing mouse "back".
- **Only the primary button counts.** Right-click keeps the browser's context menu; middle-click does nothing.
- **A drag is not a click.** If the pointer moves more than 10 CSS px between down and up, nothing happens. This lets a visitor drag-select the email in the menu footer without changing slides.
- **Double-click** counts as two clicks (two Nexts), like Keynote. Prevent the double-click word selection with `user-select: none` on the slides, except the menu footer line, which stays selectable.
- **Mouse wheel and trackpad scroll do nothing**, and do not scroll the page (the layer does not scroll; AC-102 says no scrolling).
- **Cursor:** the default arrow on the slide and bars, `pointer` only on cards and the close button. A pointer cursor everywhere would erase the one affordance that tells cards apart (research 3.4). Optional auto-hide: Q9.

### 3.3 Touch (pointerType "touch"; also "pen", see Q12)

- **Tap** on the right half of the screen = Next; on the left half = Previous. "Screen" is the viewport, bars included (PRD Controls). The dividing line is the viewport's vertical center line, not the frame's (they coincide anyway, since the frame is centered).
- **Tap on a card or the close button** activates it, whichever half it is in.
- **Swipe** left or up = Next; right or down = Previous. Recommended thresholds: at least 40 CSS px along the dominant axis, the dominant axis at least 1.5 times the other, completed within 700 ms. A swipe that starts on a card is a swipe, not a card tap.
- **One finger only.** Two-finger gestures are ignored, so pinch-zoom keeps working (WCAG 1.4.4; it is the only way to read the 375x211 frame closely on an upright phone). While the page is zoomed in (`visualViewport.scale > 1`), one-finger moves pan the zoomed view and are not swipes; taps still navigate.
- **Long press** (over 500 ms without moving) does nothing, so a reader who rests a thumb does not change slides.
- **No double handling.** A tap also produces a `click` event. Handle navigation from pointer events by `pointerType` (mouse: always Next; touch and pen: halves), and make sure the synthetic click does not fire Next a second time. A touchscreen laptop then behaves correctly for both inputs: a finger tap on the left goes back, a mouse click on the left goes forward.
- **Browser gestures to block or accept:**
  - Set `touch-action: pinch-zoom` on the layer (no browser panning or double-tap zoom, no 300 ms delay) and `overscroll-behavior: none` on the root, so a downward swipe (Previous) never triggers Chrome Android's pull-to-refresh, which would reload to slide 1.
  - iOS Safari's left-edge swipe is the browser's own Back, and the page cannot block it. It leaves the slideshow through history. The Tech Lead's unmount rule (exit full screen on unmount) covers the state. Accepted risk for a non-presenting mode (research 1).

---

## 4. Focus order and focus management

### 4.1 Focus targets

1. **The layer** (`tabindex="-1"`, not in the Tab order). It receives focus programmatically. It shows no focus ring: it is the whole screen, and a ring around the screen would show on the shared call. The slide change itself is the visible feedback.
2. **Cards**, on slides 2 and M only, in reading order: slide 2: GoFreight, Exascend (left to right, matching keys 1, 2). Menu: cards 1, 2, 3, 4 (in a 2x2 layout: row by row).
3. **Close button**, on every slide, last in the DOM inside the layer, so the first Tab on a card slide lands on the first card, and on every other slide on the close button.

The F hint, the menu hint, the position cue, images and diagrams are never focusable. There are no links on any slide (the menu footer is plain text, PRD Menu).

Tab order: layer (start) -> card 1 -> card 2 (-> card 3 -> card 4) -> close button -> browser UI -> back to the first card. Shift+Tab reverses. The site shell renders nothing on /slideshow (CONV-007), so no hidden site link can take focus; no focus trap is needed and none should be built (a trap would stop a keyboard user reaching the browser's address bar).

### 4.2 Focus after each event

| Event | Focus goes to | Why |
|---|---|---|
| First mount (both origins) | the layer, with `preventScroll` | Keys work at once. |
| Any slide change (Next, Previous, M, Home, number key, card activation, swipe, tap, click) | the layer | The card or button that had focus may no longer exist (research 4.2). One rule for every change keeps keys working and focus never falls to `<body>`. |
| Return from 2a or 2b to slide 2 | the layer, **not** the work card that opened it | Departure from the usual "return focus to the invoker" pattern, on purpose. If focus went back to the card, the presenter's next Space or Enter would reopen the job slide instead of moving to slide 3: a trap in the middle of an interview. A keyboard user is one Tab away from the card. |
| Next on the menu that only shows the hint | unchanged | Not a slide change. |
| Resize, rotation, full-screen entry | unchanged | Slide and focus survive; only the scale changes. |
| Mouse click on a card | the layer (after the slide change) | `:focus-visible` never shows a ring for a mouse click (research 4.2). |

### 4.3 Focus appearance

- **Cards and close button:** the site's existing focus style, a 2 px `--accent` outline (`Sidebar.tsx` uses `focus-visible:outline-2 focus-visible:outline-[var(--accent)]`), plus a 2 px outward offset so the ring does not merge with a card edge. `--accent` on `--bg` is 5.0:1 light and 7.68:1 dark (research 5.2). Shown only for `:focus-visible`.
- **Card focus rings scale with nothing:** keep the outline at 2 CSS px (not frame units) so it never drops below 2 px on a phone frame (WCAG 2.4.13 perimeter, research 4.4).
- **The start-link highlight (AC-115) must not look like focus** (research 4.4). A highlighted card that also has focus shows both, side by side: the highlight's own form plus the accent ring outside it. The UI designer picks the highlight form; the UX requirements are: not an accent outline, not color alone, visible in both themes on a compressed video call.

---

## 5. Close button

- **Placement:** the **bottom-right corner of the screen** (not the frame, limit 8), inset 16 CSS px from the right and bottom edges, or 8 px when the viewport's shorter side is under 500 px, plus `env(safe-area-inset-right/bottom)` on notched phones.
  - Why bottom-right and not top-right: limit 5 keeps controls off the top center and the very top edge, where the browser's "Press Esc to exit full screen" banner and the macOS menu bar (Safari, and any browser in macOS full screen when the pointer touches the top edge) appear. A top-right X would sit right under the menu bar's reveal zone. Bottom-right is also where reveal.js puts its controls and where a resting mouse already is (research 2.2 item 2).
  - On an upright phone it sits in the lower bar, under the frame, in easy thumb reach.
- **Size:** 44x44 CSS px on every device (limit 8 prefers 44 for touch; WCAG 2.5.8 needs 24). The drawn X is about 18 px, stroke 2 px (research 3.2: no hairlines on video).
- **Look:** icon only, `--text-muted` (7.81:1 light, 10.59:1 dark), no fill at rest; `--hover` fill and `--text` icon on hover; focus as 4.3. Low emphasis, always visible (AC-098; research 2.2 item 4). No `title` tooltip (it would add on-screen text the PRD does not list).
- **Name:** `aria-label="Close slideshow"`, `aria-keyshortcuts="Escape"`.
- **Action:** leave, exactly as Esc (CONV-006: `router.replace` to the return path, or `/` after a direct visit; exit full screen if on). Pointer and keyboard activation never also fire Next.
- **Reserved zone in the frame:** when the frame fills the screen (16:9 screens, phones in landscape), the button sits over the frame's bottom-right corner. **The UI designer keeps the bottom-right 8 fw x 15 fh of every slide free of content.** Worked sizes: at 1280x720 the button and inset take 60 px = 4.7 fw / 8.3 fh; at 667x375 (phone landscape) 52 px = 7.8 fw / 13.9 fh. On the menu, the footer line must end before this zone (left-align it, or keep it narrower than about 90 fw if centered).

---

## 6. Full screen and the "Press F for full screen" hint

### 6.1 When the hint shows

- Only when `origin` = direct (a typed or shared link, a start link, or a reload; CONV-006, AC-096). Never when opened from the site.
- It can only ever show on slide 1, because the first interaction hides it.
- On browsers where `document.fullscreenEnabled` is false (iPhone Safari), the PRD still shows it; see Q2.
- Render it only after mount, once CONV-006's check has run, so it never flashes for a visitor who came from the site. The motion designer owns its entrance; under reduced motion it appears instantly.

### 6.2 When the hint hides (for good, in that session)

- On the first `keydown` of any key (including Tab, Shift, F and Esc), the first `pointerdown` anywhere (mouse, touch or pen, including on the close button), or a `fullscreenchange` into full screen by any means (F, F11, the browser's green button).
- The interaction that hides it still does its normal job: a first Space both hides the hint and goes to slide 2; a first click goes to slide 2; F enters full screen.
- It never comes back. Leaving full screen leaves the slideshow (PRD Leaving), so there is no "windowed again" state to re-hint.

### 6.3 Where it shows

- **Bottom-left corner of the screen**, mirroring the close button: same inset rule (16 px, or 8 px under 500 px; plus safe-area insets), vertically centered on the close button's 44 px row. This keeps it off the top center and the top edge (limit 5), and away from the close button.
- Sized in CSS px like the close button, not in frame units, so it stays legible on a phone: 14 px text, 500 weight, `--text-muted`, with "F" in a key chip matching the card key chips (research 5.4: the sidebar shortcut badge). Single line; at 375 px wide it fits ("Press F for full screen" is about 150 px at 14 px).
- Slide 1 keeps its bottom-left 30 fw x 15 fh free of content, because on a 16:9 window the hint overlaps the frame's corner there. Slide 1 has no position cue, so nothing else competes for that corner.
- Not interactive in the current PRD: a click on it is a click on the slide (Next). See Q3.

### 6.4 F and full-screen behaviour

| Situation | F does |
|---|---|
| Windowed, `fullscreenEnabled` true | `document.documentElement.requestFullscreen()` (Tech Lead Q2). On rejection: stay windowed, show nothing (no error text exists in the PRD). |
| Already full screen | Nothing (see Q4; toggling out would leave the slideshow). |
| `fullscreenEnabled` false (iPhone) | Nothing. |

- **Entering full screen changes nothing else:** same slide, same focus, frame rescales instantly.
- **Leaving full screen by any route** (Esc, F11, the browser's controls, a macOS swipe) = leave the slideshow (PRD Leaving, AC-099), guarded so it navigates once (Tech Lead Q3).
- **Opened from the site but full screen was refused or unsupported:** no hint, per CONV-006. See Q7.

---

## 7. Slide types: layout-independent behaviour and states

The UI designer owns the look. This section fixes what each type does, its states and its reading order (DOM order = reading order = visual order).

General for every slide:
- The slide is a `role="group"` with `aria-roledescription="slide"` and `aria-labelledby` its title, which is the page's single `<h1>` (one slide in the DOM at a time; preloaded images are held off-DOM with `new Image()` or are `aria-hidden` and hidden, Tech Lead Q5).
- The title is the first thing in reading order, then the content, then (project slides) the name and position cue.
- No hover, pressed or focus state exists on anything but cards and the close button.
- **No loading state is visible:** all slide images are fetched at mount (Tech Lead Q5). Every image box reserves its final aspect ratio (limit 10 ratios) with `object-fit: contain`, so nothing shifts if an image arrives late.
- **Image error fallback** (should never happen, AC-106): keep the reserved box as an empty `--surface` rectangle, with no visible text; the `alt` stays for screen readers. This avoids the browser's broken-image icon on a shared screen.

| Type | Slides | Behaviour and states | Reading order |
|---|---|---|---|
| Intro | 1 | Static. On a direct visit, the F hint shares the screen (6.3). | Title, three Titles lines. |
| Timeline | 2 | Four entries, left to right, in time order. Only GoFreight and Exascend are cards (`<button>`). Card states: default, hover (`--hover` fill, pointer cursor), focus-visible (4.3), pressed (`:active`, same as hover; the slide changes on release). Education entries are plain text, no hover, default cursor, and a click on them is Next. Each card shows "Details" and its key; card name = its visible text, plus `aria-keyshortcuts="1"` / `"2"`. | Title; 2017 entry; GoFreight card; Exascend card; 2025 entry. |
| Hidden job slide | 2a, 2b | Static. No name or position cue (PRD Look). No on-screen "back" cue: any Next or Previous returns to slide 2 (PRD lists no such text). | Title, Subtitle, big numbers left to right (number, then its label). |
| Photo slide | 3 | Static. Two portrait photos (0.75:1), each with its caption under it; captions are visible text, alts per PRD 4.11. A click on a photo is Next (no zoom, no lightbox: the project-page image overlay is MOD-003's and is not part of the slideshow). | Title, photo 1 + "Snowboarding", photo 2 + "Bouldering". |
| Menu | M | Four card buttons in order (`aria-keyshortcuts="1"` to `"4"`). Card states: default, hover, focus-visible, pressed, **highlighted** (start link only, until shown; Q5), highlighted + focus-visible, highlighted + hover. The highlighted card gets `aria-describedby` pointing at visually hidden text "Next starts this project." (not on screen). Menu hint slot (2.3). Footer as plain text, selectable (3.2). Title text switches per `menuTitleAnother`. | Title; cards 1 to 4 (key, name, one-liner); hint slot; footer. |
| Project numbers cover | A1, B1, C1 | Static, three equal numbers (research 3.3). Name + position cue. | Title, number + label x3, cue. |
| Intro with screenshot | B2, C2, D1 | Static image + bullets. | Title, bullets, image (image after bullets so the claim is read first; the visual order may put the image on the right). |
| Role and stack | A3, B3, C3, D2 | Static. Chips are a plain list (`<ul>`), not buttons; they have no hover. | Title, Role, Stack chips in source order. |
| Bullet slide | A4, A6-A8, B4, B7, B8, C4, C6-C8, D3-D5 | Static. | Title, bullets. |
| Bullet slide with screenshot(s) | B5 (three screens), C5 (one) | Static. B5 images in the order Route, Route beta, Profile, left to right. | Title, bullets, image(s). |
| Role grid | A5 | Static. Six role/description pairs in two columns. Fill the columns so that DOM order equals source order: column 1 = PM, Doc-Sync, Engineer; column 2 = QA, Tech Lead, Retrospective (read down, then across). | Title, the six pairs in source order. |
| Simple workflow diagram | A2 | Static, drawn in SVG/CSS (limit 10). Arrows are decorative to a screen reader; expose the diagram as an ordered list in source order ("Requirements", "PM", "Doc-Sync", "Engineer ⇄ QA", "Tech Lead", "Shipped"), then the Retrospective line, then the "I approve every handoff" bar. Arrows at least 3:1 (research 5.2). | As listed. |
| Flow chips | B6 | Static. The four chips as an ordered list (Upload, S3, MediaConvert, CloudFront), arrows decorative, then the bullets. | Title, flow list, bullets. |

**Name and position cue (project slides only):** recommended in the **frame's bottom-left corner**, so it never meets the close button (bottom-right) and the F hint never meets it (the hint shows on slide 1 only). Visible "ProjectDay" and "3 / 8"; the visible "3 / 8" is `aria-hidden`, with a visually hidden "3 of 8" beside it, so a screen reader browsing the slide hears "ProjectDay, 3 of 8", not "3 slash 8". Size 2.4 fh minimum, quiet (research 2.2 item 3).

---

## 8. Letterbox behaviour, and the answer to limit 9

### 8.1 Rule

Frame width = min(screen width, screen height x 16/9); frame height = width x 9/16; centered on both axes. Bars are `--bg`, no frame border (research 2.2 item 8). Everything inside the frame scales uniformly (limit 7). The close button and F hint are sized and placed in screen CSS px (limit 8). On resize or rotation: rescale instantly, same slide, same focus, no animation.

### 8.2 Worked cases

| Screen | Frame | Bars | Title 7 fh / bullets 4.2 fh / other 2.4 fh (px) | Close button and F hint |
|---|---|---|---|---|
| 1920x1080 (16:9) | 1920x1080 | none | 75.6 / 45.4 / 25.9 | Over the frame's corners; reserved zones (5, 6.3) keep content clear. |
| 1440x900 (16:10 laptop) | 1440x810 | 45 px top and bottom | 56.7 / 34.0 / 19.4 | Button (60 px with inset) sits mostly in the bottom bar, 15 px over the frame. Looks full-bleed. |
| 1280x800 (16:10) | 1280x720 | 40 px top and bottom | 50.4 / 30.2 / 17.3 | As above, 20 px over the frame. |
| 1024x768 (4:3) | 1024x576 | 96 px top and bottom | 40.3 / 24.2 / 13.8 | Both entirely in the bottom bar. |
| 375x667 portrait | 375x211 | 228 px top and bottom | 14.8 / 8.9 / 5.1 | Both in the bottom bar, 8 px inset, thumb reach. Text is small (accepted, T4 (a)); pinch-zoom stays available (3.3). Taps anywhere in the bars use the screen halves. |
| 667x375 landscape | 667x375 | about 0 | 26.3 / 15.8 / 9.0 | Over the frame (8 px inset: 52 px = 7.8 fw / 13.9 fh), hence the 8 fw x 15 fh reserved zone. |
| 2560x1080 (21:9) | 1920x1080 | 320 px left and right | 75.6 / 45.4 / 25.9 | Both in the side bars, at the screen corners (far from the frame). Acceptable: they belong to the screen, not the slide. |
| 960x540 call tile, Leon shares a 1920x1080 screen | viewer sees 960x540 | none | 37.8 / 22.7 / 13.0 as seen by the viewer | Viewer sees a 22 px button. It is Leon's control, not theirs; quiet is right. |
| 960x540 call tile, Leon shares a 1440x900 laptop | viewer sees 864x540, frame 864x486 | tile adds 48 px side bars; the screen's own 27 px bars | 34.0 / 20.4 / 11.7 as seen | This is why research 3.2 asks for 3.3 fh or more on text the interviewer must read. |
| Browser window 960x540 (Leon shares only a small window) | 960x540 | none | 37.8 / 22.7 / 13.0 | Button 44 px = 8.1 fh, inside the reserved zone. |

### 8.3 Limit 9: does a click or tap on the background around the frame count as "on a slide"?

**Yes.** A mouse click on a bar is Next, exactly like a click inside the frame. A touch tap on a bar uses the screen halves like any other tap. The only pointer targets that do something other than Next are the cards and the close button.

Reasons (research 7):
1. Leon's words: "with the mouse, click always go to the next".
2. The bars are invisible (`--bg` on `--bg`, no border). The user cannot see where the frame ends, so any boundary rule would make some clicks "randomly" do nothing.
3. The PRD's touch rule already uses halves of the **screen**, not the frame. Counting the bars for the mouse keeps one mental model for both.
4. On an upright phone the bars are two thirds of the screen; excluding them would make most taps dead.

Proposed AC wording for PM (so QA can test it): "A mouse click on the area outside the 16:9 frame behaves exactly like a click on the slide."

---

## 9. Screen readers

### 9.1 Structure

- Layer: `role="region"`, `aria-label="Slideshow"` (matches the nav label; the APG says the label must not say "carousel", research 4.1).
- One slide in the DOM at a time (7). Its title is the page's `<h1>`.
- Cards are `<button>`s; their accessible name is their visible text (key, name, one-liner or dates, role, place, "Details"), plus `aria-keyshortcuts`.
- Close button: 5.
- Hints: the F hint is visible plain text and also part of the mount announcement (9.2); the menu hint text is visible and also announced through the live region.

### 9.2 Live region

One visually hidden element, `aria-live="polite"`, `aria-atomic="true"`, outside the slide group, present from first render (empty), so screen readers register it before it changes.

Departure from research 4.1: the APG carousel pattern puts `aria-live` on the slide wrapper. I use a separate region instead, because limit 12 asks for a hidden live region, and because a live slide wrapper would read every bullet on every change, which is far too long for a presenter moving at speaking pace. Research 4.1's own recommendation ("one polite announcement per slide change") is kept.

What it says, set once per change:

| Event | Announcement (exact pattern) | Example |
|---|---|---|
| About slide, job slide | `<title>` | "From marketing to engineering" |
| Menu | `<current title>` | "Pick another project" |
| Project slide | `<title>. <project name>, <n> of <N>.` | "Then QA passed code it never ran. Multi-Agent System, 7 of 8." |
| Menu hint | `Pick a project: press 1 to 4 or click a card` | (on repeat: clear the region, then set the text again about 100 ms later, so it is re-announced) |
| First mount | `<slide 1 title>`, plus `. Press F for full screen` when the F hint shows; set about 500 ms after mount (an initial live-region value is not announced) | "Hi, I'm Leon. Press F for full screen" |
| No-op (Previous on 1, number key that does nothing) | nothing | |

Project names in announcements: "Multi-Agent System", "ProjectDay", "SitePlus+", "TabVault" (the menu card names). Use "of", not "/".

Do not move focus to the heading on slide change (research 4.1: the title would be read twice). Focus goes to the layer (4.2). Some screen readers re-read "Slideshow, region" when `focus()` is called on an element that already has focus, so the implementation skips the call when the layer is already `document.activeElement`.

### 9.3 Known screen-reader limits (accepted, no change asked)

- In NVDA/JAWS browse mode, arrow keys and Space are taken by the screen reader to read the slide. That is the right default: the user reads the slide with the arrows, then uses Page Down / Page Up, Tab to a card, or the screen reader's focus mode to move slides. Do not set `role="application"`; it would take reading away.
- Single-key shortcuts (WCAG 2.1.4): satisfied under "active only when the component has focus", since the slideshow is the whole page and has no text input (research 4.5). Residual risk for speech-input users is noted; no PRD change asked.

---

## 10. Motion (hand-off to the motion designer)

- Slide changes: instant, no transition (limit 1). Card activation, menu return and Home are slide changes, so also instant.
- Allowed to move: the F hint (entrance, exit), the menu hint (show, hide), focus ring (appearance). All must collapse to instant under `prefers-reduced-motion: reduce`.
- Card hover/pressed fill changes: instant (they are not focus or hints; keep them out of motion scope).

---

## 11. Leaving and returning

- Esc, the close button, or any exit from full screen: leave once (guarded), to the CONV-006 return path or `/`. Instant, no exit animation (limit 6).
- Presenter remotes: some remotes send Esc or F5 from a "blank screen" or "start" button. Esc leaves; F5 reloads to slide 1 as a direct visit. Recommend Leon checks his remote's buttons before an interview (a presenter tip, not a design change).
- Back on the site, the sidebar and shortcuts work as before (AC-099; MOD-001 territory).

---

## 12. What I took from the research, and where I departed

| Research finding | Used? | Note |
|---|---|---|
| 2.2 item 2 / 8 item 4: close button in a corner, quiet, always visible, 44 px | Yes | Bottom-right of the screen (5), reasons given. |
| 2.2 item 8 / 8 item 3: invisible bars, no frame border | Yes | 8.1. |
| 4.1: polite live region "title. Project, n of N"; menu hint to the same region | Yes | 9.2. |
| 4.1 (APG): `aria-live` on the slide wrapper | **No** | Separate atomic region; reason in 9.2. |
| 4.2: focus to the layer after every change; `:focus-visible` only | Yes | Extended with the explicit "not back to the work card" rule (4.2). |
| 4.3: touch targets; 2.5.1 single-pointer alternative to swipes | Yes | Tap halves cover 2.5.1. |
| 4.4: focus ring vs start-link highlight must differ | Yes | 4.3, 7 (menu). |
| 4.5: 2.1.4 "active only on focus" | Yes | 9.3. |
| 4.7 / 6: hide F hint on touch-only devices is a PRD conflict | Yes, as an open question | Q2. |
| 6: no on-screen prev/next arrows, no progress bar, no help overlay | Yes | None added. Mouse-back gap is Q1. |
| 2.2 item 4: chrome hides itself (cursor auto-hide) | Not decided | Q9. |
| 7: background counts as "on a slide" | Yes | 8.3. |

---

## 13. Open questions (PRD is silent or ambiguous; recommendation for each)

| # | Question | Recommendation |
|---|---|---|
| Q1 | A mouse has no way to go back ("A mouse click never goes back"). | **No change.** Leon presents with a keyboard or a clicker (Left/Up, Page Up). Adding mouse-wheel or right-click "back" risks skipping slides on a trackpad and contradicts his "click always go to the next". If he wants one later: right-click = Previous is the safest, but it needs a PRD change. |
| Q2 | The F hint shows on devices that cannot go full screen (iPhone; `document.fullscreenEnabled` false), where "Press F" is impossible. | **PRD change:** show the hint only on a direct visit **and** when `document.fullscreenEnabled` is true. Amend AC-096 to say so. |
| Q3 | Should the F hint itself be clickable? A mouse user who clicks the hint text today goes to slide 2 and loses the hint without getting full screen. | **PRD change:** make the hint a button that enters full screen on click or tap (a click is a valid user gesture for the Fullscreen API), keeping its text. It then joins cards and the close button as a non-Next target and becomes the first Tab stop on slide 1. |
| Q4 | What F does when already in full screen. | **Nothing.** Toggling out would leave the slideshow (PRD: leaving full screen leaves), which would surprise Leon. |
| Q5 | How long the start-link highlight lasts. The PRD says Next starts the preselected project "if it has not been shown yet", but does not say whether the highlight stays afterwards. | **Remove the highlight once that project has been shown**, so the highlight always means "Next starts this". |
| Q6 | What "shown" means for the preselected project. | **Shown = any of its slides was displayed, by any route** (Next on the menu, its number key, a click on its card). |
| Q7 | Opened from the site, but full screen was refused or is unsupported (CONV-006 gives no hint in this case). Leon would sit in a window with no reminder that F exists. | **Show the F hint whenever the slideshow is windowed on mount and `fullscreenEnabled` is true**, regardless of origin. Needs a CONV-006 / AC-096 wording change through the Tech Lead and PM. Low priority: Chrome, Safari and Firefox grant the request from the nav click. |
| Q8 | Previous on a project's first slide returns to the menu, but by the PRD's wording does not switch the title to "Pick another project", while M from the same slide does. | **Keep the PRD as written** (backing out of a project's first slide = not presented). Ask PM only to confirm it is intended, so QA does not flag it. |
| Q9 | Hide the mouse cursor while idle in full screen (reveal.js, Google Slides; research 2.2 item 4)? | **Yes:** hide it after 3 s without pointer movement while in full screen; show it on any movement. Keeps the shared screen clean. Not motion, not text; no AC needed, but PM should record it if accepted. |
| Q10 | Key auto-repeat: does a held Right arrow skip through slides? | **Ignore auto-repeat** for all action keys. One press = one step, so a stuck key cannot skip slides in front of an interviewer. |
| Q11 | PRD Controls says Enter is Next "when focus is not on a card"; read literally, Enter on the focused close button goes Next, which conflicts with AC-098 ("the close button ... can be reached and pressed from the keyboard"). | **Native button behaviour wins:** Enter and Space on the focused close button leave. PM to amend Controls to "when focus is not on a card or the close button". |
| Q12 | Pen input (iPad with Apple Pencil, Surface pen): treat as mouse (click always Next) or touch (halves)? | **Touch.** A pen points directly at the screen like a finger, and on iPad the reader expects tap-left-to-go-back. |
| Q13 | Keyboard and pinch zoom: the PRD does not mention browser zoom on the phone frame. | **Keep pinch-zoom enabled** (WCAG 1.4.4); no AC change. Listed so the engineer does not add `user-scalable=no`. |

Flags already raised by the researcher, not mine to decide: the "⇄" glyph in A2 sits outside Roboto's preloaded latin file and may not render after the network is off (AC-105), for the Tech Lead; WCAG 2.1.4 residual risk for speech input (9.3).

## 14. Hand-offs

- **UI designer:** reserved zones (bottom-right 8 fw x 15 fh on every slide; bottom-left 30 fw x 15 fh on slide 1); name and position cue in the frame's bottom-left; menu hint slot under the cards; a highlight form for AC-115 that is not an accent outline and not color alone; card hover/pressed fills; image error box; key-chip look shared by cards and the F hint; menu footer ends before the close zone.
- **Motion designer:** section 10.
- **Tech Lead (via the coordinator):** pointer handling by `pointerType` (3.3), `touch-action` / `overscroll-behavior` (3.3), number keys by `key` and `code` (3.1), skip `focus()` when the layer already has focus (9.2).
- **PM (via the coordinator):** Q2, Q3, Q5, Q6, Q7, Q8, Q9, Q10, Q11 wording; the limit-9 AC sentence (8.3).
