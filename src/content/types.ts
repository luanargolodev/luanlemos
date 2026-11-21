export type ProjectCategory =
  | 'brasil'
  | 'internacional'
  | 'shopify'
  | 'deco'

export interface ProjectCaseStudy {
  role: string
  context: string[]
  challenge: string
  approach: string[]
  highlights: string[]
}

export interface ProjectFact {
  slug: string
  year: number
  stack: string[]
  categories: ProjectCategory[]
  image: string
  url?: string
  repo?: string
  featured: boolean
}

export interface ProjectText {
  title: string
  client: string
  summary: string
  outcome: string
  imageAlt: string
  caseStudy: ProjectCaseStudy
}

export interface Project extends ProjectFact, ProjectText {}

export interface ExperienceFact {
  id: string
  company: string
  companyUrl?: string
  start: string
  end?: string
  stack: string[]
}

export interface ExperienceText {
  role: string
  location: string
  summary: string
  achievements: string[]
}

export interface ExperienceItem extends ExperienceFact, ExperienceText {}

export interface TechFact {
  id: string
  items: Array<{ name: string; icon: string }>
}

export interface TechText {
  label: string
  description: string
}

export interface TechGroup extends TechFact, TechText {}

export type CertificationKind = 'education' | 'participation' | 'recognition'

export interface CertificationFact {
  id: string
  title: string
  issuer: string
  year: string
  kind: CertificationKind
  url?: string
}

export interface CertificationText {
  title: string
  type: string
  description: string
}

export interface Certification extends CertificationFact, CertificationText {}

export interface SocialLink {
  label: string
  href: string
  handle: string
}

export interface ProfileFact {
  fullName: string
  name: string
  email: string
  phone: string
  phoneHref: string
  whatsapp: string
  startDate: string
  avatar: string
  socials: SocialLink[]
  education: {
    institution: string
    period: string
  }
}

export interface ProfileText {
  role: string
  headline: string
  headlineHighlight: string
  summary: string
  bio: string[]
  location: string
  availability: string
  educationCourse: string
  skills: string[]
}

export interface Profile
  extends Omit<ProfileFact, 'education'>,
    Omit<ProfileText, 'educationCourse'> {
  cvUrl: string
  education: { course: string; institution: string; period: string }
}

export interface ResumeProject {
  slug: string
  period: string
  description: string
  stack: string
  links: string
}

export interface ResumeText {
  objective: string
  summary: string
  keySkills: string
  skillGroups: Array<{ label: string; items: string }>
  projects: ResumeProject[]
  openTo: string
}

export interface Resume extends ResumeText {
  fullName: string
  title: string
  location: string
  availability: string
  updatedAt: string
  links: {
    portfolio: string
    cv: string
    pdf: string
    email: string
    phone: string
    linkedin: string
    github: string
  }
}

export interface ContentText {
  profile: ProfileText
  experience: Record<string, ExperienceText>
  projects: Record<string, ProjectText>
  tech: Record<string, TechText>
  certifications: Record<string, CertificationText>
  resume: ResumeText
}

export interface Content {
  profile: Profile
  experience: ExperienceItem[]
  projects: Project[]
  techGroups: TechGroup[]
  certifications: Certification[]
  resume: Resume
}
