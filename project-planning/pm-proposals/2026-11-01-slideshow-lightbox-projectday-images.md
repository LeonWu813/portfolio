Status: pending

# PM proposal: interview Slideshow (menu and project tracks), image overlay, ProjectDay screenshots, Experience page per the CV, TabVault no longer live

- Date: 2026-11-01
- Mode: change (proposal pass, nothing applied)
- Proposal version: 2. It replaces version 1 of this file (commit 1031ec0) in place, so the AC IDs and the revision number stay the same. Version 1 is in git history.
- Requested by Leon on 2026-11-01, verbatim:
  1. "Please view this guide line, review this suggestion, look for best practice and make a presentation for me to use in the interview that can make me impress by all of the interviwee when applying for engineering intern or junior jobs. Make a nother tab under the sidebar Contact "Sliswshow" when click on it the website would be come a fullscreen slideshow and user can click "space" or up down to control the slide, esc to go back to the website"
  2. "Regarding of the ProjectDay image i put them in the @~/Downloads/Simulator Screenshot - iPhone 17 Pro - 2026-10-29 at 02.15.29.png there are five of them please check"
  3. "For the first image in the multi-agent page please make it clickable and interact like this [screen recording] when click on it, it will creat a overlay and the image would be in the senter until the user click on the overlay then it will close"
  4. After version 1, in order:
     - "ProjectDay screenshots is demo data so fine to go online" and "Clickable diagram ok, look for some best practices, the video I record was using Notion.io as sample"
     - "I think i will put them all in slide and add a project page with the link guide to the start of that project slide, and in different interview IU can decide which one to share and click on it. Does this make sence", then "yes go ahead" (to the coordinator's plan: a project menu with cards, keys 1-4, M back to the menu, an optional ?project= start link, three new project tracks drafted from the case studies, TabVault shorter)
     - "General - At the end of the project put the project list again and remove the Thank you slide - Concise the title and make the content more for slides, please look for the best practice of creating a slide content for this revise. Introduction - Remove the three number format in the first page and change it to introduce myself as well as some of my titles. Also remove the applying for Software Engineering Intern roles line - Add a page of my professional and edication history timeline - Add a page of my life recently: based in seattle and hobbies are snowboarding and bouldering. Projects - Add the three number slide on start of each project - Brief intro of project on second page - Add the role and techstack in the third page. Multiagent System - Three number: 3 product ships; 6 agent developteam; ? skills created - introduction: simplified the workflow to fit the slide. Question is this the final design for the slide mode or is is just the content review?"
     - "three facts: 1. yes 2. yes 3. make the Experience page align with the cv, cv is the correct one. General - Remove the shown tag. Intro - remove the avatar and the GPA - make the two work experience each have one page hidden only show if I click on the expeience card, and the next page of these two hidden page would be back to this experience page. SitePlus+ - Three number: ,~60%; 3+ month used in real live; 10+ report generated. TabVault - This is not live(also change the content of the website if needed) - Three numbers: remove the three number for this one"
- Inputs read: `project-planning/prd.md` (Revision 1.6), `project-planning/status.md`, the module status files for mod-experience, mod-project-tabvault, mod-project-multi-agent, mod-home and mod-site-shell, `asset/content/interview-deck.md` (commit 4c7e58e), `asset/content/interview-deck-preview.html` (commit 8f6568d), `asset/content/experience.md`, `asset/content/case-study-tabvault-detailed.md`, `asset/content/case-study-multi-agent-detailed.md`, `asset/content/site-copy.md` (all at 4c7e58e), `asset/content/case-study-projectday-detailed.md`, `asset/Leon_cv.pdf`, `asset/screenshots/projectday/*.png` (be6fb46), and the two Seattle photos in `site/public/` (viewed only to write their alt text).
- Proposed PRD revision: 1.6 -> 1.7
- Proposed new IDs: MOD-012; AC-093 to AC-100 and AC-102 to AC-119. AC-101 (the URL-tailored intro line in version 1) is dropped because the "Applying for" line is gone. The gap stays; the number is not reused. No other proposal is pending (the three earlier files are `applied`), so no other file reserves numbers.

---

## 1. Things to know first

1. **Two human sign-offs are still open in Phase 4:** MOD-002 AC-017 (Home above the fold at laptop size) and MOD-005 AC-091 (the diagram at 375px). Both are browser checks Leon does himself, with scripts in `modules/mod-home/status.md` and `modules/mod-project-multi-agent/status.md`. This change does not touch the Home page. The overlay must not change the diagram's size or position in the page (AC-110), so both checks can be done now, while this change goes through review.
2. **The Phase 4 integration review has not run yet.** Question 5 decides whether this work joins Phase 4 or becomes a Phase 5. Section 6 lists the order of runs for both answers.
3. **The MOD-007 (Experience) spec has not been synced since PRD 1.2, and the live page differs from both the PRD and the CV.** The coordinator reports the live page shows Jun 2025, "Growth Marketer / Marketing Project Manager", the old bullets and Sep 2025. The PRD 4.7 text below replaces the whole entries list with the CV version, and two new ACs (AC-118, AC-119) replace the old spec's content ACs. Doc-Sync should rebuild the MOD-007 spec against PRD 4.7 as a whole, not patch it line by line.
4. **The CV still says TabVault is live.** `asset/Leon_cv.pdf`, which the site serves as `/Leon_cv.pdf`, has the line "Built by the system: tab-vault.com" under the multi-agent project. Once this change ships, the site says TabVault is offline, but the downloadable CV still links to it. The CV is Leon's file, so this change does not touch it. Question 19 asks whether to fix it.
5. **One case-study paragraph still says "two real products".** The multi-agent "My role" paragraph says Leon hardened the system by "running five end-to-end simulations and two real products through the system". The Impact paragraph and the deck now say it shipped three products. The page shows source paragraphs word for word (CONV-003), so only an edit to the source file changes it (question 18).
6. **Two deck numbers to check before an interviewer does (question 20).** A1 says "6 skills created", where Leon's note had "?". The speaker notes name six skills, and that list matches the case study. B1 says "13 gyms in Taipei", while the ProjectDay case study says "13 gyms in Taipei and New Taipei".
7. **The preview's text sizes are a little under the guide.** In the preview, bullets are 38px on a 900px-tall frame, about 23pt on a standard slide, just under the guide's 24pt. Card descriptions, timeline details, stack chips and the menu footer are smaller (22 to 30px). AC-102 sets the minimum sizes to match the preview, so that the preview can be the design reference (question 6). If Leon wants the 24pt minimum instead, the layouts need a little more room.
8. **Image weight.** The bouldering photo is 0.8 MB (2480x3307) and the snowboarding photo 0.4 MB. `tabvault-home.png` is 0.47 MB. The slideshow preloads every slide image so that it works offline (AC-105), so AC-106 caps everything /slideshow loads at 2 MB of images. That cap means the bouldering photo needs a smaller copy. How it is made and where it lives is the Tech Lead's call.
9. **The screenshots are fine to publish.** Leon: "ProjectDay screenshots is demo data so fine to go online". So `projectday-route-beta.png` is published without a condition, and the earlier fallback (Images section with Profile only) is gone.
10. **This project has no project-level `CLAUDE.md`.** The coordinator works from the global fallback. That is not part of this change. My `next:` line uses the pstack step from the global rule (`/pstack:how` before an architectural Tech Lead review).
11. **Separate from this change:** `asset/og-image.png` is still uncommitted, and decision E3 (OG image) stays open until Leon approves a file.

---

## 2. Proposed PRD change (verbatim text to write; `project-planning/prd.md` at Revision 1.7)

Only the parts listed below change. Everything else stays word for word. The text assumes the recommended answers to the questions in section 7. If an answer differs, the apply pass changes only the affected lines.

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
- AC-094: Pressing `7` (no modifier key, focus not in an input, textarea or contenteditable element) opens the slideshow exactly as selecting the Slideshow item does. While the slideshow is open, the number keys `1`–`7` never navigate the site; they only do what section 4.11 lists.
```

### 2.6 Section 4.2, Projects (Split Panel): add at the end of the section

```
**Image overlay (every project page):** On every /projects/<slug> page, the feature image and every image in an Images section open in an overlay when clicked, tapped, or activated from the keyboard. The image grows from its place on the page to the center of the screen over a dimmed page, shown as large as fits in about 90% of the screen without cropping, and shrinks back to its place when the overlay closes. A click or tap anywhere, Esc, or the phone's Back closes it. The behaviour follows Notion's image zoom, which Leon recorded as the sample on 2026-11-01. Leon asked for it on the multi-agent diagram; it applies to every project image so that all of them behave the same way.

**Acceptance criteria (added in revision 1.7):**
- AC-108: On every /projects/<slug> page, the feature image and each image in an Images section show a zoom-in pointer on hover, can be reached with Tab, and open with Enter or Space as well as with a click or tap. Opening dims the whole page, including the sidebar, and shows the image centered, scaled to fit within 90% of the viewport's width and height, without cropping or distortion, with a zoom-out pointer over the overlay. On /projects/multi-agent-system at 1280x800, the diagram in the overlay is wider than it is in the page.
- AC-109: The overlay closes on a click or tap anywhere in it, including on the image, and on Esc. On a phone, the browser's Back button or Back gesture closes the overlay and the visitor stays on the same page. While the overlay is open, keyboard focus is inside it, Tab does not reach the page behind it, the page behind it does not scroll, and screen readers announce a dialog named by the image's alt text. When it closes, focus returns to the image that opened it.
- AC-110: Opening, the image grows from its position in the page to the center, and closing, it shrinks back, each in at most 300ms. When the visitor's system is set to reduce motion, the overlay only fades in and out instead. Opening and closing the overlay shifts no other element on the page and does not change the image's size or position in the page, and AC-089 and AC-091 still pass at 1280px and 375px wide.
```

### 2.7 Section 4.4, Project Detail: Multi-Agent Software Development System

Header table: the `At-a-glance` row and the three link rows become:
```
| At-a-glance | Sole architect · 6 specialized agents + coordinator · Human-approved at every handoff · Shipped 3 products: TabVault, ProjectDay and this site |
| Link 1 | "GitHub: " followed by the linked label "System repo" — https://github.com/LeonWu813/multi-agent-software-development-system |
| Link 2 | "GitHub: " followed by the linked label "TabVault repo" — https://github.com/LeonWu813/tab-management |
```

`**Body copy:**` paragraph becomes:
```
**Body copy:** Section paragraphs match `asset/content/case-study-multi-agent-detailed.md` as of revision 1.7 (6 agents plus a coordinator, PM two-pass approval, scope check, pstack reviews, integration review, repeat-failure escalation, and an Impact section covering three shipped products: TabVault, now offline; ProjectDay; and this site).
```

AC-092 becomes:
```
- AC-092: The At-a-glance line, tags, two links, description pull-quote, and every section paragraph on /projects/multi-agent-system match this section and the source file word for word. Each link shows its plain-text prefix followed by the linked label, as in the header table, and only the label is a link. No link to tab-vault.com appears on the page. The editor's line "Feature image: ..." from the source file does not appear on the page. (Changed in revision 1.7: TabVault is offline, so the "Built by the system: tab-vault.com" link is removed.)
```

### 2.8 Section 4.5, Project Detail: TabVault

Header table: the `At-a-glance` row and the two link rows become:
```
| At-a-glance | Orchestrator + reviewer · 3 clients (Chrome MV3, React PWA, Spring Boot API) · Built by my multi-agent system · Deployed to AWS ECS Fargate (now offline) |
| Link 1 | "GitHub: " followed by the linked label "tab-management" — https://github.com/LeonWu813/tab-management |
```

Add after the sentence "Each link shows its plain-text prefix followed by the linked label; only the label is a link.":
```
TabVault is not live. It was deployed to production on AWS and is offline now, so the page has no live link, and no copy on it says TabVault is live.

**Acceptance criteria (added in revision 1.7):**
- AC-116: On /projects/tabvault, the At-a-glance line reads exactly as in the header table, exactly one external link renders ("GitHub: " followed by the linked label "tab-management"), and the paragraphs of "The problem" and "Impact" match the source file word for word (they say TabVault was deployed and is offline now).
- AC-117: In the built HTML of every route, including /slideshow, no link points to tab-vault.com, the text "tab-vault.com" does not appear, and no copy says TabVault is live.
```

### 2.9 Section 4.6, Project Detail: ProjectDay

Header table: the `Feature image` row becomes these two rows:
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
The Images section shows two screenshots from `asset/screenshots/projectday/`, in this order, and has no paragraphs. Its heading is not in the source file, as on SitePlus+ and TabVault. The screenshots show demo data and are cleared for publishing (Leon, 2026-11-01).

| Screenshot | Alt text |
|---|---|
| `projectday-route-beta.png` | ProjectDay route screen scrolled to the Beta videos section, showing the thumbnail of a climber's beta video for a V0 route. |
| `projectday-profile.png` | ProjectDay profile screen with climbing stats: top grade V10, 10 sends, 9 climbing days, and a bar chart of sends per grade. |
```

Acceptance criteria: replace AC-084 and AC-089 with the text below, and add AC-111 and AC-112 after AC-090:
```
- AC-084: Seven sections render in the order listed, with exactly those headings. Every paragraph matches the source file word for word. The Images section has no paragraphs. The editor's notes "(confirm it is live before publishing)" and "Suggested listing fields: ..." do not appear anywhere on the page.
- AC-089: The feature image is the three-screen image described in the header table (Home, Gyms, Route, left to right), with Record 4's `featureImageAlt` as alt text. It shows whole, with no cropping, across the content column on desktop (1280px wide) and mobile (375px wide), and Record 4's `featureImageCaption` appears directly below it.
- AC-111: The Images section shows the screenshots listed in the table above, in that order, each whole with no cropping and with its alt text from the table. At 1280x800 no screenshot is taller than 640px; at 375px wide each fits the column width.
- AC-112: Every ProjectDay image file the page loads is at most 300 KB. Each single screenshot is at least 1000 pixels tall, and the three-screen image is at least 1500 pixels wide, so they stay sharp at the size the image overlay shows them (AC-108).
```

### 2.10 Section 4.7, Experience

Replace everything from `**Entries (reverse-chronological):**` to the end of the Education table with:
```
**Source file:** `asset/content/experience.md`. It was aligned with Leon's CV (`asset/Leon_cv.pdf`) on 2026-11-01; the CV is the source of truth for titles, dates and bullets.

**Entries (reverse-chronological):**

**Role 1: Front-End Developer**
- Company: Exascend
- Location: Taipei, Taiwan
- Dates: Sep 2023 – Aug 2025
- Tags: JavaScript · HTML · CSS · GA4 · SEO · Lighthouse · WCAG
- Bullets:
  - Built a custom JavaScript event-tracking system posting structured user interactions to CRM and GA4 APIs, cutting manual reporting 70%.
  - Led end-to-end development of two customer-facing websites from scratch (HTML, CSS, JavaScript), translating product requirements into technical implementations and growing monthly active users by 350%.
  - Ran technical SEO and accessibility audits (Google Search Console, Lighthouse, WCAG) with improvements validated via A/B testing, increasing page views 48.8% while ensuring inclusive, accessible experiences.

**Role 2: Marketing Project Manager**
- Company: GoFreight
- Location: Taipei, Taiwan
- Dates: Jul 2021 – Mar 2023
- Tags: HTML · CSS · JavaScript · A/B Testing · Event Tracking · Project Management
- Bullets:
  - Built and maintained a front-end codebase (HTML, CSS, JavaScript) with an A/B testing pipeline using variant logic and event tracking, driving a 670% conversion-rate improvement through iterative experimentation.
  - Led cross-functional teams for a product launch, coordinating tracking integrations and a cross-channel strategy that generated $16.5K in MRR.

**Education section** (same timeline visual, at the bottom of the page):

| Degree | Institution | GPA | Period | Location |
|---|---|---|---|---|
| Master of Science in Computer Science | Northeastern University | 3.9 / 4.0 | Jul 2025 – Dec 2027 (Expected) | Seattle, WA |
| Bachelor of International Business | National Chengchi University | 3.5 / 4.0 | Sep 2017 – Jun 2021 | Taipei, Taiwan |

**Acceptance criteria (added in revision 1.7):**
- AC-118: /experience shows Exascend first and GoFreight second. Each role's title, company, location, dates, every bullet and every tag chip match this section word for word, in the order listed. No other bullet or chip appears; in particular none of the earlier copy shows ("Growth Marketer", "22.3%", "0.38% to 2.55%", "Baidu Ads", "JCTrans").
- AC-119: The Education section shows the two entries in the table above, in that order, with degree, institution, GPA, period and location word for word.
```

### 2.11 New section 4.11, Slideshow (inserted after 4.10 Contact)

```
### 4.11 Slideshow

**Route:** /slideshow

**Source file:** `asset/content/interview-deck.md`

**Design reference:** `asset/content/interview-deck-preview.html`, a clickable preview Leon approved as the layout reference for every slide type: the 16:9 frame, the placement and relative sizes of titles, lists, big numbers, timeline, photos, menu cards, role and stack, and the position marker. It is not site code. Its image paths, its help box, its H and T keys, its Esc message, and the "Project" label above project names are preview-only and are not built.

**Purpose:** A full-screen presentation Leon runs from his own site in interviews for engineering intern and junior roles. Three slides about Leon lead to a menu of four projects. Leon picks the project that fits the interview. After that project, the menu comes back, so he can show another one or stop.

**Slides:**
- About me: 1 Hi, I'm Leon; 2 Timeline; 3 Life in Seattle.
- Hidden job slides: 2a Exascend, 2b GoFreight, reached only from slide 2 (see Hidden job slides).
- Menu: 4 Project menu.
- Project tracks, in this order on the menu: A Multi-Agent System (A1 to A7), B ProjectDay (B1 to B7), C SitePlus+ (C1 to C7), D TabVault (D1 to D4).

Slide labels in the source file (such as "A3: Role and stack") do not show on screen.

**On-screen text:** Every slide shows its Title and the copy fields under it in the source file (Titles, Timeline, Subtitle, Big numbers, Cards, Footer, Bullets, Role, Stack, Captions) word for word. Text may wrap or be split across lines (for example, a timeline entry's dates, role and place on separate lines), but words, numbers and punctuation do not change. Speaker notes, editor's notes, slide labels and "Visual:" lines never show. Two slides draw a small diagram from text, defined here:
- A2: one row of boxes reading "Requirements", "PM", "Doc-Sync", "Engineer ⇄ QA", "Tech Lead", "Shipped", joined by arrows; under it the line "Retrospective feeds improvements back into the system"; under that a bar reading "I approve every handoff".
- B5: one row of chips reading "Upload", "S3", "MediaConvert", "CloudFront", joined by arrows, above the bullets.

The only other text on screen: the "Details" cue and key on the two work cards of slide 2, the key number on each menu card, the project name and position on project slides (see Look), the menu hint (see Menu), and the full-screen hint (see Opening).

**Slide images:**

| Slide | Image | Alt text |
|---|---|---|
| 3 | Snowboarding photo (`site/public/IMG_6875.JPG`, or a smaller copy), caption "Snowboarding" | Leon on a snowboard on a snowy slope, giving a peace sign, with forested mountains behind. |
| 3 | Bouldering photo (`site/public/4D0BDA8A-B273-40DC-BD3D-3098AF6BBB73.JPG`, or a smaller copy), caption "Bouldering" | Leon on an indoor bouldering wall, reaching for orange holds. |
| B2 | The ProjectDay three-screen image (MOD-011 asset, section 4.6) | Record 4's `featureImageAlt` |
| C2 | `/siteplusplus-home.jpg` (MOD-004 asset) | Screenshot of the SitePlus+ home dashboard. |
| C4 | `/siteplusplus-reports.jpeg` (MOD-004 asset) | Screenshot of the SitePlus+ reports page. |
| D1 | `/tabvault-home.png` (MOD-006 asset) | Screenshot of the TabVault web app home screen. |

**Hidden job slides:** On slide 2, the two work cards (GoFreight, Exascend) each show the cue "Details" and a key: 1 for GoFreight, 2 for Exascend. A click or tap on a card, Enter or Space on a focused card, or its key on slide 2 opens that job's slide. On a job slide, Next or Previous (any control) returns to slide 2. Next and Previous never reach a job slide from any other slide.

**Menu:**
- The title reads "Pick a project" until a project has been finished (Next on its last slide) or left with M; from then on it reads "Pick another project".
- Four cards, in the order listed under Slides, each with its key number (1 to 4), name and one line from the source file. A click or tap on a card, Enter or Space on a focused card, or its number key starts that project at its first slide. The footer line shows as plain text, not as links.
- Next on the menu starts the project pre-selected by a start link, if there is one and it has not been shown yet. Otherwise Next shows the hint "Pick a project: press 1 to 4 or click a card" for about 2 seconds and stays on the menu. Previous on the menu goes to slide 3.
- From a project: Next on its last slide, Previous on its first slide, or M on any slide returns to the menu.

**Start link:** `/slideshow?project=<name>`, where `<name>` is `multi-agent`, `projectday`, `siteplus` or `tabvault`, still opens on slide 1. On the menu, that project's card is highlighted, and Next starts it. Any other value is ignored.

**Opening:** Selecting the Slideshow nav item or pressing `7` puts the browser in full screen, where the browser supports it, and shows slide 1. Where full screen is not available (for example on iPhone), the slideshow fills the browser window instead. A direct visit to /slideshow (a typed or shared link, a start link, or a reload) fills the browser window and shows the hint "Press F for full screen" until the first key press, click or tap. Pressing `F` enters full screen.

**Controls:**
- Next slide: Space, Right arrow, Down arrow, Page Down, Enter (when focus is not on a card); a click or tap on the right half of the screen; a swipe left or up.
- Previous slide: Shift+Space, Left arrow, Up arrow, Page Up; a click or tap on the left half of the screen; a swipe right or down.
- A click or tap on a menu card or a slide-2 work card opens it instead of moving to the next or previous slide.
- Number keys: on slide 2, `1` and `2` open the job slides; on the menu, `1` to `4` start the projects; on every other slide they do nothing.
- M goes to the menu from any slide. Home goes to slide 1. Previous on slide 1 does nothing.
- Leaving: Esc, or the close button in a corner of the screen, returns to the page the slideshow was opened from (Home after a direct visit). A single Esc press does this even in full screen. Leaving full screen any other way also returns to that page.

**Look:** Each slide is a 16:9 frame, scaled to the largest size that fits the screen, with a plain background around it. Layouts follow the design reference. The slideshow uses the site's palette and Roboto, and follows the site's current light or dark theme. Slides change instantly, with no animation. On project slides, the project name shows in one bottom corner and the position in the other (for example "ProjectDay" and "3 / 7"). The about, job and menu slides show no position.

**Acceptance criteria (added in revision 1.7):**
- AC-095: Selecting the Slideshow nav item or pressing `7` shows slide 1 with the browser in full screen in desktop Chrome, Safari and Firefox. On a browser without full-screen support (iPhone Safari), the slideshow fills the window. In both cases no sidebar, top bar or other site element is visible.
- AC-096: A direct visit to /slideshow, a start link, or a reload shows slide 1 filling the browser window, with the hint "Press F for full screen". The hint disappears after the first key press, click or tap. Pressing `F` enters full screen.
- AC-097: The keyboard controls listed under Controls work exactly as listed on the about, job, menu and project slides. From slide 1, Next goes to slide 2, slide 3, then the menu; inside a project it goes through that project's slides in the order of the source file, then back to the menu.
- AC-098: The click, tap and swipe controls listed under Controls work as listed on desktop (mouse) and on a 375px-wide phone, including opening menu cards and slide-2 work cards. The close button is visible on every slide and can be reached and pressed from the keyboard.
- AC-099: Esc or the close button returns to the page the slideshow was opened from, or to Home after a direct visit, with one Esc press, including while in full screen. Leaving full screen through the browser's own controls also returns to that page. Back on the site, the sidebar and keyboard shortcuts work as before.
- AC-100: Every slide's on-screen text matches `asset/content/interview-deck.md` word for word, as described under On-screen text, and the A2 and B5 diagrams read exactly as defined there. No speaker note, editor's note, slide label or "Visual:" line appears anywhere on /slideshow. There is no Thank-you slide, no "Shown" tag on menu cards, no avatar and no GPA. The copy contains no em dashes.
- AC-102: At 1280x720, 1920x1080, 1440x900 and 375x667 (portrait and landscape), every slide shows whole, with no scrolling and no clipped text. Slide titles are at least 7% of the slide frame's height, bullet, Titles and Role text at least 4.2%, and all other text at least 2.4%. All slide text meets WCAG AA contrast in both themes.
- AC-103: The project name and position show on project slides as described under Look, and on no other slide. Screen readers announce the new slide's title on every slide change, and its position on project slides.
- AC-104: The slideshow uses the site's palette in the active theme (light or dark) and Roboto, each slide type matches its layout in the design reference, and slide changes show no animation.
- AC-105: After /slideshow has finished loading, with the network switched off, every slide, including every slide image, still shows.
- AC-106: The slide images listed under Slide images load on their slides (no broken image), each with the alt text listed, and the captions "Snowboarding" and "Bouldering" show on slide 3. All the image files /slideshow loads together total at most 2 MB.
- AC-107: /slideshow is generated at build time. Its title is "Slideshow — Leon Wu", and it has a description meta tag, Open Graph and Twitter card tags, and the canonical URL https://www.leon-wu.com/slideshow with no parameters. Every other route still builds and renders.
- AC-113: The menu behaves as described under Menu: the title changes from "Pick a project" to "Pick another project" only as described, the four cards show in order with their key numbers, the footer line shows as plain text, Next with nothing pre-selected shows the hint and stays, and Previous goes to slide 3. Next on any project's last slide, Previous on its first slide, and M on any slide show the menu.
- AC-114: On slide 2, the GoFreight card (key `1`) and the Exascend card (key `2`) each open their own job slide by click, tap, focused Enter or Space, or key. Next or Previous on a job slide returns to slide 2, and no sequence of Next or Previous from any other slide reaches a job slide.
- AC-115: `/slideshow?project=projectday` opens on slide 1. On the menu the ProjectDay card is highlighted, and Next starts ProjectDay at B1. The same holds for `multi-agent`, `siteplus` and `tabvault`. Any other value, or no parameter, behaves as no start link.
```

### 2.12 Section 5, Content Model

Record 2: the `atAGlance`, `description` and `links` lines become:
```
atAGlance: "Sole architect · 6 specialized agents + coordinator · Human-approved at every handoff · Shipped 3 products: TabVault, ProjectDay and this site"
description: "A team of six AI agents, run by a coordinator session, that plan, build, and QA software through a human-approved workflow. It has shipped three products: TabVault, a full-stack web app deployed to AWS; ProjectDay, an iOS app submitted to the App Store; and this portfolio site."
links:
  - { name: "GitHub: ", label: "System repo", href: "https://github.com/LeonWu813/multi-agent-software-development-system" }
  - { name: "GitHub: ", label: "TabVault repo", href: "https://github.com/LeonWu813/tab-management" }
```

Record 3: the `atAGlance` and `links` lines become:
```
atAGlance: "Orchestrator + reviewer · 3 clients (Chrome MV3, React PWA, Spring Boot API) · Built by my multi-agent system · Deployed to AWS ECS Fargate (now offline)"
links:
  - { name: "GitHub: ", label: "tab-management", href: "https://github.com/LeonWu813/tab-management" }
```

Record 4: add three lines after `links: []`:
```
featureImage: the three-screen image in section 4.6 (file name and location are the Tech Lead's call, under the projectday- prefix)
featureImageAlt: "Three ProjectDay screens in Traditional Chinese. Home shows saved gyms, a target route and new beta videos. Gyms lists climbing gyms with search and city filters. A route screen shows a V0 route at CORNER gym with its photo, send and attempt counts, and a Log climb button."
featureImageCaption: "ProjectDay's interface is in Traditional Chinese, for climbers in Taiwan."
```

ExperienceEntry: the `tags` comment becomes:
```
  tags?: string[];      // optional tech/skill chips (both roles have them)
```

### 2.13 Section 6, Routing table: add one row after /contact

```
| /slideshow | Slideshow (full-screen interview deck) |
```

### 2.14 Section 6, Keyboard Shortcuts

`Number keys `1`–`6` navigate to the corresponding nav item.` becomes:
```
Number keys `1`–`7` navigate to the corresponding nav item (`7` opens the slideshow, section 4.11).
```
Add a third bullet to the "Suppressed when" list:
```
- The slideshow is open (inside it, keys work as listed in section 4.11)
```

### 2.15 Section 7, Assets Needed

Confirmed table, add:
```
| ProjectDay screenshots | `asset/screenshots/projectday/` (five 1206x2622 iPhone screenshots of demo data, cleared for publishing; all five are used, see section 4.6) |
| Interview deck copy | `asset/content/interview-deck.md` |
| Interview deck design reference | `asset/content/interview-deck-preview.html` (reference only, not site code) |
| Seattle photos for the slideshow | `site/public/IMG_6875.JPG` (snowboarding), `site/public/4D0BDA8A-B273-40DC-BD3D-3098AF6BBB73.JPG` (bouldering) |
```
Still needed, non-blocking table: remove the row "ProjectDay feature image / screenshots".

### 2.16 Section 8, Out of Scope: add two bullets

```
- **Slideshow extras:** No presenter view, no speaker notes on screen, no PDF export or print layout, no slide editing in the browser, no slide number in the URL, no autoplay, no theme switch inside the slideshow, no intro line tailored from the URL, no backup slides, no Thank-you slide, and no installable offline copy (the deck works offline only after it has loaded).
- **Image overlay extras:** No zoom or pan controls inside the overlay, no next or previous between images, and no larger image file than the page already shows.
```

---

## 3. Proposed status.md entries (written only on approval)

PM Updates, appended at the end of the section:
```
- 2026-11-01 [SUBSTANTIVE] [ARCHITECTURAL] Add the full-screen interview Slideshow with a project menu and four tracks (new MOD-012, /slideshow, nav item 7), an image overlay on every project image (MOD-003), the ProjectDay screenshots (MOD-011), the Experience page per the CV (MOD-007), and TabVault marked offline (MOD-005, MOD-006); PRD rev 1.7
  Approved by Leon in the coordinator session: "<quote>"
  Proposal: project-planning/pm-proposals/2026-11-01-slideshow-lightbox-projectday-images.md (version 2)
  Answers applied: <questions 2 to 20, one line each, in Leon's words>
  Sections changed: header, ToC, 1 (goal 5), 2 (shortcuts 1–7), 3 (nav row 7, AC-093, AC-094), 4.2 (image overlay, AC-108 to AC-110), 4.4 (At-a-glance, links, body copy note, AC-092 changed), 4.5 (At-a-glance, links, not-live note, AC-116, AC-117), 4.6 (feature image + caption, Images section, AC-084 and AC-089 changed, AC-111, AC-112), 4.7 (entries and education per the CV, AC-118, AC-119), new 4.11 Slideshow (AC-095 to AC-100, AC-102 to AC-107, AC-113 to AC-115; AC-101 not used), 5 (Records 2, 3 and 4, ExperienceEntry comment), 6 (routing row, keyboard shortcuts), 7 (assets), 8 (out of scope).
  Modules affected: MOD-001 (nav item 7, key 7, number keys ignored while the slideshow is open; AC-093, AC-094), MOD-003 (image overlay in the shared template; AC-108 to AC-110; Images-section height for portrait screenshots per AC-111 if the template needs it), MOD-005 (record: atAGlance, description, links; AC-092; AC-117), MOD-006 (record: atAGlance, links, paragraphs from the source file; AC-116, AC-117), MOD-007 (entries and education; AC-118, AC-119), MOD-011 (record fields, Images section, image files; AC-084, AC-089, AC-111, AC-112), new MOD-012 (AC-095 to AC-100, AC-102 to AC-107, AC-113 to AC-115, AC-117). MOD-004: no AC change; its two screenshots are used on slides C2 and C4, so renaming them breaks MOD-012. MOD-002 (Home): checked, shows no tab-vault.com link and no "live" claim for TabVault; no change.
  New module: MOD-012 Interview Slideshow, directory mod-slideshow, Source Path site/app/slideshow/ (plus any site/public/slideshow-* image copies, per the Tech Lead). Depends on MOD-001 (nav entry and shortcut), MOD-004 (SitePlus+ screenshots), MOD-006 (tabvault-home.png), MOD-011 (three-screen image), and mod-site-shell's Seattle photos in site/public/.
  Phase: <per question 5>.
  Notes for Doc-Sync: the deck copy is word for word from asset/content/interview-deck.md as of <commit after any question 18/20 edits, or 4c7e58e if none>; the design reference is asset/content/interview-deck-preview.html at 8f6568d. The MOD-007 spec was last synced at PRD 1.2: rebuild it against PRD 4.7 as a whole; AC-118 and AC-119 replace its old entry and education content ACs (labelled AC-055 and AC-056 in that spec). In the MOD-005 spec, the At-a-glance and links ACs (AC-042, AC-044) follow the new Record 2; in the MOD-006 spec, the At-a-glance and links ACs (AC-054, AC-056 in that spec) follow AC-116. The ProjectDay Images heading is a PRD-level section like SitePlus+ and TabVault, not in the source file (CONV-003 still holds for every paragraph).
  Notes for Tech Lead (change review): see section 5 of the proposal.
```

Module Map, new row:
```
| MOD-012 | mod-slideshow              | Interview Slideshow                  | site/app/slideshow/ |
```
(If the Tech Lead puts image copies under `site/public/slideshow-*`, PM adds that pattern to this row in a follow-up change.)

Directory to create: `project-planning/modules/mod-slideshow/.gitkeep`.

Current Phase: stays "Phase 4 — Deploy" (both answers to question 5 keep it until the Phase 4 checkpoint).

---

## 4. Classification

- Trivial or substantive: **[SUBSTANTIVE]**. The change adds a module, a route and a nav item, adds new behaviour on every project page, and changes content on four existing pages.
- Architectural: I recommend **[ARCHITECTURAL]**. The new module has to take over the whole screen from the site shell, which crosses the MOD-001 / MOD-012 boundary. It also depends on browser behaviour (full screen, Esc, Back), reads a URL parameter on a statically generated route, and adds shared behaviour to MOD-003's template. The coordinator runs `/pstack:how` on the shell layout, the Sidebar shortcut listener and `[slug]/page.tsx`, then the Tech Lead runs a change review, then Doc-Sync.

---

## 5. Notes for the Tech Lead (change review). These are questions for you, not decisions.

1. **Full screen needs a user gesture.** Selecting the nav item or pressing `7` counts as one, and so does pressing `F`. A direct visit, a start link or a reload does not, so AC-096 falls back to filling the window. iPhone Safari has no element full screen (AC-095).
2. **In full screen the browser takes the first Esc.** It leaves full screen and usually does not pass the key to the page. AC-099 treats leaving full screen as leaving the slideshow, so one Esc is enough. Please confirm this works in Chrome, Safari and Firefox, and that `F` only enters full screen and never leaves it (if it did, it would close the slideshow).
3. **The shell renders the sidebar on every route.** The slideshow must hide it (AC-095), and the global `1`–`7` listener in the MOD-001 Sidebar must ignore keys while the slideshow is open (AC-094), because the slideshow gives `1` to `4` its own meaning. Please decide how the MOD-001 / MOD-012 boundary works and which module does which part.
4. **`?project=` on a route that must be built at build time (AC-107, AC-115).** Please decide how the parameter is read without making /slideshow server-rendered.
5. **Offline after load (AC-105) and the 2 MB image cap (AC-106).** Every slide image must be loaded when the slideshow opens, not when its slide is shown. The bouldering photo (0.8 MB) needs a smaller copy to fit the cap. Please decide where copies live: under `site/public/slideshow-*` (owned by MOD-012; PM then adds the pattern to its Source Path), or as new files owned by mod-site-shell.
6. **Slide content as data.** The deck has four slide types plus the menu and the two diagrams. Please decide whether the deck copy lives in one data file inside `site/app/slideshow/` and whether it needs a convention like CONV-003 / CONV-005.
7. **Overlay ownership.** Under CONV-001 the overlay is MOD-003's, because it lives in the shared template. If you want its code in a new file outside `site/app/projects/` (for example `site/components/`), tell PM, and PM adds that path to MOD-003's Source Path. The coordinator suggests a small in-house component or the medium-zoom library. The overlay should show the image file the page already loaded, so that opening it starts no new download (section 8 rules out a larger file); please check that this works with how the template renders images.
8. **Back closes the overlay on phones (AC-109).** This usually means adding a history entry when the overlay opens. Please make sure it does not break the browser's Back between project pages, or the Projects split panel's active state.
9. **AC-111 and portrait screenshots.** If the current Images grid cannot keep a 1206x2622 screenshot at 640px or less at 1280x800, that is a MOD-003 template change. Please check whether it also affects TabVault's `tabvault-mobile.jpeg`, which must not change.
10. **Images used across modules.** Slides 3, B2, C2, C4 and D1 use files owned by mod-site-shell, MOD-011, MOD-004 and MOD-006. Please confirm that linking to them needs no ownership change.
11. **Who makes the ProjectDay three-screen image (section 4.6),** and its file name under `site/public/projectday-*`. Slide B2 reuses it.
12. **MOD-007 spec drift.** The spec is at PRD 1.2 and the code differs from it. The new ACs replace the old content ACs. Please say if the Experience page code needs anything beyond a data change.

---

## 6. Order of runs after approval

Leon can do the two open sign-offs at any point: AC-017 with the script in `modules/mod-home/status.md`, and AC-091 at 375px with the script in `modules/mod-project-multi-agent/status.md`.

If question 5 = join Phase 4 (recommended):
1. The coordinator commits any approved source-file edits (questions 18 and 20) as a `human:` commit, then runs the PM apply pass with Leon's quote.
2. The coordinator runs `/pstack:how` (shell layout, Sidebar key listener, `[slug]/page.tsx`), saves the output to `project-planning/pstack-findings/`, then runs `claude --agent tech-lead "change review"`.
3. `claude --agent doc-sync`.
4. Engineers in the order the Tech Lead sets, each followed by its QA. The content-only changes (MOD-005, MOD-006, MOD-007) are independent of the rest. Expected for the others: MOD-011 and MOD-003, then MOD-001, then MOD-012 `implement`.
5. The phase-end integration review (`/pstack:thermos`, then `claude --agent tech-lead "phase-end integration review"`), then `claude --agent pm "checkpoint"`. This is the final checkpoint and produces the README.

If question 5 = a new Phase 5: steps 1 to 3 are the same, so that Doc-Sync adds Phase 5 to the Phase Plan before the Phase 4 checkpoint. Then the Phase 4 integration review and checkpoint run (no README yet), then step 4, then a Phase 5 integration review and the final checkpoint with the README. This costs one more integration review and one more checkpoint. In return you get a `checkpoint-4` git tag to roll back to before the new features.

---

## 7. Questions for Leon

### Already answered (not asked again)

- Version 1, Q6 (trimming the old deck to about 50 words a slide): replaced by your rewrite. "Concise the title and make the content more for slides, please look for the best practice of creating a slide content for this revise." The deck at 4c7e58e is the result.
- Version 1, Q7 (slide 2 image) and Q8 (backup slides after slide 9): replaced by the project menu. "I think i will put them all in slide and add a project page with the link guide to the start of that project slide, and in different interview IU can decide which one to share and click on it. Does this make sence", then "yes go ahead".
- Version 1, Q13 (tailoring the intro line from the URL): dropped with the line itself. "Also remove the applying for Software Engineering Intern roles line".
- Version 1, Q17 (whether the screenshots can be published): "ProjectDay screenshots is demo data so fine to go online".
- Version 1, Q15 (overlay behaviour), in part: "Clickable diagram ok, look for some best practices, the video I record was using Notion.io as sample". The overlay is now written Notion-style; question 12 asks you to confirm the details.
- The deck's structure and content: "At the end of the project put the project list again and remove the Thank you slide", "Remove the shown tag", "remove the avatar and the GPA", "make the two work experience each have one page hidden only show if I click on the expeience card, and the next page of these two hidden page would be back to this experience page", SitePlus+ numbers "~60%; 3+ month used in real live; 10+ report generated", TabVault "remove the three number for this one". All of it is in the deck at 4c7e58e and in section 4.11.
- The three facts: "1. yes 2. yes 3. make the Experience page align with the cv, cv is the correct one." and "TabVault - This is not live(also change the content of the website if needed)". These drive sections 2.7, 2.8 and 2.10. Question 16 confirms the details the CV does not cover.

### Questions

1. Do you approve the PRD change in section 2 and the status.md entries in section 3, with your answers below filled in? Approval must be explicit.
2. Is this change trivial or substantive? Recommendation: **substantive**.
3. Is it architectural, meaning it changes how the site is built (module boundaries, the shell, browser integrations)? Recommendation: **yes**. That adds `/pstack:how` and a Tech Lead change review before Doc-Sync (section 4).
4. You wrote the tab name as "Sliswshow". Should the label be "Slideshow"? Recommendation: **"Slideshow"**.
5. Should this work join the current Phase 4, or come after it as a new Phase 5? Recommendation: **join Phase 4**: one integration review and one final checkpoint for everything, the same choice you made for ProjectDay earlier today. Pick Phase 5 if you want a rollback tag on the site as it is now, before the new features land (section 6).
6. You asked whether the preview is the final design. It is mainly a content review. Should the engineers use `interview-deck-preview.html` as the design reference for the real slideshow, built in the site's palette and font? Recommendation: **yes, use the preview as the design reference**. Only words from the deck show on screen, so the "Project" label the preview shows above project names is left out unless you add it to the deck. The preview's help box and its H and T keys are not built.
7. Where should Esc go "back to the website"? Recommendation: **the page you opened the slideshow from, or Home after a direct visit**. One Esc press does it even in full screen, and a close button in a corner does the same.
8. On phones and for mouse users: a tap or click on the right half goes forward and on the left half goes back, swipes do the same, a tap on a card opens it, and a close button sits in a corner. The menu footer (site, GitHub, LinkedIn, email) is plain text, not links, because a click on a slide moves the slides. Slides stay a 16:9 frame (small on a phone held upright, full size sideways). Do you approve this? Recommendation: **yes, as written in section 4.11**.
9. Should the slideshow follow the site's light or dark theme, change slides instantly, and show the project name and "3 / 7" only on project slides, as in the preview? Recommendation: **yes to all three**. Tip: switch the site to the light theme before presenting on a projector in a bright room.
10. Offline: should the deck keep working with the network off once it has loaded, while an installable offline copy, a PDF export and a presenter view (speaker notes on a second screen) stay out of scope? Recommendation: **yes**. Before an interview, open /slideshow once while you are online.
11. Which images should open in the overlay? (a) only the multi-agent diagram, (b) every project's feature image, or (c) every image on every project page (feature images and Images sections). Recommendation: **(c)**. It is one rule in one shared template, and the phone screenshots are where enlarging helps most.
12. Overlay details, Notion-style: the image grows from its place to the center and shrinks back (a plain fade when your system is set to reduce motion), the page dims and does not scroll, a click or tap anywhere or Esc closes it, the phone's Back closes it without leaving the page, and the pointer shows zoom-in and zoom-out. There is no visible close button, as in Notion. Do you approve AC-108 to AC-110 as written? Recommendation: **yes**.
13. ProjectDay images: should the feature image be one wide image with Home, Gyms and Route side by side, followed by an Images section with Route beta and Profile? Recommendation: **yes**. A single phone screenshot in the feature slot would be about 1,900px tall on a laptop. Slide B2 reuses the same wide image.
14. Do you approve the caption "ProjectDay's interface is in Traditional Chinese, for climbers in Taiwan." and the alt texts in sections 2.9, 2.11 (including "Leon on a snowboard on a snowy slope, giving a peace sign, with forested mountains behind." and "Leon on an indoor bouldering wall, reaching for orange holds.") and 2.12? Recommendation: **yes**.
15. Do you approve the module name "Interview Slideshow", the directory `mod-slideshow`, and the source path `site/app/slideshow/` for MOD-012? Recommendation: **yes**.
16. Experience page: should it match `asset/content/experience.md` exactly, as in section 2.10? That includes three things the CV does not show the same way: (a) tag chips for both jobs (the CV has none; Exascend: JavaScript · HTML · CSS · GA4 · SEO · Lighthouse · WCAG; GoFreight: HTML · CSS · JavaScript · A/B Testing · Event Tracking · Project Management, which the coordinator proposed), (b) full degree names as on the CV ("Master of Science in Computer Science", "Bachelor of International Business"), and (c) full periods ("Jul 2025 – Dec 2027 (Expected)", "Sep 2017 – Jun 2021") instead of "Expected Dec 2027" and "Completed". Recommendation: **yes, all three as written**.
17. TabVault wording: the site and the deck will say TabVault was "Deployed to AWS ECS Fargate (now offline)" and "was deployed to production on AWS and is offline now". The coordinator wrote this on the assumption that it was deployed and later taken down. Is that accurate? Recommendation: **yes, keep the wording**. If TabVault was never deployed, say so, and the coordinator rewrites those lines in the source files before the apply pass.
18. The multi-agent "My role" paragraph still says you hardened the system by "running five end-to-end simulations and two real products through the system", while the rest now says three products. Should the coordinator change "two real products" to "three real products" in `asset/content/case-study-multi-agent-detailed.md` before Doc-Sync? Recommendation: **yes**.
19. Your CV (`asset/Leon_cv.pdf`, downloadable from the site) still has "Built by the system: tab-vault.com". Should you update the CV to drop that link? Recommendation: **yes, before the site goes live**. It is your file and a separate small step: you replace the PDF in `asset/`, and the site-shell engineer copies it to the site. It is not part of this PRD change.
20. Two deck numbers: A1 "6 skills created" (your note had "?"; the speaker notes list six: PRD format, doc sync, coding conventions, the engineer checklist, the QA checklist and integration review), and B1 "13 gyms in Taipei" (the case study says Taipei and New Taipei). Recommendation: **keep "6 skills created", and change B1 to "13 gyms in greater Taipei"**.
