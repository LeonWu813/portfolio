import { multiAgentSystem } from "@/data/projects/multi-agent-system";
import { projectday } from "@/data/projects/projectday";
import { siteplus } from "@/data/projects/siteplus";
import { tabvault } from "@/data/projects/tabvault";

export interface ProjectLink {
  label: string;
  href: string;
  name: string;
}

export type SectionItem = string | { image: string; alt?: string };

export interface ProjectSection {
  heading: string;
  items: SectionItem[];
}

export interface ProjectEntry {
  slug: string;
  year: string;
  date: string;
  title: string;
  tech: string;
  tags: string[];
  atAGlance: string;
  description: string;
  links: ProjectLink[];
  featureImage?: string;
  featureImageAlt?: string;
  featureImageCaption?: string;
  sections: ProjectSection[];
}

export const projects: ProjectEntry[] = [multiAgentSystem, projectday, siteplus, tabvault];
