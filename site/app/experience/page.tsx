import type { Metadata } from "next";
import { experience, education } from "@/data/experience-data";

export const metadata: Metadata = {
  title: "Experience — Leon Wu",
  description:
    "Professional experience and education of Tsan-Yu (Leon) Wu — Front-End Developer at Exascend, Growth Marketer at GoFreight, MS in Computer Science at Northeastern.",
  openGraph: {
    title: "Experience — Leon Wu",
    description: "Professional experience and education of Tsan-Yu (Leon) Wu.",
    type: "website",
    url: "https://your-domain.com/experience",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  alternates: { canonical: "https://your-domain.com/experience" },
  twitter: {
    card: "summary_large_image",
    title: "Experience — Leon Wu",
    description: "Professional experience and education of Tsan-Yu (Leon) Wu.",
    images: ["/og-image.png"],
  },
};

export default function ExperiencePage() {
  return (
    <div className="px-8 py-16 max-w-2xl mx-auto w-full flex flex-col gap-12">
      <h1 className="text-[30px] font-semibold leading-9 text-[var(--text)]">
        Experience
      </h1>

      {/* Work timeline */}
      <section aria-label="Work experience">
        <ul className="flex flex-col">
          {experience.map((role, i) => (
            <li
              key={`${role.company}-${role.startDate}`}
              className="grid grid-cols-[9rem_1fr]"
            >
              {/* Left: date */}
              <div className="pt-1 pr-6 text-right">
                <p className="text-xs text-[var(--text-muted)] leading-5">
                  {role.startDate} – {role.endDate}
                </p>
              </div>

              {/* Right: content with dot + line */}
              <div
                className={`relative pl-7 ${
                  i < experience.length - 1 ? "pb-10" : ""
                }`}
              >
                {/* Vertical line (all but last entry) */}
                {i < experience.length - 1 && (
                  <div className="absolute left-[4px] top-4 bottom-0 w-px bg-[var(--border)]" />
                )}
                {/* Circle dot */}
                <div className="absolute left-0 top-[5px] w-[9px] h-[9px] rounded-full border-2 border-[var(--text-muted)] bg-[var(--bg)]" />

                {/* Role + company */}
                <h2 className="text-base font-semibold text-[var(--text)] leading-6 mb-1">
                  {role.title}
                  <span className="text-[var(--text-muted)] font-normal">
                    {" "}· {role.company}
                  </span>
                </h2>
                <p className="text-xs text-[var(--text-muted)] mb-3">
                  {role.location}
                </p>

                {/* Bullets */}
                <ul className="flex flex-col gap-2 mb-4">
                  {role.bullets.map((bullet, j) => (
                    <li
                      key={j}
                      className="text-sm leading-7 text-[var(--text-muted)] flex gap-2"
                    >
                      <span className="shrink-0 mt-0.5 text-[var(--text-muted)]">
                        –
                      </span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5">
                  {role.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-0.5 rounded bg-[var(--surface)] text-[var(--text-muted)] border border-[var(--border)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Education */}
      <section aria-label="Education">
        <h2 className="text-xl font-semibold text-[var(--text)] mb-6">
          Education
        </h2>
        <ul className="flex flex-col">
          {education.map((entry, i) => (
            <li
              key={entry.institution}
              className="grid grid-cols-[9rem_1fr]"
            >
              {/* Left: period */}
              <div className="pt-1 pr-6 text-right">
                <p className="text-xs text-[var(--text-muted)] leading-5">
                  {entry.period}
                </p>
              </div>

              {/* Right: content with dot + line */}
              <div
                className={`relative pl-7 ${
                  i < education.length - 1 ? "pb-8" : ""
                }`}
              >
                {i < education.length - 1 && (
                  <div className="absolute left-[4px] top-4 bottom-0 w-px bg-[var(--border)]" />
                )}
                <div className="absolute left-0 top-[5px] w-[9px] h-[9px] rounded-full border-2 border-[var(--text-muted)] bg-[var(--bg)]" />

                <h3 className="text-base font-semibold text-[var(--text)] leading-6 mb-0.5">
                  {entry.degree}
                  <span className="text-[var(--text-muted)] font-normal">
                    {" "}· {entry.institution}
                  </span>
                </h3>
                <p className="text-xs text-[var(--text-muted)]">
                  {entry.location} · GPA {entry.gpa}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
