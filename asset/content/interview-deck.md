# Interview Deck (Slideshow page)

Editor's note (not page copy): this deck is built from the interview-slides guide the user supplied on 2026-11-01. Every slide title is a full sentence, so reading only the titles tells the story. Body text stays under about 50 words per slide. Speaker notes are for the presenter only and are never shown on the slide.

Editor's note (not page copy): structure, revised 2026-11-01 at the user's request. The deck is one intro slide, one project menu, four project tracks, and one closing slide. In each interview the presenter picks one track from the menu, so a 10-minute talk is: Intro, Menu, one track, Thank you.

```
Intro → Menu ─┬─ A Multi-Agent System (7 slides) ─┐
              ├─ B ProjectDay         (7 slides) ─┤
              ├─ C SitePlus+          (7 slides) ─┼→ Thank you
              └─ D TabVault           (4 slides) ─┘
```

Editor's note (not page copy): tailoring. The intro's top line uses a default that the URL can override, for example `/slideshow?role=Backend%20Intern&company=Acme`. Without parameters it reads "Applying for Software Engineering Intern roles". A `project` parameter (`multi-agent`, `projectday`, `siteplus`, `tabvault`) pre-selects a track, so after the menu the next key press enters that track.

---

## Slide 1: Intro

**Top line:** Leon Wu / Applying for {role} at {company}
(default: "Leon Wu / Applying for Software Engineering Intern roles")

**Claim:** I build production software end to end, and I build AI systems that ship software reliably.

**Proof points:**
- **~60%** less recurring analytics work at the company that adopted SitePlus+, my full-stack platform
- **2 products** shipped by my multi-agent system: TabVault (live) and ProjectDay (iOS, submitted to the App Store)
- **3.9 GPA**, MS in Computer Science at Northeastern, after 4 years in industry, 2 as a front-end developer

**Speaker notes:** Hi, I'm Leon. I'm a CS master's student at Northeastern, and before that I spent four years in industry in Taiwan, first in growth marketing, then as a front-end developer. I taught myself to code because I wanted to build the things I was responsible for. Today I work across the stack, Java and Spring Boot, React and TypeScript, AWS, and I spend a lot of time on one question: how do you make AI agents produce software you can actually trust? Let me show you something I built.

---

## Slide 2: Project menu

**Title:** Here are four things I've built. Which one would you like to see?

**Cards (click, or press 1 to 4):**
1. **Multi-Agent System:** Six AI agents that plan, build and ship software
2. **ProjectDay:** An iOS bouldering app my agent system built
3. **SitePlus+:** A full-stack platform a real company uses in production
4. **TabVault:** A live tab manager with three clients

**Speaker notes:** Pick the track that matches the job description before the interview. If they ask about a second project at the end, press M to come back here.

---

## Track A: Multi-Agent Software Development System

### A1: The pitch

**Title:** My multi-agent system lets one developer ship real products with AI agents, without losing control of the code.

**Visual:** TabVault home screenshot (`tabvault-home.png`).

**Body:** Six specialized Claude Code agents plan, build and verify software. A human approves every handoff.

**Speaker notes:** It's a development team made of AI agents: a PM, a Tech Lead, Engineers, QA, and two support roles. I'm the human in the loop. TabVault, on screen, is one of the two products it shipped.

### A2: The problem

**Title:** A single AI coding agent loses the plot on a real project.

**Body:**
- Context drifts over a long session
- Earlier decisions get quietly overwritten
- There is no clean way to review or undo a bad step

**Speaker notes:** I hit this after building SitePlus+ on my own. The question was whether I needed a better prompt or a better system. I decided it was the system.

### A3: The solution, shown

**Title:** Six agents, each with one job, hand work to each other through documents and git.

**Visual:** the horizontal workflow diagram (`multi-agent-horizontal.png`), full width.

**Body:** PM writes requirements. Doc-Sync turns them into one spec per module. Engineer builds, QA verifies in the running app. Tech Lead reviews the whole phase.

**Speaker notes:** Walk the diagram left to right. Point at the human approval on every arrow.

### A4: How it works

**Title:** I chose strict information boundaries over shared context, and accepted an extra sync step.

**Body:**
- **Least privilege:** each agent sees only its own files and spec.
- **Trade-off:** Doc-Sync carries context forward. One more step, but each agent stays small enough to trust.
- **Safety net:** every handoff is a git commit, so any step can be rolled back.

**Speaker notes:** An Engineer never sees the full requirements, only its module spec. A scope check runs three times on every change. If they ask why not one big agent: a mistake stays contained in one module instead of spreading.

### A5: The hardest part

**Title:** The hardest part was making QA admit what it could not check.

**Body:** Early QA runs passed code on reading alone. Now backend QA must hit a real running server, and UI checks a machine can't judge go to a person as a test script.

**Speaker notes:** Nothing passes unless someone exercised it in the running app. This is the part I'm proudest of: the most trustworthy piece of the system is the one that says "I can't verify this, please check."

### A6: The results

**Title:** The system shipped two real products and caught its own failures.

**Big numbers:**
- **2** products shipped: TabVault (live on AWS) and ProjectDay (iOS, submitted to the App Store)
- **1,500+** commits on ProjectDay
- **217** acceptance criteria verified
- **88** integration-review items, each decided by a human
- **18** improvement proposals from the first retrospective, now part of the framework

**Speaker notes:** Failures stayed inside one module instead of cascading. Every step is reviewable and reversible through git.

### A7: What I learned

**Title:** Reliable software comes from the system around the code, and that is what I bring to a team.

**Body:**
- **Lesson:** most of my iterations went into boundaries and handoffs, not prompts.
- **Next:** measure handoff success and time to ship, instead of judging by feel.
- **For you:** clear specs, small reviewable changes and honest testing.

**Speaker notes:** I'm used to clear specs, small reviewable changes and honest testing, the same habits your team relies on. Name one problem from their job description or product that matches.

---

## Track B: ProjectDay

### B1: The pitch

**Title:** ProjectDay helps climbers in Taiwan log a climb in seconds and find beta videos for the exact route.

**Visual:** the ProjectDay three-screen image (Home, Gyms, Route).

**Body:** An iOS app built with React Native, Supabase and AWS. Submitted to the App Store in October 2026.

**Speaker notes:** "Beta" is climbing slang for how to climb a route. The interface on screen is Traditional Chinese because the app is Taiwan-first; it also runs in English.

### B2: The problem

**Title:** Indoor climbers in Taiwan have no app built for their gyms.

**Body:**
- International apps focus on outdoor crags and are not localized
- Beta videos live on PTT and Instagram, impossible to find again for one route
- My targets: log a send in under 30 seconds, a video playable within 60 seconds of upload

**Speaker notes:** Indoor bouldering is growing fast in Taiwan. The only local app just logs sends.

### B3: The solution, shown

**Title:** A climber logs a send in four taps, then watches beta for that exact route.

**Visual:** Route, Route-beta and Profile screenshots side by side.

**Body:** 13 gyms in Taipei and New Taipei, route lists by grade and hold color, follows, likes and push notifications. English and Traditional Chinese, light and dark.

**Speaker notes:** Route data comes from climbers, so adding a route checks for duplicates first.

### B4: How it works

**Title:** I moved video from Supabase Storage to AWS, accepting a second cloud to manage.

**Body:** Uploads go straight to S3. MediaConvert makes one H.264 MP4 and maps iPhone HDR to SDR. CloudFront serves short-lived signed URLs. The database stores only a key, never a URL.

**Speaker notes:** The first version stored originals in Supabase. HDR clips looked overexposed and there was no CDN, and a bigger Supabase plan fixed neither. Clips with no audio track failed in MediaConvert, so the job now retries them once as video-only.

### B5: The hardest part

**Title:** The hardest part was finding a privacy hole before launch.

**Body:** A security audit I ran before release found that the video backfill copied any storage path a user supplied, so one user could copy another's private video. An owner-prefix check closed it.

**Speaker notes:** The same audit flagged a permission check copied into five places and starting to drift. Another hard lesson: the database migrations failed to replay from zero four times, so replaying from zero is now a CI step.

### B6: The results

**Title:** ProjectDay reached the App Store with every decision on the record.

**Big numbers:**
- **12** modules, built by my multi-agent system
- **73** database migrations, replayed from zero in CI
- **217** acceptance criteria verified
- **88** integration-review items, each decided by me

**Speaker notes:** Version 1.0.0 went through TestFlight and was submitted in October 2026. 1.0.1 is ready to follow.

### B7: What I learned

**Title:** Mocked tests can lie, so every module now gets a real native build before QA.

**Body:**
- **Lesson:** a native module passed every Jest test and still broke the iOS build.
- **Next:** Android, an offline queue for logging sends, product analytics.
- **For you:** I test against the real platform, not only mocks.

**Speaker notes:** Code written outside the agent flow also needs a way in: a large design branch merged directly forced spec updates on nine modules, so the framework now has an intake path for outside code.

---

## Track C: SitePlus+

### C1: The pitch

**Title:** SitePlus+ lets a site owner track behavior, campaigns and SEO in one place, without weekly manual reports.

**Visual:** SitePlus+ home screenshot (`siteplusplus-home.jpg`).

**Body:** A full-stack platform I designed, built and deployed on my own. A real company uses it in production.

**Speaker notes:** Java and Spring Boot, React and TypeScript, PostgreSQL and Redis, on AWS.

### C2: The problem

**Title:** A small company spent hours every week assembling the same marketing numbers by hand.

**Body:** Page views, campaign results and SEO checks lived in separate places, so every report repeated the same manual gathering.

**Speaker notes:** I wanted something a site owner installs once and then relies on.

### C3: The solution, shown

**Title:** Install one snippet, then read every number on one dashboard.

**Visual:** SitePlus+ reports and sites screenshots side by side.

**Body:** A tracking snippet captures views, clicks and form submissions. The dashboard shows events over time, top pages, channels and countries. The SEO auditor re-checks a page a week later and emails a comparison.

### C4: How it works

**Title:** The tracking endpoint has to be public, so I moved security to the read side.

**Body:** A visitor's browser has no credentials, so anyone can write an event, but only the site owner can read events back. A rate limit kept in Redis, shared by both servers, stops abuse of the open write path.

**Speaker notes:** A per-server counter would have doubled the real limit behind the load balancer. Every resource hangs off a Site owned by a User, so one ownership lookup protects everything downstream.

### C5: The hardest part

**Title:** The hardest bug was a CORS failure that never reached my server.

**Body:** Cloudflare intercepted preflight requests before the load balancer, so the browser failed with nothing in my logs. I wrote a small Cloudflare Worker that answers preflights at the layer that was intercepting them.

**Speaker notes:** Lesson: when the logs are empty, the request is dying before it reaches you. Look at every layer in front of the app.

### C6: The results

**Title:** SitePlus+ cut the company's recurring analytics work by about 60%.

**Big numbers:**
- **~60%** less recurring analytics work
- **2** servers in 2 availability zones
- **0** code changes to add the second server, thanks to stateless JWT auth
- **1 GB** of RAM per server, with the JVM tuned to fit

**Speaker notes:** CI tests every change against a live PostgreSQL container, then servers pick up new Docker images and redeploy within minutes, with no manual server access.

### C7: What I learned

**Title:** The interesting problems start where the textbook stops.

**Body:**
- **Lesson:** "authenticate every endpoint" fails for a tracking snippet, and a per-server rate limit breaks with two servers.
- **Next:** a sliding-window rate limit and event-driven deploys.
- **For you:** I've owned a system end to end in front of a real customer.

---

## Track D: TabVault

### D1: The pitch

**Title:** TabVault lets you save a tab in one click, close it, and find it again when it matters.

**Visual:** TabVault home screenshot (`tabvault-home.png`).

**Body:** A Chrome extension, a React PWA and a Spring Boot API, with AI summaries and deadline reminders. Live at tab-vault.com, built by my multi-agent system.

**Speaker notes:** I set the bar high on purpose: three clients, background jobs, an AI integration and a real cloud deploy, to prove the agent system could ship more than a toy.

### D2: How it works

**Title:** Saving a tab never waits for the AI.

**Body:** The save only queues a job and returns. A background worker extracts the page and asks the Claude API for a summary, category and deadlines. Content is trimmed to a token budget and repeat URLs are cached, so cost stays predictable.

**Speaker notes:** A database trigger updates full-text search when the summary lands, so search includes it. Jobs live in a table, not memory, so a restart drops nothing.

### D3: The hardest part

**Title:** The hardest bugs only existed in the cloud.

**Body:** The health check sat behind login and returned 401, so the load balancer sent no traffic at all. An image built on Apple Silicon ran nowhere on x86 Fargate. Each fix became a standing deploy checklist item.

**Speaker notes:** I also lost hours to HTTPS failures that turned out to be my ISP blocking a new domain. Now I test from inside the cloud network first.

### D4: The results

**Title:** TabVault runs in production and proved my agent system can ship a real product.

**Big numbers:**
- **3** clients on **1** API
- **15-minute** access tokens with single-use refresh tokens
- Live on **AWS ECS Fargate** at tab-vault.com

**Body:** Lesson: "done" means it survives restarts, deploys and real networks.

---

## Slide 3 (last): Thank you

**Title:** Thank you. I'd love to hear your questions.

**Body:**
- leon-wu.com
- github.com/LeonWu813
- linkedin.com/in/leon-wu-tsan-yu
- leon.wu.tsan.yu@gmail.com
