import type { Metadata } from 'next'

import { certifications } from '@/data/certifications'
import { profile } from '@/data/profile'
import type { Project } from '@/data/projects'
import { site } from '@/data/site'
import { techGroups } from '@/data/tech'

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s — ${profile.name}`,
  },
  description: site.description,
  keywords: [...site.keywords],
  authors: [{ name: profile.fullName, url: site.url }],
  creator: profile.fullName,
  publisher: profile.fullName,
  applicationName: site.name,
  alternates: {
    canonical: '/',
    types: {
      'application/pdf': profile.cvUrl,
      'application/json': '/cv.json',
    },
  },
  openGraph: {
    type: 'profile',
    locale: site.locale,
    url: '/',
    siteName: site.name,
    title: site.title,
    description: site.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: site.title,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
}

const knowAbout = [
  ...techGroups.flatMap((group) => group.items.map((item) => item.name)),
  'E-commerce',
  'Performance web',
  'Acessibilidade',
]

export function buildJsonLd() {
  const personId = `${site.url}/#person`
  const websiteId = `${site.url}/#website`

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': personId,
        name: profile.fullName,
        alternateName: profile.name,
        url: site.url,
        image: `${site.url}${profile.avatar}`,
        jobTitle: profile.role,
        description: profile.summary,
        email: `mailto:${profile.email}`,
        telephone: profile.phone,
        knowsAbout: knowAbout,
        hasOccupation: {
          '@type': 'Occupation',
          name: profile.role,
          occupationLocation: {
            '@type': 'Country',
            name: 'Brasil',
          },
          skills: knowAbout.join(', '),
        },
        worksFor: {
          '@type': 'Organization',
          name: 'Zee.Dog',
          url: 'https://www.zeedog.com.br',
        },
        alumniOf: {
          '@type': 'CollegeOrUniversity',
          name: profile.education.institution,
        },
        hasCredential: certifications.map((certification) => ({
          '@type': 'EducationalOccupationalCredential',
          name: certification.title,
          credentialCategory: certification.type,
          description: certification.description,
          recognizedBy: {
            '@type': 'Organization',
            name: certification.issuer,
          },
        })),
        subjectOf: {
          '@type': 'DigitalDocument',
          name: 'Currículo — Luan Argolo Lemos — Desenvolvedor Front-end Pleno',
          encodingFormat: 'application/pdf',
          url: `${site.url}${profile.cvUrl}`,
        },
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'BR',
        },
        sameAs: profile.socials.map((social) => social.href),
      },
      {
        '@type': 'WebSite',
        '@id': websiteId,
        url: site.url,
        name: site.name,
        inLanguage: 'pt-BR',
        publisher: { '@id': personId },
      },
    ],
  }
}

export const defaultOgImage = {
  url: '/opengraph-image',
  width: 1200,
  height: 630,
  alt: site.ogAlt,
}

export interface SeoBreadcrumb {
  name: string
  path: string
}

export function buildBreadcrumbJsonLd(items: SeoBreadcrumb[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${site.url}${item.path}`,
    })),
  }
}

export function buildWebPageJsonLd({
  type = 'WebPage',
  name,
  description,
  path,
  about,
}: {
  type?: 'WebPage' | 'AboutPage' | 'CollectionPage' | 'ContactPage' | 'ProfilePage'
  name: string
  description: string
  path: string
  about?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': type,
    '@id': `${site.url}${path}#page`,
    url: `${site.url}${path}`,
    name,
    description,
    inLanguage: 'pt-BR',
    isPartOf: { '@id': `${site.url}/#website` },
    ...(about ? { about: { '@id': about } } : {}),
  }
}

export function buildProjectJsonLd(project: Project) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    '@id': `${site.url}/projeto/${project.slug}#work`,
    name: project.title,
    headline: `${project.title} — ${project.client}`,
    description: project.summary,
    url: `${site.url}/projeto/${project.slug}`,
    image: `${site.url}${project.image}`,
    dateCreated: String(project.year),
    author: { '@id': `${site.url}/#person` },
    about: {
      '@type': 'Organization',
      name: project.client,
    },
    keywords: project.stack.join(', '),
    isPartOf: { '@id': `${site.url}/#website` },
    ...(project.url ? { sameAs: project.url } : {}),
  }
}

export function serializeJsonLd(value: unknown) {
  return JSON.stringify(value).replace(/</g, '\\u003c')
}
