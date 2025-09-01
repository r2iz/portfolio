export type LinkItem = {
  href: string;
  text: string;
  isExternal: boolean;
};

export type ProjectItem = {
  title: string;
  description: string;
  link: { href: string; text: string };
};

export type ExperienceItem = {
  period: string;
  description: string;
};

export type SiteData = {
  links: LinkItem[];
  skills: string[];
  projects: ProjectItem[];
  experience: ExperienceItem[];
};

