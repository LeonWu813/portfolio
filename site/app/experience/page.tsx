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
    <div className="flex flex-col gap-12">
      <h1 className="text-3xl font-medium tracking-tight text-[var(--text)]">
        Experience
      </h1>

      {/* Work */}
      <section aria-label="Work experience">
        <ul className="flex flex-col gap-10">
          {experience.map((role) => (
            <li key={`${role.company}-${role.startDate}`}>
              <p className="text-xs font-medium uppercase tracking-wider text-[var(--text-muted)] mb-1">
                {role.startDate} – {role.endDate}
              </p>
              <h2 className="text-base font-medium text-[var(--text)] mb-3">
                {role.title} · {role.company}
              </h2>
              <ul className="flex flex-col gap-2">
                {role.bullets.map((bullet, i) => (
                  <li
                    key={i}
                    className="text-sm leading-relaxed text-[var(--text-muted)] flex gap-2"
                  >
                    <span className="shrink-0 mt-0.5 text-[var(--accent)]">—</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>

      {/* Education */}
      <section aria-label="Education">
        <h2 className="text-lg font-medium text-[var(--text)] mb-6">Education</h2>
        <ul className="flex flex-col gap-8">
          {education.map((entry) => (
            <li key={entry.institution}>
              <p className="text-xs font-medium uppercase tracking-wider text-[var(--text-muted)] mb-1">
                {entry.period} · {entry.location}
              </p>
              <h3 className="text-base font-medium text-[var(--text)] mb-0.5">
                {entry.degree} · {entry.institution}
              </h3>
              <p className="text-sm text-[var(--text-muted)]">GPA {entry.gpa}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
