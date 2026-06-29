import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home — Leon Wu",
  description:
    "Leon Wu is a full-stack engineer and CS master's student at Northeastern, building production systems and multi-agent software.",
  openGraph: {
    title: "Home — Leon Wu",
    description:
      "Full-stack engineer and CS master's student at Northeastern, seeking a Summer 2026 software engineering internship.",
    type: "website",
    url: "https://your-domain.com/",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://your-domain.com/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Home — Leon Wu",
    description:
      "Full-stack engineer and CS master's student at Northeastern, seeking a Summer 2026 software engineering internship.",
    images: ["/og-image.png"],
  },
};

export default function HomePage() {
  return (
    <section className="flex flex-col gap-6 py-4">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-medium tracking-tight text-[var(--text)]">
          Hey, I&apos;m Leon
        </h1>
        <h2 className="text-xl text-[var(--text-muted)]">Full-Stack Engineer</h2>
      </div>

      <p className="text-base leading-relaxed text-[var(--text)] max-w-prose">
        I&apos;m a full-stack engineer and CS master&apos;s student at Northeastern. I build
        production systems by hand, from the database schema to the cloud
        deployment, and I design multi-agent systems that plan, implement, and
        ship software end to end. What I care about most is the engineering
        that makes software hold up in the real world, not just in a demo.
      </p>

      <p className="text-sm text-[var(--text-muted)] max-w-prose">
        Currently pursuing my MS in Computer Science at Northeastern and
        looking for a Summer 2026 software engineering internship across
        full-stack, frontend, or backend roles.
      </p>

      <div className="flex flex-wrap gap-3 pt-1">
        <a
          href="https://www.linkedin.com/in/leon-wu-tsan-yu/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 rounded text-sm font-medium bg-[var(--accent)] text-[var(--bg)] hover:bg-[var(--accent-hover)] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)]"
        >
          Connect me on LinkedIn
        </a>
        <Link
          href="/contact"
          className="inline-flex items-center px-4 py-2 rounded text-sm font-medium border border-[var(--border)] text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)]"
        >
          Reach out
        </Link>
      </div>
    </section>
  );
}
