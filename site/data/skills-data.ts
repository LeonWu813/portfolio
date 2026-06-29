export interface SkillGroup {
  category: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    skills: ["Java", "JavaScript", "TypeScript", "Python", "SQL", "C++", "C", "HTML", "CSS"],
  },
  {
    category: "Backend",
    skills: [
      "Spring Boot",
      "Spring Security",
      "Spring Data JPA",
      "Hibernate",
      "JWT",
      "REST APIs",
      "JUnit",
      "Mockito",
    ],
  },
  {
    category: "Frontend",
    skills: ["React", "Redux Toolkit", "Vite", "Axios", "Recharts"],
  },
  {
    category: "Databases and Cloud",
    skills: [
      "PostgreSQL",
      "Redis",
      "AWS (EC2, ALB, RDS, ElastiCache, S3, CloudFront)",
    ],
  },
  {
    category: "DevOps and Tools",
    skills: ["Docker", "GitHub Actions", "Nginx", "Git", "Maven"],
  },
  {
    category: "Analytics and Design",
    skills: ["Figma", "GA4", "SEO", "WCAG"],
  },
];
