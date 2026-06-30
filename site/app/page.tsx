import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/data/projects-data";

export const metadata: Metadata = {
  title: "Home — Leon Wu",
  description:
    "Leon Wu is a full-stack engineer and CS master's student at Northeastern, building production systems and multi-agent software.",
  openGraph: {
    title: "Home — Leon Wu",
    description:
      "Full-stack engineer and CS master's student at Northeastern, seeking a 2026/2027 software engineering internship.",
    type: "website",
    url: "https://www.leon-wu.com/",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://www.leon-wu.com/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Home — Leon Wu",
    description:
      "Full-stack engineer and CS master's student at Northeastern, seeking a 2026/2027 software engineering internship.",
    images: ["/og-image.png"],
  },
};

export default function HomePage() {
  return (
    <div className="px-8 py-16 max-w-2xl mx-auto w-full flex flex-col gap-12">
      {/* Hero */}
      <section className="flex flex-col gap-4">
        <h1 className="text-[30px] font-semibold leading-9 text-[var(--text)]">
          Hey, I&apos;m Leon 👋
        </h1>

        <p className="text-base leading-7 text-[var(--text)]">
          I&apos;m a full-stack engineer and CS master&apos;s student at Northeastern. I build
          production systems by hand. From the database schema to the cloud
          deployment. And I design multi-agent systems that plan, implement, and
          ship software end to end.
        </p>

        <p className="text-base leading-7 text-[var(--text-muted)]">
          Currently seeking a 2026/2027 software engineering internship across
          full-stack, frontend, or backend roles.
        </p>

        <div className="flex flex-wrap gap-3 pt-1">
          <a
            href="https://www.linkedin.com/in/leon-wu-tsan-yu/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 rounded text-sm font-medium bg-[var(--accent)] text-[var(--bg)] hover:bg-[var(--accent-hover)] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)]"
          >
            Connect on LinkedIn
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center px-4 py-2 rounded text-sm font-medium border border-[var(--border)] text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)]"
          >
            Reach out
          </Link>
          <a
            href="/Leon_cv.pdf"
            download="Leon_Wu_Resume.pdf"
            className="inline-flex items-center px-4 py-2 rounded text-sm font-medium border border-[var(--border)] text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)]"
          >
            Download CV
          </a>
        </div>
      </section>

      {/* Projects list */}
      <section>
        <h2 className="text-xl font-semibold leading-7 text-[var(--text)] mb-6">
          Projects
        </h2>

        <ul className="flex flex-col divide-y divide-[var(--border)]">
          {projects.map((project) => (
            <li key={project.slug}>
              <Link
                href={`/projects/${project.slug}`}
                className="flex items-center gap-4 py-3 group hover:bg-[var(--hover)] -mx-2 px-2 rounded transition-colors"
              >
                <span className="flex-1 min-w-0">
                  <span className="text-sm text-[var(--text)] group-hover:text-[var(--accent)] transition-colors">
                    {project.title}
                  </span>
                </span>
                <span className="hidden sm:block flex-shrink-0 text-xs text-[var(--text-muted)] text-right max-w-[200px] truncate">
                  {project.tech}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
