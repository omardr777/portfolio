export type NavLink = {
  id: string;
  title: string;
};

export type Service = {
  title: string;
  icon: string;
};

export type Technology = {
  name: string;
  icon: string;
};

export type Experience = {
  title: string;
  company_name: string;
  icon: string;
  iconBg: string;
  date: string;
  points: string[];
};

export type Testimonial = {
  testimonial: string;
  name: string;
  designation: string;
  company: string;
  image: string;
};

export type ProjectTag = {
  name: string;
  color: string;
};

export type Project = {
  name: string;
  description: string;
  tags: ProjectTag[];
  image: string;
  source_code_link: string;
  view_link?: string;
};
