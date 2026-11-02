Status: pending

# PM proposal: D1-D3 answers, the CONV-006 `fs` field and hint timing, single-key shortcuts as a known limitation, no feature branch (PRD rev 1.10)

Mode: change, proposal pass. Nothing in prd.md or in any other status.md section has changed yet. Reserved numbers: Revision 1.10. No new AC IDs (the highest AC in the PRD is AC-131; no other proposal is pending).

Sources:
- Tech Lead Reviews "Review — 2026-11-01 — change (rev 1.9: design approval, T1-T6 answers, "Leon Wu", CONV-006 hint rule, alts, Images cap, dialog keys, idle pointer, key repeat)" (b8395f1): the Concern, rulings Q1-Q8, T1-T6, the Doc-Sync design-file notes, the engineering order, the Proposed Convention (CONV-006 amendment) and D1-D3.
- pstack findings: project-planning/pstack-findings/2026-11-01-how-rev-1-9-deltas.md (fddbdd7).

Leon's answer this proposal applies (quoted exactly, relayed by the coordinator; it answers D1-D3 and the coordinator's item 4, "create a branch before engineering?"):

> "4. no need a branch
> other go with recommend and approve"

So: D1 = (a), D2 = (a), D3 = (a), and no feature branch.

---

## 1. PRD changes (verbatim text to write)

### 1.1 Header

`**Revision:** 1.9` becomes `**Revision:** 1.10`. Date stays 2026-11-01.

### 1.2 Section 4.11, Opening (D1 (a): hint timing)

In the **Opening:** paragraph, replace the sentence

> Whenever slide 1 shows in a browser window on a browser that supports full screen (after a direct visit, or when the browser refused the site's full-screen request), the hint "Press F for full screen" shows.

with

> Whenever slide 1 shows in a browser window on a browser that supports full screen, the hint "Press F for full screen" shows: after a direct visit it shows with slide 1, without waiting, and after an opening from the site whose full-screen request the browser refused it shows within about 1.5 seconds. When the site's full-screen request succeeds, the hint never shows, not even for a moment.

The rest of the paragraph is unchanged.

### 1.3 Section 4.11, AC-096 (D1 (a))

Replace AC-096 with:

> - AC-096 (timing added in revision 1.10): Whenever slide 1 shows in a browser window on a browser with full-screen support, the hint "Press F for full screen" shows: with slide 1, without waiting, after a direct visit, a start link or a reload, and within about 1.5 seconds after an opening from the site whose full-screen request the browser refused. After an opening from the site whose full-screen request succeeds (Slideshow nav item or `7` in desktop Chrome, Safari and Firefox), the hint never shows, not even for a moment. It does not show in full screen or on iPhone Safari. It disappears for good after the first key press, click or tap, or when full screen starts. Pressing `F`, or a click or tap on the hint, enters full screen, and a click or tap on the hint does not change the slide. In full screen, `F` does nothing.

(Only the first two sentences change; the last four are the rev 1.9 text word for word.)

### 1.4 Section 8, Out of Scope (D2 (a): known accessibility limitation)

Append after the "Image overlay extras" bullet:

> - **Turning keyboard shortcuts off:** No setting to turn off or remap the single-key shortcuts: the site's `1`–`7` (section 6) and the slideshow's `F`, `M` and number keys (section 4.11). Known accessibility limitation, accepted by Leon in revision 1.10: these keys do not fully meet WCAG 2.1.4 (Character Key Shortcuts), so a speech-input user may trigger one by speaking a word.

### 1.5 Section 9, CONV-006 (D1 (a), Tech Lead's Proposed Convention, plus Q6)

Replace the CONV-006 bullet with:

> - CONV-006: Slideshow entry contract between MOD-001 and MOD-012. When the site opens the slideshow (the Slideshow nav link or key `7`), MOD-001, in the same event handler and in this order: writes `sessionStorage["slideshow-return"] = JSON.stringify({ path: location.pathname, t: Date.now(), fs })`, where `fs` is `true` when it is about to call `document.documentElement.requestFullscreen()` in the same handler (that is, when `document.fullscreenEnabled`), otherwise `false`; calls `document.documentElement.requestFullscreen()` if `document.fullscreenEnabled`, ignoring a rejection; and navigates client-side to `/slideshow`. MOD-012 reads and removes that key once on first mount. A value whose `path` starts with "/" and is not "/slideshow", and whose `t` is at most 10 seconds old, means "opened from the site": leaving returns to `path` with `router.replace`. Anything else means a direct visit: leaving goes to "/". A value without `fs` reads as `fs: false` (no request made). MOD-012 shows the "Press F for full screen" hint only while slide 1 is in a browser window and `document.fullscreenEnabled` is true. After an opening from the site with `fs: true`, it waits until full screen starts (the hint then never shows) or about 1.5 seconds pass with the browser still windowed. On any other opening it shows the hint at once, after its entrance delay. Every full-screen request the slideshow makes (`F` and the hint) targets `document.documentElement`. (Tech Lead Reviews, 2026-11-01 change review rev 1.7 + 1.8; hint rule changed by Leon's design decision L-2; `fs` field and hint timing from the 2026-11-01 change review rev 1.9, D1 (a) and Q6)

The hint sentences are Tech Lead's Proposed Convention word for word. Added by PM from the same review: "A value without `fs` reads as `fs: false` (no request made)" (engineering order step 4) and the citation.

### 1.6 Not changed in the PRD, on purpose

- D3 (a): section 5 already says `alt?` is optional; AC-127 already requires no empty alt. No PRD text changes.
- Q2 (`useRef` read), Q7 (the overlay never closes from a `keydown`), Q8 (`tabIndex={-1}`, `aria-keyshortcuts="F"`): these are how MOD-012 and MOD-003 are built, not what the site does. Tech Lead ruled Q2 corrects his own rev 1.7 note and leaves CONV-006's "reads and removes that key once on first mount" as is, and named Q7 "a MOD-003 rule", not a convention. They go to Doc-Sync as spec notes (section 2 below). The PRD already says the hint is not a Tab stop and that `F` is its keyboard equivalent.
- prd.md line 38 (Purpose) still says "Tsan-Yu Wu (Leon)". It is not site text and AC-125 does not cover it; left as is.

---

## 2. status.md entries (verbatim text to write)

### 2.1 PM Updates (appended at the end)

```
- 2026-11-01 [SUBSTANTIVE] Answer Tech Lead D1-D3: CONV-006 `fs` field and hint timing (AC-096), single-key shortcuts as a known accessibility limitation, SectionItem alt stays optional; no feature branch; PRD rev 1.10
  Approved by Leon in the coordinator session: "4. no need a branch
  other go with recommend and approve" (D1 (a), D2 (a), D3 (a), no feature branch); classification answers: <Leon's quoted answers to questions 2 and 3>
  Proposal: project-planning/pm-proposals/2026-11-01-d1-d3-hint-contract-rev-1-10.md
  Answers Tech Lead Reviews "Review — 2026-11-01 — change (rev 1.9: design approval, T1-T6 answers, "Leon Wu", CONV-006 hint rule, alts, Images cap, dialog keys, idle pointer, key repeat)" (b8395f1): D1 (a), D2 (a), D3 (a), the Proposed Convention (CONV-006 amendment), Q6.
  Sections changed: header; 4.11 (Opening, AC-096); 8 (Turning keyboard shortcuts off); 9 (CONV-006).
  Modules affected: MOD-001 (writes `fs` in the CONV-006 value); MOD-012 (hint timing from `fs`, AC-096; F and the hint target document.documentElement). MOD-003: no PRD change (D3 (a): alt stays optional). No module added, removed or renamed. Module Map unchanged. Current Phase unchanged (Phase 4 — Deploy).
  Corrects the rev 1.9 entry: "AC-128 shrinks tabvault-mobile.jpeg" means the image shows smaller; MOD-006 has no image-file change and AC-128 belongs to MOD-003 only (Tech Lead Q4).
  Order of runs: claude --agent doc-sync syncing rev 1.7, 1.8, 1.9 and 1.10 together; then the engineers in the Tech Lead's order (b8395f1): MOD-003; the record modules MOD-005, 006, 004, 011; the page modules MOD-007, 008, 009, 010; MOD-012; MOD-001 last. Work stays on main: every push deploys, so do not push between MOD-012 and MOD-001 unless both are in.
  Notes for Doc-Sync (engineering rules from Tech Lead review b8395f1; specs only, not PRD text):
    MOD-012 spec: read the CONV-006 key in an effect into a useRef on the slideshow component and remove it on first read, never a module-level variable (Q2); full-screen state from useSyncExternalStore with "in" read at subscribe time and server snapshot false, and only an "in" to "out" change counts as leaving, sharing one "already leaving" guard with the close button (section 1); the hint is <button type="button" tabIndex={-1} aria-keyshortcuts="F"> named by its visible text (Q8), calls preventDefault on mousedown and returns focus to the layer after its click, and the root pointer handler ignores events whose target is inside a button (section 1); keydown checks isComposing and modifiers, then e.repeat, before any branch (section 4, UX 14 note); the idle state has its own [data-idle] gate and ignores pointer moves with unchanged clientX/clientY (section 4); --ss-* tokens declared on the slideshow root, not in globals.css (T1); A2 "⇄" as aria-hidden SVG with a clip-based sr-only "Engineer ⇄ QA", QA checks the accessible name (T2); hint and frame both sized from 100dvh (T3); B2 uses /projectday-screens.webp from MOD-011 (T4); the UX 14 hand-offs (pointerType, touch-action: pinch-zoom on the layer, overscroll-behavior: none on the root, digits by key or code, F and M by key, skip focus() when the layer is already active). Design files: slideshow-motion.md line 16's "Details" cue is stale; review 2's L-3 row ("first Tab stop") is overridden by the PRD; UX 6.1's "about 500 ms" settle window is replaced by CONV-006.
    MOD-003 spec: the overlay never closes the dialog from a keydown; it closes only via the cancel event (Esc: preventDefault, then history.back()) or a click (history.back()), and dialog.close() runs from popstate after the closing animation; digits do nothing in the overlay (Q7). Images cap: max-h-[640px] with w-auto max-w-full h-auto on the img, border and rounding on the img (Q5). AC-128 belongs here only (Q4). QA check for AC-127 on the build: grep -c 'alt=""' in site/.next/server/app/projects/*.html is 0 (Q3, D3).
    MOD-001 spec: CONV-006 with fs; CONV-007 with both bails (/slideshow and dialog[open]) before the router.push in the number-key handler.
    QA: AC-096's refused-request case needs a way to make the browser refuse the site's request; the MOD-012 QA spec states how (Tech Lead to supply if Doc-Sync cannot). Gotcha 11 (iframe without allow="fullscreen") is out of QA's scope: QA tests top-level only.
```

### 2.2 Decisions (appended at the end)

```
- 2026-11-01 D1 (rev 1.9 change review): the slideshow learns from MOD-001 whether a full-screen request was made: CONV-006 gains an `fs` field. Opening from the sidebar never flashes the "Press F" hint; a direct visit shows it at once; a refused request shows it within about 1.5 s. Leon: "other go with recommend and approve" (D1 (a)). PRD rev 1.10 (CONV-006, AC-096).
- 2026-11-01 D2 (rev 1.9 change review, design T5): single-key shortcuts (site 1-7; slideshow F, M, digits) stay with no way to turn them off. Leon accepts the WCAG 2.1.4 risk as a known accessibility limitation (PRD 8). Leon: "other go with recommend and approve" (D2 (a)).
- 2026-11-01 D3 (rev 1.9 change review): SectionItem.alt stays optional; QA checks the built project pages for empty alts (AC-127). "Make alt required" is a Phase 4 integration-review candidate, logged by Tech Lead (b8395f1). Leon: "other go with recommend and approve" (D3 (a)).
- 2026-11-01 Branch: no feature branch for the rev 1.7-1.10 engineering; work stays on main. Leon: "4. no need a branch". Every push to main deploys, so do not push between MOD-012 and MOD-001 unless both are in (Tech Lead, b8395f1).
```

### 2.3 Last Action (apply pass)

```
agent: pm
mode: change
module: n/a
result: success
next: claude --agent doc-sync (sync PRD rev 1.7, 1.8, 1.9 and 1.10 together). Still pending, separately: Leon's sign-offs AC-017 (claude --agent qa-mod-home "ui-results: <reply>") and AC-091.
timestamp: <apply time>
```

(If Leon tags the change [ARCHITECTURAL], `next:` becomes: the coordinator runs /pstack:how on the CONV-006 entry path (Sidebar slideshow entry, slideshow mount), then claude --agent tech-lead "change review", then claude --agent doc-sync.)

---

## 3. Classification

- Substantive: it changes the cross-module contract (CONV-006) that MOD-001 and MOD-012 build against, and an AC (AC-096). Doc-Sync needs a delta sync, not a passthrough.
- Architectural: PM's recommendation is no. The change is Tech Lead's own Proposed Convention, applied word for word; Tech Lead asked only for "a small PM change (CONV-006 text) before Doc-Sync", not another review, and no code for it exists yet. Leon decides (question 3).

## 4. Checklist run

Quality checklist and anti-patterns run on the changed sections: AC-096 stays one testable criterion with its ID; no new IDs; no [DECISION NEEDED]; the implementation detail stays inside section 9 (allowed exception) and the Doc-Sync notes; Out of Scope states the non-goal explicitly; Revision incremented; Module Map unchanged.

## 5. Questions for Leon

Already answered (quoted above, not asked again):
- D1: (a), amend CONV-006 with `fs`. "other go with recommend and approve"
- D2: (a), accept the WCAG 2.1.4 risk as a known limitation. "other go with recommend and approve"
- D3: (a), alt stays optional, QA greps for empty alts, "make it required" logged for Phase 4. "other go with recommend and approve"
- Feature branch: none, stay on main. "4. no need a branch"

Open:
1. Approve the PRD rev 1.10 changes (1.2 to 1.5) and the status.md entries (2.1, 2.2) as written? Recommendation: yes.
2. Is the change trivial or substantive? Recommendation: substantive (it changes the MOD-001/MOD-012 contract and AC-096).
3. Is it architectural (sending it through /pstack:how and another Tech Lead review before Doc-Sync)? Recommendation: no. It is Tech Lead's own convention text, and he asked only for the PM change before Doc-Sync.
