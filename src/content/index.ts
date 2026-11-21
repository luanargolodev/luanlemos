import 'server-only'

import { defaultLocale, getLocaleMeta, isLocale } from '@/i18n/config'
import { formatLongMonth } from '@/i18n/format'
import { site } from '@/data/site'

import {
  certificationFacts,
  experienceFacts,
  profileFacts,
  projectFacts,
  techFacts,
} from './facts'
import type {
  Certification,
  Content,
  ContentText,
  ExperienceItem,
  Project,
  TechGroup,
} from './types'

type Loader = () => Promise<{ default: ContentText }>

const loaders = new Proxy({} as Record<string, Loader>, {
  get(_target, locale: string) {
    return () => import(`./${locale}.ts`)
  },
})

function buildContent(locale: string, text: ContentText): Content {
  const meta = getLocaleMeta(locale)
  const { educationCourse, ...profileText } = text.profile
  const cvUrl = `/cv/${meta.cvFile}`

  const profile = {
    ...profileFacts,
    ...profileText,
    cvUrl,
    education: {
      ...profileFacts.education,
      course: educationCourse,
    },
  }

  const experience: ExperienceItem[] = experienceFacts.map((fact) => {
    const localized = text.experience[fact.id]
    if (!localized) throw new Error(`Missing experience translation: ${fact.id}`)
    return { ...fact, ...localized }
  })

  const projects: Project[] = projectFacts.map((fact) => {
    const localized = text.projects[fact.slug]
    if (!localized) throw new Error(`Missing project translation: ${fact.slug}`)
    return { ...fact, ...localized }
  })

  const techGroups: TechGroup[] = techFacts.map((fact) => {
    const localized = text.tech[fact.id]
    if (!localized) throw new Error(`Missing tech translation: ${fact.id}`)
    return { ...fact, ...localized }
  })

  const certifications: Certification[] = certificationFacts.map((fact) => {
    const localized = text.certifications[fact.id]
    if (!localized) {
      throw new Error(`Missing certification translation: ${fact.id}`)
    }
    return { ...fact, ...localized }
  })

  const resume = {
    ...text.resume,
    fullName: profile.fullName,
    title: profile.role,
    location: profile.location,
    availability: profile.availability,
    updatedAt: formatLongMonth(new Date(), meta.dateLocale),
    links: {
      portfolio: `${site.url}/${locale}`,
      cv: `${site.url}/${locale}/${meta.cvPath}`,
      pdf: `${site.url}${cvUrl}`,
      email: profile.email,
      phone: profile.phone,
      linkedin: profile.socials[0].href,
      github: profile.socials[1].href,
    },
  }

  return { profile, experience, projects, techGroups, certifications, resume }
}

export async function getContent(locale: string): Promise<Content> {
  const safeLocale = isLocale(locale) ? locale : defaultLocale
  const loader = loaders[safeLocale] ?? loaders.pt
  const text = (await loader()).default
  return buildContent(safeLocale, text)
}

export function featuredProjects(content: Content) {
  return content.projects.filter((project) => project.featured)
}

export function getProjectBySlug(content: Content, slug: string) {
  return content.projects.find((project) => project.slug === slug)
}

export { techIcons } from './facts'
export type {
  Certification,
  CertificationKind,
  Content,
  ExperienceItem,
  Profile,
  Project,
  ProjectCategory,
  Resume,
  TechGroup,
} from './types'
