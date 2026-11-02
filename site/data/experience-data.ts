export interface ExperienceEntry {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  bullets: string[];
  tags: string[];
}

export interface EducationEntry {
  degree: string;
  institution: string;
  gpa: string;
  period: string;
  location: string;
}

export const experience: ExperienceEntry[] = [
  {
    title: "Front-End Developer",
    company: "Exascend",
    location: "Taipei, Taiwan",
    startDate: "Sep 2023",
    endDate: "Aug 2025",
    bullets: [
      "Built a custom JavaScript event-tracking system posting structured user interactions to CRM and GA4 APIs, cutting manual reporting 70%.",
      "Two customer-facing websites went from requirements to shipped product under my ownership (HTML, CSS, JavaScript), growing monthly active users 3.5x, from 12,000 to 41,350, and increasing average session engagement time by 22.3%.",
      "Page views rose 48.8% after a round of technical SEO and accessibility audits (Google Search Console, Lighthouse, WCAG) that I validated with A/B testing.",
    ],
    tags: ["JavaScript", "HTML", "CSS", "GA4", "SEO", "Lighthouse", "WCAG"],
  },
  {
    title: "Marketing Project Manager",
    company: "GoFreight",
    location: "Taipei, Taiwan",
    startDate: "Jul 2021",
    endDate: "Mar 2023",
    bullets: [
      "Built and maintained a front-end codebase (HTML, CSS, JavaScript) with an A/B testing pipeline of variant logic and event tracking, lifting conversion rate 67% through iterative experimentation.",
      "Led cross-functional teams through a product launch, coordinating tracking integrations and a cross-channel strategy that generated $16.5K in MRR.",
    ],
    tags: ["HTML", "CSS", "JavaScript", "A/B Testing", "Event Tracking", "Project Management"],
  },
];

export const education: EducationEntry[] = [
  {
    degree: "Master of Science in Computer Science",
    institution: "Northeastern University",
    gpa: "3.9 / 4.0",
    period: "Jul 2025 – Dec 2027 (Expected)",
    location: "Seattle, WA",
  },
  {
    degree: "Bachelor of International Business",
    institution: "National Chengchi University",
    gpa: "3.5 / 4.0",
    period: "Sep 2017 – Jun 2021",
    location: "Taipei, Taiwan",
  },
];
