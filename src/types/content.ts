export interface SocialLink {
  label: string
  href: string
  handle: string
}

export interface Profile {
  name: string
  role: string
  headline: string
  headlineHighlight: string
  bio: string[]
  summary: string
  email: string
  phone: string
  phoneHref: string
  whatsapp: string
  location: string
  availability: string
  startDate: string
  avatar: string
  cvUrl: string
  education: {
    course: string
    institution: string
    period: string
  }
  socials: SocialLink[]
}
