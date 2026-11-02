# Slideshow design review 2 (MOD-012, /slideshow)

Written by: design-lead, 2026-11-01. Intended path: `project-planning/design/ux-team/reviews/slideshow-review-2.md`.

**What I reviewed:** Revision 1 at commit 542ac5c:
- `slideshow-ui.md`: sections 14 and 15 are new; 3, 6.2, 6.3, 6.8, 7.4, 7.5, 7.12 and 13 changed.
- `slideshow-ux.md`: the Revision 1 changelog, 4.3 and 6.3.
- `slideshow-mock.html` and all 38 PNGs. 16 PNG files changed byte-wise; the other 22 are byte-identical to the previous version.

The scratchpad copies are identical to the repo copies (checked with `cmp`).

**How I checked:**
- Looked at every changed PNG with the Read tool, in both themes where it mattered.
- Re-ran the mock's own audit at 960x540, 1280x720, 1440x900, 1600x900, 1920x1080, 667x375 and 500x889, in both themes.
- Re-ran my copy-comparison script against the deck.
- Measured the F hint in a 1920x1080 iframe.
- Re-read the diff of the mock.

## Verdict: PASS

Every must-fix issue from review 1 is fixed, and the fixes are visible in the PNGs. The audit finds nothing at any of the 14 size and theme combinations. Every title is one line everywhere. The slide text is still word for word. Nothing the revision touched broke another slide.

Three small doc nits remain (section 3). None of them blocks Leon's approval; the ui-designer can fix them in passing.

---

## 1. Review 1 issues: fixed or not

| # | Issue | Status | Evidence |
|---|---|---|---|
| 1 | F hint in fixed px, against limit 7 and AC-102 | **Fixed** | Mock `.fhint`: `font-size: max(14px, calc(min(100dvh, 100vw*9/16)*0.028))`; the key chip, border and gaps are in `em`. Measured at 1920x1080: 30.2 px (2.80% fh), box 16 to 353 x 1016 to 1064 px, inside slide 1's reserved zone (x < 576, y > 918). The PNG `intro` shows it at 25 px on the 900-tall artboard. By the same ratio it is about 297 px wide at 1600x900 (zone 480 px) and hits the 14 px floor on a 667x375 landscape phone (about 172 px wide, zone 200 px). UI 3, 6.8 and UX 6.3 now say so. |
| 2 | "Shipped" accent outline reads as focus | **Fixed** | PNG `workflow`, both themes: a grey `--ss-edge` edge like the other boxes, marked by 700 weight and an accent check mark. Nothing on A2 now resembles the focus ring. |
| 3 | A2 bar too heavy, glares in dark | **Fixed** | `--surface` band with a `--border` edge, a 0.8 fh accent left edge (the pull-quote motif) and a `--text` label with an accent check. In dark mode it is now a #262626 band, no longer a white slab, and the title leads again. |
| 4 | Slide 3 photos too small | **Fixed** | PNG `photo`: 48 x 64 fh (0.75:1, `contain`); captions in the bottom band at about 93 fh, far from the close zone. The photos now dominate the slide. The title-left alternative was rejected with a reason (UI Q5: the title would run to 4 or 5 lines), and I accept it. The open area on the right is now an honest cost of two uncropped portrait photos, not a sign of an unfinished slide. |
| 5 | Menu cards ragged and half empty | **Fixed** | PNGs `menu` and `menu-states`: the name block reserves two lines, so all four one-liners start on one shared line. The 38 fh minimum is gone and the cards size to content (about 41 fh, set by card 1's three-line one-liner). Cards 2 to 4 keep a little air under the one-liner, which is acceptable now that the rhythm is consistent. |
| 6 | Focus offset contradiction (UX 2 px, UI 3 px) | **Fixed** | UX 4.3 now says 3 px on cards and 2 px on the close button, matching UI 10 and the motion tokens. |
| 7 | One-word widows beside screenshots | **Fixed** | `text-wrap: pretty` on every bullet; `balance` in the narrow screenshot column; hyphenated words kept whole with `nowrap` spans (the text is unchanged). PNGs `intro-shot` ("Watch beta for / that exact route", "Submitted to / the App Store"), `bullets-shot` ("Beta videos tied / to each route") and `bullets-shot-1` ("SEO auditor / re-checks weekly"): no one-word last lines. The 6/6 split was tried and rejected (smaller image, no wrapping gain). I accept that; it was optional. |
| 8 | B8 title wraps at some sizes | **Fixed** | `max-width` removed from `h1.title`. My audit re-run: every title is one line at all 7 sizes, in both themes. |
| 9 | "One chip style" claim | **Fixed** | UI 6.3 now names two roles: tag chip (stack) and diagram node (A2, B6). |
| 10 | Mock gaps | **Fixed** | `menu-states` shows "Pick another project" (both themes). A2's bar is last in the DOM (after the list, the loop, the retrospective line and the drop lines) and positioned on top. The new loop and drop wrappers are `aria-hidden`. UI 13 now tells the engineer how the layer must cover `main::after`. |
| 11 | No sidebar icon | **Fixed** | UI 14: a Lucide-style "presentation" icon in the Sidebar's exact idiom (16 px, 0 0 24 24, stroke 1.75, round caps and joins, `currentColor`, `aria-hidden`), handed to MOD-001 and not drawn in MOD-012. The glyph's paths are sound and fit next to the Contact envelope. |

## 2. Anything the revision broke?

I looked for regressions in each changed area. None found.

- **Audit:** no findings at any of the 14 size and theme combinations: nothing outside the frame, in the close zone or in the F-hint zone, no text below its AC-102 floor, no clipping.
- **Text:** all 194 deck strings are still present. The only "missing" ones are the four timeline entries, split into lines as the PRD allows. "Pick another project" is now rendered.
- **A2:**
  - Boxes were resized: Requirements 26, PM 11, Doc-Sync 18.5, Engineer ⇄ QA 30, Tech Lead 20, Shipped 22.28 fh. Every label still fits with padding (PNGs, both themes).
  - The loop still runs from Tech Lead to PM.
  - The drop lines still land on the five arrows.
  - The hidden exact string "Engineer ⇄ QA" is kept.
- **Contrast of the new pairs:**
  - Accent check on `--surface`: 4.55 light / 6.43 dark. Graphic, so it needs 3:1; passes.
  - Bar label: `--text` on `--surface`, 16.45 / 13.76.
  - Bar edge: `--border`, decorative; the fill and the accent bar identify the band.
- **Photo slide:** the captions sit in the band, which is safe only because slide 3 has no position cue. UI 7.4 states that.
- **Menu:** the hint slot moved up with the cards and still sits clear of the focus rings (PNG `menu-states`).
- **Untouched slides:** slides 1 (apart from the hint), 2, 2a, 2b, the covers, stack, bullets, role grid and B6 are byte-identical renders.

## 3. Remaining nits (non-blocking; owner: ui-designer)

1. **Stale sentence in UI 6.4.** It still says "The F hint uses the same look in px (6.8)". It should say "in em, sized from the frame (6.8)".
2. **Wrong figure in UI 7.4.** It says the photos are "about 23% larger in area". 48x64 against 39x52 is about 51% larger.
3. **Browser fallback for `text-wrap`.** `text-wrap: pretty` and `balance` are progressive enhancements. In Firefox (`pretty`) and in Safari before 17.5, normal wrapping returns, and with it the old widows. This is cosmetic, but add one line to UI 6.2 so QA does not file it as a regression on those browsers. Leon will present in Chrome.

---

## 4. Consolidated open questions (final, deduplicated)

Changes since review 1:
- **T3 (F hint size)** now has an agreed design answer; it only needs the Tech Lead's confirmation.
- **L-14 (slide 3 layout)** is closed by the revision.
- **UX:** the ux-designer agrees to merge L-2 and L-4.
- Everything else is unchanged.

### For Leon (product behaviour and copy)

| # | Question | Designers recommend | Design Lead view | Decides |
|---|---|---|---|---|
| L-1 | A mouse has no way to go back. Add one? | No change; use the keys or a clicker (right-click = Previous if ever wanted, needs a PRD change) | Agree | Leon |
| L-2 | When does "Press F for full screen" show? (merges UX Q2 and Q7) | Whenever the slideshow is windowed **and** full screen is available (`document.fullscreenEnabled`), whatever the origin. So: never on iPhone, and also shown if a nav-click full-screen request fails. Amend AC-096 and CONV-006. | Agree; the ux-designer accepted the merge | Leon, then Tech Lead and PM |
| L-3 | Make the F hint a button that enters full screen on click or tap? | Yes; it becomes the first Tab stop on slide 1; motion adds only the focus ring and an instant hover | Agree. It only exists on direct visits, so presenting still has "click always goes next". | Leon, then PM |
| L-4 | Does the start-link highlight disappear once that project has been shown? | Yes | Agree | Leon, then PM |
| L-5 | "Shown" = any of the project's slides displayed, by any route | Yes | Agree | Leon, then PM |
| L-6 | Previous on a project's first slide returns to the menu without "Pick another project" (M does switch it). Intended? | Keep as written; PM to confirm | Agree | Leon / PM |
| L-7 | Hide the idle mouse pointer? | Yes: 3 s, full screen and mouse only, hover fills suppressed while idle; needs an AC | Agree (hover suppression confirmed) | Leon, then PM |
| L-8 | Ignore key auto-repeat (a held arrow does not skip slides)? | Yes | Agree | Leon / PM record |
| L-9 | A1 shows a big "6" with "-agent dev team" under it | Keep as written; not a blocker | **Disagree.** A label starting with a hyphen looks like a typo. Change the source to "6" / "agents on the dev team" (copy change via PM). | Leon, then PM |
| L-10 | Show "Role" and "Stack" labels on the role-and-stack slides? | No | Agree | Leon (confirm) |
| L-11 | Menu hint: 2 s or 2.5 s? | 2 s (2.5 s still "about 2 seconds") | Either; keep 2 s unless it feels short in rehearsal | Leon |

### For PM (wording only)

| # | Item | Recommendation | Design Lead view |
|---|---|---|---|
| P-1 | Enter / Space on the focused close button | It leaves the slideshow. Amend Controls to "when focus is not on a card or the close button". | Agree |
| P-2 | Limit 9 AC | "A mouse click on the area outside the 16:9 frame behaves exactly like a click on the slide." | Agree |
| P-3 | Pen input | Treat as touch (halves) | Agree |
| P-4 | Pinch-zoom on phones | Keep it; no `user-scalable=no` | Agree |
| P-5 | Timeline punctuation | The colon and comma dropped where an entry splits into lines are not a copy change (UI Q3) | Agree |

### For the Tech Lead (rulings)

| # | Question | Recommendation | Design Lead view |
|---|---|---|---|
| T1 | Is `--ss-edge: color-mix(in srgb, var(--text-muted) 65%, var(--bg))` within limit 3? | Yes: derived from existing variables, no new hex values | Agree; fallback `--text-muted` edges |
| T2 | A2 "⇄" drawn in SVG, with a hidden exact "Engineer ⇄ QA" string (avoids the offline math-subset risk, AC-105)? | Accept | Agree |
| T3 | Confirm the F hint sizing: screen-anchored, `max(14px, 2.8% of frame height)` | Now in UI 6.8 / UX 6.3 | Agree; it meets limit 7 and AC-102 at every AC size |
| T4 | B2 three-screen image from MOD-011 (gaps about 5% of one screen, transparent background) | Track as a dependency | Agree |
| T5 | WCAG 2.1.4 single-key shortcuts: accept "active only while focused" | Accept the residual risk | Agree |
| T6 | Adopt MOD-012's reduced-motion pattern site-wide later? | Not now (limit 13) | Agree |

### Settled (no question needed)

- F does nothing when already in full screen.
- The F hint's exit is instant.
- Reduced motion also removes the hint's delay.
- No progress bar, on-screen arrows or help overlay.
- Slide 3 keeps the title-on-top layout with the larger photos.
- The bullet-and-screenshot slides keep the 5/7 split.

## 5. Next step

The design is ready to show Leon for approval.

Once he approves, his slideshow design approval in `status.md` Decisions must name these files at the approval commit: brief, research, UX, UI, motion, the mock HTML and the 38 PNGs, plus this review.

Questions L-2 to L-9 and P-1 to P-5 that Leon accepts need a PM change (and Tech Lead review for L-2) before engineering starts. T1 to T6 go to the Tech Lead.
