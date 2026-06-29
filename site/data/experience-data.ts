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
    endDate: "Jun 2025",
    bullets: [
      "Designed and implemented a custom JavaScript event-tracking system posting structured user interactions to CRM and GA4 APIs, automating cross-platform data capture and cutting manual reporting by 70%.",
      "Led end-to-end development of two customer-facing websites from scratch (HTML, CSS, JavaScript), growing monthly active users by 350% and increasing average session engagement time by 22.3%.",
      "Ran technical SEO and accessibility audits (Google Search Console, Lighthouse, WCAG) validated via A/B testing, driving a 48.84% increase in page views while ensuring inclusive, accessible experiences.",
    ],
    tags: ["JavaScript", "HTML", "CSS", "GA4", "SEO", "Lighthouse", "WCAG"],
  },
  {
    title: "Growth Marketer / Marketing Project Manager",
    company: "GoFreight",
    location: "Taipei, Taiwan",
    startDate: "Jul 2021",
    endDate: "Mar 2023",
    bullets: [
      "Planned and executed conversion rate optimization experiments, growing conversion from 0.38% to 2.55%, and improved technical SEO by raising Lighthouse score from 20 to 70.",
      "Managed Google Ads campaigns to cut cost per demo from $5,000 to below $2,000, and expanded into the China market via Baidu Ads, generating $3,150 in inbound pipeline.",
      "Planned and executed an SEO migration strategy that held the primary keyword to a one-rank drop, and organized the JCTrans GFFC 12th event achieving a $16,500 target pipeline.",
    ],
    tags: ["Project Planning", "Google Ads", "Baidu Ads", "SEO", "CRO", "A/B Testing", "Analytics"],
  },
];

export const education: EducationEntry[] = [
  {
    degree: "MS in Computer Science",
    institution: "Northeastern University",
    gpa: "3.9 / 4.0",
    period: "Expected Dec 2027",
    location: "Seattle, WA",
  },
  {
    degree: "BA in International Business",
    institution: "National Chengchi University",
    gpa: "3.5 / 4.0",
    period: "Completed",
    location: "Taipei, Taiwan",
  },
];
