# Interview Deck (Slideshow page)

Editor's note (not page copy): this deck is built from the interview-slides guide the user supplied on 2026-11-01. It is planned for a 10-minute slot: 1 intro slide, 7 slides for one side project, 1 closing slide, plus 3 backup slides that are not in the main run. Every slide title is a full sentence, so reading only the titles tells the story. Body text stays under about 50 words per slide. Speaker notes are for the presenter only and are never shown on the slide.

Editor's note (not page copy): the main project is the Multi-Agent Software Development System, because it is the strongest story for engineering intern and junior roles (system design, trade-offs, and two shipped products). SitePlus+, ProjectDay and TabVault are backups for deep-dive questions.

Editor's note (not page copy): tailoring. The guide says to name the role and company on the intro slide. A public page cannot name every company, so the intro's top line uses a default that the URL can override, for example `/slideshow?role=Software%20Engineering%20Intern&company=Acme`. Without parameters it reads "Applying for Software Engineering Intern roles".

---

## Slide 1: Intro

**Top line:** Leon Wu / Applying for {role} at {company}
(default: "Leon Wu / Applying for Software Engineering Intern roles")

**Claim:** I build production software end to end, and I build AI systems that ship software reliably.

**Proof points:**
- **~60%** less recurring analytics work at the company that adopted SitePlus+, my full-stack platform
- **2 products** shipped by my multi-agent system: TabVault (live) and ProjectDay (iOS, submitted to the App Store)
- **3.9 GPA**, MS in Computer Science at Northeastern, after 4 years shipping web products in industry

**Speaker notes:** Hi, I'm Leon. I'm a CS master's student at Northeastern, and before that I spent four years shipping web products in Taiwan, first in growth, then as a front-end developer. I taught myself to code because I wanted to build the things I was responsible for. Today I work across the stack, Java and Spring Boot, React and TypeScript, AWS, and I spend a lot of time on one question: how do you make AI agents produce software you can actually trust? I'd like to show you the system I built to answer that.

---

## Slide 2: The pitch

**Title:** My multi-agent system lets one developer ship real products with AI agents, without losing control of the code.

**Visual:** tab-vault.com screenshot or the horizontal workflow diagram (`multi-agent-horizontal.png`).

**Body:** Six specialized Claude Code agents plan, build and verify software. A human approves every handoff.

**Speaker notes:** It's a development team made of AI agents: a PM, a Tech Lead, Engineers, QA, and two support roles. I'm the human in the loop.

---

## Slide 3: The problem

**Title:** A single AI coding agent loses the plot on a real project.

**Body (three short points):**
- Context drifts over a long session
- Earlier decisions get quietly overwritten
- There is no clean way to review or undo a bad step

**Speaker notes:** I hit this after building SitePlus+ on my own. The question was whether I needed a better prompt or a better system. I decided it was the system.

---

## Slide 4: The solution, shown

**Title:** Six agents, each with one job, hand work to each other through documents and git.

**Visual:** the horizontal workflow diagram, full width.

**Body:** PM writes requirements. Doc-Sync turns them into one spec per module. Engineer builds, QA verifies in the running app. Tech Lead reviews the whole phase.

**Speaker notes:** Walk the diagram left to right. Point at the human approval on every arrow.

---

## Slide 5: How it works

**Title:** I chose strict information boundaries over shared context, and accepted an extra sync step.

**Body:**
- **Least privilege:** each agent reads and writes only its own files. An Engineer never sees the full requirements, only its module spec. A scope check runs three times on every change.
- **Trade-off:** context must be carried forward on purpose by Doc-Sync. One more moving part, but each agent stays small enough to trust.
- **Git as the safety net:** every handoff is an atomic commit, so any step can be rolled back.

**Speaker notes:** If they ask why not one big agent with everything: a mistake stays contained in one module instead of spreading.

---

## Slide 6: The hardest part

**Title:** The hardest part was making QA admit what it could not check.

**Body:** Early QA runs reported passes on code inspection alone. I changed the rules: backend QA must start a real server and hit real endpoints, and UI checks that a machine cannot judge go to a person as a written test script. Nothing passes unless someone exercised it in the running app.

**Speaker notes:** This is the part I'm proudest of. The most trustworthy piece of the system is the one that says "I can't verify this, please check."

---

## Slide 7: The results

**Title:** The system shipped two real products and caught its own failures.

**Big numbers:**
- **2** products shipped: TabVault (live on AWS) and ProjectDay (iOS, App Store)
- **1,500+** commits on ProjectDay
- **217** acceptance criteria verified
- **88** integration-review items, each decided by a human
- **18** improvement proposals from the first retrospective, now part of the framework

**Speaker notes:** Failures stayed inside one module instead of cascading. Every step is reviewable and reversible through git.

---

## Slide 8: What I learned

**Title:** Reliable software comes from the system around the code, and that is what I bring to a team.

**Body:**
- **Lesson:** most of my iterations went into boundaries and handoff rules, not prompts.
- **Next:** measure handoff success rate and time to ship across projects, instead of judging by feel.
- **For you:** I'm used to clear specs, small reviewable changes and honest testing, the same habits your team relies on.

**Speaker notes:** Tailor the last line to the company: name one problem from the job description or their product that matches.

---

## Slide 9: Thank you

**Title:** Thank you. I'd love to hear your questions.

**Body:**
- leon-wu.com
- github.com/LeonWu813
- linkedin.com/in/leon-wu-tsan-yu
- leon.wu.tsan.yu@gmail.com

---

## Backup B1: SitePlus+

**Title:** SitePlus+ is a full-stack platform a real company uses in production.

**Body:** Java/Spring Boot, PostgreSQL and React on AWS. An event-ingestion pipeline with JWT auth and geolocation, a PageSpeed SEO auditor, and CI/CD that tests against a live PostgreSQL container. Cut recurring analytics work by ~60%.

---

## Backup B2: ProjectDay

**Title:** ProjectDay is an iOS bouldering app my agent system built end to end.

**Visual:** 3 of the ProjectDay screenshots side by side (Home, Gyms, Route).

**Body:** React Native and Expo, Supabase with row-level security on every table, and an AWS video pipeline (S3, MediaConvert, CloudFront) that converts iPhone HDR clips to SDR.

---

## Backup B3: TabVault

**Title:** TabVault is a live tab and notes manager with three clients.

**Body:** A Chrome extension, a React PWA and a Spring Boot backend with an AI content-analysis pipeline, deployed on AWS at tab-vault.com.
