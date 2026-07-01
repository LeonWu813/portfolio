"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ProjectEntry } from "@/data/projects-data";

export default function ProjectList({ projects }: { projects: ProjectEntry[] }) {
  const pathname = usePathname();

  return (
    <>
      {/* Mobile: horizontal scrollable project nav */}
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

    <aside className="hidden lg:flex lg:flex-col w-64 xl:w-72 flex-shrink-0 border-r border-[var(--border)] bg-[var(--surface)] overflow-y-auto">
      {/* Header */}
      <div className="sticky top-0 z-10 border-b border-[var(--border)] bg-[var(--surface)] px-5 py-3 flex items-center justify-between">
        <span className="text-sm font-semibold tracking-tight text-[var(--text)]">
          Projects
        </span>
        <span className="text-xs text-[var(--text-muted)]">{projects.length}</span>
      </div>

      {/* List */}
      <div className="p-3 flex flex-col gap-1">
        {projects.map((project) => {
          const isActive = pathname === `/projects/${project.slug}` || pathname === `/projects/${project.slug}/`;
          return (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className={`flex flex-col gap-1 rounded-lg p-2 transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)] ${
                isActive
                  ? "bg-[var(--text)] text-[var(--bg)]"
                  : "hover:bg-[var(--hover)] text-[var(--text)]"
              }`}
            >
              <span className="font-medium text-sm leading-5 line-clamp-2">
                {project.title}
              </span>
              <span
                className={`text-xs leading-4 ${
                  isActive ? "opacity-60" : "text-[var(--text-muted)]"
                }`}
              >
                {project.tech}
              </span>
            </Link>
          );
        })}
      </div>
    </aside>
    </>
  );
}
