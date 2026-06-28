# Product Requirements Document: Leon's Portfolio Website

**Revision:** 1.2
**Date:** 2026-06-28
**Author:** PM Agent (synthesized from portfolio-plan.md and content files)

---

## Table of Contents

1. Overview
2. Design Direction
3. Information Architecture
4. Page Requirements
   - 4.1 Home
   - 4.2 Projects (grid)
   - 4.3 Project Detail: Marketing Analytics Platform
   - 4.4 Project Detail: Multi-Agent Software Development System
   - 4.5 Project Detail: TabVault
   - 4.6 Experience
   - 4.7 About
   - 4.8 Skills
   - 4.9 Contact
5. Content Model
6. Functional and Technical Requirements
7. Assets Needed
8. Out of Scope

---

## 1. Overview

### Purpose

A personal portfolio website for Tsan-Yu Wu (Leon), full-stack engineer and CS master's student at Northeastern, currently seeking a Summer 2026 software engineering internship (full-stack, frontend, or backend). The site presents Leon's three flagship projects, work history, and technical skills in a clean, minimal, recruiter-friendly format.

### Goals

1. Give technical recruiters and hiring managers a fast, credible picture of Leon's engineering ability within their first few seconds on the page.
2. Showcase three strong projects as full case studies, each reachable in one click from the projects grid.
3. Make contact and resume access effortless from any page.
4. Have the site itself serve as evidence of Leon's frontend, accessibility, and deployment skills by being fast, responsive, and WCAG-conscious.

### Target Audience

- **Primary:** Technical recruiters and engineering hiring managers evaluating internship candidates.
- **Secondary:** Engineers who may follow linked GitHub repos.

### Success Criteria

- The top three projects, each showing role and stack, are visible without scrolling on the Projects page.
- Every project links to a working live demo and a GitHub repository.
- The site loads fast, works well on mobile, and passes basic WCAG accessibility checks.
- A visitor can reach Leon's email, LinkedIn, GitHub, and resume PDF from any page.

---

## 2. Design Direction

### Layout

Persistent slim left sidebar containing:
- Wordmark: **"Leon"** (confirmed).
- Primary navigation links.
- "Connect" block with social/contact links.

Main content area to the right of the sidebar: single column, comfortable line length (~65–75 characters), generous top and bottom padding between sections.

### Theme

**Design reference analysis (amankumar.ai)**

The reference site (https://amankumar.ai) establishes the visual standard this portfolio applies to Leon's content. Key observations:

- **Color:** Light neutral background, near-black body text, no vibrant accent colors. The palette is intentionally understated — nothing competes with the content. Platform-specific colors appear only on social icons and nowhere else on the page.
- **Typography:** A single sans-serif family throughout, with a clear size hierarchy: a large hero heading, a prominent role subtitle, and smaller body text at generous line-height. Weight variation (bold heading, regular body) does the work that color would do on a more decorative site.
- **Whitespace:** Whitespace is structural, not decorative. Major sections are separated by significant vertical space so each block reads as its own unit. Within sections, consistent padding gives components room to breathe without feeling sparse.
- **Components:** Cards use simple padding and a subtle border or shadow — no gradients or heavy chrome. Navigation links are plain text, styled only on hover. The call-to-action button is the one visually prominent element on the page, reinforcing a single clear action.
- **Overall impression:** Professional and approachable. The restraint signals confidence — the work speaks rather than the wrapper. The design scales cleanly to a recruiter skimming in 10 seconds or an engineer reading a full case study.

**Application to this site**

Leon's site inherits this discipline directly:
- **Color palette (confirmed):**
  - `#f2f0ef` — off-white/cream background
  - `#898989` — medium gray (secondary text, borders, muted elements)
  - `#b2ac88` — warm tan/khaki (primary accent, CTA buttons, links, active nav state)
  - `#4b6e48` — forest green (secondary accent, status badges, hover states)
  - Near-black (e.g. `#1a1a1a`) for body text
- Clean type scale: H1 page title, H2 section headings, H3 subsections in case studies, body at ~16–18px with generous line-height.
- Whitespace as a first-class layout tool — sections breathe, cards are not crowded, the sidebar does not compete with the main content.
- No decorative flourishes: no gradients, no background textures, no animated elements beyond subtle hover states.

### Typography

- **Font:** Roboto (Google Fonts). Load via `@import` or `<link>` with `font-display: swap` for performance. Fallback: sans-serif.
- **Weights in use:** 400 (body), 500 (nav links, labels), 700 (headings). Do not load weights that are not used.
- Clear hierarchy: H1 for page title, H2 for section headings, H3 for subsections within case studies, body text at ~16–18px.
- No em dashes anywhere in site copy. Use hyphens or sentence rewrites instead.

### Responsiveness

Mobile-first. Sidebar behavior at small breakpoints:
- Collapses into a top bar or hamburger menu on mobile.
- Connect block accessible from the collapsed menu or relocated to footer on mobile.

### Accessibility

- Semantic HTML throughout (nav, main, section, article, aside, footer).
- Sufficient color contrast on all text (WCAG AA minimum; AAA preferred for body text).
- All images have meaningful alt text (or alt="" for purely decorative images).
- Keyboard navigability: all interactive elements reachable and operable by keyboard.
- Visible focus states on links and buttons.
- This doubles as demonstrable evidence for the accessibility skills listed on Leon's resume.

### Performance

- Fast initial load: aim for a Lighthouse performance score above 90.
- Optimized images (next/image or equivalent, WebP format, lazy-loaded below the fold).
- Minimal blocking scripts; defer or async non-critical JS.
- No heavyweight third-party widgets that block render.

### Dark Mode

Dark mode is a production feature. Implement a light/dark theme toggle using Tailwind CSS `dark:` variant with a class-based strategy (`class="dark"` on `<html>`). Default to the system preference via `prefers-color-scheme`; persist overrides in `localStorage`. The toggle should be reachable from the sidebar on desktop and from the mobile top bar or hamburger menu on small screens.

### Tone

Humanized and professional. First-person voice consistent with the copy in site-copy.md. No em dashes. Concise, concrete sentences.

---

## 3. Information Architecture

### Sidebar Navigation (ordered)

| Position | Label      | Route           |
|----------|------------|-----------------|
| 1        | Home       | /               |
| 2        | Projects   | /projects       |
| 3        | Experience | /experience     |
| 4        | About      | /about          |
| 5        | Skills     | /skills         |
| 6        | Contact    | /contact        |

"Tools" from the reference site is renamed to "Skills". "Blogs" is removed entirely.

### Connect Block (sidebar, present on every page)

Displayed below the nav in the sidebar. Three links in this order:
1. **LinkedIn** (primary) — https://www.linkedin.com/in/leon-wu-tsan-yu/
2. **GitHub** — https://github.com/LeonWu813
3. **Email** — leon.wu.tsan.yu@gmail.com

X/Twitter and other social links are out of scope unless Leon later requests them.

### Footer

Single line: "Made by Leon · {current year}"

Rendered in the page layout below the main content area on every page.

---

## 4. Page Requirements

### 4.1 Home

**Route:** /

**Purpose:** A single, short hero screen that orients the visitor immediately. No featured blog card. No long scroll.

**Content (exact copy from site-copy.md):**

| Element | Copy |
|---|---|
| Greeting headline (H1) | Hey, I'm Leon |
| Title / role (H2 or subtitle) | Full-Stack Engineer |
| Primary CTA button | Connect me on LinkedIn |

**Bio (body text, verbatim from site-copy.md):**

> I'm a full-stack engineer and CS master's student at Northeastern. I build production systems by hand, from the database schema to the cloud deployment, and I design multi-agent systems that plan, implement, and ship software end to end. What I care about most is the engineering that makes software hold up in the real world, not just in a demo.

**Current status line (verbatim from site-copy.md):**

> Currently pursuing my MS in Computer Science at Northeastern and looking for a Summer 2026 software engineering internship across full-stack, frontend, or backend roles.

**Secondary CTA:** "Reach out" — links to /contact

**Layout notes:**
- Hero content is visible without scrolling on a standard laptop viewport.
- Primary CTA links to https://www.linkedin.com/in/leon-wu-tsan-yu/
- No headshot on home page.

---

### 4.2 Projects (Grid)

**Route:** /projects

**Purpose:** Show all three projects at a glance. Recruiters should be able to see the project name, the strongest fact, and the tech stack without clicking through.

**Page heading:** Projects

**Intro line (verbatim from site-copy.md):** Things I have designed, built, and shipped

**Project cards — fixed order:**

Each card contains: name, tagline, description, tags, status badge, action links.

---

**Card 1: Marketing Analytics Platform**

- **Name:** Marketing Analytics Platform
- **Tagline:** Adopted in production, cut recurring analytics work by ~60%
- **Description:** A full-stack platform for tracking user behavior, managing campaigns, and auditing SEO across multiple websites. Designed, built, and deployed end to end on a multi-AZ AWS setup.
- **Tags:** Full-Stack · Java/Spring Boot · React · AWS
- **Status:** Active
- **Links:**
  - Live demo: https://www.siteplusplus.space
  - GitHub: https://github.com/LeonWu813/marketing-analytics
- **Routes to:** /projects/marketing-analytics

---

**Card 2: Multi-Agent Software Development System**

- **Name:** Multi-Agent Software Development System
- **Tagline:** Six AI agents that plan, build, and ship full-stack software
- **Description:** A development team of specialized Claude Code agents that coordinate through files and version control, with a human approving every handoff. It shipped a deployed full-stack app end to end.
- **Tags:** AI Agents · Systems Design · Claude Code
- **Status:** Active
- **Links:**
  - GitHub: https://github.com/LeonWu813/multi-agent-software-development-system
  - Built by the system: https://tab-vault.com
- **Routes to:** /projects/multi-agent-system

---

**Card 3: TabVault**

- **Name:** TabVault
- **Tagline:** A live full-stack PWA, built by my multi-agent system
- **Description:** A production tab manager spanning a Chrome extension, a React PWA, and a Spring Boot backend with an AI content-analysis pipeline. I produced it by running my agent system and reviewing every step.
- **Tags:** Full-Stack · PWA · AI · AWS
- **Status:** Active
- **Links:**
  - Live: https://tab-vault.com
  - GitHub: https://github.com/LeonWu813/tab-management
- **Routes to:** /projects/tabvault

---

**Layout notes:**
- Responsive grid: 1 column on mobile, 2–3 columns on tablet/desktop.
- Cards should be visually equivalent in weight — no "featured" card that visually dominates.
- Tags render as small chip/badge elements.
- Status renders as a small "Active" badge (green dot or similar).

---

### 4.3 Project Detail: Marketing Analytics Platform

**Route:** /projects/marketing-analytics

**Source file:** `asset/content/case-study-marketing-analytics.md` — case study is fully written and ready.

**Header area (above the case study body):**

| Element | Value |
|---|---|
| Project name (H1) | Marketing Analytics Platform |
| Tagline | Adopted in production, cut recurring analytics work by ~60% |
| Stack chips | Java 21 / Spring Boot · React / TypeScript · Redux Toolkit · PostgreSQL · Redis · Docker · GitHub Actions · AWS (EC2, ALB, RDS, ElastiCache, S3, CloudFront) |
| Live demo link | https://www.siteplusplus.space |
| GitHub link | https://github.com/LeonWu813/marketing-analytics |

**Case study body:** Render verbatim from `asset/content/case-study-marketing-analytics.md`. Sections: The problem, My role, Approach and key decisions, Impact, What I learned.

**Optional assets for this page:** Screenshots of the dashboard UI or a short demo clip. [ASSET NEEDED: optional screenshot(s) or demo clip]

---

### 4.4 Project Detail: Multi-Agent Software Development System

**Route:** /projects/multi-agent-system

**Source file:** `asset/content/case-study-multi-agent-system.md` — case study is fully written and ready.

**Header area:**

| Element | Value |
|---|---|
| Project name (H1) | Multi-Agent Software Development System |
| Tagline | Six AI agents that plan, build, and ship full-stack software |
| Stack chips | Claude Code (subagents, skills, hooks) · Bash · Git |
| GitHub (system repo) | https://github.com/LeonWu813/multi-agent-software-development-system |
| GitHub (TabVault repo) | https://github.com/LeonWu813/tab-management |
| "Built by the system" link | https://tab-vault.com |

**Case study body:** Render verbatim from `asset/content/case-study-multi-agent-system.md`. Sections: The problem, My role, Approach and key decisions, Impact, What I learned.

**Optional assets for this page:** A diagram of the six-agent architecture or a short screen recording of the system in use. [ASSET NEEDED: optional diagram or demo clip]

---

### 4.5 Project Detail: TabVault

**Route:** /projects/tabvault

**Source file:** `asset/content/case-study-tabvault.md` — case study is fully written and ready.

**Header area:**

| Element | Value |
|---|---|
| Project name (H1) | TabVault |
| Tagline | A live full-stack PWA, built by my multi-agent system |
| Stack chips | Java 21 / Spring Boot · React / TypeScript PWA · Chrome Extension (MV3) · PostgreSQL · Redis · Quartz · Claude API · AWS ECS Fargate |
| Live link | https://tab-vault.com |
| GitHub link | https://github.com/LeonWu813/tab-management |

**Case study body:** Render verbatim from `asset/content/case-study-tabvault.md`. Sections: The problem, My role, Approach and key decisions, Impact, What I learned.

**Optional assets for this page:** Screenshots of the PWA dashboard, the Chrome extension popup, or a short demo clip. [ASSET NEEDED: optional screenshot(s) or demo clip]

---

### 4.6 Experience

**Route:** /experience

**Purpose:** Reverse-chronological list of professional roles. Each entry emphasizes engineering substance first, with outcomes as supporting evidence. Education can appear here or on About (default: include here).

**Page heading:** Experience

**Entries (reverse-chronological order):**

---

**Role 1: Front-End Developer**
- Company: Exascend
- Location: Taipei, Taiwan
- Dates: Sep 2023 – Jun 2025
- Bullets:
  - Designed and implemented a custom JavaScript event-tracking system posting structured user interactions to CRM and GA4 APIs, automating cross-platform data capture and cutting manual reporting by 70%.
  - Led end-to-end development of two customer-facing websites from scratch (HTML, CSS, JavaScript), growing monthly active users by 350% and increasing average session engagement time by 22.3%.
  - Ran technical SEO and accessibility audits (Google Search Console, Lighthouse, WCAG) validated via A/B testing, driving a 48.84% increase in page views while ensuring inclusive, accessible experiences.

---

**Role 2: Growth Marketer / Marketing Project Manager**
- Company: GoFreight
- Location: Taipei, Taiwan
- Dates: Jul 2021 – Mar 2023
- Bullets:
  - Planned and executed conversion rate optimization experiments, growing conversion from 0.38% to 2.55%, and improved technical SEO by raising Lighthouse score from 20 to 70.
  - Managed Google Ads campaigns to cut cost per demo from $5,000 to below $2,000, and expanded into the China market via Baidu Ads, generating $3,150 in inbound pipeline.
  - Planned and executed an SEO migration strategy that held the primary keyword to a one-rank drop, and organized the JCTrans GFFC 12th event achieving a $16,500 target pipeline.

---

**Education (can appear on this page or on About):**

| Degree | Institution | GPA | Expected / Completed | Location |
|---|---|---|---|---|
| MS in Computer Science | Northeastern University | 3.9 / 4.0 | Expected Dec 2027 | Seattle, WA |
| BA in International Business | National Chengchi University | 3.5 / 4.0 | Completed | Taipei, Taiwan |

---

### 4.7 About

**Route:** /about

**Purpose:** A short, human narrative plus a photo. Tells Leon's pivot story and frames it as a differentiator.

**Page heading:** About

**Photo:** None (not included).

**Main paragraph (verbatim from site-copy.md):**

> My path into engineering did not start in a computer science classroom. I studied International Business in Taipei and spent the early part of my career on the product and marketing side, where I taught myself to code so I could build the things I was responsible for shipping. That habit grew into building full-stack products that real companies and real users came to depend on. I am now pursuing my MS in Computer Science at Northeastern to strengthen the fundamentals beneath the work I had already been doing.

**Second paragraph (verbatim from site-copy.md):**

> The pivot is the point. I learned to engineer by shipping software that people actually use, and I bring that same bias toward real, working results to everything I build, whether that is a production analytics platform or a system of AI agents that ships software on its own.

**Education block (from site-copy.md — include here if not shown on Experience):**

- Northeastern University, MS in Computer Science, GPA 3.9 / 4.0, expected Dec 2027, Seattle, WA
- National Chengchi University, BA in International Business, GPA 3.5 / 4.0, Taipei, Taiwan

---

### 4.8 Skills

**Route:** /skills

**Purpose:** Technical skills listed by category, scannable at a glance. Renamed from "Tools" (as on the reference site) to "Skills".

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

**Display notes:**
- Each category rendered as a labeled group with chip/badge elements per skill.
- Do not pad with tools touched only once. List represents genuine working familiarity.

---

### 4.9 Contact

**Route:** /contact

**Purpose:** Make contact effortless. Show a real email address, social links, and a one-click resume download.

**Page heading:** Contact

**Intro line:** Looking for a Summer 2026 internship in full-stack, frontend, or backend engineering. If you're working on something interesting, I'd love to hear about it.

**Contact methods (all three required):**

| Method | Display | Action |
|---|---|---|
| Email | leon.wu.tsan.yu@gmail.com | mailto: link |
| LinkedIn | linkedin.com/in/leon-wu-tsan-yu | https://www.linkedin.com/in/leon-wu-tsan-yu/ |
| GitHub | github.com/LeonWu813 | https://github.com/LeonWu813 |

**Resume download:**
- Label: "Download resume" or "Resume (PDF)"
- Action: download or open the hosted resume PDF
- File: `asset/Leon_cv.pdf` — copy to `public/Leon_cv.pdf` at build time

**Note:** Showing a real email address (not only a contact form) is required. Forms can break silently; a visible email address always works.

---

## 5. Content Model

Project data must be structured so new projects can be added without touching layout or component code.

### Project Record (TypeScript interface)

```typescript
interface Project {
  id: string;                  // URL slug, e.g. "marketing-analytics"
  name: string;                // Display name
  tagline: string;             // One-line, leads with strongest fact
  description: string;         // 1-2 sentence card description
  tags: string[];              // Chip labels, e.g. ["Full-Stack", "Java/Spring Boot"]
  status: "Active" | "Archived" | "In Progress";
  liveUrl: string | null;      // Primary live demo or product URL
  repoUrl: string;             // Primary GitHub repo URL
  extraLinks?: {               // Additional named links (e.g., second repo, related project)
    label: string;
    url: string;
  }[];
  detailSlug: string;          // Maps to /projects/[slug]
  caseStudyFile: string;       // Path to source markdown, for reference
  images?: string[];           // Optional array of image paths/URLs
}
```

### Project Records (source of truth for the grid and detail pages)

**Record 1:**
```
id: "marketing-analytics"
name: "Marketing Analytics Platform"
tagline: "Adopted in production, cut recurring analytics work by ~60%"
description: "A full-stack platform for tracking user behavior, managing campaigns, and auditing SEO across multiple websites. Designed, built, and deployed end to end on a multi-AZ AWS setup."
tags: ["Full-Stack", "Java/Spring Boot", "React", "AWS"]
status: "Active"
liveUrl: "https://www.siteplusplus.space"
repoUrl: "https://github.com/LeonWu813/marketing-analytics"
detailSlug: "marketing-analytics"
caseStudyFile: "asset/content/case-study-marketing-analytics.md"
```

**Record 2:**
```
id: "multi-agent-system"
name: "Multi-Agent Software Development System"
tagline: "Six AI agents that plan, build, and ship full-stack software"
description: "A development team of specialized Claude Code agents that coordinate through files and version control, with a human approving every handoff. It shipped a deployed full-stack app end to end."
tags: ["AI Agents", "Systems Design", "Claude Code"]
status: "Active"
liveUrl: null
repoUrl: "https://github.com/LeonWu813/multi-agent-software-development-system"
extraLinks: [
  { label: "Built by the system", url: "https://tab-vault.com" },
  { label: "TabVault repo", url: "https://github.com/LeonWu813/tab-management" }
]
detailSlug: "multi-agent-system"
caseStudyFile: "asset/content/case-study-multi-agent-system.md"
```

**Record 3:**
```
id: "tabvault"
name: "TabVault"
tagline: "A live full-stack PWA, built by my multi-agent system"
description: "A production tab manager spanning a Chrome extension, a React PWA, and a Spring Boot backend with an AI content-analysis pipeline. I produced it by running my agent system and reviewing every step."
tags: ["Full-Stack", "PWA", "AI", "AWS"]
status: "Active"
liveUrl: "https://tab-vault.com"
repoUrl: "https://github.com/LeonWu813/tab-management"
detailSlug: "tabvault"
caseStudyFile: "asset/content/case-study-tabvault.md"
```

### Experience Record

```typescript
interface ExperienceEntry {
  title: string;
  company: string;
  location: string;
  startDate: string;    // "MMM YYYY" format
  endDate: string;      // "MMM YYYY" or "Present"
  bullets: string[];    // 2-3 items, engineering-first framing
}
```

### Education Record

```typescript
interface EducationEntry {
  degree: string;
  institution: string;
  gpa: string;
  period: string;       // e.g., "Expected Dec 2027" or "Graduated Jun 2019"
  location: string;
}
```

---

## 6. Functional and Technical Requirements

### Stack

- **Framework:** Next.js (App Router preferred for file-based routing and built-in SEO metadata API)
- **Styling:** Tailwind CSS
- **Component library:** shadcn/ui (optional but consistent with reference aesthetic)
- **Language:** TypeScript throughout

### Routing

All routes are static or statically generated at build time (no server-side rendering required — all content is known at build time).

| Route | Page |
|---|---|
| / | Home |
| /projects | Projects grid |
| /projects/marketing-analytics | Marketing Analytics detail |
| /projects/multi-agent-system | Multi-Agent System detail |
| /projects/tabvault | TabVault detail |
| /experience | Experience |
| /about | About |
| /skills | Skills |
| /contact | Contact |

### SEO and Open Graph

Every page must include:
- `<title>`: page-specific title in format "{Page Name} — Leon Wu" (e.g., "Projects — Leon Wu")
- `<meta name="description">`: page-specific one-line description
- Open Graph tags: `og:title`, `og:description`, `og:image`, `og:url`, `og:type`
- Twitter card tags: `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`
- Social preview image [ASSET NEEDED: OG image, recommended 1200x630px]
- Canonical URL tag on every page

### Analytics

Optional. Leon is familiar with GA4. If added, load the GA4 script asynchronously and defer it so it does not block render. Respect Do Not Track signals if feasible.

### Resume Hosting

The resume PDF must be hosted as a static asset in `/public` and served at a stable URL (`/Leon_cv.pdf`). Link from the Contact page as a download. Optionally also link from the sidebar or home page CTA area.

**File:** `asset/Leon_cv.pdf` — copy to `public/Leon_cv.pdf` before deploying.

### Deployment

- **Host:** Vercel. The site is a static Next.js export with no backend, making Vercel the right fit: zero-config deploys, automatic HTTPS, and a global CDN with no infrastructure to manage.
- **Deploy:** Connect the GitHub repo to Vercel. Every push to `main` triggers an automatic production deploy. Preview deployments are created automatically for pull requests.
- **Domain:** Custom domain [ASSET NEEDED: preferred domain name]. Configure via Vercel's domain settings after registering the domain.
- All live demo links (tab-vault.com, siteplusplus.space) must remain working at all times — a broken link reads as abandoned work.

### Repository Maintenance (pre-launch checklist)

Before the site is published and recruiter links go live, the GitHub repos linked from the portfolio must be polished:
- Remove all placeholder comments from READMEs
- Fill any empty sections (e.g., License)
- Ensure each repo has a useful description and topic tags on GitHub

---

## 7. Assets Needed

### Confirmed (ready to use)

| Asset | Location / Value |
|---|---|
| Accent color palette | `#f2f0ef` bg · `#b2ac88` primary accent · `#4b6e48` secondary accent · `#898989` muted |
| Sidebar wordmark | "Leon" |
| Favicon | `asset/favicon_io/` (favicon.ico, 16×16, 32×32, apple-touch-icon, webmanifest) |
| Resume PDF | `asset/Leon_cv.pdf` → copy to `public/Leon_cv.pdf` |
| LinkedIn URL | https://www.linkedin.com/in/leon-wu-tsan-yu/ |
| GitHub URL | https://github.com/LeonWu813 |
| Public email | leon.wu.tsan.yu@gmail.com |
| Case study content | `asset/content/case-study-*.md` |
| Site copy | `asset/content/site-copy.md` |
| Experience content | `asset/content/experience.md` |

### Still needed — blocking

| Asset | Used On | Notes |
|---|---|---|
| Preferred domain name | Deployment, canonical URLs, OG tags | To be provided at deployment time; configure in Vercel |

### Still needed — non-blocking

| Asset | Used On | Notes |
|---|---|---|
| Social preview image (OG image) | All pages (og:image) | 1200x630px; affects link previews only |
| Screenshot(s) of Marketing Analytics dashboard | /projects/marketing-analytics | To be provided later |
| Diagram or demo clip of multi-agent system | /projects/multi-agent-system | To be provided later |
| Screenshot(s) of TabVault PWA / Chrome extension | /projects/tabvault | To be provided later |

---

## 8. Out of Scope

The following are explicitly not part of this build.

- **Blog or blog infrastructure:** No blog section, no Blogs nav item, no MDX/CMS setup for posts.
- **Contact form:** Contact page shows a real email address and links only. Forms can break silently; a visible address always works.
- **Internationalization (i18n):** English only.
