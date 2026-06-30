import type { Metadata } from "next";
import { experience, education, type ExperienceEntry, type EducationEntry } from "@/data/experience-data";

export const metadata: Metadata = {
  title: "Experience — Leon Wu",
  description:
    "Professional experience and education of Tsan-Yu (Leon) Wu — Front-End Developer at Exascend, Growth Marketer at GoFreight, MS in Computer Science at Northeastern.",
  openGraph: {
    title: "Experience — Leon Wu",
    description: "Professional experience and education of Tsan-Yu (Leon) Wu.",
    type: "website",
    url: "https://www.leon-wu.com/experience",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  alternates: { canonical: "https://www.leon-wu.com/experience" },
  twitter: {
    card: "summary_large_image",
    title: "Experience — Leon Wu",
    description: "Professional experience and education of Tsan-Yu (Leon) Wu.",
    images: ["/og-image.png"],
  },
};

const MONTHS: Record<string, number> = {
  Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
  Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11,
};

function parseSortDate(date: string): number {
  const [mon, year] = date.split(" ");
  return parseInt(year) * 12 + (MONTHS[mon] ?? 0);
}

type TimelineItem =
  | { kind: "work"; data: ExperienceEntry }
  | { kind: "education"; data: EducationEntry };

const timeline: TimelineItem[] = [
  ...experience.map((e): TimelineItem => ({ kind: "work", data: e })),
  ...education.map((e): TimelineItem => ({ kind: "education", data: e })),
].sort((a, b) => {
  const startA = a.kind === "work" ? a.data.startDate : a.data.startDate;
  const startB = b.kind === "work" ? b.data.startDate : b.data.startDate;
  return parseSortDate(startB) - parseSortDate(startA);
});

export default function ExperiencePage() {
  return (
    <div className="px-8 py-16 max-w-2xl mx-auto w-full flex flex-col gap-12">
      <h1 className="text-[30px] font-semibold leading-9 text-[var(--text)]">
        Experience
      </h1>

      <section aria-label="Timeline">
        <ul className="flex flex-col">
          {timeline.map((item, i) => {
            const isLast = i === timeline.length - 1;
            const isWork = item.kind === "work";

            const startDate = item.data.startDate;
            const endDate = isWork ? item.data.endDate : item.data.endDate;
            const key = isWork
              ? `${item.data.company}-${startDate}`
              : `${item.data.institution}-${startDate}`;

            return (
              <li key={key} className="grid grid-cols-[9rem_1fr]">
                {/* Left: date */}
                <div className="pt-1 pr-6 text-right">
                  <p className="text-xs text-[var(--text-muted)] leading-5">
                    {startDate} – {endDate}
                  </p>
                </div>

                {/* Right: content with dot + line */}
                <div className={`relative pl-7 ${!isLast ? "pb-10" : ""}`}>
                  {!isLast && (
                    <div className="absolute left-[4px] top-4 bottom-0 w-px bg-[var(--border)]" />
                  )}
                  <div className={`absolute left-0 top-[5px] w-[9px] h-[9px] rounded-full border-2 ${
                    endDate.startsWith("Expected") || endDate === "Present"
                      ? "border-[var(--accent)] bg-[var(--accent)]"
                      : "border-[var(--text-muted)] bg-[var(--bg)]"
                  }`} />

                  {isWork ? (
                    <>
                      <h2 className="text-base font-semibold text-[var(--text)] leading-6 mb-1">
                        {item.data.title}
                        <span className="text-[var(--text-muted)] font-normal">
                          {" "}· {item.data.company}
                        </span>
                      </h2>
                      <p className="text-xs text-[var(--text-muted)] mb-3">
                        {item.data.location}
                      </p>
                      <ul className="flex flex-col gap-2 mb-4">
                        {item.data.bullets.map((bullet, j) => (
                          <li
                            key={j}
                            className="text-sm leading-7 text-[var(--text-muted)] flex gap-2"
                          >
                            <span className="shrink-0 mt-0.5 text-[var(--text-muted)]">–</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-1.5">
                        {item.data.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-2 py-0.5 rounded bg-[var(--surface)] text-[var(--text-muted)] border border-[var(--border)]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </>
                  ) : (
                    <>
                      <h2 className="text-base font-semibold text-[var(--text)] leading-6 mb-0.5">
                        {item.data.degree}
                        <span className="text-[var(--text-muted)] font-normal">
                          {" "}· {item.data.institution}
                        </span>
                      </h2>
                      <p className="text-xs text-[var(--text-muted)]">
                        {item.data.location} · GPA {item.data.gpa}
                      </p>
                    </>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
