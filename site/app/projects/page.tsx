import { redirect } from "next/navigation";
import { projects } from "@/data/projects-data";

export default function ProjectsPage() {
  redirect(`/projects/${projects[0].slug}`);
}
