export type Profile = {
  firstName: string;
  lastName: string;
  title: string;
  introduction: string;
  bio: string;
  dateOfBirth: string;
  location: string;
  email: string;
  phone: string;
  avatar: string;
  education: string;
};
export type SkillGroup = {
  type: string;
  category: string;
  items: { name: string; level: number }[];
};
export type Service = {
  type: string;
  title: string;
  description: string;
  tags: string[];
};
export type Project = {
  name: string;
  source: string;
  domain: string;
  thumbnail: string;
  description: string;
  techStack: string[];
  role: string;
  demoUrl: string;
  githubUrl: string;
  featured: boolean;
};
export type WorkExperience = {
  company: string;
  position: string;
  startDate?: string;
  endDate?: string;
  description: string[];
};
export type Review = {
  name: string;
  role: string;
  quote: string;
  rating: number;
};
export type Highlight = {
  yearsOfExperience: number;
  awards: string;
};
export type ImpactMetric = {
  value: string;
  suffix?: string;
  label: string;
};
export type Quote = {
  content: string;
  author: string;
  source?: string;
};
export type FreelanceImpact = {
  metrics: ImpactMetric[];
  quote: Quote;
};
export type SocialLinks = Record<'github' | 'linkedin' | 'youtube' | 'email', string>;

export type Portfolio = {
  profile: Profile;
  highlight: Highlight;
  socialLinks: SocialLinks;
  companySkills: SkillGroup[];
  freelanceSkills: SkillGroup[];
  services: Service[];
  companyExperiences: WorkExperience[];
  freelanceExperiences: WorkExperience[];
  freelanceImpact: FreelanceImpact;
  projects: Project[];
  reviews: Review[];
};
