# Product Requirements Document: Leon's Portfolio Website

**Revision:** 1.0
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

### Design Reference

The site is modeled structurally and aesthetically on https://amankumar.ai: content-first layout, slim left sidebar for navigation, light minimal theme with generous whitespace. It is not a clone of that site; it applies the same visual discipline to Leon's content.

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
- Logo or initials mark (e.g., "L" or "LW").
- Primary navigation links.
- "Connect" block with social/contact links.

Main content area to the right of the sidebar: single column, comfortable line length (~65–75 characters), generous top and bottom padding between sections.

### Theme

- Light, minimal, high whitespace.
- One restrained accent color (specific value TBD by Leon; default to a neutral such as slate or indigo if no preference is provided).
- Clean type scale: large heading, medium subheading, normal body, small caption/tag.

### Typography

- Choose a legible sans-serif (e.g., Inter, Geist, or system-ui stack).
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
1. **LinkedIn** (primary) — link to Leon's LinkedIn profile URL [ASSET NEEDED: LinkedIn URL]
2. **GitHub** — link to Leon's GitHub profile URL [ASSET NEEDED: GitHub profile URL]
3. **Email** — mailto: link to Leon's public email address [ASSET NEEDED: public email]

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
- Primary CTA links to Leon's LinkedIn profile URL [ASSET NEEDED: LinkedIn URL].
- Optionally place a headshot beside or below the bio [ASSET NEEDED: headshot/photo].

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

**Source file:** `content/case-study-marketing-analytics.md` — case study is fully written and ready.

**Header area (above the case study body):**

| Element | Value |
|---|---|
| Project name (H1) | Marketing Analytics Platform |
| Tagline | Adopted in production, cut recurring analytics work by ~60% |
| Stack chips | Java 21 / Spring Boot · React / TypeScript · Redux Toolkit · PostgreSQL · Redis · Docker · GitHub Actions · AWS (EC2, ALB, RDS, ElastiCache, S3, CloudFront) |
| Live demo link | https://www.siteplusplus.space |
| GitHub link | https://github.com/LeonWu813/marketing-analytics |

**Case study body (render verbatim, section by section):**

**The problem**

A small company I worked with was spending hours every week pulling together the same marketing numbers by hand: page views, campaign performance, and the periodic SEO checkup. The data lived in several disconnected places, so every report meant repeating the same manual gathering. I set out to replace that routine with a single platform a site owner could install once and then rely on, covering behavior tracking, campaign management, and automated SEO auditing in one place.

I designed, built, and deployed the whole thing myself, from the database schema to the production AWS infrastructure.

**My role**

Sole engineer across the entire stack. I built the Spring Boot backend, the React and TypeScript front end, the JavaScript tracking snippet that customers paste into their sites, and the full AWS deployment with a continuous-delivery pipeline. Every design decision below was mine to make and to own.

**Approach and key decisions**

The platform ingests events from a lightweight tracking snippet, enriches and stores them, and surfaces everything through an analytics dashboard, alongside a campaign manager and an SEO auditor. Several decisions shaped how it holds up under real use.

*Securing an endpoint that has to be public.* The tracking snippet runs in a visitor's browser with no credentials, so the event-ingest endpoint cannot require authentication. Rather than weaken security, I moved the guarantee to the read side: anyone can write an event, but only the authenticated site owner can ever read events back. To keep the open write endpoint from being abused, I added per-IP rate limiting so an attacker can be throttled but never mine the data. This separation of a public write path from a strictly private read path is the heart of the design.

*Rate limiting that stays correct across multiple servers.* The platform runs on two EC2 instances behind a load balancer. An in-memory request counter on each instance would have effectively doubled the real limit, since an attacker could alternate between them. I kept the counter in Redis instead, giving all instances a single shared source of truth so the limit holds no matter which server answers a given request. Reasoning about state across a distributed deployment, rather than a single box, was what made this work.

*Stateless auth that made scaling free.* I chose JWTs over server-side sessions so any instance can validate a request on its own. The payoff was concrete: adding the second EC2 instance behind the load balancer required zero code changes, because there was no shared session store to coordinate. A design decision made early paid off directly when it was time to scale.

*Resilience and resourcefulness in the deployment.* The two instances sit in different availability zones, so if one zone fails the load balancer sends all traffic to the survivor automatically. The instances themselves only accept traffic from the load balancer's security group, so rate limiting and other protections cannot be bypassed by hitting a server directly. Running on small t3.micro instances also forced careful JVM memory tuning, constraining the heap and thread pools to fit comfortably alongside Docker, which taught me a lot about getting real work out of limited hardware.

*State that survives a restart.* The automated follow-up audits, which re-run an SEO check a week later and email the owner a comparison, store their pending work as fields in the database rather than in server memory. A scheduled job picks up whatever is due. Because the intent lives in PostgreSQL, a server restart never loses a follow-up.

**Impact**

The platform was adopted in production by a real company and cut their recurring analytics work by roughly 60 percent, replacing hours of weekly manual reporting with a system that gathers, enriches, and visualizes the data on its own. It runs on a multi-AZ AWS deployment with a GitHub Actions pipeline that tests every change against a live PostgreSQL container, then builds and ships Docker images that redeploy automatically without any manual server access.

**What I learned**

Building and operating this alone taught me that the interesting problems live where the textbook stops. The clean answer says authenticate every endpoint, but a tracking snippet cannot carry a credential, so I had to find a different place to put the security guarantee. The clean answer says rate-limit requests, but the moment there are two servers, a naive counter is wrong. Working through those gaps end to end, and then keeping the result running in front of a real customer, is where I learned the most about building software that has to survive contact with the real world.

**Optional assets for this page:** Screenshots of the dashboard UI or a short demo clip. [ASSET NEEDED: optional screenshot(s) or demo clip]

---

### 4.4 Project Detail: Multi-Agent Software Development System

**Route:** /projects/multi-agent-system

**Source file:** `content/case-study-multi-agent-system.md` — case study is fully written and ready.

**Header area:**

| Element | Value |
|---|---|
| Project name (H1) | Multi-Agent Software Development System |
| Tagline | Six AI agents that plan, build, and ship full-stack software |
| Stack chips | Claude Code (subagents, skills, hooks) · Bash · Git |
| GitHub (system repo) | https://github.com/LeonWu813/multi-agent-software-development-system |
| GitHub (TabVault repo) | https://github.com/LeonWu813/tab-management |
| "Built by the system" link | https://tab-vault.com |

**Case study body (render verbatim, section by section):**

**The problem**

After shipping a full-stack analytics platform end to end on my own, I kept running into the same limitation: a single AI coding agent tends to lose the plot on a real project. Context drifts over a long session, earlier decisions get quietly overwritten, and there is no clean way to review or undo a bad step. I wanted to understand whether the answer was a better prompt or a better system.

I decided it was the system. So I built one: a development team made up of specialized agents, each with a single job, coordinating the way real engineers do through documents, reviews, and version control, with a human in control at every step.

**My role**

I was the sole architect and builder. I designed the agent roles, the information boundaries between them, the skill layer, and the git-backed handoff mechanism. I treated the design itself as the deliverable. I drafted the full architecture up front in ARCHITECTURE.md, then hardened it by running real projects through the system and fixing whatever broke along the way.

**Approach and key decisions**

I started from the idea of an agent harness, the belief that the engineering around the model matters more than any single prompt. Four design decisions did most of the work.

*Single responsibility, enforced by information boundaries.* Rather than one agent that does everything, there are six: PM, Doc-Sync, Tech Lead, Engineer, QA, and Retrospective. Each has one input, one output, and one handoff rule. More importantly, each agent can only read and write the files its role actually needs. The Engineer, for instance, never sees the product requirements document; it sees only its own module spec. I encoded these permissions as an explicit write-access matrix, so a mistake in one agent stays contained instead of corrupting the whole project.

There was a clear trade-off here. Strict boundaries mean information has to be carried forward deliberately. A dedicated Doc-Sync agent translates the requirements document into per-module specs, rather than letting every agent reach for whatever it wants. That adds moving parts, but it is also what keeps each agent small enough to constrain and reason about.

*Coordination through files, not shared memory.* Every agent runs as a fully independent claude --agent session with no shared context. They communicate the way a real team does, by writing to disk: a requirements document as the single source of truth, downstream module specs, and a machine-readable status.md that records the last action taken. This makes the whole workflow inspectable, with no hidden state.

*A human in the loop at every handoff.* A Stop hook reads the last action from status.md and prints the exact next command to run, such as claude --agent qa-mod-auth. It never runs that command automatically. The person reviews each step and decides whether to proceed. The system proposes; the human approves.

*Git as a rollback safety net.* Every agent commits its work before stopping, so every handoff becomes an atomic, revertible point. Paired with a progressive-disclosure skill layer, where lean router files load detailed workflows only when an agent needs them, this keeps each agent's context efficient while keeping every change reviewable and reversible.

One decision I am especially glad I made: Doc-Sync generates the Engineer and QA agents for each module at sync time, hard-coding into every generated agent exactly which spec and dependencies it is allowed to read. The system writes part of itself, with least-privilege access built in from the start.

I also chose to build honesty into QA rather than pretend that CLI tests are always enough. Backend modules do not pass on code inspection alone; QA has to start a real server, hit live endpoints, and check the actual database state. And because a React interface genuinely cannot be verified from the command line, the frontend QA agent stops and produces a written test script for a human instead of falsely reporting a pass. Designing around the limits of automated verification was part of the point.

**Impact**

The system designed, implemented, and QA'd TabVault, a deployed full-stack tab and notes manager that is live in production. The agents built it while I reviewed and approved each handoff. The result is a development workflow where failures stay contained to a single module instead of cascading, every step is reviewable and any step is cleanly reversible through git, and the entire process is transparent because coordination happens in plain files rather than hidden state.

**What I learned**

The hard part of a multi-agent system is not the code the agents write. It is the system that makes them produce correct software reliably. Most of my iterations went into tightening information boundaries and handoff rules, not into prompting. I also learned to design for the limits of automated verification rather than around them. The most trustworthy part of the system turned out to be the place where it admits a machine cannot check something and asks a person instead.

If I extended the project, I would add automated metrics on handoff success rates and time to ship across projects, so that improvements to the harness could be measured rather than judged by feel.

**Optional assets for this page:** A diagram of the six-agent architecture or a short screen recording of the system in use. [ASSET NEEDED: optional diagram or demo clip]

---

### 4.5 Project Detail: TabVault

**Route:** /projects/tabvault

**Source file:** `content/case-study-tabvault.md` — case study is fully written and ready.

**Header area:**

| Element | Value |
|---|---|
| Project name (H1) | TabVault |
| Tagline | A live full-stack PWA, built by my multi-agent system |
| Stack chips | Java 21 / Spring Boot · React / TypeScript PWA · Chrome Extension (MV3) · PostgreSQL · Redis · Quartz · Claude API · AWS ECS Fargate |
| Live link | https://tab-vault.com |
| GitHub link | https://github.com/LeonWu813/tab-management |

**Case study body (render verbatim, section by section):**

**The problem**

I needed a real, non-trivial product to prove that my multi-agent development system could do more than scaffold a toy app. A throwaway CRUD demo would not have tested anything. So I set the bar high: a genuine full-stack product with three separate clients, asynchronous background jobs, an external AI integration, push notifications, and a real cloud deployment. If the system could ship that, with me reviewing each handoff rather than writing the code myself, it would be a credible result.

TabVault is that product. It lets people save, organize, and revisit browser tabs across devices, and it is live in production.

**My role**

I was the orchestrator and the technical reviewer. The implementation came from my multi-agent system, but I directed the work and approved every design decision and handoff before it moved forward. That meant reading and signing off on the architecture, catching problems at each gate, and making the judgment calls that the design records below. I understand every one of these decisions because approving them was my job. Building the product this way was also the real test of the system that produced it.

**Approach and key decisions**

The product is split into three clients that share one Spring Boot backend: a Chrome extension built on Manifest V3 for one-click saving, a React PWA dashboard for managing saved items, and a backend that handles auth, storage, scheduling, and AI analysis. A handful of decisions stand out.

*Scheduled jobs that survive ephemeral infrastructure.* Reminders and auto-cleanup run on Quartz, but Quartz defaults to an in-memory job store that loses every scheduled job when a container restarts. Since the app runs on ECS Fargate, where tasks are ephemeral by design, that default would have quietly dropped reminders on every redeploy. The fix was to back Quartz with a JDBC job store in PostgreSQL so triggers persist across restarts. This is the kind of decision that only shows up once you take deployment seriously.

*Refresh-token rotation for sessions that are both safe and long-lived.* Access tokens expire after fifteen minutes, and every refresh call issues a brand-new refresh token on a sliding seven-day window. Because each refresh token is single-use, a stolen one becomes useless almost immediately, while genuine active users stay logged in indefinitely. The trade-off is that the client has to store and send the new token on every cycle, which adds a little complexity on the front end in exchange for a meaningfully stronger security posture.

*An asynchronous AI pipeline that never blocks the user.* When someone saves an item, a background job fetches the page content, using the right tool for each source, then calls the Claude API to write a plain-English summary, suggest a category, and detect any time-sensitive deadlines. All of this happens asynchronously and writes back to the item when it is ready, so the save feels instant and the analysis simply appears on the dashboard a moment later.

*A deployment gotcha worth remembering.* Apple Silicon Macs build ARM images by default, but ECS Fargate runs on x86. A normal Docker build passed every local check and then failed silently at runtime on ECS. Pinning every build to linux/amd64 solved it. I am including this because the most useful engineering lessons are often the ones that only surface in a real deployment, not in a tutorial.

**Impact**

TabVault is deployed and running in production on AWS, served through CloudFront and an Application Load Balancer in front of containers on ECS Fargate, backed by RDS PostgreSQL and ElastiCache Redis. It is a complete product: save tabs from the extension or share sheet, get AI-generated summaries and categories, receive push reminders for detected deadlines, and browse everything offline through the PWA.

Just as importantly, it is the proof that my multi-agent system works. A real, multi-client, cloud-deployed application came out the other end of that workflow, with a human reviewing every handoff, which is exactly what the system was designed to make possible.

**What I learned**

Operating the system to build something this size taught me where the real difficulty in production software lives, and it is rarely in the happy path. It is in the restart that drops your scheduled jobs, the token that should expire faster, and the image that builds fine and runs nowhere. Reviewing each of those decisions sharpened my judgment about what "done" actually means for a deployed system. It also gave me a clear, honest answer to the question every reviewer asks about an AI-built project: yes, I understand all of it, because understanding it was the part I owned.

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
- Location: [ASSET NEEDED: city/remote]
- Dates: [ASSET NEEDED: start date] -- [ASSET NEEDED: end date or "Present"]
- Bullets: [ASSET NEEDED: 2--3 bullet points framed around engineering substance with outcomes]

---

**Role 2: Marketing Project Manager**
- Company: GoFreight
- Location: [ASSET NEEDED: city/remote]
- Dates: [ASSET NEEDED: start date] -- [ASSET NEEDED: end date]
- Bullets: [ASSET NEEDED: 2--3 bullet points framed around engineering substance with outcomes]

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

**Photo:** [ASSET NEEDED: professional headshot or photo]

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
| Email | [ASSET NEEDED: public email address] | mailto: link |
| LinkedIn | [ASSET NEEDED: display text, e.g., linkedin.com/in/...] | External link |
| GitHub | [ASSET NEEDED: display text, e.g., github.com/LeonWu813] | External link |

**Resume download:**
- Label: "Download resume" or "Resume (PDF)"
- Action: download or open the hosted resume PDF
- [ASSET NEEDED: final resume PDF file]

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
caseStudyFile: "content/case-study-marketing-analytics.md"
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
caseStudyFile: "content/case-study-multi-agent-system.md"
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
caseStudyFile: "content/case-study-tabvault.md"
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

The resume PDF must be hosted as a static asset (e.g., in the /public directory) and served at a stable URL (e.g., /resume.pdf). Link from the Contact page as a download. Optionally also link from the sidebar or home page CTA area.

[ASSET NEEDED: final resume PDF]

### Deployment

- Target: custom domain [ASSET NEEDED: preferred domain name]
- Preferred host: Leon's choice of AWS (reinforces AWS/Docker skills on resume), Vercel, or Netlify
  - If AWS: containerize with Docker, deploy to EC2 or ECS, serve via CloudFront + ALB
  - If Vercel or Netlify: connect the GitHub repo for automatic deploys on push to main
- All live demo links (tab-vault.com, siteplusplus.space) must remain working at all times — a broken link reads as abandoned work

### Repository Maintenance (pre-launch checklist)

Before the site is published and recruiter links go live, the GitHub repos linked from the portfolio must be polished:
- Remove all placeholder comments from READMEs
- Fill any empty sections (e.g., License)
- Ensure each repo has a useful description and topic tags on GitHub

---

## 7. Assets Needed

The following items are not yet available and must be provided by Leon before the corresponding page or feature can be finalized. All copy and case study content is ready; the gaps below are identity, links, and media.

### Identity and Visuals

| Asset | Used On | Notes |
|---|---|---|
| Professional headshot or photo | About page, optionally Home hero | Any quality; will be optimized at build time |
| Sidebar logo / initials mark | Sidebar (all pages) | "L" or "LW" or a simple logomark; can be text |
| Accent color preference | All pages (Tailwind config) | Or confirm "use a neutral minimal palette" |
| Favicon | Browser tab (all pages) | Can be derived from the initials mark |
| Social preview image (OG image) | All pages (og:image) | 1200x630px recommended |

### Links

| Asset | Used On |
|---|---|
| LinkedIn profile URL | Home CTA button, sidebar Connect block |
| GitHub profile URL | Sidebar Connect block, Contact page |
| Public email address | Sidebar Connect block, Contact page |
| Preferred domain name | Deployment, canonical URLs, OG tags |

### Files

| Asset | Used On |
|---|---|
| Final resume PDF | Contact page download, optional sidebar link |

### Experience Page Content

| Asset | Notes |
|---|---|
| Exascend role: city/remote, start date, end date | Required for Experience page |
| Exascend role: 2--3 bullet points (engineering-first framing) | Required for Experience page |
| GoFreight role: city/remote, start date, end date | Required for Experience page |
| GoFreight role: 2--3 bullet points (engineering-first framing) | Required for Experience page |

### Optional Media (Nice-to-Have, Not Blocking)

| Asset | Used On | Notes |
|---|---|---|
| Screenshot(s) of the Marketing Analytics dashboard | /projects/marketing-analytics | 1--2 images or a short clip |
| Diagram or demo clip of the multi-agent system | /projects/multi-agent-system | Architecture diagram or screen recording |
| Screenshot(s) of TabVault PWA or Chrome extension | /projects/tabvault | 1--2 images or a short clip |

### Deployment Decision

| Decision | Notes |
|---|---|
| Preferred host | AWS self-hosted vs. Vercel vs. Netlify |
| Preferred domain name | To be registered if not already owned |

---

## 8. Out of Scope

The following are explicitly not part of this build. They may be revisited as future enhancements.

- **Blog or blog infrastructure:** No blog section, no Blogs nav item, no MDX/CMS setup for posts.
- **Dark mode toggle:** Light mode only for v1. Can be added as an enhancement later.
- **X/Twitter-first connect flow:** LinkedIn is the primary connect channel. X/Twitter and other social accounts are not linked in v1.
- **Comments, newsletters, or user accounts:** No interactive back-end features.
- **Contact form:** Contact page shows a real email address and links, not a form. (Forms can break silently; a visible address always works.)
- **CMS or admin interface:** All content is managed in TypeScript data files and markdown source files in the repository.
- **Internationalization (i18n):** English only.
- **Any social platforms beyond LinkedIn, GitHub, and email:** Instagram, Medium, etc. are not included in v1.
