export interface SkillGroup {
  category: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    skills: ["Java", "TypeScript", "JavaScript", "Python", "SQL", "C++"],
  },
  {
    category: "Backend",
    skills: [
      "Spring Boot",
      "Spring Security",
      "Spring Data JPA/Hibernate",
      "JWT",
      "PostgreSQL",
      "Redis",
      "REST APIs",
      "JUnit/Mockito",
    ],
  },
  {
    category: "Frontend",
    skills: ["React", "Redux Toolkit/Zustand", "TanStack Query", "Tailwind CSS"],
  },
  {
    category: "Infrastructure & DevOps",
    skills: [
      "Git",
      "Docker",
      "CI/CD (GitHub Actions)",
      "AWS (EC2, ALB, RDS, ElastiCache, S3, CloudFront)",
    ],
  },
  {
    category: "AI & Agentic Development",
    skills: [
      "Claude Code (subagents, skills, hooks)",
      "agentic workflow orchestration",
      "LLM API integration",
    ],
  },
  {
    category: "Also",
    skills: [
      "C",
      "HTML",
      "CSS",
      "Vite",
      "Axios",
      "Recharts",
      "Nginx",
      "Maven",
      "Quartz",
      "AWS ECS Fargate",
      "Claude API",
      "Figma",
      "GA4",
      "SEO",
      "WCAG",
    ],
  },
];
