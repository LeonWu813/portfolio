# Product Requirements Document: Leon's Portfolio Website

**Revision:** 1.6
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
5. Content Model
6. Functional and Technical Requirements
7. Assets Needed
8. Out of Scope
9. Adopted Conventions

---

## 1. Overview

### Purpose

A personal portfolio website for Tsan-Yu Wu (Leon), full-stack engineer and CS master's student at Northeastern, currently seeking a 2026/2027 software engineering internship (full-stack, frontend, or backend). The site presents Leon's four flagship projects, work history, and technical skills in a clean, minimal, recruiter-friendly format.

### Goals

1. Give technical recruiters and hiring managers a fast, credible picture of Leon's engineering ability within their first few seconds on the page.
2. Showcase four strong projects as full case studies, each reachable in one click from the projects sidebar.
3. Make contact and resume access effortless from any page.
4. Have the site itself serve as evidence of Leon's frontend, accessibility, and deployment skills by being fast, responsive, and WCAG-conscious.

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
- Profile section: LW initials circle (accent-colored), name "Leon Wu", subtitle "Full-Stack Engineer".
- Primary navigation links with SVG icons and keyboard shortcut badges.
- Horizontal rule separator.
- "Online" block with social/contact links and external link icons.
- Theme toggle at the bottom (desktop only).

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
- Number-key shortcuts 1–6 for nav (see section 6).

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

Keyboard shortcuts fire on `keydown` with no modifier keys, and are suppressed when focus is on an `<input>`, `<textarea>`, or `contenteditable` element.

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

---

### 4.3 Project Detail: SitePlus+

**Route:** /projects/siteplus

**Source file:** `asset/content/case-study-siteplus-detailed.md`

**Header area:**

| Element | Value |
|---|---|
| Project name (H1) | SitePlus+ |
| At-a-glance | Sole engineer · Full-stack + AWS infra · Live in production · Cut recurring analytics work ~60% |
| Tags | Full-Stack · Java/Spring Boot · React · TypeScript · Redux Toolkit · PostgreSQL · Redis · Docker · GitHub Actions · AWS |
| Link 1 | "Demo Video: " followed by the linked label "link" — https://app.supademo.com/demo/cmosxfpu96m3ew9doctdnhtah |
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

The Images section shows the SitePlus+ screenshots (`/siteplusplus-reports.jpeg`, `/siteplusplus-sites.jpeg`, in order) and has no paragraphs.

**Inline bold:** Paragraphs may contain `**bold text**` markdown which renders as `<strong>` in the UI.

---

### 4.4 Project Detail: Multi-Agent Software Development System

**Route:** /projects/multi-agent-system

**Source file:** `asset/content/case-study-multi-agent-detailed.md`

**Header area:**

| Element | Value |
|---|---|
| Project name (H1) | Multi-Agent Software Development System |
| At-a-glance | Sole architect · 6 specialized agents + coordinator · Human-approved at every handoff · Shipped TabVault (live) · ProjectDay submitted to the App Store |
| Tags | Claude Code · Bash · Python · Git · Multi-agent · Systems Design |
| Link 1 | "Built by the system: " followed by the linked label "tab-vault.com" — https://tab-vault.com |
| Link 2 | "GitHub: " followed by the linked label "System repo" — https://github.com/LeonWu813/multi-agent-software-development-system |
| Link 3 | "GitHub: " followed by the linked label "TabVault repo" — https://github.com/LeonWu813/tab-management |
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

**Body copy:** Section paragraphs match `asset/content/case-study-multi-agent-detailed.md` as of revision 1.4 (6 agents plus a coordinator, PM two-pass approval, scope check, pstack reviews, integration review, repeat-failure escalation, and an Impact section covering TabVault and ProjectDay).

**Acceptance criteria (added in revision 1.4):**
- AC-091: On /projects/multi-agent-system, the feature image is the landscape diagram from `asset/diagrams/multi-agent-horizontal.png`, not the earlier portrait diagram. It fills the width of the content column with no cropping on desktop (1280px wide) and mobile (375px wide). It has alt text describing the workflow (proposed: "Workflow diagram of the multi-agent system. A planning row runs from user requirements through PM, Tech Lead, human setup and approval, PM finalize, and Doc-Sync. A build row runs through Engineer, QA, Tech Lead integration review, PM checkpoint, and project complete, with loops for bugs, repeat failures, spec issues and retrospectives, all run by a coordinator session."), and the caption above appears directly below it.
- AC-092: The At-a-glance line, tags, three links, description pull-quote, and every section paragraph on /projects/multi-agent-system match this section and the source file word for word. Each link shows its plain-text prefix followed by the linked label, as in the header table, and only the label is a link. The editor's line "Feature image: ..." from the source file does not appear on the page.

---

### 4.5 Project Detail: TabVault

**Route:** /projects/tabvault

**Source file:** `asset/content/case-study-tabvault-detailed.md`

**Header area:**

| Element | Value |
|---|---|
| Project name (H1) | TabVault |
| At-a-glance | Orchestrator + reviewer · 3 clients (Chrome MV3, React PWA, Spring Boot API) · Built by my multi-agent system · Live on AWS ECS Fargate |
| Tags | Java 21 / Spring Boot · React / TypeScript PWA · Chrome Extension (MV3) · PostgreSQL · Redis · Quartz · Claude API · AWS ECS Fargate |
| Link 1 | "Live: " followed by the linked label "tab-vault.com" — https://tab-vault.com |
| Link 2 | "GitHub: " followed by the linked label "tab-management" — https://github.com/LeonWu813/tab-management |

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

The Images section shows the TabVault screenshots (`/tabvault-mobile.jpeg`, `/tabvault-plugin.png`, in order) and has no paragraphs.

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
| Feature image | Leon's iPhone screenshots from the App Store Connect submission. The files are not supplied yet (see section 7); until they are, the page renders without a feature image. |

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
- AC-082: No external links render on /projects/projectday, and no empty links row appears. No GitHub link renders while the repository is private, and no App Store link renders until the listing is confirmed live.
- AC-083: The description pull-quote reads exactly as Record 4's `description`, in the same style as the other project pages.
- AC-084: Six sections render in the order listed, with exactly those headings. Every paragraph matches the source file word for word. The editor's notes "(confirm it is live before publishing)" and "Suggested listing fields: ..." do not appear anywhere on the page.
- AC-085: Text written as `**bold**` in the source renders as bold, and no literal asterisks show.
- AC-086: ProjectDay appears in the projects side panel at the position set in section 4.2, showing its title and tech line. It is highlighted as active while /projects/projectday is open.
- AC-087: ProjectDay appears in the Home page projects list with its title and tech line, links to /projects/projectday, and shows no date.
- AC-088: The page title is "ProjectDay — Leon Wu". The page has a description meta tag, Open Graph and Twitter card tags, and a canonical URL, like the other project pages.
- AC-089: Once the screenshots are supplied, the feature image renders with meaningful alt text and no cropping on desktop (1280px wide) and mobile (375px wide). Until then, the page renders without an empty image slot or a broken image.
- AC-090: /projects/projectday is generated at build time. /projects/siteplus, /projects/multi-agent-system and /projects/tabvault still render, and an unknown slug under /projects still returns 404.

---

### 4.7 Experience

**Route:** /experience

**Layout:** Two-column timeline (`grid grid-cols-[9rem_1fr]`). Left column: date range right-aligned. Right column: dot indicator with vertical line connector, role title, company, bullets, tech chips.

- Date format: `{startDate} – {endDate}` (no line break between start and end).
- Tech chips: small `px-2 py-0.5 rounded` badges.
- Outer wrapper: `px-8 py-16 max-w-2xl mx-auto w-full`.

**Entries (reverse-chronological):**

**Role 1: Front-End Developer**
- Company: Exascend
- Location: Taipei, Taiwan
- Dates: Sep 2023 – Jun 2025
- Bullets:
  - Designed and implemented a custom JavaScript event-tracking system posting structured user interactions to CRM and GA4 APIs, automating cross-platform data capture and cutting manual reporting by 70%.
  - Led end-to-end development of two customer-facing websites from scratch (HTML, CSS, JavaScript), growing monthly active users by 350% and increasing average session engagement time by 22.3%.
  - Ran technical SEO and accessibility audits (Google Search Console, Lighthouse, WCAG) validated via A/B testing, driving a 48.84% increase in page views while ensuring inclusive, accessible experiences.

**Role 2: Growth Marketer / Marketing Project Manager**
- Company: GoFreight
- Location: Taipei, Taiwan
- Dates: Jul 2021 – Mar 2023
- Tags: Project Planning · Google Ads · Baidu Ads · SEO · CRO · A/B Testing · Analytics
- Bullets:
  - Planned and executed conversion rate optimization experiments, growing conversion from 0.38% to 2.55%, and improved technical SEO by raising Lighthouse score from 20 to 70.
  - Managed Google Ads campaigns to cut cost per demo from $5,000 to below $2,000, and expanded into the China market via Baidu Ads, generating $3,150 in inbound pipeline.
  - Planned and executed an SEO migration strategy that held the primary keyword to a one-rank drop, and organized the JCTrans GFFC 12th event achieving a $16,500 target pipeline.

**Education section** (same timeline visual, at the bottom of the page):

| Degree | Institution | GPA | Period | Location |
|---|---|---|---|---|
| MS in Computer Science | Northeastern University | 3.9 / 4.0 | Expected Dec 2027 | Seattle, WA |
| BA in International Business | National Chengchi University | 3.5 / 4.0 | Completed | Taipei, Taiwan |

---

### 4.8 About

**Route:** /about

**Layout:** Outer wrapper `px-8 py-16 max-w-2xl mx-auto w-full`. No education block on this page (education lives on Experience).

**Main paragraph:**

> My path into engineering did not start in a computer science classroom. I studied International Business in Taipei and spent the early part of my career on the product and marketing side, where I taught myself to code so I could build the things I was responsible for shipping. That habit grew into building full-stack products that real companies and real users came to depend on. I am now pursuing my MS in Computer Science at Northeastern to strengthen the fundamentals beneath the work I had already been doing.

**Second paragraph:**

> The pivot is the point. I learned to engineer by shipping software that people actually use, and I bring that same bias toward real, working results to everything I build, whether that is a production analytics platform or a system of AI agents that ships software on its own.

---

### 4.9 Skills

**Route:** /skills

**Layout:** Outer wrapper `px-8 py-16 max-w-2xl mx-auto w-full`.

**Page heading:** Skills

**Intro line:** Languages, frameworks, and tools I work with.

**Skill groups:**

| Category | Skills |
|---|---|
| Languages | Java, JavaScript, TypeScript, Python, SQL, C++, C, HTML, CSS |
| Backend | Spring Boot, Spring Security, Spring Data JPA, Hibernate, JWT, REST APIs, JUnit, Mockito |
| Frontend | React, Redux Toolkit, Vite, Axios, Recharts |
| Databases and Cloud | PostgreSQL, Redis, AWS (EC2, ALB, RDS, ElastiCache, S3, CloudFront) |
| DevOps and Tools | Docker, GitHub Actions, Nginx, Git, Maven |
| Analytics and Design | Figma, GA4, SEO, WCAG |

Each category rendered as a labeled group with chip/badge elements per skill.

---

### 4.10 Contact

**Route:** /contact

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
type SectionItem = string | { image: string };   // a paragraph (may contain **bold**) or an image

interface ProjectSection {
  heading: string;
  items: SectionItem[];
}
```

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
tags: ["Full-Stack", "Java/Spring Boot", "React", "TypeScript", "Redux Toolkit", "PostgreSQL", "Redis", "Docker", "GitHub Actions", "AWS"]
atAGlance: "Sole engineer · Full-stack + AWS infra · Live in production · Cut recurring analytics work ~60%"
description: "A full-stack analytics platform for tracking user behavior, managing campaigns, and auditing SEO across multiple websites. Built end to end on my own and adopted in production by a real company, where it cut recurring analytics work by roughly 60 percent."
links:
  - { name: "Demo Video: ", label: "link", href: "https://app.supademo.com/demo/cmosxfpu96m3ew9doctdnhtah" }
  - { name: "GitHub: ", label: "marketing-analytics", href: "https://github.com/LeonWu813/marketing-analytics" }
featureImage: "/siteplusplus-home.jpg"
```

**Record 2 — Multi-Agent Software Development System**
```
slug: "multi-agent-system"
title: "Multi-Agent Software Development System"
tech: "Harness Engineering · AI Agents · Systems Design · Claude Code"
tags: ["Claude Code", "Bash", "Python", "Git", "Multi-agent", "Systems Design"]
atAGlance: "Sole architect · 6 specialized agents + coordinator · Human-approved at every handoff · Shipped TabVault (live) · ProjectDay submitted to the App Store"
description: "A team of six AI agents, run by a coordinator session, that plan, build, and QA software through a human-approved workflow. It has shipped two products: TabVault, a live full-stack web app, and ProjectDay, an iOS app submitted to the App Store."
links:
  - { name: "Built by the system: ", label: "tab-vault.com", href: "https://tab-vault.com" }
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
atAGlance: "Orchestrator + reviewer · 3 clients (Chrome MV3, React PWA, Spring Boot API) · Built by my multi-agent system · Live on AWS ECS Fargate"
description: "A production full-stack tab manager spanning a Chrome extension, a React PWA, and a Spring Boot backend, with an AI content-analysis pipeline. I produced it by running my own multi-agent development system, reviewing and approving every step."
links:
  - { name: "Live: ", label: "tab-vault.com", href: "https://tab-vault.com" }
  - { name: "GitHub: ", label: "tab-management", href: "https://github.com/LeonWu813/tab-management" }
featureImage: "/tabvault-home.png"
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
  tags?: string[];      // optional tech/skill chips (used by GoFreight role)
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

Number keys `1`–`6` navigate to the corresponding nav item. Implemented as a global `keydown` listener in `Sidebar.tsx`. Suppressed when:
- Focus is on `INPUT`, `TEXTAREA`, or `contenteditable` element
- Any modifier key (`metaKey`, `ctrlKey`, `altKey`) is held

### SEO and Open Graph

Every page must include:
- `<title>`: `"{Page Name} — Leon Wu"`
- `<meta name="description">`: page-specific description
- Open Graph and Twitter card tags
- Canonical URL tag
- Canonical URL and og:url use the domain https://www.leon-wu.com followed by the page path.

Social preview image: [ASSET NEEDED — 1200×630px]

### Resume Hosting

Resume PDF served at `/Leon_cv.pdf`. Linked from Contact page and Home page CTA.
**File:** `asset/Leon_cv.pdf` → copy to `public/Leon_cv.pdf` before deploying.

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
| Resume PDF | `asset/Leon_cv.pdf` → copy to `public/Leon_cv.pdf` |
| LinkedIn URL | https://www.linkedin.com/in/leon-wu-tsan-yu/ |
| GitHub URL | https://github.com/LeonWu813 |
| Public email | leon.wu.tsan.yu@gmail.com |
| Case study content | `asset/content/case-study-*-detailed.md` |
| Site copy | `asset/content/site-copy.md` |
| Experience content | `asset/content/experience.md` |
| Multi-agent feature image | `asset/diagrams/multi-agent-horizontal.png` (source: `asset/diagrams/multi-agent-horizontal.html`) |
| ProjectDay case study | `asset/content/case-study-projectday-detailed.md` |
| Domain | https://www.leon-wu.com |
| SitePlus+ screenshots | Shown in the SitePlus+ Images section (section 4.3) |
| TabVault screenshots | Shown in the TabVault Images section (section 4.5) |

### Still needed — blocking

None.

### Still needed — non-blocking

| Asset | Used On | Notes |
|---|---|---|
| Social preview image (OG image) | All pages (og:image) | 1200×630px; affects link previews only |
| ProjectDay feature image / screenshots | /projects/projectday | Leon's iPhone screenshots from the App Store Connect submission; Leon supplies the files, which ones, and their order. The page renders without them until then. |
| ProjectDay App Store link | /projects/projectday | Add once the App Store listing is live |

---

## 8. Out of Scope

The following are explicitly not part of this build.

- **Blog or blog infrastructure:** No blog section, no Blogs nav item, no MDX/CMS setup.
- **Contact form:** Contact page shows a real email address and links only.
- **Internationalization (i18n):** English only.
- **Footer:** Removed. No bottom bar or copyright line on any page.
- **Analytics:** GA4 is deferred. Not implemented in current revision.

---

## 9. Adopted Conventions

Conventions proposed by the Tech Lead and approved by Leon. Doc-Sync copies them into production.md.

- CONV-001: The shared project frame belongs to MOD-003: `site/app/projects/`, `site/components/ProjectList.tsx`, `site/components/ProjectMobileNav.tsx`, and the interfaces and ordered `projects` array in `site/data/projects-data.ts`. Each project-detail module owns only its record file `site/data/projects/<slug>.ts` and its `site/public/<prefix>*` assets. A detail module that needs a template change logs `blocked-technical` for MOD-003 and does not edit the template itself. (Tech Lead Reviews, 2026-11-01 change review)
- CONV-002: A project record's position in `projects` is its display order everywhere: the side panel, the mobile switcher and the Home list. `projects[0]` is the `/projects` redirect target. (Tech Lead Reviews, 2026-11-01 change review)
- CONV-003: Section headings and paragraphs match the project's own source file in `asset/content/` word for word. Editor's notes in a source file never render. (Tech Lead Reviews, 2026-11-01 change review)
- CONV-004: A `spec-update` changes only the ACs named in the triggering Sync Report. Code that differs from the spec in other ACs is reported in Engineering Progress and is not changed. (Tech Lead Reviews, 2026-11-01 change review)
- CONV-005: A project record file `site/data/projects/<slug>.ts` exports exactly one named constant annotated `ProjectEntry` and imports only types from `@/data/projects-data`. `site/data/projects-data.ts` holds only the interfaces and the ordered `projects` array. (Tech Lead Reviews, 2026-11-01 change review, rev 1.5)
