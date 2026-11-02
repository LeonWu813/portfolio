# Project Status — Leon's Portfolio Website

---

## Last Action

```
agent: engineer-mod-projects-grid
mode: integration-fix
module: mod-projects-grid
result: success
next: claude --agent qa-mod-projects-grid "integration-fix-verify INT-003"  (then INT-004, INT-005)
timestamp: 2026-11-02T11:00:00Z
```

## PM Updates

2026-06-28 — PRD revision 1.2 confirmed by user. PRD covers all nine pages (Home, Projects grid, three Project Detail case studies, Experience, About, Skills, Contact), the persistent sidebar layout, dark mode toggle, SEO/OG metadata, and static Vercel deployment. Content assets (case studies, site copy, experience entries, resume PDF, favicon) are all present in `asset/`. Next.js 16 scaffold exists at `site/`. Status.md created; waiting for Tech Lead Setup Confirmation before tagging [INIT].

2026-06-28 — Tech Lead review confirmed present (Concerns, Recommendations, Approved, Proposed Shared Conventions). Next.js 16 scaffold at `site/` verified. Setup complete per user confirmation. PRD formally initialized. **[INIT]**

**Open items before launch:**
- Domain name: not yet selected. Required for canonical URLs, OG tags, and Vercel domain configuration. Blocking for production deploy.
- OG / social preview image (1200x630px): not yet produced. Non-blocking — affects link preview appearance only.
- Project screenshot(s) for SitePlus+ detail page: not yet provided. Non-blocking.
- Diagram or demo clip for Multi-Agent System detail page: not yet provided. Non-blocking.
- Screenshot(s) for TabVault detail page: not yet provided. Non-blocking.

2026-06-29 — Phases 1, 2, and 3 completed in a single engineering session (2026-06-28). Checkpoint recorded. Current phase advanced to Phase 4 — Deploy. PRD updated to revision 1.3 to reflect all implemented changes. [SUBSTANTIVE] — scope changes: footer removed, split-panel replaces grid on projects page, SitePlus+ rename from "Marketing Analytics Platform", keyboard shortcuts 1–6 wired globally, IBM Carbon palette formalized as design system.

2026-06-29 — Phase 2 and Phase 3 QA formally closed after dedicated QA agent passes. All Phase 2 modules (MOD-002/007/008/009/010) confirmed PASS. All Phase 3 modules (MOD-003/004/005/006) confirmed PASS after one bug-fix round. Project is ready for Phase 4 — Deploy. Blocking item remains: domain name not yet selected (required before Vercel domain config, canonical URLs, and OG tags can be finalized). [TRIVIAL]

- 2026-11-01 [SUBSTANTIVE] Add ProjectDay as a fourth project (MOD-011, /projects/projectday) and update the Multi-Agent System page content, tags, At-a-glance and feature image (MOD-005); PRD rev 1.4
  Approved by Leon in the coordinator session: "8. it stays private
  
  Approve all recommendations"
  Proposal: project-planning/pm-proposals/2026-11-01-projectday-and-multi-agent-update.md
  Answers applied: Q2 substantive; Q3 not architectural; Q4 App Store listing not live on 2026-11-01 (coordinator check: HTTP 404), so no App Store link, ProjectDay At-a-glance "Submitted to the App Store (Oct 2026)", multi-agent At-a-glance "Shipped TabVault (live) · ProjectDay submitted to the App Store"; Q5 designer collaborator stays unnamed; Q6 feature image = Leon's App Store Connect iPhone screenshots, files not yet supplied, non-blocking, page renders without them; Q7 ProjectDay directly after Multi-Agent, slug "projectday", year 2026, date 09/19; Q8 ProjectDay repo stays private, so both ProjectDay repo links are removed (multi-agent page keeps three links; ProjectDay page has no external links); Q9 add Python to multi-agent tags; Q10 multi-agent tech line unchanged; Q11 success criterion reworded (adjusted for Q8: "links to its GitHub repository when that repository is public"); Q12 PRD moved from repo-root prd.md to project-planning/prd.md (git mv); Q13 ProjectDay is section 4.6, Experience/About/Skills/Contact renumbered 4.7-4.10 (numbers only); Q14 work joins current Phase 4 — Deploy; Q15 diagram caption shown; Q16 diagram re-exported without em dashes (done by the coordinator); Q17 module name and directory confirmed; Q18 recording the SitePlus+ and TabVault screenshots in the PRD is a separate small change after this one.
  Sections changed: 1 (three -> four projects; success criterion on links), 4.2 (project order), 4.4 (At-a-glance, tags, feature image + caption, body copy, AC-091, AC-092), new 4.6 ProjectDay (AC-079 to AC-090), 4.6-4.9 renumbered to 4.7-4.10, 5 (Record 2 updated, Record 4 added with links: []), 6 (routing row), 7 (assets).
  Modules affected: MOD-005 (content, tags, At-a-glance, image), MOD-003 (one more item in the project list), MOD-002 (one more item in the Home projects list), new MOD-011.
  Phase: MOD-011 and the MOD-005 update join the current phase, Phase 4 — Deploy. Current Phase unchanged.
  Proposed source path for MOD-011 (no Source Path column in this Module Map): the ProjectDay record in the shared project data file, plus image files under site/public/ named projectday-*. The project detail modules share one data file and one [slug] page; ownership of those shared files is for the Tech Lead to decide.
  Notes for Doc-Sync: the site changed outside the framework since the last checkpoint (commits 6fb90ad..29b3a16, including site/public/multi-agent.png and project screenshots in f3834eb); heading commas in the MOD-005 section list still differ between the PRD and the spec; the ProjectDay source file has a header note "No public links yet: the repo is private and the App Store listing is not live." that is not one of the six sections (AC-082 requires no links to render; whether that note shows is not specified by this change).

- 2026-11-01 [SUBSTANTIVE] [ARCHITECTURAL] Source Paths for every module with the shared project files split per D1=A, and the PRD records the as-built site (content model, links, Images sections, Demo Video, domain, Home copy); PRD rev 1.5
  Approved by Leon in the coordinator session: "Approve as written (Recommended)" (multiple-choice answer to Q1/Q2/Q6/Q7; option text: "Values P1–P6 as shown above; substantive; architectural (adds /pstack:how + Tech Lead change review before Doc-Sync)."); Q3 "(a) Update both (Recommended)"; Q4 "Yes (Recommended)"; Q5 "mod-site-shell"
  Proposal: project-planning/pm-proposals/2026-11-01-rev-1-5-as-built-and-source-paths.md
  As-built values P1-P6 pasted by the coordinator from the code at f7de263 and shown to Leon before he approved; written to PRD 4.1, 4.3, 4.5 and 5 exactly as pasted.
  Answers Tech Lead Reviews "Review — 2026-11-01 — change (rev 1.4 cross-module: shared project files, out-of-framework drift)" (f7de263): D1 "A: split files (Recommended)"; D2 "Keep as-built (Recommended)" (also confirms the SitePlus+ Demo Video link, the Images sections, and www.leon-wu.com); D3 "Keep mine (Recommended)"; D4 "Per source file (Recommended)".
  Sections changed: header, ToC, 1 (Summer 2026 -> 2026/2027), 4.1 (Home copy: H1 emoji, no subtitle, CTA labels, bio, status line), 4.3 and 4.5 (links as prefix + linked label, Images section as section 4 of 9), 4.4 (links, AC-092), 4.10 (Contact intro 2026/2027), 5 (ProjectLink, SectionItem/ProjectSection, ProjectEntry featureImage/featureImageAlt/featureImageCaption, Records 1-3), 6 (canonical domain, Deployment domain), 7 (assets), new 9 Adopted Conventions CONV-001 to CONV-004.
  Module Map: Source Path column and Project files line added (owner mod-site-shell; Q5: the About photos, head.png and Subject.png stay with mod-site-shell). No module added, removed or renamed. Current Phase unchanged (Phase 4 — Deploy).
  Markers resolved: the domain/og:url AMBIGUITY marker in every page spec ("PRD lists domain name as a still-needed blocking asset ...") is resolved by PRD 6 and 7: https://www.leon-wu.com.
  Modules affected: MOD-002 (AC-011 to AC-015 follow the live Home copy, so the spec changes and the code does not), MOD-003 (owns the shared frame; splits projects-data.ts into one record file per project; adds feature-image alt and caption to the template), MOD-004 and MOD-006 (links, Images section, comma headings, "four projects"), MOD-005 (links form for AC-044 and AC-092), MOD-011 (record file and content model), MOD-010 (Contact intro line now says 2026/2027: spec-update), every page spec (domain).
  Notes for Doc-Sync: also fix the drift your 2026-11-01 Sync Report listed, which this entry triggers: the MOD-004 and MOD-006 specs drop commas the PRD has (D4: each page matches its own source file), and still say "three strong projects" and "all three project slugs"; production.md still has rev 1.2 text for the design palette, layout, data-file/markdown statements, and the Module Index descriptions for MOD-003 and MOD-004. Copy section 9 CONV-001 to CONV-004 into production.md.
  Notes for Tech Lead (change review): engineering order and the preservation list are in your 2026-11-01 review (option A order). Note A in the proposal: the Source Paths give site/data/projects/siteplus.ts to MOD-004, multi-agent-system.ts to MOD-005 and tabvault.ts to MOD-006, while option A has MOD-003 create them in the split; settle who creates each record file. The Project files line names some site/public/ files by description ("files no module pattern matches"), not by path; check that module_scope.py reads it as intended.

- 2026-11-01 [SUBSTANTIVE] Module Map Project files line becomes the folder site/public/ (E2), and PRD 9 adopts CONV-005, the project record-file contract; PRD rev 1.6
  Approved by Leon in the coordinator session: "Approve as written (Recommended)" (Q1, multiple-choice; question: "Approve the `Project files:` line (ending in `site/public/`, so mod-site-shell owns every unclaimed public file incl. og-image.png) and the two Decisions lines (E1 = A2; og-image.png stays open and non-blocking) exactly as written?"); Q4 "Yes, adopt (Recommended)" (option text: "PRD rev 1.6, substantive, not architectural. Puts the contract in production.md where the engineers read it."); Q2 substantive and Q3 not architectural follow from that Q4 option text.
  Proposal: project-planning/pm-proposals/2026-11-01-project-files-line.md
  Answers Tech Lead Reviews "Review — 2026-11-01 — change (rev 1.5: Source Paths, record-file split, engineering sequence)" (db8a1ba): E2 "site/public/ (Recommended)"; E1 "A2 (Recommended)", recorded in Decisions; E3 not answered, the OG image stays open and non-blocking (Leon separately asked the coordinator to draft an OG image for his approval; it stays open until he approves a file in asset/); Proposed Convention (record-file contract) adopted as CONV-005.
  Sections changed: header (Revision 1.6), 9 (CONV-005 added).
  No module added, removed or renamed; no Source Path in the table changed. Current Phase unchanged (Phase 4 — Deploy).
  Modules affected: MOD-001 (mod-site-shell now owns every unclaimed site/public/ file, including og-image.png); MOD-003, MOD-004, MOD-005, MOD-006, MOD-011 (CONV-005 governs the record files and projects-data.ts).
  Notes for Doc-Sync: rev 1.5 has not been synced yet. Sync rev 1.5 and 1.6 together with this Project files line. Copy CONV-005 into production.md.

- 2026-11-01 [SUBSTANTIVE] [ARCHITECTURAL] Add the full-screen interview Slideshow with a project menu and four tracks (new MOD-012, /slideshow, nav item 7, design from the design team), an image overlay on every project image (MOD-003), the ProjectDay screenshots (MOD-011), the Experience page per the new CV (MOD-007), and TabVault marked offline (MOD-005, MOD-006); PRD rev 1.7
  Approved by Leon in the coordinator session: "6. no, let the design team in @~/Desktop/MacBookPro/design-team/ 
  8. with the mouse, click always go to the next 
  19. use this pdf @~/Desktop/MacBookPro/cv/fullstack/Leon_Wu_CV.pdf 
  
  Other go with recommend"
  Proposal: project-planning/pm-proposals/2026-11-01-slideshow-lightbox-projectday-images.md (version 2.1, commit 5c47909)
  Numbering: Leon's "19." answers the CV question, which was number 19 in the list he first saw (before the TabVault wording question was dropped) and is Q18 in version 2.1 (coordinator's reading, which PM shares). Q19 of version 2.1 is covered by "Other go with recommend".
  Answers applied: Q1 approved with the answers below; Q2 substantive ("Other go with recommend"); Q3 architectural ("Other go with recommend"); Q4 label "Slideshow"; Q5 joins Phase 4 — Deploy; Q6 "no, let the design team in @~/Desktop/MacBookPro/design-team/": the preview is not the design reference; the slideshow's visual and interaction design comes from the design team (UX Researcher, UX Designer, UI Designer, Motion Designer), reviewed by the Design Lead (PASS) and approved by Leon, read from the files named in status.md Decisions; the deck stays the word-for-word content source; layout details that came from the preview (A5 two-column grid, diagram rows, name and position in the bottom corners, AC-104 "design reference") now defer to the approved design; Q7 Esc returns to the page the slideshow was opened from, or Home after a direct visit; Q8 "with the mouse, click always go to the next": a mouse click anywhere on a slide goes to the next slide and never back; card clicks still open cards and the close button still leaves; touch keeps the recommendation (tap right half next, left half back, swipes), the plain-text menu footer and the 16:9 frame; Q9 site theme, instant slide changes, project name and position only on project slides; Q10 offline after load, no installable copy, PDF export or presenter view; Q11 (c) every image on every project page; Q12 AC-108 to AC-110 as written; Q13 three-screen feature image plus Images section; Q14 caption and alt texts as written; Q15 MOD-012 "Interview Slideshow", mod-slideshow, site/app/slideshow/; Q16 Experience matches asset/content/experience.md, all three as written; Q17 "three real products" (done by the coordinator in d8afeef); Q18 "use this pdf @~/Desktop/MacBookPro/cv/fullstack/Leon_Wu_CV.pdf": asset/Leon_cv.pdf replaced (d8afeef); it still names tab-vault.com, recorded in PRD 6 and AC-117 as outside AC-117, and in Decisions; Q19 keep "6 skills created", B1 "13 gyms in greater Taipei" (done by the coordinator in d8afeef).
  Source commit: d8afeef replaces 2891561 and 4c7e58e as the source of the deck copy and the Experience copy. The new CV changed two Experience numbers: Exascend "growing monthly active users 3.5x, from 12,000 to 41,350" (was 350%), GoFreight "lifting conversion rate 67%" (was 670%); PRD 4.7 uses the bullets of experience.md at d8afeef word for word, and AC-118 adds "350%" and "670%" to the earlier copy that must not show.
  Sections changed: header, ToC, 1 (goal 5), 2 (shortcuts 1–7), 3 (nav row 7, AC-093, AC-094), 4.2 (image overlay, AC-108 to AC-110), 4.4 (At-a-glance, links, body copy note, AC-092 changed), 4.5 (At-a-glance, links, not-live note, AC-116, AC-117), 4.6 (feature image + caption, Images section, AC-084 and AC-089 changed, AC-111, AC-112), 4.7 (entries and education per the CV, AC-118, AC-119), new 4.11 Slideshow (AC-095 to AC-100, AC-102 to AC-107, AC-113 to AC-115; AC-101 not used), 5 (Records 2, 3 and 4, ExperienceEntry comment), 6 (routing row, keyboard shortcuts, Resume Hosting note on the new CV), 7 (assets; the slideshow design is a blocking asset for MOD-012 only), 8 (out of scope).
  Modules affected: MOD-001 (nav item 7, key 7, number keys ignored while the slideshow is open; AC-093, AC-094; copy the new asset/Leon_cv.pdf to site/public/Leon_cv.pdf, PRD 6 Resume Hosting; AC-017 download name unchanged), MOD-003 (image overlay in the shared template; AC-108 to AC-110; Images-section height for portrait screenshots per AC-111 if the template needs it), MOD-005 (record: atAGlance, description, links; AC-092; AC-117), MOD-006 (record: atAGlance, links, paragraphs from the source file; AC-116, AC-117), MOD-007 (entries and education; AC-118, AC-119), MOD-011 (record fields, Images section, image files, including a web-sized single Route screenshot for slide B5; AC-084, AC-089, AC-111, AC-112), new MOD-012 (AC-095 to AC-100, AC-102 to AC-107, AC-113 to AC-115, AC-117). MOD-004: no AC change; its two screenshots are used on slides C2 and C5, so renaming them breaks MOD-012. MOD-002 (Home): no tab-vault.com link and no "live" claim for TabVault; no change.
  New module: MOD-012 Interview Slideshow, directory mod-slideshow, Source Path site/app/slideshow/ (plus any site/public/slideshow-* image copies, per the Tech Lead; PM adds that pattern in a follow-up change). Depends on MOD-001 (nav entry and shortcut), MOD-004 (SitePlus+ screenshots), MOD-006 (tabvault-home.png), MOD-011 (three-screen image), mod-site-shell's Seattle photos in site/public/, and the approved slideshow design.
  Phase: all of this work joins the current phase, Phase 4 — Deploy. Current Phase unchanged.
  Order of runs: /pstack:how and the Tech Lead change review; then the design team on the slideshow (Design Lead PASS), Leon's approval, and a PM run that records it in Decisions; then Doc-Sync; then engineers in the order the Tech Lead sets, MOD-012 last.
  Notes for Doc-Sync: the deck copy is word for word from asset/content/interview-deck.md at d8afeef. The MOD-012 spec names the approved slideshow design files from status.md Decisions; asset/content/interview-deck-preview.html is not a design reference. The MOD-007 spec was last synced at PRD 1.2: rebuild it against PRD 4.7 as a whole; AC-118 and AC-119 replace its old entry and education content ACs (labelled AC-055 and AC-056 in that spec). In the MOD-005 spec, the At-a-glance and links ACs (AC-042, AC-044) follow the new Record 2; in the MOD-006 spec, the At-a-glance and links ACs (AC-054, AC-056 in that spec) follow AC-116. The ProjectDay Images heading is a PRD-level section like SitePlus+ and TabVault, not in the source file (CONV-003 still holds for every paragraph).
  Notes for Tech Lead (change review): section 5 of the proposal, plus: the design team runs after your review, so state any technical limits the slideshow design must respect (full screen, Esc, offline preload, 3 MB cap, static build); and with a mouse a click on a slide only goes forward, so Previous by mouse does not exist.

- 2026-11-01 [SUBSTANTIVE] Align the site with Leon's updated CV: sidebar title, SitePlus+ paragraphs, tags and demo link, Experience bullet and meta, Skills groups, no phone on the site, deck source commit, full-name order, served CV at cfa3367; PRD rev 1.8
  Approved by Leon in the coordinator session: "cv update @~/Desktop/MacBookPro/cv/fullstack/Leon_Wu_CV.pdf  other go with recommend, remove the phone on website then only leave the email"
  Leon's rule: "use the updated cv if information not align". Earlier answers (multiple-choice): Email "Keep Gmail on site"; Phone/city "Add both" (phone reversed by the quote above); Skills "CV + keep true extras"; Extras "Keep non-conflicting".
  Proposal: project-planning/pm-proposals/2026-11-01-cv-alignment-rev-1-8.md
  Answers applied: Q1 approved ("other go with recommend") with the changes below; Q2 substantive; Q3 CV name form "Tsan-Yu Wu (Leon)" (AC-125); Q4 subtitle "Full-Stack Software Engineer" (AC-124); Q5 tag "Spring Security / JWT" added; Q6 rule applied: the root description in site/app/layout.tsx names no role, degree or employer differently from the CV (coordinator's check of line 16), so it stays, Tech Lead confirms in the change review; Q7 (b) "Demo: " + "interactive walkthrough"; Q8 not architectural; Q9 changed by "remove the phone on website then only leave the email": no phone anywhere on the site, email is the contact method, Contact order is Email, LinkedIn, GitHub, Resume (AC-123), plus AC-126 (no phone number in the built HTML of any route). "Seattle, WA" on Contact was not addressed by Leon: left out until he answers (open question). "cv update @~/Desktop/MacBookPro/cv/fullstack/Leon_Wu_CV.pdf": asset/Leon_cv.pdf replaced by the coordinator (cfa3367, text unchanged, multi-agent link fixed); MOD-001 serves the file at cfa3367.
  Changes from the proposal as written: no Phone or Location row in 4.10 or in section 7; AC-123 rewritten for the four items; AC-126 added; section 6 Resume Hosting cites cfa3367 and puts the PDF's contents (which list the phone) outside AC-126; section 5 Record 1 tags and Link 1 updated to match 4.3 (same values as Q5 and Q7).
  Source commit: e479e22 replaces d8afeef for experience.md and interview-deck.md; skills.md and case-study-siteplus-detailed.md are cited at e479e22. CV: cfa3367.
  Sections changed: header, 2 (subtitle, AC-124), 4.3 (source commit, tags, Link 1, AC-120), 4.7 (source note, Exascend bullet, AC-118 changed, AC-121), 4.9 (source file, six groups, AC-122), 4.10 (email-only note, AC-123, AC-126), 4.11 (source commit), 5 (Record 1 tags and Link 1), 6 (full-name rule, AC-125; Resume Hosting at cfa3367), 7 (skills content asset).
  Modules affected: MOD-001 (sidebar subtitle AC-124; full name in layout metadata AC-125; copy asset/Leon_cv.pdf at cfa3367 to site/public/Leon_cv.pdf; AC-126 for shell-owned copy), MOD-002 (AC-125, AC-126 if its copy or metadata is affected), MOD-004 (paragraphs incl. the missing "Resilience on purpose" paragraph, tags, demo link; AC-120), MOD-007 (Exascend bullet, meta description; AC-118, AC-121), MOD-008 (full name; AC-125), MOD-009 (groups and meta; AC-122), MOD-010 (Contact order, no phone; AC-123, AC-126; full name in its meta), MOD-012 (deck copy at e479e22; AC-100 unchanged; AC-126), and any other page whose metadata names Leon in full (AC-125; the Tech Lead confirms the list).
  No module added, removed or renamed. Current Phase unchanged (Phase 4 — Deploy).
  Order of runs: rev 1.7 and 1.8 share one /pstack:how, one Tech Lead change review and one Doc-Sync.
  Notes for Doc-Sync: rev 1.7 has not been synced; sync 1.7 and 1.8 together. The MOD-007, MOD-009 and MOD-010 specs were last synced at PRD 1.2: rebuild each against PRD 4.7, 4.9 and 4.10 as a whole. AC-118 changed in 1.8 (22.3% allowed). AC-126 is site-wide: each module's spec carries it for its own routes. Deck copy is word for word from interview-deck.md at e479e22.
  Notes for Tech Lead (change review): AC-124 asks for "Full-Stack Software Engineer" on one line in a w-64 sidebar; say if it needs a smaller size or a layout change. Confirm the root description stays (Q6). Leon's open sign-offs AC-017 (mod-home) and AC-091 (mod-project-multi-agent) are unaffected by this change.
- 2026-11-01 [SUBSTANTIVE] [ARCHITECTURAL] Record Leon's slideshow design approval (ac1a07d), apply Tech Lead T1-T6 (CONV-006, CONV-007, section-image alt texts, number keys off while an overlay is open), the "Leon Wu" name rule, the design decisions (F hint, menu title, timeline cards, A2, controls) and the MOD-011 file names; PRD rev 1.9
  Approved by Leon in the coordinator session: "approve all recommendations" (answers to questions 1-8 of the proposal: 1 yes, PRD rev 1.9 and status.md entries as written; 2 yes, the three new alt texts; 3 yes, "Leon Wu" replaces both full-name forms, rest of each description unchanged; 4 yes, Images height cap on every project page; 5 leave the Multi-Agent project page wording unchanged in this revision; 6 yes, approval of the design files as they stand at ac1a07d, review 2 section 3 taking priority; 7 substantive; 8 architectural)
  Proposal: project-planning/pm-proposals/2026-11-01-design-approval-and-tech-lead-answers-rev-1-9.md
  Answers Tech Lead Reviews "Review — 2026-11-01 — change (rev 1.7 + rev 1.8: slideshow, image overlay, ProjectDay images, CV alignment)" (0051840). Leon: "Use Leon Wu in the website other go with recommendation": T1 (b); T2 (a), alt texts in PRD 4.3, 4.5 and 5 (three new ones approved by Leon, question 2); T3 (a); T4 (a); T5 (a) applied to the name "Leon Wu", T5 (b) not adopted; T6 yes (CONV-006 and CONV-007 in PRD 9, CONV-006's hint rule changed by L-2). Q4: the planned site/public/slideshow-* Module Map pattern is dropped. Q6 Images height cap for every project page (AC-128). Q10 and the MOD-011 file names in PRD 4.6 and AC-112.
  Corrects the rev 1.8 entry's Q6 note: the root description in site/app/layout.tsx:16 does not stay as is. It named "Tsan-Yu (Leon) Wu", which is shown on /projects and the 404 page; MOD-001 changes the name to "Leon Wu" (AC-125). MOD-008 (about/page.tsx:6,10,22) was missing from the rev 1.8 affected modules and is added.
  Design decisions applied (Design Lead review 2 section 4; Leon: "L-9 go with design lead suggestion / Other go with recommendation", plus his three changes): L-1 no mouse back (no change); L-2 F hint whenever windowed and full screen is available (Opening, AC-096, CONV-006); L-3 the hint is a pointer-only button that enters full screen; L-4 and L-5 start-link highlight clears once any slide of that project is shown (Menu, Start link, AC-113, AC-115); L-6 moot; L-7 idle pointer hides after 3 s in full screen (Look, AC-130); L-8 key repeats ignored (Controls, AC-131); L-9 A1 copy "6 agents on the dev team" (deck 02e9c80, AC-100 covers it); L-10 no Role/Stack labels (On-screen text); L-11 2 s (unchanged "about 2 seconds"); P-1 Enter or Space on the close button leaves; P-2 a click outside the frame counts as a click on the slide (AC-098); P-3 pen = touch; P-4 pinch-zoom kept; P-5 timeline colon and comma at line breaks are not drawn (On-screen text). Leon's changes: no "Details" cue and no key on the timeline cards, click a card opens it, otherwise Next to slide 3 (Hidden job slides, AC-114); menu title always "Pick a project" (Menu, AC-113); A2 bar "I approve the key handoffs", connected only to the handoffs into PM, Doc-Sync and Shipped, Retrospective a separate line back to the system (On-screen text).
  Multi-Agent project page (4.4, Record 2): "Human-approved at every handoff" and the caption "Human approval sits on every arrow" stay unchanged in this revision (Leon, question 5); the slide A2 bar and the project page now word approvals differently.
  Source commit: interview-deck.md at ac1a07d replaces e479e22 as the deck source (A1, A2, slide 2 note, menu title). PRD 4.11 Source file line changes to "(as of commit ac1a07d)".
  Sections changed: header; 3 (Slideshow icon); 4.2 (Images sections, alt text, AC-127, AC-128); 4.3 and 4.5 (alt tables); 4.6 (file names, Images table, AC-112); 4.7 (AC-121); 4.9 (AC-122); 4.11 (source commit, On-screen text, Slide images B2 and B5, Hidden job slides, Menu, Start link, Opening, Controls, Look, AC-096, AC-098, AC-113, AC-114, AC-115, AC-130, AC-131); 5 (SectionItem alt, Records 1, 3 and 4); 6 (keyboard suppression, AC-129, name rule, AC-125); 7 (slideshow design confirmed); 9 (CONV-006, CONV-007).
  Modules affected: MOD-001 (CONV-006, CONV-007, Slideshow icon from slideshow-ui.md 14, AC-129, AC-125 at layout.tsx:16); MOD-003 (SectionItem alt and rendering it, AC-127, AC-128 height cap on every project page, the overlay as a native dialog per CONV-007); MOD-004 (feature and section alts, AC-127); MOD-006 (feature and section alts, AC-127; AC-128 shrinks tabvault-mobile.jpeg); MOD-007 (AC-121 name); MOD-008 (AC-125, about meta); MOD-009 (AC-122 name); MOD-010 (AC-125, contact meta); MOD-011 (file names, alts in its record's section items, AC-112 800,000-byte allocation); MOD-012 (approved design files, 4.11 changes, AC-096, AC-098, AC-100 via the deck at ac1a07d, AC-113, AC-114, AC-115, AC-130, AC-131, CONV-006, CONV-007). MOD-002 and MOD-005: no change.
  No module added, removed or renamed. Module Map unchanged. Current Phase unchanged (Phase 4 — Deploy).
  Order of runs: the coordinator runs /pstack:how on the affected code (Sidebar key handler and slideshow entry, the [slug] image rendering), then claude --agent tech-lead "change review" (rule on L-2's change to CONV-006 and the design team's T1-T6 in slideshow-review-2.md section 4), then claude --agent doc-sync syncing rev 1.7, 1.8 and 1.9 together, then the engineers in the Tech Lead's order.
  Notes for Doc-Sync: rev 1.7 and 1.8 are not synced; sync 1.7, 1.8 and 1.9 together. The MOD-012 spec names the approved design files from status.md Decisions (2026-11-01, design approval) at ac1a07d, and Design Lead review 2 section 3 corrects UI 6.4 and 7.4. slideshow-ui.md section 14 is a MOD-001 input (AC-093). In the deck, slide 2's "(opens the ... detail slide)" annotations and the note under the timeline are not on-screen text (Tech Lead's Doc-Sync note).
  Notes for Tech Lead (change review): L-2 changes CONV-006's hint rule (Design Lead review 2: "Tech Lead review for L-2"); the design team's T1-T6 (edge colour within limit 3, ⇄ drawn in SVG with a hidden exact string, F-hint sizing, B2 dependency on MOD-011, WCAG 2.1.4 single-key risk, reduced motion site-wide later); UX hand-offs in slideshow-ux.md 14 (pointerType handling, touch-action, key/code matching, skip focus()). AC-127 needs MOD-003's alt field before MOD-004, 006 and 011 fill it (same staging as E1).
- 2026-11-01 [SUBSTANTIVE] Answer Tech Lead D1-D3: CONV-006 `fs` field and hint timing (AC-096), single-key shortcuts as a known accessibility limitation, SectionItem alt stays optional; no feature branch; PRD rev 1.10
  Approved by Leon in the coordinator session: "4. no need a branch
  other go with recommend and approve" (D1 (a), D2 (a), D3 (a), no feature branch); proposal approval and classification (questions 1-3, recommendations yes, substantive, not architectural): "approve all recommendations"
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
- 2026-11-01 [SUBSTANTIVE] Log the Tech Lead's AC-096 refused-request QA method for the MOD-012 spec; record the About page as built (AC-132 replaces "no photo"); page headings for Experience, About and Contact; "Leon Wu" in the Purpose line; correct the rev 1.7 AC-017 note; PRD rev 1.11
  Approved by Leon in the coordinator session: "approve all recommendations" (questions 1-10 of the proposal, each with one recommendation: 1 yes, 2 yes, 3 yes, 4 keep empty alt text, 5 yes, 6 yes, 7 yes, 8 substantive, 9 not architectural, 10 MOD-003 may start, MOD-008 on hold until the rev 1.11 sync)
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
- 2026-11-01 [SUBSTANTIVE] TabVault keeps its shorter case-study text: exception to CONV-003 for /projects/tabvault, AC-133 pins the text at c612306; PRD rev 1.12
  Approved by Leon in the coordinator session: "TabVault go with (b)" and, for the proposal's questions 1-6 (proposal commit 198ad17), "Approve all recommendations" (1 (a), 2 yes, 3 yes, 4 yes keep AC-116, 5 substantive not architectural, 6 raise the SitePlus+ diagram/data-model tree at the Phase 4 integration review)
  Proposal: project-planning/pm-proposals/2026-11-01-tabvault-condensed-text-rev-1-12.md
  Answers: MOD-006 QA Run 4 (f6c603f), "Requirement check: CONV-003 word for word" (bugs-found). Not a bug: the condensed paragraphs are intended.
  Sections changed: header; 4.5 (Body copy, AC-133); 9 (CONV-003 exception sentence).
  Modules affected: MOD-006 only (spec: Body copy exception and AC-133; AC-116 unchanged). No code change expected: the page at c612306 is the reference. No module added, removed or renamed. Module Map unchanged. Current Phase unchanged (Phase 4 — Deploy).
  Notes for Doc-Sync:
    MOD-006 spec: replace the word-for-word requirement for paragraphs outside "The problem" and "Impact" with PRD 4.5 Body copy; add AC-133. QA closes Run 4's open item "CONV-003 bugs-found" as "not a bug (PRD rev 1.12)" on its next MOD-006 run, after checking AC-133.
    production.md: copy CONV-003 with its new exception sentence.

---

## Build Config

```
Build: npm run build
Lint:  npm run lint
Test:  (none — static site, no automated test suite defined)
```

*Note: Commands assume execution from the `site/` subdirectory where the Next.js scaffold lives.*

---

## Decisions

- 2026-11-01 Q5 (rev 1.5): the unmatched images in site/public/ are not project screenshots. IMG_6353.jpg, IMG_6591.jpg, IMG_6605.jpg, IMG_6875.JPG and 4D0BDA8A-B273-40DC-BD3D-3098AF6BBB73.JPG are About photos, head.png is used by the Sidebar, and Subject.png by globals.css. All seven stay with mod-site-shell as project files. Leon: "mod-site-shell".
- 2026-11-01 E1 (rev 1.5 change review): record files are created by option A2. MOD-003 adds featureImageAlt and featureImageCaption first; MOD-005, MOD-004, MOD-006 and MOD-011 each write their own record file once, with updated content; then one MOD-003 cutover imports all four, with ProjectDay second. 7 engineer runs. Leon: "A2 (Recommended)".
- 2026-11-01 E3 (rev 1.5 change review): og-image.png not answered yet; it stays an open, non-blocking item (PRD 7). Owner when supplied: mod-site-shell (by E2). Until then every page's og:image returns 404.
- 2026-11-01 Q6 (rev 1.7): the interview deck preview (asset/content/interview-deck-preview.html) is not the slideshow's design reference. The design team in /Users/tsan/Desktop/MacBookPro/design-team/ designs the slideshow; the Design Lead reviews it; Leon approves it. Leon: "6. no, let the design team in @~/Desktop/MacBookPro/design-team/". Leon's design approval, with the approved file paths and commit, is recorded here by PM before Doc-Sync. Status: done, see the 2026-11-01 slideshow design approval entry below.
- 2026-11-01 Q8 (rev 1.7): with a mouse, a click anywhere on a slide goes to the next slide and never back. Leon: "8. with the mouse, click always go to the next". Phone taps were not addressed, so they keep the recommendation ("Other go with recommend"): tap right half next, left half back, plus swipes. Clicks on cards and the close button keep their own action.
- 2026-11-01 Q18 (rev 1.7): Leon chose his newer CV, cv/fullstack/Leon_Wu_CV.pdf, now asset/Leon_cv.pdf (d8afeef). Leon: "19. use this pdf @~/Desktop/MacBookPro/cv/fullstack/Leon_Wu_CV.pdf". It still names tab-vault.com ("Directed the system to build TabVault (tab-vault.com), a deployed Chrome extension, PWA, and Spring Boot backend"). AC-117 does not cover the PDF's contents. Open for Leon, non-blocking: edit the CV later if he wants it to match the site.
- 2026-11-01 (rev 1.8): the multi-agent repo link on the CV. The CV at d8afeef linked github.com/LeonWu813/multi-agent-development-system (HTTP 404). Leon replaced the CV (cfa3367, text unchanged); its link now targets https://github.com/LeonWu813/multi-agent-software-development-system, which resolves and matches the site. Fixed; no action.
- 2026-11-01 (rev 1.8): no phone number anywhere on the site; email is the contact method. Leon: "remove the phone on website then only leave the email". This reverses his earlier "Add both" for the phone. The served CV PDF still lists the phone and is outside AC-126. "Seattle, WA" on the Contact page: not addressed, left out; open question for Leon.
- 2026-11-01 Slideshow design approval (rev 1.9). Leon approved the slideshow design: "approve both" (the design and the A2 wording), choosing the A2 bar "I approve the key handoffs". Approved files, at commit ac1a07d, in project-planning/design/ux-team/: slideshow-brief.md, slideshow-research.md, slideshow-ux.md, slideshow-ui.md (section 14 is the sidebar Slideshow icon, a MOD-001 input), slideshow-motion.md, slideshow-mock.html, the 40 slideshow-mock-*.png, reviews/slideshow-review-1.md and reviews/slideshow-review-2.md. Design Lead review 2 PASSed revision 1 (542ac5c). Revision 2 (8d15ec7, Leon's own changes) and the A2 wording (ac1a07d, text only, PNGs re-rendered) were not re-reviewed by the Design Lead; Leon approved them as they stand ("approve all recommendations", question 6). The three nits in review 2 section 3 are not fixed in the files; where they differ, review 2 section 3 wins (UI 6.4: the F hint is sized in em from the frame, not px; UI 7.4: the photos are about 51% larger, not 23%; text-wrap fallbacks in Firefox and older Safari are not regressions). Engineers and QA read the design from these files at ac1a07d.
- 2026-11-01 T1-T6 (rev 1.7 + 1.8 change review). Leon: "Use Leon Wu in the website other go with recommendation". T1 (b) Sidebar hides itself on /slideshow; T2 (a) alt texts for the six SitePlus+ and TabVault images; T3 (a) number keys do nothing while an overlay is open; T4 (a) PRD as written for an upright phone; T5: the name becomes "Leon Wu" (not "Tsan-Yu Wu (Leon)"); the em dashes stay (T5 (b) not adopted); T6 CONV-006 and CONV-007 adopted.
- 2026-11-01 Name on the site (rev 1.9). Leon: "Use Leon Wu in the website". The site names him "Leon Wu" everywhere, replacing "Tsan-Yu (Leon) Wu" and rev 1.8's "Tsan-Yu Wu (Leon)" (AC-125 changed). The CV PDF is outside this rule.
- 2026-11-01 Q6 (rev 1.8) corrected. The rev 1.8 note "the root description stays" was wrong: layout.tsx:16 named "Tsan-Yu (Leon) Wu" (Tech Lead, 0051840). MOD-001 changes the name to "Leon Wu" and keeps the rest of the text.
- 2026-11-01 The planned site/public/slideshow-* Module Map pattern (rev 1.7) is dropped: no image copies are needed (Tech Lead Q4). A future copy goes in site/app/slideshow/images/, already MOD-012's.
- 2026-11-01 "Seattle, WA" on the Contact page: closed, stays off. Leon gave no answer in two rounds; it reopens only if he raises it.
- 2026-11-01 D1 (rev 1.9 change review): the slideshow learns from MOD-001 whether a full-screen request was made: CONV-006 gains an `fs` field. Opening from the sidebar never flashes the "Press F" hint; a direct visit shows it at once; a refused request shows it within about 1.5 s. Leon: "other go with recommend and approve" (D1 (a)). PRD rev 1.10 (CONV-006, AC-096).
- 2026-11-01 D2 (rev 1.9 change review, design T5): single-key shortcuts (site 1-7; slideshow F, M, digits) stay with no way to turn them off. Leon accepts the WCAG 2.1.4 risk as a known accessibility limitation (PRD 8). Leon: "other go with recommend and approve" (D2 (a)).
- 2026-11-01 D3 (rev 1.9 change review): SectionItem.alt stays optional; QA checks the built project pages for empty alts (AC-127). "Make alt required" is a Phase 4 integration-review candidate, logged by Tech Lead (b8395f1). Leon: "other go with recommend and approve" (D3 (a)).
- 2026-11-01 Branch: no feature branch for the rev 1.7-1.10 engineering; work stays on main. Leon: "4. no need a branch". Every push to main deploys, so do not push between MOD-012 and MOD-001 unless both are in (Tech Lead, b8395f1).
- 2026-11-01 AC-096 sign-off (rev 1.11): QA tests AC-096's refused-request case with the Tech Lead's method (17e70cc), with no human step. Leon does the human part when MOD-012 and MOD-001 are QA'd together: on the build, on his Mac in desktop Chrome, Safari and Firefox, the Slideshow nav item and, separately, key 7; "Press F for full screen" never appears, not even for a moment; on iPhone Safari no hint shows. Leon: "approve all recommendations" (question 2: yes).
- 2026-11-01 About page (rev 1.11): the About page stays as Leon built it on 2026-06-29 (sections "Meeee", "Hobbies", "Background", five photos). The old "no photo" rule (MOD-008 AC-063) is dropped. The photos keep empty alt text. Leon: "approve all recommendations" (question 3: yes; question 4: keep empty alt text).
- 2026-11-01 TabVault case-study text (rev 1.12): the TabVault page keeps the shorter text from Leon's own June edits instead of the full asset/content/case-study-tabvault-detailed.md. The reference is the page text at c612306 (AC-133); "The problem" and "Impact" still match the source (AC-116). Leon: "TabVault go with (b)"; "Approve all recommendations" (question 1: (a)).
- 2026-11-01 SitePlus+ diagram and data-model tree: not on the page for now. The record format holds only paragraphs and images (MOD-004 QA, dd390a9). Raised at the Phase 4 integration review as a candidate (Tech Lead decides how, if Leon wants it shown). Leon: "Approve all recommendations" (question 6).

---

## Module Map

| MOD-ID  | Directory                  | Module Name                          | Source Path |
|---------|----------------------------|--------------------------------------|-------------|
| MOD-001 | mod-site-shell             | Site Shell (Layout, Sidebar, Nav, Footer, Dark Mode) | site/app/layout.tsx, site/app/globals.css, site/app/favicon.ico, site/app/apple-touch-icon.png, site/components/Sidebar.tsx, site/components/ThemeToggle.tsx, site/components/TopNav.tsx |
| MOD-002 | mod-home                   | Home Page                            | site/app/page.tsx |
| MOD-003 | mod-projects-grid          | Projects Grid Page                   | site/app/projects/, site/components/ProjectList.tsx, site/components/ProjectMobileNav.tsx, site/data/projects-data.ts |
| MOD-004 | mod-project-marketing      | Project Detail: SitePlus+            | site/data/projects/siteplus.ts, site/public/siteplus* |
| MOD-005 | mod-project-multi-agent    | Project Detail: Multi-Agent System   | site/data/projects/multi-agent-system.ts, site/public/multi-agent* |
| MOD-006 | mod-project-tabvault       | Project Detail: TabVault             | site/data/projects/tabvault.ts, site/public/tabvault-* |
| MOD-007 | mod-experience             | Experience Page                      | site/app/experience/, site/data/experience-data.ts |
| MOD-008 | mod-about                  | About Page                           | site/app/about/ |
| MOD-009 | mod-skills                 | Skills Page                          | site/app/skills/, site/data/skills-data.ts |
| MOD-010 | mod-contact                | Contact Page                         | site/app/contact/ |
| MOD-011 | mod-project-projectday     | Project Detail: ProjectDay           | site/data/projects/projectday.ts, site/public/projectday-* |
| MOD-012 | mod-slideshow              | Interview Slideshow                  | site/app/slideshow/ |

Project files: mod-site-shell | .gitignore, site/package.json, site/package-lock.json, site/next.config.ts, site/tsconfig.json, site/eslint.config.mjs, site/postcss.config.mjs, site/.gitignore, site/AGENTS.md, site/CLAUDE.md, site/README.md, site/public/

---

## Tech Lead Reviews

### Review — 2026-06-28 — init

**Concerns** (must address before proceeding):

- **`params` is a Promise in Next.js 16 — breaking API change**: The docs in `node_modules/next/dist/docs/01-app/03-api-reference/03-file-conventions/page.md` confirm that `params` is now `Promise<{ slug: string }>` and must be awaited: `const { slug } = await params`. Every project detail page using a `[slug]` dynamic segment must declare `async function Page({ params }: { params: Promise<{ slug: string }> })` and await params before reading the slug. Treating params as a plain synchronous object (as in Next.js 14 and earlier examples) will cause a TypeScript error or runtime mismatch. This applies to both the page component and any `generateMetadata` function in the same file.

- **`next/image` default loader is incompatible with `output: 'export'`**: The static exports guide confirms the default `next/image` loader is an unsupported feature under `output: 'export'`. If project screenshots or an OG image are added later and use `<Image>`, the build will break unless a custom loader is configured. The recommended resolution is to not use `output: 'export'` at all — see the Deployment recommendation below. This must be decided in MOD-001 before any image component is written.

- **Dark mode hydration flash**: The PRD requires reading `localStorage` and defaulting to `prefers-color-scheme`, then persisting overrides. `localStorage` is a browser-only API — it is not available during server-side rendering. If the `dark` class is applied only inside a `useEffect`, users will see a flash of the wrong theme on every page load. The only reliable fix is a blocking inline `<script>` tag injected into `<html>` before any body content, written as a raw string via `dangerouslySetInnerHTML`. This script must run synchronously before React hydrates — it cannot be wrapped in a React component or a Next.js `<Script>` tag with `strategy="lazyOnload"`. The engineer must add this script directly to `app/layout.tsx` as the first child of `<html>`. Any implementation that relies on `useEffect` alone will produce a visible flash in production.

- **Tailwind v4 dark mode `dark:` utilities require an explicit `@variant` declaration**: The current `globals.css` defines `.dark { ... }` CSS custom property overrides correctly, but that alone does not enable Tailwind's `dark:` prefix utilities. In Tailwind v4 with class-based dark mode, the variant must be explicitly registered: `@variant dark (&:where(.dark, .dark *));` must appear in `globals.css`. Without this line, any `dark:bg-surface` or `dark:text-text-muted` utility class in a component will compile to an empty rule. The custom property overrides and the Tailwind variant registration are two separate concerns — both are required.

- **Google Fonts `@import` in `globals.css` is wrong for App Router and hurts performance**: `globals.css` already contains `@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap")`. This causes a browser-to-Google network request on every page load, is render-blocking until the stylesheet resolves, leaks visitor IPs to Google, and undermines the `>90 Lighthouse` goal. The App Router migration guide explicitly states that `@import` font loading does not work in `app/` and that `next/font` must be used instead. The `@import` line and the `--font-sans` declaration in `@theme inline` must both be removed. Font loading must be moved to `layout.tsx` using `import { Roboto } from 'next/font/google'` with `weight: ['400', '500', '700']`, `subsets: ['latin']`, `display: 'swap'`, and `variable: '--font-roboto'`. The scaffold currently loads `Geist` and `Geist_Mono` — those imports must be deleted entirely.

**Recommendations** (suggested improvements):

- **Do not add `output: 'export'` to `next.config.ts` — deploy to Vercel as a standard Node.js server**: Vercel is already the chosen host. Vercel's native Next.js integration handles App Router deployments with zero configuration and no `output` setting required. All pages will still be statically rendered at build time because they have no dynamic server-side dependencies. Keeping the default output mode means `next/image` works without a custom loader, Image Optimization is available for free on Vercel, and no future capability is foreclosed. Leave `next.config.ts` as is (or add only `reactStrictMode: true`).

- **Collapse the three project detail directories into a single `[slug]` dynamic route**: The scaffold has three empty directories: `app/projects/marketing-analytics/`, `app/projects/multi-agent-system/`, `app/projects/tabvault/`. These must be deleted and replaced with a single `app/projects/[slug]/page.tsx`. `generateStaticParams` returns `projects.map(p => ({ slug: p.detailSlug }))` from the data file. The page awaits params, looks up the matching project record, reads the case study markdown, and renders it. Adding a fourth project later requires only a new data record. Three copies of the same template would be an immediate maintenance burden.

- **Do not install shadcn/ui for the sidebar — build it from scratch**: The sidebar is a fixed `<aside>` on desktop, hidden off-canvas on mobile with a hamburger toggle. This is approximately 50 lines of Tailwind and a single `useState` in a Client Component. No component library is warranted. Installing shadcn/ui adds opinionated component structure and a larger dependency surface for one layout primitive. The portfolio itself is evidence of frontend skill — a hand-built sidebar is a stronger signal than one generated by a CLI tool.

- **Render case study content from the markdown source files, not inline TypeScript strings**: The three case study files are confirmed at `asset/content/case-study-*.md`. Each is multi-section prose (~600-700 words). Embedding that content as TypeScript template literals in a data file creates an unreadable and unmaintainable source. The correct approach is to read the `.md` file from disk in the Server Component using `fs.readFileSync` (resolved via `path.join(process.cwd(), '../asset/content/', filename)`) and parse it with a lightweight library (`marked` is 6KB minified; `remark` is also appropriate). Alternatively, copy the `.md` files into `site/content/` during setup to keep them inside the project root. Either way, the data file's `caseStudyFile` field serves as the file reference. Do not inline the prose as strings.

- **Use the `app/` file conventions for favicon and web manifest — do not use `public/` with manual link tags**: The `asset/favicon_io/` directory contains `favicon.ico`, `apple-touch-icon.png`, and `site.webmanifest`. In Next.js App Router, placing `favicon.ico` and `apple-icon.png` directly in `app/` causes Next.js to generate the correct `<link>` tags automatically, without any manual metadata configuration. Copy these files to `site/app/` rather than `site/public/`. This is the idiomatic Next.js 16 approach documented under file conventions.

- **Serve the resume PDF as a plain `<a download>` link, not `next/link`**: `next/link` performs client-side navigation and will not trigger a file download. Copy `asset/Leon_cv.pdf` to `site/public/Leon_cv.pdf` and link with `<a href="/Leon_cv.pdf" download="Leon_Wu_Resume.pdf">`. The `download` attribute triggers the browser save dialog with a clean filename.

- **Add `dynamicParams: false` as a route segment config export in the `[slug]` page**: With `output` unset (Node server deploy), Next.js will attempt to render unknown slugs on demand if `dynamicParams` is not explicitly set to `false`. Since all valid project slugs are enumerated at build time, set `export const dynamicParams = false` in `app/projects/[slug]/page.tsx`. This ensures a 404 is returned for any slug not in `generateStaticParams`, which is the correct behavior.

**Approved**:

- The module breakdown (MOD-001 through MOD-010) is well-structured. MOD-001 as the site shell covering layout, sidebar, nav, and dark mode is the right first module — everything else depends on it.
- The `Project` TypeScript interface in PRD section 5 is well-designed. `detailSlug` correctly decouples the URL slug from the data `id`. `extraLinks` handles the multi-repo case for the multi-agent project.
- Tailwind v4 `@theme inline` block in `globals.css` is the correct approach — no `tailwind.config.js` exists or is needed in v4. Color tokens are correctly defined.
- `@tailwindcss/postcss` in `postcss.config.mjs` is the correct v4 PostCSS plugin.
- `@/*` path alias in `tsconfig.json` is set up correctly and points to the site root.
- The nine-route information architecture maps cleanly to App Router `app/` directories with no ambiguity.
- Metadata API (`export const metadata: Metadata`) is the correct SEO approach for App Router — no `<Head>` component needed.
- Using a real `mailto:` link on the Contact page rather than a form eliminates all server-side concerns and is the correct call for a static portfolio.
- All content assets confirmed present: `case-study-marketing-analytics.md`, `case-study-multi-agent-system.md`, `case-study-tabvault.md`, `site-copy.md`, `experience.md`, `skills.md`, `favicon_io/`, `Leon_cv.pdf`.
- Vercel deployment with GitHub integration is the right host for this project. Zero infrastructure overhead.

**Proposed Shared Conventions** (for Doc-Sync to carry into production.md):

- All route layouts and page components are Server Components by default. Add `'use client'` only when a component requires `useState`, `useEffect`, or browser APIs. The dark mode toggle and mobile nav toggle are the only expected Client Components in MOD-001. Do not mark page or layout files as client components.
- Dynamic route pages must declare `params` as `Promise<{ slug: string }>` and always await it: `const { slug } = await params`. This applies to both page components and `generateMetadata` functions.
- The `dark` CSS class on `<html>` is the single source of truth for the active theme. It is set by a blocking inline script in `layout.tsx` (reads `localStorage`, falls back to `prefers-color-scheme`). The Client Component toggle writes to `localStorage` and toggles the class on `document.documentElement`. No other component should read or write the theme state.
- Tailwind v4 dark mode variant must be registered in `globals.css`: `@variant dark (&:where(.dark, .dark *));`. Theme values use CSS custom properties defined in the `.dark` block. Use `dark:` utilities freely once the variant is registered.
- Roboto is loaded exclusively via `next/font/google` in `layout.tsx`. No `@import url()` for any Google Font anywhere in the codebase.
- External links (LinkedIn, GitHub, live demos) must always include `target="_blank" rel="noopener noreferrer"`.
- The resume PDF is served from `public/Leon_cv.pdf` via a plain `<a href="/Leon_cv.pdf" download="Leon_Wu_Resume.pdf">` — not `next/link`.
- Path alias `@/*` maps to the `site/` root. Use it for all cross-directory imports. No `../../` relative imports except within the same feature directory.
- File naming follows SKILL.md defaults: React component files use PascalCase (`Sidebar.tsx`, `ProjectCard.tsx`); data, utility, and config files use kebab-case (`project-data.ts`, `markdown-utils.ts`).
- `generateStaticParams` iterates the data array — it never contains hard-coded slug strings. Adding a project means adding a record to the data file only.

### Setup Confirmation — 2026-06-28

Infrastructure verified against live scaffold at `site/`.

**Runtime versions confirmed:**
- Node.js v24.14.1 (exceeds >= 20.x LTS requirement)
- npm 11.11.0 (exceeds >= 10.x requirement)

**Lint status:** PASS — `npm run lint` exits with zero errors or warnings on the unmodified scaffold.

**Build status:** PASS — `npm run build` compiles successfully and generates static pages for `/` and `/_not-found`. One CSS warning is emitted about the `@import url(...)` order in `globals.css` — this is a warning only, not an error, and is resolved by MOD-001 scaffold cleanup.

**`marked` installed:** v18.0.5 added to `dependencies` in `site/package.json`.

**Assets verified present:**
- `site/app/favicon.ico` — confirmed (App Router file convention)
- `site/public/Leon_cv.pdf` — confirmed (served as plain `<a download>` link)

**Known scaffold items MOD-001 engineer must clean up (not blockers, but required before MOD-001 is complete):**
1. `site/app/layout.tsx` — `Geist` and `Geist_Mono` imports must be deleted; replaced with `Roboto` via `next/font/google`.
2. `site/app/globals.css` line 2 — `@import url("https://fonts.googleapis.com/css2?family=Roboto:...")` must be removed; font loading moves to `layout.tsx`.
3. `site/app/projects/marketing-analytics/`, `multi-agent-system/`, `tabvault/` — three empty static directories must be deleted and replaced with a single `app/projects/[slug]/page.tsx` dynamic route.
4. `globals.css` — `@variant dark (&:where(.dark, .dark *));` must be added for Tailwind v4 dark mode utilities to compile correctly.
5. `layout.tsx` — blocking inline theme script must be added as the first child of `<html>` to prevent dark mode hydration flash.

**`project-planning/setup.md` created:** step-by-step runbook covering runtime requirements, repository layout, dependency install, dev server, production build, lint, scaffold cleanup checklist, and asset locations.

Environment is ready for MOD-001. Engineer may begin immediately.

### Review — 2026-11-01 — change (rev 1.4 cross-module: shared project files, out-of-framework drift)

pstack input: none. No findings file exists for this review, and none was named in the invocation.

**Baseline checked at 8fb7253:** `npm run build` passes (12 static pages; /projects/[slug] builds multi-agent-system, siteplus, tabvault). `npm run lint` shows 0 errors and 9 `@next/next/no-img-element` warnings, all from Leon's `<img>` tags. Engineers must leave lint at 0 errors. They should not switch to `next/image` as part of this change, because that would be scope creep.

**Concerns** (must address before proceeding):

- **The PRD and specs describe a content model the code no longer uses.** Leon's commits a8b292e..29b3a16 changed `site/data/projects-data.ts`. `ProjectSection` now has `items: SectionItem[]` (`string | { image: string }`) instead of `paragraphs`. `ProjectLink` gained a `name` prefix field, and `ProjectEntry` gained `featureImage?`. The SitePlus+ and TabVault records also gained "Images" sections. PRD section 5 and the MOD-003, MOD-005 and MOD-011 specs still quote the old interface. Failure scenario: the MOD-005 or MOD-011 engineer follows its spec literally and writes `paragraphs: [...]`. That fails TypeScript. Or the engineer "fixes" the interface back to the spec, which breaks the MOD-004 and MOD-006 records and the image grid in `[slug]/page.tsx`. That would revert Leon's screenshots without anyone noticing. Leon must decide (D2) before MOD-005 or MOD-011 run.
- **AC-044 and AC-092 cannot pass on the current link layout without reverting Leon's change.** The multi-agent links render as plain text plus a link: "Built by the system: " + `<a>tab-vault.com</a>`, then "GitHub: " + `<a>System repo</a>`, then "GitHub: " + `<a>TabVault repo</a>` (`[slug]/page.tsx` lines 108-116). The spec expects the link text to be "Built by the system: tab-vault.com", "System repo" and "TabVault repo". Leon decides (D2).
- **AC-091 needs a change to the shared template.** The feature image in `site/app/projects/[slug]/page.tsx` (line 127-134) renders `alt=""` and has no caption. A meaningful alt text and the caption directly below the image need two new optional `ProjectEntry` fields (proposed: `featureImageAlt`, `featureImageCaption`), rendered as `<figure>`/`<figcaption>`. MOD-011's AC-089 needs the same alt support later. This edits the file that four modules share, so ownership has to be settled first (D1).
- **The MOD-002 spec-update will collide with Leon's Home edits.** The current `site/app/page.tsx` H1 reads "Hey, I'm Leon 👋", and there is no "Full-Stack Engineer" subtitle. The bio has different wording and no em dashes. The status line and metadata say "2026/2027" where the PRD says "Summer 2026", and the CTA reads "Connect on LinkedIn" where the PRD says "Connect me on LinkedIn". So AC-011 to AC-015 already fail against the PRD. A `spec-update` run "updates the code to match" and would rewrite Leon's copy. The QA re-verify that follows would fail those ACs either way. Leon decides (D3).
- **Nothing in the framework can enforce ownership of the shared files right now.** The Module Map has no Source Path column, so `module_scope.py` returns 3 and both the hook and the self-check skip the scope check. The older wrappers (MOD-005, MOD-003, MOD-002) carry no Source Path at all. Ownership is also file-level only, so one shared `projects-data.ts` cannot express "each module edits only its own record". Adding a Source Path column is a PRD-level change (PM, then Doc-Sync).

**Recommendations** (suggested improvements):

- **Ownership (Q1), recommended option A.** MOD-003 (Projects split panel) owns the shared frame: `site/app/projects/` (layout.tsx, page.tsx, [slug]/page.tsx), `site/components/ProjectList.tsx`, `site/components/ProjectMobileNav.tsx`, and `site/data/projects-data.ts`. MOD-003 is the module that already owns the /projects route and every consumer of the list. In A, `projects-data.ts` keeps only the interfaces and the ordered `projects` array, which imports one record file per project:
  - `site/data/projects/multi-agent-system.ts` (MOD-005), plus assets `site/public/multi-agent*`
  - `site/data/projects/siteplus.ts` (MOD-004), plus assets `site/public/siteplus*` (this pattern also matches Leon's existing `siteplusplus-*` files)
  - `site/data/projects/tabvault.ts` (MOD-006), plus assets `site/public/tabvault-*`
  - `site/data/projects/projectday.ts` (MOD-011), plus assets `site/public/projectday-*`
  
  MOD-002 only reads the data. With this split, ownership becomes file-level, so the hook can enforce it, and no two engineers edit the same file. The split itself does not change behavior, and MOD-003 makes it together with the template extension above. Option B (lighter): keep one file and record an interim rule that each detail module edits only its own record and assets, with MOD-005 allowed a one-time change to the template. B adds no step, but nothing enforces it and it breaks the "one owner" rule for the template. Leon decides (D1).
- **Content model (D2), recommended: the PRD follows the as-built code.** The PRD section 5 interfaces would become `items: (string | { image: string })[]`, `ProjectLink { name, label, href }`, `featureImage?`, plus the new `featureImageAlt?` and `featureImageCaption?`. AC-044 and AC-092 would state the "prefix + link" form, for example "Built by the system: tab-vault.com" with only "tab-vault.com" linked. The other possibility is that Leon wants the PRD link text, in which case MOD-005 changes only its own record.
- **Same PM change: record what else Leon changed.** The PRD does not yet describe these items:
  - the SitePlus+ link "Demo Video: link" (supademo URL), where PRD 4.3 says "Live demo" (siteplusplus.space)
  - the "Images" H2 sections in SitePlus+ and TabVault, which make 9 sections where PRD 4.3 and 4.5 list 8
  - the hard-coded domain `https://www.leon-wu.com` in every canonical URL and og:url, while PRD section 7 still lists the domain as "[ASSET NEEDED]" and every spec carries the domain AMBIGUITY marker
  
  PM should ask Leon to confirm each one. The edits are not part of this change's scope, but leaving them out lets MOD-004 and MOD-006 QA revert them later.
- **Heading commas (Q3).** The source files for Multi-Agent, SitePlus+ and TabVault use commas ("How it works, end to end"; "What I learned, and what I would improve"). The ProjectDay source does not. PRD 4.3 to 4.5 already carry the commas. The code has none because the QA run of 2026-06-29 failed commas against the rev 1.2/1.3 specs. Recommended: each page matches its own source file. The MOD-004 and MOD-006 spec gap is Doc-Sync drift, not a requirements change, so it needs no new PRD decision. It does need a PM Update entry to trigger the Doc-Sync delta. Fold it into the rev 1.5 change, together with the production.md rev 1.2 drift (palette, layout, data-file/markdown statements, Module Index text). MOD-004 and MOD-006 spec-updates for commas can run after MOD-011, any time before the Phase 4 checkpoint. Until then, the Multi-Agent page will have commas and SitePlus+ and TabVault will not. That is visible but harmless. Leon may instead want no commas anywhere, in which case PM changes PRD 4.3 to 4.5 and the MOD-005 spec (D4).
- **Engineering order (Q4), changed.** MOD-003 and MOD-002 have nothing to change until the ProjectDay record exists, because both lists iterate `projects` in array order. If either runs before MOD-011, it would have to add the record itself, which is outside its scope.
  - With A: PM rev 1.5, then Doc-Sync, then `engineer-mod-projects-grid "spec-update"` (split the data file and extend the template with alt/caption), then `engineer-mod-project-multi-agent "spec-update"`, then `engineer-mod-project-projectday "implement"`, then `engineer-mod-home "spec-update"`. MOD-002 should be verification only; no code change is expected.
  - With B: PM rev 1.5, then Doc-Sync, then MOD-005, then MOD-011, then MOD-003, then MOD-002.
  - Both orders: insert ProjectDay at index 1 of `projects`, never index 0, so that `/projects` still redirects to multi-agent-system (`app/projects/page.tsx` uses `projects[0]`).
- **Multi-agent image (Q4).** Copy `asset/diagrams/multi-agent-horizontal.png` (3080x1560, 296 KB) to the new file `site/public/multi-agent-horizontal.png`. Point the record's `featureImage` at it, and delete `site/public/multi-agent.png` (2998x7775 portrait, 988 KB, referenced only by that record) in the same commit. A new name keeps the source and the copy traceable to each other and rules out any stale cache of the old URL. Deleting the old file means no orphaned asset is left behind. The image keeps its current position (after the pull-quote, before the sections), which satisfies "same position". Tailwind preflight sets `height: auto`, so the `height="500px"` attribute does not distort the image. Still, MOD-005 or the template owner should drop that attribute, because AC-091 requires no cropping.
- **What every engineer in this change must preserve (Q2): Leon's direct changes, 6fb90ad..29b3a16.**
  - `[slug]/page.tsx`: the `groupItems` image grid, the link layout as `<p>{name}<a>{label}</a></p>`, the article padding `px-8 py-12 pt-16 lg:pt-12 max-w-4xl` (mobile nav and H1 margin fix), the conditional links row (AC-082 relies on it), the conditional feature image (AC-089 relies on it), and the metadata domain.
  - `app/projects/layout.tsx`: `flex flex-col ... lg:flex-row` together with `ProjectMobileNav`. The MOD-003 spec does not mention ProjectMobileNav, but it is Leon's mobile project switcher, and ProjectDay appears in it automatically.
  - `projects-data.ts`: the SitePlus+ and TabVault records as they are, including the "Images" sections, the "Demo Video" link and the `name` prefixes, and the record order.
  - `app/page.tsx`: all hero copy, the emoji, `mt-5 md:mt-0`, the CTA labels and the metadata.
  - All `site/public/` assets except `multi-agent.png`.
  - Sidebar.tsx, globals.css, layout.tsx, and the about, experience, skills and contact pages are outside this change entirely.
  
  A spec-update changes only the ACs listed in the 2026-11-01 Sync Report (plus any rev 1.5 delta). It never "corrects" code that Leon changed directly.
- **Asking Leon (needs-human):**
  - **D1, ownership of the shared project files.** Option A (recommended): MOD-003 owns the shared frame, and each project gets its own record file plus asset pattern, enforced by a Source Path column. This adds one MOD-003 step. Option B: keep one data file, with an unenforced rule that each module edits only its own record, and MOD-005 makes the template change once. Which?
  - **D2, content model and links.** Should the PRD and specs follow your as-built `projects-data.ts` model, with links shown as "GitHub: " + linked "System repo", image items in sections, and `featureImage` plus the new alt and caption? Or should the site go back to the PRD link text ("System repo", "Built by the system: tab-vault.com" as one link)?
  - **D3, Home copy.** Your Home page differs from PRD 4.1:
    - the H1 has the 👋 emoji
    - there is no "Full-Stack Engineer" subtitle
    - the bio wording differs
    - the page says "2026/2027" internship, not "Summer 2026"
    - the CTA reads "Connect on LinkedIn"
    
    Keep your version, so that PM updates PRD 4.1 and AC-011 to AC-015, or restore the PRD copy?
  - **D4, section-heading commas.** Should each page match its own source file, which gives Multi-Agent, SitePlus+ and TabVault commas and ProjectDay none (recommended)? Or no commas on any page?
  
  The same PM change also needs your confirmation of the "Demo Video" link, the "Images" sections, and the www.leon-wu.com domain.

**Approved**:
- The single `[slug]` route with `generateStaticParams` over the data array, `dynamicParams = false` and awaited `params` (verified in the code). A fourth project needs no routing change. AC-090 is met once the record exists.
- The conditional links row and the conditional feature image in the template already give AC-082 (no empty links row) and the "no image slot until screenshots" half of AC-089.
- `ProjectList`, `ProjectMobileNav`, the Home list and the redirect all derive from the `projects` array. That makes AC-086 and AC-087 a matter of where the record sits in the array, not new UI work.
- Leon's direct changes build cleanly and add no lint errors, so nothing in them blocks engineering technically. The blockers are the spec and PRD conflicts above.

**Proposed Shared Conventions** (once the user approves, PM adds them to PRD section 9 Adopted Conventions; Doc-Sync carries them into production.md from there):
- Proposed Convention: The shared project frame belongs to MOD-003: `site/app/projects/**`, `site/components/ProjectList.tsx`, `site/components/ProjectMobileNav.tsx`, and the interfaces and ordered array in `site/data/projects-data.ts`. Each project-detail module owns only its record file `site/data/projects/<slug>.ts` and its `site/public/<prefix>*` assets. A detail module that needs a template change logs `blocked-technical` for MOD-003 rather than editing the template itself. (This applies if D1 = A.)
- Proposed Convention: A project record's position in `projects` is its display order everywhere (the side panel, the mobile switcher and the Home list). `projects[0]` is the `/projects` redirect target.
- Proposed Convention: Section headings and paragraphs match the project's own source file in `asset/content/` word for word. Editor's notes in a source file never render.
- Proposed Convention: A `spec-update` changes only the ACs named in the triggering Sync Report. Code that differs from the spec in other ACs is reported in Engineering Progress, not changed.

### Review — 2026-11-01 — change (rev 1.5: Source Paths, record-file split, engineering sequence)

pstack input: project-planning/pstack-findings/2026-11-01-how-project-pages.md (47aafe3). I re-ran the scope checks myself at 47aafe3 with `module_scope.py` (`check` and `paths`, plus a walk over `git ls-files`), and read `[slug]/page.tsx:127-135`, `site/tsconfig.json` and the importers of `@/data/projects-data`.
- **F1 accepted.** `check mod-projects-grid site/data/projects/siteplus.ts` returns 1 (owned by mod-project-marketing), `projectday.ts` returns 1 (mod-project-projectday), and `site/data/projects/index.ts` returns 1 (unowned). Failure scenario: MOD-003 runs the split that my rev 1.4 order gave it, and pstack-guard blocks its first Write. If MOD-003 uses Bash instead, handoff `changed` fails it. Also accepted: no step in that order adds `projectday` to the array after MOD-011 runs, so `/projects/projectday` would return 404 (`dynamicParams = false`) and AC-086, AC-087 and AC-090 would fail. My rev 1.4 order is superseded by the sequence below.
- **F2 accepted.** `paths mod-site-shell` prints junk entries (`site/public/ files no module pattern matches (favicons`, `Subject.png)`), and bare names like `head.png` match only at the repo root. 23 tracked files under `site/public/` have no owner: every favicon, `favicon_io/*`, `site.webmanifest`, `Leon_cv.pdf`, the five About photos, `head.png` and `Subject.png`. Only the five `*.svg` files resolve to mod-site-shell. `site/public/og-image.png` is referenced in the metadata of `app/page.tsx`, `about`, `contact`, `experience` and `projects/[slug]`, but the file does not exist and has no owner. Failure scenario: the moment anyone has to change `Leon_cv.pdf` or a favicon, no engineer can write it.
- **F3 accepted.** `projects[0]` is the redirect target (CONV-002). Index 1 keeps the redirect on multi-agent-system.
- **F4 accepted, with an added rule.** Records use `import type` only. The types stay in `projects-data.ts`, because `types.ts` and `index.ts` would have no owner.
- **F5 accepted.** `[slug]/page.tsx:129-134` renders `alt=""` and `height="500px"`, and `ProjectEntry` has no alt or caption field. Under CONV-001 only MOD-003 may change these, so this supersedes the part of my rev 1.4 review that let MOD-005 drop the attribute.
- **F6 accepted as information only.** The MOD-003 Source Path already uses the folder form `site/app/projects/`. The Edit/Write-only guard is covered by `changed` at handoff. No action needed.
- **Open question 1:** answered by the sequence below (E1 for Leon).
- **Open question 2:** answered under E2 and E3 below.
- **Open question 3 rejected for this change.** AC-089 and AC-091 name only the feature image. Section-image alt text (`alt=""` at `[slug]/page.tsx:154,163`) is a real accessibility gap against the PRD goal "WCAG-conscious", but adding it is a new requirement. It belongs in a later PM change (`SectionItem` image gains `alt?`, owned by MOD-003, then each record fills in its own). It is not part of this sequence.
- **Open question 4 rejected for this change.** Passing only `{slug, title, tech}` to the nav components is an optimization that no AC asks for. Under CONV-004 a spec-update must not add it. I will consider it at the Phase 4 integration review.

**Concerns** (must address before proceeding):
- **Record files cannot be created in one step by anyone inside the framework (F1, PM Note A).** Under rev 1.5 each record file belongs to its detail module, the array belongs to MOD-003, and importing a file that does not exist breaks the build. So the split has to be staged: owners create their files first, then MOD-003 cuts over. Leon chooses how (E1).
- **The type change must land before any record uses the new fields (F5).** `featureImageAlt` and `featureImageCaption` in a record annotated `ProjectEntry` fail the excess-property check until MOD-003 adds them to the interface. MOD-005's AC-091 depends on this.
- **The `Project files:` line has to be fixed before Doc-Sync carries it into specs (F2).** This is a Module Map change, so it goes through PM. Without the fix, mod-site-shell cannot write any favicon, the CV or `og-image.png`.

**Recommendations** (suggested improvements):
- **Record-file contract (cross-module; MOD-003 depends on it):**
  - Each file `site/data/projects/<slug>.ts` contains only `import type { ProjectEntry } from "@/data/projects-data";` and one named export annotated with the type: `export const multiAgentSystem: ProjectEntry = {...}`, `siteplus`, `tabvault`, `projectday`.
  - The annotation is required, because it makes the build check each record's shape while the file is not yet imported. `tsconfig` includes `**/*.ts`, so the unimported file is still type-checked.
  - Records never import a value from `projects-data.ts`, which avoids the cycle in F4.
  - `projects-data.ts` keeps only the interfaces and `export const projects: ProjectEntry[] = [multiAgentSystem, projectday, siteplus, tabvault];`. It contains no helpers or constants.
- **Engineering sequence, recommended E1 = A2 (each owner writes its own record once, one cutover).** Every step must keep `npm run build` passing and lint at 0 errors (baseline: 9 `no-img-element` warnings). The rev 1.4 preservation list still applies in full.
  0. **PM trivial change:** fix the `Project files:` line (E2). Then **`claude --agent doc-sync`** syncs rev 1.5 and the fixed line into the specs and `production.md`.
  1. **`claude --agent engineer-mod-projects-grid "spec-update"` (MOD-003, step 1 of 2).** Scope:
     - Add `featureImageAlt?: string` and `featureImageCaption?: string` to `ProjectEntry`.
     - In `[slug]/page.tsx`, render the feature image as `<figure><img alt={project.featureImageAlt ?? ""} .../>{caption && <figcaption>}</figure>` and remove `height="500px"`.
     - Do not split the data file and do not change the array yet.
     - Visible result: none, because no record sets the new fields.
  2. **Record files.** These four runs are independent of each other and can run in any order. Each creates only its own file, under the contract above, with the content its rev 1.5 spec requires. While a file is not imported, it does not render. Each engineer therefore checks it with build/lint only, and records "renders after the MOD-003 cutover" in Engineering Progress.
     - `engineer-mod-project-multi-agent "spec-update"` (MOD-005): the record with the rev 1.4/1.5 content, tags, At-a-glance, links, `featureImage: "/multi-agent-horizontal.png"` plus alt and caption. Copy `asset/diagrams/multi-agent-horizontal.png` to `site/public/`. Do not delete `site/public/multi-agent.png` yet, because the inline record still uses it until the cutover.
     - `engineer-mod-project-marketing "spec-update"` (MOD-004): the SitePlus+ record copied from `projects-data.ts`, plus its rev 1.5 delta (commas per D4, "four projects").
     - `engineer-mod-project-tabvault "spec-update"` (MOD-006): the same for TabVault.
     - `engineer-mod-project-projectday "implement"` (MOD-011): the new ProjectDay record, with `links: []` and no `featureImage`.
  3. **`claude --agent engineer-mod-projects-grid "spec-update"` (MOD-003, step 2 of 2: cutover).**
     - Replace the three inline records with imports of the four record files, in the order `[multiAgentSystem, projectday, siteplus, tabvault]`.
     - Verify that the build produces four `/projects/[slug]` pages and that `/projects` still redirects to multi-agent-system.
     - MOD-003 touches only `projects-data.ts`.
  4. **`engineer-mod-project-multi-agent "spec-update"`, a short finishing run (MOD-005):** delete `site/public/multi-agent.png`, which is now unreferenced. Skip this step if Leon prefers to keep the orphaned file until the Phase 4 integration review.
  5. **`engineer-mod-home "spec-update"` (MOD-002):** verification only, with no code change expected. ProjectDay appears in the Home list from the array.
  6. **`engineer-mod-contact "spec-update"` (MOD-010):** change the intro to 2026/2027. This step is independent and can run any time after step 0.
  7. **QA, after step 3**, for MOD-003, 005, 011, 004, 006, then MOD-002 and MOD-010. QA failures go back to the owning engineer, who by then edits a live file.
  - **Why A2 over (a), "owners copy verbatim first":** (a) needs three extra copy runs, a third MOD-003 run to add ProjectDay, and separate MOD-004/006 spec-updates later. That is about 10 engineer runs, against 7 for A2. The cost of A2 is that steps 2 and 3 are one "big bang": nothing from step 2 is visible until step 3. In both options, two copies of the SitePlus+ and TabVault records exist for a short time. A2 keeps that window short and ends it at step 3, which deletes the inline copies.
  - **Option (b), Leon makes a `human:` commit for the mechanical split** (three verbatim files plus the import array). `changed` ignores that commit. It saves no engineer runs compared with A2, because A2 already folds the copy into each owner's single run. It is also one more change made outside the framework, which is exactly the kind of drift rev 1.5 just cleaned up. MOD-003 step 1, all of step 2 except the copy, and a MOD-003 run to add `projectday` at index 1 are still needed.
  - **Option (c), PM widens MOD-003's Source Path for the split.** This is not recommended, because it is a second PRD change to undo the first.
- **E2, the `Project files:` line. Recommended: `Project files: mod-site-shell | .gitignore, site/package.json, site/package-lock.json, site/next.config.ts, site/tsconfig.json, site/eslint.config.mjs, site/postcss.config.mjs, site/.gitignore, site/AGENTS.md, site/CLAUDE.md, site/README.md, site/public/`.**
  - Longest-prefix matching keeps `site/public/siteplus*`, `multi-agent*`, `tabvault-*` and `projectday-*` with their modules. Their literal prefix is 20 or more characters, against 11 for `site/public`.
  - Everything else under `site/public/`, including the About photos (Decision Q5) and `og-image.png`, goes to mod-site-shell. That is what the line already means in words.
  - The risk is small and visible. A mis-named project asset (for example `pd-home.png`) is assigned to mod-site-shell, so the MOD-011 engineer is blocked with exit 1. It is never silently written by the wrong module.
  - Alternative: full paths (`site/public/favicon*`, `site/public/favicon_io/`, `site/public/android-chrome-*`, `site/public/apple-touch-icon.png`, `site/public/site.webmanifest`, `site/public/Leon_cv.pdf`, `site/public/*.svg`, `site/public/IMG_*`, `site/public/4D0BDA8A-*`, `site/public/head.png`, `site/public/Subject.png`, `site/public/og-image.png`). This is more precise, but every new shell asset then needs another Module Map change.
  - Either way, PM writes it (Module Map), and the line must not contain parentheses or words inside the comma list.
- **E3, `og-image.png`.** The owner is mod-site-shell (by E2). The file is a Leon-supplied asset (PRD 7, 1200×630). Until it exists, every page's og:image returns 404. That does not break the build and does not block this sequence. Once Leon supplies it in `asset/`, run `engineer-mod-site-shell` to copy it to `site/public/og-image.png`. This works only after E2.

**Approved**:
- The rev 1.5 Source Paths for MOD-001 to MOD-011 resolve correctly, apart from the Project files line. Specifically: `check mod-projects-grid site/data/projects-data.ts` returns 0, `check mod-project-marketing site/data/projects/siteplus.ts` returns 0, and the asset patterns match the existing `siteplusplus-*`, `tabvault-*` and `multi-agent*` files.
- CONV-001 to CONV-004 as written in PRD section 9.
- MOD-002 needs no code change. `app/page.tsx` imports only `projects`.

**Proposed Shared Conventions**:
- Proposed Convention: A project record file exports exactly one named constant annotated `ProjectEntry` and imports only types from `@/data/projects-data`. `projects-data.ts` holds only the interfaces and the ordered `projects` array.

**Asking Leon (needs-human):**
- **E1, how the record files get created.** A2 (recommended): MOD-003 adds the alt/caption fields first, then MOD-005, MOD-004, MOD-006 and MOD-011 each write their own record file once with their updated content, then a single MOD-003 cutover adds all four, with ProjectDay second. This takes 7 engineer runs, and nothing new shows on the site until the cutover. (a): each owner first copies its record unchanged, MOD-003 cuts over, then the updates follow. This takes about 10 runs, and the site changes step by step. (b): you make one `human:` commit that splits the file unchanged, and the engineers do the rest. This also takes about 7 runs, because the copy work is folded into A2's runs anyway, so it saves no runs and it puts a source change outside the framework. Which?
- **E2, the `Project files:` line.** Replace the descriptive part with the folder `site/public/` (recommended; every unclaimed public file, including og-image.png, goes to site-shell)? Or with the full list of paths? Either way PM makes it as a trivial Module Map change before Doc-Sync.
- **E3, OG image.** Will you supply the 1200×630 `og-image.png` now, so that `engineer-mod-site-shell` copies it in during this change? Or should it stay an open, non-blocking item (every page's og:image returns 404 until then)?

### Review — 2026-11-01 — change (rev 1.7 + rev 1.8: slideshow, image overlay, ProjectDay images, CV alignment)

pstack input: project-planning/pstack-findings/2026-11-01-how-shell-slideshow-overlay.md (c67c140). I checked it against the code at 9df3298 and the Next.js 16.2.9 docs and source in `site/node_modules/next`. I also ran `npm run build` (13 static routes, passes), `npm run lint` (0 errors, 9 `no-img-element` warnings, the same baseline), `module_scope.py check` for every new path named below, and grepped the built HTML in `site/.next/server/app/`.
- **Accepted:** single root layout and the `main` wrapper (`layout.tsx:40-47`); multiple root layouts cause a full page load (`route-groups.md:30`, `layout.md:145`), which would exit full screen, so ruled out; `requestFullscreen` needs the user's gesture, so it must run in MOD-001's click and `7` handlers; Esc in full screen is consumed by the browser, so the return must come from `fullscreenchange`; the page `searchParams` prop would make /slideshow dynamic (AC-107), and `useSearchParams` needs `<Suspense>` (`use-search-params.md:82-86`); `next/image` defaults to `loading="lazy"` (`image.md:300-304`), which would leave later slides unloaded when the network drops; native `pushState` is safe: I read `app-router.js:251-299`. The patched `pushState` copies Next's internal state into the new entry, so Back to the original entry is a client-side traverse with no reload; `head.png` is 1,834,627 bytes and an `<img>` loads even when hidden with CSS; the byte totals (I re-measured them); `SectionItem` has no alt and the template renders `alt=""` (`[slug]/page.tsx:160,169`); ownership results (re-run: `site/app/slideshow/images/*` is mod-slideshow, `site/public/slideshow-*` is mod-site-shell, `site/app/projects/[slug]/ImageZoom.tsx` is mod-projects-grid, `site/components/ImageZoom.tsx` and `site/lib/*` are unowned); `TopNav.tsx` has no importers; `usePathname` resolves during prerender. I verified that last one: the static `about.html` already has the active classes on the About link, so a Sidebar that returns `null` on /slideshow is also absent from the static HTML.
- **Accepted with an addition the findings missed:** `globals.css:72-81` draws `main::after` with `background: url("/Subject.png")` (1,387,704 bytes) as a fixed decoration on every page. Under either shell option, /slideshow renders inside the root `main`, so that file loads there too. Failure scenario: with head.png gone but Subject.png still loading, /slideshow loads 1.84 MB + 1.39 MB + the ProjectDay files, which is over AC-106's 3 MB even with the smallest ProjectDay files. Covered by CONV-007 below.
- **Accepted as test notes only:** whether the panel behind a modal `<dialog>` scrolls (it should not: a top-layer dialog is fixed, so its scroll chain goes to the document, which is `overflow: hidden`. QA verifies AC-109 on Chrome, Safari and an iPhone); offline after a reload (outside AC-105); leaving the slideshow offline. `router.replace` to the page it was opened from uses the client router cache, which is normally still warm.
- **Rejected:** "a webkit prefix may be needed": Safari has supported the unprefixed element Fullscreen API since 16.4, and iPhone Safari has none, prefixed or not. MOD-001 feature-detects `document.fullscreenEnabled` and does nothing else. "Shared `site/lib/fullscreen.ts`": rejected. The call is one line, and a shared file would need a new owner (see Q2).
- **Open questions:** answered under Recommendations, numbered Q1 to Q10 to match the findings.

**Concerns** (must address before proceeding):
- **Q6 cannot stand as recorded: the root description breaks AC-125.** `site/app/layout.tsx:16` reads "Portfolio of Tsan-Yu (Leon) Wu — full-stack engineer and CS master's student at Northeastern University." Its role and school match the CV, as PM says. But its name is the exact string AC-125 forbids. It is not dead metadata: the fresh build puts it in `projects.html` (the /projects redirect) and `_not-found.html` (the 404 page every unknown URL gets). Failure scenario: Doc-Sync carries "the root description stays" into the MOD-001 spec, MOD-001 leaves line 16 alone, and QA fails AC-125 on /projects and the 404 page. Fix: MOD-001 changes the name to "Tsan-Yu Wu (Leon)" and keeps the rest of the text (T5). PM corrects the Q6 note before Doc-Sync. The full AC-125 module list from the code: MOD-001 (`layout.tsx:16`), MOD-007 (`experience/page.tsx:7,10,19`, which AC-121 replaces anyway), MOD-008 (`about/page.tsx:6,10,22`), MOD-009 (`skills/page.tsx:7,11,23`, which AC-122 replaces anyway), MOD-010 (`contact/page.tsx:6,9,20`). MOD-002 and the project pages contain no full name. MOD-008 is missing from PM's list of affected modules.
- **AC-108 and AC-109 cannot pass on SitePlus+ and TabVault, because those images have no alt text in the PRD.** The overlay makes each image a focusable control and names the dialog by the image's alt. Six images have no alt today: the SitePlus+ feature image (`siteplusplus-home.jpg`), the SitePlus+ section images (`siteplusplus-reports.jpeg`, `siteplusplus-sites.jpeg`), the TabVault feature image (`tabvault-home.png`) and the TabVault section images (`tabvault-mobile.jpeg`, `tabvault-plugin.png`). Records 1 and 3 have no `featureImageAlt`, and `SectionItem` (PRD 5) cannot carry an alt. Failure scenario: a screen reader announces "button" with no name and a dialog with no name on both pages, which fails AC-109 and WCAG 4.1.2. Three alts already exist in PRD 4.11 (C2, C5, D1) and can be reused. Three are new. AC-111 needs the same `SectionItem` alt for ProjectDay. This is a PRD 5 content-model change plus alt copy, so it goes to PM before Doc-Sync (T2).
- **The slideshow must not load the shell's images.** head.png (1.83 MB, `Sidebar.tsx:156`) and Subject.png (1.39 MB, `globals.css:79`) together are larger than the whole slide image set. Hiding them with CSS still downloads them. Proposed rule: CONV-007.
- **The image budget needs a per-module allocation.** Without one, AC-106 is decided by whichever module runs last. Measured: the five existing slide images total 1,844,955 bytes. At AC-112's cap of 300 KB per file, the four ProjectDay files /slideshow loads (the three-screen image, Route, Route beta and Profile) could add 1.2 MB, which makes 3.04 MB, over the cap. I test-encoded the five ProjectDay PNGs as WebP at 1300 px tall, quality 80, in the scratchpad (not committed): each came out at 26-50 KB. So an allocation of 800 KB for the four files is easy to meet, and the worst case becomes 2.64 MB. No smaller bouldering copy is needed (Q10).

**Recommendations** (suggested improvements):
- **Q1, how /slideshow escapes the shell: (b), recommended (T1).** `Sidebar.tsx` (MOD-001) returns `null` on `/slideshow`. Its hooks still run before the early return. The slideshow root (MOD-012) is a `fixed inset-0` layer with an opaque `var(--bg)` background and a z-index above the shell's z-40. No Module Map change is needed. Option (a), a route group `app/(site)/` under the same root, is cleaner but moves every page folder, so the Source Paths of MOD-001 to MOD-010 must be rewritten through PM and Doc-Sync. Option (c), multiple root layouts, is ruled out (full page load ends full screen). Option (d), a nested layout, cannot remove the Sidebar.
- **Q2, where the full-screen call lives: inline.** MOD-001 calls `document.documentElement.requestFullscreen()` synchronously in the Slideshow link's click handler and in the `7` key handler, before navigating, and only `if (document.fullscreenEnabled)`. It catches a rejected promise and does nothing with it. MOD-012 makes the same call in its own `F` handler. No shared helper file.
- **Q3, how the slideshow knows where it came from: sessionStorage, as a cross-module contract (CONV-006 below).** MOD-012 reads and removes the key once on first mount. To survive React StrictMode's double mount in dev, it caches the value in a module-level variable. A reload then finds no key, which makes it a direct visit, as PRD 4.11 requires. Leaving uses `router.replace(<that path>)`, or `router.replace("/")` after a direct visit, never `router.back()`. `replace` is deterministic and keeps /slideshow out of Back. Leaving also exits full screen if it is still on. On unmount (for example the browser's Back while in full screen), MOD-012 calls `document.exitFullscreen()` if `document.fullscreenElement` is set, so the site is never left in full screen. A guard prevents the close button and the `fullscreenchange` listener from both navigating. The listener treats only a change from "in full screen" to "not in full screen" as leaving, because entering full screen fires the same event after the page mounts.
- **Q4, where the slideshow image copies live: none are needed.** MOD-012 references the existing public URLs (`/IMG_6875.JPG`, `/4D0BDA8A-B273-40DC-BD3D-3098AF6BBB73.JPG`, `/siteplusplus-home.jpg`, `/siteplusplus-reports.jpeg`, `/tabvault-home.png`) and MOD-011's new files. If a copy is ever needed, it goes in `site/app/slideshow/images/` (already MOD-012's) as a static import, not in `site/public/slideshow-*`. So PM should drop the planned "site/public/slideshow-* pattern" follow-up: no Module Map change.
- **Q5, which image element: plain `<img>`, every slide image rendered eagerly at mount.** That means hidden off-screen, or held with `new Image()`. Slide state lives in React state, not the URL. Do not use `next/dynamic` for slides. `next/image` would load lazily and serve a different `srcset` candidate after a resize or rotation, which fails offline. The extra `no-img-element` warnings are accepted; lint stays at 0 errors. QA note for AC-105: only Roboto 400, 500 and 700 are loaded, so the slides must not use other weights or italics, which would need a font file the browser has not fetched.
- **Q6, how the overlay works: native `<dialog>` with `showModal()`, in `site/app/projects/[slug]/` (MOD-003, verified).** `ProjectDetailPage` stays a Server Component and passes plain `src`/`alt` props to a small Client Component.
  - The image sits in a `<button>` with `cursor: zoom-in`. The button carries no extra name: the `<img alt>` names it.
  - The original stays in place at `opacity: 0` while a copy animates the move from its measured rectangle, so nothing shifts (AC-110). The `<img>` element itself must carry the displayed size, with no `object-fit` letterboxing inside a bigger box, so that the measured rectangle is the visible image.
  - On open: `history.pushState({ imageOverlay: true }, "")`, with no URL. `popstate` closes the overlay. Click, tap and Esc (the dialog's `cancel` event, with `preventDefault` so the closing animation can run) close it through `history.back()`, so there is one close path.
  - Reset the UA dialog styles (max-width/height, padding, border) and make the dialog cover the whole viewport, with `overscroll-behavior: contain`.
  - Images sections: AC-111 needs a height cap (640 px at 1280x800). If MOD-003 applies it in the shared template, it also shrinks `tabvault-mobile.jpeg` (portrait, 1170x2532) on /projects/tabvault, which is a visible change on that page. I recommend one cap for every project page, for consistency. Say so if you would rather keep TabVault as it is.
- **Q7, alt text for section images: add `alt?: string` to the image item of `SectionItem`.** It is optional in the TypeScript type so that MOD-003 can land it before the record modules fill it in (the same staging as `featureImageAlt` in E1). The template renders `alt={item.alt ?? ""}`. AC text makes every image on a project page carry an alt. Needs T2.
- **Q8, number keys while the overlay is open: suppress them (T3).** Today `Sidebar.tsx:177-187` still navigates when a key is pressed with the overlay open. That leaves the overlay's history entry behind, so it takes two Back presses to get out. Recommended: Sidebar's handler does nothing while `document.querySelector("dialog[open]")` exists. That keeps every suppression rule in Sidebar, as PRD 6 says. It needs one line in PRD 6's suppression list.
- **Q9, `TopNav.tsx`: no action in this change.** It is dead code (no importers) with the old 6-item order. Deleting it is not an AC (CONV-004). I will log it at the Phase 4 integration review, together with head.png (1.83 MB shown at 40x40 on every page) and Subject.png (1.39 MB shown at 120x80), both of which affect the PRD's Lighthouse goal of over 90.
- **Q10, byte budget: allocate, don't shrink.** AC-106 counts the sum of the files' sizes in bytes against 3,000,000. MOD-011's four slideshow files together stay at or under 800 KB. That fits easily as WebP, and each file stays within AC-112's 300 KB. The Seattle photos stay as they are. MOD-012's self-check adds up the real bytes from DevTools Network with the cache disabled.
- **MOD-011 files (PRD 4.6 leaves the names and the maker to me):**
  - The three-screen image is `site/public/projectday-screens.webp`: WebP with alpha, at least 1500 px wide (AC-112), with even gaps and a transparent background. The MOD-011 engineer composes it from the three PNGs in `asset/screenshots/projectday/`. Pillow 12.2, `cwebp` and sharp are all present on this machine. The engineer commits only the output and records the exact command in Engineering Progress.
  - The singles are `site/public/projectday-route.webp`, `projectday-route-beta.webp` and `projectday-profile.webp`, each about 1300 px tall (at least 1000 px, per AC-112).
  - The Images section and slide B5 share the Route beta and Profile files, so the browser caches them once.
  - All four names match `site/public/projectday-*` (MOD-011, verified).
  - Safari supports WebP with alpha from version 14.
- **AC-124: no size or layout change is needed.** I measured "Full-Stack Software Engineer" with Roboto's own advance widths: 152.7 px at `text-xs` (12 px) Regular, ignoring kerning, which only narrows it. The space it gets: w-64 (256) − border 1 − `p-3` 24 − link `p-2` 16 − avatar 40 − `gap-2` 8 = 167 px. The desktop sidebar (from 768 px) and the mobile drawer at 375 px are both w-64, so the margin is about 14 px in both. MOD-001 changes only the text and keeps `truncate` as a safety net. QA checks `scrollWidth <= clientWidth` on the subtitle span at 1280 and 375 px wide.
- **Engineering order (after Doc-Sync).** Every step keeps `npm run build` passing and lint at 0 errors. Every push to `main` deploys, so do not push between steps 4 and 5 unless both are in.
  1. `engineer-mod-projects-grid` (MOD-003): the overlay component, `SectionItem` `alt?`, rendering the alt, the Images height cap.
  2. Record modules, in any order: MOD-005 (rev 1.7 record; remove tab-vault.com); MOD-006 (offline copy and links, plus alts); MOD-004 (rev 1.8 paragraphs, tags and demo link, plus alts); MOD-011 (the four WebP files, record fields, alts). This step needs step 1 first, because the `alt` field fails the excess-property check until the type has it.
  3. Independent page modules, any time: MOD-007, MOD-008, MOD-009, MOD-010.
  4. `engineer-mod-slideshow` (MOD-012). It needs the MOD-011 files from step 2. It can be built and checked by direct visit before the nav item exists.
  5. `engineer-mod-site-shell` (MOD-001), last: nav item 7, key `7`, CONV-006, CONV-007, AC-124, the AC-125 name change, the CV at cfa3367, AC-126. Running it last means the nav item never points at a route that does not exist yet.
  6. MOD-002: no change expected (no full name in its code, no phone, no tab-vault.com link).
  
  QA: MOD-003 and the record modules after step 2; MOD-012 and MOD-001 together after step 5, because AC-094, AC-095 and AC-099 need both.
- **Doc-Sync note for PM (not a decision).** In `interview-deck.md` slide 2, the Timeline entries carry "(opens the GoFreight detail slide)" and "(opens the Exascend detail slide)" inside the copy lines. These are annotations, not on-screen text. The MOD-012 spec should say so, so that AC-100 is not read as requiring them on screen.
- **Technical limits for the design team (the coordinator passes these on word for word):**
  1. One static route, /slideshow. There is no URL per slide; the only parameter is `?project=`. Slides change instantly with no transition. Motion is allowed only for the hints and focus, and it must respect `prefers-reduced-motion`.
  2. No site chrome appears: no sidebar, top bar, theme toggle, profile photo or corner decoration. The slideshow is its own full-viewport layer on an opaque `--bg` background.
  3. The slideshow follows the active theme through the existing CSS variables only. There are no theme-specific images, and all text meets AA in both themes.
  4. Full screen is optional, and the design must work the same in a browser window of any aspect ratio. iPhone Safari never goes full screen.
  5. While a browser enters full screen, it shows its own "Press Esc to exit full screen" banner at the top center, and Safari reveals its menu bar at the top edge. Keep the "Press F for full screen" hint and the close button away from the top center and the very top edge.
  6. Esc in full screen never reaches the page. Leaving is handled through the browser's full-screen exit, so the design must not depend on an Esc animation.
  7. Every size is in frame units: design on one 16:9 artboard that scales uniformly. AC-102's minimums are fractions of the frame height: titles 7%, bullets, Titles, Roles and Role 4.2%, everything else 2.4%. At 375x667 portrait, the frame is 375x211 px, so the minimums come out at about 14.8, 8.9 and 5.1 px (see T4).
  8. Place the close button relative to the screen, not the frame, so it does not shrink with the frame. It must be at least 24x24 CSS px; 44 px is preferred for touch. It needs a visible focus style. Cards also need visible focus styles.
  9. State explicitly whether a click or tap on the background around the frame counts as "on a slide". The PRD does not say.
  10. Images: only the files in PRD 4.11, each shown whole (`object-fit: contain`, no cropping). Aspect ratios: SitePlus+ home 1.92:1, SitePlus+ reports 1.93:1, TabVault home 1.65:1, both Seattle photos 0.75:1 (portrait), ProjectDay single screens 0.46:1, the three-screen image about 1.5:1. No new decorative images or icon files: draw icons and diagrams (A2, B6) with inline SVG or CSS. Any new image counts against the 3 MB.
  11. Use only Roboto 400, 500 and 700, with no italic. These are the only font files the site loads, and the deck must work offline after it loads.
  12. Screen readers announce the slide title on every change, and the position on project slides, through a visually hidden live region. Nothing visible is needed for this.
  13. The design files are inputs. Engineers implement them only in `site/app/slideshow/` (MOD-012). Reusing a site component such as the tag chip means rebuilding its look inside MOD-012, not importing another module's component.

**Approved**:
- The rev 1.7 and 1.8 scope is feasible on Next.js 16.2.9 with the current single root layout. No new dependency and no `next.config.ts` change are needed.
- /slideshow can be static (AC-107) with a client-side read of `?project=`. The 3 MB budget is met with room to spare under the allocation above.
- The overlay's history handling works with Next's patched `pushState` (verified in source).
- There is no phone number anywhere in `site/` today (AC-126 grep is clean). tab-vault.com appears only in `site/data/projects/multi-agent-system.ts:24-25` and `site/data/projects/tabvault.ts:16`, which MOD-005 and MOD-006 remove under AC-092, AC-116 and AC-117.
- The rev 1.5 record-file split is in place (four record files imported in `projects-data.ts`, ProjectDay second), so the record changes in this revision are file-local under CONV-001 and CONV-005.

**Proposed Shared Conventions** (once the user approves, PM adds them to PRD section 9 Adopted Conventions; Doc-Sync carries them into production.md from there):
- Proposed Convention (CONV-006, slideshow entry contract between MOD-001 and MOD-012): When the site opens the slideshow (Slideshow nav link or key `7`), MOD-001, in the same event handler and in this order: writes `sessionStorage["slideshow-return"] = JSON.stringify({ path: location.pathname, t: Date.now() })`; calls `document.documentElement.requestFullscreen()` if `document.fullscreenEnabled`, ignoring a rejection; and navigates client-side to `/slideshow`. MOD-012 reads and removes that key once on first mount. A value whose `path` starts with "/" and is not "/slideshow", and whose `t` is at most 10 seconds old, means "opened from the site": no full-screen hint, and leaving returns to `path` with `router.replace`. Anything else means a direct visit: the "Press F" hint shows, and leaving goes to "/".
- Proposed Convention (CONV-007, the shell on /slideshow): On `/slideshow`, the site shell renders nothing. Sidebar returns `null`, its number-key handler does nothing, and no shell image is requested (no `/head.png`, no `/Subject.png`, verified in DevTools Network). MOD-001 moves or guards the `main::after` decoration so it is not generated there. The slideshow root is a fixed full-viewport layer above the shell, owned by MOD-012. (If T3 = suppress, add: "Sidebar's number-key handler also does nothing while a `dialog[open]` exists, and in-page overlays are native `<dialog>` elements opened with `showModal()`.")

**Asking Leon (needs-human):**
- **T1, how the slideshow hides the site shell.**
  - (b) recommended: the sidebar hides itself on /slideshow and the slideshow covers the screen. Only MOD-001 and MOD-012 change, and the Module Map stays as it is.
  - (a): move every page into a route group, which is cleaner. It needs a PM change that rewrites the Source Paths of MOD-001 to MOD-010, plus another Doc-Sync.
- **T2, alt text for the project-page images the overlay opens.**
  - (a) recommended: PM adds an optional `alt` to section images in PRD 5, plus alt texts for the six SitePlus+ and TabVault images. Three can reuse the slide alts in 4.11 (C2, C5, D1); PM proposes the other three (`siteplusplus-sites.jpeg`, `tabvault-mobile.jpeg`, `tabvault-plugin.png`) for your approval. This adds alt work to MOD-004 and MOD-006.
  - (b): keep the overlay off the SitePlus+ and TabVault images. That reverses your rev 1.7 answer Q11 (every project image).
- **T3, number keys while the image overlay is open.**
  - (a) recommended: they do nothing until the overlay closes. This adds one line to PRD 6.
  - (b): they still navigate, as today. The overlay's history entry is left behind, so Back takes two presses.
- **T4, slideshow on a phone held upright.**
  - (a) recommended: keep the PRD as written. The 16:9 frame shows letterboxed, 375x211 px on a 375x667 screen, with small text. You present from a laptop.
  - (b): a PRD change that lets the design team add a "rotate your phone" hint or a portrait layout.
- **T5, the root page description (`layout.tsx:16`, shown on /projects and the 404 page).**
  - (a) recommended: change only the name to "Tsan-Yu Wu (Leon)", which AC-125 already requires, and keep the rest of the text.
  - (b): also remove its em dash, and the em dashes in the About and Contact meta descriptions, which PRD 2 "No em dashes anywhere in site copy" may cover. This needs PM to say that meta descriptions count as site copy.
- **T6, approve CONV-006 and CONV-007** (the slideshow entry contract and the shell on /slideshow) for PM to add to PRD 9? Recommended: yes. Without them, the two engineers have no shared written contract.

### Review — 2026-11-01 — change (rev 1.9: design approval, T1-T6 answers, "Leon Wu", CONV-006 hint rule, alts, Images cap, dialog keys, idle pointer, key repeat)

pstack input: project-planning/pstack-findings/2026-11-01-how-rev-1-9-deltas.md (fddbdd7). `site/` is unchanged since 9df3298 (`git diff --stat 9df3298 HEAD -- site/` is empty), so my rev 1.7 + 1.8 build and lint baseline still holds; I did not re-run them. I re-checked every cited location: `Sidebar.tsx:177-187` (no `/slideshow` or `dialog[open]` bail), `projects-data.ts:12` (`{ image: string }`, no alt), `[slug]/page.tsx` `groupItems` 5-28 carrying only `srcs` and `alt=""` at 160 and 169, the five-file name grep (13 lines, same owners), `.dark` on `document.documentElement` (`layout.tsx:24`, `ThemeToggle.tsx`), and `tabvault-mobile.jpeg` (1170x2532, 429,567 bytes; not a slideshow file).
- **Accepted:**
  - Section 1, hint timing: MOD-012 cannot see MOD-001's request or its promise; showing at mount can flash; a refusal (`fullscreenerror`) that fires before MOD-012 subscribes is lost. My answer is D1 below.
  - Section 1, missed entry: if "was in full screen" starts from the render value (always false in the static prerender) and MOD-001's request completes between render and subscribe, the "in" is never seen and a later Esc is ignored. Failure scenario: Nav click → full screen → Esc → visitor stays on a windowed slideshow, AC-099 fails. Rule: read `document.fullscreenElement` at subscribe time (`useSyncExternalStore`, server snapshot `false`).
  - Section 1, one-time read: my rev 1.7 Q3 wording ("cache the value in a module-level variable") was wrong. Module scope outlives the component across client navigations. Failure scenario: open from /about, leave, reach /slideshow again in the same document by a client-side link → it inherits `{path:"/about"}` within 10 s and leaves to /about instead of /. Corrected rule: read in an effect, keep the result in a `useRef` on the slideshow component, remove the key on the first read. Strict Mode's extra setup/cleanup keeps the ref. This corrects my own recommendation, not CONV-006's text ("reads and removes that key once on first mount" stands).
  - Section 1, hint button: it must not let its event reach slide navigation, and must not keep focus (Chrome focuses a clicked button; a later Space would activate it again). Adopted with one change: instead of stopPropagation per control, the root pointer handler ignores any event whose target is inside a `button` (`closest("button")`). One guard covers cards, the close button and the hint. The hint calls `preventDefault` on `mousedown` (which is what stops click-focus; `pointerdown` alone is not reliable for that, unverified per browser), and after its click focus goes back to the layer. QA: in Chrome, click the hint, then press Space: exactly one slide change.
  - Section 1: a refused hint request fires `fullscreenerror`, not `fullscreenchange`, so it cannot trigger leaving. Agreed.
  - Section 2: `showModal()` inertness does not stop window listeners, so Sidebar needs the `dialog[open]` bail (CONV-007) plus the `/slideshow` bail, both before the `router.push` at line 183. The overlay closes only through `cancel` (Esc) or click → `history.back()` → `popstate`, so `open` is still set when the window listener sees a digit. `<Activity>`/`cacheComponents` is off; note only.
  - Section 3: everything, including the order (the excess-property check rejects `alt` in a record until MOD-003 adds it), both render sites, `groupItems` carrying `{ src, alt }`, and the cap on the `<img>` box itself, not `w-full` + `object-contain` letterboxing (the overlay measures the img rectangle, my rev 1.7 Q6).
  - Section 4: `if (e.repeat) return;` first in MOD-012's keydown; Strict Mode cleanup of every listener and timer; full-screen state from `useSyncExternalStore`; Tailwind `hover:` still matches under a hidden cursor, so the idle state needs its own gate (`[data-idle]`); ignore pointer moves with unchanged `clientX`/`clientY` (Chrome's zero-movement synthetic move, unverified, cheap to guard).
  - Section 5: the name table (5 files, 13 lines). The LinkedIn URL (`leon-wu-tsan-yu`) and email (`leon.wu.tsan.yu`) do not contain any AC-125 string, even case-insensitively. prd.md:38 Purpose prose still says "Tsan-Yu Wu (Leon)"; it is not site code, so it is PM's call whether to change it.
  - Gotcha 11 (iframe without `allow="fullscreen"`): QA test note. QA tests top-level only.
- **Accepted as a device check (unverified):** `document.fullscreenEnabled` falsy on iPhone Safari. AC-096 already makes QA check it on a real iPhone.
- **Rejected:**
  - Q7 (b), Sidebar also checking `e.defaultPrevented`: not needed while every close path is async; it would add a second contract (the overlay must call `preventDefault` on keys it does not handle). The MOD-003 rule below is enough.
  - Q8 (b), `aria-hidden` on the hint: a focusable-by-click button that is hidden from screen readers fails WCAG 4.1.2, and the hint is real text that the live region already announces.
  - Q5 (b) and (c), `80vh` or `min(640px, 80vh)`: at "1280x800" with browser chrome the viewport is shorter than 800, so `80vh` gives a different cap on every machine and is harder to test. AC-128 names 640 px.

**Concerns** (must address before proceeding):
- **CONV-006's hint rule ("once the opening full-screen request has settled") has no channel from MOD-001 to MOD-012.** The design (UX 6.1) fills the gap with a heuristic: wait for the first `fullscreenchange`, or about 500 ms. Failure scenarios: (1) Safari or Chrome on macOS fires `fullscreenchange` after its full-screen animation; if that is later than 500 ms, a visitor who opened the deck from the sidebar sees "Press F for full screen" flash in front of an interviewer (PRD-compliant, but exactly what the design wanted to avoid); (2) every direct visit waits 500 ms + the 300 ms entrance delay for no reason, since no request exists. A one-field contract extension removes both: see D1. It changes what MOD-001 writes, so it is a CONV change through PM, not a spec detail.

**Recommendations** (rulings on the pstack open questions, Q1-Q8):
- **Q1, how MOD-012 knows the request settled:** D1 (a) below, recommended.
- **Q2, one-time read:** (a) `useRef` guard (corrected above).
- **Q3, `SectionItem.alt` once every record is filled:** (a) leave it optional (PRD 5 already says so). QA enforces AC-127 on the build: `grep -c 'alt=""'` in `site/.next/server/app/projects/*.html` must be 0. I log "make `alt` required" as a Phase 4 integration-review candidate; it costs one more MOD-003 run and changes no behaviour. D3 below.
- **Q4, AC-128 and `tabvault-mobile.jpeg`:** (a) CSS cap in the template only (MOD-003). MOD-006 has no file change for AC-128. The rev 1.9 PM entry's "AC-128 shrinks tabvault-mobile.jpeg" means "shows smaller" (PRD 4.2's wording). Doc-Sync note: AC-128 belongs in the MOD-003 spec; the MOD-006 spec gets no image-file task.
- **Q5, cap unit:** (a) `max-h-[640px]`, with `w-auto max-w-full h-auto` on the `<img>` and the border and rounding on the img. Arithmetic (not measured): `tabvault-mobile.jpeg` goes from about 714 px to 640 px tall (about 296 px wide) at 1280x800; nothing else currently in an Images section reaches 640 px; the ProjectDay singles (about 717 px uncapped) are capped by the same rule. At 375 px wide a portrait image hits 640 px before the column width; both AC-128 conditions still hold.
- **Q6, the hint's full-screen target:** (a) `document.documentElement`, the same element as MOD-001 and MOD-012's F key (UX 6.4 already says so), so `document.fullscreenElement` means the same thing on every path. In CONV-006 under D1 (a); in the MOD-012 spec under D1 (b).
- **Q7, AC-129:** (a). The `dialog[open]` bail in Sidebar, plus a MOD-003 rule: the overlay never closes the dialog synchronously from a `keydown`; it closes only via the `cancel` event (Esc, `preventDefault` then `history.back()`) or a click (`history.back()`), and `dialog.close()` runs from `popstate` after the closing animation. Digits do nothing in the overlay.
- **Q8, hint accessibility:** (a) `<button type="button" tabIndex={-1} aria-keyshortcuts="F">` with its visible text as its name. Matches UX 4.1 and 6.3.
- **Full-screen exit = leave:** count only a change from "in" to "out", with "in" read at subscribe time (above). The close button's own `exitFullscreen()` and the listener share one "already leaving" guard (my rev 1.7 Q3).

**Rulings on the design team's T1-T6 (review 2 section 4):**
- **T1, `--ss-edge: color-mix(in srgb, var(--text-muted) 65%, var(--bg))`: within limit 3. Accepted, with one placement rule.** It derives from existing variables with no new hex values. I re-computed the result: `#8f8f8f` on `#ffffff` is 3.23:1, `#888888` on `#161616` is 5.10:1, both above WCAG 1.4.11's 3:1. `color-mix` works in Chrome 111, Safari 16.2 and Firefox 113. Placement rule: MOD-012 declares `--ss-edge` and every other `--ss-*` token on its own slideshow root element, not in `globals.css` (MOD-001's file, limit 13). A custom property that uses `var()` is resolved where it is declared. The root sits under `<html class="dark">`, so it picks up the right theme. Declared anywhere above the `.dark` element, it would keep the light value in dark mode.
- **T2, A2 "⇄" drawn as SVG with the exact text visually hidden: accepted** for AC-100 and AC-105. Conditions (UI 7.12 already says most of this): the visible "Engineer" and "QA" and the SVG are `aria-hidden`; the hidden span carries exactly "Engineer ⇄ QA" and is hidden with a clip-based sr-only class, not `display:none` or `visibility:hidden` (those remove it from the accessibility tree). U+21C4 is outside Roboto's latin subset, so drawing it also avoids a system-font fallback glyph. QA checks AC-100 for A2 on the accessible name and by eye, not on raw `textContent` (that has the words twice).
- **T3, F-hint sizing (screen-anchored, `max(14px, 2.8% of frame height)`, em-based chip and gaps): confirmed.** It meets AC-102 (2.8% is above the 2.4% floor at every size; the 14 px floor only applies where 2.8% would be smaller). It meets limit 8's intent (placed from the screen corner, clear of the top edge, limit 5). It is an agreed exception to limit 7's "every size in frame units": its size follows the frame, and only its position is screen-based. One engineering note for the MOD-012 spec: UI 6.8 sizes the hint from `100dvh`, but UI 5 sizes the frame from `100vh` (UI 15 then says use `dvh` on iOS). Use `100dvh` for both so the hint and the frame scale from the same height on iPhone.
- **T4, B2 three-screen image from MOD-011: tracked as a dependency, accepted.** `/projectday-screens.webp`: the three screens at the same height, left to right Home, Gyms, Route, gaps of 5% of one screen's width, no outer margin, transparent background, at least 1500 px wide (AC-112). At that ratio the file is about 1.43:1, not the mock's 1.5:1 stand-in. The B2 box uses `contain`, so any ratio works. Its bytes count toward MOD-011's 800,000-byte allocation. Order: MOD-011 before MOD-012 (unchanged).
- **T5, WCAG 2.1.4 single-key shortcuts: technically acceptable; the risk acceptance is Leon's (D2).** The slideshow has no text input and owns the whole page. Its single-letter keys (F, M) and digits are the presenting interface the PRD requires. The PRD has no way to turn them off or remap them. So the "active only on focus" exception is arguable rather than clean. The site-wide `1`-`7` shortcuts (PRD 6, since rev 1.2) carry the same exposure today. The residual risk is speech-input users firing a shortcut by speaking a word.
- **T6, reduced-motion pattern site-wide: not now. Agreed.** The image overlay already has its own reduced-motion rule (AC-110, MOD-003). Shared code between MOD-003 and MOD-012 would need an owner and buys nothing. A site-wide motion rule changes user-facing behaviour, so it would be a PRD change. I list it as a Phase 4 integration-review candidate only.

**Design-file notes for Doc-Sync (where the approved files and the PRD differ, the PRD wins; Decisions already says review 2 section 3 wins for UI 6.4 and 7.4):**
- `slideshow-motion.md` line 16 still lists the "Details" cue (removed in revision 2, PRD Hidden job slides). It is stale and must not enter the MOD-012 spec.
- Review 2's L-3 row says the hint "becomes the first Tab stop on slide 1". UX 4.1 (revision 2) and PRD Opening say it is not a Tab stop. The PRD wins.
- UX 6.1's "about 500 ms" settle window is replaced by the D1 rule if Leon picks (a).
- UX 14's hand-offs to me are all accepted as engineering rules for the MOD-012 spec: navigation from pointer events by `pointerType`, with the synthetic `click` after a tap not firing Next again; `touch-action: pinch-zoom` on the layer and `overscroll-behavior: none` on the root; digits matched by `event.key` or `event.code` (Digit1-4, Numpad1-4), F and M by `event.key`; skip `focus()` when the layer is already `document.activeElement`. One addition: the `isComposing` and modifier checks run before the `e.repeat` check, and all three run before any branch.

**Approved**:
- The rev 1.9 PRD text: AC-096, 098, 113, 114, 115, 127, 128, 129, 130, 131, the reworded 4.11 sections, AC-112's 800,000-byte allocation and the MOD-011 file names match my rev 1.7 + 1.8 recommendations and the approved design. I found no contradiction between them.
- AC-125 as rewritten. The module list (MOD-001, 007, 008, 009, 010) is complete. MOD-002 and the project pages contain no full name.
- CONV-007 as adopted (the `dialog[open]` sentence included).
- The design files at ac1a07d are buildable within limits 1-13 on Next.js 16.2.9, with no new dependency and no `next.config.ts` change. Revision 2 and the A2 wording were not re-reviewed by the Design Lead. I checked them only against the technical limits (no new image files, no new fonts, A2 still inline SVG, the timeline cards still `<button>`s): no breach.
- Leon's pending UI sign-offs AC-017 (mod-home) and AC-091 (mod-project-multi-agent) are not blocked by this review. AC-091 can be signed off on the current build. MOD-003's overlay wraps the multi-agent feature image in a button, so QA re-checks AC-091 under AC-110 after step 1 below.

**Phase 4 integration-review candidates (logged then, not now):** `SectionItem.alt` required (Q3); reduced-motion site-wide (T6); plus the rev 1.7 items (TopNav.tsx dead code, head.png 1.83 MB, Subject.png 1.39 MB).

**Engineering order (final, after Doc-Sync; unchanged from rev 1.7 + 1.8 except where marked).** Every step keeps `npm run build` passing and lint at 0 errors. Every push to `main` deploys, so do not push between steps 4 and 5 unless both are in.
1. `engineer-mod-projects-grid` (MOD-003): `SectionItem.alt?`; `groupItems` carries `{ src, alt }`; both render sites use `alt={item.alt ?? ""}`; the overlay as a native `<dialog>` (CONV-007, Q7 close rule); the 640 px Images cap on the `<img>` box (AC-128).
2. Record modules, any order, after step 1: MOD-005 (rev 1.7 record; no rev 1.9 change); MOD-006 (offline copy and links, `featureImageAlt` and two item alts; no image-file change); MOD-004 (rev 1.8 copy, `featureImageAlt` and two item alts); MOD-011 (the four WebP files including the T4 composition, record fields, alts, 800,000 bytes for the four).
3. Page modules, any time: MOD-007 (AC-118, 119, 121), MOD-008 (AC-125), MOD-009 (AC-122), MOD-010 (AC-123, 125, 126).
4. `engineer-mod-slideshow` (MOD-012), after MOD-011. It can be built and checked by direct visit before the nav item exists. Under D1 (a), a missing `fs` field reads as "no request made".
5. `engineer-mod-site-shell` (MOD-001), last: nav item 7 with the UI 14 icon, key `7`, CONV-006 (with `fs` under D1 (a)), CONV-007 (both bails), AC-124, AC-125 at `layout.tsx:16`, the CV at cfa3367, AC-126.
6. MOD-002: no change.

QA: MOD-003 and the record modules after step 2 (AC-127 grep, AC-128 at 1280x800 and 375 px, AC-091 re-check); MOD-012 and MOD-001 together after step 5 (AC-094, 095, 096, 099, 129, 130 and 131 need both).

**Proposed Shared Conventions** (once the user approves, PM adds them to PRD section 9 Adopted Conventions; Doc-Sync carries them into production.md from there):
- Proposed Convention (CONV-006 amendment, only if D1 = (a)): replace the hint sentence and extend the value. MOD-001 writes `{ path, t, fs }`, where `fs` is `true` when it is about to call `document.documentElement.requestFullscreen()` in the same handler (that is, when `document.fullscreenEnabled`), otherwise `false`. MOD-012 shows the "Press F for full screen" hint only while slide 1 is in a browser window and `document.fullscreenEnabled` is true. After an opening from the site with `fs: true`, it waits until full screen starts (the hint then never shows) or about 1.5 seconds pass with the browser still windowed. On any other opening it shows the hint at once, after its entrance delay. Every full-screen request the slideshow makes (F and the hint) targets `document.documentElement`.

**Asking Leon (needs-human):**
- **D1, how the slideshow knows whether the site's full-screen request worked (the "Press F" hint).**
  - (a) recommended: amend CONV-006 as above. MOD-001 adds one field to what it already writes, and nothing else changes. Opening from the sidebar never flashes the hint, a direct visit shows it at once, and a refused request shows it within about 1.5 s. It needs a small PM change (CONV-006 text) before Doc-Sync.
  - (b): no contract change; MOD-012 uses the design's guess (wait up to about 500 ms for full screen). No PM step. Risk: if your Mac's full-screen animation takes longer than that, the hint flashes for a moment when you open the deck from the sidebar in an interview, and every direct visit shows the hint about half a second later.
- **D2, single-key shortcuts and WCAG 2.1.4 (design T5).**
  - (a) recommended: accept the residual risk for both the slideshow keys (F, M, digits) and the existing site keys `1`-`7`. Record it as a known accessibility limitation. No change.
  - (b): a PRD change adding a way to turn the shortcuts off (for example a toggle), with new design and engineering work in MOD-001 and MOD-012.
- **D3, the `alt` field on section images once every record has alt text.**
  - (a) recommended: leave it optional. QA checks the built pages for empty alts (AC-127). Making it required is logged for the Phase 4 integration review.
  - (b): one more short MOD-003 run after the record modules, making `alt` required so a missing alt fails the build.

### Review — 2026-11-01 — on-demand (AC-096 refused full-screen request: QA method)

Trigger: the [AMBIGUITY] marker Doc-Sync left in `modules/mod-slideshow/spec.md` (commit 2998d3f). My rev 1.9 review (b8395f1) said the MOD-012 QA spec states how to make the browser refuse the site's full-screen request; this entry supplies the method so PM can log it and Doc-Sync can copy it into the MOD-012 spec. No pstack findings file covers this question; none is required for this trigger.

**What I ran (observed, not assumed).** A throwaway test page in my scratchpad (not the site) in Chrome 156.0.8078.74 `--headless=new` on this Mac, driven over the Chrome DevTools Protocol from Node v20.20.2 with `--experimental-websocket` (no npm package). The page calls `document.documentElement.requestFullscreen()` from a `keydown` "7" handler and from a link `click` handler, the same as CONV-006 asks of MOD-001.
- (A) Untrusted `keydown` "7" sent by `Runtime.evaluate` with `userGesture: false`: `document.fullscreenEnabled` true; request rejected `TypeError: Permissions check failed`; `fullscreenerror` fired.
- (F) Untrusted `link.click()` with `userGesture: false`: same rejection and `fullscreenerror`.
- (B) The same untrusted `keydown` with `userGesture: true` (how the DevTools console and Puppeteer/Playwright `evaluate` run code): request **succeeded**. So a refusal cannot be made by typing the dispatch straight into the console.
- (C) Same as (B) but delayed by `setTimeout(..., 6000)`: rejected with `Permissions check failed` (the gesture's activation had expired).
- (D) Trusted `7` from CDP `Input.dispatchKeyEvent`: request succeeded, `fullscreenchange` fired with `document.fullscreenElement` set. Headless Chrome does enter full screen.
- (E) Test stub on `Element.prototype.requestFullscreen` (below), then a trusted `7`: `fullscreenEnabled` still true, `fullscreenerror` fired, the request rejected with the stub's error.

**Recommendations** (the method for the MOD-012 QA spec; PM logs it, Doc-Sync copies it):

- **Not valid for the refused-request case.** An iframe without `allow="fullscreen"`, or Firefox `full-screen-api.enabled = false`, makes `document.fullscreenEnabled` false. MOD-001 then writes `fs: false` and makes no request, and per AC-096 the hint does not show at all on a browser without full-screen support. These test the "no full-screen support" path, not a refusal. QA tests top-level pages only (my rev 1.9 note). A Chrome flag or site setting that blocks full screen does not exist in current Chrome.

- **Method 1 (main; a real browser refusal; QA agent, headless Chrome).** Chrome refuses `requestFullscreen()` when no user activation is present. Run the site's own entry handlers with an untrusted event and no user gesture:
  1. `cd site && npm run build && npm run start` (the build, at `http://localhost:3000`; `npm run dev` runs Strict Mode's extra effects and is not what QA verifies).
  2. Launch `"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --remote-debugging-port=9333 --user-data-dir=<scratch dir> --window-size=1280,800 http://localhost:3000/about`. Drive it with a small CDP script kept in QA's scratchpad (Node 20: `node --experimental-websocket <script>`; it uses `fetch` to `http://127.0.0.1:9333/json` and the global `WebSocket`; nothing is installed and nothing ships).
  3. Install the timing recorder (below) with `Runtime.evaluate`.
  4. Trigger with `Runtime.evaluate`, **`userGesture: false`** (the default; never `true`), in one expression that sets the start time first:
     - nav item: `__qa.t0 = performance.now(); document.querySelector('a[href="/slideshow"]').click()`
     - key 7: `__qa.t0 = performance.now(); document.body.dispatchEvent(new KeyboardEvent('keydown', { key: '7', code: 'Digit7', bubbles: true }))`
  5. Wait 4 s, then read `__qa` and `sessionStorage.getItem('slideshow-return')`.
  - Precondition for Engineer (MOD-001): the nav and `7` handlers must not ignore events with `isTrusted === false`. CONV-006 does not ask for such a check; if one is added, this method cannot run and QA falls back to Method 2.
  - A human can do Method 1 in desktop Chrome's DevTools console only with a delay longer than the activation lifetime (run C): `setTimeout(() => { __qa.t0 = performance.now(); document.querySelector('a[href="/slideshow"]').click(); }, 6000)`, then keep hands off the page for 6 s. Typed without the delay it succeeds (run B) and proves nothing. The 6 s delay is inside CONV-006's 10-second window because MOD-001 writes `t` when the handler runs, not when the command is typed.

- **Method 2 (backup and other browsers; a test-only stub; QA agent or human).** Before the trigger, paste into the DevTools console (or send by CDP `Runtime.evaluate`) on any site page:
  `Element.prototype.requestFullscreen = function () { queueMicrotask(() => document.dispatchEvent(new Event('fullscreenerror'))); return Promise.reject(new TypeError('QA stub: refused')); };`
  Then use the **real** Slideshow nav item or the real `7` key (in headless, a trusted CDP `Input.dispatchMouseEvent` or `Input.dispatchKeyEvent`). `fullscreenEnabled` stays true, so MOD-001 writes `fs: true` and the "request" is refused (run E). The stub lives only in that page session: a reload removes it, and it survives the client-side navigation to `/slideshow` that CONV-006 requires. It must never be added to `site/`. It works the same in Safari and Firefox consoles. It tests MOD-012's waiting logic, not the browser's own refusal, which is why Method 1 is the main method in Chrome.

- **Timing recorder** (install before the trigger, same page session; the hint is `button[aria-keyshortcuts="F"]` per my rev 1.9 Q8 ruling):
  ```js
  window.__qa = { t0: null, shown: null, fsSeen: false, errors: [] };
  document.addEventListener('fullscreenchange', () => { if (document.fullscreenElement) __qa.fsSeen = true; });
  window.addEventListener('unhandledrejection', e => __qa.errors.push(String(e.reason)));
  (function poll() {
    const h = document.querySelector('button[aria-keyshortcuts="F"]');
    if (__qa.t0 !== null && __qa.shown === null && h && h.checkVisibility({ opacityProperty: true, visibilityProperty: true }))
      __qa.shown = Math.round(performance.now() - __qa.t0);
    requestAnimationFrame(poll);
  })();
  ```
  `__qa.shown` is the milliseconds from trigger to the first frame the hint is visible at all (any opacity above 0), so a brief flash is also caught. Run each case 3 times and record every value.

- **Pass rules for AC-096 (proposed for the QA spec).**
  - Refused request (Method 1, nav item and key 7): `__qa.shown` between 1200 and 2000 ms (the ~1.5 s wait plus the up-to-300 ms entrance delay, with tolerance; below 1200 means it did not wait, which would flash on a successful opening; `null` or above 2000 fails), `__qa.fsSeen` false, `document.fullscreenElement` null, the `slideshow-return` key gone after mount, and `__qa.errors` empty (CONV-006: MOD-001 ignores the rejection).
  - Successful request, headless control: trusted CDP `Input.dispatchKeyEvent` "7" and a trusted `Input.dispatchMouseEvent` click on the nav item (run D shows headless enters full screen): `__qa.fsSeen` true and `__qa.shown` still null after 4 s.
  - Direct visit control: load `/slideshow` directly (install the recorder with `Page.addScriptToEvaluateOnNewDocument` and set `t0` there): `__qa.shown` at most about 500 ms (entrance delay plus tolerance).

- **Limits of headless Chrome.**
  - Headless full screen has no macOS full-screen animation, so `fullscreenchange` comes almost at once. The headless "never shows on a successful opening" result therefore does not prove the real case D1 was about: a slow animation on Leon's Mac in desktop Chrome, Safari and Firefox.
  - Headless cannot show Safari or Firefox behaviour, and cannot show iPhone Safari.
  - Headless can measure timing; it cannot judge by eye whether a one-frame flash was noticeable. The recorder catches any frame with opacity above 0, so the numeric rule is stricter than the eye.

- **Human sign-off needed for part of AC-096 (in the QA spec as a sign-off script, same as AC-017 and AC-091).**
  - Successful opening, by eye on the build, in desktop Chrome, Safari and Firefox on Leon's Mac: click the Slideshow nav item, then (separately) press `7`; "Press F for full screen" never appears, not even for a moment, during the full-screen animation. Optional: a screen recording to step through frame by frame.
  - iPhone Safari: no hint (already a device check in my rev 1.9 review).
  - The refused-request case needs **no** human sign-off: Method 1 in headless Chrome is a real browser refusal and gives a measured time. Method 2 in Safari or Firefox is optional extra evidence, not required.

**Approved**:
- AC-096 as written in PRD rev 1.10 is testable with the method above; no PRD text change is needed. Everything Method 1 and Method 2 need is already on this machine as `setup.md` describes it (Chrome 156, Node 20.20.2, `npm run build` and `npm run start`); no new dependency and no file in `site/`.

### Integration & Optimization Review — Phase 4 — 2026-11-01
Reviewed: MOD-001, MOD-003, MOD-004, MOD-005, MOD-006, MOD-007, MOD-008, MOD-009, MOD-010, MOD-011, MOD-012 (code changed this phase); MOD-002 (no code change).
Findings: 2 Concerns (INT-001, INT-002), 9 Recommendations (INT-003 to INT-011); 0 carried-forward DEFERRED rows (see project-planning/integration-review.md). 3 user-facing items escalated, not logged (SitePlus+ diagram and tree, pstack B-L2, site-wide reduced motion).

pstack input: project-planning/pstack-findings/2026-11-01-thermos-phase4.md (b6bbe0b). I checked every finding I cite against the code at 3cf21aa.
- Accepted: B-L4 (INT-003, ImageZoom.tsx:128-140, the close control is named by the image alt); Q-M1 (INT-004, ImageZoom.tsx:123-125 duplicates the Sidebar.tsx:220 guard); Q-L2 (folded into INT-005); B-L1 (INT-006, useFullscreenSession.ts:19-27, tab/newline and `/slideshow/` pass the check; not exploitable, because the only writer is same-origin, same-tab and under 10 s old); B-L3 (INT-007, useSlideInput.ts:144-159, a stale mouse entry poisons later touches on touch laptops); Q-H3 (INT-008, with MOD-012 proposed as owner of a `site/app/slideshow/handoff.ts`, so no unowned `site/lib/`; recommend defer); Q-H1 + Q-H2 (INT-009, deck.ts:3 and navigation.ts:90-101; module-internal, logged only for tracking; recommend defer); B-I2 (part of INT-001).
- Escalated (user-facing, CONV-006 change): B-L2 (duplicate history entry). TL recommends no change.
- Rejected: Q-H4, route group. It reverses T1 (b), which Leon adopted, and rewrites the Source Paths of MOD-001 to MOD-010. The shell's `return null` on /slideshow works and is QA'd (CONV-007), and the leftover `<main>` under the fixed layer causes no failure. Q-M2 to Q-M6, Q-LM1, Q-L1, Q-L4, Q-L5: MOD-012-internal structure with no failure scenario; not integration items. Q-M7: MOD-007-internal; the order and free-text period are intended (AC-118/119, QA 5591f89). Q-M8: the duplication is deliberate, because the deck's source is asset/content/interview-deck.md and the page's is experience.md (PRD sources), so deriving one from the other would couple MOD-012 to MOD-007 for no requirement. Q-L3: if ImageZoom unmounts while open, its refs are null, so `finishClose` returns early. The leftover listener is harmless, and no in-app path unmounts the page while the modal is open (links are inert, digits are blocked). B-I1: resize while open is cosmetic.

Other inputs:
- QA integration notes: metadataBase/og-image on 7 modules (INT-001); the drawer `querySelector` note (INT-011, the real defect is at phone widths); scan "file not found" for `/…` image paths (false positive, all files exist in site/public; logged under Skill Recommendations, not as a row); the Sidebar Email mailto carries `target="_blank"` (noted only: convention 6 reads it as an external link, the effect is at most a blank tab, not logged).
- Earlier log items: SectionItem.alt required (INT-005); TopNav.tsx (INT-010); head.png and Subject.png (INT-002, extended to the About photos); reduced motion site-wide (escalated, recommend no change); SitePlus+ diagram and tree (escalated with a how-to, MOD-004-only option recommended).
- Conflict and leak checklist, current-phase modules: routes unique; CONV-006 implemented on both sides (writer `{path,t,fs}` at Sidebar.tsx:91-105 matches the reader at useFullscreenSession.ts:29-50); CONV-007 both bails present (Sidebar.tsx:220, `return null` on /slideshow, Subject.png inside Sidebar); slide image file names unchanged (MOD-012 dependency on MOD-004/006/011); AC-125 name rule clean in source (no "Tsan-Yu" in app/, components/, data/); canonical and og:url on all 7 page files at www.leon-wu.com. No data, cache, log, job or secret paths exist in this static site, so no leakage surface beyond sessionStorage, which is same-origin and single-key.
- Not measured: the Phase 4 milestone "Lighthouse score above 90" has no run on record. After INT-002, the PM checkpoint should include one (Chrome DevTools Lighthouse on `npm run build && npm run start` or the Vercel preview, mobile preset). That is runnable with what setup.md provides (Chrome, Node, build and start). I could not rebuild here (the sandbox blocks the Google Fonts fetch); QA's builds at 3cf21aa and earlier pass.

Suggested grouping if approved (one engineer run per module, then QA, then Leon verifies): MOD-001: INT-001, INT-002, INT-010, INT-011. MOD-003: INT-003, INT-004, INT-005. MOD-012: INT-006, INT-007. Nothing has been pushed since b8395f1, and every push deploys, so push only after the checkpoint.

### Record Decisions — Phase 4 integration review — 2026-11-02
Leon, quoted by the coordinator: "all with recommend" (the coordinator showed him every row of project-planning/integration-review.md with the TL recommendation, and the three escalated items). The coordinator's reading below is also mine.
- APPROVED: INT-001 part 1 only (metadataBase), INT-002, INT-003, INT-004 (low priority), INT-005, INT-006, INT-007 (together with INT-006, first option), INT-010, INT-011.
- INT-001 part 2 (copy asset/og-image.png to site/public/) NOT approved: it had no recommendation and Leon has not said "use the OG image". Handling meanwhile: leave the og:image and twitter:image references in the seven page files as they are; after part 1 they resolve to https://www.leon-wu.com/og-image.png and 404, so link previews show no image. Removing them would take seven page-module runs that get undone once the file exists, so I do not recommend it. If Leon says "use the OG image" before the MOD-001 run, I record it and it joins that run.
- DEFERRED: INT-008 (until after the first deploy), INT-009. Each is listed again in later phase reviews; DEFERRED does not pass the final checkpoint.
- Escalated items: B-L2 and site-wide reduced motion, no change. SitePlus+ diagram and tree not decided (conditional recommendation); stays off, coordinator asks Leon separately. No PM change needed.
- Assigned Module (from the Module Map Source Paths, as named in each row's fix text that Leon saw): mod-site-shell (MOD-001): INT-001, INT-002, INT-010, INT-011. mod-projects-grid (MOD-003): INT-003, INT-004, INT-005. mod-slideshow (MOD-012): INT-006, INT-007. No row splits. Leon did not confirm the assignments separately; if he disagrees with one, re-run me and I change it.
- blast-radius first (coordinator runs /pstack:blast-radius before the engineer starts): INT-001 (root metadata inherited by every page module), INT-002 (images used by MOD-008 and MOD-012), INT-005 (SectionItem type used by the MOD-004, MOD-006 and MOD-011 records). If a report changes the plan, run me again with it as an on-demand-review.
- Follow-up outside the engineer runs: after INT-010, PM and Doc-Sync drop site/components/TopNav.tsx from the MOD-001 Source Path.
- Order: blast-radius for INT-001/002/005; then claude --agent engineer-mod-site-shell "integration-fix INT-001 INT-002 INT-010 INT-011", claude --agent engineer-mod-projects-grid "integration-fix INT-003 INT-004 INT-005", claude --agent engineer-mod-slideshow "integration-fix INT-006 INT-007" (MOD-012 needs no blast-radius and can start now; the three modules touch disjoint files). Each then QA for that module, Leon verifies each row, and claude --agent tech-lead "confirm-fix INT-..." closes it. Then Lighthouse and claude --agent pm "checkpoint". Push only after the checkpoint.

---

## Phase Plan

Phase 1 — Site Shell
- MOD-001: Site Shell (Layout, Sidebar, Nav, Dark Mode)
- Milestone: Layout shell renders on all routes; dark mode toggle works without hydration flash; Roboto font loads via next/font; sidebar collapses correctly on mobile.

Phase 2 — Core Content Pages
- MOD-002: Home Page
- MOD-007: Experience Page
- MOD-008: About Page
- MOD-009: Skills Page
- MOD-010: Contact Page
- Milestone: All five content pages render inside the site shell with correct copy, metadata, and external links.

Phase 3 — Project Detail Pages
- MOD-003/004/005/006: Projects split panel + three detail pages (SitePlus+, Multi-Agent System, TabVault)
- Milestone: Projects split panel renders with independent scroll; all three project detail pages render case study content correctly; [slug] dynamic route returns 404 for unknown slugs.

Phase 4 — Deploy
- Production deploy to Vercel; domain configured; canonical URLs and OG tags updated with confirmed domain.
- Milestone: Site live on custom domain; Lighthouse score above 90; all external links verified working.

---

## Current Phase

Phase 4 — Deploy

---

## Engineering Progress

### Phase 1 — Site Shell — MOD-001 — 2026-06-28 — COMPLETE

**Engineer commit:** `3d3f7db`

Deliverables confirmed:
- Next.js 16 App Router scaffold cleaned up (Geist/Geist_Mono removed, `@import url()` removed, static project dirs deleted)
- Persistent left sidebar (fixed, w-56 desktop, off-canvas mobile) — IBM Carbon color tokens applied
- Profile section: "Leon" wordmark, nav links (Home, Projects, Experience, About, Skills, Contact) with SVG icons
- Connect block: LinkedIn, GitHub, Email with `target="_blank" rel="noopener noreferrer"`
- Keyboard shortcuts 1–6 wired as global `keydown` listener in `Sidebar.tsx`; suppressed on inputs and modifier keys
- Dark mode: blocking inline script in `layout.tsx`, class-based (`dark` on `<html>`), localStorage + prefers-color-scheme, no hydration flash
- Mobile: fixed top bar (h-12) + off-canvas drawer + hamburger toggle
- IBM Carbon Design System color tokens (White + G100 themes) defined in `globals.css` via `@theme inline`
- `@variant dark (&:where(.dark, .dark *));` registered in `globals.css`
- Roboto via `next/font/google`; no `@import url()` in any CSS
- Body `h-screen overflow-hidden`; root layout `main.flex-1.flex.flex-col.overflow-y-auto`
- `[slug]` dynamic route with `dynamicParams = false` and `generateStaticParams`
- Footer removed (no footer in the PRD or implementation)

**QA result (2026-06-28):** PASS (after AC-006 apple-touch-icon fix applied inline by QA)

---

### Phase 2 — Core Content Pages — MOD-002/007/008/009/010 — 2026-06-28 — COMPLETE

**Engineer commit:** `0a1835b` (initial) → `db942ab` (og:url/canonical fix)

Deliverables confirmed:

**Home (MOD-002):** `site/app/page.tsx` — H1 "Hey, I'm Leon", H2 "Full-Stack Engineer", bio and status line per spec, three CTAs (LinkedIn external, /contact, /Leon_cv.pdf download), projects list (title + tech, no dates). Wrapper `px-8 py-16 max-w-2xl mx-auto`. No headshot.

**Experience (MOD-007):** `site/app/experience/page.tsx` + `site/data/experience-data.ts` — two-column timeline grid, dot + vertical line, two roles (Exascend, GoFreight) in reverse-chron order with verbatim bullets and tech chip badges, date format "MMM YYYY", Education section at bottom (Northeastern MS, NCCU BA). No em dashes.

**About (MOD-008):** `site/app/about/page.tsx` — two verbatim paragraphs per spec, no education block on this page, no photo.

**Skills (MOD-009):** `site/app/skills/page.tsx` + `site/data/skills-data.ts` — six labeled chip groups with all skill items verbatim per spec.

**Contact (MOD-010):** `site/app/contact/page.tsx` — intro line verbatim, email mailto, LinkedIn, GitHub (all with target/rel), resume `<a download>`, no form.

All five pages: lint PASS, build PASS, OG/canonical tags present (placeholder domain pending).

**QA result (2026-06-28):** PASS (after og:url and canonical fix applied; all ACs pass)

---

### Phase 3 — Project Detail Pages — MOD-003/004/005/006 — 2026-06-28 — COMPLETE

**Engineer commits:** implemented in same session; final state reflected in PRD revision 1.3

**Key design decisions beyond original spec:**

1. **Split panel replaces grid:** Projects page redesigned from a grid (MOD-003 original spec) to an onur.dev-style split panel — persistent `<aside>` (w-64, independent scroll) on the left, project detail pane (`flex-1 overflow-y-auto`) on the right. The projects layout uses `flex flex-1 min-h-0 overflow-hidden` for scroll isolation.

2. **Single `[slug]` dynamic route:** `site/app/projects/[slug]/page.tsx` serves all three project detail pages via `generateStaticParams`. `dynamicParams = false` ensures 404 on unknown slugs.

3. **SitePlus+ rename:** "Marketing Analytics Platform" renamed to "SitePlus+" with slug `siteplus`. Source file updated to `case-study-siteplus-detailed.md`. MOD-004 now tracks Project Detail: SitePlus+.

4. **ProjectEntry data model:** New TypeScript interfaces — `ProjectEntry`, `ProjectLink`, `ProjectSection` — replacing the original `Project` interface. `atAGlance` field, `links: ProjectLink[]`, and `sections: ProjectSection[]` added.

5. **Inline bold renderer:** Paragraphs containing `**bold**` markdown syntax render as `<strong>` in the UI via a lightweight inline parser.

6. **Case study content from asset files:** Full case study content read from `asset/content/case-study-*-detailed.md` files; content not inlined as TypeScript strings.

7. **/projects redirect:** `/projects` redirects immediately to `/projects/multi-agent-system` (first project).

Three project detail pages delivered: SitePlus+ (`/projects/siteplus`), Multi-Agent System (`/projects/multi-agent-system`), TabVault (`/projects/tabvault`).

**QA result:** Not formally logged in module status files (Phase 3 implementation preceded formal QA pass assignment). Build PASS, lint PASS confirmed via engineer self-check. PRD revision 1.3 synced to reflect all implemented changes.

---

## QA Results

### Phase 1 — MOD-001 — 2026-06-28 — PASS

See `project-planning/modules/mod-site-shell/status.md` for full AC-by-AC results.
Overall: PASS after AC-006 (apple-touch-icon) fixed inline. 10 of 10 ACs pass.

### Phase 2 — MOD-002/007/008/009/010 — 2026-06-28 — PASS

See individual module status files for full AC-by-AC results.
Overall: PASS after og:url/canonical fix applied to all five pages.
- MOD-002 (Home): ACs 011–018 all PASS
- MOD-007 (Experience): ACs 053–058 all PASS
- MOD-008 (About): ACs 059–065 all PASS
- MOD-009 (Skills): ACs 066–071 all PASS
- MOD-010 (Contact): ACs 072–078 all PASS

### Phase 3 — MOD-003/004/005/006 — not formally QA'd

Phase 3 was implemented without a separate QA agent pass. Build PASS and lint PASS confirmed. The implementation diverged significantly from the original MOD-003 spec (grid to split panel), which is why no module-level QA entries exist for MOD-003/004/005/006. PRD revision 1.3 captures the as-built state.

### MOD-003 — Projects Split Panel — 2026-06-29 — PASS

See `project-planning/modules/mod-projects-grid/status.md` for full AC-by-AC results.
Overall: PASS. All 8 ACs (AC-019 through AC-026) verified. Build clean.

### MOD-006 — Project Detail: TabVault — 2026-06-29 — FAIL (QA Run 1)

3 ACs failing. See `project-planning/modules/mod-project-tabvault/status.md` for full details.
- AC-055 FAIL: Tags wrong — 11 chips instead of 8; wrong chip labels (spec: "Java 21 / Spring Boot" as 1 chip; data: "Java 21" + "Spring Boot 3.3" as 2 chips; spec: "React / TypeScript PWA" as 1 chip; data: "React" + "TypeScript" + "PWA" as 3 chips; spec: "Chrome Extension (MV3)"; data: "Chrome Extension MV3" missing parentheses)
- AC-058 FAIL: "Architecture" section entirely missing; only 7 sections instead of 8; section 3 heading has spurious comma ("How it works, end to end" vs "How it works end to end"); section 7 heading has spurious comma ("What I learned, and what I would improve" vs "What I learned and what I would improve")
- AC-064 FAIL: generateMetadata returns only title and description; OG tags (og:title, og:description, og:url, og:type, og:images), Twitter card tags, and canonical URL all absent

### MOD-006 — Project Detail: TabVault — 2026-06-29 — PASS (QA Run 2 — Regression)

All 3 previously failing ACs now fixed. No regressions in any previously passing ACs. All 12 ACs pass.
- AC-055 REGRESSION PASS: tags array now exactly 8 combined-chip labels per spec with parentheses around "MV3" restored
- AC-058 REGRESSION PASS: 8 sections in correct order, "Architecture" section added at position 4, spurious commas removed from headings 3 and 8
- AC-064 REGRESSION PASS: generateMetadata now returns full OG block (title, description, type, url, images), Twitter card block (card, title, description, images), and alternates.canonical
See `project-planning/modules/mod-project-tabvault/status.md` QA Run 2 for full AC-by-AC results.

### MOD-005 — Project Detail: Multi-Agent System — 2026-06-29 — PASS

Regression test run. Both previously failing ACs (AC-046, AC-052) now fixed. All 12 ACs pass.
See `project-planning/modules/mod-project-multi-agent/status.md` for full AC-by-AC results.

---

## Checkpoint History

Phase 1 approved — 2026-06-29 — commit: 8ad37237db6db4bdb632c5103484eefa679981a4

Phases 1, 2, and 3 completed in a single engineering session on 2026-06-28. No prior checkpoints were recorded. This entry covers all three phases retroactively.

**Phase 1 — Site Shell:** COMPLETE. MOD-001 QA PASS (10/10 ACs). Sidebar, dark mode, mobile layout, IBM Carbon tokens, keyboard shortcuts all delivered.

**Phase 2 — Core Content Pages:** COMPLETE. MOD-002/007/008/009/010 QA PASS (all ACs). Home, Experience, About, Skills, Contact all delivered with correct copy, metadata, and external links.

**Phase 3 — Project Detail Pages:** COMPLETE. Split-panel projects layout, three detail pages via single [slug] route, SitePlus+ rename, new ProjectEntry data model, inline bold renderer, scroll isolation all delivered. Build PASS, lint PASS. No separate QA agent pass logged — implementation reviewed against PRD 1.3.

**Design decisions made beyond original spec (approved by user, reflected in PRD 1.3):**
- Footer removed from all pages
- IBM Carbon White/G100 palette formalized as primary design system
- Projects page redesigned from grid to onur.dev-style split panel with independent scroll
- "Marketing Analytics Platform" renamed to "SitePlus+" with slug `siteplus`
- Keyboard shortcuts 1–6 wired globally in Sidebar.tsx
- ProjectEntry data model replaces original Project interface

**Proceeding to Phase 4 — Deploy.**

---

Phase 2 approved — 2026-06-29 — commit: 25138ee6a9de35de1d81e8e11255e973fc9b5911

**Phase 2 — Core Content Pages — QA formally closed.**

All five Phase 2 modules passed dedicated QA agent verification on 2026-06-29. All acceptance criteria confirmed:
- MOD-002 Home: H1/H2, bio, status line, three CTAs (LinkedIn / Reach out / Download CV), projects list with tech strings. ACs 011–018 all PASS.
- MOD-007 Experience: two-column timeline, dot + vertical line, tech chips, "MMM YYYY – MMM YYYY" date format, GoFreight including "Project Planning" tag, Education section. ACs 053–058 all PASS.
- MOD-008 About: two verbatim paragraphs, no education block on the about page, no photo. ACs 059–065 all PASS.
- MOD-009 Skills: six labeled chip groups, all skill items verbatim per spec. ACs 066–071 all PASS.
- MOD-010 Contact: intro line verbatim, email mailto, LinkedIn, GitHub (all target/rel), resume `<a download>`, no form. ACs 072–078 all PASS.

One fix round was required across all five pages: og:url and alternates.canonical were absent in the initial implementation; engineer applied a single fix commit (`db942ab`) and all five pages then passed. No other issues found.

---

Phase 3 approved — 2026-06-29 — commit: 25138ee6a9de35de1d81e8e11255e973fc9b5911

**Phase 3 — Project Detail Pages — QA formally closed.**

All four Phase 3 modules passed dedicated QA agent verification on 2026-06-29. All acceptance criteria confirmed:

- MOD-003 Projects Split Panel: 8/8 ACs (AC-019 through AC-026) PASS on first QA run. /projects redirect, persistent aside (w-64 xl:w-72), active highlight, scroll isolation, aside hidden below lg — all verified. No bug-fix round required.

- MOD-004 SitePlus+: 12/12 ACs PASS after one bug-fix round. Failures in QA Run 1: tags wrong (11 chips instead of 10, "Full-Stack" missing, "Java/Spring Boot" split, "Cloudflare" extra tag, wrong ordering), "Live demo" link label had URL appended, "Architecture" and "Challenges and how I resolved them" sections absent, two heading commas, OG/Twitter/canonical metadata absent. All fixed by engineer before QA Run 2 (regression); all 12 ACs pass.

- MOD-005 Multi-Agent System: 12/12 ACs PASS after one bug-fix round. Failures in QA Run 1: "Decisions worth calling out" section entirely absent (7 sections instead of 8), heading commas on sections 3 and 8, OG/Twitter/canonical metadata absent. All fixed; all 12 ACs pass in regression run.

- MOD-006 TabVault: 12/12 ACs PASS after one bug-fix round. Failures in QA Run 1: tags wrong (11 chips instead of 8, combined labels split, parentheses missing from "Chrome Extension (MV3)"), "Architecture" section missing (7 sections instead of 8), heading commas on sections 3 and 8, OG/Twitter/canonical metadata absent. All fixed; all 12 ACs pass in regression run.

**Common pattern in the bug-fix round:** MOD-004, MOD-005, and MOD-006 all shared the same two classes of defects — (1) missing case study sections and spurious heading commas, and (2) OG/Twitter/canonical metadata entirely absent from generateMetadata. These were consistent engineer implementation gaps across all three detail pages, resolved in a single fix pass.

**Open items affecting Phase 4:**
- Domain name: not yet selected. Blocking — required for Vercel domain configuration, canonical URLs, and OG url tags. All placeholder `your-domain.com` values across all ten pages must be updated once the domain is confirmed.
- OG image 1200x630px: not yet produced. Non-blocking — OG image placeholder `/og-image.png` used in metadata; affects social link preview appearance only.
- Project screenshots: not yet provided for any of the three detail pages. Non-blocking.

**Proceeding to Phase 4 — Deploy.**

---

## Sync Reports

### Sync Report — Initial Sync — 2026-06-28
**Sync type:** initial
**PRD Revision:** 1.2
**Files created:**
- project-planning/production.md
- project-planning/modules/mod-site-shell/spec.md
- project-planning/modules/mod-site-shell/status.md
- project-planning/modules/mod-home/spec.md
- project-planning/modules/mod-home/status.md
- project-planning/modules/mod-projects-grid/spec.md
- project-planning/modules/mod-projects-grid/status.md
- project-planning/modules/mod-project-marketing/spec.md
- project-planning/modules/mod-project-marketing/status.md
- project-planning/modules/mod-project-multi-agent/spec.md
- project-planning/modules/mod-project-multi-agent/status.md
- project-planning/modules/mod-project-tabvault/spec.md
- project-planning/modules/mod-project-tabvault/status.md
- project-planning/modules/mod-experience/spec.md
- project-planning/modules/mod-experience/status.md
- project-planning/modules/mod-about/spec.md
- project-planning/modules/mod-about/status.md
- project-planning/modules/mod-skills/spec.md
- project-planning/modules/mod-skills/status.md
- project-planning/modules/mod-contact/spec.md
- project-planning/modules/mod-contact/status.md
- .claude/agents/engineer-mod-site-shell.md
- .claude/agents/qa-mod-site-shell.md
- .claude/agents/engineer-mod-home.md
- .claude/agents/qa-mod-home.md
- .claude/agents/engineer-mod-projects-grid.md
- .claude/agents/qa-mod-projects-grid.md
- .claude/agents/engineer-mod-project-marketing.md
- .claude/agents/qa-mod-project-marketing.md
- .claude/agents/engineer-mod-project-multi-agent.md
- .claude/agents/qa-mod-project-multi-agent.md
- .claude/agents/engineer-mod-project-tabvault.md
- .claude/agents/qa-mod-project-tabvault.md
- .claude/agents/engineer-mod-experience.md
- .claude/agents/qa-mod-experience.md
- .claude/agents/engineer-mod-about.md
- .claude/agents/qa-mod-about.md
- .claude/agents/engineer-mod-skills.md
- .claude/agents/qa-mod-skills.md
- .claude/agents/engineer-mod-contact.md
- .claude/agents/qa-mod-contact.md

**AMBIGUITY markers logged:**
- production.md: PRD lists domain name as a still-needed blocking asset — og:url and canonical URL values cannot be populated until the domain is confirmed. PM must provide the domain before production deploy.
- mod-home/spec.md: same domain/og:url ambiguity (replicated to each affected module spec).
- mod-projects-grid/spec.md: same domain/og:url ambiguity.
- mod-project-marketing/spec.md: same domain/og:url ambiguity.
- mod-project-multi-agent/spec.md: same domain/og:url ambiguity.
- mod-project-tabvault/spec.md: same domain/og:url ambiguity.
- mod-experience/spec.md: same domain/og:url ambiguity.
- mod-about/spec.md: same domain/og:url ambiguity.
- mod-skills/spec.md: same domain/og:url ambiguity.
- mod-contact/spec.md: same domain/og:url ambiguity.
- status.md Phase Plan: PRD revision 1.2 does not contain a Phases and Milestones section. Phase structure is proposed from module dependency order. PM must confirm.
- status.md Current Phase: same — PM must confirm phase structure.

**CONFLICT markers logged:** none

**verify-sync.sh result:** Script requires prd.md to be inside the project-planning/ directory; this project keeps prd.md at the repo root. Manual verification performed in lieu of script: Check 1 (MOD-IDs) — PASS (PRD has no MOD-IDs, nothing to verify); Check 2 (orphan specs) — PASS (all 10 spec.md files map to Module Map entries); Check 3 (Tech Stack) — PASS (Next.js 16.2.9, TypeScript, Tailwind CSS v4, Roboto, marked, Vercel all present in production.md); Check 4 (US-IDs) — PASS (PRD has no US-IDs, nothing to verify); Check 5 (AMBIGUITY markers logged) — PASS (all 10 AMBIGUITY markers logged in status.md Sync Reports); Check 6 (Phase names) — N/A (PRD has no Phases section; AMBIGUITY marker placed in Phase Plan).

---

### Sync Report — Delta Sync — 2026-06-29
**Sync type:** delta
**PRD Revision:** 1.3
**PM Update reference:** 2026-06-29 — [SUBSTANTIVE] — split-panel replaces grid, SitePlus+ rename, ProjectEntry data model, structured TypeScript content, inline bold renderer, /projects redirect
**Files modified:**
- project-planning/modules/mod-projects-grid/spec.md — rewrote entirely: grid layout replaced with split-panel layout; /projects now redirects to /projects/multi-agent-system; aside (w-64, xl:w-72) with project list and active highlight; scroll isolation via flex flex-1 min-h-0 overflow-hidden; aside hidden below lg; stale grid ACs (AC-019 through AC-028) replaced with split-panel ACs
- project-planning/modules/mod-project-marketing/spec.md — route changed from /projects/marketing-analytics to /projects/siteplus; title changed to "SitePlus+"; source file changed to case-study-siteplus-detailed.md; atAGlance field added; description pull-quote rendering added; content model changed from fs.readFileSync+marked to structured ProjectEntry TypeScript data; InlineBold helper added; tag list updated; link labels updated; stale ACs replaced with PRD 1.3 ACs (AC-029 through AC-040)
- project-planning/modules/mod-project-multi-agent/spec.md — source file changed to case-study-multi-agent-detailed.md; atAGlance field added; description pull-quote rendering added; content model changed from fs.readFileSync+marked to structured ProjectEntry TypeScript data; InlineBold helper added; sections list updated (8 sections per PRD 1.3); link labels updated; stale ACs replaced with PRD 1.3 ACs (AC-041 through AC-052)
- project-planning/modules/mod-project-tabvault/spec.md — source file changed to case-study-tabvault-detailed.md; atAGlance field added; description pull-quote rendering added; content model changed from fs.readFileSync+marked to structured ProjectEntry TypeScript data; InlineBold helper added; link label updated to "GitHub: tab-management"; stale ACs replaced with PRD 1.3 ACs (AC-053 through AC-064)
- project-planning/status.md — Last Action updated; this sync report appended
**Files created:** none
**Module removals noted:** none
**AMBIGUITY markers added:** none (domain/og:url ambiguity carried forward in all four updated specs — it was present in revision 1.2 and remains unresolved in revision 1.3)
**AMBIGUITY markers resolved:** none
**CONFLICT markers added:** none
**verify-sync.sh result:** Script requires prd.md inside the project-planning/ directory; prd.md is at the repo root. Manual verification performed: Check 1 (MOD-IDs) — PASS (PRD 1.3 has no MOD-IDs); Check 2 (orphan specs) — PASS (all 10 spec.md files map to Module Map entries); Check 3 (Tech Stack) — PASS (unchanged from revision 1.2 sync); Check 4 (US-IDs) — PASS (no US-IDs in PRD 1.3); Check 5 (AMBIGUITY markers) — PASS (domain/og:url ambiguity carried forward and logged); Check 6 (Phase names) — PASS (Phase Plan unchanged).

---

### Sync Report — Delta Sync — 2026-11-01
**Sync type:** delta
**PRD Revision:** 1.4
**PM Update reference:** 2026-11-01 [SUBSTANTIVE] Add ProjectDay as a fourth project (MOD-011, /projects/projectday) and update the Multi-Agent System page content, tags, At-a-glance and feature image (MOD-005); PRD rev 1.4
**Files modified:**
- project-planning/production.md — Project Summary (four projects, sidebar, success criteria) per PRD section 1; routing table replaced with PRD section 6 table (adds /projects/projectday, fixes stale rows); "three" to "four" project detail pages; Assets rows (case-study-*-detailed.md, multi-agent feature image, ProjectDay case study); Module Index row MOD-011; revision header 1.4
- project-planning/modules/mod-project-multi-agent/spec.md (MOD-005) — At-a-glance, tags (adds Python), description, feature image + caption, body-copy statement, section headings with PRD commas ("How it works, end to end"; "What I learned, and what I would improve"; AC-046 updated to match), removed "optional assets" lines (diagram now confirmed), four slugs, AC-091 and AC-092 added
- project-planning/modules/mod-projects-grid/spec.md (MOD-003) — Goal/success-criterion quotes (four projects), project order (ProjectDay second), AC-086, Integration Points entry
- project-planning/modules/mod-home/spec.md (MOD-002) — Projects list requirement (PRD 4.1), ProjectDay list requirement, AC-087, Integration Points entry
**Files created:**
- project-planning/modules/mod-project-projectday/spec.md (MOD-011, AC-079 to AC-090)
- project-planning/modules/mod-project-projectday/status.md
- .claude/agents/engineer-mod-project-projectday.md
- .claude/agents/qa-mod-project-projectday.md
**Module removals noted:** none
**AMBIGUITY markers added:**
- mod-project-projectday/spec.md: the existing domain/og:url ambiguity, carried into the new spec exactly as in every other page spec ("PRD lists domain name as a still-needed blocking asset — og:url and canonical URL values cannot be populated until the domain is confirmed. PM must provide the domain before production deploy."). It is the open item PM already tracks; no new question.
**AMBIGUITY markers resolved:** none
**CONFLICT markers added:** none
**PM-noted open point resolved by the source file:** the ProjectDay source file no longer carries the "No public links yet" header line; its remaining editor lines ("Editor's note (not page copy)" and "Suggested listing fields") are labeled as not page copy, and PRD AC-082 and AC-084 already say no links and no editor's notes render. No marker placed.
**Notes for PM / Tech Lead (not written into specs):**
- Module Map has no Source Path column. The MOD-011 wrapper quotes PM's proposed source path (ProjectDay record in site/data/projects-data.ts plus site/public/projectday-*). Ownership of the shared data file and shared [slug]/page.tsx is for the Tech Lead; the multi-agent feature image copy into site/public is MOD-005 work.
- Drift not covered by this change and left untouched (PM listed only MOD-002/003/005/011): PRD 4.3 and 4.5 section headings carry commas ("How it works, end to end"; "What I learned, and what I would improve") while MOD-004 and MOD-006 specs and ACs (AC-058, AC-046-style) have none; MOD-004 and MOD-006 specs still quote the "three strong projects" goal and say "all three project slugs"; production.md still carries rev 1.2 text for Design palette, Layout, data-file/markdown statements, and Module Index descriptions for MOD-003 and MOD-004.
- site/data/projects-data.ts section headings for MOD-005 have no commas; the revised AC-046 and AC-092 require the PRD/source wording, so MOD-005 needs a spec-update.
**verify-sync.sh result:** Script aborts at check 1 (set -e with grep finding no MOD-IDs in prd.md); same pre-existing failure mode as earlier syncs. Manual verification: Check 1 PASS (PRD has no MOD-IDs); Check 2 PASS (all 11 spec.md files map to Module Map rows); Check 3 PASS (Tech Stack unchanged); Check 4 PASS (no US-IDs); Check 5 PASS (the one new AMBIGUITY marker is logged above and is the already-tracked domain item); Check 6 N/A (no PRD phase section; Phase Plan unchanged, MOD-011 and MOD-005 join the current Phase 4 per PM). No HTML template comments remain.


---

### Sync Report — Delta Sync — 2026-11-01 (rev 1.5 + rev 1.6)
**Sync type:** delta (rev 1.5 [SUBSTANTIVE] [ARCHITECTURAL] and rev 1.6 [SUBSTANTIVE], synced together)
**PRD Revision:** 1.6
**PM Update reference:** 2026-11-01 [SUBSTANTIVE] Module Map Project files line becomes the folder site/public/ (E2), and PRD 9 adopts CONV-005; PRD rev 1.6 (also covers the 2026-11-01 [SUBSTANTIVE] [ARCHITECTURAL] rev 1.5 entry before it)
**Files modified:**
- project-planning/production.md — rev header 1.6; Project Summary 2026/2027; removed the `marked` Tech Stack row and the "case studies rendered from markdown" convention (rev 1.2 drift; PRD 5 content model); Layout and Color Palette replaced with PRD 2 text (IBM Carbon tokens, no footer); Data files paragraph now describes record files; Assets rows (Domain, SitePlus+ and TabVault screenshots); domain statement, OG image, Deployment and non-blocking assets from PRD 6 and 7 replace the old AMBIGUITY marker; CONV-001 to CONV-005 copied verbatim under Shared Conventions; Module Index descriptions for MOD-001, 002, 003, 004, 005, 006, 008, 011
- modules/mod-home/spec.md (MOD-002) — Home copy per PRD 4.1: H1 with emoji, no subtitle, CTA labels, tertiary CTA "Download CV", bio, status line; AC-011, AC-012, AC-013 and AC-014 follow (AC-013/014 text refers to PRD 4.1, which the Requirements now carry), AC-015 label; domain line
- modules/mod-projects-grid/spec.md (MOD-003) — ProjectEntry interfaces per PRD 5; CONV-001, CONV-002, CONV-005 as Requirements; link prefix + label, section items, feature image alt/caption requirements; Integration Points for MOD-011 (AC-089 added) and MOD-005 (AC-091, AC-092)
- modules/mod-project-marketing/spec.md (MOD-004) — "four projects"; nine sections with PRD commas and Images; links as prefix + label (Demo Video, GitHub); Record 1 with `name` and featureImage; interfaces per PRD 5; record file site/data/projects/siteplus.ts and CONV-001/CONV-005 lines; AC-032, AC-034, AC-036; removed the screenshots-optional non-goal; domain line
- modules/mod-project-tabvault/spec.md (MOD-006) — same set as MOD-004 for TabVault (nine sections, Images, links, Record 3, record file tabvault.ts); AC-056, AC-058, AC-060
- modules/mod-project-multi-agent/spec.md (MOD-005) — links as prefix + label, Record 2 with featureImageAlt and featureImageCaption, alt text requirement, interfaces per PRD 5, record file multi-agent-system.ts and CONV lines, AC-044, AC-048, AC-092 per PRD 4.4, new Integration Points (MOD-003, AC-091); domain line
- modules/mod-project-projectday/spec.md (MOD-011) — record file projectday.ts and CONV lines, interfaces per PRD 5, Integration Points gains AC-089; domain line
- modules/mod-contact/spec.md (MOD-010) — intro line "2026/2027" (Context, Requirements; AC-072 refers to it); PRD section numbers 4.9 to 4.10; domain line
- modules/mod-experience/spec.md, modules/mod-about/spec.md, modules/mod-skills/spec.md — domain line; PRD section numbers (4.6 to 4.7, 4.7 to 4.8, 4.8 to 4.9)
- .claude/agents/engineer-<dir>.md and qa-<dir>.md for all 11 modules — regenerated from the current templates (tools and model copied unchanged; body verbatim); each now carries its Module Map Source Path; MOD-001 also carries the Project files line; dependencies aligned with the specs (MOD-004/005/006 now MOD-001 and MOD-003 only; the old "MOD-004 creates [slug]/page.tsx" wording is gone, since CONV-001 gives the template to MOD-003); MOD-003 also gets read access to the MOD-004/005/006/011 status files for the cutover; descriptions normalised
- project-planning/status.md — Last Action; this report
**Files created:** none
**Module removals noted:** none
**AMBIGUITY markers added:** none
**AMBIGUITY markers resolved:** the domain/og:url marker in the specs of MOD-002, 004, 005, 006, 007, 008, 009, 010, 011 and in production.md (PRD 6 and 7: https://www.leon-wu.com). The OG image stays an open non-blocking item (PRD 7), written into production.md as the PRD says it, without a marker.
**CONFLICT markers added:** none
**Drift fixed that the PM entry listed:** MOD-004 and MOD-006 commas ("How it works, end to end"; "What I learned, and what I would improve") and "four projects"; production.md palette, layout, data-file/markdown statements, Module Index text for MOD-003 and MOD-004. Also fixed in production.md because they contradict the PRD the same way (not listed by PM): MOD-001 "footer", MOD-002 "role subtitle", MOD-005/006 "renders case study markdown", MOD-008 "education block".

**Spec-update scope per module (ACs changed; CONV-004 limits each engineer to these)**
- MOD-003 (mod-projects-grid): no AC text changed. New Requirements: ProjectEntry fields featureImageAlt/featureImageCaption, feature image caption directly below, link prefix + label, items. Integration Points carry AC-089, AC-091, AC-092.
- MOD-005 (mod-project-multi-agent): AC-044, AC-048, AC-092 changed; AC-091 unchanged (alt, caption, landscape image); new Requirements: record file, alt text, CONV-001/005.
- MOD-004 (mod-project-marketing): AC-032, AC-034, AC-036 changed.
- MOD-006 (mod-project-tabvault): AC-056, AC-058, AC-060 changed.
- MOD-011 (mod-project-projectday): no AC text changed; Requirements add the record file and CONV-001/005; AC-089 added to Integration Points.
- MOD-002 (mod-home): AC-011, AC-012, AC-013 (via Requirements), AC-014 (via Requirements), AC-015 changed. Per Tech Lead review the code already matches the new copy: verification only, no code change expected.
- MOD-010 (mod-contact): AC-072 (intro line now 2026/2027). The code already says it.

**Engineer sequence (source: Tech Lead Reviews 2026-11-01 change review, db8a1ba, and Decisions E1 = A2; these are Tech Lead decisions, not PRD text, so they are recorded here and not written into the specs)**
1. MOD-003 step 1: add `featureImageAlt?` and `featureImageCaption?` to `ProjectEntry`; in `[slug]/page.tsx` render the feature image as `<figure><img alt={project.featureImageAlt ?? ""} ...>{caption && <figcaption>}</figure>` and remove `height="500px"`; do not split the data file and do not change the array yet.
2. Record files, any order, each only its own file under CONV-005 (one named export annotated `ProjectEntry`, `import type` only): MOD-005 `multiAgentSystem` with `featureImage: "/multi-agent-horizontal.png"` plus alt and caption, and copy `asset/diagrams/multi-agent-horizontal.png` to `site/public/multi-agent-horizontal.png` (do not delete `multi-agent.png` yet); MOD-004 `siteplus` copied from `projects-data.ts` plus the delta; MOD-006 `tabvault` likewise; MOD-011 `projectday` with `links: []` and no `featureImage`. These files are not imported until step 3, so each engineer checks build and lint only and records "renders after the MOD-003 cutover".
3. MOD-003 step 2 (cutover): replace the three inline records with imports of the four record files, array order `[multiAgentSystem, projectday, siteplus, tabvault]` (ProjectDay at index 1, so `/projects` still redirects to multi-agent-system); `projects-data.ts` keeps only interfaces and the array; build must produce four `/projects/[slug]` pages.
4. MOD-005 finishing run: delete `site/public/multi-agent.png` (skip if Leon keeps the file until the Phase 4 integration review).
5. MOD-002: verification only. 6. MOD-010: any time. 7. QA after step 3.
Every step keeps `npm run build` passing and lint at 0 errors (baseline 9 `no-img-element` warnings). The rev 1.4 preservation list in the Tech Lead review still applies in full.

**Noted, not changed (no PM Updates entry lists them; nothing was invented):**
- The MOD-001, MOD-007, MOD-008 and MOD-009 specs were last synced at PRD 1.2 and still differ from the PRD (MOD-001: footer, old palette `#f2f0ef`, "Connect" block; MOD-008: education block; others not checked line by line). MOD-001 will run only for a future og-image copy (E3); run a PM-triggered delta first if that matters.
- MOD-010 AC-076 and the Requirement allow the label "Download resume"; PRD 4.10 now says "Download CV" or "Resume (PDF)". The code reads "Download resume (PDF)". Left as is.
- The PRD 4.1 "Layout notes" (outer wrapper classes) are not in the MOD-002 spec; no AC asks for them.
**verify-sync.sh result:** the script passes checks 1 to 3 and then aborts at check 4 (set -e with grep finding no US-IDs in the PRD), the same pre-existing failure as earlier syncs. Manual checks: Check 4 PASS (the PRD has no US-IDs); Check 5 PASS (no AMBIGUITY markers remain in any spec or production.md); Check 6 N/A (no PRD phase section; Phase Plan and Current Phase unchanged, Phase 4). No HTML template comments in any spec or production.md.

### Sync Report — Delta Sync — 2026-11-01 (rev 1.7 + 1.8 + 1.9 + 1.10)
**Sync type:** delta (rev 1.7 [SUBSTANTIVE] [ARCHITECTURAL], rev 1.8 [SUBSTANTIVE], rev 1.9 [SUBSTANTIVE] [ARCHITECTURAL] and rev 1.10 [SUBSTANTIVE], synced together)
**PRD Revision:** 1.10
**PM Update reference:** 2026-11-01 [SUBSTANTIVE] Answer Tech Lead D1-D3: CONV-006 `fs` field and hint timing (AC-096), single-key shortcuts as a known accessibility limitation, SectionItem alt stays optional; no feature branch; PRD rev 1.10 (also covers the rev 1.7, 1.8 and 1.9 entries before it, and the Tech Lead Reviews 0051840 and b8395f1)
**Files modified:**
- project-planning/production.md — rev header 1.10; Goal 5 (interview deck); sidebar subtitle "Full-Stack Software Engineer"; /slideshow route row; Assets rows (Resume PDF at cfa3367, Skills content, ProjectDay screenshots, Interview deck copy, Seattle photos, Slideshow design at ac1a07d); "Leon Wu" name rule; removed the ProjectDay-screenshots non-blocking row (supplied, PRD 7); CONV-006 and CONV-007 copied verbatim; Module Index rows MOD-001, 003, 004, 005, 006, 007, 009, 010, 011 updated, MOD-012 added
- modules/mod-site-shell/spec.md (MOD-001) — rebuilt against PRD 2, 3, 4.11 Opening and 6 (the spec was at PRD 1.2): profile section, seven nav items, "Online" block, no footer, IBM Carbon tokens, shortcuts and suppression rules, AC-093, AC-094, AC-095, AC-099, AC-124, AC-125, AC-126, AC-129; CONV-006 and CONV-007; Tech Lead engineering rules; Integration Points with MOD-012 and MOD-003
- modules/mod-experience/spec.md (MOD-007) — rebuilt against PRD 4.7 as a whole: layout, two roles per CV, two education entries, interfaces with `tags`, AC-118, AC-119, AC-121, AC-125, AC-126 (AC-055 and AC-056 replaced by AC-118 and AC-119)
- modules/mod-about/spec.md (MOD-008) — rebuilt against PRD 4.8: no education block (AC-062 now says so), AC-125, AC-126
- modules/mod-skills/spec.md (MOD-009) — rebuilt against PRD 4.9: six new groups, source file, AC-067, AC-122, AC-125, AC-126
- modules/mod-contact/spec.md (MOD-010) — rebuilt against PRD 4.10: email only, order Email, LinkedIn, GitHub, Resume, label "Download CV" or "Resume (PDF)", no phone, AC-123, AC-125, AC-126
- modules/mod-projects-grid/spec.md (MOD-003) — image overlay, Images-section cap, alt text (PRD 4.2), `SectionItem.alt?`, CONV-007 overlay rules, Tech Lead rules (dialog, cancel and popstate, 640 px cap, alt grep), AC-108, AC-109, AC-110, AC-127, AC-128, AC-129, AC-125, AC-126; Integration Points refreshed for MOD-011 (AC-089, AC-111), MOD-005 (AC-091, AC-092) and MOD-004 and MOD-006 (AC-127)
- modules/mod-project-marketing/spec.md (MOD-004) — tags (Spring Security / JWT), link "Demo: " + "interactive walkthrough", e479e22, alts, Record 1 with featureImageAlt, AC-031, AC-032, AC-034, AC-120, AC-127, AC-126; Integration Points with MOD-012
- modules/mod-project-multi-agent/spec.md (MOD-005) — At-a-glance, description, two links (no tab-vault.com), rev 1.7 body copy, Record 2, AC-042, AC-044, AC-092 changed, AC-117, AC-126, AC-127; QA note for AC-091 under AC-110
- modules/mod-project-tabvault/spec.md (MOD-006) — At-a-glance, offline statement, one link, alts, Record 3 with featureImageAlt, AC-054, AC-056 changed, AC-116, AC-117, AC-126, AC-127; Integration Points with MOD-012
- modules/mod-project-projectday/spec.md (MOD-011) — rebuilt from PRD 4.6: seven sections with Images, three-screen feature image and caption, file names and composition rules (T4), Record 4, AC-084 and AC-089 changed, AC-111, AC-112, AC-127, AC-126; Integration Points with MOD-003, MOD-002, MOD-012
- modules/mod-home/spec.md (MOD-002) — revision header and AC-126 only (no PRD change to Home)
- project-planning/status.md — Last Action; this report
**Files created:**
- project-planning/modules/mod-slideshow/spec.md (MOD-012; AC-095 to AC-100, AC-102 to AC-107, AC-113 to AC-115, AC-130, AC-131, plus AC-117 and AC-126)
- project-planning/modules/mod-slideshow/status.md
- .claude/agents/engineer-mod-slideshow.md and .claude/agents/qa-mod-slideshow.md (template tools and model copied unchanged; Source Path site/app/slideshow/; read access to the status files of MOD-001, 004, 006, 011; design files at ac1a07d and the deck at ac1a07d named as read inputs)
**Module removals noted:** none
**AMBIGUITY markers added:**
- modules/mod-slideshow/spec.md: [AMBIGUITY: AC-096's refused-request case needs a way for QA to make the browser refuse the site's full-screen request; Tech Lead review b8395f1 says "the MOD-012 QA spec states how (Tech Lead to supply if Doc-Sync cannot)", and neither the PRD nor the review states the method] — Doc-Sync does not invent it. The Tech Lead supplies it (via PM to log it), then Doc-Sync writes it into the spec.
**AMBIGUITY markers resolved:** none (the earlier domain markers were resolved in the rev 1.5 + 1.6 sync)
**CONFLICT markers added:** none
**Tech Lead Doc-Sync notes applied:** `slideshow-motion.md` line 16 "Details" cue named as stale in the MOD-012 spec and not carried; Design Lead review 2 L-3 row ("first Tab stop") named as overridden by the PRD and UX 4.1; UX 6.1 "about 500 ms" window replaced by CONV-006; deck slide 2 "(opens the ... detail slide)" notes and the note under the timeline named as annotations, not on-screen text; review 2 section 3 wins for UI 6.4 and 7.4; AC-128 placed in MOD-003 only (MOD-006 has no image-file task); AC-129 in MOD-001 and MOD-003; AC-117 in MOD-005, 006, 012; AC-125 in MOD-001, 003, 007, 008, 009, 010 (the Tech Lead's list is MOD-001, 007, 008, 009, 010; MOD-003 carries it because the /projects routes use the root description, listed so QA sees it); AC-126 in every spec for its own routes.
**Noted for PM (not written into specs as decisions):**
- Items the older specs carried that PRD 1.10 no longer states were kept unchanged and marked in MOD-007 and MOD-008 only where the PRD is silent: page headings "Experience" and "About" (PRD 4.7 and 4.8 do not give one; 4.9 does for Skills) and "No photo" on About (PRD 4.8 is silent). Confirm or drop. Contact and the other specs keep their earlier heading line the same way.
- PRD 1 Purpose (prd.md:38) still reads "Tsan-Yu Wu (Leon)"; production.md Project Summary copies it verbatim. The Tech Lead noted it is not site code and is PM's call whether to change it.
- AC-017 and the MOD-002 spec: PM's rev 1.7 note says "AC-017 download name unchanged"; in the MOD-002 spec AC-017 is the above-the-fold criterion. No change made.
- MOD-005 AC-091 still says the alt text is "proposed" (PRD wording kept); Record 2 gives the alt text.
**Engineer sequence (source: Tech Lead Reviews 0051840 and b8395f1 and Decisions "Branch"; Tech Lead decisions, not PRD text, so recorded here and not as spec requirements). Work stays on main; every push deploys, so do not push between MOD-012 and MOD-001 unless both are in.**
1. MOD-003 (spec-update: `SectionItem.alt?`, `groupItems` carries `{ src, alt }`, both render sites, the overlay as a native `<dialog>`, 640 px cap).
2. Record modules, any order, after step 1: MOD-005, MOD-006, MOD-004, MOD-011 (the four WebP files including the T4 composition).
3. Page modules, any time: MOD-007, MOD-008, MOD-009, MOD-010.
4. MOD-012 (implement), after MOD-011; can be built and checked by direct visit before the nav item exists.
5. MOD-001 (spec-update) last: nav item 7 with the slideshow-ui.md 14 icon, key 7, CONV-006 with `fs`, CONV-007 with both bails, AC-124, AC-125 at layout.tsx:16, the CV at cfa3367, AC-126.
6. MOD-002: no change.
QA: MOD-003 and the record modules after step 2 (AC-127 grep, AC-128 at 1280x800 and 375 px, AC-091 re-check); MOD-012 and MOD-001 together after step 5.
**Spec-update scope per module (ACs changed; CONV-004 limits each engineer to these):**
- MOD-003: AC-108, 109, 110, 127, 128, 129 (new); AC-125, 126; Integration AC-089, 091, 092, 111 refreshed.
- MOD-004: AC-031, 032, 034 changed; AC-120, 127 new; AC-126.
- MOD-005: AC-042, 044, 092 changed; AC-117, 127 new; AC-126.
- MOD-006: AC-054, 056 changed; AC-116, 117, 127 new; AC-126.
- MOD-011: AC-084, 089 changed; AC-111, 112, 127 new; AC-126.
- MOD-007: AC-055, 056 replaced by AC-118, 119; AC-054 order wording; AC-121, 125, 126 new.
- MOD-008: AC-062 changed (no education block); AC-125, 126 new.
- MOD-009: AC-067 changed; AC-122, 125, 126 new.
- MOD-010: AC-076 label changed; AC-123, 125, 126 new.
- MOD-001: AC-001, 002, 005, 010 changed (AC-005 now "no footer"); AC-093, 094, 095, 099, 124, 125, 126, 129 new.
- MOD-012: new module, all ACs.
- MOD-002: AC-126 only.
**verify-sync.sh result:** the script passes checks 1 to 3 and then aborts at check 4 (set -e with grep finding no US-IDs in the PRD), the same pre-existing failure as earlier syncs. Manual checks: Check 4 PASS (the PRD has no US-IDs); Check 5 PASS (the one AMBIGUITY marker in any spec is logged above); Check 6 N/A (no PRD phase section; Phase Plan and Current Phase unchanged, Phase 4). No HTML template comments in production.md or any spec.

---

### Sync Report — Delta Sync — 2026-11-01 (rev 1.11)
**Sync type:** delta
**PRD Revision:** 1.11
**PM Update reference:** 2026-11-01 [SUBSTANTIVE] Log the Tech Lead's AC-096 refused-request QA method for the MOD-012 spec; record the About page as built (AC-132 replaces "no photo"); page headings for Experience, About and Contact; "Leon Wu" in the Purpose line; correct the rev 1.7 AC-017 note; PRD rev 1.11
**Files modified:**
- project-planning/modules/mod-slideshow/spec.md (MOD-012) - AMBIGUITY marker replaced by the AC-096 QA method (Tech Lead 17e70cc): test runs, not-valid list, Method 1, Method 2, timing recorder, pass rules, headless limits, human sign-off script; revision header 1.11
- project-planning/modules/mod-site-shell/spec.md (MOD-001) - engineering note: nav and key-7 handlers must not ignore isTrusted false events; revision header 1.11
- project-planning/modules/mod-about/spec.md (MOD-008) - AC-063 dropped, "No photo" lines removed; PRD 4.8 Sections and AC-132 added; Purpose, Context, Requirements and Output updated; revision header 1.11
- project-planning/modules/mod-experience/spec.md (MOD-007) - "carried from earlier syncs" remark replaced with PRD section 4.7 source; revision header 1.11
- project-planning/modules/mod-contact/spec.md (MOD-010) - heading line sourced from PRD section 4.10; revision header 1.11
- project-planning/production.md - Project Summary Purpose line now "Leon Wu"; Module Index MOD-008 description updated (no photo clause replaced by the sections as built)
**Files created:** none
**Module removals noted:** none
**AMBIGUITY markers added:** none
**AMBIGUITY markers resolved:**
- mod-slideshow/spec.md: AC-096 refused-request QA method (answered by Tech Lead 17e70cc via PM rev 1.11)
**CONFLICT markers added:** none
**Not changed:** AC-017 note correction (status.md only, no spec change); agent wrappers (Source Paths, dependencies and spec paths unchanged); AC-091 "proposed" wording (PM left it as is). The old MOD-008 status.md QA record for AC-063 is a QA record and left untouched.
**Spec-update scope:** MOD-008: AC-063 dropped, AC-132 added (page already matches). MOD-001: engineering note only. MOD-012: QA method only. MOD-007, MOD-010: no AC change.
**verify-sync.sh result:** checks 1 to 3 PASS, then the script aborts at check 4 (set -e with grep finding no US-IDs in the PRD), the same pre-existing failure as earlier syncs. Manual: Check 4 PASS (no US-IDs); Check 5 PASS (no AMBIGUITY marker removed or added; the slideshow marker is gone); Check 6 N/A (Phase Plan unchanged). No HTML template comments added.

---

### Sync Report — Delta Sync — 2026-11-01 (rev 1.12)
**Sync type:** delta
**PRD Revision:** 1.12
**PM Update reference:** 2026-11-01 [SUBSTANTIVE] TabVault keeps its shorter case-study text: exception to CONV-003 for /projects/tabvault, AC-133 pins the text at c612306; PRD rev 1.12
**Files modified:**
- project-planning/modules/mod-project-tabvault/spec.md (MOD-006) - word-for-word requirement for paragraphs outside "The problem" and "Impact" replaced by PRD 4.5 Body copy (verbatim); AC-133 added; revision header and Related User Stories line 1.12
- project-planning/production.md - CONV-003 now carries the exception sentence; revision header 1.12
**Files created:** none
**Module removals noted:** none
**AMBIGUITY markers added:** none
**AMBIGUITY markers resolved:** none
**CONFLICT markers added:** none
**Not changed:** AC-116 (unchanged by PRD); agent wrappers (Source Paths, dependencies, spec paths unchanged); other module specs (CONV-003 reaches them only through production.md).
**Spec-update scope:** MOD-006: no code change expected (page at c612306 is the reference). QA re-verifies against AC-133.
**verify-sync.sh result:** checks 1 to 3 PASS, then the script aborts at check 4 (set -e with grep finding no US-IDs in the PRD), the same pre-existing failure as earlier syncs. Manual: Check 4 PASS (no US-IDs); Check 5 PASS (no marker added or removed); Check 6 N/A (Phase Plan unchanged). No HTML template comments added.

---

## Skill Recommendations

Pattern: Next.js App Router dark mode without hydration flash — blocking inline script in layout.tsx sets the theme class synchronously before React hydration, reading localStorage with prefers-color-scheme fallback. This avoids the flash that useEffect-only solutions produce on SSR pages.
Why: This pattern recurs on every SSR project with class-based theming and is non-obvious. A reusable skill would save the engineer from rediscovering the dangerouslySetInnerHTML script approach each time.
Agent: tech-lead

Pattern: scan-integration.sh reports "file not found" for every `/…` image path in a Next.js spec (e.g. /siteplusplus-home.jpg), because it resolves them against the project root instead of the framework's public directory (site/public/). QA flagged it on MOD-004 and MOD-012, and it produced 14 false leads in the Phase 4 review.
Why: false leads cost every QA and Tech Lead run a manual check. The script should resolve root-relative URL paths against `<source root>/public` (Next.js, Vite) when such a directory exists, or print them as "URL path, not checked".
Agent: tech-lead
