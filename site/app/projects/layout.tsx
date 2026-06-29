import { projects } from "@/data/projects-data";
import ProjectList from "@/components/ProjectList";

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-1 min-h-0 overflow-hidden">
      <ProjectList projects={projects} />
      <div className="flex-1 overflow-y-auto">
        {children}
      </div>
    </div>
  );
}
