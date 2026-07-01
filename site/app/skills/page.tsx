import type { Metadata } from "next";
import { skillGroups } from "@/data/skills-data";

export const metadata: Metadata = {
  title: "Skills — Leon Wu",
  description:
    "Technical skills of Tsan-Yu (Leon) Wu — languages, backend, frontend, databases, cloud, DevOps, analytics, and design.",
  openGraph: {
    title: "Skills — Leon Wu",
    description:
      "Technical skills of Tsan-Yu (Leon) Wu — languages, backend, frontend, cloud, DevOps, and more.",
    type: "website",
    url: "https://www.leon-wu.com/skills",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://www.leon-wu.com/skills",
  },
  twitter: {
    card: "summary_large_image",
    title: "Skills — Leon Wu",
    description:
      "Technical skills of Tsan-Yu (Leon) Wu — languages, backend, frontend, cloud, DevOps, and more.",
    images: ["/og-image.png"],
  },
};

export default function SkillsPage() {
  return (
    <div className="px-8 py-16 max-w-2xl mx-auto w-full flex flex-col gap-8">
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-medium tracking-tight text-[var(--text)] mt-5 md:mt-0">
          Skills
        </h1>
        <p className="text-sm text-[var(--text-muted)]">
          Languages, frameworks, and tools I work with.
        </p>
      </div>

      <div className="flex flex-col gap-7">
        {skillGroups.map((group) => (
          <section key={group.category} aria-label={group.category}>
            <h2 className="text-sm font-medium uppercase tracking-wider text-[var(--text-muted)] mb-3">
              {group.category}
            </h2>
            <ul className="flex flex-wrap gap-2" role="list">
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="px-3 py-1 rounded-full text-sm border border-[var(--border)] text-[var(--text)] bg-[var(--surface)]"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
