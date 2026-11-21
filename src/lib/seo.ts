import type { Metadata } from 'next'

import type { Content, Project } from '@/content/types'
import { getLocaleMeta, locales, type RouteKey } from '@/i18n/config'
import type { Messages } from '@/i18n/messages/pt'
import {
  alternateLinks,
  href,
  homeHref,
  projectHref,
} from '@/i18n/routing'
import { site } from '@/data/site'

export const metadataBase = new URL(site.url)

export interface SeoBreadcrumb {
  name: string
  path: string
}

export function buildMetadata({
  locale,
  key,
  params = {},
  content,
  messages,
}: {
  locale: string
  key: RouteKey
  params?: Record<string, string>
  content: Content
  messages: Messages
}): Metadata {
  const meta = getLocaleMeta(locale)
  const path =
    key === 'home'
      ? homeHref(locale)
      : key === 'project'
        ? projectHref(locale, params.slug)
        : href(locale, key)

  const project =
    key === 'project'
      ? content.projects.find((item) => item.slug === params.slug)
      : undefined

  const base = messages.meta[
    key === 'project' ? 'projects' : key
  ] as { title: string; description: string }

  const title =
    key === 'project' && project
      ? messages.project.metaTitle
          .replace('{title}', project.title)
          .replace('{suffix}', messages.project.metaSuffix)
      : key === 'home'
        ? messages.meta.home.title
        : base.title

  const description =
    key === 'project' && project
      ? project.summary
      : key === 'home'
        ? messages.meta.home.description
        : base.description

  const image =
    key === 'project' && project
      ? {
          url: project.image,
          width: 1600,
          height: 1000,
          alt: project.imageAlt,
        }
      : {
          url: `/${locale}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: messages.meta.ogAlt,
        }

  const keywords = messages.meta.keywords
    .split(',')
    .map((keyword) => keyword.trim())
    .filter(Boolean)

  if (project) {
    keywords.push(...project.stack, project.client, project.title, 'case')
  }

  return {
    metadataBase,
    title: { absolute: title },
    description,
    keywords,
    alternates: {
      canonical: path,
      languages: alternateLinks(key, params),
      ...(key === 'resume'
        ? {
            types: {
              'application/pdf': content.profile.cvUrl,
              'application/json': `/${locale}/cv.json`,
            },
          }
        : {}),
    },
    openGraph: {
      type: key === 'project' ? 'article' : 'profile',
      locale: meta.ogLocale,
      alternateLocale: locales
        .filter((item) => item.code !== locale)
        .map((item) => item.ogLocale),
      url: path,
      siteName: site.name,
      title,
      description,
      images: [image],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [{ url: image.url, alt: image.alt }],
    },
  }
}

export function defaultOgImage(locale: string, messages: Messages) {
  return {
    url: `/${locale}/opengraph-image`,
    width: 1200,
    height: 630,
    alt: messages.meta.ogAlt,
  }
}

export function buildJsonLd({
  locale,
  content,
}: {
  locale: string
  content: Content
}) {
  const meta = getLocaleMeta(locale)
  const personId = `${site.url}/#person`
  const websiteId = `${site.url}/${locale}#website`
  const { profile, certifications, techGroups } = content

  const knowAbout = [
    ...techGroups.flatMap((group) => group.items.map((item) => item.name)),
    'E-commerce',
    'Web performance',
    'Accessibility',
  ]

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
            name: 'Brazil',
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
          name: content.resume.title,
          encodingFormat: 'application/pdf',
          url: content.resume.links.pdf,
          inLanguage: meta.htmlLang,
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
        url: `${site.url}/${locale}`,
        name: site.name,
        inLanguage: meta.htmlLang,
        publisher: { '@id': personId },
      },
    ],
  }
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
  locale,
  about,
}: {
  type?: 'WebPage' | 'AboutPage' | 'CollectionPage' | 'ContactPage' | 'ProfilePage'
  name: string
  description: string
  path: string
  locale: string
  about?: string
}) {
  const meta = getLocaleMeta(locale)
  return {
    '@context': 'https://schema.org',
    '@type': type,
    '@id': `${site.url}${path}#page`,
    url: `${site.url}${path}`,
    name,
    description,
    inLanguage: meta.htmlLang,
    isPartOf: { '@id': `${site.url}/${locale}#website` },
    ...(about ? { about: { '@id': about } } : {}),
  }
}

export function buildProjectJsonLd({
  locale,
  project,
  path,
}: {
  locale: string
  project: Project
  path: string
}) {
  const meta = getLocaleMeta(locale)
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    '@id': `${site.url}${path}#work`,
    name: project.title,
    headline: `${project.title} — ${project.client}`,
    description: project.summary,
    url: `${site.url}${path}`,
    image: `${site.url}${project.image}`,
    dateCreated: String(project.year),
    inLanguage: meta.htmlLang,
    author: { '@id': `${site.url}/#person` },
    about: {
      '@type': 'Organization',
      name: project.client,
    },
    keywords: project.stack.join(', '),
    isPartOf: { '@id': `${site.url}/${locale}#website` },
    ...(project.url ? { sameAs: project.url } : {}),
  }
}

export function serializeJsonLd(value: unknown) {
  return JSON.stringify(value).replace(/</g, '\\u003c')
}
