import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Leon Wu",
  description:
    "About Tsan-Yu (Leon) Wu — a full-stack engineer who learned to code by building products that real companies depend on.",
  openGraph: {
    title: "About — Leon Wu",
    description:
      "About Tsan-Yu (Leon) Wu — a full-stack engineer who learned to code by building products that real companies depend on.",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About — Leon Wu",
    description:
      "About Tsan-Yu (Leon) Wu — a full-stack engineer who learned to code by building products that real companies depend on.",
    images: ["/og-image.png"],
  },
};

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-3xl font-medium tracking-tight text-[var(--text)]">
        About
      </h1>

      <div className="flex flex-col gap-5 max-w-prose">
        <p className="text-base leading-relaxed text-[var(--text)]">
          My path into engineering did not start in a computer science
          classroom. I studied International Business in Taipei and spent the
          early part of my career on the product and marketing side, where I
          taught myself to code so I could build the things I was responsible
          for shipping. That habit grew into building full-stack products that
          real companies and real users came to depend on. I am now pursuing my
          MS in Computer Science at Northeastern to strengthen the fundamentals
          beneath the work I had already been doing.
        </p>
        <p className="text-base leading-relaxed text-[var(--text)]">
          The pivot is the point. I learned to engineer by shipping software
          that people actually use, and I bring that same bias toward real,
          working results to everything I build, whether that is a production
          analytics platform or a system of AI agents that ships software on
          its own.
        </p>
      </div>

      <section aria-label="Education">
        <h2 className="text-lg font-medium text-[var(--text)] mb-4">Education</h2>
        <ul className="flex flex-col gap-4">
          <li className="flex flex-col gap-0.5">
            <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-0.5">
              <span className="text-base font-medium text-[var(--text)]">
                Northeastern University
              </span>
              <span className="text-sm text-[var(--text-muted)] shrink-0">
                Expected Dec 2027
              </span>
            </div>
            <p className="text-sm text-[var(--text-muted)]">
              MS in Computer Science · GPA 3.9 / 4.0 · Seattle, WA
            </p>
          </li>
          <li className="flex flex-col gap-0.5">
            <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-0.5">
              <span className="text-base font-medium text-[var(--text)]">
                National Chengchi University
              </span>
              <span className="text-sm text-[var(--text-muted)] shrink-0">
                Completed
              </span>
            </div>
            <p className="text-sm text-[var(--text-muted)]">
              BA in International Business · GPA 3.5 / 4.0 · Taipei, Taiwan
            </p>
          </li>
        </ul>
      </section>
    </div>
  );
}
