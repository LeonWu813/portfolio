import { projects } from "@/data/projects-data";
import ProjectList from "@/components/ProjectList";
import ProjectMobileNav from "@/components/ProjectMobileNav";

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col flex-1 min-h-0 overflow-hidden lg:flex-row">
      <ProjectMobileNav projects={projects} />
      <ProjectList projects={projects} />
      <div className="flex-1 overflow-y-auto">
        {children}
      </div>
    </div>
  );
}
