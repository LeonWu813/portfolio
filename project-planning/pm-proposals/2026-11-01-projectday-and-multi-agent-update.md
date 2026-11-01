Status: pending

# PM proposal: add ProjectDay as a fourth project, update the Multi-Agent System page and its image

- Date: 2026-11-01
- Mode: change (proposal pass, nothing applied)
- Requested by Leon, verbatim: "I have update the multiagent system @../multi-agent-software-development-system/ARCHITECTURE.md and create a new project @../projectday/ please help update the content of the multiagent system and add a nother projectday project. Also I would like to change the image on the software development system please update it base on the newest design and make it horizonal instead of vertical."
- Inputs read: `prd.md` (repo root, Revision 1.3), `project-planning/status.md`, all `project-planning/modules/*/status.md`, `asset/content/case-study-multi-agent-detailed.md` (uncommitted rewrite), `asset/content/case-study-projectday-detailed.md` (new, uncommitted), `asset/diagrams/multi-agent-horizontal.html` and `.png` (3080x1560, landscape)
- Proposed PRD revision: 1.3 -> 1.4
- Proposed new IDs: MOD-011; AC-079 to AC-092 (the highest AC ID in any module status file is AC-078; no other proposal is pending)

---

## 1. Things to know first

1. **The PRD is at the repo root (`prd.md`), but the framework expects `project-planning/prd.md`.** The PM write scope, the handoff hook, and Doc-Sync's `verify-sync.sh` all look for `project-planning/prd.md`. Both earlier sync reports say the script could not run for this reason and Doc-Sync checked by hand instead. Question 12 proposes moving the file in this change.
2. **This PRD uses an older format.** It has no US-IDs, no MOD-IDs, no Phases section and no AC-IDs. Doc-Sync assigned the AC-IDs inside the module specs. The full quality checklist therefore fails on structure for the whole PRD, not because of this change. This proposal does not restructure the PRD. It names the new module MOD-011 and gives the new requirements AC-IDs (AC-079 to AC-092) so they can be traced. Restructuring the whole PRD would be a separate change.
3. **Existing AC-IDs collide.** In the module status files, AC-053 to AC-058 belong to both Experience (MOD-007) and TabVault (MOD-006), and AC-059 to AC-064 belong to both About (MOD-008) and TabVault. Doc-Sync assigned them, and this change does not fix them. The new IDs start at AC-079 so they don't collide with anything.
4. **The site has changed outside the framework since the last checkpoint.** Commits `6fb90ad` to `29b3a16` ("site ready", "design update", "update portfilio", "update RWD", the project page mobile nav fixes) did not go through PM, Doc-Sync or QA. One of them, `f3834eb`, added `site/public/multi-agent.png` and screenshots for SitePlus+ and TabVault. PRD 1.3 has no feature-image requirement and still lists the multi-agent diagram and the screenshots as "Still needed, optional". So the PRD, the specs and the built site no longer fully match. The Engineer for MOD-005 may find code that differs from its spec. I recommend that the Tech Lead looks at this drift before Engineering starts (see the "Next steps" section at the end). Deciding how is not a PM call.
5. **Section headings differ across documents.** PRD 1.3 lists "How it works, end to end" and "What I learned, and what I would improve" (with commas) for MOD-005, and the new multi-agent asset uses the commas too. The MOD-005 QA run judged the commas wrong against the spec, which uses "How it works end to end". This proposal does not change the MOD-005 section list (the coordinator confirmed the headings are unchanged). Doc-Sync should know about the mismatch.
6. **The new diagram contains em dashes.** Two labels in `multi-agent-horizontal.html` use them: "BUILD & VERIFY — ONE MODULE AT A TIME" and "Coordinator — the main Claude Code session...". PRD section 2 says "No em dashes anywhere in site copy." See question 16.
7. **The ProjectDay draft includes editor's notes that are not page copy.** These are "*(confirm it is live before publishing)*" and "Suggested listing fields: ...". AC-084 makes sure they never appear on the page. The same goes for the "Feature image: ..." line in the multi-agent draft (AC-092).

---

## 2. Proposed PRD change (verbatim text to write; `prd.md` at Revision 1.4)

Only the parts listed below change. Everything else stays word for word.

### 2.1 Header

```
**Revision:** 1.4
**Date:** 2026-11-01
```
(The Author line stays as it is.)

### 2.2 Table of Contents, section 4 list

Replace the section 4 lines with:
```
4. Page Requirements
   - 4.1 Home
   - 4.2 Projects (split panel)
   - 4.3 Project Detail: SitePlus+
   - 4.4 Project Detail: Multi-Agent Software Development System
   - 4.5 Project Detail: TabVault
   - 4.6 Project Detail: ProjectDay
   - 4.7 Experience
   - 4.8 About
   - 4.9 Skills
   - 4.10 Contact
```
The headings "### 4.6 Experience", "### 4.7 About", "### 4.8 Skills" and "### 4.9 Contact" are renumbered to 4.7, 4.8, 4.9 and 4.10. Only the numbers change, not the text (question 13).

### 2.3 Section 1, Overview

- Purpose: "The site presents Leon's three flagship projects, work history, and technical skills" becomes "The site presents Leon's four flagship projects, work history, and technical skills".
- Goal 2: "Showcase three strong projects as full case studies, each reachable in one click from the projects sidebar." becomes "Showcase four strong projects as full case studies, each reachable in one click from the projects sidebar."
- Success Criteria, bullet 1: "The top three projects are visible in the projects sidebar without scrolling on a standard laptop viewport." becomes "All four projects are visible in the projects sidebar without scrolling on a standard laptop viewport."
- Success Criteria, bullet 2: "Every project links to a working live demo and a GitHub repository." becomes "Every project links to its GitHub repository and, where one exists, to a working live product (a website or an App Store listing)." (question 11)

### 2.4 Section 4.2, Projects (Split Panel): add after the "Behavior" paragraph's bullet list

```
**Project order:** ProjectDay appears directly after Multi-Agent Software Development System in the project list. The order of the other projects does not change, and `/projects` still redirects to `/projects/multi-agent-system`.
```
(Position depends on question 7.)

### 2.5 Section 4.4, Project Detail: Multi-Agent Software Development System

Replace the Header area table with:

```
| Element | Value |
|---|---|
| Project name (H1) | Multi-Agent Software Development System |
| At-a-glance | Sole architect · 6 specialized agents + coordinator · Human-approved at every handoff · Shipped TabVault (live) and ProjectDay (iOS) |
| Tags | Claude Code · Bash · Python · Git · Multi-agent · Systems Design |
| Link 1 | Built by the system: tab-vault.com — https://tab-vault.com |
| Link 2 | System repo — https://github.com/LeonWu813/multi-agent-software-development-system |
| Link 3 | TabVault repo — https://github.com/LeonWu813/tab-management |
| Link 4 | ProjectDay repo — https://github.com/LeonWu813/ProjectDay |
| Feature image | `asset/diagrams/multi-agent-horizontal.png` (landscape, 3080x1560). It replaces the current portrait diagram in the same position on the page. Editable source: `asset/diagrams/multi-agent-horizontal.html`. |
| Feature image caption | Human approval sits on every arrow. The coordinator runs the next step only after the human says yes. |
```
(The At-a-glance wording depends on question 4, Tags on question 9, Link 4 on question 8, and the caption on question 15.)

Add after the "Case study sections (in order)" list (the list itself does not change):

```
**Body copy:** Section paragraphs match `asset/content/case-study-multi-agent-detailed.md` as of revision 1.4 (6 agents plus a coordinator, PM two-pass approval, scope check, pstack reviews, integration review, repeat-failure escalation, and an Impact section covering TabVault and ProjectDay).

**Acceptance criteria (added in revision 1.4):**
- AC-091: On /projects/multi-agent-system, the feature image is the landscape diagram from `asset/diagrams/multi-agent-horizontal.png`, not the earlier portrait diagram. It fills the width of the content column with no cropping on desktop (1280px wide) and mobile (375px wide). It has alt text describing the workflow (proposed: "Workflow diagram of the multi-agent system. A planning row runs from user requirements through PM, Tech Lead, human setup and approval, PM finalize, and Doc-Sync. A build row runs through Engineer, QA, Tech Lead integration review, PM checkpoint, and project complete, with loops for bugs, repeat failures, spec issues and retrospectives, all run by a coordinator session."), and the caption above appears directly below it.
- AC-092: The At-a-glance line, tags, four links, description pull-quote, and every section paragraph on /projects/multi-agent-system match revision 1.4 and the source file word for word. The editor's line "Feature image: ..." from the source file does not appear on the page.
```

### 2.6 New section 4.6, Project Detail: ProjectDay (inserted after 4.5 TabVault)

```
### 4.6 Project Detail: ProjectDay

**Route:** /projects/projectday

**Source file:** `asset/content/case-study-projectday-detailed.md`

**Header area:**

| Element | Value |
|---|---|
| Project name (H1) | ProjectDay |
| At-a-glance | Product owner + orchestrator · 12 modules, built by my multi-agent system · Supabase + AWS video pipeline · Submitted to the App Store (Oct 2026) |
| Tags | TypeScript · React Native / Expo · Supabase (Postgres, Auth, Edge Functions) · AWS (S3, MediaConvert, CloudFront, CDK) · EAS · i18next · GitHub Actions |
| Link 1 | GitHub: ProjectDay — https://github.com/LeonWu813/ProjectDay |
| Link 2 | App Store — https://apps.apple.com/app/id6827211725 (only once the listing is live; see question 4) |
| Feature image | [set by question 6] |

**Case study sections (in order):**
1. The problem
2. My role
3. How it works end to end
4. Notable technical decisions
5. Impact and status
6. What I learned and what I'd improve

**Inline bold:** Paragraphs may contain `**bold text**` markdown, which renders as `<strong>` in the UI.

**Acceptance criteria:**
- AC-079: /projects/projectday renders the H1 "ProjectDay".
- AC-080: The At-a-glance line below the H1 reads exactly as in the header table, in the same muted style as the other project pages.
- AC-081: Exactly seven tag chips render, with the labels in the header table, in that order.
- AC-082: The links in the header table render with exactly those labels and URLs, each opening in a new tab. No App Store link renders until the listing is confirmed live.
- AC-083: The description pull-quote reads exactly as Record 4's `description`, in the same style as the other project pages.
- AC-084: Six sections render in the order listed, with exactly those headings. Every paragraph matches the source file word for word. The editor's notes "(confirm it is live before publishing)" and "Suggested listing fields: ..." do not appear anywhere on the page.
- AC-085: Text written as `**bold**` in the source renders as bold, and no literal asterisks show.
- AC-086: ProjectDay appears in the projects side panel at the position set in section 4.2, showing its title and tech line. It is highlighted as active while /projects/projectday is open.
- AC-087: ProjectDay appears in the Home page projects list with its title and tech line, links to /projects/projectday, and shows no date.
- AC-088: The page title is "ProjectDay — Leon Wu". The page has a description meta tag, Open Graph and Twitter card tags, and a canonical URL, like the other project pages.
- AC-089: The feature image set by question 6 renders with meaningful alt text and no cropping on desktop (1280px wide) and mobile (375px wide). If question 6 decides on no image, the page renders without an empty image slot.
- AC-090: /projects/projectday is generated at build time. /projects/siteplus, /projects/multi-agent-system and /projects/tabvault still render, and an unknown slug under /projects still returns 404.
```

### 2.7 Section 5, Content Model: Record 2 updated, Record 4 added

Record 2 (Multi-Agent) becomes:
```
slug: "multi-agent-system"
title: "Multi-Agent Software Development System"
tech: "Harness Engineering · AI Agents · Systems Design · Claude Code"
tags: ["Claude Code", "Bash", "Python", "Git", "Multi-agent", "Systems Design"]
atAGlance: "Sole architect · 6 specialized agents + coordinator · Human-approved at every handoff · Shipped TabVault (live) and ProjectDay (iOS)"
description: "A team of six AI agents, run by a coordinator session, that plan, build, and QA software through a human-approved workflow. It has shipped two products: TabVault, a live full-stack web app, and ProjectDay, an iOS app submitted to the App Store."
links:
  - { label: "Built by the system: tab-vault.com", href: "https://tab-vault.com" }
  - { label: "System repo", href: "https://github.com/LeonWu813/multi-agent-software-development-system" }
  - { label: "TabVault repo", href: "https://github.com/LeonWu813/tab-management" }
  - { label: "ProjectDay repo", href: "https://github.com/LeonWu813/ProjectDay" }
```

New, after Record 3:
```
**Record 4 — ProjectDay**
slug: "projectday"
year: "2026"
date: "09/19"
title: "ProjectDay"
tech: "Mobile · React Native · Supabase · AWS"
tags: ["TypeScript", "React Native / Expo", "Supabase (Postgres, Auth, Edge Functions)", "AWS (S3, MediaConvert, CloudFront, CDK)", "EAS", "i18next", "GitHub Actions"]
atAGlance: "Product owner + orchestrator · 12 modules, built by my multi-agent system · Supabase + AWS video pipeline · Submitted to the App Store (Oct 2026)"
description: "An iOS app for indoor bouldering climbers in Taiwan: log a send in a few taps, watch beta videos tied to a specific route, and browse gym route lists. Built with my multi-agent development system and submitted to the App Store."
links:
  - { label: "GitHub: ProjectDay", href: "https://github.com/LeonWu813/ProjectDay" }
  - { label: "App Store", href: "https://apps.apple.com/app/id6827211725" }   (only if question 4 confirms the listing is live)
```

### 2.8 Section 6, Routing table: add one row after /projects/tabvault

```
| /projects/projectday | ProjectDay detail |
```

### 2.9 Section 7, Assets Needed

Confirmed table, add:
```
| Multi-agent feature image | `asset/diagrams/multi-agent-horizontal.png` (source: `asset/diagrams/multi-agent-horizontal.html`) |
| ProjectDay case study | `asset/content/case-study-projectday-detailed.md` |
```
Still needed, non-blocking table: remove the row "Diagram or demo clip of multi-agent system", and add:
```
| ProjectDay feature image / screenshots | /projects/projectday | [set by question 6] |
| ProjectDay App Store link | /projects/projectday | Add once the App Store listing is live |
```
(Remove the second row if question 4 confirms the app is already live.)

---

## 3. Proposed status.md entries (written only on approval)

PM Updates, appended at the end of the section:
```
- 2026-11-01 [SUBSTANTIVE] Add ProjectDay as a fourth project (MOD-011, /projects/projectday) and update the Multi-Agent System page content, links and feature image (MOD-005); PRD rev 1.4
  Approved by Leon in the coordinator session: "<quote>"
  Sections changed: 1 (three -> four projects; success criterion on live links), 4.2 (project order), 4.4 (At-a-glance, tags, Link 4, feature image + caption, body copy, AC-091, AC-092), new 4.6 ProjectDay (AC-079 to AC-090), 4.6-4.9 renumbered to 4.7-4.10 (numbers only), 5 (Record 2 updated, Record 4 added), 6 (routing row), 7 (assets).
  Modules affected: MOD-005 (content, links, tags, image), MOD-003 (one more item in the project list), MOD-002 (one more item in the Home projects list), new MOD-011.
  Phase: MOD-011 and the MOD-005 update join the current phase (Phase 4 — Deploy) [per question 14].
  Notes for Doc-Sync: the site has changed outside the framework since the last checkpoint (commits 6fb90ad..29b3a16, including site/public/multi-agent.png and project screenshots in f3834eb); the PRD has moved to project-planning/prd.md [per question 12]; heading commas in the MOD-005 section list still differ between the PRD and the spec.
```

Module Map, new row:
```
| MOD-011 | mod-project-projectday     | Project Detail: ProjectDay           |
```
Proposed source path (this Module Map has no Source Path column, so it goes in the PM Updates details instead): the ProjectDay record in the shared project data file, plus the ProjectDay image files under `site/public/` named `projectday-*`. The project detail modules (MOD-004/005/006, now MOD-011) all write to one shared data file and one `[slug]` page, so no single module owns those files. The Tech Lead should decide that ownership. It is not a PM call.

Directory to create: `project-planning/modules/mod-project-projectday/.gitkeep`.

Current Phase: stays "Phase 4 — Deploy" if question 14 adds the work to the current phase.

---

## 4. Classification

- Trivial or substantive: **[SUBSTANTIVE]**. The change adds a module, a route and a fourth project, and changes scope (the "three projects" goals and success criteria).
- Architectural: I recommend **not architectural**. The project route already builds its pages from the data list, and adding a record is the documented way to add a project. Leon decides (question 3). The drift in "Things to know first", point 4, is a separate reason to involve the Tech Lead.

---

## 5. Numbered questions for Leon

1. Do you approve the PRD change in section 2 and the status.md entries in section 3, with the answers below filled in? (Approval must be explicit.)
2. Is this change trivial or substantive? Recommendation: **substantive**.
3. Is it architectural, meaning does it change how the site is built (data model, module boundaries, integrations, tech stack)? Recommendation: **no**.
4. (Coordinator's a) Is the ProjectDay App Store listing (https://apps.apple.com/app/id6827211725) live now? This decides three things: whether the App Store link renders, whether the ProjectDay At-a-glance says "Submitted to the App Store (Oct 2026)" or "On the App Store", and whether the multi-agent At-a-glance should say "Shipped ... ProjectDay (iOS)" for an app that is not yet public. Recommendation: **if it is not live, leave out the App Store link and change the multi-agent At-a-glance to "Shipped TabVault (live) · ProjectDay submitted to the App Store"**. Add the link with a small change once Apple releases the app.
5. (Coordinator's b) May the designer collaborator (git handle "ffffffang") be credited by name? The draft currently says "A designer collaborator built the design system and Storybook setup." Recommendation: **keep the current unnamed wording unless they have said yes to being named**. If they agree, give me the exact name and link to use.
6. (Coordinator's c) What should the ProjectDay feature image be? The repo has no screenshots, only the app icon at `projectday/assets/source/icon-source.jpg`. Options: the app icon; 2 or 3 screenshots you supply; or no image for now. Recommendation: **reuse the iPhone screenshots you already uploaded to App Store Connect for the submission**. They show the real product, and SitePlus+ and TabVault show screenshots too. Please send the files and say which ones and in what order.
7. (Coordinator's d) Where should ProjectDay sit in the project list, and are the slug "projectday" and the listing fields year "2026", date "09/19" right? Recommendation: **directly after Multi-Agent Software Development System**, since that page introduces ProjectDay as the system's second product, with slug "projectday", year 2026 and date 09/19. Also: is 09/19 the date you want shown, and what does it mark (project start?)?
8. Is the GitHub repo https://github.com/LeonWu813/ProjectDay public? Both pages link to it, and a private repo would show visitors a 404. Recommendation: **make it public before this ships**. If it must stay private, both links come out.
9. Should the Multi-Agent tags add "Python"? The new draft lists Python, but the PRD tags do not. Recommendation: **yes**, giving "Claude Code · Bash · Python · Git · Multi-agent · Systems Design".
10. Should the Multi-Agent `tech` line in the project list stay "Harness Engineering · AI Agents · Systems Design · Claude Code"? Recommendation: **keep it**.
11. The success criterion "Every project links to a working live demo and a GitHub repository" can't hold for ProjectDay until the App Store listing is live. Should it be reworded as in section 2.3? Recommendation: **yes, reword it**.
12. The PRD is at the repo root (`prd.md`), but the framework expects `project-planning/prd.md`. May I move it (a `git mv` with no content change other than this revision) as part of this change? Recommendation: **yes, move it**. That lets Doc-Sync's verify script and the handoff hook find it.
13. Should ProjectDay go in as section 4.6, with Experience, About, Skills and Contact renumbered to 4.7 to 4.10 (numbers only)? Recommendation: **yes**, so the four project pages stay together.
14. Is the site already deployed? Should this work join the current Phase 4 — Deploy, or a new phase after it? Recommendation: **join the current Phase 4**. Phase 4 has no checkpoint yet, so the new page and the updated page ship with the deploy. If the site is already live and you consider Phase 4 done, tell me and I will propose a Phase 4 checkpoint first.
15. Should the caption "Human approval sits on every arrow. The coordinator runs the next step only after the human says yes." show under the multi-agent diagram? Recommendation: **yes**.
16. The new diagram has two em dashes in its labels ("BUILD & VERIFY — ONE MODULE AT A TIME" and "Coordinator — the main Claude Code session..."), and the PRD bans em dashes in site copy. Should the diagram be re-exported without them before it ships? Recommendation: **yes, replace them with a colon or a period and re-export**. This is your asset, so the PRD will only require it.
17. Is the module name "Project Detail: ProjectDay" with directory `mod-project-projectday` OK? Recommendation: **yes**.
18. SitePlus+ and TabVault already show screenshots on the site, but PRD 1.3 does not mention them (they were added outside the framework). Should the PRD record them? Recommendation: **yes, in a separate small change after this one**, so this change stays focused.
