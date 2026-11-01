# Slideshow research (MOD-012, /slideshow)

Written by: ux-researcher, 2026-11-01. Intended path: `project-planning/design/ux-team/slideshow-research.md`. Inputs: `slideshow-brief.md`, `project-planning/prd.md` sections 2, 3 and 4.11 (Revision 1.8), `asset/content/interview-deck.md`, `site/app/globals.css`, `site/app/layout.tsx`, `site/components/Sidebar.tsx`, `site/app/projects/[slug]/page.tsx`, `site/app/skills/page.tsx`, `site/app/page.tsx`, and the built CSS in `site/.next/static`.

This document is advisory only. Nothing here changes on-screen text, slides, order, controls or acceptance criteria. Labels used below: **Observed** means seen in a source or in the code; **Inferred** means my reasoning from that evidence. I checked every recommendation against the Tech Lead's 13 limits in the brief. Anything that conflicts with a limit is listed in section 6 instead of being recommended.

---

## 1. Who reads this deck, and where

- **Observed (PRD 1, 4.11):** Leon presents to engineering hiring managers and recruiters for intern and junior roles. He presents either in person (on a laptop or a room screen) or by screen share on a video call. He drives the deck; the audience never touches it.
- **Inferred:** two reading conditions set the floor for the design:
  1. **Room screen at distance.** Classic slide guidance applies: big type and few elements.
  2. **Video call.** The interviewer sees Leon's 16:9 frame scaled into a window or a tile, after video compression. A 1920x1080 share shown in a 960x540 tile halves every size, and compression blurs thin strokes and 1 px borders. Text that looks large on the presenter's screen looks much smaller to viewers ([Donn Felker, "I can't read your screen"](https://donnfelker.com/i-cant-read-your-screen-mr-presenter)). [Harvard SEAS screen-sharing tips](https://seas.harvard.edu/zoom_events/helpful-tips-screen-sharing) advise fonts "even larger than standard presentation".
- The phone layout (a 375x211 frame on an upright phone, Tech Lead T4) is a fallback for someone who opens the link. It is not a presenting mode.

---

## 2. How web presentation tools handle a full-screen deck

### 2.1 Comparison

| Tool | Advance / back | Position cue | Exit | Full screen | On-screen chrome | Letterbox |
|---|---|---|---|---|---|---|
| **reveal.js** ([config](https://revealjs.com/config/), [size](https://revealjs.com/presentation-size/), [keyboard](https://revealjs.com/keyboard/)) | Arrows and Space; touch swipe is on by default; mouse wheel is off by default | Progress bar on by default; slide number **off** by default | Esc opens the overview, not an exit (the deck is the page) | F key | Arrow controls at bottom-right by default, with a first-use "controls tutorial" hint; help overlay on "?"; cursor hidden after 5 s idle | Fixed logical size scaled uniformly with a 4% margin; the leftover space shows the page background |
| **Google Slides present mode** ([help](https://support.google.com/docs/answer/1696787), [2019 update](https://workspaceupdates.googleblog.com/2019/06/slides-present-mode-updates.html)) | Arrows, Home/End, number + Enter | Slide list in the bottom toolbar, which auto-hides | Esc stops presenting and leaves full screen | Starts in full screen; F11 / Cmd+Shift+F toggles | Bottom toolbar appears on mouse move | Black bars around the slide |
| **Keynote / Keynote for iCloud** ([Mac](https://support.apple.com/guide/keynote/present-on-your-mac-tan72233051/mac), [iCloud](https://support.apple.com/guide/keynote-icloud/gilf0fb207d1)) | Right arrow, Space, Return; Left arrow goes back | Hidden; S shows the slide number on demand | Esc (Q on iCloud and iPad) | Plays in full screen | None; "?" shows a shortcut overlay that the audience does not see | Black bars |
| **Notion presentation mode** ([help](https://www.notion.com/help/presentation-mode)) | Arrow keys or on-screen arrows | Not documented | X button or Esc returns to the page | Enters full screen with zoom-to-fit automatically | Small arrows and an X | Fit to screen |
| **Gamma** ([help](https://help.gamma.app/en/articles/8032935-how-to-present-your-gamma), [ideas forum](https://ideas.gamma.app/ideas/p/improve-present-mode-and-present-mode-controls)) | Left/Right move between cards; Up/Down scrolls a long card | Thin progress bar along the bottom | Esc, or the Exit button in the top toolbar | Choice of "Full screen" or "In tab" | Top toolbar | Cards fill the width |
| **Pitch** ([shortcuts help](https://help.pitch.com/en/articles/4287527-find-keyboard-shortcuts)) | Present-mode keys are not publicly documented; I could not verify them | n/a | n/a | n/a | Shortcut list behind the Help bubble | n/a |

### 2.2 Patterns that matter for /slideshow

1. **Esc means "leave" in every tool except reveal.js** (Google Slides, Keynote, Notion, Gamma). Observed. This matches PRD 4.11. Inferred: in full screen the browser consumes Esc (Tech Lead limit 6). The visible close button is therefore the only exit that behaves the same in every state, so it matters more here than in desktop apps.
2. **The exit sits in a corner, never at the top center.** Notion uses an X, Gamma an Exit button in its top toolbar, and Google Slides a bottom toolbar. Observed. A small icon button in a corner is the common pattern. It also meets limit 5, which keeps controls off the top center and off the top edge, where the browser's "Press Esc" banner and the Safari menu bar appear.
3. **Position cues are quiet or hidden while presenting.** Keynote hides the slide number (S shows it). reveal.js ships with the number off and a thin progress bar on. Gamma shows only a thin bar. Observed. Inferred: a small, muted "3 / 8" plus the project name (PRD Look, AC-103) is in line with the strongest tools. It should never compete with the title.
4. **Chrome hides itself.** Google Slides' toolbar and reveal.js' cursor appear only when the mouse moves. Observed. Inferred: the deck should look like a clean slide when shared on a call. AC-098 requires the close button on every slide, so keep it low-emphasis rather than hiding it.
5. **First-use hints are temporary and tied to an interaction.** reveal.js' controls tutorial and the PRD's "Press F for full screen" both disappear after the first interaction. Observed.
6. **Not every tool advances on a click.** reveal.js and Gamma do not advance on a mouse click; one Gamma user complained that clicking does nothing. Observed. Leon asked explicitly for "click always go to the next". Inferred (I did not check a source for this): this matches how PowerPoint and Keynote behave on the desktop.
7. **Branching decks are rare.** None of the tools above has a menu that branches into separate tracks. The closest features are reveal.js' vertical stacks and overview grid (O / Esc), and Google Slides' "number + Enter" jump. Inferred: the menu slide is the deck's one unusual pattern, so its cards need the strongest "this is clickable" signal in the deck (see 3.4 and 4.3).
8. **Letterboxing is the norm.** Every tool keeps the slide's aspect ratio and fills the leftover space with a plain color: reveal.js uses the page background, Google Slides and Keynote use black. Observed. Inferred: with an opaque `--bg` around a `--bg` frame (limit 2), the bars are invisible. A 16:10 laptop (1440x900, with 45 px bars at top and bottom) then looks full-bleed. Do not draw a frame border: it would make the bars visible and look like an odd box on a shared screen.

---

## 3. Slide design literature for an interview deck

### 3.1 Assertion-evidence

- **Observed:** Michael Alley's assertion-evidence approach puts a sentence headline that states the takeaway at the top of the slide, supported by visual evidence instead of bullets ([assertion-evidence.com](https://www.assertion-evidence.com/); [Garner, Alley et al., ASEE](https://peer.asee.org/assertion-evidence-slides-appear-to-lead-to-better-comprehension-and-recall-of-more-complex-concepts.pdf)). The headline is left-aligned and at most two lines ([Penn State workshop summary](https://www.huck.psu.edu/event/rethinking-slide-design-in-scientific-presentation-the-assertion-evidence-approach-1)). Most of the evidence that it improves comprehension comes from Alley's own research group.
- **Observed (deck):** the copy already follows this approach, with sentence titles ("Then QA passed code it never ran") and 3 to 4 short bullets. The text is fixed.
- **Inferred for the design:**
  - On every content slide, make the title the strongest element: left-aligned, up to two lines, 700 weight.
  - On slides with a visual (screenshot, diagram or chips: A2, B2, B5, B6, C2, C5, D1), give the visual more area than the bullets.
  - On bullet-only slides (A4, A6, A7, A8, B4, B7, B8, C4, C6, C7, C8, D3, D4, D5), the bullets are the evidence. Set them large, with generous line spacing, rather than spreading them to fill the frame.

### 3.2 Readability at a distance and on a call

All sizes here are in frame units (a fraction of the frame height). A 16:9 PowerPoint slide is 7.5 in (540 pt) tall, which converts point-size guidance into frame units:

| Guidance | Points | Frame height |
|---|---|---|
| Leon's pasted guide: titles 32 to 40 pt | 32 to 40 | 5.9% to 7.4% |
| Leon's pasted guide: body 24 pt or more | 24 | 4.4% |
| [U. Waterloo](https://ece.uwaterloo.ca/~dwharder/Presentations/Guidelines/VisualAids/TextFormat/Size/): secondary points 20 pt, tertiary 18 pt | 18 to 20 | 3.3% to 3.7% |
| [U. Florida accessibility](https://citt.it.ufl.edu/resources/course-development/accessible-course-design/accessibility-in-5/video-archive/items/what-makes-text-readable.html): floor of 18 pt | 18 | 3.3% |
| AC-102 minimums: titles / bullets, Titles, Roles, Role / everything else | 37.8 / 22.7 / 13 | 7% / 4.2% / 2.4% |

The AC-102 minimums in CSS px:

| Screen | Frame | Title 7% | Bullets 4.2% | Other 2.4% |
|---|---|---|---|---|
| 1920x1080 | 1920x1080 | 75.6 | 45.4 | 25.9 |
| 1440x900 (16:10) | 1440x810 | 56.7 | 34.0 | 19.4 |
| 1280x720 | 1280x720 | 50.4 | 30.2 | 17.3 |
| 1080p shared into a 960x540 call tile | 960x540 | 37.8 | 22.7 | 13.0 |
| 375x667 landscape | 667x375 | 26.3 | 15.8 | 9.0 |
| 375x667 portrait (T4) | 375x211 | 14.8 | 8.9 | 5.1 |

Inferred:
- **Titles:** the 7% minimum already meets the guide.
- **Bullets:** the 4.2% minimum is slightly below the guide's 24 pt (4.4%). Set bullets at 4.4% or more wherever the slide has room.
- **Other text:** the 2.4% floor equals 13 pt, well below every slide guide.
  - 2.4% is fine for text the interviewer does not need to read: the position cue, key-number chips, the menu footer and the "Details" cue.
  - Text the interviewer should read should be 3.3% or more (the 18 pt floor) where it fits. That covers the stack chips on A3, B3, C3 and D2, the menu card one-liners, the photo captions, the big-number labels, the A2 and B6 diagram labels, and the job slide subtitles.
- **Element count:** Leon's guide asks for about 6 elements and 50 words per slide. C3 has 10 stack chips and B3 has 6 long ones, and that text is fixed. Treat a group of chips as one element: one block, tight even gaps, a single chip style, wrapping into 2 to 3 rows. Rough estimate: C3's chips at 3.3% (about 157 characters plus padding) fill about 3 rows across 90% of the frame width.
- **Video compression:** prefer fills and strokes of 2 px or more over 1 px hairlines, and avoid low-contrast text. In both themes `--text-muted` has enough contrast (section 5.2).

### 3.3 Big-number slides (2a, 2b, A1, B1, C1)

- **Observed:** these slides carry the deck's proof ("70%", "3.5x", "$16.5K", "1,500+"). In assertion-evidence terms, the data is the evidence for the headline.
- **Inferred:**
  - **Layout:** one row of 2 or 3 equal columns.
  - **Number:** in 700 weight and among the largest things on the slide. A1, B1 and C1's titles are only the project name, so on those three slides the numbers can be bigger than the title.
  - **Label:** directly under its number, in 400 weight `--text-muted`, at 3.3% or more.
  - **Consistency:** keep every number the same size, so "3" and "1,500+" read as equals. Use tabular figures if Roboto supports them (`font-variant-numeric: tabular-nums`) so the numbers line up.
  - **Color:** `--text` or `--accent`. `--accent` passes AA as large text in both themes (5.0:1 light, 7.68:1 dark).

### 3.4 Timeline (slide 2)

- **Observed:** four entries in time order. Only the middle two (GoFreight and Exascend) are clickable, each with a "Details" cue and a key. Key 1 is GoFreight (2021) and key 2 is Exascend (2023), so the keys follow the left-to-right order.
- **Observed ([NN/g, clickable elements](https://www.nngroup.com/articles/clickable-elements/)):**
  - Clickable items need familiar cues, such as a container shape, a border or a button look.
  - Static items must not look clickable.
  - Arrows alone are the weakest cue, and icons should be paired with text.
- **Inferred:** a horizontal four-step timeline (dates on top, role and place underneath) reads left to right, like the story. Give the two work entries a card container plus the "Details" label and key chip, and give the two education entries no container. That difference is what tells the viewer which entries are clickable.

### 3.5 Menu (slide 4)

- **Inferred from item 7 of section 2.2 and the NN/g findings above:**
  - **Cards:** four equal cards in one row (or 2x2). Each card has its key number as a chip, the name in 700 and the one-liner.
  - **Highlight:** the start-link "highlighted" state (AC-115) must look different from the keyboard focus ring. Otherwise a highlighted card and a focused card look the same (see 4.4).
  - **Footer:** plain text at 2.4% or more, in `--text-muted`.

---

## 4. Accessibility guidance

### 4.1 Slideshow semantics (WAI-ARIA APG carousel pattern)

The [APG carousel pattern](https://www.w3.org/WAI/ARIA/apg/patterns/carousel/) says (observed):
- **Container:** a `region` or `group` with `aria-roledescription="carousel"`, and a label that does not include the word "carousel".
- **Each slide:** `role="group"` with `aria-roledescription="slide"`, labelled with a unique name, or with a position such as "3 of 10" when there is no name.
- **Live region:** `aria-live="polite"` when the user drives the carousel (no auto-rotation), with `aria-atomic="false"` on the slide wrapper.
- **Buttons:** Next and Previous buttons do not move focus, so the user can press them again and again.

Inferred for /slideshow (limit 12 already requires a hidden live region):
- **Announcement:** one polite announcement per slide change: the slide title, then, on project slides, the project and position. For example: "Then QA passed code it never ran. Multi-Agent System, 7 of 8." On the menu the title itself changes ("Pick another project"), so the change is announced naturally.
- **Menu hint:** the hint "Pick a project: press 1 to 4 or click a card" is a status message. Send it to the same polite live region ([WCAG 4.1.3 Status Messages](https://www.w3.org/WAI/WCAG22/Understanding/status-messages.html)).
- **No double reading:** do not also move focus to the new slide's heading on every change. Screen readers would then read the title twice.

### 4.2 Focus management

- **Inferred:**
  - When a menu card or work card opens a slide, that card disappears and focus would fall back to `<body>`. After every slide change, keep focus on the slideshow layer itself (a focusable container), so the keys keep working and focus is never lost.
  - Tab order inside a slide: the slide's cards (if any) in reading order, then the close button. The close button must be reachable on every slide (AC-098).
  - Use `:focus-visible`, so keyboard focus shows a ring but a mouse click on a card does not leave a ring on screen during a shared interview.

### 4.3 Target size and pointer input

- **Observed:**
  - [WCAG 2.5.8 Target Size (Minimum), AA](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html): pointer targets must be at least 24x24 CSS px, or spaced so that a 24 px circle around each one does not touch another target.
  - [NN/g Touch Target Size](https://www.nngroup.com/articles/touch-target-size/): targets at least 1 cm x 1 cm physical, with about 2 mm between them. That is about 44 px on most phones, which matches the 44 px limit 8 prefers.
- **Inferred:**
  - At 375x211 the menu cards scale down with the frame. Four cards in a row across about 90% of 375 px come to roughly 80x70 px each, which still passes 24 px; a 2x2 grid would pass too.
  - The slide-2 work cards come out at a similar size.
  - The close button is sized to the screen, not the frame (limit 8), so it stays at 44 px.
- **Observed:** [WCAG 2.5.1 Pointer Gestures](https://www.w3.org/WAI/WCAG22/Understanding/pointer-gestures.html) requires a single-pointer alternative to swipes. The PRD's tap-left / tap-right halves already provide one (PRD 4.11).

### 4.4 Focus appearance and focus visibility

- **Observed:**
  - [WCAG 2.4.13 Focus Appearance (AAA)](https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance.html): the focus indicator's area must be at least a 2 CSS px perimeter, with a 3:1 contrast change between focused and unfocused states. The page calls a solid outline of 2 px or more "the easiest and most common way" to meet this; an outline inset inside the element needs about 3 px.
  - [WCAG 2.4.11 Focus Not Obscured (Minimum), AA](https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum.html): content the author adds must not completely hide the focused item.
- **Inferred:**
  - The "Press F for full screen" hint and the menu hint must not cover a card or the close button.
  - The site's existing focus style is a 2 px `--accent` outline (`focus-visible:outline-2 focus-visible:outline-[var(--accent)]`, section 5). Reuse it with an outward offset. `--accent` on `--bg` is 5.0:1 in light and 7.68:1 in dark, above the 3:1 minimum.
  - The start-link highlight (AC-115) will tend to use the accent color as well. Give the highlight a different form, not a second accent outline: for example a filled key chip, or a heavier card fill plus a change in text weight. Do not rely on color alone ([WCAG 1.4.1](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html)).

### 4.5 Single-key shortcuts

- **Observed:** [WCAG 2.1.4 Character Key Shortcuts, A](https://www.w3.org/WAI/WCAG22/Understanding/character-key-shortcuts.html) says a shortcut made of a single printable key must meet one of three options: the user can turn it off, the user can remap it, or it is active only while its component has focus. The slideshow uses F, M, 1 to 4 and 1 to 2, and the site already uses 1 to 7 on every page.
- **Inferred:** the defensible reading is the third option, "active only on focus". The slideshow is a full-viewport component that holds focus, it has no text input, and its keys work only inside it. The remaining risk falls mainly on speech-input users. The design cannot remove it without a PRD change (adding a settings control). I note it here for the UX designer and the Tech Lead; it is not a recommendation to change anything.

### 4.6 Motion

- **Observed:**
  - Slides change instantly (limit 1). Only the hints and focus may animate, and only in a way that respects `prefers-reduced-motion` ([WCAG 2.3.3 Animation from Interactions](https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html); [MDN prefers-reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion)).
  - No file in `site/app` or `site/components` uses `prefers-reduced-motion` today, and the mobile drawer animates with `transition-transform duration-200`.
- **Inferred:** MOD-012 will set the site's first reduced-motion pattern. The motion designer should define it.
- The menu hint disappears on its own after about 2 seconds. [WCAG 2.2.2](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html) allows this because the hint is not moving content. Its text must still go to the live region (4.1) so screen-reader users do not miss it.

### 4.7 Full screen

- **Observed:** [caniuse: Fullscreen API](https://caniuse.com/fullscreen) lists iPhone Safari as "partial support"; caniuse gives no detail on what the partial support covers. Limit 4 already says the iPhone never goes full screen.
- **Inferred:** not showing the "Press F" hint on touch-only devices would be a nice touch. The PRD shows the hint on every direct visit with no exceptions, though, so this is listed in section 6 and not recommended.

---

## 5. Audit of the current site look

### 5.1 Tokens

- **Observed (`site/app/globals.css`):**
  - `:root` (Carbon White) and `.dark` (Carbon Gray 100) define `--bg`, `--surface`, `--text`, `--text-muted`, `--border`, `--hover`, `--accent` and `--accent-hover`, matching PRD section 2 exactly.
  - A second, duplicate set of `--color-*` Tailwind tokens (inline `@theme`) holds only the light values. Pages use the `var(--x)` form, not the `--color-*` utilities.
- **Inferred:** MOD-012 should use `var(--x)` like every other page, so that dark mode works.

### 5.2 Contrast of token pairs (computed with the WCAG 2 formula)

| Pair | Light | Dark | Use |
|---|---|---|---|
| `--text` on `--bg` | 18.1 | 16.45 | Titles, bullets |
| `--text` on `--surface` | 16.45 | 13.76 | Text in cards and chips |
| `--text-muted` on `--bg` | 7.81 | 10.59 | Labels, position, footer (passes AAA) |
| `--text-muted` on `--surface` | 7.10 | 8.86 | Text in chips |
| `--accent` on `--bg` | 5.00 | 7.68 | Numbers, focus ring |
| `--accent` on `--surface` | 4.55 | 6.43 | Accent inside cards (passes AA for normal text) |
| `--accent` on `--hover` | 4.08 | 5.37 | Fails AA for small text in the light theme |
| `--bg` on `--accent` (filled chip) | 5.00 | 7.68 | For example a filled key chip |
| `--border` on `--bg` | 1.32 | 1.57 | **Below the 3:1 non-text minimum** |
| `--surface` on `--bg` | about 1.1 | about 1.2 | Card fill against the background |

Inferred:
- **Text:** every text token passes AA in both themes (limit 3). Avoid small `--accent` text on `--hover`.
- **Card edges:** `--border` and `--surface` alone barely set a card apart from the background (1.1 to 1.6:1). That is below the 3:1 of [WCAG 1.4.11 Non-text Contrast](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html). 1.4.11 does not require a visible card boundary when text identifies the control, but on a compressed video call the cards may look like loose text.
- **Diagram arrows:** the arrows and connectors on A2 and B6 are graphics needed to understand the slide, so they must reach 3:1. Draw them in `--text-muted` (7.8 / 10.6) or `--text`, not `--border`.
- **Clickable cards:** let the key chip and the "Details" label carry the affordance. If the UI designer wants a visible edge, add a 2 px border in `--text-muted`. Carbon itself has a `border-strong` token for this (Gray 50 in light, Gray 60 in dark; [Carbon themes](https://carbondesignsystem.com/elements/themes/overview/)), but the site has no such variable; see section 6.

### 5.3 Typography

- **Observed:**
  - `layout.tsx` loads Roboto 400, 500 and 700 (latin subset, `display: swap`) as `--font-roboto`. Carbon's own typeface is IBM Plex; the site pairs Roboto with Carbon's colors ([Carbon type sets](https://carbondesignsystem.com/elements/typography/type-sets/)).
  - The Home title, project titles, section headings and the sidebar name use `font-semibold` (600), but weight 600 is not loaded. Browsers then use the nearest heavier loaded weight, so these render at 700.
  - Site sizes: page titles 28 to 30 px semibold (`leading-9`); Skills h1 `text-3xl font-medium tracking-tight`; body 16 px with `leading-7` (1.75); section labels `text-sm uppercase tracking-wider`, muted; captions `text-sm`, muted.
  - Carbon's large display styles (`fluid-display-01/03/04`) use the Light (300) weight.
- **Inferred:**
  - The site's real heading weight is 700. The deck should specify 700 for titles, not 600, so the two match.
  - Weight 300 is not loaded and limit 11 does not allow it, so the deck cannot copy Carbon's display styling directly. Use 700 for numbers and titles, and 400 for the labels under the big numbers.
- **Glyph coverage:**
  - **Observed (built CSS):** Next self-hosts Roboto in several files, each covering a range of characters. The latin file covers all deck text except "⇄" (U+21C4) in the A2 box "Engineer ⇄ QA". That glyph is in Roboto's separate "math" file, which the browser downloads only the first time the glyph is shown.
  - **Inferred:** if A2 is first shown after the network is off (AC-105), the arrow may render in a fallback font or as a missing glyph. This is flagged for the Tech Lead in section 6. The UI designer may draw the diagram arrows as SVG, but the text "Engineer ⇄ QA" must stay word for word.

### 5.4 Components (observed)

| Element | Classes | Notes for MOD-012 |
|---|---|---|
| Project tag chip | `text-xs px-2 py-0.5 rounded bg-[var(--surface)] text-[var(--text-muted)] border border-[var(--border)]` | 4 px radius, muted text |
| Skills chip | `px-3 py-1 rounded-full text-sm border border-[var(--border)] text-[var(--text)] bg-[var(--surface)]` | Pill shape, full-strength text |
| Primary button | `px-4 py-2 rounded text-sm font-medium bg-[var(--accent)] text-[var(--bg)]` | |
| Nav shortcut badge | `size-5 rounded-sm border text-xs font-medium`, muted on `--bg` | A natural model for the key-number chips on cards |
| Active nav item | `bg-[var(--text)] text-[var(--bg)]` | Inverted, high contrast |
| Pull quote | `border-l-2 border-[var(--accent)] pl-4 font-medium` | The site's one accent-bar motif |
| Images | `rounded-lg border border-[var(--border)]` | 8 px radius, 1 px border |
| Focus | `focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)]` | 2 px accent, no offset |
| Cards and links | `rounded-lg`, hover `bg-[var(--hover)]` | |

Inferred:
- **Chips:** the site has **two chip styles**: a 4 px tag with muted text, and a pill with full-strength text. The deck should pick one for the stack chips and the B6 flow chips and use it everywhere (Leon's guide asks for "one consistent look on every slide"). The project-page tag chip is the closer reference, because the stack chips are tags. Scale it up in frame units and use `--text` so it stays legible on a call.
- **Key chips:** the nav shortcut badge is the site's existing visual language for keys. Reusing its look (rebuilt inside MOD-012, per limit 13) for the key numbers on the menu and work cards, and for "F" in the hint, ties the deck to the site.
- **Corner image:** `globals.css` adds a decorative `main::after` image (`/Subject.png`, bottom-right corner) on every page. The slideshow must not show it (limit 2, CONV-007). If /slideshow renders inside the root layout's `<main>`, the engineer must cover it with the opaque layer.

### 5.5 Images

- **Observed:** these slide images are in `site/public`:

  | File | Size |
  |---|---|
  | `IMG_6875.JPG` | 390 KB |
  | Bouldering photo (`4D0BDA8A-B273-40DC-BD3D-3098AF6BBB73.JPG`) | 796 KB |
  | `siteplusplus-home.jpg` | 102 KB |
  | `siteplusplus-reports.jpeg` | 90 KB |
  | `tabvault-home.png` | 467 KB |
  | **Total** | **about 1.85 MB** |

  The ProjectDay files (`projectday-*.png` and the three-screen image, MOD-011 assets) are not in `site/public` at this commit.
- The 3 MB budget (AC-106) is the Tech Lead's to track. I note it only because the sizes of the B2 and B5 images are not known yet.

---

## 6. Recommendations I am NOT making because they conflict with a limit or the PRD

| Research pattern | Source | Conflict |
|---|---|---|
| Slide transitions (reveal.js default "slide") | reveal.js config | Limit 1 and PRD Look: slides change instantly |
| A URL hash per slide (reveal.js `hash`) | reveal.js config | Limit 1: no URL per slide |
| Overview grid (reveal.js O / Esc), or Google Slides' "number + Enter" jump | reveal.js, Google Slides | Not in PRD Controls; Esc must leave |
| "?" shortcut help overlay | Keynote, reveal.js | PRD 4.11 lists all on-screen text; an overlay adds both text and a key |
| On-screen previous and next arrows | reveal.js, Notion | Not in PRD Controls, and they add chrome to a shared screen. Gap to note: a mouse has no way to go back (PRD: "A mouse click never goes back") |
| Progress bar | reveal.js, Gamma | The PRD names only the project name and position as position cues (AC-103). A bar is not text, but it is a design choice the PRD does not anticipate; ask PM before adding one |
| Hiding the "Press F" hint on touch devices | caniuse (no element full screen on iPhone) | PRD and AC-096 show the hint on every direct visit |
| Carbon `border-strong` (Gray 50/60) for card and chip edges, or Carbon display styles at weight 300 | Carbon themes, type sets | Limit 3 (existing CSS variables only) and limit 11 (Roboto 400/500/700 only) |
| A setting to turn off or remap single-key shortcuts (WCAG 2.1.4 options 1 and 2) | WCAG 2.1.4 | Not in the PRD; "active only on focus" is the option that fits |
| Auto-hiding the close button (Google Slides toolbar style) | Google Slides | AC-098: the close button is visible on every slide |

Flag for the Tech Lead (not a design conflict): "⇄" in A2 is outside Roboto's preloaded latin file (section 5.3), which may affect offline rendering under AC-105.

## 7. Input on Tech Lead limit 9: does a click on the background around the frame count as "on a slide"?

The decision belongs to the UX designer. The evidence:
- **Observed:** Leon said, "with the mouse, click always go to the next".
- **Observed:** the PRD's touch controls already use halves of the **screen**, not of the frame ("a tap on the right half of the screen").
- **Inferred:** on a 16:10 laptop, the bars are invisible when they share `--bg` with the frame (item 8 of section 2.2), so the user cannot tell the frame from the background.
- **Inferred conclusion:** counting the background as "on a slide" is the only reading under which a click behaves the same everywhere the user sees no boundary, and it matches the touch rule. The exceptions stay as in the PRD: cards and the close button.

---

## 8. Findings that most affect the design (ranked)

1. **Titles first, evidence second.** The copy is already assertion-evidence. On every slide the sentence title should be the dominant element: left-aligned, at most two lines, in 700. On slides with a visual, the visual gets more space than the bullets (3.1).
2. **Design for the video call, not just the laptop.** A 1080p share shown in a 960x540 tile turns the 2.4% minimum into 13 px. Use 4.4% or more for bullets. Use 3.3% or more for anything the interviewer reads: chips, captions, card one-liners, number labels and diagram labels. Keep 2.4% only for the position cue, key chips, the footer and "Details" (3.2).
3. **No frame border, so the letterbox is invisible.** The `--bg` frame sits on a `--bg` background, as in reveal.js, so the deck looks full-bleed on 16:10 screens and on shared screens (item 8 of section 2.2).
4. **Close button: in a corner, quiet, always visible, sized to the screen.** A corner is where the industry puts it. Keep it off the top center and the top edge (limit 5). Make it 44 px, with a `--text-muted` icon (7.8:1 light, 10.6:1 dark) and a 2 px accent focus ring (2.2, 4.3, 4.4).
5. **The focus ring and the start-link highlight must look different.** Use the site's 2 px `--accent` outline (with an offset) for focus only. Show the AC-115 highlight in a different form, never with color alone (4.4).
6. **Card affordance comes from the key chip and label, not the border.** Against `--bg`, `--border` reaches only 1.3 to 1.6:1 and `--surface` about 1.1 to 1.2:1. Clickable cards (the menu and the two timeline work cards) need the key chip (modeled on the sidebar shortcut badge) and a stronger edge; the static timeline entries get no container. Draw diagram arrows in `--text-muted` or `--text` (5.2, 3.4).
7. **One live region, one announcement, focus stays on the deck.** A polite live region announces "title. Project, n of N", and the menu hint goes there too. Focus returns to the slideshow layer after every change, so a card that disappears never drops focus. Use `:focus-visible` only (4.1, 4.2).
8. **Big numbers as equals.** One row, all the same size, 700 weight, tabular figures, in `--text` or `--accent`, with a muted label at 3.3% or more under each (3.3).
9. **Match the site's real type, chips and key badges.** Headings render at 700 today because 600 is not loaded. Pick one chip style (the project tag chip, scaled up, in `--text`) for the stack and B6 chips. Reuse the shortcut-badge look for the keys and the "F" hint. Never show the `Subject.png` corner image (5.3, 5.4).
10. **Count the letterbox as part of the slide for clicks** (limit 9 input, section 7). Note the gaps the PRD leaves open instead of patching them in the design: no mouse "back", no help overlay, and the offline risk for the "⇄" glyph (section 6).

## Sources

- reveal.js: [Config](https://revealjs.com/config/), [Presentation size](https://revealjs.com/presentation-size/), [Keyboard](https://revealjs.com/keyboard/)
- Google: [Present slides (Docs Editors Help)](https://support.google.com/docs/answer/1696787), [Slides present mode updates](https://workspaceupdates.googleblog.com/2019/06/slides-present-mode-updates.html)
- Apple: [Play a Keynote presentation on Mac](https://support.apple.com/guide/keynote/present-on-your-mac-tan72233051/mac), [Keynote for iCloud shortcuts](https://support.apple.com/guide/keynote-icloud/gilf0fb207d1)
- [Notion presentation mode](https://www.notion.com/help/presentation-mode)
- Gamma: [How to present your gamma](https://help.gamma.app/en/articles/8032935-how-to-present-your-gamma), [Present mode ideas thread](https://ideas.gamma.app/ideas/p/improve-present-mode-and-present-mode-controls)
- [Pitch: find keyboard shortcuts](https://help.pitch.com/en/articles/4287527-find-keyboard-shortcuts)
- Assertion-evidence: [assertion-evidence.com](https://www.assertion-evidence.com/), [Garner, Alley et al. (ASEE)](https://peer.asee.org/assertion-evidence-slides-appear-to-lead-to-better-comprehension-and-recall-of-more-complex-concepts.pdf), [Penn State Huck workshop](https://www.huck.psu.edu/event/rethinking-slide-design-in-scientific-presentation-the-assertion-evidence-approach-1)
- Type size: [U. Waterloo slide text size](https://ece.uwaterloo.ca/~dwharder/Presentations/Guidelines/VisualAids/TextFormat/Size/), [U. Florida, What makes text readable](https://citt.it.ufl.edu/resources/course-development/accessible-course-design/accessibility-in-5/video-archive/items/what-makes-text-readable.html)
- Video calls: [Harvard SEAS screen-sharing tips](https://seas.harvard.edu/zoom_events/helpful-tips-screen-sharing), [Donn Felker, I can't read your screen](https://donnfelker.com/i-cant-read-your-screen-mr-presenter)
- NN/g: [Clickable elements](https://www.nngroup.com/articles/clickable-elements/), [Touch target size](https://www.nngroup.com/articles/touch-target-size/)
- W3C: [APG Carousel pattern](https://www.w3.org/WAI/ARIA/apg/patterns/carousel/). WCAG 2.2 Understanding: [2.5.8 Target Size](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html), [2.4.13 Focus Appearance](https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance.html), [2.4.11 Focus Not Obscured](https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum.html), [2.1.4 Character Key Shortcuts](https://www.w3.org/WAI/WCAG22/Understanding/character-key-shortcuts.html), [4.1.3 Status Messages](https://www.w3.org/WAI/WCAG22/Understanding/status-messages.html), [2.5.1 Pointer Gestures](https://www.w3.org/WAI/WCAG22/Understanding/pointer-gestures.html), [1.4.11 Non-text Contrast](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html), [1.4.1 Use of Color](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html), [2.3.3 Animation from Interactions](https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html), [2.2.2 Pause, Stop, Hide](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html)
- [MDN prefers-reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion), [caniuse Fullscreen API](https://caniuse.com/fullscreen)
- IBM Carbon: [Themes overview](https://carbondesignsystem.com/elements/themes/overview/), [Type sets](https://carbondesignsystem.com/elements/typography/type-sets/)
