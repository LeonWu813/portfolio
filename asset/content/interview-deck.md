# Interview Deck (Slideshow page)

Editor's note (not page copy): built from the interview-slides guide the user supplied on 2026-11-01, revised the same day with the user's notes. Slide-copy rules: titles state the point in about 7 words; bullets are about 6 words, 3 to 4 per slide; a content slide carries about 30 words; everything else goes in the speaker notes, which never show on screen.

Editor's note (not page copy): structure. Three "about me" slides, then a project menu. The presenter picks one project; each project starts with three big numbers, then a short intro, then role and tech stack, then the story. After a project's last slide the menu comes back, so the presenter can show another project or stop there. There is no Thank-you slide; contact links sit in the menu's footer.

```
Hi, I'm Leon → Timeline → Life in Seattle → Menu ─┬─ Multi-Agent System (7) ─┐
                                                  ├─ ProjectDay         (7) ─┤
                 ┌────────────────────────────────┼─ SitePlus+          (7) ─┤
                 └─ Menu again (pick another) ←───┴─ TabVault           (5) ─┘
```

Editor's note (not page copy): a `project` URL parameter (`multi-agent`, `projectday`, `siteplus`, `tabvault`) pre-selects a project, so the next key press on the menu enters it.

---

## About me

### 1: Hi, I'm Leon

**Title:** Hi, I'm Leon

**Visual:** headshot (`head.png`).

**Titles:**
- Full-Stack Engineer
- AI Systems Builder
- MS Computer Science, Northeastern (3.9 GPA)

**Speaker notes:** I'm a CS master's student at Northeastern in Seattle. I work across the stack, Java and Spring Boot, React and TypeScript, AWS, and I build AI agent systems that ship software. Today I'll show you one project in depth.

### 2: Timeline

**Title:** From marketing to engineering

**Timeline:**
- **2017 to 2021:** BA International Business, National Chengchi University, Taipei
- **2021 to 2023:** Growth Marketer / Marketing PM, GoFreight, Taipei
- **2023 to 2025:** Front-End Developer, Exascend, Taipei
- **2025 to 2027:** MS Computer Science, Northeastern University, Seattle

**Speaker notes:** I taught myself to code at GoFreight so I could build the experiments I was running. At Exascend I built two customer websites from scratch and grew monthly active users 350%. Now I'm at Northeastern to deepen the fundamentals.

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

**Title (first time):** Pick a project
**Title (after a project):** Pick another project

**Cards (click, or press 1 to 4):**
1. **Multi-Agent System:** An AI dev team with a human in charge
2. **ProjectDay:** An iOS climbing app my agents built
3. **SitePlus+:** Analytics a real company runs on
4. **TabVault:** Save a tab now, find it later

A project already shown in this session is marked "Shown".

**Footer:** leon-wu.com · github.com/LeonWu813 · linkedin.com/in/leon-wu-tsan-yu · leon.wu.tsan.yu@gmail.com

**Speaker notes:** Pick the project that best matches the job description before the interview.

---

## Track A: Multi-Agent Development System

### A1: Numbers

**Title:** Multi-Agent Development System

**Big numbers:**
- **3** products shipped
- **6**-agent dev team
- **6** skills created

**Speaker notes:** The three products are TabVault, ProjectDay, and this portfolio site. The six skills are the shared rulebooks the agents read: PRD format, doc sync, coding conventions, the engineer checklist, the QA checklist, and integration review.

### A2: Intro

**Title:** An AI dev team with a human in charge

**Visual:** simplified workflow: Requirements → PM → Doc-Sync → Engineer ⇄ QA → Tech Lead → Shipped, with Retrospective feeding improvements back, and a bar under it reading "I approve every handoff".

**Speaker notes:** PM writes the requirements. Doc-Sync turns them into one spec per module. An Engineer builds each module and QA tests it in the running app. The Tech Lead reviews the whole phase. Retrospective proposes improvements to the system itself.

### A3: Role and stack

**Title:** My role and stack

**Role:** Sole architect and builder

**Stack:** Claude Code (subagents, skills, hooks) · Bash · Python · Git

### A4: Problem

**Title:** One AI agent loses the plot

**Bullets:**
- Context drifts over long sessions
- Earlier decisions get overwritten
- No clean way to undo

**Speaker notes:** I hit this after building SitePlus+ on my own. The question was whether I needed a better prompt or a better system.

### A5: Key decision

**Title:** Strict boundaries over shared context

**Bullets:**
- Each agent sees only its spec
- Scope check on every change
- Every handoff is a git commit
- Cost: one extra sync step

**Speaker notes:** An Engineer never sees the full requirements. A mistake stays inside one module instead of spreading, and any step can be rolled back.

### A6: Hardest part

**Title:** Hardest part: making QA honest

**Bullets:**
- Early QA passed code by reading it
- Now: real server, real requests
- People check what machines can't

**Speaker notes:** UI checks a machine can't judge go to a person as a written test script. Nothing passes unless someone exercised it in the running app.

### A7: Lesson

**Title:** The system matters more than the prompt

**Bullets:**
- Most fixes: boundaries, not prompts
- Next: measure handoff success
- For your team: clear specs, small changes, honest tests

**Speaker notes:** On ProjectDay alone: over 1,500 commits, 217 acceptance criteria, 88 integration-review items each decided by a human, and 18 improvement proposals from the first retrospective.

---

## Track B: ProjectDay

### B1: Numbers

**Title:** ProjectDay

**Big numbers:**
- **12** modules
- **13** gyms in Taipei
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

**Title:** Taiwan's indoor climbers have no app

**Bullets:**
- Global apps target outdoor crags
- Beta videos lost on Instagram
- Local app only logs climbs

### B5: Key decision

**Title:** Video moved from Supabase to AWS

**Visual:** flow chips: Upload → S3 → MediaConvert → CloudFront.

**Bullets:**
- iPhone HDR looked overexposed
- No CDN for playback
- Cost: a second cloud to run

**Speaker notes:** MediaConvert makes one H.264 MP4 and maps HDR to SDR. CloudFront serves short-lived signed URLs, and the database stores only a key, never a URL.

### B6: Hardest part

**Title:** Caught a privacy hole before launch

**Bullets:**
- Backfill copied any storage path
- Users could copy private videos
- Fix: owner-prefix check

**Speaker notes:** I ran an independent security audit before release. It also found a permission check copied into five places and starting to drift.

### B7: Lesson

**Title:** Mocked tests can lie

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
- **2** availability zones
- **0** code changes to scale out

**Speaker notes:** Stateless JWT auth meant adding the second server needed no code changes.

### C2: Intro

**Title:** Analytics, campaigns and SEO in one place

**Visual:** SitePlus+ home screenshot (`siteplusplus-home.jpg`).

**Bullets:**
- One snippet in, one dashboard out
- Used in production by a real company

### C3: Role and stack

**Title:** My role and stack

**Role:** Sole engineer, full stack and AWS

**Stack:** Java 21 / Spring Boot · React / TypeScript · Redux · PostgreSQL · Redis · Docker · GitHub Actions · AWS (EC2, ALB, RDS, ElastiCache, S3, CloudFront) · Cloudflare

### C4: Problem

**Title:** Hours of manual reports, every week

**Visual:** SitePlus+ reports screenshot (`siteplusplus-reports.jpeg`).

**Bullets:**
- Data spread across tools
- Same gathering every report
- Goal: install once, rely on it

### C5: Key decision

**Title:** Public writes, private reads

**Bullets:**
- Snippet can't carry a login
- Anyone writes, only the owner reads
- Redis rate limit shared by both servers

**Speaker notes:** A per-server counter would have doubled the real limit behind the load balancer. Every resource hangs off a Site owned by a User, so one ownership check protects everything.

### C6: Hardest part

**Title:** A CORS bug my logs never saw

**Bullets:**
- Cloudflare intercepted preflight requests
- Fix: a Worker answers them

**Speaker notes:** When the logs are empty, the request is dying before it reaches you. Look at every layer in front of the app.

### C7: Lesson

**Title:** Real problems start where textbooks stop

**Bullets:**
- Two servers broke a simple rate limit
- Next: sliding window, event-driven deploys
- For your team: I've owned production end to end

---

## Track D: TabVault

### D1: Numbers

**Title:** TabVault

**Big numbers:**
- **3** clients
- **1** API
- **Live** on AWS Fargate

### D2: Intro

**Title:** Save a tab now, find it later

**Visual:** TabVault home screenshot (`tabvault-home.png`).

**Bullets:**
- AI summaries and reminders
- Live at tab-vault.com

### D3: Role and stack

**Title:** My role and stack

**Role:** Orchestrator and reviewer; built by my multi-agent system

**Stack:** Java 21 / Spring Boot · React / TypeScript PWA · Chrome Extension (MV3) · PostgreSQL · Redis · Quartz · Claude API · AWS ECS Fargate

### D4: Key decision

**Title:** Saving never waits for the AI

**Bullets:**
- Save queues a job, returns instantly
- A worker calls the Claude API
- Token budget and URL cache cap cost

### D5: Hardest part

**Title:** Bugs that only exist in the cloud

**Bullets:**
- Health check behind login: no traffic
- ARM image on x86 servers
- Each fix became a deploy checklist item
