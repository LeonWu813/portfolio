# Slideshow UI: visual design (MOD-012, /slideshow)

Written by: ui-designer, 2026-11-01. Revision 1 (after Design Lead review 1) and Revision 2 (after Leon's review), same day; changelogs in sections 15 and 16. Intended path: `project-planning/design/ux-team/slideshow-ui.md`.
Inputs: `slideshow-brief.md` (13 Tech Lead limits), `slideshow-research.md`, `slideshow-ux.md`, `project-planning/prd.md` sections 2, 3 and 4.11 (Revision 1.8), `asset/content/interview-deck.md` at HEAD, `site/app/globals.css`.
Companion files: `slideshow-mock.html` (every slide of the deck, real text, both themes) and `slideshow-mock-<type>-<light|dark>.png` (1600x900, headless Chrome).

Advisory only. No slide text, slide, order, control or acceptance criterion changes here. Where I needed a decision the PRD does not make, it is in section 12 with a recommendation.

Units: **fh** = 1% of frame height, **fw** = 1% of frame width. In CSS the frame is a size container (`container-type: size`), so `1cqh` = 1 fh and `1cqw` = 1 fw inside it. On the 1600x900 artboard 1 fh = 9 px. Everything inside the frame is in fh (limit 7). The close button is in CSS px (limit 8). The F hint is screen-anchored but sized from the frame height with a 14 px floor (6.8).

---

## 1. Design idea in one paragraph

A Carbon-style editorial deck: white (or Gray 100) page, one blue accent, Roboto 700 sentence titles, lots of left-aligned structure on a 12-column grid. The accent is used for exactly four jobs: the short "tick" above every title (the deck's signature, one consistent look), the square bullet markers, the big numbers, and interactive cues (focus ring, the top edge of the timeline work cards). Everything clickable has a visible card edge and a key chip; nothing static does. No gradients, no shadows, no decorative images (limit 10), no frame border (research 2.2 item 8).

## 2. Tokens

### 2.1 Site variables used (unchanged; from `site/app/globals.css`)

`--bg`, `--surface`, `--text`, `--text-muted`, `--border`, `--hover`, `--accent`, `--accent-hover`. The slideshow reads them through `var(--x)` so it follows the active `.dark` class (limit 3). No new colors, no theme-specific values.

### 2.2 Derived values (scoped to the MOD-012 layer, not added to globals.css)

| Token | Value | Why |
|---|---|---|
| `--ss-edge` | `color-mix(in srgb, var(--text-muted) 65%, var(--bg))` = `#8f8f8f` light / `#888888` dark | Edge of clickable cards, key chips, A2 boxes, B6 chips, timeline axis, number rules. `--border` is only 1.32 / 1.57:1 on `--bg`; this mix is 3.23 / 5.10:1, which meets WCAG 1.4.11 (3:1) and survives video compression. In light it lands within 2 levels of Carbon's own `border-strong` Gray 50 (`#8d8d8d`), so it is on-system. One formula, both themes, no new hex values. `color-mix` is supported in every browser the PRD targets (Chrome 111, Safari 16.2, Firefox 113). |
| `--ss-line` | `max(2px, 0.3cqh)` | Every structural stroke (card edges, rules, axis). 2.7 px at 900 tall, never under 2 px on small frames (research 3.2: no hairlines on video). |

No other derived color exists. Focus uses `--accent`; highlight uses `--text`; hover uses `--hover`; the accent top edge of a timeline work card stays `--accent` in every state (see 10).

### 2.3 Radius

| Token | Value | Use | Site equivalent |
|---|---|---|---|
| `--radius` | 1 fh | Cards, images, the A2 loop corners | `rounded-lg` (8 px at 900 tall) |
| `--radius-sm` | 0.6 fh | Chips, key chips, A2 boxes, A2 bar | `rounded` (4 px) |
| pill | 99 fh | Menu hint only | Skills chip (`rounded-full`) |
| Phone screenshots | 2.2 fh (B5), 1.6 fh (B2) | Echo the iPhone's corner | none |

## 3. Type scale (Roboto 400 / 500 / 700 only, no italic; limit 11)

All sizes in fh. px columns: 1920x1080 / 1280x720 / 375x211 (upright phone, T4).

| Role | fh | Weight | Line height | Tracking | Color | px 1080 / 720 / 211 | AC-102 floor | Used for |
|---|---|---|---|---|---|---|---|---|
| Hero | 12 | 700 | 1.05 | -0.02em | `--text` | 130 / 86 / 25 | 7 (title) | Slide 1 "Hi, I'm Leon" |
| Display number | 13 | 700, `tabular-nums` | 1.0 | -0.02em | `--accent` | 140 / 94 / 27 | 2.4 | Big numbers on 2a, 2b, A1, B1, C1 |
| Title | 7.5 | 700 | 1.12 | -0.015em | `--text` | 81 / 54 / 16 | 7 | Every slide title (`h1`), full content width, `text-wrap: balance`, max 2 lines |
| Body | 5.6 | 400 | 1.3 | 0 | `--text` | 60 / 40 / 12 | 4.2 | Bullets, Titles lines (slide 1), A5 Roles |
| Role | 5.6 | 500 | 1.3 | 0 | `--text` | 60 / 40 / 12 | 4.2 | "Role" line on A3, B3, C3, D2 |
| Subtitle | 4.2 | 400 | 1.3 | 0 | `--text-muted` | 45 / 30 / 9 | 2.4 | Job slide Subtitle |
| Name (card) | 4.6 | 700 | 1.15 | 0 | `--text` | 50 / 33 / 10 | 2.4 | Menu card names |
| Label | 3.6 | 400 or 500 | 1.25-1.3 | 0 | `--text-muted` or `--text` | 39 / 26 / 7.6 | 2.4 | Things the interviewer reads: chips, captions, number labels, card one-liners, timeline entries and dates, A2/B6 labels, menu hint |
| Meta | 2.8 | 400 or 500 | 1.2 | 0 | `--text-muted` | 30 / 20 / 5.9 | 2.4 | Things only Leon needs: position cue, menu key chips, menu footer |

Why these numbers:
- Title 7.5 fh = 40.5 pt on a PowerPoint slide: top of Leon's guide (32-40 pt) and above the 7% floor with margin for rounding.
- Body 5.6 fh = 30 pt: above the guide's 24 pt (4.4 fh) and the research's 4.4 fh video floor. A 1080p share in a 960x540 call tile shows bullets at 30 px. Titles may use the full content width (157.78 fh, no max-width). At that width every deck title fits on one line at 1920x1080, 1600x900, 1440x900, 1280x720, 960x540, 667x375 and 500x889 (mock audit, Revision 1). `text-wrap: balance` stays on, so a title that ever wraps splits evenly.
- Label 3.6 fh = 19.4 pt: above the research's 3.3 fh "interviewer reads it" floor.
- Meta 2.8 fh: above the 2.4 floor with rounding margin; reserved for Leon-facing text (research 3.2).
- Display 13 fh: the widest number ("1,500+") still fits in a 4-column cell; all numbers on a slide are the same size (research 3.3).
- Weights: 700 where the site renders headings today (research 5.3: 600 falls back to 700), 500 for emphasis inside text, 400 for reading text.

Dynamic text size: the deck does not reflow with browser text zoom (every size is frame-relative, by design and limit 7). Pinch-zoom stays on (UX Q13) and is the accessibility path on phones.

Language: all on-screen text is Latin; Roboto's latin subset covers it once the A2 "⇄" is drawn (section 9.12). Screenshots contain Traditional Chinese but they are images, not text.

## 4. Spacing scale (fh)

| Token | fh | px @900 | Use |
|---|---|---|---|
| `--sp-1` | 1 | 9 | Line-to-line inside a group (slide 1 Titles, timeline role to org) |
| `--sp-2` | 2 | 18 | Chip gaps, caption gap, number to label, title to subtitle |
| `--sp-3` | 3 | 27 | Between bullets; card padding; tick to title; grid gutter |
| `--sp-4` | 4 | 36 | Between A5 rows; menu card top padding; key chip to name |
| `--sp-6` | 6 | 54 | Title block to body (every slide); between photos is `--sp-4` |
| `--sp-8` | 8 | 72 | Title to the timeline |

Rule of thumb: inside a group use 1-3, between groups 6, never more than 8 between related things.

## 5. Layout grid (16:9 artboard, 177.78 x 100 fh)

```
 0 fh ┌──────────────────────────────────────────────────────────────────────┐
      │                                                                      │
 9 fh │  ▬ tick (6 x 0.8 fh, --accent)                                       │
12 fh │  Title, 7.5 fh, max 2 lines                                          │
      │                                                                      │
      │  ← 10 fh →|  12 columns, 3 fh gutters, column ≈ 10.4 fh  |← 10 fh → │
      │           |  content box: x 10 → 167.78 fh, y 9 → 85 fh   |          │
85 fh │- - - - - - - - - - - - - - - - - - - - - - - - - - - - - -┌─────────┤
      │  Position cue / menu footer (bottom 5.2 fh)               │ close   │
100fh └───────────────────────────────────────────────────────────┴─────────┘
                                                        reserved 8 fw x 15 fh
```

- Margins: 10 fh left and right (5.6 fw), 9 fh top. Content box ends at 85 fh, so the bottom 15 fh is a band for the position cue (left) and the close button (right).
- Columns: 12 x ≈10.4 fh with 3 fh gutters (CSS: `--col: calc((100cqw - 20cqh - 33cqh) / 12)` evaluated inside the frame).
- Reserved zones (UX 5, 6.3), kept empty on every slide and checked by the mock's audit at 1600x900, 1920x1080, 1440x900, 1280x720, 667x375 and 375x667:
  - bottom-right 8 fw x 15 fh (close button), every slide;
  - bottom-left 30 fw x 15 fh on slide 1 (F hint). Slide 1 content is vertically centred above it.
- Alignment: everything left-aligned to the 10 fh margin (assertion-evidence, research 3.1). Nothing is centred except the menu hint (centred on the card row, UX 2.3) and the A2 bar label.
- Letterbox: frame `width: min(100vw, 100vh * 16/9)`, `aspect-ratio: 16/9`, centred in the opaque `--bg` layer, no border (UX 8.1).

## 6. Shared components

### 6.1 Title block (every slide except slide 1)
Tick (6 x 0.8 fh, `--accent`, square ends), 3 fh gap, `h1` title (Title style). Body starts 6 fh below the title's last line. The tick is the one decorative element in the deck; it ties to the site's accent pull-quote bar.

### 6.2 Bullets
`ul` with no native markers; each `li` is a 2-column grid (4.4 fh marker column, text). Marker: 1.3 fh solid `--accent` square, top aligned to the first line's x-height (`margin-top: calc(var(--fs-body) * .65 - .65cqh)`), so wrapped lines hang cleanly. 3 fh between bullets. Bullet boxes shrink to their text (`align-items: flex-start`) so long bullet boxes never cross the close zone.
Wrapping: `text-wrap: pretty` on every bullet; `text-wrap: balance` on bullets in the narrow text column beside a screenshot (7.7, 7.10), which removes the one-word last lines ("App / Store", "re-checks / weekly"). Hyphenated compounds never break at the hyphen: wrap each word containing "-" in a `white-space: nowrap` span (markup only, the text is unchanged).

### 6.3 Chips: two named roles
The deck has exactly two chip-like styles, each with one job:

| Role | Where | Weight | Edge | Padding | Why it differs |
|---|---|---|---|---|---|
| **Tag chip** | Stack chips on A3, B3, C3, D2 | 400 | `--ss-line` in `--border` (decorative) | 1.3 x 2.2 fh | A list of labels, like the site's project tag chip. The text identifies it; the edge is decoration. |
| **Diagram node** | A2 boxes, B6 flow chips | 500 | `--ss-line` in `--ss-edge` (3:1 graphic) | 1.6 x 2.6 fh (B6); fixed width, 10 fh tall (A2) | A step in a process; its edge is part of a diagram the viewer must read, so it meets 1.4.11. |

Shared by both: Label 3.6 fh, `--text`, `--surface` fill, `--radius-sm`, `white-space: nowrap`, 2 fh gaps.

### 6.4 Key chip
The sidebar shortcut badge, rebuilt in frame units (limit 13): min 4.4 x 4.4 fh, Meta 2.8 fh 500 `--text-muted`, `--ss-line` border in `--ss-edge`, `--bg` fill, `--radius-sm`, tabular figures. Used on menu cards only (Revision 2 removed it from the timeline work cards). The F hint uses the same look in px (6.8).

### 6.5 Clickable card (timeline work cards, menu cards)
`--surface` fill, `--ss-line` border in `--ss-edge` (3.23 / 5.10:1 on `--bg`), `--radius`, padding 3 fh. Cursor `pointer`. States in section 10.

### 6.6 Position cue (project slides only; AC-103)
Frame bottom-left: left 10 fh, bottom 5.2 fh. "ProjectDay" (Meta, 500, `--text-muted`), a 2.6 fh tall `--ss-line` divider in `--border`, then "3 / 8" (Meta, 400, `--text-muted`, tabular, `aria-hidden`, with visually hidden "3 of 8" beside it, UX 7). 7.81 / 10.59:1. Never on slides 1, 2, 2a, 2b, 3 or the menu.

### 6.7 Close button (screen-anchored, CSS px; limit 8, UX 5)
- 44 x 44 px, `position: fixed; right: 16px; bottom: 16px` (8 px when the viewport's short side < 500 px), plus `env(safe-area-inset-*)`.
- Icon: drawn X, 18 x 18 px, two 2 px strokes, round caps, `--text-muted`. No fill at rest.
- Hover / pressed: `--hover` fill, 4 px radius, icon `--text`.
- Focus-visible: 2 px `--accent` outline, 2 px offset (same as site focus, plus offset).
- No visible label, no tooltip (UX 5).

### 6.8 "Press F for full screen" hint (screen-anchored, sized from the frame; UX 6.3, limit 7)
- Position: `position: fixed; left: 16px; bottom: 16px` (8 px under a 500 px short side, plus safe-area insets), `min-height: 44px`, contents vertically centred. Off the top centre and top edge (limit 5).
- Size: `font-size: max(14px, calc(min(100dvh, 100vw * 9 / 16) * 0.028))`, i.e. 2.8% of the frame height (Meta, above the 2.4% floor of AC-102) with a 14 px floor on tiny frames. Results: 30.2 px at 1920x1080, 25.2 px at 1600x900, 22.7 px at 1440x900, 20.2 px at 1280x720, 14 px on a 375x211 phone frame.
- Everything else scales with it in `em`: key chip 1.6em square, border `max(1px, .08em)` in `--ss-edge`, radius .15em; gaps .4em. Text "Press", key "F", "for full screen", Roboto 500 `--text-muted` (7.81 / 10.59:1).
- Fit: at 1920x1080 the hint is about 340 x 48 px, inside slide 1's reserved 30 fw x 15 fh zone (576 x 162 px); the mock audit confirms slide 1 keeps that zone empty.
- Not focusable today (UX Q3). Motion: motion designer.

## 7. Per-slide-type layouts

Positions in fh from the frame's top-left at the 16:9 artboard. "cols" are grid columns. Every slide keeps its DOM order = reading order = visual order (UX 7).

### 7.1 Intro (slide 1) — PNG `intro`
- Content block vertically centred in the 9 → 85 fh box (with 6 fh extra bottom padding so it sits slightly above centre, clear of the F hint zone).
- Tick, then "Hi, I'm Leon" in Hero 12 fh.
- 6 fh gap, then the three Titles lines in Body 5.6 fh, stacked with 1 fh gaps, inside a block with a `--ss-line` left border in `--accent` and 4 fh left padding (the site's pull-quote motif). Line 1 "Full-Stack Software Engineer" in 500 `--text`; lines 2 and 3 in 400 `--text-muted`.
- Nothing else: no avatar (AC-100), no position cue. F hint bottom-left on direct visits.

### 7.2 Timeline (slide 2) — PNG `timeline`, `timeline-focus`
- Title block; 8 fh gap; a 4-column grid (each column = 3 grid cols).
- Each column, top to bottom: date (Label 3.6 fh, 500, `--text-muted`, tabular; 5 fh row), a node on a horizontal axis, then the entry.
- Axis: full content width, `--ss-line` in `--ss-edge`, through the node centres.
- Nodes: 2.8 fh circles with a `--ss-line` ring. Education: ring `--text-muted`, `--bg` fill (hollow). Work: filled `--accent`. The filled node is a second, non-colour-only cue (form: filled vs hollow).
- Education entries (2017, 2025): no container. Role in Label 700 `--text`, org and place under it in Label 400 `--text-muted`. Their text is inset by the card padding so all four text columns align.
- Work entries (GoFreight, Exascend; Revision 2): clickable card with **no "Details" text and no key chip** (Leon; deck 02e9c80). Content: role (Label 700) and org and place (Label 400 muted) only; height = content. Keys 1 and 2 still open them as a hidden shortcut (`aria-keyshortcuts="1"` / `"2"`, nothing visible).
- How the work cards still read as clickable, without any text cue:
  1. **Container vs none:** they are the only two boxed entries on the slide; the education entries have no box (research 3.4, NN/g: a container is the strongest familiar cue).
  2. **A clear edge:** `--ss-line` border in `--ss-edge` (3.23 / 5.10:1, meets 1.4.11) on a `--surface` fill.
  3. **An accent top edge:** 0.8 fh `--accent` border-top on the card. In this deck the accent means "interactive" (focus ring, menu-card keys sit with it) or the deck's signature tick; on this slide it marks exactly the two things you can open. It also ties each card to its filled accent node directly above it.
  4. **Filled vs hollow nodes** on the axis (form, not only colour).
  5. **Pointer states:** `cursor: pointer`, `--hover` fill on hover and press (instant), and the 2 px `--accent` focus ring 3 px outside on `:focus-visible`.
  Leon drives the deck himself, so the cue only has to be discoverable, not instructional; the audience never clicks.
- Text split (PRD allows it): "2021 to 2023" / "Marketing Project Manager" / "GoFreight, Taipei". The source's colon after the dates and the comma after the role fall at line breaks and are not drawn; see Q3.

### 7.3 Hidden job slide (2a, 2b) — PNG `job` (2a, 3 numbers), `job-2` (2b, 2 numbers)
- Title block, then Subtitle 4.2 fh `--text-muted`, 2 fh below the title.
- Numbers row vertically centred in the remaining space: a 3-cell grid, each cell 4 cols wide. 2b uses the first two cells (same cell width, so number sizes and positions match 2a; the empty third cell keeps the left-aligned rhythm).
- Each cell: `--ss-line` left rule in `--ss-edge`, 3 fh padding; number in Display 13 fh `--accent` 700 tabular; 2 fh gap; label Label 3.6 fh `--text-muted`, max 40 fh wide (wraps to 2-3 lines).
- No position cue (PRD Look).

### 7.4 Photo slide (3) — PNG `photo`
- Title block; 4 fh gap; two figures side by side, left-aligned, 4 fh apart.
- Each photo box 48 x 64 fh (exactly 0.75:1, limit 10), `object-fit: contain`, `--radius`, thin `--border` edge. Photos run from about 24.5 to 88.5 fh.
- Captions (Label 3.6 fh, `--text-muted`) sit 2 fh under each photo, in the bottom band (about 90.5 to 95 fh). Slide 3 has no position cue, so the band's left side is free; the captions stay well left of the close zone.
- The photos are about 23% larger in area than in the first version. The right ~55 fh stays open, because two portrait photos cannot fill a landscape frame without cropping (limit 10) or breaking the title-on-top rule; see Q5.

### 7.5 Menu (M) — PNG `menu`, `menu-states`
- Title block: always "Pick a project" (Revision 2; deck 02e9c80 drops "Pick another project").
- 6 fh gap; 4 equal cards in one row (each 3 cols), height = content (about 41 fh with the longest one-liner at 1600x900; no min-height), padding 3 / 3 / 4 fh. In each card: key chip (top-left, not stretched), 3 fh gap, name (Name 4.6 fh 700) in a block that always reserves **two lines** (`min-height: calc(2 * 4.6cqh * 1.15)` ≈ 10.6 fh, top-aligned), 2 fh gap, one-liner (Label 3.6 fh `--text-muted`). All four one-liners therefore start on one shared line. Keys 1-4 left to right match the keyboard's number row.
- Menu hint slot: 9 fh tall, 2 fh under the cards (it moves up with the shorter cards), always reserved (UX 2.3). Hint: pill, `--surface` fill, `--ss-line` `--border` edge, Label 3.6 fh 500 `--text`, centred on the card row.
- Footer: plain text, Meta 2.8 fh `--text-muted`, at the cue position (left 10 fh, bottom 5.2 fh), selectable (`user-select: text`), max width stops 15 fh before the frame's right edge so it never meets the close zone (on the artboard it ends at about x = 1240 of 1600 px).
- `menu-states` shows, for review only: card 1 focus-visible, card 3 start-link highlighted, card 4 hovered, the hint visible, close button focus-visible.

### 7.6 Project numbers cover (A1, B1, C1) — PNG `cover` (B1, widest number)
Same as 7.3 without the subtitle; the project name is the title (7.5 fh), so the numbers (13 fh) are the biggest thing on the slide (research 3.3). A1's second label is now "agents on the dev team" (deck 02e9c80; Q4 resolved). PNG `cover-a1` shows it. Position cue bottom-left.

### 7.7 Intro with screenshot (B2, C2, D1) — PNG `intro-shot` (B2), `intro-shot-1` (C2)
- Title block; 6 fh gap; split: text column 5 cols (≈61 fh) left, 6 fh gap (2 gutters), visual takes the rest (≈ 90 fh) right.
- Bullets (6.2, balanced wrapping) top-aligned in the text column. I tried a 6/6 split for the landscape screenshots (C2, C5, D1) as the review suggested: the image lost about 13% of its width and the bullets still wrapped, so I kept 5/7 and fixed the widows with wrapping rules instead.
- Visual vertically centred in the remaining height, full column width, `object-fit: contain` at the file's own ratio (C2 1.92:1, D1 1.65:1, B2 ≈1.5:1). Image frame: `--radius`, thin `--border` edge, `--surface` behind (shows only if the image fails, UX 7).
- B2 in the mock is drawn from the three single PNGs (Home, Gyms, Route) inside a 1.5:1 box, as a stand-in for the MOD-011 three-screen file, which does not exist yet. The real slide uses the single image file.

### 7.8 Role and stack (A3, B3, C3, D2) — PNG `stack` (C3, 10 chips), `stack-2` (B3, longest chips)
- Title block; 6 fh gap; Role line (Role 5.6 fh 500 `--text`, max 140 fh wide); 6 fh gap; chips (6.3) wrapping left to right in source order. C3 fills 3 rows, B3 2 rows. No "Role" / "Stack" labels on screen (they are field names, not copy; see Q2).

### 7.9 Bullet slide (A4, A6-A8, B4, B7, B8, C4, C6-C8, D3-D5) — PNG `bullets` (A8, longest bullets)
Title block; 6 fh gap; bullets at full content width. The lower half stays empty: the bullets are the evidence and are set large rather than spread out (research 3.1).

### 7.10 Bullet slide with screenshot(s) (B5, C5) — PNG `bullets-shot` (B5), `bullets-shot-1` (C5)
- Same split as 7.7.
- B5: three phone screenshots (0.46:1) side by side, right-aligned, each as tall as the column allows up to 62 fh, 3 fh gaps, 2.2 fh radius, thin `--border` edge. Order Route, Route beta, Profile.
- C5: as C2.

### 7.11 Role grid (A5) — PNG `role-grid`
- Title block; 6 fh gap; a 2-column grid (6 cols each, 6 fh column gap), 3 rows, filled column-first so DOM order = source order (PM, Doc-Sync, Engineer; QA, Tech Lead, Retrospective; UX 7).
- Each cell: `--ss-line` top rule in `--border`, 2 fh padding, role name Body 5.6 fh 700 `--text`, description Body 5.6 fh 400 `--text-muted` on the next line. 4 fh between rows. Markup `dl` with `dt`/`dd`.

### 7.12 Simple workflow diagram (A2) — PNG `workflow`
HTML boxes plus inline SVG arrows; no image file (limit 10). Vertically centred in the content box below the title. Fixed widths in fh so the geometry is deterministic:

| Element | Width (fh) | x start (fh, from content left) |
|---|---|---|
| Requirements | 27 | 0 |
| arrow | 6 | 27 |
| PM | 11 | 33 |
| arrow | 6 | 44 |
| Doc-Sync | 19.5 | 50 |
| arrow | 6 | 69.5 |
| Engineer ⇄ QA | 30.5 | 75.5 |
| arrow | 6 | 106 |
| Tech Lead | 21 | 112 |
| arrow | 6 | 133 |
| Shipped | 18.78 | 139 |
| total | 157.78 | = content width |

- Boxes: 10 fh tall, Label 3.6 fh 500 `--text`, `--surface` fill, `--ss-line` `--ss-edge` border, `--radius-sm` (diagram node, 6.3). All six boxes have the same grey edge.
- "Shipped" (the outcome) is marked by **700 weight and a drawn check mark** (3 fh, `--accent`, before the word), never by an accent outline, so it cannot read as keyboard focus. Revision 1 widths: Requirements 26, PM 11, Doc-Sync 18.5, Engineer ⇄ QA 30, Tech Lead 20, Shipped 22.28 fh (arrows unchanged at 6 fh; total 157.78).
- Arrows: SVG 6 x 3 fh, line plus open arrowhead, stroke 0.3 fh `--text-muted` (7.81 / 10.59:1), round caps.
- "Engineer ⇄ QA": "Engineer", a drawn bidirectional arrow, "QA". The arrow is an SVG 5 x 3.2 fh of two parallel strokes (upper pointing right, lower pointing left, each with a half arrowhead, like the U+21C4 glyph), `currentColor`. The visible words are `aria-hidden`; a visually hidden span carries the exact text "Engineer ⇄ QA", so the DOM text and the list for screen readers stay word for word (AC-100) without depending on Roboto's math subset (research 5.3). See 12 Q1.
- Approval bar "I approve the key handoffs": full content width, 7 fh tall, at the top of the diagram. `--surface` fill, `--ss-line` `--border` edge, a 0.8 fh `--accent` left edge (the pull-quote motif), label Label 3.6 fh 500 `--text` with a drawn 3 fh `--accent` check mark (light since Revision 1). **Revision 2:** dashed `--ss-line` `--text-muted` drop lines run from the bar to the middle of only three arrows: Requirements → PM, PM → Doc-Sync and Tech Lead → Shipped (the handoffs Leon approves). Doc-Sync → Engineer and Engineer ⇄ QA → Tech Lead have no drop line.
- Retrospective (Revision 2, redesigned): a separate line, not a loop into PM. A "system" bracket runs under the whole pipeline: a `--ss-line` `--text-muted` line from the left edge of Requirements to the right edge of Shipped, 2 fh below the boxes, with 2.2 fh up-turned ends and `--radius-sm` corners, so it groups all six steps as one system. From the caption, a single 5 fh up-arrow (same stroke, open head) at the diagram's centre points into that bracket. The caption "Retrospective feeds improvements back into the system" (word for word) sits under the arrow, centred, Label 3.6 fh `--text-muted`. Reading: the retrospective sits outside the flow and feeds the system as a whole.
- Geometry: the diagram is a 38 fh tall, positioned box; its parts sit at fixed tops (bar 0, drop lines 7 to 16.6, boxes 13 to 23, system bracket 25 to 27.2, up-arrow 27 to 32, retrospective line 32.6 fh), so DOM order is free.
- DOM / reading order (UX 7): `ol` of the six boxes (arrows `aria-hidden`), the bracket and up-arrow (`aria-hidden`), the retrospective `p`, the drop lines (`aria-hidden`), then the bar last. The bar is drawn on top by position only.

### 7.13 Flow chips (B6) — PNG `flow`
Title block; 6 fh gap; `ol` row of the four chips (6.3, 500 weight, padding 1.6 x 2.6 fh, `--ss-edge` border) joined by 7 x 3 fh SVG arrows (same arrow as A2); 6 fh gap; the four bullets at full width. The flow row reads as one element (research 3.2).

## 8. Images (limit 10)

| Slide | Box | Fit | Edge |
|---|---|---|---|
| 3 | 39 x 52 fh each (0.75:1) | `contain` | `--radius`, thin `--border` |
| B2 | text column remainder, 1.5:1 | `contain` | none on the composite; the file has a transparent background (PRD 4.6) |
| B5 | up to 62 fh tall each, 0.46:1 | `contain` | 2.2 fh radius, thin `--border` |
| C2, C5, D1 | full visual column, file ratio | `contain` | `--radius`, thin `--border` |

All screenshots are light-themed. In dark mode they sit on `--bg` (`#161616`) with a `--border` (`#393939`) edge; I checked the dark PNGs and they read as framed screenshots, not glaring holes. No theme-specific images (limit 3).

## 9. Iconography

One drawn set, inline SVG, `currentColor`, round caps and joins, stroke ≈ 12% of the icon box: close X, check (A2 bar and "Shipped"), arrow (A2, B6), bidirectional arrow (A2), retrospective up-arrow and system bracket (A2). No icon font, no files.

## 10. States: focus ring vs `?project=` highlight

| State | Card | Key chip | Close button |
|---|---|---|---|
| Default | `--surface` fill, `--ss-edge` edge | `--bg` fill, `--ss-edge` edge, `--text-muted` digit | muted X, no fill |
| Hover / pressed | `--hover` fill (timeline work cards keep their accent top edge) | unchanged (menu only) | `--hover` fill, `--text` X |
| Focus-visible | adds a **2 px `--accent` outline, 3 px outside** the card (CSS px, never scaled) | unchanged | 2 px `--accent` outline, 2 px offset |
| Start-link highlight (AC-115) | edge becomes `--text` and **thickens to ≈ 0.8 fh** (border + 0.5 fh inset ring), drawn **inside** the card | **inverted**: `--text` fill, `--bg` digit | n/a |
| Highlight + focus | both: thick `--text` inner edge, then the blue ring outside | inverted | |

Why it works: focus is blue, thin and outside; highlight is black (white in dark), thick and inside, plus a filled key chip. They differ in colour, position, thickness and fill, so neither relies on colour alone (WCAG 1.4.1) and both survive a compressed call. The inverted chip reuses the site's active-nav language (`bg --text`, `text --bg`). The highlight is not an accent outline (UX 4.3).

`:focus-visible` only; mouse clicks never show a ring. The layer itself never shows a ring (UX 4.1).

## 11. Contrast (WCAG 2 formula, computed from the token hex values)

| Pair | Light | Dark | Where | Requirement |
|---|---|---|---|---|
| `--text` on `--bg` | 18.10 | 16.45 | titles, bullets | 4.5 ✓ |
| `--text` on `--surface` | 16.45 | 13.76 | card names, chips, A2 boxes | 4.5 ✓ |
| `--text` on `--hover` | 14.77 | 11.49 | hovered card | 4.5 ✓ |
| `--text-muted` on `--bg` | 7.81 | 10.59 | subtitle, labels, captions, cue, footer, F hint, close X | 4.5 ✓ |
| `--text-muted` on `--surface` | 7.10 | 8.86 | card one-liners, timeline org | 4.5 ✓ |
| `--text-muted` on `--hover` | 6.38 | 7.40 | hovered card one-liner | 4.5 ✓ |
| `--accent` on `--bg` or `--surface` | 5.00 / 4.55 | 7.68 / 6.43 | big numbers (large), focus ring, bullet squares, tick, nodes, A2 check marks and bar edge (graphics) | 3 (large/graphic) ✓, also 4.5 ✓ |
| `--accent` on `--bg` (work-card top edge) | 5.00 | 7.68 | graphic, 0.8 fh | 3 ✓ |
| `--bg` on `--text` | 18.10 | 16.45 | inverted key chip (highlight) | 4.5 ✓ |
| `--ss-edge` on `--bg` | 3.23 | 5.10 | card, chip and A2 box edges, timeline axis, number rules | 3 (1.4.11) ✓ |
| `--text-muted` on `--bg` as a graphic | 7.81 | 10.59 | A2/B6 arrows, system bracket, retrospective arrow, drop lines, education nodes | 3 ✓ |
| `--text` (highlight edge) vs `--ss-edge` | 5.60 | 3.22 | highlighted vs default card edge | 3 ✓ (change of state) |
| `--accent` ring on `--bg` | 5.00 | 7.68 | focus ring | 3 (2.4.13 change) ✓ |
| `--border` on `--bg` | 1.32 | 1.57 | stack chip edge, A5 rules, image edge, cue divider | decorative only; text or the fill identifies the element |

All slide text passes AA in both themes (AC-102, limit 3). The only sub-3:1 lines are decorative.

## 12. Open questions (with a recommendation each)

| # | Question | Recommendation |
|---|---|---|
| Q1 | A2 "⇄": I draw the arrow as SVG and keep the exact text "Engineer ⇄ QA" in a visually hidden span. Does QA accept that the visible glyph is drawn rather than typed (AC-100 "read exactly as defined")? | **Accept the drawn arrow.** It removes the offline font risk (research 5.3, AC-105) and the DOM text is still word for word. Tech Lead to confirm; if not accepted, the fallback is typing the glyph and preloading Roboto's math subset. |
| Q2 | Show "Role" and "Stack" as small labels on A3/B3/C3/D2? PRD 4.11 lists Role and Stack as copy fields but not their names as on-screen text. | **No labels.** The title "My role and stack" already names both, and the visual split (one sentence, then chips) makes them obvious. Labels would be extra on-screen text the PRD does not list. |
| Q3 | Timeline entries split onto lines drop the colon after the dates and the comma after the role (e.g. "2021 to 2023: Marketing Project Manager, GoFreight, Taipei" → three lines). | **Accept as the PRD's own example** ("a timeline entry's dates, role and place on separate lines"). PM to confirm the punctuation at the break is not counted, so QA does not flag it. |
| Q4 | A1 label | **Resolved in Revision 2:** the deck now reads "6" / "agents on the dev team". |
| Q5 | Slide 3: how large should the photos be? | **Revision 1: photos 48 x 64 fh, captions in the bottom band** (review issue 4). I checked the title-left alternative: in a column wide enough to leave room for 70 fh photos, the title runs to 4 or 5 lines, which is worse than open space. The remaining open area on the right is the honest cost of two uncropped portrait photos. |
| Q6 | B2's three-screen image does not exist yet; its final ratio and padding decide how big the phones look. | **MOD-011 makes it with gaps ≈ 5% of one screen's width and a transparent background**, per PRD 4.6. The slide box takes any ratio via `contain`; the mock's stand-in is 1.5:1. |
| Q7 | `color-mix()` for `--ss-edge`: acceptable as a "derived value", or should the hex values (#8f8f8f / #888888) be written into the MOD-012 stylesheet under `.dark`? | **Use `color-mix()`.** It derives from the existing variables (limit 3, "existing CSS variables only") and follows the theme with no second copy of colours. |
| Q8 | F hint size. | **Resolved in Revision 1:** sized from the frame (2.8% of its height) with a 14 px floor (6.8), so it meets limit 7 and AC-102. Tech Lead to confirm (review T3). |

## 13. Notes for the engineer (MOD-012), the motion designer and the Design Lead

- Frame CSS: `.frame { container-type: size; width: min(100vw, calc(100vh * 16 / 9)); aspect-ratio: 16 / 9; }` and all inner sizes in `cqh` (and `cqw` only for the reserved zone). Define the column variable on an element inside the frame, not on the frame itself (container units on the container resolve against its parent).
- Use `100dvh` rather than `100vh` on iOS Safari for the frame fit.
- **The layer must cover the site's corner image.** `globals.css` draws `main::after` (`/Subject.png`, fixed, bottom-right, 120 x 80 px) on every page. If /slideshow renders inside the root layout's `<main>`, the opaque MOD-012 layer (`position: fixed; inset: 0; background: var(--bg)`) must sit above it (a stacking context with a higher `z-index` than `main::after`, or the route rendered outside `<main>`). Otherwise the image would show behind or beside the close button (limit 2, CONV-007).
- The mock (`slideshow-mock.html`) renders every slide of the deck. Hashes: `#<slide>-<light|dark>` with slide `1 2 2a 2b 3 M A1…D5`, or a type alias (`intro timeline timeline-focus job job-2 photo menu menu-states cover intro-shot intro-shot-1 stack stack-2 bullets bullets-shot bullets-shot-1 role-grid workflow flow`). Add `-zones` (e.g. `#B6-light-zones`) to overlay the reserved zones and the content box. `#gallery-light` shows all slides as thumbnails. `#audit-light` checks every slide for: text below its AC-102 minimum, anything outside the frame, anything in the close zone or slide 1's hint zone, clipping, and titles over two lines; Revision 1 passes with no findings at 1920x1080, 1600x900, 1440x900, 1280x720, 960x540, 667x375 and 500x889, in both themes, and every title is one line at all of them (headless Chrome cannot make a window narrower than about 500 px; the Design Lead checked 375x667 in an iframe).
- Motion designer: only the F hint, the menu hint and the focus ring may move; their resting visuals are 6.7, 6.8, 7.5 and 10. Hover fills are instant.
- Mock-only: the `is-hover` / `is-focus` / `is-highlight` classes force states for screenshots; the dashed overlay is `-zones` only.

## 14. Sidebar "Slideshow" nav icon (input to MOD-001, not MOD-012)

AC-093 adds a "Slideshow" item under Contact in the sidebar. Its icon belongs to MOD-001 (`site/components/Sidebar.tsx`); this is the design input for that engineer, not something MOD-012 draws.

- Idiom (matches the six existing nav icons in `Sidebar.tsx`): inline SVG, `width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"`. No icon library, no file.
- Glyph: a Lucide-style "presentation" icon: a top rail, a screen hanging from it, and a stand with two feet.

```tsx
<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
  <path d="M2 3h20" />
  <path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3" />
  <path d="m7 21 5-5 5 5" />
</svg>
```

- Colour, hover, active and badge states: unchanged from the other nav items (`currentColor`; the shortcut badge shows `7`).
- Why this glyph: it reads as "present" at 16 px, it is the same visual family as the Contact envelope above it (rounded rectangle, 1.75 stroke), and it is not a "play" triangle, which would suggest video.

## 15. Revision 1 changelog (after Design Lead review 1, REVISE)

| Review issue | Change | Where |
|---|---|---|
| 1 F hint in fixed px (limit 7, AC-102) | Sized from the frame: `max(14px, calc(min(100dvh, 100vw * 9 / 16) * 0.028))`; key chip 1.6em, gaps 0.4em, border in em; still bottom-left, inside slide 1's reserved zone | 6.8, mock `.fhint`, PNG `intro` |
| 2 "Shipped" accent outline reads as focus | Grey `--ss-edge` edge like the other boxes; marked by 700 weight and an accent check mark; box widened to 22.28 fh | 7.12, PNG `workflow` |
| 3 Approval bar too heavy, glares in dark | `--surface` band with a `--border` edge and a 0.8 fh accent left edge, `--text` label; drop lines kept | 7.12, PNG `workflow` |
| 4 Slide 3 photos too small | 39 x 52 → 48 x 64 fh; captions moved into the bottom band | 7.4, Q5, PNG `photo` |
| 5 Menu cards ragged and half empty | Name block reserves two lines so one-liners share a top line; cards size to content (no 38 fh minimum); hint slot moves up with them | 7.5, PNGs `menu`, `menu-states` |
| 7 Widows beside screenshots | `text-wrap: pretty` on all bullets, `balance` in the screenshot text column, hyphenated words kept whole; 6/6 split tried and rejected (smaller image, no wrap gain) | 6.2, 7.7, PNGs `intro-shot`, `intro-shot-1`, `bullets-shot`, `bullets-shot-1` |
| 8 B8 title wraps at some sizes | Title max-width removed (full content width); audit re-run at 960x540, 667x375, 500x889 and the four AC sizes: every title one line | 3, 13 |
| 9 "One chip style" claim | Named the two roles: tag chip (stack) and diagram node (A2, B6) | 6.3 |
| 10 Mock gaps | `menu-states` shows "Pick another project"; A2 bar is last in the DOM; note that the layer must cover `main::after` | 7.5, 7.12, 13, mock |
| 11 No sidebar icon | Lucide-style presentation icon spec for MOD-001 | 14 |
| 6 Focus offset (UX) | Not mine; UI keeps 3 px on cards and 2 px on the close button, which the UX doc is being aligned to | 10 |

Re-rendered PNGs in Revision 1: all 38. Visibly changed: intro, photo, menu, menu-states, workflow, intro-shot, intro-shot-1, bullets-shot, bullets-shot-1 (both themes). The others were re-rendered for consistency and look the same.

## 16. Revision 2 changelog (Leon's review; deck commit 02e9c80)

Leon's words: "Page 2: remove the "detail > 1" and "detail > 2" text ... No need to use "Pick another project" ... A2 remove the human approve step between doc sync <> engineer, engineer <> tech-lead. And the retro is a seperate line that take the improvements go back to the system instead of pm". For the open questions: L-9 follows the Design Lead; all others follow the recommendations (no UI impact beyond what is listed).

| Change | Design | Where |
|---|---|---|
| Timeline work cards: no "Details" text, no key chip | Cards keep the container, the `--ss-edge` edge, hover and focus; new 0.8 fh accent top edge marks them as openable; height = content. Keys 1 and 2 remain a hidden shortcut. The `.details` row and its styles are gone. | 7.2, 10, 11, PNGs `timeline`, `timeline-focus` |
| Menu title always "Pick a project" | Single title; `menu-states` no longer shows "Pick another project" | 7.5, PNG `menu-states` |
| A1 label "agents on the dev team" | Data only; same layout | 7.6, Q4, new PNG `cover-a1` |
| A2 approvals | Drop lines only on the arrows into PM, into Doc-Sync and into Shipped | 7.12, PNG `workflow` |
| A2 retrospective | Loop into PM removed. A system bracket spans the whole pipeline; a separate up-arrow from the caption feeds it. Caption unchanged. | 7.12, 9, PNG `workflow` |

Audit after Revision 2: no findings in both themes at 1920x1080, 1600x900, 960x540 and 667x375; every title one line.
Re-rendered in Revision 2 (both themes): timeline, timeline-focus, menu, menu-states, workflow, and the new cover-a1. `cover` (B1) is unchanged.
