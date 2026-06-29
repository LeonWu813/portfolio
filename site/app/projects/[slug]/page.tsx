import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects-data";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} — Leon Wu`,
    description: project.description,
    openGraph: {
      title: `${project.title} — Leon Wu`,
      description: project.description,
      type: "website",
      url: `https://your-domain.com/projects/${slug}`,
      images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} — Leon Wu`,
      description: project.description,
      images: ["/og-image.png"],
    },
    alternates: { canonical: `https://your-domain.com/projects/${slug}` },
  };
}

function InlineBold({ text }: { text: string }) {
  const parts = text.split(/\*\*(.+?)\*\*/g);
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? <strong key={i}>{part}</strong> : part
      )}
    </>
  );
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <article className="px-8 py-12 max-w-2xl">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-[28px] font-semibold leading-9 text-[var(--text)] mb-2">
          {project.title}
        </h1>
        <p className="text-sm text-[var(--text-muted)] mb-3">{project.atAGlance}</p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-0.5 rounded bg-[var(--surface)] text-[var(--text-muted)] border border-[var(--border)]"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* External links */}
        {project.links.length > 0 && (
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            {project.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[var(--accent)] hover:underline"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* Description pull-quote */}
      <p className="text-base leading-7 text-[var(--text)] font-medium mb-10 border-l-2 border-[var(--accent)] pl-4">
        {project.description}
      </p>

      {/* Sections */}
      <div className="flex flex-col gap-10">
        {project.sections.map((section) => (
          <section key={section.heading}>
            <h2 className="text-base font-semibold text-[var(--text)] mb-3">
              {section.heading}
            </h2>
            <div className="flex flex-col gap-4">
              {section.paragraphs.map((paragraph, i) => (
                <p key={i} className="text-base leading-7 text-[var(--text-muted)]">
                  <InlineBold text={paragraph} />
                </p>
              ))}
            </div>
          </section>
        ))}
      </div>
    </article>
  );
}
