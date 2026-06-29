import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Leon Wu",
  description:
    "Get in touch with Tsan-Yu (Leon) Wu — email, LinkedIn, GitHub, and resume.",
  openGraph: {
    title: "Contact — Leon Wu",
    description: "Get in touch with Tsan-Yu (Leon) Wu.",
    type: "website",
    url: "https://your-domain.com/contact",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://your-domain.com/contact",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact — Leon Wu",
    description: "Get in touch with Tsan-Yu (Leon) Wu.",
    images: ["/og-image.png"],
  },
};

export default function ContactPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-medium tracking-tight text-[var(--text)]">
          Contact
        </h1>
        <p className="text-base text-[var(--text-muted)] max-w-prose">
          Looking for a Summer 2026 internship in full-stack, frontend, or
          backend engineering. If you&apos;re working on something interesting,
          I&apos;d love to hear about it.
        </p>
      </div>

      <ul className="flex flex-col gap-4">
        <li className="flex flex-col gap-0.5">
          <span className="text-xs font-medium uppercase tracking-wider text-[var(--text-muted)]">
            Email
          </span>
          <a
            href="mailto:leon.wu.tsan.yu@gmail.com"
            className="text-base text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)] rounded"
          >
            leon.wu.tsan.yu@gmail.com
          </a>
        </li>

        <li className="flex flex-col gap-0.5">
          <span className="text-xs font-medium uppercase tracking-wider text-[var(--text-muted)]">
            LinkedIn
          </span>
          <a
            href="https://www.linkedin.com/in/leon-wu-tsan-yu/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)] rounded"
          >
            linkedin.com/in/leon-wu-tsan-yu
          </a>
        </li>

        <li className="flex flex-col gap-0.5">
          <span className="text-xs font-medium uppercase tracking-wider text-[var(--text-muted)]">
            GitHub
          </span>
          <a
            href="https://github.com/LeonWu813"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)] rounded"
          >
            github.com/LeonWu813
          </a>
        </li>

        <li className="flex flex-col gap-0.5">
          <span className="text-xs font-medium uppercase tracking-wider text-[var(--text-muted)]">
            Resume
          </span>
          <a
            href="/Leon_cv.pdf"
            download="Leon_Wu_Resume.pdf"
            className="text-base text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)] rounded"
          >
            Download resume (PDF)
          </a>
        </li>
      </ul>
    </div>
  );
}
