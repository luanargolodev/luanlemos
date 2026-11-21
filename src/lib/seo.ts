import type { Metadata } from 'next'

import { certifications } from '@/data/certifications'
import { profile } from '@/data/profile'
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
  const pageId = `${site.url}/#page`

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
      {
        '@type': 'ProfilePage',
        '@id': pageId,
        url: site.url,
        name: site.title,
        description: site.description,
        inLanguage: 'pt-BR',
        isPartOf: { '@id': websiteId },
        mainEntity: { '@id': personId },
      },
    ],
  }
}

export function serializeJsonLd(value: unknown) {
  return JSON.stringify(value).replace(/</g, '\\u003c')
}
