"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ProjectEntry } from "@/data/projects-data";

export default function ProjectMobileNav({ projects }: { projects: ProjectEntry[] }) {
  const pathname = usePathname();

  return (
    <div className="lg:hidden flex-shrink-0 flex gap-2 overflow-x-auto px-4 py-2 border-b border-[var(--border)] bg-[var(--surface)]">
      {projects.map((project) => {
        const isActive = pathname === `/projects/${project.slug}` || pathname === `/projects/${project.slug}/`;
        return (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className={`flex-shrink-0 text-xs px-3 py-1.5 rounded-full border transition-colors ${
              isActive
                ? "bg-[var(--text)] text-[var(--bg)] border-[var(--text)]"
                : "border-[var(--border)] text-[var(--text-muted)] hover:border-[var(--text-muted)]"
            }`}
          >
            {project.title}
          </Link>
        );
      })}
    </div>
  );
}
