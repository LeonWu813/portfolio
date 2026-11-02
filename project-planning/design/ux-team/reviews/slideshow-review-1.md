# Slideshow design review 1 (MOD-012, /slideshow)

Written by: design-lead, 2026-11-01. Intended path: `project-planning/design/ux-team/reviews/slideshow-review-1.md`.
Reviewed: `slideshow-brief.md`, `slideshow-research.md`, `slideshow-ux.md`, `slideshow-ui.md`, `slideshow-motion.md`, `slideshow-mock.html`, all 38 `slideshow-mock-*.png` (each opened and looked at), PRD sections 2, 3 and 4.11, `asset/content/interview-deck.md` at HEAD (no diff from e479e22), `site/app/globals.css`, `site/components/Sidebar.tsx`.
My own checks: the built site rendered at 1600x900 (Home, `/projects/projectday`) for comparison; the mock re-rendered at 960x540 (call tile), 667x375 and 375x667 (in a 375 px iframe, because headless Chrome will not make a window narrower than about 500 px); the mock's own audit run at 960x540, 1280x720, 1440x900, 1920x1080, 667x375 and 500x889; a script comparing all 194 copy strings in the deck with the mock; a WCAG contrast script for every token pair the spec uses.

## Verdict: REVISE

The direction is right and most of it is already good. It is a restrained Carbon editorial deck that clearly belongs to the site: the same tokens, Roboto 700 titles, the sidebar's key badges and inverted "active" style, and the pull-quote accent bar as its one motif. The type is big enough for a video call. The UX model is thorough and correct. The slide text is word for word. Contrast passes AA in both themes.

It does not pass yet for two reasons:
- **It breaks one Tech Lead limit.** The "Press F for full screen" hint is set in fixed CSS px (14 px text, 12 px key). That breaks limit 7 and AC-102's 2.4% floor at every desktop size. Issue 1.
- **Four slides fall below the standard of the rest:**
  - A2: the accent-outlined "Shipped" box reads as a focus ring, and in dark mode the full-width bar becomes a glaring white slab.
  - Slide 3: the photos are too small and about 45% of the slide is empty.
  - The menu: the card contents do not line up, and the cards are half empty.

These are small, targeted fixes. Nothing structural needs to change.

---

## 1. Requirement checklist

### Leon's words (brief, quoted)

| # | Requirement | Status | Note |
|---|---|---|---|
| L1 | "impress ... interviewers when applying for engineering intern or junior jobs" | **Partly met** | Bullet, cover, job, timeline and stack slides are strong and credible. Slide 3, the menu and A2 weaken the impression (issues 2 to 5). |
| L2 | A new sidebar tab "Slideshow" under Contact | **Not covered** | The behaviour comes from the PRD (AC-093/094). Nobody designed the nav item's icon (issue 11). |
| L3 | Clicking it makes the website a full-screen slideshow | Met | UX 6, CONV-006. |
| L4 | "space or up down to control the slide" | Met | UX 3.1. |
| L5 | "esc to go back to the website" | Met | UX 3.1 and 11. The design does not depend on an Esc animation (limit 6). |
| L6 | Concise titles, slide-style content, best practice | Met | Assertion-evidence titles (research 3.1); body at 5.6 fh (30 pt). |
| L7 | Designed by the design team | Met | |
| L8 | "click always go to the next" | Met | Includes the letterbox bars (UX 8.3, limit 9). Cards and the close button are the only exceptions. |
| L9 | Phone: letterboxed 16:9 at 375x211 | Met | Verified in a 375x667 iframe: the frame sits centred, and the close button and F hint sit in the bottom bar. |

### The guide Leon pasted

| # | Requirement | Status | Note |
|---|---|---|---|
| G1 | Sentence titles | Met | Copy-driven. Every title is the dominant element. |
| G2 | One idea per slide | Met | |
| G3 | About 6 elements, 50 words max | Met, with a reasoned exception | C3's 10 chips and A2's 6 boxes are treated as one group each (research 3.2). |
| G4 | Body 24 pt+ | Met | 30 pt equivalent. |
| G5 | Titles 32 to 40 pt | Met | 40.5 pt equivalent. The hero on slide 1 is deliberately larger. |
| G6 | High contrast | Met | Verified (section 5). |
| G7 | One consistent look on every slide | Mostly met | Title block, grid and margins are identical everywhere. Exceptions: issues 2, 3 and 9. |

### Brief and PRD 4.11

| Requirement | Status |
|---|---|
| Deliverables 1 to 4 present | Met |
| Every slide type, both themes (13 types, 38 PNGs) | Met |
| Tokens in site CSS-variable terms | Met (`--ss-edge` is a derived value; see open question T1) |
| Frame-unit type and spacing scale | Met, except the F hint (issue 1) |
| Project name and position on project slides only | Met (frame bottom-left) |
| Menu: both titles, 4 cards with keys, plain-text footer, hint | Met, but the "Pick another project" state is not mocked (issue 10) |
| Start-link highlight distinct from focus (AC-115) | Met. Highlight: thick inner `--text` edge plus an inverted key chip. Focus: thin outer accent ring. |
| No Thank-you slide, no avatar, no GPA, no "Shown" tag | Met |

---

## 2. Tech Lead limits

| # | Limit (short) | Status | Evidence / note |
|---|---|---|---|
| 1 | One route; instant slide changes; motion only for hints and focus, respecting reduced motion | Respected | Motion doc: three things move, there is one `prefers-reduced-motion` block, and hover is instant. The idle-cursor hide is a state change, not motion. |
| 2 | No site chrome; opaque `--bg` layer | Respected | Remember `main::after` (`/Subject.png`, the cat in the bottom-right corner on every page, visible in my site render). The layer must cover it. Research 5.4 says so; the UI doc should repeat it for the engineer. |
| 3 | Theme only through existing CSS variables; AA in both themes | Respected, with one question | All text passes (section 5). `--ss-edge` = `color-mix(--text-muted 65%, --bg)` is a new derived colour. It needs a Tech Lead ruling (open question T1). |
| 4 | Works in any aspect ratio, windowed or full screen | Respected | UX 8.2 works through 4:3, 16:10, 21:9 and phone. |
| 5 | Hint and close button away from top centre and top edge | Respected | Both sit at the bottom corners. |
| 6 | No dependence on an Esc animation | Respected | |
| 7 | **Every size in frame units; AC-102 floors** | **Violated by the F hint** | UI 6.8 / UX 6.3: 14 px text and a 12 px key chip. The 2.4% floor is 25.9 px at 1920x1080, 19.4 px at 1440x900 and 17.3 px at 1280x720. Limit 8 exempts only the close button. Issue 1. |
| 8 | Close button sized to the screen, at least 24 px (44 preferred), visible focus; cards have focus styles | Respected | 44x44, 2 px accent ring with 2 px offset; card ring 2 px with 3 px offset. |
| 9 | Say whether the bars count as "on a slide" | Respected | Yes. UX 8.3, with proposed AC wording. |
| 10 | Only PRD images, whole (`contain`); diagrams drawn in SVG/CSS | Respected | B2 is a stand-in until MOD-011 makes the three-screen file (UI Q6). |
| 11 | Roboto 400/500/700, no italic | Respected | The mock uses only 500 and 700 explicitly (400 is the default). No italic, no 300 or 600. |
| 12 | Hidden live region announces the title and position | Respected | UX 9.2. |
| 13 | Build only in `site/app/slideshow/`; rebuild, do not import | Respected | Tokens live on the layer; the motion doc warns against copying `transition-colors`. |

---

## 3. Slide text against the deck

- **Script check.** Every Title, Titles, Timeline, Subtitle, Big numbers, Cards, Footer, Roles, Bullets, Role, Stack and Captions string (194 items) appears verbatim in the mock's data. The only strings not found:
  - The four timeline entries: split into date / role / place lines and the punctuation at the breaks dropped. The PRD allows splitting; UI Q3 asks PM to confirm the punctuation.
  - "Pick another project": not rendered anywhere in the mock (issue 10).
- **Visual spot check, slide by slide, against the PNGs:** 1, 2, 2a, 2b, 3, M, A1 (data), A2, A5, A8, B1, B2, B3, B5, B6, C2, C3 and C5 match the deck exactly. That includes "Taipei · Sep 2023 to Aug 2025", "$16.5K", "1,500+", "~60%", "Engineer ⇄ QA" (drawn arrow plus a hidden exact string), "I approve every handoff" and "Retrospective feeds improvements back into the system".
- **What never shows:** no speaker notes, editor's notes, slide labels or "Visual:" lines. No em dashes in on-screen copy (the em dashes in the ProjectDay screenshots are inside images).
- **Extra on-screen text** is only what the PRD allows: "Details" plus keys, menu keys, name and position, the menu hint, the F hint. A drawn check mark and chevron are decorative SVG.

---

## 4. Reference role mapping (site vs proposal)

What I saw on the site: white page and `--surface` sidebar. Accent covers a tiny area: the primary CTA ("Connect on LinkedIn"), link and focus states, and the pull-quote left bar. The active nav item and its badge are inverted (`--text` fill). Tag chips use `--surface` with a `--border` edge. Headings render at 700.

| Token / element | Role on the site | Role in the proposal | Verdict |
|---|---|---|---|
| `--bg` | Page background | Slide and letterbox (invisible bars) | Faithful |
| `--surface` | Sidebar, cards, chips | Clickable cards, chips, A2 boxes, menu-hint pill | Faithful |
| `--text` | Primary text; active-nav fill | Titles, bullets; start-link highlight edge and inverted key chip (the active-nav language) | Faithful |
| `--text` as a large fill | Only a small nav pill | A2 bar spanning the full content width | **Over-promoted**: inverted in dark mode it becomes a glaring slab (issue 3) |
| `--text-muted` | Secondary text, dates | Subtitles, labels, dates, captions, cue, footer, close X, diagram arrows | Faithful |
| `--border` | Dividers, chip borders | Stack-chip edge, A5 rules, image edges, cue divider (decorative) | Faithful |
| `--hover` | Hover background | Card and close hover (instant) | Faithful. The light hover is barely visible (1.11:1 against `--surface`), which is acceptable for a presenter-only cue. |
| `--accent` | Links, CTA, focus, pull-quote bar | Focus ring, "Details", title tick, slide-1 bar (pull-quote motif), bullet squares, work-node fill | Faithful: interaction plus the one motif |
| `--accent` on big numbers | (none) | Display numbers on 2a, 2b, A1, B1, C1: the deck's largest accent area | **Accepted extension.** Nothing on those slides is interactive, so it cannot be mistaken for a link, and it gives the proof slides their punch. |
| `--accent` as a box outline | Focus only | "Shipped" box edge on A2 | **Collision**: reads as keyboard focus (issue 2) |
| `--accent-hover` | Accent hover | Hovered "Details" | Faithful |
| Key badge / active badge | Sidebar shortcut badges | Card key chips / inverted chip when highlighted | Faithful |
| Tag chip | Project tags | Stack chips (scaled, `--text`) | Faithful |
| `--ss-edge` (new) | (none; close to Carbon `border-strong`) | Clickable-card, chip and box edges, timeline axis, number rules | Good choice visually; needs a ruling on limit 3 (T1) |

No primary colour was demoted, and no decorative colour was turned into a primary. There is no Tailwind or Material default palette anywhere.

---

## 5. Contrast (script, WCAG 2 formula; `--ss-edge` = #8f8f8f light / #888888 dark)

| Pair | Light | Dark | Needed | Use |
|---|---|---|---|---|
| `--text` / `--bg` | 18.10 | 16.45 | 4.5 | titles, bullets |
| `--text` / `--surface` | 16.45 | 13.76 | 4.5 | card names, chips, boxes, hint |
| `--text-muted` / `--bg` | 7.81 | 10.59 | 4.5 | labels, captions, cue, footer, F hint |
| `--text-muted` / `--surface` | 7.10 | 8.86 | 4.5 | card one-liners |
| `--text-muted` / `--hover` | 6.38 | 7.40 | 4.5 | hovered one-liner |
| `--accent` / `--bg` | 5.00 | 7.68 | 4.5 | big numbers, focus ring |
| `--accent` / `--surface` | 4.55 | 6.43 | 4.5 | "Details": passes, but only just in light |
| `--accent-hover` / `--hover` | 6.36 | 7.42 | 4.5 | hovered "Details" |
| `--bg` / `--text` | 18.10 | 16.45 | 4.5 | A2 bar text, inverted chip |
| `--ss-edge` / `--bg` | 3.23 | 5.10 | 3 | clickable edges (WCAG 1.4.11) |
| `--text` / `--ss-edge` | 5.60 | 3.22 | 3 | highlighted vs default edge |
| `--border` / `--bg` | 1.32 | 1.57 | (decorative) | stack-chip edge, rules, image edge |

All slide text passes AA in both themes, so the UI doc's table is correct. The only pairs under 3:1 are decorative (`--border`, `--surface` against `--bg`, the hover fill), and in each case text or a stronger edge identifies the element.

## 6. Legibility in a 960x540 video-call tile (1080p share; re-rendered)

| Element | Size in the tile |
|---|---|
| Titles | 40 px |
| Bullets | 30 px |
| Labels (chips, captions, number labels, timeline, card one-liners) | 19 px |
| Meta (cue, keys, footer, "Details") | 15 px |
| F hint | 14 px, unchanged by the scaling |

Everything an interviewer needs is readable. Screenshot interiors are not, which is unavoidable and does not matter: they are evidence, not text to read. From a 1440x900 laptop everything is about 10% smaller and still fine.

Strokes are at least 2 px (`--ss-line`), so the edges survive compression. The menu, timeline and stack slides were checked in the tile render.

## 7. Aesthetics and hierarchy

What works:
- **Hierarchy:** title, then evidence, on every slide.
- **One grid:** a 10 fh margin and a single left edge.
- **The accent tick:** a quiet signature that ties to the site's pull-quote bar.
- **Big-number slides:** look confident.
- **The timeline:** reads left to right. Cards versus no cards, filled versus hollow nodes and the key chips make "what is clickable" unambiguous without colour.
- **Bullet slides:** bullets at 30 pt with an honest amount of white space (assertion-evidence; I accept the empty lower half there).
- **Highlight versus focus:** solved well, and it reuses the site's own language.

Weak spots: see issues 2 to 5 and 7.

## 8. Dark mode

Dark mode is designed, not computed:
- The accent shifts to Carbon's #78a9ff.
- The highlight inverts to a light edge with a white key chip.
- `--ss-edge` is re-derived for the dark theme (5.10:1).
- Light-themed screenshots sit inside a `--border` frame, which is acceptable under limit 3.

The exception is A2's bar (issue 3).

## 9. Do the three designers' docs agree?

| # | Contradiction or drift | Where | Resolution |
|---|---|---|---|
| X1 | Card focus offset: UX says a 2 px outward offset; UI and motion say 3 px | UX 4.3 vs UI 10 and motion tokens | Use 3 px (the cards have a thick edge). UX to update (issue 6). |
| X2 | F hint in CSS px in both UX 6.3 and UI 6.8, against limit 7 / AC-102 | UX and UI | Issue 1 |
| X3 | Research 6 lists a Carbon `border-strong` edge as conflicting with limit 3; UI recreates it with `color-mix` and calls it derived | Research 6 vs UI 2.2 and Q7 | Tech Lead rules (T1) |
| X4 | UI 6.3 claims "one chip style for the whole deck", but stack chips are 400 weight with a `--border` edge, while B6 chips and A2 boxes are 500 weight with an `--ss-edge` edge | UI 6.3 vs 7.12 and 7.13 | Issue 9 |
| X5 | UX 7 requires A2's reading order to be list, retrospective, bar; the mock DOM puts the bar first (UI 7.12 admits it) | UX 7 vs mock | Issue 10 |
| X6 | UI 3 says B8's title wraps "only on the smallest frames"; my audit shows it wraps at 960x540, 667x375 and 500x889 | UI 3 vs audit | Issue 8 |
| X7 | UX 10 lists the F hint's exit as allowed motion; the motion doc makes it instant | UX 10 vs motion 2.2 | No conflict (instant is within the allowance). Agree with the motion doc. |

Everything else agrees: reserved zones, the cue position, hint slot and sizes, the highlight form, instant hover, the idle-cursor rule, the live-region timing (about 500 ms) against the F-hint entrance (about 540 ms), and the letterbox.

---

## 10. Issues (numbered, each with a fix and an owner)

**Must fix for PASS**

1. **The F hint breaks limit 7 and AC-102** (owners: ui-designer for UI 6.8 and Q8, ux-designer for UX 6.3; Tech Lead to confirm).
   - **Problem:** 14 px text and a 12 px key are fixed px. QA measuring AC-102 at 1920x1080 will fail them (the floor there is 25.9 px).
   - **Fix:** keep the hint screen-anchored at the bottom-left (limit 5), but size it from the frame height:
     - text: `font-size: max(14px, calc(min(100dvh, 100vw * 9 / 16) * 0.028))`, which is 30 px at 1080p and 14 px on a phone;
     - key chip: about 1.6x the text;
     - gaps: about 0.4x the text.
   - **Check that it still fits:** at 1080p the hint is about 330 px wide, inside slide 1's 30 fw x 15 fh reserved zone (576x162 px).
   - **Alternative:** ask the Tech Lead to extend limit 8 to the hint and write an AC-102 exception. Either way it must be written down; today it is silently out of spec.
2. **The A2 "Shipped" box uses an accent outline, which is the deck's focus-ring vocabulary** (owner: ui-designer, UI 7.12).
   - **Problem:** on a slide with nothing interactive, one blue-outlined box reads as "selected" or "focused".
   - **Fix:** give "Shipped" the same `--ss-edge` border as the other boxes. Mark it as the outcome another way: a 0.8 fh `--accent` left bar inside the box (the pull-quote motif), or 700 weight plus the drawn check mark. Never an accent outline.
3. **The A2 approval bar is too heavy, and glares in dark mode** (owner: ui-designer, UI 7.12).
   - **Problem:** a full-width `--text` slab, 1420x62 px at 1600 wide, is the largest and brightest element on any dark slide. In light mode it also outweighs the title.
   - **Fix:** keep the meaning and drop the mass. For example, a `--surface` bar with a 0.5 fh `--text` (or `--accent`) top or left edge and a `--text` 700 label with the check mark; or shrink the bar to its label width, centred, with the five drop lines kept. Re-render both themes.
4. **Slide 3 (Life in Seattle) looks unfinished** (owner: ui-designer, UI 7.4 and Q5).
   - **Problem:** the photos are 39x52 fh in the left 55%, with about 70 fh of empty white on the right. This is the one human slide.
   - **Fix:** slide 3 has no position cue, so the bottom band is free apart from the close zone. Grow both photos to about 60 fh tall (45 fh wide) and put the captions in the band (about 90 to 94 fh, left side only).
   - If that still feels sparse, take the UI's own alternative: title in a 5-column left column, photos at about 70 fh on the right. One slide breaking "title on top" is acceptable here, because it is the deck's only photo slide.
5. **Menu card internals are ragged and half empty** (owner: ui-designer, UI 7.5).
   - **Problem:** "Multi-Agent System" wraps to two lines, so its one-liner starts a line lower than the other three. The 38 fh minimum height leaves the lower 35 to 45% of every card empty. The menu is the hub and is shown 2 to 3 times per interview.
   - **Fix:** give the name block a fixed two-line height (2 x 4.6 x 1.15 = about 10.6 fh) so all four one-liners share a top line, then size the cards to their content (about 28 to 30 fh) and move the hint slot up to match.

**Should fix (minor; can go in the same revision)**

6. **Focus offset contradiction** (owner: ux-designer). Change UX 4.3 to a 3 px offset on cards and 2 px on the close button, matching UI 10 and the motion tokens (X1).
7. **One-word widows in the bullets beside images** (owner: ui-designer, UI 6.2 and 7.7).
   - **Problem:** "...the App / Store", "...each / route" and "...re-checks / weekly" in the 5-column text column.
   - **Fix:** add `text-wrap: pretty` (or `balance`) to bullet text. For the landscape screenshots (C2, C5, D1), consider a 6/6 column split; the image still gets about 84 fh.
8. **The B8 title wraps at some sizes and not others** (owner: ui-designer).
   - **Problem:** with `max-width: 150cqh` and font rounding, B8 sits on the edge.
   - **Fix:** allow titles the full content width (157.78 fh), re-run the audit at 960x540, and correct the claim in UI 3 (X6).
9. **The "one chip style" claim is inaccurate** (owner: ui-designer, UI 6.3). Name the two roles explicitly: tag chip (stack: 400 weight, `--border` edge) and diagram node (A2 / B6: 500 weight, `--ss-edge`). No visual change needed (X4).
10. **Gaps in the mock** (owner: ui-designer).
    - Render "Pick another project" in `menu-states`.
    - Put A2's bar last in the DOM (CSS order puts it on top) so the mock matches UX 7.
    - Repeat in UI 13 that the layer must cover the site's `main::after` corner image. Engineers will copy the mock (X5).
11. **The sidebar "Slideshow" nav item has no designed icon** (AC-093, Leon's first request; owner: ui-designer). Specify one in the Sidebar's own idiom: a 24-unit viewBox, 16 px, stroke 1.75, round caps and joins. For example, a Lucide-style "presentation" glyph: screen rectangle, stand and base. It goes in the design files as an input to MOD-001; do not draw it in MOD-012.

Not issues (I checked and accept them):
- big numbers in `--accent`;
- the empty lower half of bullet slides;
- the light hover being subtle;
- the light screenshots on dark;
- the `--ss-line` 2 px floor;
- the focus ring in CSS px;
- 2 s for the menu hint.

---

## 11. Consolidated open questions (deduplicated)

"Decides" says who has to answer. Everything marked PRD needs a PM change before engineering. I add my view where it differs from, or adds to, the designers' recommendation.

### For Leon (product behaviour and copy)

| # | Question | Source | Designers recommend | Design Lead view | Decides |
|---|---|---|---|---|---|
| L-1 | A mouse has no way to go back. Add one? | UX Q1, research 6 | No change; use the keys or a clicker. If ever added, right-click = Previous (needs a PRD change). | Agree: no change. | Leon |
| L-2 | Show "Press F" where full screen is impossible (iPhone)? | UX Q2, research 4.7 / 6 | Show it only on a direct visit **and** when `document.fullscreenEnabled` is true; amend AC-096. | Agree. Merge with L-4 into one rule: "show whenever the slideshow is windowed and full screen is available". | Leon, then PM (PRD) |
| L-3 | Make the F hint clickable (a button that enters full screen)? | UX Q3; motion Q3 | Yes. It becomes a non-Next target and the first Tab stop on slide 1. Motion: only the focus ring and an instant hover. | Agree. It only exists on direct visits, so "click always goes next" stays true for presenting. | Leon, then PM (PRD) |
| L-4 | Opened from the site, but full screen was refused or unsupported: show the F hint? | UX Q7 | Yes, whenever windowed and `fullscreenEnabled`, whatever the origin (CONV-006 / AC-096 wording). Low priority. | Agree; fold into L-2. | Leon, then Tech Lead and PM |
| L-5 | Does the start-link highlight stay after that project has been shown? | UX Q5 | Remove it once shown. | Agree. | Leon, then PM |
| L-6 | What does "shown" mean for the preselected project? | UX Q6 | Any of its slides displayed, by any route. | Agree. | Leon, then PM |
| L-7 | Previous on a project's first slide returns to the menu without switching to "Pick another project" (M does switch it). Intended? | UX Q8 | Keep the PRD as written; PM to confirm. | Agree. | Leon / PM confirm |
| L-8 | Hide the mouse pointer when idle? | UX Q9; motion 6 and Q2 | Yes: after 3 s without movement, full screen and mouse only; hover fills suppressed while idle; back on any movement. Needs a PM record and an AC. | Agree, including the hover suppression (motion R6 asked me to confirm: confirmed). | Leon, then PM |
| L-9 | Does a held arrow key auto-repeat through slides? | UX Q10 | Ignore auto-repeat on every action key. | Agree. | Leon / PM record |
| L-10 | A1 shows "6" over "-agent dev team" (the source splits the number from the hyphenated word) | UI Q4 | Keep as written; not a blocker. | **Disagree.** A label starting with a hyphen under a giant "6" looks like a typo on a slide meant to impress. Recommend Leon changes the source, e.g. "6" / "agents on the dev team". A copy change, through PM. | Leon, then PM |
| L-11 | Show "Role" and "Stack" labels on the role-and-stack slides? | UI Q2 | No. The title already names both. | Agree. | Leon (confirm) |
| L-12 | Timeline entries drop the colon and comma where they split into lines | UI Q3 | Accept, as the PRD's own example; PM to confirm. | Agree. | PM confirm |
| L-13 | Menu hint for 2 s, or a little longer (10 words)? | Motion Q4 | Keep 2 s; 2.5 s still fits "about 2 seconds". | Either is fine; keep 2 s unless Leon finds it short in rehearsal. | Leon |
| L-14 | Slide 3: keep the empty right side, or the alternative layout? | UI Q5 | Keep. | Disagree: now issue 4 (enlarge the photos). Leon only needs to choose if both variants are rendered. | Design team, then Leon |

### For PM (wording only, no behaviour choice)

| # | Question | Source | Recommendation | Design Lead view |
|---|---|---|---|---|
| P-1 | Enter / Space on the focused close button: Controls says Enter is Next "when focus is not on a card" | UX Q11 | Native button wins: leave. Amend to "not on a card or the close button". | Agree. |
| P-2 | Limit 9 AC sentence: "A mouse click on the area outside the 16:9 frame behaves exactly like a click on the slide." | UX 8.3 | Add it. | Agree. |
| P-3 | Pen input: treat as touch (halves) or as mouse (always Next)? | UX Q12 | Touch. | Agree. |
| P-4 | Keep pinch-zoom on phones (no `user-scalable=no`) | UX Q13 | Keep; no AC change. | Agree. |

### For the Tech Lead (technical rulings)

| # | Question | Source | Recommendation | Design Lead view |
|---|---|---|---|---|
| T1 | Is `--ss-edge: color-mix(in srgb, var(--text-muted) 65%, var(--bg))` within limit 3 ("existing CSS variables only")? | UI Q7; research 6 | Use `color-mix`. It is derived, follows the theme, and adds no hex values. | Agree. It is the best-looking option. Fallback if refused: `--text-muted` edges, which are heavier but compliant. |
| T2 | "⇄" in A2: draw it in SVG with a hidden exact "Engineer ⇄ QA" string, instead of relying on Roboto's math subset (offline AC-105 risk)? | Research 5.3; UI Q1 | Accept the drawn arrow. Fallback: preload the math subset. | Agree. The drawn arrow also matches the other arrows' stroke. |
| T3 | F hint size: frame-relative with a 14 px floor (issue 1), or an explicit exemption added to limit 8 and AC-102? | UI Q8; this review | UI: keep 14 px. | Frame-relative with the floor. |
| T4 | B2's three-screen image (MOD-011) does not exist yet; its ratio and padding set the phone size | UI Q6 | MOD-011 makes it with gaps of about 5% of one screen and a transparent background. | Agree. Track it as a dependency. |
| T5 | WCAG 2.1.4 single-key shortcuts: accept "active only while the component has focus" | Research 4.5; UX 9.3 | Accept the residual risk; no PRD change. | Agree. |
| T6 | Adopt MOD-012's reduced-motion pattern site-wide later? | Motion Q6 | Not now (limit 13); note it as a possible convention. | Agree. |

### Settled, no question needed (agreement across docs)

- F does nothing when already in full screen (UX Q4).
- The F hint disappears instantly (motion Q1).
- Reduced motion also removes the hint's 300 ms delay (motion Q5).
- No progress bar, no on-screen arrows, no help overlay (research 6).

---

## 12. Next step

The ui-designer revises issues 2 to 5 and 7 to 11 and re-renders the affected PNGs: `workflow`, `photo`, `menu`, `menu-states` (with "Pick another project"), `intro`, `intro-shot`, `bullets-shot` and `bullets-shot-1`, both themes. The ux-designer fixes issue 6 and the issue 1 text in UX 6.3. Then review 2.
