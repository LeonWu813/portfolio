# Slideshow UI: visual design (MOD-012, /slideshow)

Written by: ui-designer, 2026-11-01. Intended path: `project-planning/design/ux-team/slideshow-ui.md`.
Inputs: `slideshow-brief.md` (13 Tech Lead limits), `slideshow-research.md`, `slideshow-ux.md`, `project-planning/prd.md` sections 2, 3 and 4.11 (Revision 1.8), `asset/content/interview-deck.md` at HEAD, `site/app/globals.css`.
Companion files: `slideshow-mock.html` (every slide of the deck, real text, both themes) and `slideshow-mock-<type>-<light|dark>.png` (1600x900, headless Chrome).

Advisory only. No slide text, slide, order, control or acceptance criterion changes here. Where I needed a decision the PRD does not make, it is in section 12 with a recommendation.

Units: **fh** = 1% of frame height, **fw** = 1% of frame width. In CSS the frame is a size container (`container-type: size`), so `1cqh` = 1 fh and `1cqw` = 1 fw inside it. On the 1600x900 artboard 1 fh = 9 px. Everything inside the frame is in fh (limit 7); the close button and F hint are in CSS px (limit 8).

---

## 1. Design idea in one paragraph

A Carbon-style editorial deck: white (or Gray 100) page, one blue accent, Roboto 700 sentence titles, lots of left-aligned structure on a 12-column grid. The accent is used for exactly four jobs: the short "tick" above every title (the deck's signature, one consistent look), the square bullet markers, the big numbers, and interactive cues ("Details", focus ring). Everything clickable has a visible card edge and a key chip; nothing static does. No gradients, no shadows, no decorative images (limit 10), no frame border (research 2.2 item 8).

## 2. Tokens

### 2.1 Site variables used (unchanged; from `site/app/globals.css`)

`--bg`, `--surface`, `--text`, `--text-muted`, `--border`, `--hover`, `--accent`, `--accent-hover`. The slideshow reads them through `var(--x)` so it follows the active `.dark` class (limit 3). No new colors, no theme-specific values.

### 2.2 Derived values (scoped to the MOD-012 layer, not added to globals.css)

| Token | Value | Why |
|---|---|---|
| `--ss-edge` | `color-mix(in srgb, var(--text-muted) 65%, var(--bg))` = `#8f8f8f` light / `#888888` dark | Edge of clickable cards, key chips, A2 boxes, B6 chips, timeline axis, number rules. `--border` is only 1.32 / 1.57:1 on `--bg`; this mix is 3.23 / 5.10:1, which meets WCAG 1.4.11 (3:1) and survives video compression. In light it lands within 2 levels of Carbon's own `border-strong` Gray 50 (`#8d8d8d`), so it is on-system. One formula, both themes, no new hex values. `color-mix` is supported in every browser the PRD targets (Chrome 111, Safari 16.2, Firefox 113). |
| `--ss-line` | `max(2px, 0.3cqh)` | Every structural stroke (card edges, rules, axis). 2.7 px at 900 tall, never under 2 px on small frames (research 3.2: no hairlines on video). |

No other derived color exists. Focus uses `--accent`; highlight uses `--text`; hover uses `--hover`; the "Details" cue on a hovered card uses `--accent-hover` (see 10).

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
| Title | 7.5 | 700 | 1.12 | -0.015em | `--text` | 81 / 54 / 16 | 7 | Every slide title (`h1`), `text-wrap: balance`, max 2 lines |
| Body | 5.6 | 400 | 1.3 | 0 | `--text` | 60 / 40 / 12 | 4.2 | Bullets, Titles lines (slide 1), A5 Roles |
| Role | 5.6 | 500 | 1.3 | 0 | `--text` | 60 / 40 / 12 | 4.2 | "Role" line on A3, B3, C3, D2 |
| Subtitle | 4.2 | 400 | 1.3 | 0 | `--text-muted` | 45 / 30 / 9 | 2.4 | Job slide Subtitle |
| Name (card) | 4.6 | 700 | 1.15 | 0 | `--text` | 50 / 33 / 10 | 2.4 | Menu card names |
| Label | 3.6 | 400 or 500 | 1.25-1.3 | 0 | `--text-muted` or `--text` | 39 / 26 / 7.6 | 2.4 | Things the interviewer reads: chips, captions, number labels, card one-liners, timeline entries and dates, A2/B6 labels, menu hint |
| Meta | 2.8 | 400 or 500 | 1.2 | 0 | `--text-muted` | 30 / 20 / 5.9 | 2.4 | Things only Leon needs: position cue, key chips, "Details", menu footer |

Why these numbers:
- Title 7.5 fh = 40.5 pt on a PowerPoint slide: top of Leon's guide (32-40 pt) and above the 7% floor with margin for rounding.
- Body 5.6 fh = 30 pt: above the guide's 24 pt (4.4 fh) and the research's 4.4 fh video floor. A 1080p share in a 960x540 call tile shows bullets at 30 px. Every deck title still fits on one line at this size on the 16:9 artboard (checked by the mock's audit; B8 wraps to 2 lines only on the smallest frames).
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

### 6.3 Chips (stack chips, B6 flow chips)
One chip style for the whole deck (research 5.4, Leon's "one consistent look"): Label 3.6 fh, `--text`, `--surface` fill, `--ss-line` border in `--border`, `--radius-sm`, padding 1.3 x 2.2 fh, gaps 2 fh, `white-space: nowrap`. B6 flow chips use the same chip at 500 weight with a `--ss-edge` border because they are part of a diagram (3:1 graphic).

### 6.4 Key chip
The sidebar shortcut badge, rebuilt in frame units (limit 13): min 4.4 x 4.4 fh, Meta 2.8 fh 500 `--text-muted`, `--ss-line` border in `--ss-edge`, `--bg` fill, `--radius-sm`, tabular figures. Used on menu cards and timeline work cards. The F hint uses the same look in px (6.8).

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

### 6.8 "Press F for full screen" hint (screen-anchored, CSS px; UX 6.3)
`position: fixed; left: 16px; bottom: 16px; height: 44px` (centred on the close button's row). "Press", key chip "F", "for full screen", 14 px Roboto 500 `--text-muted` (7.81 / 10.59:1), 6 px gaps. Key chip: 20 x 20 px, 12 px 500, 1 px `--ss-edge` border, 2 px radius (the sidebar badge at its original size). Not focusable today (see UX Q3). Motion: motion designer.

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
- Work entries (GoFreight key 1, Exascend key 2): clickable card (6.5), min height 30 fh. Role (Label 700), org and place (Label 400 muted), then a bottom row: "Details" + chevron (Meta 500, `--accent`, chevron drawn 2.4 fh SVG) on the left, key chip on the right.
- Text split (PRD allows it): "2021 to 2023" / "Marketing Project Manager" / "GoFreight, Taipei". The source's colon after the dates and the comma after the role fall at line breaks and are not drawn; see Q3.

### 7.3 Hidden job slide (2a, 2b) — PNG `job` (2a, 3 numbers), `job-2` (2b, 2 numbers)
- Title block, then Subtitle 4.2 fh `--text-muted`, 2 fh below the title.
- Numbers row vertically centred in the remaining space: a 3-cell grid, each cell 4 cols wide. 2b uses the first two cells (same cell width, so number sizes and positions match 2a; the empty third cell keeps the left-aligned rhythm).
- Each cell: `--ss-line` left rule in `--ss-edge`, 3 fh padding; number in Display 13 fh `--accent` 700 tabular; 2 fh gap; label Label 3.6 fh `--text-muted`, max 40 fh wide (wraps to 2-3 lines).
- No position cue (PRD Look).

### 7.4 Photo slide (3) — PNG `photo`
- Title block; 6 fh gap; two figures side by side, left-aligned, 4 fh apart.
- Each photo box 39 x 52 fh (exactly 0.75:1, limit 10), `object-fit: contain`, `--radius`, 1 px-or-0.15 fh `--border` edge. Caption under it (Label 3.6 fh, `--text-muted`), 2 fh gap.
- The right ~70 fh stays empty on purpose: the title runs full width above, and enlarging the photos would push captions into the bottom band. See Q5 for an alternative.

### 7.5 Menu (M) — PNG `menu`, `menu-states`
- Title block ("Pick a project" or "Pick another project"; same position, so the swap never shifts layout).
- 6 fh gap; 4 equal cards in one row (each 3 cols), min height 38 fh, padding 4 / 3 / 3 fh. In each card: key chip (top-left, not stretched), 4 fh gap, name (Name 4.6 fh 700), 2 fh gap, one-liner (Label 3.6 fh `--text-muted`). Keys 1-4 left to right match the keyboard's number row.
- Menu hint slot: 9 fh tall, 2 fh under the cards, always reserved (UX 2.3). Hint: pill, `--surface` fill, `--ss-line` `--border` edge, Label 3.6 fh 500 `--text`, centred on the card row.
- Footer: plain text, Meta 2.8 fh `--text-muted`, at the cue position (left 10 fh, bottom 5.2 fh), selectable (`user-select: text`), max width stops 15 fh before the frame's right edge so it never meets the close zone (on the artboard it ends at about x = 1240 of 1600 px).
- `menu-states` shows, for review only: card 1 focus-visible, card 3 start-link highlighted, card 4 hovered, the hint visible, close button focus-visible.

### 7.6 Project numbers cover (A1, B1, C1) — PNG `cover` (B1, widest number)
Same as 7.3 without the subtitle; the project name is the title (7.5 fh), so the numbers (13 fh) are the biggest thing on the slide (research 3.3). A1's second label is "-agent dev team" exactly as in the source; it sits under "6" so it reads "6 -agent dev team" (see Q4). Position cue bottom-left.

### 7.7 Intro with screenshot (B2, C2, D1) — PNG `intro-shot` (B2), `intro-shot-1` (C2)
- Title block; 6 fh gap; split: text column 5 cols (≈61 fh) left, 6 fh gap (2 gutters), visual takes the rest (≈ 90 fh) right.
- Bullets (6.2) top-aligned in the text column.
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

- Boxes: 10 fh tall, Label 3.6 fh 500 `--text`, `--surface` fill, `--ss-line` `--ss-edge` border, `--radius-sm`. "Shipped" has an `--accent` border (the outcome).
- Arrows: SVG 6 x 3 fh, line plus open arrowhead, stroke 0.3 fh `--text-muted` (7.81 / 10.59:1), round caps.
- "Engineer ⇄ QA": "Engineer", a drawn bidirectional arrow, "QA". The arrow is an SVG 5 x 3.2 fh of two parallel strokes (upper pointing right, lower pointing left, each with a half arrowhead, like the U+21C4 glyph), `currentColor`. The visible words are `aria-hidden`; a visually hidden span carries the exact text "Engineer ⇄ QA", so the DOM text and the list for screen readers stay word for word (AC-100) without depending on Roboto's math subset (research 5.3). See 12 Q1.
- Bar "I approve every handoff": full content width, 7 fh tall, above the boxes, `--text` fill with `--bg` text (the site's inverted "active" style; 18.10 / 16.45:1), Label 3.6 fh 500, centred, with a drawn check mark (3 fh, decorative). Five dashed `--ss-line` `--text-muted` drop lines run from the bar down to the middle of each of the five arrows: the human gate sits on every handoff. This is the "human in charge" in the title, drawn.
- Retrospective loop: a U-shaped `--ss-line` `--text-muted` line from under Tech Lead's centre down 6 fh, left, and up into PM's centre with an open arrowhead (`--radius` corners). The line "Retrospective feeds improvements back into the system" sits 2 fh under it, centred on the loop, Label 3.6 fh `--text-muted`.
- Screen-reader structure per UX 7: `ol` of the six boxes, then the retrospective `p`, then the bar text. In the mock the bar comes first in the DOM; engineers should place it last in DOM order and position it on top with CSS order or grid (reading order: list, retrospective, bar).

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

One drawn set, inline SVG, `currentColor`, round caps and joins, stroke ≈ 12% of the icon box: close X, chevron (Details), check (A2 bar), arrow (A2, B6), bidirectional arrow (A2), loop arrowhead (A2). No icon font, no files.

## 10. States: focus ring vs `?project=` highlight

| State | Card | Key chip | Close button |
|---|---|---|---|
| Default | `--surface` fill, `--ss-edge` edge | `--bg` fill, `--ss-edge` edge, `--text-muted` digit | muted X, no fill |
| Hover / pressed | `--hover` fill; "Details" switches to `--accent-hover` (6.36 / 7.42:1 on `--hover`) | unchanged | `--hover` fill, `--text` X |
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
| `--accent` on `--bg` | 5.00 | 7.68 | big numbers (large), focus ring, bullet squares, tick, nodes | 3 (large/graphic) ✓, also 4.5 ✓ |
| `--accent` on `--surface` | 4.55 | 6.43 | "Details" (Meta 2.8 fh, 500) on a card | 4.5 ✓ |
| `--accent` on `--hover` | 4.08 | 5.37 | not used for text: "Details" turns `--accent-hover` on hover | n/a |
| `--accent-hover` on `--hover` | 6.36 | 7.42 | hovered "Details" | 4.5 ✓ |
| `--bg` on `--text` | 18.10 | 16.45 | A2 bar, inverted key chip | 4.5 ✓ |
| `--ss-edge` on `--bg` | 3.23 | 5.10 | card, chip and A2 box edges, timeline axis, number rules | 3 (1.4.11) ✓ |
| `--text-muted` on `--bg` as a graphic | 7.81 | 10.59 | A2/B6 arrows, loop, drop lines, education nodes | 3 ✓ |
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
| Q4 | A1 "6" + "-agent dev team" renders as two pieces; the hyphenated label under the number reads slightly oddly. | **Keep as written** (text cannot change). If Leon dislikes it, PM could change the source to "6" / "agents on the dev team" in a PRD change. Not a design blocker. |
| Q5 | Slide 3 leaves the right ~40% of the frame empty. | **Keep** (calm, left-aligned, grid-true). Alternative if the Design Lead wants more photo: put the title in a left 5-col column (wrapping to 3 lines) and the photos at 70 fh tall on the right; it breaks the "title on top" rule of every other slide, so I do not recommend it. |
| Q6 | B2's three-screen image does not exist yet; its final ratio and padding decide how big the phones look. | **MOD-011 makes it with gaps ≈ 5% of one screen's width and a transparent background**, per PRD 4.6. The slide box takes any ratio via `contain`; the mock's stand-in is 1.5:1. |
| Q7 | `color-mix()` for `--ss-edge`: acceptable as a "derived value", or should the hex values (#8f8f8f / #888888) be written into the MOD-012 stylesheet under `.dark`? | **Use `color-mix()`.** It derives from the existing variables (limit 3, "existing CSS variables only") and follows the theme with no second copy of colours. |
| Q8 | F hint at 14 px is small for anyone watching on a call. | **Keep 14 px**: it is Leon's cue, appears only on direct visits and disappears at the first key. |

## 13. Notes for the engineer (MOD-012), the motion designer and the Design Lead

- Frame CSS: `.frame { container-type: size; width: min(100vw, calc(100vh * 16 / 9)); aspect-ratio: 16 / 9; }` and all inner sizes in `cqh` (and `cqw` only for the reserved zone). Define the column variable on an element inside the frame, not on the frame itself (container units on the container resolve against its parent).
- Use `100dvh` rather than `100vh` on iOS Safari for the frame fit.
- The mock (`slideshow-mock.html`) renders every slide of the deck. Hashes: `#<slide>-<light|dark>` with slide `1 2 2a 2b 3 M A1…D5`, or a type alias (`intro timeline timeline-focus job job-2 photo menu menu-states cover intro-shot intro-shot-1 stack stack-2 bullets bullets-shot bullets-shot-1 role-grid workflow flow`). Add `-zones` (e.g. `#B6-light-zones`) to overlay the reserved zones and the content box. `#gallery-light` shows all slides as thumbnails. `#audit-light` checks every slide for: text below its AC-102 minimum, anything outside the frame, anything in the close zone or slide 1's hint zone, clipping, and titles over two lines; it passes with no findings at 1920x1080, 1600x900, 1440x900, 1280x720 and 667x375 (headless Chrome cannot make a window narrower than about 500 px, so the 375x667 run is approximate).
- Motion designer: only the F hint, the menu hint and the focus ring may move; their resting visuals are 6.7, 6.8, 7.5 and 10. Hover fills are instant.
- Mock-only: the `is-hover` / `is-focus` / `is-highlight` classes force states for screenshots; the dashed overlay is `-zones` only.
