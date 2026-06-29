import type { Metadata } from "next";
import { experience, education } from "@/data/experience-data";

export const metadata: Metadata = {
  title: "Experience — Leon Wu",
  description:
    "Professional experience and education of Tsan-Yu (Leon) Wu — Front-End Developer at Exascend, Growth Marketer at GoFreight, MS in Computer Science at Northeastern.",
  openGraph: {
    title: "Experience — Leon Wu",
    description:
      "Professional experience and education of Tsan-Yu (Leon) Wu.",
    type: "website",
    url: "https://your-domain.com/experience",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://your-domain.com/experience",
  },
  twitter: {
    card: "summary_large_image",
    title: "Experience — Leon Wu",
    description: "Professional experience and education of Tsan-Yu (Leon) Wu.",
    images: ["/og-image.png"],
  },
};

export default function ExperiencePage() {
  return (
    <div className="flex flex-col gap-10">
      <h1 className="text-3xl font-medium tracking-tight text-[var(--text)]">
        Experience
      </h1>

      <section aria-label="Work experience">
        <ul className="flex flex-col gap-8">
          {experience.map((role) => (
            <li key={`${role.company}-${role.startDate}`} className="flex flex-col gap-3">
              <div className="flex flex-col gap-0.5">
                <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-0.5">
                  <h2 className="text-base font-medium text-[var(--text)]">
                    {role.title}
                  </h2>
                  <span className="text-sm text-[var(--text-muted)] shrink-0">
                    {role.startDate} – {role.endDate}
                  </span>
                </div>
                <p className="text-sm text-[var(--text-muted)]">
                  {role.company} · {role.location}
                </p>
              </div>
              <ul className="flex flex-col gap-2 pl-4 border-l border-[var(--border)]">
                {role.bullets.map((bullet, i) => (
                  <li key={i} className="text-sm leading-relaxed text-[var(--text)]">
                    {bullet}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>

      <section aria-label="Education">
        <h2 className="text-lg font-medium text-[var(--text)] mb-4">Education</h2>
        <ul className="flex flex-col gap-5">
          {education.map((entry) => (
            <li key={entry.institution} className="flex flex-col gap-0.5">
              <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-0.5">
                <span className="text-base font-medium text-[var(--text)]">
                  {entry.institution}
                </span>
                <span className="text-sm text-[var(--text-muted)] shrink-0">
                  {entry.period}
                </span>
              </div>
              <p className="text-sm text-[var(--text-muted)]">
                {entry.degree} · GPA {entry.gpa} · {entry.location}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
