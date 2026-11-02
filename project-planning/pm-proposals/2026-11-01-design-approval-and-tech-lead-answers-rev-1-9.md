Status: pending

# PM proposal: record the slideshow design approval, apply Tech Lead T1-T6, the "Leon Wu" name rule and the design decisions (PRD rev 1.9)

Mode: change, proposal pass. Nothing in prd.md or in any other status.md section has changed yet. Reserved numbers: Revision 1.9, AC-127 to AC-131 (no other pending proposal exists; the highest AC in the PRD is AC-126).

Sources:
- Tech Lead Reviews "Review — 2026-11-01 — change (rev 1.7 + rev 1.8: slideshow, image overlay, ProjectDay images, CV alignment)" (0051840): T1-T6, CONV-006, CONV-007, Q4, Q6 (Images height cap), Q10, MOD-011 files, the Q6 concern (layout.tsx:16), the MOD-008 omission.
- Design: project-planning/design/ux-team/ at ac1a07d; Design Lead review 2 (PASS) section 4 (L-1 to L-11, P-1 to P-5, design-team T1-T6); slideshow-ux.md 13.1 and 13.2; slideshow-ui.md section 14 (sidebar icon).
- Deck: asset/content/interview-deck.md at ac1a07d (human commits 02e9c80 and ac1a07d).
- Site code checked for the name rule (grep "Tsan" in site/app, site/components, site/data): layout.tsx:16; contact/page.tsx:6,9,20; experience/page.tsx:7,10,19; about/page.tsx:6,10,22; skills/page.tsx:7,11,23. All are meta descriptions; no page body text and no structured data has the full name.

Leon's answers this proposal applies (quoted exactly):
- (A) To Tech Lead T1-T6: "Use Leon Wu in the website other go with recommendation"
- (C) To the design team's open questions: "L-9 go with design lead suggestion
Other go with recommendation

- Page 2: remove the "detail > 1" and "detail > 2" text. Behavior would be if they click on the card then go to the detail page and if not go to the page 3
- No need to use "Pick another project", "Pick a project would be fine"
- A2 remove the human approve step between doc sync <> engineer, engineer <> tech-lead. And the retro is a seperate line that take the improvements go back to the system instead of pm"
- (D) Design approval: "approve both"; A2 bar wording: the option "I approve the key handoffs".
- (B) Seattle: no answer.

---

## 1. PRD changes (verbatim text to write)

### 1.1 Header

`**Revision:** 1.8` becomes `**Revision:** 1.9`. Date stays 2026-11-01.

### 1.2 Section 3, Sidebar Navigation: the Slideshow icon

Replace the paragraph "The Slideshow item appears in the desktop sidebar and in the mobile drawer, ..." with:

> The Slideshow item appears in the desktop sidebar and in the mobile drawer, with its own icon and shortcut badge like the other items. Its icon is the one in the approved slideshow design (section 4.11, Design: `slideshow-ui.md` section 14). Selecting it opens the full-screen slideshow (section 4.11), not a normal page inside the sidebar layout.

### 1.3 Section 4.2: Images sections and alt text on every project page

Insert after the "Image overlay (every project page)" paragraph, before "**Acceptance criteria (added in revision 1.7):**":

> **Images sections (every project page):** Each image in an Images section shows whole, with no cropping or distortion. At 1280x800 none is taller than 640px; at 375px wide each fits the column width. This is the ProjectDay rule (AC-111) applied to every project page, so the portrait TabVault phone screenshot shows smaller than before.
>
> **Alt text (every project page):** The feature image and every image in an Images section have the alt text given for them in their project's section (4.3 to 4.6) and record (section 5). The image overlay names its dialog by that alt text (AC-109).

Append after AC-110:

> **Acceptance criteria (added in revision 1.9):**
> - AC-127: On every /projects/<slug> page, the feature image and every image in an Images section have exactly the alt text given for them in sections 4.3 to 4.6 and 5, and no project image has an empty alt. The overlay dialog each one opens is named by that alt text.
> - AC-128: On every /projects/<slug> page, each image in an Images section shows whole, with no cropping or distortion. At 1280x800 no image in an Images section is taller than 640px; at 375px wide each fits the column width.

### 1.4 Section 4.3 SitePlus+: alt texts

Replace "The Images section shows the SitePlus+ screenshots (`/siteplusplus-reports.jpeg`, `/siteplusplus-sites.jpeg`, in order) and has no paragraphs." with:

> The Images section shows the SitePlus+ screenshots below, in this order, and has no paragraphs. The feature image, `/siteplusplus-home.jpg`, has the alt text "Screenshot of the SitePlus+ home dashboard." (Record 1).
>
> | Screenshot | Alt text |
> |---|---|
> | `/siteplusplus-reports.jpeg` | Screenshot of the SitePlus+ reports page. |
> | `/siteplusplus-sites.jpeg` | Screenshot of the SitePlus+ Sites page, with a form to register a new site and a card for a registered test site. |

(The first and the feature-image alt reuse slides C5 and C2. The `siteplusplus-sites.jpeg` alt is new: see question 2.)

### 1.5 Section 4.5 TabVault: alt texts

Replace "The Images section shows the TabVault screenshots (`/tabvault-mobile.jpeg`, `/tabvault-plugin.png`, in order) and has no paragraphs." with:

> The Images section shows the TabVault screenshots below, in this order, and has no paragraphs. The feature image, `/tabvault-home.png`, has the alt text "Screenshot of the TabVault web app home screen." (Record 3).
>
> | Screenshot | Alt text |
> |---|---|
> | `/tabvault-mobile.jpeg` | Screenshot of the TabVault web app on an iPhone, showing saved items grouped by category, with search and filters. |
> | `/tabvault-plugin.png` | Screenshot of the TabVault Chrome extension popup, with buttons to save the current tab, save all tabs or write a quick note, and a list of recent saves. |

(The feature-image alt reuses slide D1. The two table alts are new: see question 2.)

### 1.6 Section 4.6 ProjectDay: file names and byte allocation (Tech Lead)

Header table, "Feature image" row, last sentence "Who makes the image (Leon as an asset, or the MOD-011 engineer from the three files) and its file name under the `projectday-` prefix are the Tech Lead's call." becomes:

> The MOD-011 engineer makes it from the three files and serves it as `/projectday-screens.webp` (Tech Lead, 2026-11-01).

Images section paragraph and table become:

> The Images section shows two screenshots from `asset/screenshots/projectday/`, in this order, and has no paragraphs. Each is served as a web-sized file made by the MOD-011 engineer. Its heading is not in the source file, as on SitePlus+ and TabVault. The screenshots show demo data and are cleared for publishing (Leon, 2026-11-01).
>
> | Screenshot (source → served file) | Alt text |
> |---|---|
> | `projectday-route-beta.png` → `/projectday-route-beta.webp` | ProjectDay route screen scrolled to the Beta videos section, showing the thumbnail of a climber's beta video for a V0 route. |
> | `projectday-profile.png` → `/projectday-profile.webp` | ProjectDay profile screen with climbing stats: top grade V10, 10 sends, 9 climbing days, and a bar chart of sends per grade. |

AC-112 becomes:

> - AC-112: Every ProjectDay image file the page loads is at most 300 KB. Each single screenshot is at least 1000 pixels tall, and the three-screen image is at least 1500 pixels wide, so they stay sharp at the size the image overlay shows them (AC-108). The four ProjectDay files /slideshow loads (`/projectday-screens.webp`, `/projectday-route.webp`, `/projectday-route-beta.webp`, `/projectday-profile.webp`) together total at most 800,000 bytes.

### 1.7 Section 4.7 Experience: AC-121 (name)

> - AC-121 (added in revision 1.8, name changed in revision 1.9): The /experience meta description is exactly "Professional experience and education of Leon Wu: Front-End Developer at Exascend, Marketing Project Manager at GoFreight, Master of Science in Computer Science at Northeastern University." The Open Graph and Twitter descriptions are exactly "Professional experience and education of Leon Wu." No meta tag on /experience contains "Growth Marketer" or "MS in Computer Science".

### 1.8 Section 4.9 Skills: AC-122 (name)

Only the last sentence changes:

> ... The meta, Open Graph and Twitter descriptions are exactly "Technical skills of Leon Wu: languages, backend, frontend, infrastructure and DevOps, and AI and agentic development."

### 1.9 Section 4.11 Slideshow

**Source file** line: "(as of commit e479e22)" becomes "(as of commit ac1a07d)".

**On-screen text**, A2 bullet becomes:

> - A2: boxes reading "Requirements", "PM", "Doc-Sync", "Engineer ⇄ QA", "Tech Lead", "Shipped", in this order, joined by arrows; with them the line "Retrospective feeds improvements back into the system" and a bar reading "I approve the key handoffs". The bar connects only to the handoffs into PM, into Doc-Sync and into Shipped. The Retrospective line stands apart from the row of boxes and feeds the system as a whole, not one box.

**On-screen text**, the paragraph "The only other text on screen: ..." becomes:

> The only other text on screen: the key number on each menu card, the project name and position on project slides (see Look), the menu hint (see Menu), and the full-screen hint (see Opening). The field names in the source file (such as "Role" and "Stack") do not show. Where a timeline entry on slide 2 is split across lines, the colon after its dates and the comma after its role fall at the line breaks and are not drawn; no other punctuation changes.

**Slide images**, rows B2 and B5 become:

> | B2 | The ProjectDay three-screen image `/projectday-screens.webp` (MOD-011 asset, section 4.6) | Record 4's `featureImageAlt` |
> | B5 | Three single ProjectDay screenshots side by side, left to right: Route (`/projectday-route.webp`), Route beta (`/projectday-route-beta.webp`), Profile (`/projectday-profile.webp`), MOD-011 files | Route: "ProjectDay route screen showing a V0 route at CORNER gym with its photo, send and attempt counts, and a Log climb button." Route beta and Profile: the alt texts in section 4.6. |

**Hidden job slides** becomes:

> **Hidden job slides:** On slide 2, the two work cards (GoFreight, Exascend) show only their timeline text, with no "Details" cue and no key. A click or tap on a card, or Enter or Space on a focused card, opens that job's slide; a click or tap anywhere else on slide 2 works as listed under Controls (a mouse click goes to slide 3). On slide 2 the keys `1` (GoFreight) and `2` (Exascend) also open the job slides, as a shortcut that nothing on screen shows. On a job slide, Next or Previous (any control) returns to slide 2. Next and Previous never reach a job slide from any other slide.

**Menu** becomes:

> - The title always reads "Pick a project".
> - Four cards, in the order listed under Slides, each with its key number (1 to 4), name and one line from the source file. A click or tap on a card, Enter or Space on a focused card, or its number key starts that project at its first slide. The footer line shows as plain text, not as links.
> - Next on the menu starts the project pre-selected by a start link, if there is one and it has not been shown yet. A project counts as shown once any of its slides has been displayed, by any route. Otherwise Next shows the hint "Pick a project: press 1 to 4 or click a card" for about 2 seconds and stays on the menu. Previous on the menu goes to slide 3.
> - From a project: Next on its last slide, Previous on its first slide, or M on any slide returns to the menu.

**Start link** becomes:

> **Start link:** `/slideshow?project=<name>`, where `<name>` is `multi-agent`, `projectday`, `siteplus` or `tabvault`, still opens on slide 1. On the menu, that project's card is highlighted and Next starts it, until that project has been shown (see Menu); from then on the card is no longer highlighted. Any other value is ignored.

**Opening** becomes:

> **Opening:** Selecting the Slideshow nav item or pressing `7` puts the browser in full screen, where the browser supports it, and shows slide 1. Where full screen is not available (for example on iPhone), the slideshow fills the browser window instead. A direct visit to /slideshow (a typed or shared link, a start link, or a reload) fills the browser window. Whenever slide 1 shows in a browser window on a browser that supports full screen (after a direct visit, or when the browser refused the site's full-screen request), the hint "Press F for full screen" shows. It never shows in full screen or on a browser without full-screen support. It goes away for good on the first key press, click or tap, or when full screen starts. Pressing `F`, or clicking or tapping the hint, enters full screen; a click or tap on the hint never changes the slide. The hint is not a Tab stop: `F` is its keyboard equivalent. In full screen, `F` does nothing.

**Controls** becomes:

> - Next slide: Space, Right arrow, Down arrow, Page Down, Enter; a mouse click anywhere on the screen, including the area around the 16:9 frame; on a touchscreen, a tap on the right half of the screen or a swipe left or up.
> - Previous slide: Shift+Space, Left arrow, Up arrow, Page Up; on a touchscreen, a tap on the left half of the screen or a swipe right or down. A mouse click never goes back.
> - Space or Enter on a focused card opens it, and Space or Enter on the focused close button leaves the slideshow, instead of moving to another slide.
> - A click or tap on a menu card or a slide-2 work card opens it, a click or tap on the close button leaves the slideshow, and a click or tap on the full-screen hint enters full screen, instead of moving to another slide.
> - A pen works like touch. Two-finger gestures never change slides, so pinch-zoom keeps working on a phone.
> - A key held down acts once: its automatic repeats do nothing.
> - Number keys: on slide 2, `1` and `2` open the job slides; on the menu, `1` to `4` start the projects; on every other slide they do nothing.
> - M goes to the menu from any slide. Home goes to slide 1. Previous on slide 1 does nothing.
> - Leaving: Esc, or the close button in a corner of the screen, returns to the page the slideshow was opened from (Home after a direct visit). A single Esc press does this even in full screen. Leaving full screen any other way also returns to that page.

**Look**: append one sentence at the end:

> In full screen, the mouse pointer hides after 3 seconds without movement, and card hover styles do not show while it is hidden; moving the mouse shows it again. It never hides in a browser window or for touch.

**Acceptance criteria**, changed:

> - AC-096: Whenever slide 1 shows in a browser window on a browser with full-screen support (a direct visit, a start link, a reload, or an opening from the site whose full-screen request the browser refused), the hint "Press F for full screen" shows. It does not show in full screen or on iPhone Safari. It disappears for good after the first key press, click or tap, or when full screen starts. Pressing `F`, or a click or tap on the hint, enters full screen, and a click or tap on the hint does not change the slide. In full screen, `F` does nothing.
> - AC-098: The mouse, tap, pen and swipe controls listed under Controls work as listed with a mouse on desktop and with touch on a 375px-wide phone, including opening menu cards and slide-2 work cards. A mouse click anywhere on the screen other than a card, the close button or the full-screen hint goes to the next slide and never to the previous one, and a mouse click on the area outside the 16:9 frame behaves exactly like a click on the slide. A pinch on a phone zooms and does not change the slide. The close button is visible on every slide and can be reached with Tab, and Enter or Space on it leaves the slideshow.
> - AC-113: The menu behaves as described under Menu: its title is "Pick a project" every time it shows, and "Pick another project" never appears; the four cards show in order with their key numbers; the footer line shows as plain text; Next with nothing pre-selected, or with the pre-selected project already shown, shows the hint and stays; and Previous goes to slide 3. Next on any project's last slide, Previous on its first slide, and M on any slide show the menu.
> - AC-114: On slide 2, the GoFreight card (key `1`) and the Exascend card (key `2`) each open their own job slide by click, tap, focused Enter or Space, or key. Neither card shows a "Details" cue or a key, and a mouse click on slide 2 outside the cards goes to slide 3. Next or Previous on a job slide returns to slide 2, and no sequence of Next or Previous from any other slide reaches a job slide.
> - AC-115: `/slideshow?project=projectday` opens on slide 1. On the menu the ProjectDay card is highlighted, and Next starts ProjectDay at B1. Once any ProjectDay slide has been shown, by any route, the card is no longer highlighted and Next on the menu shows the hint. The same holds for `multi-agent`, `siteplus` and `tabvault`. Any other value, or no parameter, behaves as no start link.

**Acceptance criteria**, new (appended after AC-115 under a "(added in revision 1.9)" line):

> - AC-130: In full screen with a mouse, the pointer hides after 3 seconds without movement and card hover styles do not show while it is hidden; any mouse movement shows the pointer again. In a browser window, and with touch, the pointer never hides.
> - AC-131: Holding down any key that changes slides (for example Right arrow or Space) moves exactly one slide; the key's automatic repeats do nothing.

### 1.10 Section 6

**Keyboard Shortcuts**, add a fourth suppression bullet:

> - An image overlay is open on a project page (section 4.2): the keys do nothing until it closes

and after the list:

> **Acceptance criteria (added in revision 1.9):**
> - AC-129: While the image overlay (section 4.2) is open, pressing any of `1`–`7` does nothing: the overlay stays open and the page does not change.

**SEO and Open Graph**, the bullet "Wherever a page shows or describes Leon by his full name ..." becomes:

> - The site names Leon "Leon Wu": in the sidebar, the mobile wordmark, page titles, and wherever page text or a meta tag gives his full name. The full-name forms "Tsan-Yu (Leon) Wu" and "Tsan-Yu Wu (Leon)" do not appear on the site. The CV PDF served at /Leon_cv.pdf is outside this rule.

AC-125 becomes:

> - AC-125 (changed in revision 1.9): In the built HTML of every route, neither "Tsan-Yu (Leon) Wu", "Tsan-Yu Wu (Leon)" nor "Tsan-Yu Wu" appears. Every meta description, Open Graph description and Twitter description that named Leon by his full name names him "Leon Wu" instead, with the rest of its text unchanged unless AC-121 or AC-122 gives the full text. For example, the root description reads "Portfolio of Leon Wu — full-stack engineer and CS master's student at Northeastern University." The LinkedIn URL and the email address, which contain "tsan-yu" and "tsan.yu", are unchanged.

(Leon chose T5 (a): the em dashes in these meta descriptions stay; this revision does not decide whether PRD 2's no-em-dash rule covers meta descriptions.)

### 1.11 Section 5 Records

Record 1, add after `featureImage: "/siteplusplus-home.jpg"`:
> featureImageAlt: "Screenshot of the SitePlus+ home dashboard."

Record 3, add after `featureImage: "/tabvault-home.png"`:
> featureImageAlt: "Screenshot of the TabVault web app home screen."

Record 4, `featureImage:` line becomes:
> featureImage: "/projectday-screens.webp" (the three-screen image in section 4.6)

ProjectSection block becomes:

```typescript
type SectionItem = string | { image: string; alt?: string };   // a paragraph (may contain **bold**) or an image with its alt text

interface ProjectSection {
  heading: string;
  items: SectionItem[];
}
```

followed by the line:

> `alt` is optional in the type only so that the shared template can gain it before the records fill it in; every image item on the site carries its alt text (AC-127).

### 1.12 Section 7 Assets

Remove the "Still needed — blocking" row "Slideshow design" (the table is then empty; replace it with the line "None."). Add to "Confirmed (ready to use)":

> | Slideshow design | `project-planning/design/ux-team/` at commit ac1a07d, approved by Leon on 2026-11-01 (`status.md` Decisions) |

### 1.13 Section 9 Adopted Conventions

Append:

> - CONV-006: Slideshow entry contract between MOD-001 and MOD-012. When the site opens the slideshow (the Slideshow nav link or key `7`), MOD-001, in the same event handler and in this order: writes `sessionStorage["slideshow-return"] = JSON.stringify({ path: location.pathname, t: Date.now() })`; calls `document.documentElement.requestFullscreen()` if `document.fullscreenEnabled`, ignoring a rejection; and navigates client-side to `/slideshow`. MOD-012 reads and removes that key once on first mount. A value whose `path` starts with "/" and is not "/slideshow", and whose `t` is at most 10 seconds old, means "opened from the site": leaving returns to `path` with `router.replace`. Anything else means a direct visit: leaving goes to "/". The origin does not decide whether the "Press F for full screen" hint shows: MOD-012 shows it whenever slide 1 is in a browser window and `document.fullscreenEnabled` is true, once the opening full-screen request has settled (section 4.11 Opening, AC-096). (Tech Lead Reviews, 2026-11-01 change review rev 1.7 + 1.8; hint rule changed by Leon's design decision L-2)
> - CONV-007: The shell on /slideshow. On `/slideshow` the site shell renders nothing: Sidebar returns `null`, its number-key handler does nothing, and no shell image is requested (no `/head.png`, no `/Subject.png`, verified in DevTools Network). MOD-001 moves or guards the `main::after` decoration so it is not generated there. The slideshow root is a fixed full-viewport layer above the shell, owned by MOD-012. Sidebar's number-key handler also does nothing while a `dialog[open]` exists, and in-page overlays are native `<dialog>` elements opened with `showModal()`. (Tech Lead Reviews, 2026-11-01 change review rev 1.7 + 1.8; T1 (b), T3 (a), T6)

### 1.14 Not changed

- Section 1 Purpose ("Tsan-Yu Wu (Leon)") is PRD prose, not site text; it stays.
- Section 2 "No em dashes" stays as is (T5 (b) not adopted).
- 4.4 Multi-Agent page ("Human-approved at every handoff", caption "Human approval sits on every arrow"): unchanged unless Leon says otherwise (question 5).
- Contact: no "Seattle, WA" (B).
- Module Map: unchanged. The planned `site/public/slideshow-*` pattern is dropped (Tech Lead Q4: no image copies are needed; any future copy goes in `site/app/slideshow/images/`, already MOD-012's).
- Current Phase: unchanged (Phase 4 — Deploy).

---

## 2. status.md entries (verbatim)

### 2.1 PM Updates (appended at the end)

```
- 2026-11-01 [SUBSTANTIVE] [ARCHITECTURAL] Record Leon's slideshow design approval (ac1a07d), apply Tech Lead T1-T6 (CONV-006, CONV-007, section-image alt texts, number keys off while an overlay is open), the "Leon Wu" name rule, the design decisions (F hint, menu title, timeline cards, A2, controls) and the MOD-011 file names; PRD rev 1.9
  Approved by Leon in the coordinator session: "<apply-pass quote>"
  Proposal: project-planning/pm-proposals/2026-11-01-design-approval-and-tech-lead-answers-rev-1-9.md
  Answers Tech Lead Reviews "Review — 2026-11-01 — change (rev 1.7 + rev 1.8: slideshow, image overlay, ProjectDay images, CV alignment)" (0051840). Leon: "Use Leon Wu in the website other go with recommendation": T1 (b); T2 (a), alt texts in PRD 4.3, 4.5 and 5 (three new ones approved by Leon, question 2); T3 (a); T4 (a); T5 (a) applied to the name "Leon Wu", T5 (b) not adopted; T6 yes (CONV-006 and CONV-007 in PRD 9, CONV-006's hint rule changed by L-2). Q4: the planned site/public/slideshow-* Module Map pattern is dropped. Q6 Images height cap for every project page (AC-128). Q10 and the MOD-011 file names in PRD 4.6 and AC-112.
  Corrects the rev 1.8 entry's Q6 note: the root description in site/app/layout.tsx:16 does not stay as is. It named "Tsan-Yu (Leon) Wu", which is shown on /projects and the 404 page; MOD-001 changes the name to "Leon Wu" (AC-125). MOD-008 (about/page.tsx:6,10,22) was missing from the rev 1.8 affected modules and is added.
  Design decisions applied (Design Lead review 2 section 4; Leon: "L-9 go with design lead suggestion / Other go with recommendation", plus his three changes): L-1 no mouse back (no change); L-2 F hint whenever windowed and full screen is available (Opening, AC-096, CONV-006); L-3 the hint is a pointer-only button that enters full screen; L-4 and L-5 start-link highlight clears once any slide of that project is shown (Menu, Start link, AC-113, AC-115); L-6 moot; L-7 idle pointer hides after 3 s in full screen (Look, AC-130); L-8 key repeats ignored (Controls, AC-131); L-9 A1 copy "6 agents on the dev team" (deck 02e9c80, AC-100 covers it); L-10 no Role/Stack labels (On-screen text); L-11 2 s (unchanged "about 2 seconds"); P-1 Enter or Space on the close button leaves; P-2 a click outside the frame counts as a click on the slide (AC-098); P-3 pen = touch; P-4 pinch-zoom kept; P-5 timeline colon and comma at line breaks are not drawn (On-screen text). Leon's changes: no "Details" cue and no key on the timeline cards, click a card opens it, otherwise Next to slide 3 (Hidden job slides, AC-114); menu title always "Pick a project" (Menu, AC-113); A2 bar "I approve the key handoffs", connected only to the handoffs into PM, Doc-Sync and Shipped, Retrospective a separate line back to the system (On-screen text).
  Source commit: interview-deck.md at ac1a07d replaces e479e22 as the deck source (A1, A2, slide 2 note, menu title). PRD 4.11 Source file line changes to "(as of commit ac1a07d)".
  Sections changed: header; 3 (Slideshow icon); 4.2 (Images sections, alt text, AC-127, AC-128); 4.3 and 4.5 (alt tables); 4.6 (file names, Images table, AC-112); 4.7 (AC-121); 4.9 (AC-122); 4.11 (source commit, On-screen text, Slide images B2 and B5, Hidden job slides, Menu, Start link, Opening, Controls, Look, AC-096, AC-098, AC-113, AC-114, AC-115, AC-130, AC-131); 5 (SectionItem alt, Records 1, 3 and 4); 6 (keyboard suppression, AC-129, name rule, AC-125); 7 (slideshow design confirmed); 9 (CONV-006, CONV-007).
  Modules affected: MOD-001 (CONV-006, CONV-007, Slideshow icon from slideshow-ui.md 14, AC-129, AC-125 at layout.tsx:16); MOD-003 (SectionItem alt and rendering it, AC-127, AC-128 height cap on every project page, the overlay as a native dialog per CONV-007); MOD-004 (feature and section alts, AC-127); MOD-006 (feature and section alts, AC-127; AC-128 shrinks tabvault-mobile.jpeg); MOD-007 (AC-121 name); MOD-008 (AC-125, about meta); MOD-009 (AC-122 name); MOD-010 (AC-125, contact meta); MOD-011 (file names, alts in its record's section items, AC-112 800,000-byte allocation); MOD-012 (approved design files, 4.11 changes, AC-096, AC-098, AC-100 via the deck at ac1a07d, AC-113, AC-114, AC-115, AC-130, AC-131, CONV-006, CONV-007). MOD-002 and MOD-005: no change.
  No module added, removed or renamed. Module Map unchanged. Current Phase unchanged (Phase 4 — Deploy).
  Order of runs: the coordinator runs /pstack:how on the affected code (Sidebar key handler and slideshow entry, the [slug] image rendering), then claude --agent tech-lead "change review" (rule on L-2's change to CONV-006 and the design team's T1-T6 in slideshow-review-2.md section 4), then claude --agent doc-sync syncing rev 1.7, 1.8 and 1.9 together, then the engineers in the Tech Lead's order.
  Notes for Doc-Sync: rev 1.7 and 1.8 are not synced; sync 1.7, 1.8 and 1.9 together. The MOD-012 spec names the approved design files from status.md Decisions (2026-11-01, design approval) at ac1a07d, and Design Lead review 2 section 3 corrects UI 6.4 and 7.4. slideshow-ui.md section 14 is a MOD-001 input (AC-093). In the deck, slide 2's "(opens the ... detail slide)" annotations and the note under the timeline are not on-screen text (Tech Lead's Doc-Sync note).
  Notes for Tech Lead (change review): L-2 changes CONV-006's hint rule (Design Lead review 2: "Tech Lead review for L-2"); the design team's T1-T6 (edge colour within limit 3, ⇄ drawn in SVG with a hidden exact string, F-hint sizing, B2 dependency on MOD-011, WCAG 2.1.4 single-key risk, reduced motion site-wide later); UX hand-offs in slideshow-ux.md 14 (pointerType handling, touch-action, key/code matching, skip focus()). AC-127 needs MOD-003's alt field before MOD-004, 006 and 011 fill it (same staging as E1).
```

### 2.2 Decisions (appended)

```
- 2026-11-01 Slideshow design approval (rev 1.9). Leon approved the slideshow design: "approve both" (the design and the A2 wording), choosing the A2 bar "I approve the key handoffs". Approved files, at commit ac1a07d, in project-planning/design/ux-team/: slideshow-brief.md, slideshow-research.md, slideshow-ux.md, slideshow-ui.md (section 14 is the sidebar Slideshow icon, a MOD-001 input), slideshow-motion.md, slideshow-mock.html, the 40 slideshow-mock-*.png, reviews/slideshow-review-1.md and reviews/slideshow-review-2.md. Design Lead review 2 PASSed revision 1 (542ac5c). Revision 2 (8d15ec7, Leon's own changes) and the A2 wording (ac1a07d, text only, PNGs re-rendered) were not re-reviewed by the Design Lead; Leon approved them as they stand. The three nits in review 2 section 3 are not fixed in the files; where they differ, review 2 section 3 wins (UI 6.4: the F hint is sized in em from the frame, not px; UI 7.4: the photos are about 51% larger, not 23%; text-wrap fallbacks in Firefox and older Safari are not regressions). Engineers and QA read the design from these files at ac1a07d.
- 2026-11-01 T1-T6 (rev 1.7 + 1.8 change review). Leon: "Use Leon Wu in the website other go with recommendation". T1 (b) Sidebar hides itself on /slideshow; T2 (a) alt texts for the six SitePlus+ and TabVault images; T3 (a) number keys do nothing while an overlay is open; T4 (a) PRD as written for an upright phone; T5: the name becomes "Leon Wu" (not "Tsan-Yu Wu (Leon)"); the em dashes stay (T5 (b) not adopted); T6 CONV-006 and CONV-007 adopted.
- 2026-11-01 Name on the site (rev 1.9). Leon: "Use Leon Wu in the website". The site names him "Leon Wu" everywhere, replacing "Tsan-Yu (Leon) Wu" and rev 1.8's "Tsan-Yu Wu (Leon)" (AC-125 changed). The CV PDF is outside this rule.
- 2026-11-01 Q6 (rev 1.8) corrected. The rev 1.8 note "the root description stays" was wrong: layout.tsx:16 named "Tsan-Yu (Leon) Wu" (Tech Lead, 0051840). MOD-001 changes the name to "Leon Wu" and keeps the rest of the text.
- 2026-11-01 The planned site/public/slideshow-* Module Map pattern (rev 1.7) is dropped: no image copies are needed (Tech Lead Q4). A future copy goes in site/app/slideshow/images/, already MOD-012's.
- 2026-11-01 "Seattle, WA" on the Contact page: closed, stays off. Leon gave no answer in two rounds; it reopens only if he raises it.
```

And in the existing Decisions entry "2026-11-01 Q6 (rev 1.7): ... Status: pending." the last words become "Status: done, see the 2026-11-01 slideshow design approval entry below." The rev 1.8 phone entry's last sentence ""Seattle, WA" on the Contact page: not addressed, left out; open question for Leon." stays, superseded by the closing entry above.

### 2.3 Last Action after the apply pass

```
agent: pm
mode: change
module: n/a
result: success
next: the coordinator runs /pstack:how on the code this change affects (site/components/Sidebar.tsx key handler and slideshow entry, site/app/projects/[slug]/ image rendering) and saves it to project-planning/pstack-findings/, then claude --agent tech-lead "change review" (rev 1.9: L-2 change to CONV-006, design-team T1-T6 in slideshow-review-2.md section 4); then claude --agent doc-sync (syncs rev 1.7, 1.8 and 1.9 together); then engineers in the Tech Lead's order (MOD-003, record modules MOD-005/006/004/011, page modules MOD-007/008/009/010, MOD-012, MOD-001 last)
Previous action: tech-lead change-review (0051840); design team revisions 1-2 and Design Lead review 2 PASS (ac1a07d). Still open for the human: AC-017 sign-off (mod-home), AC-091 375px sign-off (mod-project-multi-agent).
timestamp: <ISO 8601>
```

---

## 3. Checks run on the proposed PRD

- Anti-patterns: no new "how" beyond section 5's existing type block, the file names the Tech Lead set (as the PRD already does for other public files) and section 9 conventions; every new requirement has an AC; no vague words ("fast", "nice"); new ACs are testable (sizes, strings, counts, bytes).
- Quality checklist: AC IDs unique (AC-127 to AC-131 new; AC-096, 098, 112, 113, 114, 115, 121, 122, 125 changed in place); no [DECISION NEEDED] markers; non-goals unchanged; Revision incremented to 1.9; PM Updates entry tagged; Module Map unchanged (no module added). The PRD's existing structure (no US-IDs, ACs grouped by page section) is unchanged and outside this change.
- One conflict found and resolved in the text: banning "Tsan-Yu" as a bare string would fail on the LinkedIn URL and the email address, so AC-125 bans the three full-name forms and says the URL and email stay.

---

## 4. Questions for Leon

Already answered (quotes above):
- T1-T6: (A) "Use Leon Wu in the website other go with recommendation".
- L-1 to L-11 and P-1 to P-5, timeline cards, menu title, A2: (C).
- Design approval and the A2 wording: (D) "approve both", "I approve the key handoffs".
- "Seattle, WA": (B) no answer, so it stays off; this proposal closes the question.

Still open:

1. Approve the PRD rev 1.9 changes in section 1 and the status.md entries in section 2, as written? Recommended: yes.
2. The three new alt texts: `siteplusplus-sites.jpeg` "Screenshot of the SitePlus+ Sites page, with a form to register a new site and a card for a registered test site."; `tabvault-mobile.jpeg` "Screenshot of the TabVault web app on an iPhone, showing saved items grouped by category, with search and filters."; `tabvault-plugin.png` "Screenshot of the TabVault Chrome extension popup, with buttons to save the current tab, save all tabs or write a quick note, and a list of recent saves." Approve as written? Recommended: yes. (The popup shows other people's names in its recent saves; the alt text leaves them out.)
3. Name rule: "Leon Wu" replaces both full-name forms in every page's text and meta tags. In practice all of them are meta descriptions (root, About, Contact, Experience, Skills). The rest of each description stays the same, em dashes included, and the CV PDF is unaffected. Is that what you meant? Recommended: yes.
4. Images height cap on every project page (Tech Lead): no Images-section image taller than 640px at 1280x800. This shrinks the tall TabVault phone screenshot on /projects/tabvault. Apply it to every project page? Recommended: yes, one rule for all pages (the alternative is ProjectDay only, leaving TabVault as it is now).
5. A2 now says "I approve the key handoffs", but the Multi-Agent project page still says "Human-approved at every handoff" (At-a-glance) and "Human approval sits on every arrow" (diagram caption). Change the project page too? Recommended: leave it unchanged in this revision. The page describes the full diagram, where every arrow has an approval, and changing it means new wording in the case-study source file from you.
6. The Design Lead did not re-review revision 2 or the A2 wording, and three small doc nits are still in the files. Record the approval of the files as they stand at ac1a07d, with review 2 section 3 taking priority over the stale sentences (no Design Lead re-review)? Recommended: yes.
7. Is this change trivial or substantive? Recommended: substantive (new ACs, a content-model field, cross-module conventions).
8. Is it architectural, meaning it changes how the system is built? Recommended: yes. It changes a cross-module contract (CONV-006's hint rule), adds a field to the content model and adopts two conventions, and the Tech Lead must review L-2 and the design team's T1-T6 before Doc-Sync anyway. Tagging it architectural routes it through /pstack:how and the Tech Lead change review.
