Status: pending

# PM proposal: interview Slideshow page, image overlay on project pages, ProjectDay screenshots

- Date: 2026-11-01
- Mode: change (proposal pass, nothing applied)
- Requested by Leon on 2026-11-01, verbatim:
  1. "Please view this guide line, review this suggestion, look for best practice and make a presentation for me to use in the interview that can make me impress by all of the interviwee when applying for engineering intern or junior jobs. Make a nother tab under the sidebar Contact "Sliswshow" when click on it the website would be come a fullscreen slideshow and user can click "space" or up down to control the slide, esc to go back to the website"
  2. "Regarding of the ProjectDay image i put them in the @~/Downloads/Simulator Screenshot - iPhone 17 Pro - 2026-10-29 at 02.15.29.png there are five of them please check"
  3. "For the first image in the multi-agent page please make it clickable and interact like this [screen recording] when click on it, it will creat a overlay and the image would be in the senter until the user click on the overlay then it will close"
- Inputs read: `project-planning/prd.md` (Revision 1.6), `project-planning/status.md`, all `project-planning/modules/*/status.md`, `asset/content/interview-deck.md` and `asset/screenshots/projectday/*.png` (commit be6fb46), the case-study source files (for fact checks), the interview-slides guide summary in the invocation.
- Proposed PRD revision: 1.6 -> 1.7
- Proposed new IDs: MOD-012; AC-093 to AC-112. The highest AC ID in the PRD and in every module status file is AC-092. No other proposal is pending (all three earlier files are `applied`), so no numbers are reserved elsewhere.
- I could not see the screen recording. The overlay requirements below describe the behaviour in Leon's words plus the coordinator's suggestions. If the recording shows something different (for example an animation or a close button that is not described here), Leon should say so in his answer.

---

## 1. Things to know first

1. **Two human sign-offs are still open in Phase 4:** MOD-002 AC-017 (above the fold at laptop size) and MOD-005 AC-091 (the diagram at 375px). Both are browser checks Leon does himself, with scripts in `modules/mod-home/status.md` and `modules/mod-project-multi-agent/status.md`. Nothing in this change alters the Home page, and the overlay must not change the diagram's size or position in the page (AC-110). So both sign-offs can be done now, while this change goes through review. If Leon does the AC-091 check after the overlay ships, he checks the same thing.
2. **Phase 4's integration review has not run yet.** Question 5 decides whether this work joins Phase 4 (one integration review and one checkpoint at the end, covering everything) or waits for a Phase 5. Section 6 lists the order of runs for both answers.
3. **The deck copy goes against the guide in a few places.** The guide allows about 50 words per slide. Slides 5 (88 words), 6 (63), 8 (70) and 1 (75) are over. Slide 7 says ProjectDay is on the App Store ("ProjectDay (iOS, App Store)"), while the site and Slide 1 say "submitted to the App Store". Slide 1 says "after 4 years shipping web products in industry". By the Experience page, that is about 4 years in industry, and about 2 of them as a front-end developer. An interviewer holding the resume may ask about it. Question 6 proposes trims and fixes. The deck file belongs to Leon, so the PRD only points at it. Any approved edit to `asset/content/interview-deck.md` is a `human:` commit the coordinator makes before Doc-Sync.
4. **The ProjectDay screenshots are tall phone images (1206x2622).** The feature-image slot shows its image across the full content column, as with the multi-agent diagram. A single phone screenshot there would be about 1,900px tall on a laptop. Question 16 therefore proposes one wide image made from three screens as the feature image, plus an Images section for two more. This is the same pattern as SitePlus+ and TabVault, and it needs no change to the feature-image template. The files are 0.4 to 1.7 MB each, and the site's performance goal is Lighthouse above 90, so AC-112 sets a size limit.
5. **The screenshots show people and third-party photos.** The Route beta screenshot has a video thumbnail of a climber. The Route screenshot shows a small strip of the same thumbnail at the bottom, behind the tab bar. The Home screenshot shows two avatars, "Leon Wu" (a photo of Leon) and "Pro" (a waterfall picture). The Gyms list and the Home screen show photos of real climbing gyms. Whether to publish them is Leon's call (question 17).
6. **The screenshots show Traditional Chinese UI, and the site is English-only.** The alt text and a caption explain this to English-speaking recruiters (question 18).
7. **This project has no project-level `CLAUDE.md`.** The coordinator works from the global fallback. This is not part of this change. I mention it because my `next:` line names the pstack step from the global rule (`/pstack:how` before an architectural Tech Lead review).
8. **Separate from this change:** `asset/og-image.png` exists but is not committed. Decision E3 (OG image) stays open until Leon approves a file. That is a separate small step.

---

## 2. Proposed PRD change (verbatim text to write; `project-planning/prd.md` at Revision 1.7)

Only the parts listed below change. Everything else stays word for word.

### 2.1 Header

```
**Revision:** 1.7
**Date:** 2026-11-01
```

### 2.2 Table of Contents

After the line `   - 4.10 Contact`, add:
```
   - 4.11 Slideshow
```

### 2.3 Section 1, Goals: add a fifth goal

```
5. Give Leon a ready-to-present interview deck on the site, one click or one key press from any page.
```

### 2.4 Section 2, Accessibility

`- Number-key shortcuts 1–6 for nav (see section 6).` becomes:
```
- Number-key shortcuts 1–7 for nav (see section 6).
```

### 2.5 Section 3, Sidebar Navigation table: add a row after Contact

```
| 7        | Slideshow  | /slideshow  | `7`               |
```

Add after the sentence that starts "Keyboard shortcuts fire on `keydown`":
```
The Slideshow item appears in the desktop sidebar and in the mobile drawer, with its own icon and shortcut badge like the other items. Selecting it opens the full-screen slideshow (section 4.11), not a normal page inside the sidebar layout.

**Acceptance criteria (added in revision 1.7):**
- AC-093: The desktop sidebar and the mobile drawer show a seventh item, "Slideshow", directly after Contact, with an icon and the shortcut badge "7", in the same style as the other six items. Selecting it opens /slideshow.
- AC-094: Pressing `7` (no modifier key, focus not in an input, textarea or contenteditable element) opens the slideshow exactly as selecting the Slideshow item does. While the slideshow is open, the number keys `1`–`7` do nothing.
```

### 2.6 Section 4.2, Projects (Split Panel): add at the end of the section

```
**Image overlay (every project page):** On every /projects/<slug> page, the feature image and every image in an Images section open in an overlay when clicked, tapped, or activated from the keyboard. The page dims, the image is centered and shown as large as fits the screen without cropping, and a click or tap anywhere, Esc, or the close button closes it. Leon asked for this on 2026-11-01 for the multi-agent diagram. It applies to every project image so that all images behave the same way.

**Acceptance criteria (added in revision 1.7):**
- AC-108: On every /projects/<slug> page, the feature image and each image in an Images section shows a zoom-in pointer on hover, can be reached with Tab, and opens with Enter or Space as well as with a click or tap. Opening shows an overlay that dims the whole page, including the sidebar, with the image centered and scaled to fit within 90% of the viewport's width and height, without cropping or distortion. On /projects/multi-agent-system at 1280x800, the diagram in the overlay is wider than it is in the page.
- AC-109: The overlay closes on a click or tap anywhere in it, including on the image, on Esc, and on a visible close button. While it is open, keyboard focus is inside the overlay, Tab does not reach the page behind it, the page behind it does not scroll, and screen readers announce a dialog named by the image's alt text. When it closes, focus returns to the image that opened it.
- AC-110: When the visitor's system is set to reduce motion, the overlay opens and closes with no animation; otherwise any open or close animation lasts at most 250ms. Opening and closing the overlay does not change the image's size or position in the page, and AC-089 and AC-091 still pass at 1280px and 375px wide.
```

### 2.7 Section 4.6, Project Detail: ProjectDay

Header table: the `Feature image` row becomes:
```
| Feature image | One wide image showing three of Leon's iPhone screenshots side by side, left to right: Home (`projectday-home.png`), Gyms (`projectday-gyms.png`), Route (`projectday-route.png`), from `asset/screenshots/projectday/`. Each screen is whole and uncropped, with even gaps and a transparent background. Who makes the image (Leon as an asset, or the MOD-011 engineer from the three files) and its file name under the `projectday-` prefix are the Tech Lead's call. |
| Feature image caption | ProjectDay's interface is in Traditional Chinese, for climbers in Taiwan. |
```

"Case study sections (in order)" list becomes:
```
1. The problem
2. My role
3. How it works end to end
4. Images
5. Notable technical decisions
6. Impact and status
7. What I learned and what I'd improve
```

Add after the list:
```
The Images section shows two screenshots from `asset/screenshots/projectday/`, in this order, and has no paragraphs. Its heading is not in the source file, as on SitePlus+ and TabVault.

| Screenshot | Alt text |
|---|---|
| `projectday-route-beta.png` | ProjectDay route screen scrolled to the Beta videos section, showing the thumbnail of a climber's beta video for a V0 route. |
| `projectday-profile.png` | ProjectDay profile screen with climbing stats: top grade V10, 10 sends, 9 climbing days, and a bar chart of sends per grade. |

`projectday-route-beta.png` is published only with Leon's approval in revision 1.7 (see question 17 of that proposal). Without it, the Images section shows `projectday-profile.png` alone.
```

Acceptance criteria: replace AC-084 and AC-089 with the text below, and add AC-111 and AC-112 after AC-090:
```
- AC-084: Seven sections render in the order listed, with exactly those headings. Every paragraph matches the source file word for word. The Images section has no paragraphs. The editor's notes "(confirm it is live before publishing)" and "Suggested listing fields: ..." do not appear anywhere on the page.
- AC-089: The feature image is the three-screen image described in the header table (Home, Gyms, Route, left to right), with Record 4's `featureImageAlt` as alt text. It shows whole, with no cropping, across the content column on desktop (1280px wide) and mobile (375px wide), and Record 4's `featureImageCaption` appears directly below it.
- AC-111: The Images section shows the screenshots listed in the table above, in that order, each whole with no cropping and with its alt text from the table. At 1280x800 no screenshot is taller than 640px; at 375px wide each fits the column width.
- AC-112: Every ProjectDay image file the page loads is at most 300 KB. Each single screenshot is at least 1000 pixels tall, and the three-screen image is at least 1500 pixels wide, so they stay sharp at the size the image overlay shows them (AC-108).
```

### 2.8 New section 4.11, Slideshow (inserted after 4.10 Contact)

```
### 4.11 Slideshow

**Route:** /slideshow

**Source file:** `asset/content/interview-deck.md`

**Purpose:** A full-screen presentation Leon runs from his own site in interviews for engineering intern and junior roles. It follows the interview-slides guide Leon supplied on 2026-11-01: one intro slide, seven slides on one side project (the Multi-Agent Software Development System), one closing slide, and three backup slides for deep-dive questions.

**Slides (in order):**
- Main run: 1 Intro, 2 The pitch, 3 The problem, 4 The solution, shown, 5 How it works, 6 The hardest part, 7 The results, 8 What I learned, 9 Thank you.
- Backups, after slide 9: B1 SitePlus+, B2 ProjectDay, B3 TabVault.

The slide names above are labels in the source file and do not show on screen. Each slide shows its Title and Body (or, on slide 1, the top line, claim and proof points; on slide 7, the big numbers) word for word. Speaker notes and editor's notes never show.

**Slide images:**

| Slide | Image | Alt text |
|---|---|---|
| 2 | TabVault home screenshot, `/tabvault-home.png` (MOD-006 asset) | Screenshot of tab-vault.com, the TabVault web app built by the multi-agent system. |
| 4 | The multi-agent workflow diagram (MOD-005 asset, section 4.4) | Record 2's `featureImageAlt` |
| B2 | The ProjectDay three-screen image (MOD-011 asset, section 4.6) | Record 4's `featureImageAlt` |

**Intro top line:** By default it reads "Leon Wu / Applying for Software Engineering Intern roles". Two optional URL parameters tailor it to one application:
- `company` set: "Leon Wu / Applying for {role} at {company}", where {role} is the `role` parameter or, without it, "Software Engineering Intern". Example: `/slideshow?role=Junior%20Software%20Engineer&company=Acme` reads "Leon Wu / Applying for Junior Software Engineer at Acme".
- Only `role` set: "Leon Wu / Applying for {role} roles".
- Parameter values show as plain text. A value that is empty or longer than 60 characters is ignored.

**Opening:** Selecting the Slideshow nav item or pressing `7` puts the browser in full screen, where the browser supports it, and shows slide 1. Where full screen is not available (for example on iPhone), the slideshow fills the browser window instead. A direct visit to /slideshow (a typed or shared link, or a reload) fills the browser window and shows the hint "Press F for full screen" until the first key press, click or tap. Pressing `F` enters full screen.

**Controls:**
- Next slide: Space, Right arrow, Down arrow, Page Down; a click or tap on the right half of the screen; a swipe left or up.
- Previous slide: Shift+Space, Left arrow, Up arrow, Page Up; a click or tap on the left half of the screen; a swipe right or down.
- Home goes to slide 1. End goes to slide 9.
- Next on B3 and previous on slide 1 do nothing.
- Leaving: Esc, or the close button in a corner of the screen, returns to the page the slideshow was opened from (Home after a direct visit). A single Esc press does this even in full screen. Leaving full screen any other way also returns to that page.

**Look:** Each slide is a 16:9 frame, scaled to the largest size that fits the screen, with the page background around it. All slides share one layout and the site's colors, and follow the site's current light or dark theme. Slides change instantly, with no animation. A small counter in a corner reads "3 / 9" on main slides and "Backup 1 / 3" on backup slides.

**Acceptance criteria (added in revision 1.7):**
- AC-095: Selecting the Slideshow nav item or pressing `7` shows slide 1 with the browser in full screen in desktop Chrome, Safari and Firefox. On a browser without full-screen support (iPhone Safari), the slideshow fills the window. In both cases no sidebar, top bar or other site element is visible.
- AC-096: A direct visit to /slideshow, or a reload, shows slide 1 filling the browser window, with the hint "Press F for full screen". The hint disappears after the first key press, click or tap. Pressing `F` enters full screen.
- AC-097: The keyboard controls listed under Controls move between slides exactly as listed, including Home and End, and the slide order is the one listed under Slides.
- AC-098: The click, tap and swipe controls listed under Controls move between slides as listed on desktop (mouse) and on a 375px-wide phone. The close button is visible on every slide and can be reached and pressed from the keyboard.
- AC-099: Esc or the close button returns to the page the slideshow was opened from, or to Home after a direct visit, with one Esc press, including while in full screen. Leaving full screen through the browser's own controls also returns to that page. Back on the site, the sidebar and keyboard shortcuts work as before.
- AC-100: Every slide's on-screen text matches `asset/content/interview-deck.md` word for word, in the order listed under Slides. No speaker note, editor's note, slide label or "Visual:" line appears anywhere on /slideshow. The copy contains no em dashes.
- AC-101: Slide 1's top line follows the Intro top line rules for no parameters, `company` only, `role` only, and both. A value that is empty or longer than 60 characters is ignored, and text such as `<b>x</b>` shows literally, not as formatting.
- AC-102: At 1280x720, 1920x1080, 1440x900 and 375x667 (portrait and landscape), every slide shows whole, with no scrolling and no clipped text. Body text is at least 4.4% of the slide frame's height (24pt on a standard 16:9 slide), and slide titles are 5.9% to 7.4% of it (32 to 40pt). All slide text meets WCAG AA contrast in both themes.
- AC-103: The counter shows the position as described under Look. Screen readers announce the new slide's position and title on every slide change.
- AC-104: The slideshow uses the site's palette in the active theme (light or dark), every slide uses the same layout, and slide changes show no animation.
- AC-105: After /slideshow has finished loading, with the network switched off, every slide, including every slide image, still shows.
- AC-106: The slide images listed under Slide images load on slides 2, 4 and B2 (no broken image), each with the alt text listed.
- AC-107: /slideshow is generated at build time. Its title is "Slideshow — Leon Wu", and it has a description meta tag, Open Graph and Twitter card tags, and the canonical URL https://www.leon-wu.com/slideshow with no parameters. Every other route still builds and renders.
```

### 2.9 Section 5, Content Model: Record 4 gains three lines (after `links: []`)

```
featureImage: the three-screen image in section 4.6 (file name and location are the Tech Lead's call, under the projectday- prefix)
featureImageAlt: "Three ProjectDay screens in Traditional Chinese. Home shows saved gyms, a target route and new beta videos. Gyms lists climbing gyms with search and city filters. A route screen shows a V0 route at CORNER gym with its photo, send and attempt counts, and a Log climb button."
featureImageCaption: "ProjectDay's interface is in Traditional Chinese, for climbers in Taiwan."
```

### 2.10 Section 6, Routing table: add one row after /contact

```
| /slideshow | Slideshow (full-screen interview deck) |
```

### 2.11 Section 6, Keyboard Shortcuts

`Number keys `1`–`6` navigate to the corresponding nav item.` becomes:
```
Number keys `1`–`7` navigate to the corresponding nav item (`7` opens the slideshow, section 4.11).
```
Add a third bullet to the "Suppressed when" list:
```
- The slideshow is open
```

### 2.12 Section 7, Assets Needed

Confirmed table, add:
```
| ProjectDay screenshots | `asset/screenshots/projectday/` (five 1206x2622 iPhone screenshots; four are used, see section 4.6) |
| Interview deck copy | `asset/content/interview-deck.md` |
```
Still needed, non-blocking table: remove the row "ProjectDay feature image / screenshots".

### 2.13 Section 8, Out of Scope: add two bullets

```
- **Slideshow extras:** No presenter view, no speaker notes on screen, no PDF export or print layout, no slide editing in the browser, no slide number in the URL, no autoplay, and no installable offline copy (the deck works offline only after it has loaded).
- **Image overlay extras:** No zoom or pan controls inside the overlay, and no next or previous between images.
```

---

## 3. Proposed status.md entries (written only on approval)

PM Updates, appended at the end of the section:
```
- 2026-11-01 [SUBSTANTIVE] [ARCHITECTURAL] Add the full-screen interview Slideshow (new MOD-012, /slideshow, nav item 7), an image overlay for every project page image (MOD-003), and the ProjectDay screenshots (MOD-011); PRD rev 1.7
  Approved by Leon in the coordinator session: "<quote>"
  Proposal: project-planning/pm-proposals/2026-11-01-slideshow-lightbox-projectday-images.md
  Answers applied: <Q4 to Q19, one line each, in Leon's words>
  Sections changed: header, ToC, 1 (goal 5), 2 (shortcuts 1–7), 3 (nav row 7, AC-093, AC-094), 4.2 (image overlay, AC-108 to AC-110), 4.6 (feature image + caption, Images section, AC-084 and AC-089 changed, AC-111, AC-112), new 4.11 Slideshow (AC-095 to AC-107), 5 (Record 4 featureImage, featureImageAlt, featureImageCaption), 6 (routing row, keyboard shortcuts), 7 (assets), 8 (out of scope).
  Modules affected: MOD-001 (nav item 7, key 7, number keys ignored while the slideshow is open; AC-093, AC-094), MOD-003 (image overlay in the shared template; AC-108 to AC-110; Images-section height for portrait screenshots per AC-111 if the template needs it), MOD-011 (record fields, Images section, image files; AC-084, AC-089, AC-111, AC-112), new MOD-012 (AC-095 to AC-107). MOD-005 and MOD-006: no AC changes; their images are used on slides 4 and 2, so renaming them breaks MOD-012.
  New module: MOD-012 Interview Slideshow, directory mod-slideshow, Source Path site/app/slideshow/. Depends on MOD-001 (nav entry and shortcut), MOD-005 (diagram), MOD-006 (tabvault-home.png), MOD-011 (three-screen image).
  Phase: <per Q5>.
  Notes for Doc-Sync: the deck copy is word for word from asset/content/interview-deck.md as of <commit after the Q6 edits, or be6fb46 if Q6 is "no">; the ProjectDay Images heading is a PRD-level section like SitePlus+ and TabVault, not in the source file (CONV-003 still holds for every paragraph).
  Notes for Tech Lead (change review): see section 5 of the proposal.
```

Module Map, new row:
```
| MOD-012 | mod-slideshow              | Interview Slideshow                  | site/app/slideshow/ |
```

Directory to create: `project-planning/modules/mod-slideshow/.gitkeep`.

Current Phase: stays "Phase 4 — Deploy" (both answers to question 5 keep it until the Phase 4 checkpoint).

---

## 4. Classification

- Trivial or substantive: **[SUBSTANTIVE]**. The change adds a module, a route, a nav item and new behaviour on every project page.
- Architectural: I recommend **[ARCHITECTURAL]**. It adds a module that has to take over the whole screen from the site shell, which crosses the MOD-001 / MOD-012 boundary. It also depends on browser behaviour (full screen, Esc) and on a URL parameter on a statically generated route, and it adds shared behaviour to MOD-003's template. The coordinator runs `/pstack:how` on the shell layout, the Sidebar shortcut listener and `[slug]/page.tsx`, then the Tech Lead runs a change review, then Doc-Sync.

---

## 5. Notes for the Tech Lead (change review). These are questions for you, not decisions.

1. **Full screen needs a user gesture.** Selecting the nav item or pressing `7` counts as one, and so does pressing `F`. A direct visit or a reload does not, so AC-096 falls back to filling the window. iPhone Safari has no element full screen (AC-095).
2. **In full screen the browser takes the first Esc.** It leaves full screen and usually does not pass the key to the page. AC-099 treats leaving full screen as leaving the slideshow, so one Esc is enough. Please confirm this works in Chrome, Safari and Firefox, and that `F` only enters full screen and never leaves it (if it did, it would close the slideshow).
3. **The shell renders the sidebar on every route.** The slideshow must hide it (AC-095), and the global `1`–`7` listener in the MOD-001 Sidebar must ignore keys while the slideshow is open (AC-094). Please decide how the MOD-001 / MOD-012 boundary works, and which module does which part.
4. **`role` and `company` on a route that must be built at build time (AC-107).** Please decide how the parameters are read without making /slideshow server-rendered.
5. **Offline after load (AC-105).** The three slide images must be loaded when the slideshow opens, not when their slide is shown.
6. **Overlay ownership.** Under CONV-001 the overlay is MOD-003's, because it lives in the shared template. If you want its code in a new file outside `site/app/projects/` (for example `site/components/`), tell PM, and PM adds that path to MOD-003's Source Path.
7. **AC-111 and portrait screenshots.** If the current Images grid cannot keep a 1206x2622 screenshot at 640px or less at 1280x800, that is a MOD-003 template change. Please check whether it also affects TabVault's `tabvault-mobile.jpeg`, which must not change.
8. **Images used across modules.** Slides 2, 4 and B2 use assets owned by MOD-006, MOD-005 and MOD-011. MOD-012 only links to them. Please confirm this needs no ownership change.
9. **Who makes the three-screen image (section 4.6),** and its file name under `site/public/projectday-*`. Slide B2 reuses it.

---

## 6. Order of runs after approval

Leon can do the two open sign-offs at any point. They are his browser checks: AC-017 with the script in `modules/mod-home/status.md`, and AC-091 at 375px with the script in `modules/mod-project-multi-agent/status.md`.

If question 5 = join Phase 4 (recommended):
1. The coordinator commits any approved `interview-deck.md` edits (question 6) as a `human:` commit, then runs the PM apply pass with Leon's quote.
2. The coordinator runs `/pstack:how` (shell layout, Sidebar key listener, `[slug]/page.tsx`), saves the output to `project-planning/pstack-findings/`, then runs `claude --agent tech-lead "change review"`.
3. `claude --agent doc-sync`.
4. Engineers in the order the Tech Lead sets (expected: MOD-011 and MOD-003, then MOD-001, then MOD-012 `implement`), each followed by its QA.
5. The phase-end integration review (`/pstack:thermos`, then `claude --agent tech-lead "phase-end integration review"`), then `claude --agent pm "checkpoint"`. This is the final checkpoint and produces the README.

If question 5 = a new Phase 5: steps 1 to 3 are the same, so that Doc-Sync adds Phase 5 to the Phase Plan before the Phase 4 checkpoint. Then the Phase 4 integration review and checkpoint run (no README yet), then step 4, then a Phase 5 integration review and the final checkpoint with the README. This costs one more integration review and one more checkpoint. In return you get a `checkpoint-4` git tag to roll back to before the new features.

---

## 7. Numbered questions for Leon

1. Do you approve the PRD change in section 2 and the status.md entries in section 3, with your answers below filled in? Approval must be explicit.
2. Is this change trivial or substantive? Recommendation: **substantive**.
3. Is it architectural, meaning it changes how the site is built (module boundaries, the shell, browser integrations)? Recommendation: **yes**. That adds `/pstack:how` and a Tech Lead change review before Doc-Sync (section 4).
4. You wrote the tab name as "Sliswshow". Should the label be "Slideshow"? Recommendation: **"Slideshow"**.
5. Should this work join the current Phase 4, or come after it as a new Phase 5? Recommendation: **join Phase 4**. That means one integration review and one final checkpoint for everything, the same as the ProjectDay decision earlier today. Pick Phase 5 if you want a rollback tag on the site as it is now before the new features land (section 6).
6. Should these edits go into `asset/content/interview-deck.md` before Doc-Sync? They bring slides to about 50 words each and fix two facts. The text cut from slides moves into the speaker notes. Recommendation: **yes, all of them**.
   - Slide 1, third proof point: "**3.9 GPA**, MS in Computer Science at Northeastern, after 4 years in industry, 2 as a front-end developer"
   - Slide 5, body:
     - "**Least privilege:** each agent sees only its own files and spec."
     - "**Trade-off:** Doc-Sync carries context forward. One more step, but each agent stays small enough to trust."
     - "**Safety net:** every handoff is a git commit, so any step can be rolled back."
     - The speaker notes gain: "An Engineer never sees the full requirements, only its module spec. A scope check runs three times on every change."
   - Slide 6, body: "Early QA runs passed code on reading alone. Now backend QA must hit a real running server, and UI checks a machine can't judge go to a person as a test script." The speaker notes gain: "Nothing passes unless someone exercised it in the running app."
   - Slide 7, first number: "**2** products shipped: TabVault (live on AWS) and ProjectDay (iOS, submitted to the App Store)"
   - Slide 8, body:
     - "**Lesson:** most of my iterations went into boundaries and handoffs, not prompts."
     - "**Next:** measure handoff success and time to ship, instead of judging by feel."
     - "**For you:** clear specs, small reviewable changes and honest testing."
     - The speaker notes gain: "I'm used to clear specs, small reviewable changes and honest testing, the same habits your team relies on."
   - Slide 2, Visual line: "TabVault home screenshot (`tabvault-home.png`)" (question 7).
   - Slide B2, Visual line: "The ProjectDay three-screen image (Home, Gyms, Route)."
   - Also confirm that every number in the deck is one you can defend in an interview: ~60%, 3.9, 1,500+ commits, 217 acceptance criteria, 88 integration-review items, 18 proposals. They match your case-study files.
7. Slide 2 offers "tab-vault.com screenshot or the horizontal workflow diagram". Which one? Recommendation: **the TabVault screenshot**. Slide 4 already shows the diagram full width, and slide 2 is stronger with a real product on screen.
8. Should the backup slides B1 to B3 come after slide 9 in the same run, labelled "Backup 1 / 3" and so on, so that you reach them with Space or End then Space? Or should they be hidden behind a separate key? Recommendation: **after slide 9, as written**. It is the simplest, and you stop on "Thank you" until a question comes.
9. Where should Esc go "back to the website"? Recommendation: **the page you opened the slideshow from, or Home after a direct visit**. One Esc press does it even in full screen, and the close button in a corner does the same.
10. On phones and for mouse users: tap or click the right half for next and the left half for previous, swipe for next and previous, a close button, and slides kept as a 16:9 frame (small in portrait, full size in landscape). Do you approve this? Recommendation: **yes, as written in section 4.11**.
11. Should the slideshow follow the site's light or dark theme, change slides instantly, and show a small "3 / 9" counter? Recommendation: **yes to all three**. Tip: switch to the light theme before presenting on a projector in a bright room.
12. Offline: should the deck keep working with the network off once it has loaded, while an installable offline copy, a PDF export and a presenter view (speaker notes on a second screen) stay out of scope? Recommendation: **yes**. Before an interview, open /slideshow once while you are online.
13. Should the URL be able to tailor the intro line (`/slideshow?role=...&company=...`), with plain text only and a 60-character limit per value? Recommendation: **yes, as written**. Anyone could make a link that shows other text on your page, which is why the limit and plain text matter.
14. Which images should open in the overlay? (a) only the multi-agent diagram, (b) every project's feature image, or (c) every image on every project page (feature images and Images sections). Recommendation: **(c)**. It is one rule in one shared template, and the phone screenshots are where enlarging helps most.
15. Overlay behaviour: should a click anywhere close it, including on the image itself? And should the coordinator's suggestions apply: Esc closes it, focus moves into the overlay and back out, the page does not scroll behind it, plus a visible close button? Recommendation: **yes to all, as written in AC-108 to AC-110**. If your recording shows something else (for example, clicking the image does not close it), tell me and I will change AC-109.
16. ProjectDay images: should the feature image be one wide image with Home, Gyms and Route side by side, followed by an Images section with Route beta and Profile? Recommendation: **yes**. A single phone screenshot in the feature slot would be about 1,900px tall on a laptop. Slide B2 reuses the same wide image, and SitePlus+ and TabVault use the same feature-plus-Images pattern.
17. Can the screenshots be published as they are? The Route beta thumbnail shows a climber, and a small blurred strip of it also shows at the bottom of the Route screenshot. The Home screen shows your own avatar ("Leon Wu") and one called "Pro". Gym photos appear in the Home and Gyms lists. Recommendation: **publish projectday-route-beta.png only if the climber is you or has agreed to it**. If not, leave it out, and the Images section shows Profile alone. Please say which applies. Everything else is your call too. Say if you want an avatar or photo blurred.
18. Should the feature image carry the caption "ProjectDay's interface is in Traditional Chinese, for climbers in Taiwan.", and do you approve the alt texts in sections 2.7 and 2.9? Recommendation: **yes**. English-speaking recruiters see a Chinese UI, and the caption explains why.
19. Do you approve the module name "Interview Slideshow", the directory `mod-slideshow`, and the source path `site/app/slideshow/` for MOD-012? Recommendation: **yes**.
