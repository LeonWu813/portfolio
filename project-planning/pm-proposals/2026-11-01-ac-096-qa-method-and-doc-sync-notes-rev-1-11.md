Status: pending

# PM proposal: log the AC-096 refused-request QA method, record the About page as built, page headings, "Leon Wu" in the Purpose line, correct the AC-017 note (PRD rev 1.11)

Mode: change, proposal pass. Nothing in prd.md or in any other status.md section has changed yet. Reserved numbers: Revision 1.11, AC-132. No other proposal is pending; the highest AC in the PRD is AC-131.

Sources:
- Doc-Sync, status.md Sync Reports "Sync Report — Delta Sync — 2026-11-01 (rev 1.7 + 1.8 + 1.9 + 1.10)" (2998d3f): the one [AMBIGUITY] marker in modules/mod-slideshow/spec.md and the four "Noted for PM" points.
- Tech Lead Reviews "Review — 2026-11-01 — on-demand (AC-096 refused full-screen request: QA method)" (17e70cc).
- Read-only check of the built About page, site/app/about/page.tsx (last changed by Leon in 6fb90ad, 2026-06-29, after MOD-008's QA on 2026-06-28).

---

## 0. What I found that is bigger than Doc-Sync's note

Doc-Sync kept "No photo" on About as a carried-over line, and the MOD-008 spec still has **AC-063: "The system shall not include a photo or headshot on the /about page."** The live About page has five photos of Leon and three sections Leon added himself on 2026-06-29: "Meeee" (Taipei, Seattle, his cat), "Hobbies" (ski, snowboard, bouldering) and "Background" (the two PRD paragraphs). PRD 4.8 mentions none of this. Status.md Decisions (Q5, rev 1.5) already calls these photos "About photos", and two of them are slide 3 of the slideshow.

MOD-008 is in the current engineering order (page modules, spec-update). If its engineer runs on the current spec, AC-063 tells it to remove Leon's photos and sections from the About page. So point (1) is a real PRD change, not a "confirm or drop" detail. MOD-008 should wait until this change is applied and synced (question 10).

---

## 1. PRD changes (verbatim text to write)

### 1.1 Header

`**Revision:** 1.10` becomes `**Revision:** 1.11`. Date stays 2026-11-01.

### 1.2 Section 1, Purpose (Doc-Sync point 2)

In prd.md line 38, replace

> A personal portfolio website for Tsan-Yu Wu (Leon), full-stack engineer

with

> A personal portfolio website for Leon Wu, full-stack engineer

The rest of the paragraph is unchanged. This is not site text and AC-125 does not cover it. The change keeps the PRD and production.md (which copies this line word for word) in line with the rev 1.9 name rule, so no engineer copies the old name form into page text or a meta tag.

### 1.3 Section 4.7, Experience (Doc-Sync point 1, heading)

After the `**Route:** /experience` line, insert:

> **Page heading:** Experience

### 1.4 Section 4.8, About (Doc-Sync point 1, heading and "No photo")

Keep the `**Route:**` and `**Layout:**` lines as they are. Directly after the `**Layout:**` line, insert:

> **Page heading:** About
>
> **Sections (in this order, as Leon built them on 2026-06-29):**
>
> 1. **Meeee**: three lines, each on its own line:
>    - Born and lived in Taipei Taiwan 🇹🇼
>    - Moved to Seattle for Master degree 🇺🇸
>    - Have a 3-year-old cat called 方勇吉 🐱
>
>    Then two photos side by side: `IMG_6605.jpg`, `IMG_6591.jpg`.
> 2. **Hobbies**: the line "Ski ⛷️ Snowboard 🏂", then two photos side by side: `IMG_6353.jpg`, `IMG_6875.JPG`. Then the line "Bouldering 🧗", then one photo: `4D0BDA8A-B273-40DC-BD3D-3098AF6BBB73.JPG`.
> 3. **Background**: the main paragraph and the second paragraph below, in that order.
>
> The five photos are files in `site/public/` (project files of MOD-001, status.md Decisions, Q5). They have empty alt text: the line above each group says what the photos show (Leon's choice, revision 1.11).

(If Leon answers question 4 with "write alt texts", the last sentence is replaced by the alt texts he approves, and a new proposal pass drafts them.)

The `**Main paragraph:**` and `**Second paragraph:**` blocks stay word for word. After the second paragraph's quote, add:

> **Acceptance criteria (added in revision 1.11):**
> - AC-132: /about shows the page heading "About", then the sections "Meeee", "Hobbies" and "Background", in that order. Each section's lines, paragraphs and photos are the ones listed under Sections above, word for word and in the listed order. No other section, line or photo appears, and there is no education block.

### 1.5 Section 4.10, Contact (Doc-Sync point 1, Contact keeps its heading line too)

After the `**Route:** /contact` line, insert:

> **Page heading:** Contact

### 1.6 Not changed in the PRD, on purpose

- **AC-096.** The Tech Lead's on-demand review says AC-096 as written in rev 1.10 is testable with his method and needs no PRD text change. The method is how QA tests, not what the site does, so it does not belong in the PRD. It goes to Doc-Sync through the PM Updates entry below (the channel Doc-Sync reads; the entry names the marker it resolves), and Leon's part of it is recorded in Decisions.
- **AC-017 (Doc-Sync point 3).** My rev 1.7 PM Updates entry said "AC-017 download name unchanged". The ID was wrong. I meant that the Home "Download CV" file keeps the download name Leon_Wu_Resume.pdf (PRD 4.1, Tertiary CTA), which the MOD-002 spec already carries in its Requirements. AC-017 is the above-the-fold criterion and is not affected. No PRD or spec change; the new PM Updates entry corrects the old one.
- **AC-091 "proposed" wording (Doc-Sync's fourth note).** Not one of the three points asked about. Record 2 gives the alt text, so the word "proposed" is stale but does not change what QA checks. Left as is in this revision.

---

## 2. status.md entries (verbatim text to write)

### 2.1 PM Updates (appended at the end)

```
- 2026-11-01 [SUBSTANTIVE] Log the Tech Lead's AC-096 refused-request QA method for the MOD-012 spec; record the About page as built (AC-132 replaces "no photo"); page headings for Experience, About and Contact; "Leon Wu" in the Purpose line; correct the rev 1.7 AC-017 note; PRD rev 1.11
  Approved by Leon in the coordinator session: "<Leon's quoted answers to questions 1-9>"
  Proposal: project-planning/pm-proposals/2026-11-01-ac-096-qa-method-and-doc-sync-notes-rev-1-11.md
  Resolves: [AMBIGUITY] in modules/mod-slideshow/spec.md (AC-096's refused-request case: how QA makes the browser refuse the site's full-screen request), from Sync Report "Delta Sync — 2026-11-01 (rev 1.7 + 1.8 + 1.9 + 1.10)" (2998d3f). Answer: Tech Lead Reviews "Review — 2026-11-01 — on-demand (AC-096 refused full-screen request: QA method)" (17e70cc). AC-096's PRD text is unchanged.
  Answers Doc-Sync's "Noted for PM" points in the same report: (1) page headings now in PRD 4.7, 4.8 and 4.10; "No photo" on About is dropped, PRD 4.8 lists the sections and photos as built, AC-132; (2) Purpose line now "Leon Wu"; (3) see the correction below.
  Corrects the rev 1.7 entry: "AC-017 download name unchanged" cited the wrong ID. It meant the Home "Download CV" file keeps the download name Leon_Wu_Resume.pdf (PRD 4.1 Tertiary CTA, already in the MOD-002 spec). AC-017 (above the fold) is not affected. No spec change.
  Sections changed: header; 1 (Purpose); 4.7 (Page heading); 4.8 (Page heading, Sections, AC-132); 4.10 (Page heading).
  Modules affected: MOD-012 (QA spec: the AC-096 method); MOD-001 (spec engineering note: the Method 1 precondition); MOD-008 (AC-132 replaces AC-063; spec-update scope gains AC-132, no code change expected, the page already matches); MOD-007 and MOD-010 (heading lines now sourced from the PRD; no AC change). No module added, removed or renamed. Module Map unchanged. Current Phase unchanged (Phase 4 — Deploy).
  Notes for Doc-Sync:
    MOD-012 spec: replace the [AMBIGUITY] marker with the Tech Lead's method from 17e70cc as QA instructions: Method 1 (main: headless Chrome on the production build via remote debugging, the nav click or a synthetic key 7 sent with userGesture false; a real browser refusal), Method 2 (backup and Safari/Firefox: the console-only requestFullscreen stub, never added to site/), the timing recorder, the pass rules (refused: hint first visible at 1200-2000 ms, no full screen, slideshow-return key gone after mount, no unhandled promise errors; successful opening, headless control: hint never visible within 4 s; direct visit: hint visible within about 500 ms), the headless limits, and the "not valid" list (iframe without allow="fullscreen", Firefox full-screen-api.enabled = false: these test the no-support path, not a refusal). Copy the scripts and numbers word for word from the review. Add the human sign-off script for AC-096 (Decisions, 2026-11-01 AC-096 sign-off): Leon, on the build, on his Mac in desktop Chrome, Safari and Firefox, clicks the Slideshow nav item and separately presses 7; "Press F for full screen" never appears, not even for a moment; on iPhone Safari no hint shows. The refused-request case needs no human sign-off.
    MOD-001 spec: engineering note (Tech Lead, 17e70cc): the Slideshow nav and key-7 handlers must not ignore events with isTrusted false; CONV-006 does not ask for such a check, and with one QA's Method 1 cannot run.
    MOD-008 spec: drop AC-063 ("no photo") and the "No photo" lines; add PRD 4.8's Sections and AC-132; the photos keep empty alt text by Leon's choice. AC-059 (heading) now has PRD 4.8 as its source.
    MOD-007 and MOD-010 specs: the heading lines ("Experience", "Contact") now come from PRD 4.7 and 4.10; remove the "carried from earlier syncs" remark.
    production.md: Project Summary copies the new Purpose line.
```

### 2.2 Decisions (appended at the end)

```
- 2026-11-01 AC-096 sign-off (rev 1.11): QA tests AC-096's refused-request case with the Tech Lead's method (17e70cc), with no human step. Leon does the human part when MOD-012 and MOD-001 are QA'd together: on the build, on his Mac in desktop Chrome, Safari and Firefox, the Slideshow nav item and, separately, key 7; "Press F for full screen" never appears, not even for a moment; on iPhone Safari no hint shows. Leon: "<quote, question 2>".
- 2026-11-01 About page (rev 1.11): the About page stays as Leon built it on 2026-06-29 (sections "Meeee", "Hobbies", "Background", five photos). The old "no photo" rule (MOD-008 AC-063) is dropped. The photos keep empty alt text. Leon: "<quote, questions 3 and 4>".
```

### 2.3 Last Action (on the apply pass)

```
agent: pm
mode: change
module: n/a
result: success
next: claude --agent doc-sync (delta sync of PRD rev 1.11: replace the AC-096 [AMBIGUITY] marker in the MOD-012 spec, MOD-008 AC-132 replaces AC-063, heading lines, Purpose line). Engineering in the Tech Lead's order (b8395f1) continues meanwhile with MOD-003 and the record modules; MOD-008 waits for this sync.
timestamp: <ISO 8601 at apply>
```

---

## 3. Questions for Leon (one recommendation each)

1. **AC-096 test method: log it as a note to Doc-Sync, no PRD text change?** QA forces a real browser refusal in headless Chrome (the Tech Lead's Method 1), with a console stub as backup for Safari and Firefox, and fixed timing pass rules. Recommendation: yes, as written in 2.1.
2. **Will you do the AC-096 human check yourself when MOD-012 and MOD-001 are QA'd?** On your Mac in Chrome, Safari and Firefox: click the Slideshow nav item, then separately press 7, and confirm "Press F for full screen" never appears, not even for a moment; then open the slideshow on your iPhone and confirm no hint shows. Recommendation: yes.
3. **About page: write it into the PRD as you built it (sections "Meeee", "Hobbies", "Background" with the five photos) and drop the old "no photo" rule?** Without this, the next MOD-008 engineer run would remove your photos and sections. Recommendation: yes, as written in 1.4.
4. **About photos: keep empty alt text, or write alt texts?** Empty alt means screen readers skip the photos; the line above each group ("Ski ⛷️ Snowboard 🏂", "Bouldering 🧗", the "Meeee" lines) still says what they show. Alt texts would follow the project pages' rule (AC-127), and I would draft five for your approval in a new proposal pass. Recommendation: keep empty alt text in this revision.
5. **Add the page headings "Experience", "About" and "Contact" to the PRD?** They are what the site shows today; this only makes the PRD state them, as it already does for "Skills". Recommendation: yes.
6. **PRD Purpose line: change "Tsan-Yu Wu (Leon)" to "Leon Wu"?** It is not shown on the site, but production.md copies it and engineers read it. Recommendation: yes, as written in 1.2.
7. **AC-017 note: correct my rev 1.7 note in status.md only, with no PRD or spec change?** I wrote the wrong AC number; I meant that the CV still downloads as Leon_Wu_Resume.pdf from Home. Recommendation: yes.
8. **Is this change trivial or substantive?** Recommendation: substantive. It answers a Doc-Sync marker (always substantive) and changes MOD-008's acceptance criteria.
9. **Is this change architectural (changes how the system is built)?** Recommendation: no. It records what the site already does and how QA tests it; no Tech Lead change review is needed.
10. **Engineering while this waits: may MOD-003 start now, with MOD-008 on hold until Doc-Sync syncs rev 1.11?** MOD-003, the record modules (MOD-005, 006, 004, 011), MOD-007, MOD-009, MOD-010 and MOD-012's build do not depend on this change; the marker blocks only AC-096's QA. MOD-008's current spec would remove your About photos. MOD-001 is last in the order anyway, after its spec gains the Method 1 note. Recommendation: yes, start MOD-003 now and hold MOD-008 until the rev 1.11 sync.
