# Slideshow motion: hints, focus and pointer feedback (MOD-012, /slideshow)

Written by: motion-designer, 2026-11-01. Intended path: `project-planning/design/ux-team/slideshow-motion.md`.
Inputs: `slideshow-brief.md` (13 Tech Lead limits), `slideshow-research.md` (4.6 Motion, 2.2), `slideshow-ux.md` (1.2, 2.3, 3.2, 4.3, 5, 6, 10, Q3, Q9), `slideshow-ui.md` (6.4, 6.5, 6.7, 6.8, 7.5, 10, 13), mock PNGs `menu-states`, `intro`, `timeline-focus` (both themes), `site/package.json`, `site/app/globals.css`, existing `transition-colors` use in `site/components/` and `site/app/`, PRD 4.11 (Menu, Opening, AC-096, AC-113).

Advisory only. No slide text, slide, order, control or acceptance criterion changes here. "Limit N" is the Tech Lead's numbered limit in the brief.

---

## 0. Scope and the rules I design inside

- **Limit 1:** slides change instantly, with no transition. This document proposes **no slide transition** of any kind: no fade, slide, zoom, cross-dissolve or "build" on a slide change, card activation, menu return, Home, M, rescale on resize or full-screen entry.
- **Limit 1:** only the hints and focus may move, and every movement collapses to instant under `prefers-reduced-motion: reduce`.
- **Limit 6:** Esc in full screen never reaches the page. Nothing here runs on Esc, on leaving, or on `fullscreenchange`. Leaving is instant (UX 11).
- **What moves (3 things):** the "Press F for full screen" hint entrance, the menu hint show / re-show / hide, the focus ring appearance.
- **What does not move (on purpose):** card hover and press, close button hover and press, the start-link highlight, the "Details" cue, slide content, the F hint exit. Section 5 explains each.
- **Not motion but in this doc because the brief asked:** idle-cursor hide in full screen (section 6).

Why so little: Leon presents on a video call. Calls send 15 to 30 frames a second and compress hard, so a 110 to 240 ms effect reaches the interviewer as 2 to 7 frames, often smeared. Motion here exists only for Leon's own orientation (where focus landed, that a hint appeared), never to impress the interviewer. The impression comes from the slides themselves changing crisply and instantly, which is also what Keynote and Google Slides do with transitions off. **Nothing in the deck depends on a motion being seen**: every element has a correct static resting state, and every hide/show is a state change first and an animation second.

---

## 1. Motion tokens

Defined as CSS custom properties on the MOD-012 layer root (the `fixed inset-0` element), not on `:root` and not in `globals.css` (limit 13). Values come from IBM Carbon's motion system (productive mode), since the site's palette is Carbon White / Gray 100: same family, no invented curves.

| Token | Value | Carbon source | Used by |
|---|---|---|---|
| `--ss-dur-instant` | `0ms` | n/a | Hover, press, F hint exit, every reduced-motion fallback |
| `--ss-dur-fast` | `110ms` | `$duration-fast-02` | Focus ring appearance |
| `--ss-dur-moderate` | `150ms` | `$duration-moderate-01` | Menu hint show, re-show (nudge), hide |
| `--ss-dur-entrance` | `240ms` | `$duration-moderate-02` | F hint entrance |
| `--ss-delay-f-hint` | `300ms` | n/a | F hint waits for the eye to land on slide 1 first |
| `--ss-ease-enter` | `cubic-bezier(0, 0, 0.38, 0.9)` | entrance, productive | Everything that appears |
| `--ss-ease-exit` | `cubic-bezier(0.2, 0, 1, 0.9)` | exit, productive | Menu hint hide |
| `--ss-rise-screen` | `4px` | n/a | F hint travel (screen-anchored, CSS px like the hint, limit 8) |
| `--ss-rise-frame` | `0.6cqh` | n/a | Menu hint travel (inside the frame, frame units, limit 7; 5.4 px at 900 tall, 1.3 px on a 375x211 phone frame) |
| `--ss-focus-offset-card` | `3px` | UI 10 | Card ring resting offset (unchanged from UI) |
| `--ss-focus-offset-close` | `2px` | UI 6.7 | Close ring resting offset (unchanged from UI) |

Timers (not motion, so they live as TypeScript constants in the slideshow component, not CSS):

| Constant | Value | Source |
|---|---|---|
| `MENU_HINT_HOLD_MS` | `2000` | PRD Menu "about 2 seconds", UX 2.3 |
| `MENU_HINT_EXIT_MS` | `150` | equals `--ss-dur-moderate`; only used to unmount after the fade |
| `CURSOR_IDLE_MS` | `3000` | UX Q9 (section 6) |

`--ss-rise-frame` is unregistered, so `cqh` resolves where it is used (on the hint, inside the frame container), not on the layer. Engineers must not register it with `@property` as a `<length>`, which would resolve it against the layer.

**Reduced-motion block (one place for the whole deck):**

```css
@media (prefers-reduced-motion: reduce) {
  .layer {
    --ss-dur-fast: 0ms;
    --ss-dur-moderate: 0ms;
    --ss-dur-entrance: 0ms;
    --ss-delay-f-hint: 0ms;
    --ss-rise-screen: 0px;
    --ss-rise-frame: 0px;
  }
  .layer *, .layer *::before, .layer *::after { animation: none !important; }
}
```

`animation: none` is the authoritative fallback (every element's resting style is already the final state, so removing the animation shows the final state at once); the token overrides are belt and braces for any transition someone adds later. No JavaScript reads `prefers-reduced-motion`: the timers are the same in both modes, only the visuals collapse. This is the site's first reduced-motion pattern (research 4.6); it stays inside MOD-012.

---

## 2. "Press F for full screen" hint

Resting look: UI 6.8 (screen bottom-left, 14 px Roboto 500 `--text-muted`, 20 px key chip). Shows only per UX 6.1 (direct visit), hides for good per UX 6.2.

### 2.1 Appear

| Field | Spec |
|---|---|
| Trigger | The hint is rendered after mount, once CONV-006's origin check says "direct" (UX 6.1). Mounting the element starts the animation. |
| What moves | Opacity 0 to 1 and `translateY(var(--ss-rise-screen))` to 0: the hint rises 4 px into its resting place. Nothing else on screen moves. |
| Timing | Delay `--ss-delay-f-hint` (300 ms), duration `--ss-dur-entrance` (240 ms), `--ss-ease-enter`, `animation-fill-mode: both` (invisible during the delay). Fully visible about 540 ms after mount, which matches the live-region announcement set about 500 ms after mount (UX 9.2). |
| Why | Orientation. Slide 1 appears instantly and the eye goes to "Hi, I'm Leon"; the hint then arrives a beat later in the corner, so it reads as a secondary cue, not part of the slide. The 4 px rise is small enough for a 14 px line and gives the corner a direction ("this arrived"). |
| Reduced motion | `animation: none`: the hint is at full opacity in place the moment it renders, no delay. |
| Accessibility | Not focusable (UX 6.3, unless UX Q3 is accepted, section 8 Q3). Announced via the live region, not via animation. The delay never hides content a user needs: the text is announced on its own schedule. If the user presses a key during the 300 ms delay, the hint unmounts before it ever shows, which is correct (AC-096: it disappears after the first key press). |
| Haptics | None (web; the Vibration API is absent on iOS and would be noise here). |
| Cost | One `@keyframes`, one class. No JS beyond the existing render condition. |

### 2.2 Hide

| Field | Spec |
|---|---|
| Trigger | First `keydown`, first `pointerdown`, or `fullscreenchange` into full screen (UX 6.2). |
| What moves | **Nothing. The hint unmounts instantly** (`--ss-dur-instant`), in the same React commit as whatever the input does. |
| Why instant | 1. The commonest hiding input is Space or a click, which changes the slide instantly in the same frame. A hint still fading over slide 2 would look like a half-finished transition, which limit 1 rules out in spirit. 2. On F, the browser starts its own full-screen animation (macOS: a 0.5 to 0.7 s zoom); a fade would play inside it, unseen or stuttering. 3. AC-096 is a binary "disappears" check; instant makes it unambiguous for QA. 4. One code path, no exit state, no timer. |
| Reduced motion | Same: instant. |
| Accessibility | No live-region change needed on hide. |
| Cost | Zero: conditional rendering already does this. |

---

## 3. Menu hint ("Pick a project: press 1 to 4 or click a card")

Resting look: UI 7.5 (pill in a reserved 9 fh slot under the card row, `--surface` fill, `--border` edge, Label 3.6 fh 500 `--text`, centred). Logic: UX 2.3 (shows on Next when there is no project to start; visible 2 s after the last trigger; a repeat restarts the 2 s and re-announces; hides early when the menu is left or a card opens).

### 3.1 States and timeline

The pill lives inside the always-reserved slot, so showing or hiding it never moves layout. A `data-state` attribute drives the CSS; a `key` (a counter) remounts the element when an animation must replay.

| t (ms) from the last trigger | `data-state` | Visual |
|---|---|---|
| 0 | `in` (first show) or `again` (shown while already visible or fading) | Entrance or nudge animation starts |
| 0 to 150 | `in` / `again` | Animating to rest |
| 150 to 2000 | same | At rest, fully readable |
| 2000 | `out` | Exit animation starts |
| 2000 to 2150 | `out` | Fading |
| 2150 | `hidden` (pill unmounted, slot stays) | Empty slot |

A Next during `out` goes to `again` and restarts the 2000 ms hold. Leaving the menu (any navigation, a card opening) unmounts the menu, the slot and the pill in the same commit as the instant slide change, and clears both timers.

### 3.2 Show (`in`)

| Field | Spec |
|---|---|
| What moves | Opacity 0 to 1 and `translateY(var(--ss-rise-frame))` to 0: the pill rises 0.6 fh into place, **from below**, so it moves away from the cards and their focus rings (a ring extends 5 px outside a card; the slot starts 2 fh = 18 px below at 900 tall). |
| Timing | `--ss-dur-moderate` (150 ms), `--ss-ease-enter`, fill `both`. |
| Why | Feedback: Leon pressed Space and "nothing happened" on the slide, so the hint must register at once. 150 ms is fast enough not to delay reading (the text is legible from about 60 ms), slow enough to read as "appeared" rather than a flicker on a compressed call. |
| Reduced motion | `animation: none`: pill appears in place, full opacity. |

### 3.3 Re-show while visible (`again`, the "nudge")

| Field | Spec |
|---|---|
| Trigger | Next again while the pill is in `in`, `again` or `out`. |
| What moves | The pill remounts (new `key`) and plays a shorter-travel version of the entrance: from opacity 0.5 and `translateY(calc(var(--ss-rise-frame) * 0.5))` to rest. |
| Timing | `--ss-dur-moderate` (150 ms), `--ss-ease-enter`. |
| Why | Without it a second Space gives Leon no visible response while the live region re-announces (UX 9.2). A full blink from 0 would flicker if he taps Space twice quickly; starting at half opacity and half travel reads as "yes, I heard you" without a blink. I rejected a horizontal shake: in an interview it reads as an error ("wrong!") on screen for the interviewer, while the hint is help, not a scolding. |
| Reduced motion | `animation: none`: the pill simply stays visible; the restarted timer and the live-region re-announcement are the feedback. |

### 3.4 Hide (`out`)

| Field | Spec |
|---|---|
| Trigger | 2000 ms after the last trigger, while still on the menu. |
| What moves | Opacity 1 to 0 only. No travel on exit (the slot is empty afterwards, so direction carries no meaning). |
| Timing | `--ss-dur-moderate` (150 ms), `--ss-ease-exit`, fill `forwards`; JS unmounts after `MENU_HINT_EXIT_MS`. |
| Why fade, when the F hint does not | This hide is time-driven, not caused by an input, and the slide does not change at that moment. An instant pop after 2 s on a static slide catches the eye more than a short fade; the fade lets it leave quietly. |
| Reduced motion | `.menu-hint[data-state="out"] { opacity: 0; visibility: hidden; }` as the static rule, so with `animation: none` it is gone at once at 2000 ms; the 150 ms unmount timer is then harmless. |
| Early hide (menu left, card opens) | Instant, with the slide (no exit animation; limit 1). |

### 3.5 Accessibility and cost

- WCAG 2.2.2 does not apply (not moving content, under 5 s, research 4.6). The text also goes to the polite live region, so a user who misses the 2 s visual still hears it (UX 9.2).
- The pill stays non-interactive and is never focused; a click on it is Next, which triggers `again` (harmless, UX 2.3).
- Cost: two `@keyframes`, one `data-state` attribute, a counter for `key`, two `setTimeout`s cleared on unmount and on re-trigger. About 25 lines of TypeScript.

---

## 4. Focus ring appearance

Resting look: UI 10 and 6.7 (2 px `--accent` outline, `:focus-visible` only; 3 px offset on cards, 2 px on the close button; CSS px, never frame units). The layer never shows a ring (UX 4.1).

| Field | Spec |
|---|---|
| Trigger | An element starts matching `:focus-visible` (Tab, Shift+Tab, or programmatic focus with a keyboard modality). |
| What moves | The ring grows outward from the element's edge to its resting offset and fades in: `outline-offset` 0 to 3 px (cards) or 0 to 2 px (close), `outline-color` transparent to `--accent`. |
| Timing | `--ss-dur-fast` (110 ms), `--ss-ease-enter`. **Appear only**: when focus leaves, the ring vanishes instantly (no animation on the base rule). |
| Why | Orientation: when Tab moves from card 2 to card 3, the eye catches the ring settling on card 3. It is the one place where motion helps Leon find something. 110 ms keeps Tab-and-Enter fast; nothing waits on it (Enter works the moment focus lands). |
| Why appear only | Exit animations on focus leave two rings visible at once during a Tab, which muddies "where am I". |
| Reduced motion | `animation: none`: ring at its resting offset and colour instantly. |
| Accessibility | WCAG 2.4.13 / 2.4.7: the resting ring is unchanged from the UI spec, so contrast (5.00 / 7.68:1 on `--bg`) and perimeter are unaffected; the animation only affects the first 110 ms. In forced-colors mode the browser replaces the outline colour; the offset animation still works and is harmless. The start-link highlight (inner, thick, `--text`) is not animated, so "highlight + focus" shows the static inner edge with the ring growing outside it; the two states stay distinct. |
| Cost | One `@keyframes` with a `from` frame only (the `to` frame is the element's own resting style). |

```css
.card:focus-visible  { outline: 2px solid var(--accent); outline-offset: var(--ss-focus-offset-card);
                       animation: ss-focus-in var(--ss-dur-fast) var(--ss-ease-enter); }
.close:focus-visible { outline: 2px solid var(--accent); outline-offset: var(--ss-focus-offset-close);
                       animation: ss-focus-in var(--ss-dur-fast) var(--ss-ease-enter); }
@keyframes ss-focus-in { from { outline-offset: 0px; outline-color: transparent; } }
```

Do not implement this with `transition` on the base rule plus a transparent resting outline: a transparent resting outline turns visible on every card in Windows forced-colors mode.

---

## 5. Things that do not move, and why

### 5.1 Card hover and press (timeline work cards, menu cards)

| Field | Spec |
|---|---|
| Trigger | `:hover` (pointer devices only) and `:active`. |
| What changes | Exactly UI 10: `--hover` fill, "Details" to `--accent-hover`. `:active` looks the same as hover (UX 7); the slide changes on release. |
| Timing | **Instant**, `transition: none`. No scale, lift, shadow or press-down. |
| Why | Limit 1 allows motion only for hints and focus, and UX 10 and UI 13 already keep hover out of motion scope. The real press feedback is the instant slide change on release. A press-down scale (for example 0.98) would be cut off by the slide change after about one frame and, on a call, would read as a glitch. |
| Watch out | Every interactive element on the site uses Tailwind `transition-colors` (150 ms) today, for example `Sidebar.tsx`, `TopNav.tsx`, `ProjectList.tsx`. Engineers rebuilding the card or key-chip look inside MOD-012 (limit 13) must **not** copy that class. Instant hover is a deliberate difference: the deck is a presentation surface, not a page you browse. |
| Touch | Wrap hover fills in `@media (hover: hover)` so iOS's sticky hover never leaves a filled card after a tap (relevant when the menu re-renders under a resting finger), and set `-webkit-tap-highlight-color: transparent` on the layer so iOS does not flash its own grey box (that flash is the browser's motion, not ours). |
| Reduced motion | Same (nothing to collapse). |
| Accessibility | Colour change only, contrast per UI 11 (`--text` on `--hover` 14.77 / 11.49:1). |
| Cost | Zero; it is the absence of a class. |

### 5.2 Close button hover and press

Same rule: UI 6.7's `--hover` fill and `--text` icon, instant, `:active` same as hover, no scale. Activation leaves instantly (UX 11, limit 6). Hover fill inside `@media (hover: hover)`.

### 5.3 Start-link highlight (AC-115)

Static. No pulse, glow or breathing. A pulsing card would be motion outside limit 1, would keep moving while Leon talks (WCAG 2.2.2 would then apply), and would pull the interviewer's eye from his face to the menu.

### 5.4 F hint exit

Instant (2.2).

---

## 6. Idle cursor hide (UX Q9)

**I think it fits**, with two narrow conditions. It is not motion (a cursor cannot fade; `cursor: none` is a state), so limit 1 does not forbid it. It serves the same goal as the rest of this doc: a clean shared screen. reveal.js does it after 5 s and Google Slides hides its toolbar the same way (research 2.2 item 4).

| Field | Spec |
|---|---|
| When active | Only while `document.fullscreenElement` is set, and only for `pointerType === "mouse"`. Windowed: never (a windowed presenter may be reaching for browser UI; see Q2). Touch and pen: no cursor exists. |
| Trigger | No mouse `pointermove` for `CURSOR_IDLE_MS` (3000 ms). |
| What changes | The layer gets a `data-cursor-idle` attribute: `.layer[data-cursor-idle], .layer[data-cursor-idle] * { cursor: none; }`. Hover fills are also suppressed while idle (`.layer:not([data-cursor-idle]) .card:hover`), so a cursor parked over a card does not leave an unexplained filled card on screen that looks like a selection. |
| Reveal | Any mouse `pointermove` or `pointerdown` removes the attribute at once and restarts the timer. The click itself still does its normal job (Next, or the card / close action). Key presses do not reveal the cursor. |
| Reduced motion | Unchanged (not motion). |
| Accessibility | Keyboard users unaffected. A mouse user gets the cursor back on the smallest movement. The close button stays visible (AC-098); only the pointer hides. |
| Implementation | One `useEffect` on the layer: a `pointermove` / `pointerdown` listener on `window`, one `setTimeout`, and `layerRef.current.toggleAttribute("data-cursor-idle", …)` through a ref, so no React re-render happens on every mouse move. Also clear the attribute and timer on `fullscreenchange`. About 20 lines. |
| Risk | WebKit has a long-standing behaviour where a `cursor` style change does not repaint until the mouse moves. If Safari does not hide the cursor while it is perfectly still, the degraded result is today's behaviour (cursor visible). QA should check Chrome and Safari in full screen. |
| PRD | Needs a PM record (UX Q9). Proposed AC wording: "In full screen, the mouse pointer hides after 3 seconds without movement and returns on the next movement or click." |

---

## 7. Feasibility (Next.js client component, no new dependencies)

- **Installed today** (`site/package.json`): `next` 16.2.9, `react` 19.2.4, `tailwindcss` 4. No animation, gesture, haptics or vector-animation library. **Every proposal here uses CSS `@keyframes` plus a few lines of React state and timers. New dependencies: none.** Framer Motion or similar would add about 30 to 50 kB gzip for three fades; not justified.
- **Where:** a CSS file inside `site/app/slideshow/` (a CSS Module is fine; module-scoped keyframe names are hashed automatically), imported by the slideshow client component (`'use client'`, already required for keys and full screen). Tokens on the layer's root class. Nothing in `globals.css` (limit 13).
- **Tailwind:** the `motion-reduce:` / `motion-safe:` variants would work, but one `@media (prefers-reduced-motion: reduce)` block in the module CSS is easier to review and keeps all motion in one file. Use one approach, not both.
- **Browser support:** `@keyframes`, `animation-fill-mode`, `:focus-visible`, `outline-offset` animation, `cqh` inside keyframes via `var()`, `@media (hover: hover)` and `prefers-reduced-motion` all work in the targets the UI doc names (Chrome 111, Safari 16.2, Firefox 113). I deliberately avoid `@starting-style` (Safari 17.5, Firefox 129) and the View Transitions API (also a slide-transition tool, out of scope).
- **Replay mechanics:** React `key={nonce}` on the menu-hint pill remounts it so the keyframes replay; no `animationend` listeners, no forced reflow tricks.
- **State machine (menu hint):** `type MenuHint = { state: "in" | "again" | "out"; nonce: number } | null`. Next on the menu: `state = current ? "again" : "in"`, `nonce++`, restart the 2000 ms timer. Timer fires: `state = "out"`, start the 150 ms timer. That fires: `null`. Unmount of the menu: clear both timers.
- **Performance:** only `opacity`, `transform` and `outline-offset` / `outline-color` animate. The first two are compositor-only; the outline is a paint of one 2 px ring on one element for 110 ms. No layout is ever animated (the menu-hint slot is reserved).
- **Testing:** Playwright `page.emulateMedia({ reducedMotion: "reduce" })` or Chrome DevTools > Rendering > "Emulate CSS prefers-reduced-motion". QA assertions should check end states (hint present / absent, ring present) and not wait on animation timing, except: under `reduce`, `getAnimations()` on the hint and a focused card returns an empty list.
- **Total cost:** about 60 lines of CSS and 45 lines of TypeScript.

---

## 8. Review of the UI designer's spec for visual fit

| # | UI item | Finding | Action |
|---|---|---|---|
| R1 | 6.8 F hint (14 px, bottom-left, 44 px row) | A 4 px rise suits a 14 px line; anything bigger would read as a toast. Fits. | None. |
| R2 | 7.5 menu hint slot (9 fh tall, 2 fh under cards) | The 0.6 fh rise from below stays inside the 9 fh slot and moves away from the card rings. In `menu-states` the pill sits about 30 px under the cards at 900 tall, enough for the rise not to touch a focused card's ring. Fits. | None. |
| R3 | 10 focus ring (2 px, 3 px offset outside; highlight inside) | The animation keeps both resting values. Because the ring grows from offset 0, for 110 ms it briefly sits on the card's 2.7 px edge, which is invisible in practice and never overlaps the inner highlight. Fits in both themes (checked against `timeline-focus-dark` and `menu-states-light`). | None. |
| R4 | 6.7 / 10 close button ring (2 px offset) | Fits. The ring on a 44 px square at the screen corner stays inside the 16 px inset, so it never clips at the viewport edge; at the 8 px inset (short side under 500 px) it ends 4 px from the edge, still visible. | None. |
| R5 | 10 hover / pressed fills | Instant, as UI 13 and UX 10 already say. The light-theme hover (`#e8e8e8` over `#f4f4f4`, card 4 in `menu-states-light`) is subtle; that is fine for a mouse user next to the screen, and a hover never matters to the interviewer. Do not compensate with motion. | None; engineers warned off `transition-colors` (5.1). |
| R6 | 13 "only the F hint, the menu hint and the focus ring may move" | Agreed. I add one thing UI does not mention: the hover suppression while the cursor is idle (6), which changes a hover style, not a motion. | Design Lead to confirm with Q2. |
| R7 | 6.4 key chip, 10 inverted chip on highlight | Static; no "key press" animation of the chip when 1-4 is pressed (the slide changes instantly anyway). | None. |
| R8 | Theme switching | No colour is animated anywhere, so nothing behaves differently in dark mode, and a theme change (if any) applies instantly. | None. |

No change to any UI token, colour or size is needed for these proposals.

---

## 9. Summary

- Three things move: the F hint arrives (300 ms delay, 240 ms rise and fade), the menu hint shows, nudges on repeat and fades out after 2 s (150 ms each), and the focus ring grows out on `:focus-visible` (110 ms). Everything else, including every slide change, hover, press, the start-link highlight and the F hint exit, is instant.
- Tokens are Carbon productive durations and easings, defined as `--ss-*` custom properties on the MOD-012 layer; one `prefers-reduced-motion` block sets them to 0 and removes every animation, leaving the static resting states the UI spec already defines.
- No dependency, no slide transition, nothing on Esc or on leaving (limits 1 and 6). About 60 lines of CSS and 45 of TypeScript.
- Idle-cursor hide fits: full screen and mouse only, 3 s, hover fills suppressed while idle; needs a PM record.
- UI spec fits as is; no changes requested.

## 10. Open questions (with a recommendation each)

| # | Question | Recommendation |
|---|---|---|
| Q1 | Should the F hint fade out instead of disappearing instantly? | **No, instant.** The commonest hiding input changes the slide in the same frame, and F starts the browser's own full-screen animation; a fade would look like a half transition (limit 1) and make AC-096 harder to test. |
| Q2 | Idle-cursor hide: full screen only, or also windowed? | **Full screen only**, as UX Q9 proposes. Windowed users may be reaching for browser UI or sharing just the tab; hiding the cursor there surprises more than it helps. PM to record it with the AC wording in section 6. |
| Q3 | If UX Q3 is accepted (the F hint becomes a button), does it need its own motion? | **Only the focus ring of section 4 (2 px offset, like the close button) and the instant hover fill of 5.2.** The entrance and instant exit stay as specified. |
| Q4 | Is 2 s long enough to read "Pick a project: press 1 to 4 or click a card" (10 words, about 2.4 s at average reading speed)? | **Keep 2 s (PRD, "about 2 seconds").** Leon knows the text; the interviewer only needs the gist, a repeat Next restarts the timer, and screen-reader users hear it in full. The 150 ms fade adds a little readable time. If the Design Lead wants more, 2.5 s still fits "about 2 seconds" without a PRD change. |
| Q5 | Should the deck honour reduced motion by also removing the F hint's 300 ms delay? | **Yes (as specified).** The delay exists only to stage the entrance; without the entrance it would just make the hint late. |
| Q6 | Should the site's other pages adopt this reduced-motion pattern (for example the mobile drawer's `transition-transform`)? | **Not now.** It is outside MOD-012 (limit 13). Note it for the Tech Lead as a possible later site-wide convention. |
