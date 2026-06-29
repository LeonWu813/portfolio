export interface ProjectLink {
  label: string;
  href: string;
}

export interface ProjectSection {
  heading: string;
  paragraphs: string[];
}

export interface ProjectEntry {
  slug: string;
  year: string;
  date: string;
  title: string;
  tech: string;
  tags: string[];
  atAGlance: string;
  description: string;
  links: ProjectLink[];
  sections: ProjectSection[];
}

export const projects: ProjectEntry[] = [
  {
    slug: "multi-agent-system",
    year: "2025",
    date: "03/01",
    title: "Multi-Agent Software Development System",
    tech: "Harness Engineering · AI Agents · Systems Design · Claude Code",
    tags: ["Claude Code", "Bash", "Git", "Multi-agent", "Systems Design"],
    atAGlance:
      "Sole architect · 6 specialized agents · Human-approved at every handoff · Shipped TabVault (live)",
    description:
      "A team of six AI agents that plan, build, and QA software through a controlled, human-approved workflow. The system shipped a deployed full-stack app, TabVault, from start to finish.",
    links: [
      { label: "Built by the system: tab-vault.com", href: "https://tab-vault.com" },
      { label: "System repo", href: "https://github.com/LeonWu813/multi-agent-software-development-system" },
      { label: "TabVault repo", href: "https://github.com/LeonWu813/tab-management" },
    ],
    sections: [
      {
        heading: "The problem",
        paragraphs: [
          "After shipping a full-stack analytics platform end to end on my own, I kept running into the same limitation: a single AI coding agent tends to lose the plot on a real project. Context drifts over a long session, earlier decisions get quietly overwritten, and there is no clean way to review or undo a bad step. I wanted to understand whether the answer was a better prompt or a better system.",
          "I decided it was the system. So I built one: a development team made up of specialized agents, each with a single job, coordinating the way real engineers do through documents, reviews, and version control, with a human in control at every step.",
        ],
      },
      {
        heading: "My role",
        paragraphs: [
          "I was the sole architect and builder. I designed the agent roles, the information boundaries between them, the skill layer, and the git-backed handoff mechanism. I treated the design itself as the deliverable. I drafted the full architecture up front in a single design document, then hardened it by running real projects through the system and fixing whatever broke along the way.",
        ],
      },
      {
        heading: "How it works end to end",
        paragraphs: [
          "A project moves through the team like work moves through a real one. The PM agent gathers requirements and writes a product requirements document, which becomes the single source of truth. A Tech Lead agent reviews it for feasibility and risk and produces a setup runbook. After the human completes setup and approves, the PM finalizes the document. Doc-Sync then translates that one document into a separate, self-contained spec for each module, and generates a dedicated Engineer and QA agent per module. An Engineer agent implements a single module against its spec; a QA agent verifies that module against the same spec. If QA finds a bug it goes back to the Engineer; if it finds a problem with the spec itself it goes back to the PM, because that may require changing the requirements. When a module passes, the PM checks in with the human before the next one begins.",
          "The crucial detail is that no step runs on its own. Each agent finishes by committing its work and recording what it did, and a hook then prints the exact command for the next step. The human reads it and decides whether to run it.",
        ],
      },
      {
        heading: "Design principles",
        paragraphs: [
          "I started from the idea of an agent harness: the belief that the engineering around the model matters more than any single prompt. Four ideas do most of the work.",
          "**Single responsibility.** Rather than one agent that does everything, there are six, each with one input, one output, and one handoff rule. Small, scoped agents are easier to constrain and to reason about, so a mistake stays contained instead of spreading.",
          "**Least-privilege information boundaries.** Each agent can read and write only the files its role requires, which I encoded as an explicit write-access matrix. The Engineer, for example, never sees the requirements document; it sees only its own module spec, which carries forward just enough context. No agent sees everything. The trade-off is that information has to be carried forward deliberately, through Doc-Sync's translation step, rather than every agent reaching for whatever it wants. That adds a moving part, but it is what keeps each agent small enough to trust.",
          "**A human in the loop at every handoff.** The system proposes the next action; the human approves before it runs. Nothing is applied without review.",
          "**Git as a rollback safety net.** Every handoff is an atomic commit, so any step is a clean point to revert to. A progressive-disclosure skill layer, where lean router files load detailed workflows only when an agent needs them, keeps each agent's working context small and focused.",
        ],
      },
      {
        heading: "The six agents",
        paragraphs: [
          "The team is PM, Doc-Sync, Tech Lead, Engineer, QA, and Retrospective. Each writes only to its own narrow set of files. The PM owns the requirements document and all communication with the human. Doc-Sync owns translation and the generated per-module agents. The Tech Lead is advisory and writes only reviews and the setup runbook. Engineers write source code; QA writes verification results; Retrospective writes only improvement proposals. The Engineer and QA roles are base templates, and Doc-Sync generates a thin wrapper of each per module that hard-codes exactly which spec and dependencies that instance is allowed to read. In effect the system writes part of itself, with least-privilege access built in from the start.",
        ],
      },
      {
        heading: "Decisions worth calling out",
        paragraphs: [
          "**Doc-Sync is a translator, not an interpreter.** It is allowed to restructure and distribute the requirements document's content, never to add or infer anything. If the requirements are ambiguous, it does not guess; it leaves an explicit marker and logs the question for the PM to resolve. This keeps a single source of truth genuinely single, because no downstream document invents details the PM did not write.",
          "**Synchronization is incremental and verified.** The first sync builds every downstream document; later syncs apply only the delta from a change, and a trivial wording change takes a lightweight path rather than a full re-sync. After a substantive sync, a script verifies the integrity of the result before the work is declared complete, so drift between the requirements and the specs is caught mechanically.",
          "**The handoff hook informs but never acts.** A stop hook reads a machine-readable record of the last action and prints the precise next command, along with a warning if the finishing agent left uncommitted changes. It never invokes the next agent itself. The system's job is to remove guesswork from what comes next, not to take the human out of the loop.",
          "**QA is honest about what it can and cannot verify.** Backend modules do not pass on code inspection alone; the QA agent has to start a real server, call real endpoints, and check actual database state. And because a browser UI genuinely cannot be verified from the command line, the front-end QA agent stops and produces a written test script for a human rather than falsely reporting a pass. Designing around the limits of automated verification, instead of pretending those limits do not exist, was a deliberate choice.",
          "**The system improves itself, but only through a human.** A Retrospective agent, which runs only when explicitly invoked, reads the full project history and proposes changes to the agents and skills, with each proposal traced back to a specific incident. It never edits the agents or skills directly; a human reviews the proposals and applies the ones worth keeping.",
        ],
      },
      {
        heading: "Impact",
        paragraphs: [
          "The system designed, implemented, and QA'd TabVault, a deployed full-stack tab and notes manager that is live in production. The agents built it while I reviewed and approved each handoff. The result is a workflow where failures stay contained to a single module instead of cascading, every step is reviewable and any step is cleanly reversible through git, and the whole process is transparent because coordination happens in plain files rather than hidden state.",
          "That build also exercised the self-improvement loop for real. TabVault's deployment surfaced a series of cloud-only failures, and the Retrospective agent turned each one into a concrete, traceable proposal to strengthen the engineering and QA checklists, so the same class of mistake is caught automatically on the next project. The system did not just produce software; it got better from having done so.",
        ],
      },
      {
        heading: "What I learned and what I would improve",
        paragraphs: [
          "The hard part of a multi-agent system is not the code the agents write. It is the system that makes them produce correct software reliably. Most of my iterations went into tightening information boundaries and handoff rules, not into prompting. I also learned to design for the limits of automated verification rather than around them. The most trustworthy part of the system turned out to be the place where it admits a machine cannot check something and asks a person instead.",
          "If I extended the project, I would add automated metrics on handoff success rates and time to ship across projects, so that improvements to the harness could be measured rather than judged by feel.",
        ],
      },
    ],
  },
  {
    slug: "siteplus",
    year: "2024",
    date: "09/01",
    title: "SitePlus+",
    tech: "Full-Stack · Java/Spring Boot · React · AWS",
    tags: ["Full-Stack", "Java/Spring Boot", "React", "TypeScript", "Redux Toolkit", "PostgreSQL", "Redis", "Docker", "GitHub Actions", "AWS"],
    atAGlance:
      "Sole engineer · Full-stack + AWS infra · Live in production · Cut recurring analytics work ~60%",
    description:
      "A full-stack analytics platform for tracking user behavior, managing campaigns, and auditing SEO across multiple websites. Built end to end on my own and adopted in production by a real company, where it cut recurring analytics work by roughly 60 percent.",
    links: [
      { label: "Live demo", href: "https://www.siteplusplus.space" },
      { label: "GitHub: marketing-analytics", href: "https://github.com/LeonWu813/marketing-analytics" },
    ],
    sections: [
      {
        heading: "The problem",
        paragraphs: [
          "A small company I worked with was spending hours every week assembling the same marketing numbers by hand: page views, campaign performance, and a periodic SEO checkup. The data lived in several disconnected places, so every report meant repeating the same manual gathering. I set out to replace that routine with a single platform a site owner could install once and then rely on, covering behavior tracking, campaign management, and automated SEO auditing in one place.",
          "I designed, built, and deployed the entire system myself, from the database schema to the production AWS infrastructure.",
        ],
      },
      {
        heading: "My role",
        paragraphs: [
          "Sole engineer across the whole stack. I built the Spring Boot backend, the React and TypeScript front end, the JavaScript tracking snippet that customers paste into their sites, and the full AWS deployment with a continuous-delivery pipeline. Every design decision described below was mine to make and to own.",
        ],
      },
      {
        heading: "How it works end to end",
        paragraphs: [
          "A site owner registers their website and receives an auto-generated tracking snippet, pre-filled with a unique site code, ready to paste into their page head. That snippet is a small self-contained script that captures page views, clicks, and form submissions and sends each one to a public ingest endpoint. The backend accepts the event without authentication, enriches it server-side with the visitor's country using a local geolocation database, and stores it against the owner's site. When the owner later opens their dashboard, the front end requests their analytics through an authenticated, ownership-checked endpoint, and the backend returns aggregates: events over time, top pages, channels, and countries, with period-over-period comparison. The same site can also be run through the SEO auditor, which crawls the page, calls an external PageSpeed service, and stores a report the owner can email or have re-checked automatically a week later.",
          "That single path touches every interesting decision in the system: a public write with a private read, server-side enrichment, ownership scoping, and scheduled follow-up work.",
        ],
      },
      {
        heading: "Architecture",
        paragraphs: [
          "The platform separates the static front end from the API so each can scale and deploy independently. The front end is built with Vite, stored in S3, and served from CloudFront edge locations over HTTPS, with Origin Access Control so only CloudFront can read the bucket. API traffic passes through Cloudflare for DDoS protection and CORS handling, then an Application Load Balancer that terminates TLS and health-checks each instance every thirty seconds, then on to two EC2 instances running the Spring Boot app in Docker. Both instances share one RDS PostgreSQL database and one ElastiCache Redis node.",
          "The data model is deliberately simple and is the backbone of the platform's security: every resource hangs off a Site, which belongs to a User. Because everything is scoped to a Site, ownership is verified with a single lookup per request that finds the site by its code and the authenticated user. That one check protects every downstream resource, so there is no place where an authorization rule can be forgotten.",
        ],
      },
      {
        heading: "Key engineering decisions",
        paragraphs: [
          "**Securing an endpoint that has to be public.** The tracking snippet runs in a visitor's browser with no credentials, so the event-ingest endpoint cannot require authentication. Rather than weaken security, I moved the guarantee to the read side: anyone can write an event, but only the authenticated site owner can read events back. To keep the open write path from being abused, I rate-limit it per IP so an attacker can be throttled but never mine the data.",
          "**Rate limiting that stays correct across multiple servers.** The platform runs on two instances behind a load balancer. An in-memory counter on each instance would have effectively doubled the real limit, since an attacker could alternate between them. I keep the counter in Redis instead, giving all instances one shared source of truth so the limit holds no matter which server answers a request.",
          "**Stateless auth that made scaling free.** I chose JWTs over server-side sessions so any instance can validate a request on its own. The payoff was concrete: adding the second instance behind the load balancer required zero code changes, because there was no shared session store to coordinate.",
          "**Getting real work out of small hardware.** Running on t3.micro instances forced careful JVM tuning. I constrained the heap, metaspace, code cache, and thread stack size, and reduced the web server and database connection pools to fit comfortably alongside Docker and the auto-deploy agent inside one gigabyte of RAM.",
          "**State that survives a restart.** The automated follow-up audits store their pending work as fields in the database rather than in server memory. A scheduled job picks up whatever is due. Because the intent lives in PostgreSQL, a restart never loses a follow-up.",
        ],
      },
      {
        heading: "Challenges and how I resolved them",
        paragraphs: [
          "**Preflight requests never reached the backend.** Putting Cloudflare in front of the API meant its proxy layer intercepted CORS preflight requests before they reached the load balancer, so the browser saw failures that did not correspond to anything in my application logs. I resolved it by writing a small Cloudflare Worker that answers preflight requests directly and appends the right headers to forwarded responses, which put CORS handling at the layer that was actually intercepting it.",
          "**Preventing account enumeration at login.** A login form that says 'wrong password' for a real email and 'no such user' for a fake one quietly tells an attacker which emails are registered. I return the same error for both cases so the endpoint reveals nothing about which accounts exist.",
        ],
      },
      {
        heading: "Impact",
        paragraphs: [
          "The platform was adopted in production by a real company and cut their recurring analytics work by roughly 60 percent, replacing hours of weekly manual reporting with a system that gathers, enriches, and visualizes the data on its own. It runs on a multi-AZ AWS deployment with a continuous-delivery pipeline that tests every change against a live PostgreSQL container, then builds and ships Docker images that the instances pick up and redeploy automatically within a few minutes, with no manual server access.",
        ],
      },
      {
        heading: "What I learned and what I would improve",
        paragraphs: [
          "Building and operating this alone taught me that the interesting problems live where the textbook stops. The clean answer says authenticate every endpoint, but a tracking snippet cannot carry a credential, so I had to put the security guarantee somewhere else. The clean answer says rate-limit requests, but the moment there are two servers, a naive counter is wrong. Working through those gaps end to end, and then keeping the result running in front of a real customer, is where I learned the most.",
          "If I kept investing in it, the next steps I would prioritize are moving the per-minute rate limit to a sliding window for fairer throttling, replacing the five-minute polling redeploy with an event-driven trigger to shorten deploy time, and adding embedding-based search over saved analytics so owners can ask questions in plain language rather than only filtering.",
        ],
      },
    ],
  },
  {
    slug: "tabvault",
    year: "2024",
    date: "06/01",
    title: "TabVault",
    tech: "Full-Stack · PWA · AI · AWS",
    tags: ["Java 21 / Spring Boot", "React / TypeScript PWA", "Chrome Extension (MV3)", "PostgreSQL", "Redis", "Quartz", "Claude API", "AWS ECS Fargate"],
    atAGlance:
      "Orchestrator + reviewer · 3 clients (Chrome MV3, React PWA, Spring Boot API) · Built by my multi-agent system · Live on AWS ECS Fargate",
    description:
      "A production full-stack tab manager spanning a Chrome extension, a React PWA, and a Spring Boot backend, with an AI content-analysis pipeline. I produced it by running my own multi-agent development system, reviewing and approving every step.",
    links: [
      { label: "Live: tab-vault.com", href: "https://tab-vault.com" },
      { label: "GitHub: tab-management", href: "https://github.com/LeonWu813/tab-management" },
    ],
    sections: [
      {
        heading: "The problem",
        paragraphs: [
          "I needed a real, non-trivial product to prove that my multi-agent development system could do more than scaffold a toy app. A throwaway CRUD demo would not have tested anything. So I set the bar high: a genuine full-stack product with three separate clients, asynchronous background jobs, an external AI integration, push notifications, and a real cloud deployment. If the system could ship that, with me reviewing each handoff rather than writing the code myself, it would be a credible result.",
          "TabVault is that product. People accumulate browser tabs they mean to return to, which slows the browser down and buries content they wanted. TabVault lets someone save a tab in one action, close it immediately, and trust that the content and its context are preserved, searchable, and surfaced again when it matters. It is live in production.",
        ],
      },
      {
        heading: "My role",
        paragraphs: [
          "I was the orchestrator and the technical reviewer. The implementation came from my multi-agent system, but I directed the work and approved every design decision and handoff before it moved forward. That meant reading and signing off on the architecture, catching problems at each gate, and making the judgment calls recorded below. The deployment phase in particular was hands-on debugging: most of the incidents in the challenges section were ones I diagnosed and resolved directly. I understand every decision in this build because reviewing and approving each one was my job, and building the product this way was itself the real test of the system that produced it.",
        ],
      },
      {
        heading: "How it works end to end",
        paragraphs: [
          "A user clicks the extension on a page they want to keep. The extension does not analyze anything itself; it sends just the URL and page title to the backend and returns instantly, so the save feels immediate and the tab can be closed right away. On the server, saving an item also writes a job record into an analysis queue table in the database. A background worker picks that job up, extracts the page's readable content using the right tool for the source, and calls the Claude API to produce a short summary, a suggested category, and any time-sensitive deadlines it finds. The results are written back onto the saved item, and the full-text search index updates at the same moment, so the item becomes searchable with its summary included. Later, the user opens the dashboard, finds the item by searching its summary, and sees a reminder that the system created automatically from a deadline it detected on the page. When that reminder comes due, a scheduled job sends a push notification to the browser or installed app.",
          "That single journey exercises the capture client, the asynchronous pipeline, the AI integration, the search index, the scheduler, and push notifications, which is exactly why I chose this product as the system's proving ground.",
        ],
      },
      {
        heading: "Architecture",
        paragraphs: [
          "TabVault is three clients sharing one backend, organized into three layers. The client layer has two front ends that share conventions but deploy separately. The Chrome extension, built on Manifest V3, is the capture surface: a popup and a background service worker that stores auth tokens in the browser's local storage, because MV3 service workers are ephemeral and cannot hold state reliably in memory between invocations. The React PWA is the management surface for browsing, searching, editing, and organizing saved items; it installs as an app on desktop and mobile, caches its shell and recent data for offline use, and can receive URLs shared from other mobile apps through the system share sheet, queuing them when offline and submitting them once connectivity returns.",
          "The backend is a single Spring Boot application exposing one REST API to both clients, split internally into four service areas: authentication, item management, the AI analysis pipeline, and the reminder and cleanup scheduler. The data layer is PostgreSQL as the system of record, with Redis for the URL-deduplication cache and rate-limit counters. Analysis work is tracked in a job table rather than held in memory, so a server restart never drops pending analysis. Full-text search is served by PostgreSQL search-vector columns kept current by database triggers, which fire both when an item is first saved and later when the asynchronous summary is written, so search stays accurate even though the summary arrives after the save.",
          "One detail I insisted on: the Java API contract generates an OpenAPI document, and the front-end TypeScript types are generated from that document. The server's types are the single source of truth, so a backend change that the front end has not accounted for surfaces as a type error rather than a runtime bug.",
        ],
      },
      {
        heading: "Key engineering decisions",
        paragraphs: [
          "**Scheduled jobs that survive ephemeral infrastructure.** Reminders and auto-cleanup run on Quartz, whose default in-memory store loses every scheduled job when a container restarts. Since the app runs on Fargate, where tasks are ephemeral by design, that default would have quietly dropped reminders on every redeploy. Backing the scheduler with a database-backed job store makes triggers persist across restarts.",
          "**Refresh-token rotation for sessions that are both safe and long-lived.** Access tokens expire after fifteen minutes, and every refresh issues a brand-new refresh token on a sliding seven-day window. Because each refresh token is single-use, a stolen one is useless almost immediately, while genuine active users stay logged in.",
          "**An asynchronous AI pipeline that never blocks the user.** The save path does no analysis; it only enqueues a job and returns. All extraction and the model call happen on a background worker that writes results back when ready. The save feels instant and the analysis simply appears a moment later.",
          "**Keeping AI cost predictable.** Page content is truncated to a defined token budget before every model call, and a URL-level deduplication cache avoids re-analyzing content that has already been processed. Cost control is a property of the design, not an afterthought.",
        ],
      },
      {
        heading: "Challenges and how I resolved them",
        paragraphs: [
          "**Health checks silently blocked all traffic.** The load balancer health-checks the app's health endpoint, but that endpoint sat behind the authentication filter and returned a 401, so every instance was marked unhealthy and the load balancer refused to route any traffic at all. The fix was to explicitly permit the health endpoint in the security configuration.",
          "**An image that built fine and ran nowhere.** Building the Docker image on an Apple Silicon machine produced an ARM image, but Fargate runs on x86. The image built and pushed without any error and then failed silently at runtime, visible only in the task logs. Pinning every build to the x86 platform solved it.",
          "**A browser-extension origin the framework would not accept.** Allowing the Chrome extension's origin through CORS threw an exception because the framework distinguishes between exact origins and wildcard patterns, and an extension origin needs the pattern form. A small API change resolved it, and it is the kind of trap any project with an extension client will hit.",
          "**A secrets-exposure near miss, caught by the process.** Early on, the project directed me to fill an environment file with live secrets before an ignore file existed to keep it out of version control, one stray command away from committing credentials. Reviewing that step is what caught it. It is a good example of why a human approval gate at every step is not ceremony.",
        ],
      },
      {
        heading: "Impact",
        paragraphs: [
          "TabVault is deployed and running in production on AWS, served through a CDN and load balancer in front of containers on Fargate, backed by managed PostgreSQL and Redis. It is a complete product: save tabs from the extension or a mobile share sheet, get AI-generated summaries and categories, receive push reminders for detected deadlines, search everything by content, and browse offline through the installed app.",
          "Just as importantly, it is the proof that my multi-agent system works. A real, multi-client, cloud-deployed application came out the other end of that workflow, with a human reviewing every handoff, which is exactly what the system was designed to make possible.",
        ],
      },
      {
        heading: "What I learned and what I would improve",
        paragraphs: [
          "Operating the system to build something this size taught me that the real difficulty in production software is rarely in the happy path. It is in the restart that drops your scheduled jobs, the health check that locks out all traffic, the token that should expire faster, and the image that builds fine and runs nowhere. Reviewing each of those decisions sharpened my sense of what 'done' actually means for a deployed system.",
          "If I extended it, I would add real observability — metrics and tracing across the asynchronous pipeline so a slow or failed analysis is visible without reading logs — and I would put the deployment lessons above into an automated pre-deploy check so they can never recur by hand.",
        ],
      },
    ],
  },
];
