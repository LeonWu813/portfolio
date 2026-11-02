export type ProjectKey = "multi-agent" | "projectday" | "siteplus" | "tabvault";

export type SlideId = string;

export interface ProjectInfo {
  key: ProjectKey;
  name: string;
  tagline: string;
  slideIds: SlideId[];
}

export interface TimelineEntry {
  date: string;
  role: string;
  org: string;
  opens?: { slideId: SlideId; key: string };
}

export interface Photo {
  src: string;
  alt: string;
  caption: string;
}

export interface PhoneShot {
  src: string;
  alt: string;
}

export type Visual =
  | { type: "single"; src: string; alt: string; ratio: number; framed: boolean }
  | { type: "phones"; items: PhoneShot[] };

export type NumberPair = readonly [value: string, label: string];

export type Slide =
  | { kind: "intro"; title: string; lines: string[] }
  | { kind: "timeline"; title: string; entries: TimelineEntry[] }
  | { kind: "job"; title: string; subtitle: string; numbers: NumberPair[] }
  | { kind: "photo"; title: string; photos: Photo[] }
  | { kind: "menu"; title: string }
  | { kind: "numbers"; title: string; numbers: NumberPair[] }
  | { kind: "workflow"; title: string }
  | { kind: "stack"; title: string; role: string; stack: string[] }
  | { kind: "bullets"; title: string; bullets: string[] }
  | { kind: "rolegrid"; title: string; roles: NumberPair[] }
  | { kind: "shot"; title: string; bullets: string[]; visual: Visual }
  | { kind: "flow"; title: string; flow: string[]; bullets: string[] };

export const FOOTER =
  "leon-wu.com · github.com/LeonWu813 · linkedin.com/in/leon-wu-tsan-yu · leon.wu.tsan.yu@gmail.com";

export const MENU_HINT_TEXT = "Pick a project: press 1 to 4 or click a card";

export const FULLSCREEN_HINT_TEXT = "Press F for full screen";

export const PROJECTS: ProjectInfo[] = [
  {
    key: "multi-agent",
    name: "Multi-Agent System",
    tagline: "An AI dev team with a human in charge",
    slideIds: ["A1", "A2", "A3", "A4", "A5", "A6", "A7", "A8"],
  },
  {
    key: "projectday",
    name: "ProjectDay",
    tagline: "An iOS climbing app my agents built",
    slideIds: ["B1", "B2", "B3", "B4", "B5", "B6", "B7", "B8"],
  },
  {
    key: "siteplus",
    name: "SitePlus+",
    tagline: "Analytics a real company runs on",
    slideIds: ["C1", "C2", "C3", "C4", "C5", "C6", "C7", "C8"],
  },
  {
    key: "tabvault",
    name: "TabVault",
    tagline: "Save a tab now, find it later",
    slideIds: ["D1", "D2", "D3", "D4", "D5"],
  },
];

const PROJECT_DAY_ROUTE_ALT =
  "ProjectDay route screen showing a V0 route at CORNER gym with its photo, send and attempt counts, and a Log climb button.";

export const SLIDES: Record<SlideId, Slide> = {
  "1": {
    kind: "intro",
    title: "Hi, I'm Leon",
    lines: [
      "Full-Stack Software Engineer",
      "AI Systems Builder",
      "MSCS Candidate, Northeastern University",
    ],
  },
  "2": {
    kind: "timeline",
    title: "From marketing to engineering",
    entries: [
      {
        date: "2017 to 2021",
        role: "Bachelor of International Business",
        org: "National Chengchi University, Taipei",
      },
      {
        date: "2021 to 2023",
        role: "Marketing Project Manager",
        org: "GoFreight, Taipei",
        opens: { slideId: "2b", key: "1" },
      },
      {
        date: "2023 to 2025",
        role: "Front-End Developer",
        org: "Exascend, Taipei",
        opens: { slideId: "2a", key: "2" },
      },
      {
        date: "2025 to 2027",
        role: "Master of Science in Computer Science",
        org: "Northeastern University, Seattle",
      },
    ],
  },
  "2a": {
    kind: "job",
    title: "Front-End Developer at Exascend",
    subtitle: "Taipei · Sep 2023 to Aug 2025",
    numbers: [
      ["70%", "less manual reporting, from an event-tracking system I built"],
      ["3.5x", "monthly active users on two sites I built from scratch"],
      ["48.8%", "more page views after SEO and accessibility audits"],
    ],
  },
  "2b": {
    kind: "job",
    title: "Marketing Project Manager at GoFreight",
    subtitle: "Taipei · Jul 2021 to Mar 2023",
    numbers: [
      ["67%", "higher conversion rate, from an A/B testing pipeline I coded"],
      ["$16.5K", "in MRR from a product launch I led"],
    ],
  },
  "3": {
    kind: "photo",
    title: "Based in Seattle, usually on snow or a wall",
    photos: [
      {
        src: "/IMG_6875.JPG",
        alt: "Leon on a snowboard on a snowy slope, giving a peace sign, with forested mountains behind.",
        caption: "Snowboarding",
      },
      {
        src: "/4D0BDA8A-B273-40DC-BD3D-3098AF6BBB73.JPG",
        alt: "Leon on an indoor bouldering wall, reaching for orange holds.",
        caption: "Bouldering",
      },
    ],
  },
  M: { kind: "menu", title: "Pick a project" },
  A1: {
    kind: "numbers",
    title: "Multi-Agent Development System",
    numbers: [
      ["3", "products shipped"],
      ["6", "agents on the dev team"],
      ["6", "skills created"],
    ],
  },
  A2: { kind: "workflow", title: "An AI dev team with a human in charge" },
  A3: {
    kind: "stack",
    title: "My role and stack",
    role: "Sole architect and builder",
    stack: ["Claude Code (subagents, skills, hooks)", "Bash", "Python", "Git"],
  },
  A4: {
    kind: "bullets",
    title: "It started with one AI agent losing the plot",
    bullets: [
      "Context drifts over long sessions",
      "Earlier decisions get overwritten",
      "No clean way to undo",
    ],
  },
  A5: {
    kind: "rolegrid",
    title: "So I split it into six focused agents",
    roles: [
      ["PM", "writes the requirements"],
      ["Doc-Sync", "one spec per module"],
      ["Engineer", "builds one module"],
      ["QA", "tests it in the running app"],
      ["Tech Lead", "reviews the whole phase"],
      ["Retrospective", "improves the system"],
    ],
  },
  A6: {
    kind: "bullets",
    title: "Each agent sees only what it needs",
    bullets: [
      "Only its own spec and files",
      "Scope check on every change",
      "Every handoff is a git commit",
      "Cost: one extra sync step",
    ],
  },
  A7: {
    kind: "bullets",
    title: "Then QA passed code it never ran",
    bullets: [
      "Early QA only read the code",
      "Fix: real server, real requests",
      "People check what machines can't",
    ],
  },
  A8: {
    kind: "bullets",
    title: "The system matters more than the prompt",
    bullets: [
      "Most fixes: boundaries, not prompts",
      "Result: 3 products, every step reviewable",
      "For your team: clear specs, small changes, honest tests",
    ],
  },
  B1: {
    kind: "numbers",
    title: "ProjectDay",
    numbers: [
      ["12", "modules"],
      ["13", "gyms in greater Taipei"],
      ["1,500+", "commits"],
    ],
  },
  B2: {
    kind: "shot",
    title: "A climbing log for Taiwan's gyms",
    bullets: [
      "Log a climb in 4 taps",
      "Watch beta for that exact route",
      "Submitted to the App Store",
    ],
    visual: {
      type: "single",
      src: "/projectday-screens.webp",
      alt: "Three ProjectDay screens in Traditional Chinese. Home shows saved gyms, a target route and new beta videos. Gyms lists climbing gyms with search and city filters. A route screen shows a V0 route at CORNER gym with its photo, send and attempt counts, and a Log climb button.",
      ratio: 1854 / 1300,
      framed: false,
    },
  },
  B3: {
    kind: "stack",
    title: "My role and stack",
    role: "Product owner; built with my multi-agent system",
    stack: [
      "React Native / Expo",
      "TypeScript",
      "Supabase (Postgres, Auth, Edge Functions)",
      "AWS (S3, MediaConvert, CloudFront, CDK)",
      "EAS",
      "GitHub Actions",
    ],
  },
  B4: {
    kind: "bullets",
    title: "I climb, and Taiwan's gyms had no app",
    bullets: [
      "Global apps target outdoor crags",
      "Beta videos lost on Instagram",
      "Local app only logs climbs",
    ],
  },
  B5: {
    kind: "shot",
    title: "So I put logging, beta and gyms in one app",
    bullets: [
      "Log a send in 4 taps",
      "Beta videos tied to each route",
      "Route lists for 13 gyms",
    ],
    visual: {
      type: "phones",
      items: [
        { src: "/projectday-route.webp", alt: PROJECT_DAY_ROUTE_ALT },
        {
          src: "/projectday-route-beta.webp",
          alt: "ProjectDay route screen scrolled to the Beta videos section, showing the thumbnail of a climber's beta video for a V0 route.",
        },
        {
          src: "/projectday-profile.webp",
          alt: "ProjectDay profile screen with climbing stats: top grade V10, 10 sends, 9 climbing days, and a bar chart of sends per grade.",
        },
      ],
    },
  },
  B6: {
    kind: "flow",
    title: "Beta videos needed a real video pipeline",
    flow: ["Upload", "S3", "MediaConvert", "CloudFront"],
    bullets: [
      "iPhone HDR looked overexposed",
      "Supabase had no CDN",
      "So I moved video to AWS",
      "Cost: a second cloud to run",
    ],
  },
  B7: {
    kind: "bullets",
    title: "Moving the videos hid a privacy hole",
    bullets: [
      "Backfill copied old videos to S3",
      "It trusted any path a user sent",
      "My audit caught it: owner-prefix check",
    ],
  },
  B8: {
    kind: "bullets",
    title: "Shipping to a real phone taught me mocks lie",
    bullets: [
      "Passed Jest, broke the iOS build",
      "Now: native build before QA",
      "Next: Android, offline logging",
    ],
  },
  C1: {
    kind: "numbers",
    title: "SitePlus+",
    numbers: [
      ["~60%", "less analytics work"],
      ["3+", "months in real use"],
      ["10+", "reports generated"],
    ],
  },
  C2: {
    kind: "shot",
    title: "Analytics, campaigns and SEO in one place",
    bullets: ["Designed, built and deployed alone", "Used by a real company"],
    visual: {
      type: "single",
      src: "/siteplusplus-home.jpg",
      alt: "Screenshot of the SitePlus+ home dashboard.",
      ratio: 2860 / 1488,
      framed: true,
    },
  },
  C3: {
    kind: "stack",
    title: "My role and stack",
    role: "Sole engineer, full stack and AWS",
    stack: [
      "Java 21 / Spring Boot",
      "Spring Security / JWT",
      "React / TypeScript",
      "Redux",
      "PostgreSQL",
      "Redis",
      "Docker",
      "GitHub Actions",
      "AWS (EC2, ALB, RDS, ElastiCache, S3, CloudFront)",
      "Cloudflare",
    ],
  },
  C4: {
    kind: "bullets",
    title: "A company lost hours to manual reports",
    bullets: [
      "Data spread across tools",
      "Same gathering every week",
      "Goal: install once, rely on it",
    ],
  },
  C5: {
    kind: "shot",
    title: "So I built one snippet and one dashboard",
    bullets: [
      "Snippet captures views, clicks, forms",
      "Dashboard: trends, pages, channels",
      "SEO auditor re-checks weekly",
    ],
    visual: {
      type: "single",
      src: "/siteplusplus-reports.jpeg",
      alt: "Screenshot of the SitePlus+ reports page.",
      ratio: 1920 / 996,
      framed: true,
    },
  },
  C6: {
    kind: "bullets",
    title: "But the snippet's endpoint had to be public",
    bullets: [
      "Visitors have no login",
      "Anyone writes, only the owner reads",
      "50 req/min per IP, shared in Redis",
    ],
  },
  C7: {
    kind: "bullets",
    title: "Going live behind Cloudflare broke CORS",
    bullets: [
      "Preflights never reached my server",
      "My logs showed nothing",
      "Fix: a Worker answers them",
    ],
  },
  C8: {
    kind: "bullets",
    title: "Real problems start where textbooks stop",
    bullets: [
      "Two servers broke a simple rate limit",
      "Next: sliding window, event-driven deploys",
      "For your team: I've owned production end to end",
    ],
  },
  D1: {
    kind: "shot",
    title: "Save a tab now, find it later",
    bullets: ["AI summaries and reminders", "Deployed on AWS, now offline"],
    visual: {
      type: "single",
      src: "/tabvault-home.png",
      alt: "Screenshot of the TabVault web app home screen.",
      ratio: 2878 / 1748,
      framed: true,
    },
  },
  D2: {
    kind: "stack",
    title: "My role and stack",
    role: "Orchestrator and reviewer; built by my multi-agent system",
    stack: [
      "Java 21 / Spring Boot",
      "React / TypeScript PWA",
      "Chrome Extension (MV3)",
      "PostgreSQL",
      "Redis",
      "Quartz",
      "Claude API",
      "AWS ECS Fargate",
    ],
  },
  D3: {
    kind: "bullets",
    title: "Open tabs pile up, then get lost",
    bullets: [
      'Tabs kept "for later" slow the browser',
      "Closing them loses the content",
      "I also needed a real test for my agents",
    ],
  },
  D4: {
    kind: "bullets",
    title: "So saving takes one click, and AI works after",
    bullets: [
      "Extension saves and returns instantly",
      "A worker asks Claude for summary and deadlines",
      "Search and reminders build on that",
    ],
  },
  D5: {
    kind: "bullets",
    title: "Deploying to AWS exposed cloud-only bugs",
    bullets: [
      "Health check behind login: no traffic",
      "ARM image on x86 servers",
      "Each fix became a deploy checklist item",
    ],
  },
};

export function projectOfSlide(slideId: SlideId): ProjectInfo | null {
  return PROJECTS.find((project) => project.slideIds.includes(slideId)) ?? null;
}

export function parseProjectKey(value: string | null): ProjectKey | null {
  return PROJECTS.find((project) => project.key === value)?.key ?? null;
}

export function collectImageUrls(): string[] {
  const urls = new Set<string>();
  for (const slide of Object.values(SLIDES)) {
    if (slide.kind === "photo") {
      for (const photo of slide.photos) urls.add(photo.src);
    } else if (slide.kind === "shot") {
      if (slide.visual.type === "single") urls.add(slide.visual.src);
      else for (const item of slide.visual.items) urls.add(item.src);
    }
  }
  return [...urls];
}
