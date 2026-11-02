# Product Requirements Document: Leon's Portfolio Website

**Revision:** 1.12
**Date:** 2026-11-01
**Author:** PM Agent (updated to reflect implemented state)

---

## Table of Contents

1. Overview
2. Design Direction
3. Information Architecture
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
   - 4.11 Slideshow
5. Content Model
6. Functional and Technical Requirements
7. Assets Needed
8. Out of Scope
9. Adopted Conventions

---

## 1. Overview

### Purpose

A personal portfolio website for Leon Wu, full-stack engineer and CS master's student at Northeastern, currently seeking a 2026/2027 software engineering internship (full-stack, frontend, or backend). The site presents Leon's four flagship projects, work history, and technical skills in a clean, minimal, recruiter-friendly format.

### Goals

1. Give technical recruiters and hiring managers a fast, credible picture of Leon's engineering ability within their first few seconds on the page.
2. Showcase four strong projects as full case studies, each reachable in one click from the projects sidebar.
3. Make contact and resume access effortless from any page.
4. Have the site itself serve as evidence of Leon's frontend, accessibility, and deployment skills by being fast, responsive, and WCAG-conscious.
5. Give Leon a ready-to-present interview deck on the site, one click or one key press from any page.

### Target Audience

- **Primary:** Technical recruiters and engineering hiring managers evaluating internship candidates.
- **Secondary:** Engineers who may follow linked GitHub repos.

### Success Criteria

- All four projects are visible in the projects sidebar without scrolling on a standard laptop viewport.
- Every project links to its GitHub repository when that repository is public and, where one exists, to a working live product (a website or an App Store listing).
- The site loads fast, works well on mobile, and passes basic WCAG accessibility checks.
- A visitor can reach Leon's email, LinkedIn, GitHub, and resume PDF from any page.

---

## 2. Design Direction

### Layout

Persistent slim left sidebar (w-64, fixed) containing:
- Profile section: LW initials circle (accent-colored), name "Leon Wu", subtitle "Full-Stack Software Engineer".
- Primary navigation links with SVG icons and keyboard shortcut badges.
- Horizontal rule separator.
- "Online" block with social/contact links and external link icons.
- Theme toggle at the bottom (desktop only).

**Acceptance criteria (added in revision 1.8):**
- AC-124: The sidebar profile subtitle reads "Full-Stack Software Engineer" wherever the profile section shows (desktop sidebar, and the mobile drawer if it shows the profile), on one line, not truncated, at 1280px and at 375px wide.

Main content area to the right of the sidebar (`md:ml-64`): each page controls its own max-width and padding. The root `<main>` has no padding or max-width of its own.

**No footer.** The footer requirement has been removed.

### Theme

**Design reference:** onur.dev layout and IBM Carbon Design System colors.

Key observations:
- **Color:** IBM Carbon White theme (light) and G100 theme (dark). Exact tokens below.
- **Typography:** Roboto throughout; clear size hierarchy; weight variation carries structure.
- **Whitespace:** Structural, not decorative. Sections breathe; components have room.
- **Components:** Rounded cards/links (`rounded-lg`), subtle border/hover states, no gradients or heavy chrome.
- **Overall impression:** Professional and approachable; restraint signals confidence.

**Color palette — IBM Carbon Design System:**

| Token | Light (White theme) | Dark (G100 theme) | Role |
|---|---|---|---|
| `--bg` | `#ffffff` | `#161616` | Page background |
| `--surface` | `#f4f4f4` | `#262626` | Sidebar, cards, chips |
| `--text` | `#161616` | `#f4f4f4` | Primary text; also active nav bg |
| `--text-muted` | `#525252` | `#c6c6c6` | Secondary text, dates, subtitles |
| `--border` | `#e0e0e0` | `#393939` | Dividers, chip borders |
| `--hover` | `#e8e8e8` | `#333333` | Nav/link hover background |
| `--accent` | `#0f62fe` | `#78a9ff` | Links, focus rings, pull-quote border |
| `--accent-hover` | `#0043ce` | `#a6c8ff` | Accent hover state |

Active nav item: `bg-[var(--text)] text-[var(--bg)]` (dark bg, light text in light mode; inverted in dark mode).

### Typography

- **Font:** Roboto (Google Fonts), weights 400/500/700, `font-display: swap`.
- Clear hierarchy: H1 page title → H2 section headings → H3 subsections → body ~16px with generous line-height.
- No em dashes anywhere in site copy. Use hyphens or sentence rewrites instead.

### Responsiveness

Mobile-first. On mobile:
- Fixed top bar (h-12) shows "Leon Wu" wordmark + theme toggle + hamburger.
- Off-canvas drawer slides in from the left.
- Body is `h-screen overflow-hidden`; mobile content area accounts for the 48px top-bar spacer.

### Accessibility

- Semantic HTML throughout (nav, main, section, article, aside).
- Sufficient color contrast on all text (WCAG AA minimum; AAA preferred for body text).
- All images have meaningful alt text (or `alt=""` for decorative).
- Keyboard navigability: all interactive elements reachable by keyboard.
- Visible focus states (outline using `--accent`).
- Number-key shortcuts 1–7 for nav (see section 6).

### Performance

- Fast initial load: aim for Lighthouse performance > 90.
- All routes statically generated at build time.
- Minimal blocking scripts.

### Dark Mode

Class-based strategy (`dark` class on `<html>`). Default to `prefers-color-scheme`; persist override in `localStorage`. Toggle reachable from desktop sidebar and mobile top bar.

### Tone

Humanized and professional. First-person voice. No em dashes. Concise, concrete sentences.

---

## 3. Information Architecture

### Sidebar Navigation (ordered)

| Position | Label      | Route       | Keyboard shortcut |
|----------|------------|-------------|-------------------|
| 1        | Home       | /           | `1`               |
| 2        | Projects   | /projects   | `2`               |
| 3        | Experience | /experience | `3`               |
| 4        | Skills     | /skills     | `4`               |
| 5        | About      | /about      | `5`               |
| 6        | Contact    | /contact    | `6`               |
| 7        | Slideshow  | /slideshow  | `7`               |

Keyboard shortcuts fire on `keydown` with no modifier keys, and are suppressed when focus is on an `<input>`, `<textarea>`, or `contenteditable` element.

The Slideshow item appears in the desktop sidebar and in the mobile drawer, with its own icon and shortcut badge like the other items. Its icon is the one in the approved slideshow design (section 4.11, Design: `slideshow-ui.md` section 14). Selecting it opens the full-screen slideshow (section 4.11), not a normal page inside the sidebar layout.

**Acceptance criteria (added in revision 1.7):**
- AC-093: The desktop sidebar and the mobile drawer show a seventh item, "Slideshow", directly after Contact, with an icon and the shortcut badge "7", in the same style as the other six items. Selecting it opens /slideshow.
- AC-094: Pressing `7` (no modifier key, focus not in an input, textarea or contenteditable element) opens the slideshow exactly as selecting the Slideshow item does. While the slideshow is open, the number keys `1`–`7` never navigate the site; they only do what section 4.11 lists.

### Connect Block (sidebar, present on every page)

Displayed below the nav separator in the sidebar under the label "Online". Three links in this order:
1. **LinkedIn** — https://www.linkedin.com/in/leon-wu-tsan-yu/
2. **GitHub** — https://github.com/LeonWu813
3. **Email** — leon.wu.tsan.yu@gmail.com

Each link opens in a new tab with an external-link arrow icon.

### No Footer

The footer has been removed. No bottom bar or copyright line appears on any page.

---

## 4. Page Requirements

### 4.1 Home

**Route:** /

**Purpose:** A single, short hero screen that orients the visitor immediately. No featured blog card. No long scroll.

**Content:**

| Element | Copy |
|---|---|
| Greeting headline (H1) | Hey, I'm Leon 👋 |
| Primary CTA | Connect on LinkedIn |
| Secondary CTA | Reach out (links to /contact) |
| Tertiary CTA | Download CV (links to /Leon_cv.pdf; the file downloads as Leon_Wu_Resume.pdf) |

No title/role subtitle appears under the H1.

**Bio (body text):**

> I'm a full-stack engineer and CS master's student at Northeastern. I build production systems by hand. From the database schema to the cloud deployment. And I design multi-agent systems that plan, implement, and ship software end to end.

**Current status line:**

> Currently seeking a 2026/2027 software engineering internship across full-stack, frontend, or backend roles.

**Projects list** (below bio, no dates):
- Project title + tech string (e.g. "Full-Stack · Java/Spring Boot · React · AWS")
- No year/date column shown.
- Each entry links to its project detail page.

**Layout notes:**
- Outer wrapper: `px-8 py-16 max-w-2xl mx-auto w-full`.
- Primary CTA links to https://www.linkedin.com/in/leon-wu-tsan-yu/
- No headshot on home page.

---

### 4.2 Projects (Split Panel)

**Route:** /projects

**Behavior:** Immediately redirects to the first project (`/projects/multi-agent-system`). The Projects layout renders a persistent split panel:
- **Left panel (aside):** `w-64 xl:w-72`, scrollable project list with "Projects" header and count. Active item: `bg-[var(--text)] text-[var(--bg)]`. Shows project title and tech string.
- **Right panel:** `flex-1 overflow-y-auto` — renders the project detail page.

**Scroll isolation:** The root `<body>` is `h-screen overflow-hidden`. The projects layout is `flex flex-1 min-h-0 overflow-hidden`. Each panel scrolls independently; the window never scrolls.

The aside panel is hidden on screens smaller than `lg`. On mobile, projects are accessible via normal navigation.

**Project order:** ProjectDay appears directly after Multi-Agent Software Development System in the project list. The order of the other projects does not change, and `/projects` still redirects to `/projects/multi-agent-system`.

**Image overlay (every project page):** On every /projects/<slug> page, the feature image and every image in an Images section open in an overlay when clicked, tapped, or activated from the keyboard. The image grows from its place on the page to the center of the screen over a dimmed page, shown as large as fits in about 90% of the screen without cropping, and shrinks back to its place when the overlay closes. A click or tap anywhere, Esc, or the phone's Back closes it. The behaviour follows Notion's image zoom, which Leon recorded as the sample on 2026-11-01. Leon asked for it on the multi-agent diagram; it applies to every project image so that all of them behave the same way.

**Images sections (every project page):** Each image in an Images section shows whole, with no cropping or distortion. At 1280x800 none is taller than 640px; at 375px wide each fits the column width. This is the ProjectDay rule (AC-111) applied to every project page, so the portrait TabVault phone screenshot shows smaller than before.

**Alt text (every project page):** The feature image and every image in an Images section have the alt text given for them in their project's section (4.3 to 4.6) and record (section 5). The image overlay names its dialog by that alt text (AC-109).

**Acceptance criteria (added in revision 1.7):**
- AC-108: On every /projects/<slug> page, the feature image and each image in an Images section show a zoom-in pointer on hover, can be reached with Tab, and open with Enter or Space as well as with a click or tap. Opening dims the whole page, including the sidebar, and shows the image centered, scaled to fit within 90% of the viewport's width and height, without cropping or distortion, with a zoom-out pointer over the overlay. On /projects/multi-agent-system at 1280x800, the diagram in the overlay is wider than it is in the page.
- AC-109: The overlay closes on a click or tap anywhere in it, including on the image, and on Esc. On a phone, the browser's Back button or Back gesture closes the overlay and the visitor stays on the same page. While the overlay is open, keyboard focus is inside it, Tab does not reach the page behind it, the page behind it does not scroll, and screen readers announce a dialog named by the image's alt text. When it closes, focus returns to the image that opened it.
- AC-110: Opening, the image grows from its position in the page to the center, and closing, it shrinks back, each in at most 300ms. When the visitor's system is set to reduce motion, the overlay only fades in and out instead. Opening and closing the overlay shifts no other element on the page and does not change the image's size or position in the page, and AC-089 and AC-091 still pass at 1280px and 375px wide.

**Acceptance criteria (added in revision 1.9):**
- AC-127: On every /projects/<slug> page, the feature image and every image in an Images section have exactly the alt text given for them in sections 4.3 to 4.6 and 5, and no project image has an empty alt. The overlay dialog each one opens is named by that alt text.
- AC-128: On every /projects/<slug> page, each image in an Images section shows whole, with no cropping or distortion. At 1280x800 no image in an Images section is taller than 640px; at 375px wide each fits the column width.

---

### 4.3 Project Detail: SitePlus+

**Route:** /projects/siteplus

**Source file:** `asset/content/case-study-siteplus-detailed.md` (as of commit e479e22). It was aligned with Leon's CV on 2026-11-01.

**Header area:**

| Element | Value |
|---|---|
| Project name (H1) | SitePlus+ |
| At-a-glance | Sole engineer · Full-stack + AWS infra · Live in production · Cut recurring analytics work ~60% |
| Tags | Full-Stack · Java/Spring Boot · Spring Security / JWT · React · TypeScript · Redux Toolkit · PostgreSQL · Redis · Docker · GitHub Actions · AWS |
| Link 1 | "Demo: " followed by the linked label "interactive walkthrough" — https://app.supademo.com/demo/cmosxfpu96m3ew9doctdnhtah |
| Link 2 | "GitHub: " followed by the linked label "marketing-analytics" — https://github.com/LeonWu813/marketing-analytics |

Each link shows its plain-text prefix followed by the linked label; only the label is a link.

**Case study sections (in order):**
1. The problem
2. My role
3. How it works, end to end
4. Images
5. Architecture
6. Key engineering decisions
7. Challenges and how I resolved them
8. Impact
9. What I learned, and what I would improve

The Images section shows the SitePlus+ screenshots below, in this order, and has no paragraphs. The feature image, `/siteplusplus-home.jpg`, has the alt text "Screenshot of the SitePlus+ home dashboard." (Record 1).

| Screenshot | Alt text |
|---|---|
| `/siteplusplus-reports.jpeg` | Screenshot of the SitePlus+ reports page. |
| `/siteplusplus-sites.jpeg` | Screenshot of the SitePlus+ Sites page, with a form to register a new site and a card for a registered test site. |

**Inline bold:** Paragraphs may contain `**bold text**` markdown which renders as `<strong>` in the UI.

**Acceptance criteria (added in revision 1.8):**
- AC-120: On /projects/siteplus, every section heading and paragraph matches the source file at commit e479e22 word for word, as CONV-003 requires. In particular, "Key engineering decisions" includes the paragraph that starts "**Resilience on purpose.**" and ends "fails over 100% of traffic to the survivor automatically.", and the paragraph that starts "**Securing an endpoint that has to be public.**" says "50 requests per minute per IP". The tag chips match the Tags row above, in that order.

---

### 4.4 Project Detail: Multi-Agent Software Development System

**Route:** /projects/multi-agent-system

**Source file:** `asset/content/case-study-multi-agent-detailed.md`

**Header area:**

| Element | Value |
|---|---|
| Project name (H1) | Multi-Agent Software Development System |
| At-a-glance | Sole architect · 6 specialized agents + coordinator · Human-approved at every handoff · Shipped 3 products: TabVault, ProjectDay and this site |
| Tags | Claude Code · Bash · Python · Git · Multi-agent · Systems Design |
| Link 1 | "GitHub: " followed by the linked label "System repo" — https://github.com/LeonWu813/multi-agent-software-development-system |
| Link 2 | "GitHub: " followed by the linked label "TabVault repo" — https://github.com/LeonWu813/tab-management |
| Feature image | `asset/diagrams/multi-agent-horizontal.png` (landscape, 3080x1560). It replaces the current portrait diagram in the same position on the page. Editable source: `asset/diagrams/multi-agent-horizontal.html`. |
| Feature image caption | Human approval sits on every arrow. The coordinator runs the next step only after the human says yes. |

**Case study sections (in order):**
1. The problem
2. My role
3. How it works, end to end
4. Design principles
5. The six agents
6. Decisions worth calling out
7. Impact
8. What I learned, and what I would improve

**Body copy:** Section paragraphs match `asset/content/case-study-multi-agent-detailed.md` as of revision 1.7 (6 agents plus a coordinator, PM two-pass approval, scope check, pstack reviews, integration review, repeat-failure escalation, and an Impact section covering three shipped products: TabVault, now offline; ProjectDay; and this site).

**Acceptance criteria (added in revision 1.4):**
- AC-091: On /projects/multi-agent-system, the feature image is the landscape diagram from `asset/diagrams/multi-agent-horizontal.png`, not the earlier portrait diagram. It fills the width of the content column with no cropping on desktop (1280px wide) and mobile (375px wide). It has alt text describing the workflow (proposed: "Workflow diagram of the multi-agent system. A planning row runs from user requirements through PM, Tech Lead, human setup and approval, PM finalize, and Doc-Sync. A build row runs through Engineer, QA, Tech Lead integration review, PM checkpoint, and project complete, with loops for bugs, repeat failures, spec issues and retrospectives, all run by a coordinator session."), and the caption above appears directly below it.
- AC-092: The At-a-glance line, tags, two links, description pull-quote, and every section paragraph on /projects/multi-agent-system match this section and the source file word for word. Each link shows its plain-text prefix followed by the linked label, as in the header table, and only the label is a link. No link to tab-vault.com appears on the page. The editor's line "Feature image: ..." from the source file does not appear on the page. (Changed in revision 1.7: TabVault is offline, so the "Built by the system: tab-vault.com" link is removed.)

---

### 4.5 Project Detail: TabVault

**Route:** /projects/tabvault

**Source file:** `asset/content/case-study-tabvault-detailed.md`

**Header area:**

| Element | Value |
|---|---|
| Project name (H1) | TabVault |
| At-a-glance | Orchestrator + reviewer · 3 clients (Chrome MV3, React PWA, Spring Boot API) · Built by my multi-agent system · Deployed to AWS ECS Fargate (now offline) |
| Tags | Java 21 / Spring Boot · React / TypeScript PWA · Chrome Extension (MV3) · PostgreSQL · Redis · Quartz · Claude API · AWS ECS Fargate |
| Link 1 | "GitHub: " followed by the linked label "tab-management" — https://github.com/LeonWu813/tab-management |

Each link shows its plain-text prefix followed by the linked label; only the label is a link.

TabVault is not live. It was deployed to production on AWS and is offline now, so the page has no live link, and no copy on it says TabVault is live.

**Acceptance criteria (added in revision 1.7):**
- AC-116: On /projects/tabvault, the At-a-glance line reads exactly as in the header table, exactly one external link renders ("GitHub: " followed by the linked label "tab-management"), and the paragraphs of "The problem" and "Impact" match the source file word for word (they say TabVault was deployed and is offline now).
- AC-117: In the built HTML of every route, including /slideshow, no link points to tab-vault.com, the text "tab-vault.com" does not appear, and no copy says TabVault is live. AC-117 does not cover the contents of the CV PDF served at /Leon_cv.pdf: the CV Leon chose on 2026-11-01 still names tab-vault.com (see section 6, Resume Hosting).

**Acceptance criteria (added in revision 1.12):**
- AC-133: On /projects/tabvault, the paragraphs of every section other than "Images", "The problem" and "Impact" match the paragraph text in `site/data/projects/tabvault.ts` at commit c612306 word for word, including its punctuation ('done' in single quotes, the em dashes in "What I learned, and what I would improve"). In those sections the page does not have to match `asset/content/case-study-tabvault-detailed.md`.

**Case study sections (in order):**
1. The problem
2. My role
3. How it works, end to end
4. Images
5. Architecture
6. Key engineering decisions
7. Challenges and how I resolved them
8. Impact
9. What I learned, and what I would improve

The Images section shows the TabVault screenshots below, in this order, and has no paragraphs. The feature image, `/tabvault-home.png`, has the alt text "Screenshot of the TabVault web app home screen." (Record 3).

| Screenshot | Alt text |
|---|---|
| `/tabvault-mobile.jpeg` | Screenshot of the TabVault web app on an iPhone, showing saved items grouped by category, with search and filters. |
| `/tabvault-plugin.png` | Screenshot of the TabVault Chrome extension popup, with buttons to save the current tab, save all tabs or write a quick note, and a list of recent saves. |

**Body copy (added in revision 1.12):** The page keeps the shorter text Leon chose, not the full source file. This is an exception to CONV-003, chosen by Leon on 2026-11-01. The reference for every paragraph outside "The problem" and "Impact" is the paragraph text in `site/data/projects/tabvault.ts` at commit c612306, the text MOD-006 QA Run 4 checked. Compared with the source file, that text has three paragraphs in "Architecture" (the source has five), leaves out the intro and three challenges in "Challenges and how I resolved them" (missing dependency, wrong status code on bad credentials, ISP blocking the new domain), the "lesson" sentences and a sentence of the secrets paragraph, and in "What I learned, and what I would improve" drops one sentence, puts 'done' in single quotes and uses two em dashes where the source has commas. The paragraphs of "The problem" and "Impact" still match the source file word for word (AC-116). The section headings are the list above. A later edit to the source file changes the page only through a PRD change.

---

### 4.6 Project Detail: ProjectDay

**Route:** /projects/projectday

**Source file:** `asset/content/case-study-projectday-detailed.md`

**Header area:**

| Element | Value |
|---|---|
| Project name (H1) | ProjectDay |
| At-a-glance | Product owner + orchestrator · 12 modules, built by my multi-agent system · Supabase + AWS video pipeline · Submitted to the App Store (Oct 2026) |
| Tags | TypeScript · React Native / Expo · Supabase (Postgres, Auth, Edge Functions) · AWS (S3, MediaConvert, CloudFront, CDK) · EAS · i18next · GitHub Actions |
| Links | None. The GitHub repository stays private, and the App Store listing is not live yet. |
| Feature image | One wide image showing three of Leon's iPhone screenshots side by side, left to right: Home (`projectday-home.png`), Gyms (`projectday-gyms.png`), Route (`projectday-route.png`), from `asset/screenshots/projectday/`. Each screen is whole and uncropped, with even gaps and a transparent background. The MOD-011 engineer makes it from the three files and serves it as `/projectday-screens.webp` (Tech Lead, 2026-11-01). |
| Feature image caption | ProjectDay's interface is in Traditional Chinese, for climbers in Taiwan. |

**Case study sections (in order):**
1. The problem
2. My role
3. How it works end to end
4. Images
5. Notable technical decisions
6. Impact and status
7. What I learned and what I'd improve

The Images section shows two screenshots from `asset/screenshots/projectday/`, in this order, and has no paragraphs. Each is served as a web-sized file made by the MOD-011 engineer. Its heading is not in the source file, as on SitePlus+ and TabVault. The screenshots show demo data and are cleared for publishing (Leon, 2026-11-01).

| Screenshot (source → served file) | Alt text |
|---|---|
| `projectday-route-beta.png` → `/projectday-route-beta.webp` | ProjectDay route screen scrolled to the Beta videos section, showing the thumbnail of a climber's beta video for a V0 route. |
| `projectday-profile.png` → `/projectday-profile.webp` | ProjectDay profile screen with climbing stats: top grade V10, 10 sends, 9 climbing days, and a bar chart of sends per grade. |

**Inline bold:** Paragraphs may contain `**bold text**` markdown, which renders as `<strong>` in the UI.

**Acceptance criteria:**
- AC-079: /projects/projectday renders the H1 "ProjectDay".
- AC-080: The At-a-glance line below the H1 reads exactly as in the header table, in the same muted style as the other project pages.
- AC-081: Exactly seven tag chips render, with the labels in the header table, in that order.
- AC-082: No external links render on /projects/projectday, and no empty links row appears. No GitHub link renders while the repository is private, and no App Store link renders until the listing is confirmed live.
- AC-083: The description pull-quote reads exactly as Record 4's `description`, in the same style as the other project pages.
- AC-084: Seven sections render in the order listed, with exactly those headings. Every paragraph matches the source file word for word. The Images section has no paragraphs. The editor's notes "(confirm it is live before publishing)" and "Suggested listing fields: ..." do not appear anywhere on the page.
- AC-085: Text written as `**bold**` in the source renders as bold, and no literal asterisks show.
- AC-086: ProjectDay appears in the projects side panel at the position set in section 4.2, showing its title and tech line. It is highlighted as active while /projects/projectday is open.
- AC-087: ProjectDay appears in the Home page projects list with its title and tech line, links to /projects/projectday, and shows no date.
- AC-088: The page title is "ProjectDay — Leon Wu". The page has a description meta tag, Open Graph and Twitter card tags, and a canonical URL, like the other project pages.
- AC-089: The feature image is the three-screen image described in the header table (Home, Gyms, Route, left to right), with Record 4's `featureImageAlt` as alt text. It shows whole, with no cropping, across the content column on desktop (1280px wide) and mobile (375px wide), and Record 4's `featureImageCaption` appears directly below it.
- AC-090: /projects/projectday is generated at build time. /projects/siteplus, /projects/multi-agent-system and /projects/tabvault still render, and an unknown slug under /projects still returns 404.
- AC-111: The Images section shows the screenshots listed in the table above, in that order, each whole with no cropping and with its alt text from the table. At 1280x800 no screenshot is taller than 640px; at 375px wide each fits the column width.
- AC-112: Every ProjectDay image file the page loads is at most 300 KB. Each single screenshot is at least 1000 pixels tall, and the three-screen image is at least 1500 pixels wide, so they stay sharp at the size the image overlay shows them (AC-108). The four ProjectDay files /slideshow loads (`/projectday-screens.webp`, `/projectday-route.webp`, `/projectday-route-beta.webp`, `/projectday-profile.webp`) together total at most 800,000 bytes.

---

### 4.7 Experience

**Route:** /experience

**Page heading:** Experience

**Layout:** Two-column timeline (`grid grid-cols-[9rem_1fr]`). Left column: date range right-aligned. Right column: dot indicator with vertical line connector, role title, company, bullets, tech chips.

- Date format: `{startDate} – {endDate}` (no line break between start and end).
- Tech chips: small `px-2 py-0.5 rounded` badges.
- Outer wrapper: `px-8 py-16 max-w-2xl mx-auto w-full`.

**Source file:** `asset/content/experience.md` (as of commit e479e22). It was aligned with Leon's CV (`asset/Leon_cv.pdf`, replaced on 2026-11-01 with his newer CV, commit cfa3367) on 2026-11-01; the CV is the source of truth for titles, dates and bullets. One true detail that is not on the CV stays at Leon's choice: the 22.3% session-engagement figure on the Exascend bullet.

**Entries (reverse-chronological):**

**Role 1: Front-End Developer**
- Company: Exascend
- Location: Taipei, Taiwan
- Dates: Sep 2023 – Aug 2025
- Tags: JavaScript · HTML · CSS · GA4 · SEO · Lighthouse · WCAG
- Bullets:
  - Built a custom JavaScript event-tracking system posting structured user interactions to CRM and GA4 APIs, cutting manual reporting 70%.
  - Two customer-facing websites went from requirements to shipped product under my ownership (HTML, CSS, JavaScript), growing monthly active users 3.5x, from 12,000 to 41,350, and increasing average session engagement time by 22.3%.
  - Page views rose 48.8% after a round of technical SEO and accessibility audits (Google Search Console, Lighthouse, WCAG) that I validated with A/B testing.

**Role 2: Marketing Project Manager**
- Company: GoFreight
- Location: Taipei, Taiwan
- Dates: Jul 2021 – Mar 2023
- Tags: HTML · CSS · JavaScript · A/B Testing · Event Tracking · Project Management
- Bullets:
  - Built and maintained a front-end codebase (HTML, CSS, JavaScript) with an A/B testing pipeline of variant logic and event tracking, lifting conversion rate 67% through iterative experimentation.
  - Led cross-functional teams through a product launch, coordinating tracking integrations and a cross-channel strategy that generated $16.5K in MRR.

**Education section** (same timeline visual, at the bottom of the page):

| Degree | Institution | GPA | Period | Location |
|---|---|---|---|---|
| Master of Science in Computer Science | Northeastern University | 3.9 / 4.0 | Jul 2025 – Dec 2027 (Expected) | Seattle, WA |
| Bachelor of International Business | National Chengchi University | 3.5 / 4.0 | Sep 2017 – Jun 2021 | Taipei, Taiwan |

**Acceptance criteria (added in revision 1.7):**
- AC-118: /experience shows Exascend first and GoFreight second. Each role's title, company, location, dates, every bullet and every tag chip match this section word for word, in the order listed. No other bullet or chip appears; in particular none of the earlier copy shows ("Growth Marketer", "0.38% to 2.55%", "Baidu Ads", "JCTrans", "350%", "670%"). (Changed in revision 1.8: the Exascend bullet keeps "22.3%", so it is no longer on this list.)
- AC-119: The Education section shows the two entries in the table above, in that order, with degree, institution, GPA, period and location word for word.
- AC-121 (added in revision 1.8, name changed in revision 1.9): The /experience meta description is exactly "Professional experience and education of Leon Wu: Front-End Developer at Exascend, Marketing Project Manager at GoFreight, Master of Science in Computer Science at Northeastern University." The Open Graph and Twitter descriptions are exactly "Professional experience and education of Leon Wu." No meta tag on /experience contains "Growth Marketer" or "MS in Computer Science".

---

### 4.8 About

**Route:** /about

**Layout:** Outer wrapper `px-8 py-16 max-w-2xl mx-auto w-full`. No education block on this page (education lives on Experience).

**Page heading:** About

**Sections (in this order, as Leon built them on 2026-06-29):**

1. **Meeee**: three lines, each on its own line:
   - Born and lived in Taipei Taiwan 🇹🇼
   - Moved to Seattle for Master degree 🇺🇸
   - Have a 3-year-old cat called 方勇吉 🐱

   Then two photos side by side: `IMG_6605.jpg`, `IMG_6591.jpg`.
2. **Hobbies**: the line "Ski ⛷️ Snowboard 🏂", then two photos side by side: `IMG_6353.jpg`, `IMG_6875.JPG`. Then the line "Bouldering 🧗", then one photo: `4D0BDA8A-B273-40DC-BD3D-3098AF6BBB73.JPG`.
3. **Background**: the main paragraph and the second paragraph below, in that order.

The five photos are files in `site/public/` (project files of MOD-001, status.md Decisions, Q5). They have empty alt text: the line above each group says what the photos show (Leon's choice, revision 1.11).

**Main paragraph:**

> My path into engineering did not start in a computer science classroom. I studied International Business in Taipei and spent the early part of my career on the product and marketing side, where I taught myself to code so I could build the things I was responsible for shipping. That habit grew into building full-stack products that real companies and real users came to depend on. I am now pursuing my MS in Computer Science at Northeastern to strengthen the fundamentals beneath the work I had already been doing.

**Second paragraph:**

> The pivot is the point. I learned to engineer by shipping software that people actually use, and I bring that same bias toward real, working results to everything I build, whether that is a production analytics platform or a system of AI agents that ships software on its own.

**Acceptance criteria (added in revision 1.11):**
- AC-132: /about shows the page heading "About", then the sections "Meeee", "Hobbies" and "Background", in that order. Each section's lines, paragraphs and photos are the ones listed under Sections above, word for word and in the listed order. No other section, line or photo appears, and there is no education block.

---

### 4.9 Skills

**Route:** /skills

**Layout:** Outer wrapper `px-8 py-16 max-w-2xl mx-auto w-full`.

**Page heading:** Skills

**Intro line:** Languages, frameworks, and tools I work with.

**Source file:** `asset/content/skills.md` (as of commit e479e22). The first five groups are the CV's skills section, item for item and in the CV's order. The last group, "Also", keeps true skills from the site that the CV does not list (Leon's choice, 2026-11-01).

**Skill groups (in this order):**

| Category | Skills |
|---|---|
| Languages | Java, TypeScript, JavaScript, Python, SQL, C++ |
| Backend | Spring Boot, Spring Security, Spring Data JPA/Hibernate, JWT, PostgreSQL, Redis, REST APIs, JUnit/Mockito |
| Frontend | React, Redux Toolkit/Zustand, TanStack Query, Tailwind CSS |
| Infrastructure & DevOps | Git, Docker, CI/CD (GitHub Actions), AWS (EC2, ALB, RDS, ElastiCache, S3, CloudFront) |
| AI & Agentic Development | Claude Code (subagents, skills, hooks), agentic workflow orchestration, LLM API integration |
| Also | C, HTML, CSS, Vite, Axios, Recharts, Nginx, Maven, Quartz, AWS ECS Fargate, Claude API, Figma, GA4, SEO, WCAG |

Each category rendered as a labeled group with chip/badge elements per skill.

**Acceptance criteria (added in revision 1.8):**
- AC-122: /skills shows exactly the six groups in the table above, in that order, with each category name and each skill chip word for word and in the order listed (one chip per comma-separated item; "AWS (EC2, ALB, RDS, ElastiCache, S3, CloudFront)" and "Claude Code (subagents, skills, hooks)" are one chip each). No other group or chip appears. The intro line stays "Languages, frameworks, and tools I work with." The meta, Open Graph and Twitter descriptions are exactly "Technical skills of Leon Wu: languages, backend, frontend, infrastructure and DevOps, and AI and agentic development."

---

### 4.10 Contact

**Route:** /contact

**Page heading:** Contact

**Layout:** Outer wrapper `px-8 py-16 max-w-2xl mx-auto w-full`.

**Intro line:** Looking for a 2026/2027 internship in full-stack, frontend, or backend engineering. If you're working on something interesting, I'd love to hear about it.

**Contact methods:**

| Method | Display | Action |
|---|---|---|
| Email | leon.wu.tsan.yu@gmail.com | mailto: link |
| LinkedIn | linkedin.com/in/leon-wu-tsan-yu | https://www.linkedin.com/in/leon-wu-tsan-yu/ |
| GitHub | github.com/LeonWu813 | https://github.com/LeonWu813 |

**Resume download:**
- Label: "Download CV" or "Resume (PDF)"
- File served at `/Leon_cv.pdf`

A real email address (not only a contact form) is required. Forms can break silently; a visible email always works.

Email is the only direct contact method. The email stays the Gmail address, not the CV's university address, and the site shows no phone number, although the CV lists one (Leon's choices, 2026-11-01).

**Acceptance criteria (added in revision 1.8):**
- AC-123: /contact lists, in this order, Email, LinkedIn, GitHub and Resume, each with the label and display text above, in the same style as each other. No other email address appears on the page, and the sidebar's Online block is unchanged.
- AC-126: In the built HTML of every route, including /slideshow, no phone number appears: no `tel:` link, and neither "206-677-7544" nor "2066777544" nor any other phone number in text, links or meta tags. AC-126 does not cover the contents of the CV PDF served at /Leon_cv.pdf, which lists Leon's phone number (see section 6, Resume Hosting).

---

### 4.11 Slideshow

**Route:** /slideshow

**Source file:** `asset/content/interview-deck.md` (as of commit ac1a07d). It is the word-for-word source of every slide's text.

**Design:** The slideshow's visual and interaction design comes from the design team, not from a preview file. The UX Researcher, UX Designer, UI Designer and Motion Designer write it under `project-planning/design/ux-team/`. The Design Lead reviews it in `project-planning/design/ux-team/reviews/slideshow-review-<n>.md`, and Leon approves it after a PASS. The approved design is the set of files, at the commit, named in Leon's slideshow design approval in `status.md` Decisions; engineers and QA read it from those files. It sets each slide type's layout, text sizes, spacing, where the project name and position sit, the close button, the hints, focus styles, and the phone layout. It works inside this section: it does not change the on-screen text, the slides or their order, the controls, or the acceptance criteria below. A design that needs any of those changed needs a PRD change first. `asset/content/interview-deck-preview.html` was a content review aid; it is not the design reference and not site code.

**Purpose:** A full-screen presentation Leon runs from his own site in interviews for engineering intern and junior roles. Three slides about Leon lead to a menu of four projects. Leon picks the project that fits the interview. After its numbers, intro, and role and stack slides, every project tells one story in order: the problem, the solution Leon built, the key decision, the hardest part, and the lesson (TabVault has no numbers slide and goes from its solution straight to its hardest part, which ends the track). After that project, the menu comes back, so he can show another one or stop.

**Slides:**
- About me: 1 Hi, I'm Leon; 2 Timeline; 3 Life in Seattle.
- Hidden job slides: 2a Exascend, 2b GoFreight, reached only from slide 2 (see Hidden job slides).
- Menu: 4 Project menu.
- Project tracks, in this order on the menu: A Multi-Agent System (A1 to A8), B ProjectDay (B1 to B8), C SitePlus+ (C1 to C8), D TabVault (D1 to D5).

Slide labels in the source file (such as "A3: Role and stack") do not show on screen.

**On-screen text:** Every slide shows its Title and the copy fields under it in the source file (Titles, Timeline, Subtitle, Big numbers, Cards, Footer, Roles, Bullets, Role, Stack, Captions) word for word. Text may wrap or be split across lines (for example, a timeline entry's dates, role and place on separate lines), but words, numbers and punctuation do not change. Speaker notes, editor's notes, slide labels and "Visual:" lines never show. Two slides draw a small diagram from text, defined here (the arrangement follows the approved design):
- A2: boxes reading "Requirements", "PM", "Doc-Sync", "Engineer ⇄ QA", "Tech Lead", "Shipped", in this order, joined by arrows; with them the line "Retrospective feeds improvements back into the system" and a bar reading "I approve the key handoffs". The bar connects only to the handoffs into PM, into Doc-Sync and into Shipped. The Retrospective line stands apart from the row of boxes and feeds the system as a whole, not one box.
- B6: chips reading "Upload", "S3", "MediaConvert", "CloudFront", in this order, joined by arrows, shown with the bullets.

The only other text on screen: the key number on each menu card, the project name and position on project slides (see Look), the menu hint (see Menu), and the full-screen hint (see Opening). The field names in the source file (such as "Role" and "Stack") do not show. Where a timeline entry on slide 2 is split across lines, the colon after its dates and the comma after its role fall at the line breaks and are not drawn; no other punctuation changes.

**Slide images:**

| Slide | Image | Alt text |
|---|---|---|
| 3 | Snowboarding photo (`site/public/IMG_6875.JPG`, or a smaller copy), caption "Snowboarding" | Leon on a snowboard on a snowy slope, giving a peace sign, with forested mountains behind. |
| 3 | Bouldering photo (`site/public/4D0BDA8A-B273-40DC-BD3D-3098AF6BBB73.JPG`, or a smaller copy), caption "Bouldering" | Leon on an indoor bouldering wall, reaching for orange holds. |
| B2 | The ProjectDay three-screen image `/projectday-screens.webp` (MOD-011 asset, section 4.6) | Record 4's `featureImageAlt` |
| B5 | Three single ProjectDay screenshots side by side, left to right: Route (`/projectday-route.webp`), Route beta (`/projectday-route-beta.webp`), Profile (`/projectday-profile.webp`), MOD-011 files | Route: "ProjectDay route screen showing a V0 route at CORNER gym with its photo, send and attempt counts, and a Log climb button." Route beta and Profile: the alt texts in section 4.6. |
| C2 | `/siteplusplus-home.jpg` (MOD-004 asset) | Screenshot of the SitePlus+ home dashboard. |
| C5 | `/siteplusplus-reports.jpeg` (MOD-004 asset) | Screenshot of the SitePlus+ reports page. |
| D1 | `/tabvault-home.png` (MOD-006 asset) | Screenshot of the TabVault web app home screen. |

**Hidden job slides:** On slide 2, the two work cards (GoFreight, Exascend) show only their timeline text, with no "Details" cue and no key. A click or tap on a card, or Enter or Space on a focused card, opens that job's slide; a click or tap anywhere else on slide 2 works as listed under Controls (a mouse click goes to slide 3). On slide 2 the keys `1` (GoFreight) and `2` (Exascend) also open the job slides, as a shortcut that nothing on screen shows. On a job slide, Next or Previous (any control) returns to slide 2. Next and Previous never reach a job slide from any other slide.

**Menu:**
- The title always reads "Pick a project".
- Four cards, in the order listed under Slides, each with its key number (1 to 4), name and one line from the source file. A click or tap on a card, Enter or Space on a focused card, or its number key starts that project at its first slide. The footer line shows as plain text, not as links.
- Next on the menu starts the project pre-selected by a start link, if there is one and it has not been shown yet. A project counts as shown once any of its slides has been displayed, by any route. Otherwise Next shows the hint "Pick a project: press 1 to 4 or click a card" for about 2 seconds and stays on the menu. Previous on the menu goes to slide 3.
- From a project: Next on its last slide, Previous on its first slide, or M on any slide returns to the menu.

**Start link:** `/slideshow?project=<name>`, where `<name>` is `multi-agent`, `projectday`, `siteplus` or `tabvault`, still opens on slide 1. On the menu, that project's card is highlighted and Next starts it, until that project has been shown (see Menu); from then on the card is no longer highlighted. Any other value is ignored.

**Opening:** Selecting the Slideshow nav item or pressing `7` puts the browser in full screen, where the browser supports it, and shows slide 1. Where full screen is not available (for example on iPhone), the slideshow fills the browser window instead. A direct visit to /slideshow (a typed or shared link, a start link, or a reload) fills the browser window. Whenever slide 1 shows in a browser window on a browser that supports full screen, the hint "Press F for full screen" shows: after a direct visit it shows with slide 1, without waiting, and after an opening from the site whose full-screen request the browser refused it shows within about 1.5 seconds. When the site's full-screen request succeeds, the hint never shows, not even for a moment. It never shows in full screen or on a browser without full-screen support. It goes away for good on the first key press, click or tap, or when full screen starts. Pressing `F`, or clicking or tapping the hint, enters full screen; a click or tap on the hint never changes the slide. The hint is not a Tab stop: `F` is its keyboard equivalent. In full screen, `F` does nothing.

**Controls:**
- Next slide: Space, Right arrow, Down arrow, Page Down, Enter; a mouse click anywhere on the screen, including the area around the 16:9 frame; on a touchscreen, a tap on the right half of the screen or a swipe left or up.
- Previous slide: Shift+Space, Left arrow, Up arrow, Page Up; on a touchscreen, a tap on the left half of the screen or a swipe right or down. A mouse click never goes back.
- Space or Enter on a focused card opens it, and Space or Enter on the focused close button leaves the slideshow, instead of moving to another slide.
- A click or tap on a menu card or a slide-2 work card opens it, a click or tap on the close button leaves the slideshow, and a click or tap on the full-screen hint enters full screen, instead of moving to another slide.
- A pen works like touch. Two-finger gestures never change slides, so pinch-zoom keeps working on a phone.
- A key held down acts once: its automatic repeats do nothing.
- Number keys: on slide 2, `1` and `2` open the job slides; on the menu, `1` to `4` start the projects; on every other slide they do nothing.
- M goes to the menu from any slide. Home goes to slide 1. Previous on slide 1 does nothing.
- Leaving: Esc, or the close button in a corner of the screen, returns to the page the slideshow was opened from (Home after a direct visit). A single Esc press does this even in full screen. Leaving full screen any other way also returns to that page.

**Look:** Each slide is a 16:9 frame, scaled to the largest size that fits the screen, with a plain background around it. Layouts follow the approved design (see Design). The slideshow uses the site's palette and Roboto, and follows the site's current light or dark theme. Slides change instantly, with no animation. On project slides, the project name and the position (for example "ProjectDay" and "3 / 8") show where the approved design places them. The about, job and menu slides show neither. In full screen, the mouse pointer hides after 3 seconds without movement, and card hover styles do not show while it is hidden; moving the mouse shows it again. It never hides in a browser window or for touch.

**Acceptance criteria (added in revision 1.7):**
- AC-095: Selecting the Slideshow nav item or pressing `7` shows slide 1 with the browser in full screen in desktop Chrome, Safari and Firefox. On a browser without full-screen support (iPhone Safari), the slideshow fills the window. In both cases no sidebar, top bar or other site element is visible.
- AC-096 (timing added in revision 1.10): Whenever slide 1 shows in a browser window on a browser with full-screen support, the hint "Press F for full screen" shows: with slide 1, without waiting, after a direct visit, a start link or a reload, and within about 1.5 seconds after an opening from the site whose full-screen request the browser refused. After an opening from the site whose full-screen request succeeds (Slideshow nav item or `7` in desktop Chrome, Safari and Firefox), the hint never shows, not even for a moment. It does not show in full screen or on iPhone Safari. It disappears for good after the first key press, click or tap, or when full screen starts. Pressing `F`, or a click or tap on the hint, enters full screen, and a click or tap on the hint does not change the slide. In full screen, `F` does nothing.
- AC-097: The keyboard controls listed under Controls work exactly as listed on the about, job, menu and project slides. From slide 1, Next goes to slide 2, slide 3, then the menu; inside a project it goes through that project's slides in the order of the source file, then back to the menu.
- AC-098: The mouse, tap, pen and swipe controls listed under Controls work as listed with a mouse on desktop and with touch on a 375px-wide phone, including opening menu cards and slide-2 work cards. A mouse click anywhere on the screen other than a card, the close button or the full-screen hint goes to the next slide and never to the previous one, and a mouse click on the area outside the 16:9 frame behaves exactly like a click on the slide. A pinch on a phone zooms and does not change the slide. The close button is visible on every slide and can be reached with Tab, and Enter or Space on it leaves the slideshow.
- AC-099: Esc or the close button returns to the page the slideshow was opened from, or to Home after a direct visit, with one Esc press, including while in full screen. Leaving full screen through the browser's own controls also returns to that page. Back on the site, the sidebar and keyboard shortcuts work as before.
- AC-100: Every slide's on-screen text matches `asset/content/interview-deck.md` word for word, as described under On-screen text, and the A2 and B6 diagrams read exactly as defined there. No speaker note, editor's note, slide label or "Visual:" line appears anywhere on /slideshow. There is no Thank-you slide, no "Shown" tag on menu cards, no avatar and no GPA. The copy contains no em dashes.
- AC-102: At 1280x720, 1920x1080, 1440x900 and 375x667 (portrait and landscape), every slide shows whole, with no scrolling and no clipped text. Slide titles are at least 7% of the slide frame's height, bullet, Titles, Roles and Role text at least 4.2%, and all other text at least 2.4%. All slide text meets WCAG AA contrast in both themes.
- AC-103: The project name and position show on project slides as described under Look, and on no other slide. Screen readers announce the new slide's title on every slide change, and its position on project slides.
- AC-104: The slideshow uses the site's palette in the active theme (light or dark) and Roboto, each slide type matches its layout in the approved design (see Design), and slide changes show no animation.
- AC-105: After /slideshow has finished loading, with the network switched off, every slide, including every slide image, still shows.
- AC-106: The slide images listed under Slide images load on their slides (no broken image), each with the alt text listed, and the captions "Snowboarding" and "Bouldering" show on slide 3. All the image files /slideshow loads together total at most 3 MB.
- AC-107: /slideshow is generated at build time. Its title is "Slideshow — Leon Wu", and it has a description meta tag, Open Graph and Twitter card tags, and the canonical URL https://www.leon-wu.com/slideshow with no parameters. Every other route still builds and renders.
- AC-113: The menu behaves as described under Menu: its title is "Pick a project" every time it shows, and "Pick another project" never appears; the four cards show in order with their key numbers; the footer line shows as plain text; Next with nothing pre-selected, or with the pre-selected project already shown, shows the hint and stays; and Previous goes to slide 3. Next on any project's last slide, Previous on its first slide, and M on any slide show the menu.
- AC-114: On slide 2, the GoFreight card (key `1`) and the Exascend card (key `2`) each open their own job slide by click, tap, focused Enter or Space, or key. Neither card shows a "Details" cue or a key, and a mouse click on slide 2 outside the cards goes to slide 3. Next or Previous on a job slide returns to slide 2, and no sequence of Next or Previous from any other slide reaches a job slide.
- AC-115: `/slideshow?project=projectday` opens on slide 1. On the menu the ProjectDay card is highlighted, and Next starts ProjectDay at B1. Once any ProjectDay slide has been shown, by any route, the card is no longer highlighted and Next on the menu shows the hint. The same holds for `multi-agent`, `siteplus` and `tabvault`. Any other value, or no parameter, behaves as no start link.

**Acceptance criteria (added in revision 1.9):**
- AC-130: In full screen with a mouse, the pointer hides after 3 seconds without movement and card hover styles do not show while it is hidden; any mouse movement shows the pointer again. In a browser window, and with touch, the pointer never hides.
- AC-131: Holding down any key that changes slides (for example Right arrow or Space) moves exactly one slide; the key's automatic repeats do nothing.

---

## 5. Content Model

### ProjectLink

```typescript
interface ProjectLink {
  name: string;    // plain-text prefix shown before the link, e.g. "GitHub: "
  label: string;   // the linked text
  href: string;
}
```

### ProjectSection

```typescript
type SectionItem = string | { image: string; alt?: string };   // a paragraph (may contain **bold**) or an image with its alt text

interface ProjectSection {
  heading: string;
  items: SectionItem[];
}
```

`alt` is optional in the type only so that the shared template can gain it before the records fill it in; every image item on the site carries its alt text (AC-127).

### ProjectEntry

```typescript
interface ProjectEntry {
  slug: string;           // URL slug, e.g. "siteplus"
  year: string;
  date: string;           // "MM/DD" format
  title: string;
  tech: string;           // single string shown in sidebar and home list
  tags: string[];         // chip labels shown on detail page header
  atAGlance: string;      // one-line summary shown under title
  description: string;    // pull-quote shown above sections
  links: ProjectLink[];   // external links shown in detail header; no links row when empty
  featureImage?: string;        // image shown after the pull-quote, before the sections
  featureImageAlt?: string;     // alt text for the feature image
  featureImageCaption?: string; // caption shown directly below the feature image
  sections: ProjectSection[];
}
```

### Project Records (source of truth)

**Record 1 — SitePlus+**
```
slug: "siteplus"
title: "SitePlus+"
tech: "Full-Stack · Java/Spring Boot · React · AWS"
tags: ["Full-Stack", "Java/Spring Boot", "Spring Security / JWT", "React", "TypeScript", "Redux Toolkit", "PostgreSQL", "Redis", "Docker", "GitHub Actions", "AWS"]
atAGlance: "Sole engineer · Full-stack + AWS infra · Live in production · Cut recurring analytics work ~60%"
description: "A full-stack analytics platform for tracking user behavior, managing campaigns, and auditing SEO across multiple websites. Built end to end on my own and adopted in production by a real company, where it cut recurring analytics work by roughly 60 percent."
links:
  - { name: "Demo: ", label: "interactive walkthrough", href: "https://app.supademo.com/demo/cmosxfpu96m3ew9doctdnhtah" }
  - { name: "GitHub: ", label: "marketing-analytics", href: "https://github.com/LeonWu813/marketing-analytics" }
featureImage: "/siteplusplus-home.jpg"
featureImageAlt: "Screenshot of the SitePlus+ home dashboard."
```

**Record 2 — Multi-Agent Software Development System**
```
slug: "multi-agent-system"
title: "Multi-Agent Software Development System"
tech: "Harness Engineering · AI Agents · Systems Design · Claude Code"
tags: ["Claude Code", "Bash", "Python", "Git", "Multi-agent", "Systems Design"]
atAGlance: "Sole architect · 6 specialized agents + coordinator · Human-approved at every handoff · Shipped 3 products: TabVault, ProjectDay and this site"
description: "A team of six AI agents, run by a coordinator session, that plan, build, and QA software through a human-approved workflow. It has shipped three products: TabVault, a full-stack web app deployed to AWS; ProjectDay, an iOS app submitted to the App Store; and this portfolio site."
links:
  - { name: "GitHub: ", label: "System repo", href: "https://github.com/LeonWu813/multi-agent-software-development-system" }
  - { name: "GitHub: ", label: "TabVault repo", href: "https://github.com/LeonWu813/tab-management" }
featureImage: the landscape diagram in section 4.4 (a copy of asset/diagrams/multi-agent-horizontal.png; file name and location are the Tech Lead's call)
featureImageAlt: "Workflow diagram of the multi-agent system. A planning row runs from user requirements through PM, Tech Lead, human setup and approval, PM finalize, and Doc-Sync. A build row runs through Engineer, QA, Tech Lead integration review, PM checkpoint, and project complete, with loops for bugs, repeat failures, spec issues and retrospectives, all run by a coordinator session."
featureImageCaption: "Human approval sits on every arrow. The coordinator runs the next step only after the human says yes."
```

**Record 3 — TabVault**
```
slug: "tabvault"
title: "TabVault"
tech: "Full-Stack · PWA · AI · AWS"
tags: ["Java 21 / Spring Boot", "React / TypeScript PWA", "Chrome Extension (MV3)", "PostgreSQL", "Redis", "Quartz", "Claude API", "AWS ECS Fargate"]
atAGlance: "Orchestrator + reviewer · 3 clients (Chrome MV3, React PWA, Spring Boot API) · Built by my multi-agent system · Deployed to AWS ECS Fargate (now offline)"
description: "A production full-stack tab manager spanning a Chrome extension, a React PWA, and a Spring Boot backend, with an AI content-analysis pipeline. I produced it by running my own multi-agent development system, reviewing and approving every step."
links:
  - { name: "GitHub: ", label: "tab-management", href: "https://github.com/LeonWu813/tab-management" }
featureImage: "/tabvault-home.png"
featureImageAlt: "Screenshot of the TabVault web app home screen."
```

**Record 4 — ProjectDay**
```
slug: "projectday"
year: "2026"
date: "09/19"
title: "ProjectDay"
tech: "Mobile · React Native · Supabase · AWS"
tags: ["TypeScript", "React Native / Expo", "Supabase (Postgres, Auth, Edge Functions)", "AWS (S3, MediaConvert, CloudFront, CDK)", "EAS", "i18next", "GitHub Actions"]
atAGlance: "Product owner + orchestrator · 12 modules, built by my multi-agent system · Supabase + AWS video pipeline · Submitted to the App Store (Oct 2026)"
description: "An iOS app for indoor bouldering climbers in Taiwan: log a send in a few taps, watch beta videos tied to a specific route, and browse gym route lists. Built with my multi-agent development system and submitted to the App Store."
links: []
featureImage: "/projectday-screens.webp" (the three-screen image in section 4.6)
featureImageAlt: "Three ProjectDay screens in Traditional Chinese. Home shows saved gyms, a target route and new beta videos. Gyms lists climbing gyms with search and city filters. A route screen shows a V0 route at CORNER gym with its photo, send and attempt counts, and a Log climb button."
featureImageCaption: "ProjectDay's interface is in Traditional Chinese, for climbers in Taiwan."
```

### ExperienceEntry

```typescript
interface ExperienceEntry {
  title: string;
  company: string;
  location: string;
  startDate: string;    // "MMM YYYY"
  endDate: string;      // "MMM YYYY" or "Present"
  bullets: string[];
  tags?: string[];      // optional tech/skill chips (both roles have them)
}
```

### EducationEntry

```typescript
interface EducationEntry {
  degree: string;
  institution: string;
  gpa: string;
  period: string;
  location: string;
}
```

---

## 6. Functional and Technical Requirements

### Stack

- **Framework:** Next.js 16 (App Router), TypeScript throughout
- **Styling:** Tailwind CSS v4 with `@theme inline` custom tokens
- **Language:** TypeScript throughout
- **Font:** Roboto via `next/font/google`

**Tailwind v4 CSS cascade note:** All base resets (e.g. `a { color: inherit }`) must be wrapped in `@layer base { }` to avoid unlayered CSS overriding layered utility classes.

### Routing

All routes are statically generated at build time (`generateStaticParams` + `dynamicParams = false`).

| Route | Page |
|---|---|
| / | Home |
| /projects | Redirects to /projects/multi-agent-system |
| /projects/siteplus | SitePlus+ detail |
| /projects/multi-agent-system | Multi-Agent System detail |
| /projects/tabvault | TabVault detail |
| /projects/projectday | ProjectDay detail |
| /experience | Experience |
| /about | About |
| /skills | Skills |
| /contact | Contact |
| /slideshow | Slideshow (full-screen interview deck) |

### Layout Architecture

```
body.h-screen.overflow-hidden.flex.flex-col
  Sidebar (position: fixed, w-64)
  div.md:hidden.flex-shrink-0.h-12   ← mobile spacer
  div.md:ml-64.flex-1.flex.flex-col.min-h-0
    main.flex-1.flex.flex-col.overflow-y-auto   ← scroll container for non-projects pages
      {children}
```

**Projects layout override** (replaces main's overflow-y-auto scroll with two independent panels):
```
projects/layout.tsx:
  div.flex.flex-1.min-h-0.overflow-hidden
    aside (ProjectList, w-64, overflow-y-auto)
    div.flex-1.overflow-y-auto  ← project detail content
```

### Keyboard Shortcuts

Number keys `1`–`7` navigate to the corresponding nav item (`7` opens the slideshow, section 4.11). Implemented as a global `keydown` listener in `Sidebar.tsx`. Suppressed when:
- Focus is on `INPUT`, `TEXTAREA`, or `contenteditable` element
- Any modifier key (`metaKey`, `ctrlKey`, `altKey`) is held
- The slideshow is open (inside it, keys work as listed in section 4.11)
- An image overlay is open on a project page (section 4.2): the keys do nothing until it closes

**Acceptance criteria (added in revision 1.9):**
- AC-129: While the image overlay (section 4.2) is open, pressing any of `1`–`7` does nothing: the overlay stays open and the page does not change.

### SEO and Open Graph

Every page must include:
- `<title>`: `"{Page Name} — Leon Wu"`
- `<meta name="description">`: page-specific description
- Open Graph and Twitter card tags
- Canonical URL tag
- Canonical URL and og:url use the domain https://www.leon-wu.com followed by the page path.
- The site names Leon "Leon Wu": in the sidebar, the mobile wordmark, page titles, and wherever page text or a meta tag gives his full name. The full-name forms "Tsan-Yu (Leon) Wu" and "Tsan-Yu Wu (Leon)" do not appear on the site. The CV PDF served at /Leon_cv.pdf is outside this rule.

**Acceptance criteria (added in revision 1.8):**
- AC-125 (changed in revision 1.9): In the built HTML of every route, neither "Tsan-Yu (Leon) Wu", "Tsan-Yu Wu (Leon)" nor "Tsan-Yu Wu" appears. Every meta description, Open Graph description and Twitter description that named Leon by his full name names him "Leon Wu" instead, with the rest of its text unchanged unless AC-121 or AC-122 gives the full text. For example, the root description reads "Portfolio of Leon Wu — full-stack engineer and CS master's student at Northeastern University." The LinkedIn URL and the email address, which contain "tsan-yu" and "tsan.yu", are unchanged.

Social preview image: [ASSET NEEDED — 1200×630px]

### Resume Hosting

Resume PDF served at `/Leon_cv.pdf`. Linked from Contact page and Home page CTA.
**File:** `asset/Leon_cv.pdf` → copy to `public/Leon_cv.pdf` before deploying.
On 2026-11-01 Leon replaced `asset/Leon_cv.pdf` with his newer CV (`cv/fullstack/Leon_Wu_CV.pdf`), and replaced it again the same day with a copy whose text is unchanged and whose multi-agent GitHub link is fixed (commit cfa3367). The served file is replaced with the file at commit cfa3367. This CV still names tab-vault.com under the multi-agent project; Leon chose it knowing that, so the PDF's contents are outside AC-117. The CV also lists Leon's phone number, which the site's pages do not show (AC-126); the PDF's contents are outside AC-126.

### Deployment

- **Host:** Vercel. Zero-config deploys, automatic HTTPS, global CDN.
- **Deploy:** Connect GitHub repo to Vercel; every push to `main` triggers production deploy.
- **Domain:** www.leon-wu.com. Configure via Vercel domain settings.

### Repository Maintenance (pre-launch checklist)

- Remove all placeholder comments from READMEs
- Fill any empty sections (License, etc.)
- Ensure each repo has a useful description and topic tags on GitHub

---

## 7. Assets Needed

### Confirmed (ready to use)

| Asset | Location / Value |
|---|---|
| Color palette | IBM Carbon: `--bg #ffffff` · `--text #161616` · `--accent #0f62fe` (light); `--bg #161616` · `--text #f4f4f4` · `--accent #78a9ff` (dark) |
| Favicon | `asset/favicon_io/` (favicon.ico, 16×16, 32×32, apple-touch-icon, webmanifest) |
| Resume PDF | `asset/Leon_cv.pdf` → copy to `public/Leon_cv.pdf` (replaced 2026-11-01 with Leon's newer CV; see section 6, Resume Hosting) |
| LinkedIn URL | https://www.linkedin.com/in/leon-wu-tsan-yu/ |
| GitHub URL | https://github.com/LeonWu813 |
| Public email | leon.wu.tsan.yu@gmail.com |
| Case study content | `asset/content/case-study-*-detailed.md` |
| Site copy | `asset/content/site-copy.md` |
| Experience content | `asset/content/experience.md` |
| Skills content | `asset/content/skills.md` |
| Multi-agent feature image | `asset/diagrams/multi-agent-horizontal.png` (source: `asset/diagrams/multi-agent-horizontal.html`) |
| ProjectDay case study | `asset/content/case-study-projectday-detailed.md` |
| Domain | https://www.leon-wu.com |
| SitePlus+ screenshots | Shown in the SitePlus+ Images section (section 4.3) |
| TabVault screenshots | Shown in the TabVault Images section (section 4.5) |
| ProjectDay screenshots | `asset/screenshots/projectday/` (five 1206x2622 iPhone screenshots of demo data, cleared for publishing; all five are used, see sections 4.6 and 4.11) |
| Interview deck copy | `asset/content/interview-deck.md` |
| Seattle photos for the slideshow | `site/public/IMG_6875.JPG` (snowboarding), `site/public/4D0BDA8A-B273-40DC-BD3D-3098AF6BBB73.JPG` (bouldering) |
| Slideshow design | `project-planning/design/ux-team/` at commit ac1a07d, approved by Leon on 2026-11-01 (`status.md` Decisions) |

### Still needed — blocking

None.

### Still needed — non-blocking

| Asset | Used On | Notes |
|---|---|---|
| Social preview image (OG image) | All pages (og:image) | 1200×630px; affects link previews only |
| ProjectDay App Store link | /projects/projectday | Add once the App Store listing is live |

---

## 8. Out of Scope

The following are explicitly not part of this build.

- **Blog or blog infrastructure:** No blog section, no Blogs nav item, no MDX/CMS setup.
- **Contact form:** Contact page shows a real email address and links only.
- **Internationalization (i18n):** English only.
- **Footer:** Removed. No bottom bar or copyright line on any page.
- **Analytics:** GA4 is deferred. Not implemented in current revision.
- **Slideshow extras:** No presenter view, no speaker notes on screen, no PDF export or print layout, no slide editing in the browser, no slide number in the URL, no autoplay, no theme switch inside the slideshow, no intro line tailored from the URL, no backup slides, no Thank-you slide, and no installable offline copy (the deck works offline only after it has loaded).
- **Image overlay extras:** No zoom or pan controls inside the overlay, no next or previous between images, and no larger image file than the page already shows.
- **Turning keyboard shortcuts off:** No setting to turn off or remap the single-key shortcuts: the site's `1`–`7` (section 6) and the slideshow's `F`, `M` and number keys (section 4.11). Known accessibility limitation, accepted by Leon in revision 1.10: these keys do not fully meet WCAG 2.1.4 (Character Key Shortcuts), so a speech-input user may trigger one by speaking a word.

---

## 9. Adopted Conventions

Conventions proposed by the Tech Lead and approved by Leon. Doc-Sync copies them into production.md.

- CONV-001: The shared project frame belongs to MOD-003: `site/app/projects/`, `site/components/ProjectList.tsx`, `site/components/ProjectMobileNav.tsx`, and the interfaces and ordered `projects` array in `site/data/projects-data.ts`. Each project-detail module owns only its record file `site/data/projects/<slug>.ts` and its `site/public/<prefix>*` assets. A detail module that needs a template change logs `blocked-technical` for MOD-003 and does not edit the template itself. (Tech Lead Reviews, 2026-11-01 change review)
- CONV-002: A project record's position in `projects` is its display order everywhere: the side panel, the mobile switcher and the Home list. `projects[0]` is the `/projects` redirect target. (Tech Lead Reviews, 2026-11-01 change review)
- CONV-003: Section headings and paragraphs match the project's own source file in `asset/content/` word for word. Editor's notes in a source file never render. Exception: on /projects/tabvault, paragraphs outside "The problem" and "Impact" follow section 4.5 Body copy and AC-133 (Leon, 2026-11-01, revision 1.12). (Tech Lead Reviews, 2026-11-01 change review)
- CONV-004: A `spec-update` changes only the ACs named in the triggering Sync Report. Code that differs from the spec in other ACs is reported in Engineering Progress and is not changed. (Tech Lead Reviews, 2026-11-01 change review)
- CONV-005: A project record file `site/data/projects/<slug>.ts` exports exactly one named constant annotated `ProjectEntry` and imports only types from `@/data/projects-data`. `site/data/projects-data.ts` holds only the interfaces and the ordered `projects` array. (Tech Lead Reviews, 2026-11-01 change review, rev 1.5)
- CONV-006: Slideshow entry contract between MOD-001 and MOD-012. When the site opens the slideshow (the Slideshow nav link or key `7`), MOD-001, in the same event handler and in this order: writes `sessionStorage["slideshow-return"] = JSON.stringify({ path: location.pathname, t: Date.now(), fs })`, where `fs` is `true` when it is about to call `document.documentElement.requestFullscreen()` in the same handler (that is, when `document.fullscreenEnabled`), otherwise `false`; calls `document.documentElement.requestFullscreen()` if `document.fullscreenEnabled`, ignoring a rejection; and navigates client-side to `/slideshow`. MOD-012 reads and removes that key once on first mount. A value whose `path` starts with "/" and is not "/slideshow", and whose `t` is at most 10 seconds old, means "opened from the site": leaving returns to `path` with `router.replace`. Anything else means a direct visit: leaving goes to "/". A value without `fs` reads as `fs: false` (no request made). MOD-012 shows the "Press F for full screen" hint only while slide 1 is in a browser window and `document.fullscreenEnabled` is true. After an opening from the site with `fs: true`, it waits until full screen starts (the hint then never shows) or about 1.5 seconds pass with the browser still windowed. On any other opening it shows the hint at once, after its entrance delay. Every full-screen request the slideshow makes (`F` and the hint) targets `document.documentElement`. (Tech Lead Reviews, 2026-11-01 change review rev 1.7 + 1.8; hint rule changed by Leon's design decision L-2; `fs` field and hint timing from the 2026-11-01 change review rev 1.9, D1 (a) and Q6)
- CONV-007: The shell on /slideshow. On `/slideshow` the site shell renders nothing: Sidebar returns `null`, its number-key handler does nothing, and no shell image is requested (no `/head.png`, no `/Subject.png`, verified in DevTools Network). MOD-001 moves or guards the `main::after` decoration so it is not generated there. The slideshow root is a fixed full-viewport layer above the shell, owned by MOD-012. Sidebar's number-key handler also does nothing while a `dialog[open]` exists, and in-page overlays are native `<dialog>` elements opened with `showModal()`. (Tech Lead Reviews, 2026-11-01 change review rev 1.7 + 1.8; T1 (b), T3 (a), T6)
