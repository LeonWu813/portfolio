# Interview Deck (Slideshow page)

Editor's note (not page copy): built from the interview-slides guide the user supplied on 2026-11-01, revised the same day with the user's notes. Slide-copy rules: titles state the point in about 7 words; bullets are about 6 words, 3 to 4 per slide; a content slide carries about 30 words; everything else goes in the speaker notes, which never show on screen.

Editor's note (not page copy): structure. Three "about me" slides, then a project menu. The presenter picks one project; each project starts with three big numbers, then a short intro, then role and tech stack, then the story. After a project's last slide the menu comes back, so the presenter can show another project or stop there. There is no Thank-you slide; contact links sit in the menu's footer.

```
Hi, I'm Leon → Timeline → Life in Seattle → Menu ─┬─ Multi-Agent System (8) ─┐
                 │                                ├─ ProjectDay         (8) ─┤
                 ├─ Exascend   (hidden)           ├─ SitePlus+          (8) ─┤
                 └─ GoFreight  (hidden)           └─ TabVault           (5) ─┘
                                                  Menu again (pick another) ←┘
```

Editor's note (not page copy): hidden slides. The two work-experience cards on the Timeline slide open a detail slide each (Exascend, GoFreight). These slides are never reached by Next or Previous from anywhere else; only a click (or key 1 or 2) on the Timeline card opens them. Next or Previous on a detail slide returns to the Timeline.

Editor's note (not page copy): a `project` URL parameter (`multi-agent`, `projectday`, `siteplus`, `tabvault`) pre-selects a project, so the next key press on the menu enters it.

---

## About me

### 1: Hi, I'm Leon

**Title:** Hi, I'm Leon

**Titles:**
- Full-Stack Software Engineer
- AI Systems Builder
- MSCS Candidate, Northeastern University

**Speaker notes:** I'm a CS master's student at Northeastern in Seattle. I work across the stack, Java and Spring Boot, React and TypeScript, AWS, and I build AI agent systems that ship software. Today I'll show you one project in depth.

### 2: Timeline

**Title:** From marketing to engineering

**Timeline:**
- **2017 to 2021:** Bachelor of International Business, National Chengchi University, Taipei
- **2021 to 2023:** Marketing Project Manager, GoFreight, Taipei (opens the GoFreight detail slide)
- **2023 to 2025:** Front-End Developer, Exascend, Taipei (opens the Exascend detail slide)

The two work cards are clickable but show no "Details" text or key label (user, 2026-11-01: remove the "Details" text; clicking a card opens its detail slide, otherwise Next goes to slide 3). Keys 1 and 2 still open GoFreight and Exascend as a hidden shortcut.
- **2025 to 2027:** Master of Science in Computer Science, Northeastern University, Seattle

**Speaker notes:** I taught myself to code at GoFreight so I could build the experiments I was running. At Exascend I built two customer websites from scratch and grew monthly active users 3.5x, from 12,000 to 41,350. Now I'm at Northeastern to deepen the fundamentals.

### 2a (hidden): Exascend

**Title:** Front-End Developer at Exascend

**Subtitle:** Taipei · Sep 2023 to Aug 2025

**Big numbers:**
- **70%** less manual reporting, from an event-tracking system I built
- **3.5x** monthly active users on two sites I built from scratch
- **48.8%** more page views after SEO and accessibility audits

**Speaker notes:** The tracking system posted structured user interactions to the CRM and GA4 APIs. Both websites were plain HTML, CSS and JavaScript, from requirements to launch.

### 2b (hidden): GoFreight

**Title:** Marketing Project Manager at GoFreight

**Subtitle:** Taipei · Jul 2021 to Mar 2023

**Big numbers:**
- **67%** higher conversion rate, from an A/B testing pipeline I coded
- **$16.5K** in MRR from a product launch I led

**Speaker notes:** This is where I taught myself to code: I built and maintained the front-end codebase so I could run the experiments myself, with variant logic and event tracking.

### 3: Life in Seattle

**Title:** Based in Seattle, usually on snow or a wall

**Visual:** snowboarding photo (`IMG_6875.JPG`) and bouldering photo (`4D0BDA8A-B273-40DC-BD3D-3098AF6BBB73.JPG`).

**Captions:**
- Snowboarding
- Bouldering

**Speaker notes:** Weekends in winter I'm snowboarding in the Cascades. The rest of the year I'm at a bouldering gym, which is where the idea for ProjectDay came from.

---

## Menu

### 4: Project menu

**Title:** Pick a project (the same every time; user, 2026-11-01: "No need to use "Pick another project", "Pick a project would be fine")

**Cards (click, or press 1 to 4):**
1. **Multi-Agent System:** An AI dev team with a human in charge
2. **ProjectDay:** An iOS climbing app my agents built
3. **SitePlus+:** Analytics a real company runs on
4. **TabVault:** Save a tab now, find it later

**Footer:** leon-wu.com · github.com/LeonWu813 · linkedin.com/in/leon-wu-tsan-yu · leon.wu.tsan.yu@gmail.com

**Speaker notes:** Pick the project that best matches the job description before the interview.

---

Editor's note (not page copy): storyline, revised 2026-11-01 at the user's request ("some of the slide are jumping around without a story line"). After the numbers, intro and role slides, every track follows one chain, and each title hands off to the next: the problem, "so I built" the solution, the hard part that the solution created, how I solved it, and the lesson.

## Track A: Multi-Agent Development System

### A1: Numbers

**Title:** Multi-Agent Development System

**Big numbers:**
- **3** products shipped
- **6** agents on the dev team
- **6** skills created

**Speaker notes:** The three products are TabVault, ProjectDay, and this portfolio site. The six skills are the shared rulebooks the agents read: PRD format, doc sync, coding conventions, the engineer checklist, the QA checklist, and integration review.

### A2: Intro

**Title:** An AI dev team with a human in charge

**Visual:** simplified workflow: Requirements → PM → Doc-Sync → Engineer ⇄ QA → Tech Lead → Shipped, with "Retrospective feeds improvements back into the system" under it, and a bar reading "I approve the key handoffs". The approval bar connects to the handoffs into PM, Doc-Sync and Shipped only, not Doc-Sync to Engineer or Engineer to Tech Lead. The Retrospective line is separate: it takes improvements back to the system as a whole, not into PM (user, 2026-11-01).

### A3: Role and stack

**Title:** My role and stack

**Role:** Sole architect and builder

**Stack:** Claude Code (subagents, skills, hooks) · Bash · Python · Git

### A4: Problem

**Title:** It started with one AI agent losing the plot

**Bullets:**
- Context drifts over long sessions
- Earlier decisions get overwritten
- No clean way to undo

**Speaker notes:** I hit this after building SitePlus+ on my own. The question was whether I needed a better prompt or a better system. I decided it was the system.

### A5: Solution

**Title:** So I split it into six focused agents

**Roles (two columns):**
- **PM:** writes the requirements
- **Doc-Sync:** one spec per module
- **Engineer:** builds one module
- **QA:** tests it in the running app
- **Tech Lead:** reviews the whole phase
- **Retrospective:** improves the system

**Speaker notes:** Like a real team, each role has one job, one input and one output. They coordinate through documents and git, not shared memory.

### A6: Key decision

**Title:** Each agent sees only what it needs

**Bullets:**
- Only its own spec and files
- Scope check on every change
- Every handoff is a git commit
- Cost: one extra sync step

**Speaker notes:** An Engineer never sees the full requirements. A mistake stays inside one module instead of spreading, and any step can be rolled back.

### A7: Hardest part

**Title:** Then QA passed code it never ran

**Bullets:**
- Early QA only read the code
- Fix: real server, real requests
- People check what machines can't

**Speaker notes:** UI checks a machine can't judge go to a person as a written test script. Nothing passes unless someone exercised it in the running app.

### A8: Lesson

**Title:** The system matters more than the prompt

**Bullets:**
- Most fixes: boundaries, not prompts
- Result: 3 products, every step reviewable
- For your team: clear specs, small changes, honest tests

**Speaker notes:** On ProjectDay alone: over 1,500 commits, 217 acceptance criteria, 88 integration-review items each decided by a human, and 18 improvement proposals from the first retrospective. Next I'd measure handoff success rate instead of judging by feel.

---

## Track B: ProjectDay

### B1: Numbers

**Title:** ProjectDay

**Big numbers:**
- **12** modules
- **13** gyms in greater Taipei
- **1,500+** commits

**Speaker notes:** Built with my multi-agent system and submitted to the App Store in October 2026.

### B2: Intro

**Title:** A climbing log for Taiwan's gyms

**Visual:** the ProjectDay three-screen image (Home, Gyms, Route).

**Bullets:**
- Log a climb in 4 taps
- Watch beta for that exact route
- Submitted to the App Store

**Speaker notes:** "Beta" is climbing slang for how to climb a route. The interface is Traditional Chinese because the app is Taiwan-first; it also runs in English.

### B3: Role and stack

**Title:** My role and stack

**Role:** Product owner; built with my multi-agent system

**Stack:** React Native / Expo · TypeScript · Supabase (Postgres, Auth, Edge Functions) · AWS (S3, MediaConvert, CloudFront, CDK) · EAS · GitHub Actions

### B4: Problem

**Title:** I climb, and Taiwan's gyms had no app

**Bullets:**
- Global apps target outdoor crags
- Beta videos lost on Instagram
- Local app only logs climbs

**Speaker notes:** Bouldering is my hobby, and that's where the idea came from. Indoor bouldering is growing fast in Taiwan.

### B5: Solution

**Title:** So I put logging, beta and gyms in one app

**Visual:** Route, Route-beta and Profile screenshots side by side.

**Bullets:**
- Log a send in 4 taps
- Beta videos tied to each route
- Route lists for 13 gyms

**Speaker notes:** My targets were under 30 seconds to log a send, and a beta video playable within 60 seconds of upload.

### B6: Key decision

**Title:** Beta videos needed a real video pipeline

**Visual:** flow chips: Upload → S3 → MediaConvert → CloudFront.

**Bullets:**
- iPhone HDR looked overexposed
- Supabase had no CDN
- So I moved video to AWS
- Cost: a second cloud to run

**Speaker notes:** MediaConvert makes one H.264 MP4 and maps HDR to SDR. CloudFront serves short-lived signed URLs, and the database stores only a key, never a URL.

### B7: Hardest part

**Title:** Moving the videos hid a privacy hole

**Bullets:**
- Backfill copied old videos to S3
- It trusted any path a user sent
- My audit caught it: owner-prefix check

**Speaker notes:** One user could have copied another user's private video into their own folder. I ran an independent security audit before release; it also found a permission check copied into five places and starting to drift.

### B8: Lesson

**Title:** Shipping to a real phone taught me mocks lie

**Bullets:**
- Passed Jest, broke the iOS build
- Now: native build before QA
- Next: Android, offline logging

---

## Track C: SitePlus+

### C1: Numbers

**Title:** SitePlus+

**Big numbers:**
- **~60%** less analytics work
- **3+** months in real use
- **10+** reports generated

**Speaker notes:** It runs on two servers in two availability zones.

### C2: Intro

**Title:** Analytics, campaigns and SEO in one place

**Visual:** SitePlus+ home screenshot (`siteplusplus-home.jpg`).

**Bullets:**
- Designed, built and deployed alone
- Used by a real company

### C3: Role and stack

**Title:** My role and stack

**Role:** Sole engineer, full stack and AWS

**Stack:** Java 21 / Spring Boot · Spring Security / JWT · React / TypeScript · Redux · PostgreSQL · Redis · Docker · GitHub Actions · AWS (EC2, ALB, RDS, ElastiCache, S3, CloudFront) · Cloudflare

### C4: Problem

**Title:** A company lost hours to manual reports

**Bullets:**
- Data spread across tools
- Same gathering every week
- Goal: install once, rely on it

### C5: Solution

**Title:** So I built one snippet and one dashboard

**Visual:** SitePlus+ reports screenshot (`siteplusplus-reports.jpeg`).

**Bullets:**
- Snippet captures views, clicks, forms
- Dashboard: trends, pages, channels
- SEO auditor re-checks weekly

### C6: Key decision

**Title:** But the snippet's endpoint had to be public

**Bullets:**
- Visitors have no login
- Anyone writes, only the owner reads
- 50 req/min per IP, shared in Redis

**Speaker notes:** A per-server counter would have doubled the real limit behind the load balancer. Every resource hangs off a Site owned by a User, so one ownership check protects everything.

### C7: Hardest part

**Title:** Going live behind Cloudflare broke CORS

**Bullets:**
- Preflights never reached my server
- My logs showed nothing
- Fix: a Worker answers them

**Speaker notes:** When the logs are empty, the request is dying before it reaches you. Look at every layer in front of the app.

### C8: Lesson

**Title:** Real problems start where textbooks stop

**Bullets:**
- Two servers broke a simple rate limit
- Next: sliding window, event-driven deploys
- For your team: I've owned production end to end

---

## Track D: TabVault

Editor's note (not page copy): TabVault has no numbers slide, at the user's request. It is not live; it was deployed to AWS and is offline now.

### D1: Intro

**Title:** Save a tab now, find it later

**Visual:** TabVault home screenshot (`tabvault-home.png`).

**Bullets:**
- AI summaries and reminders
- Deployed on AWS, now offline

### D2: Role and stack

**Title:** My role and stack

**Role:** Orchestrator and reviewer; built by my multi-agent system

**Stack:** Java 21 / Spring Boot · React / TypeScript PWA · Chrome Extension (MV3) · PostgreSQL · Redis · Quartz · Claude API · AWS ECS Fargate

### D3: Problem

**Title:** Open tabs pile up, then get lost

**Bullets:**
- Tabs kept "for later" slow the browser
- Closing them loses the content
- I also needed a real test for my agents

### D4: Solution

**Title:** So saving takes one click, and AI works after

**Bullets:**
- Extension saves and returns instantly
- A worker asks Claude for summary and deadlines
- Search and reminders build on that

**Speaker notes:** The save only queues a job. Content is trimmed to a token budget and repeat URLs are cached, so AI cost stays predictable.

### D5: Hardest part

**Title:** Deploying to AWS exposed cloud-only bugs

**Bullets:**
- Health check behind login: no traffic
- ARM image on x86 servers
- Each fix became a deploy checklist item

**Speaker notes:** Lesson: "done" means it survives restarts, deploys and real networks.
