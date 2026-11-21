import type { MetadataRoute } from 'next'

import { projectFacts } from '@/content/facts'
import { locales, navRoutes, type RouteKey } from '@/i18n/config'
import { alternateLinks, href } from '@/i18n/routing'
import { site } from '@/data/site'

const priorities: Record<RouteKey, number> = {
  home: 1,
  about: 0.8,
  experience: 0.9,
  projects: 0.9,
  project: 0.7,
  stack: 0.8,
  contact: 0.7,
  resume: 0.8,
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  const entries: MetadataRoute.Sitemap = []

  const routeKeys: RouteKey[] = ['home', ...navRoutes, 'resume']

  for (const key of routeKeys) {
    for (const locale of locales) {
      const path = href(locale.code, key)
      entries.push({
        url: `${site.url}${path}`,
        lastModified,
        changeFrequency: key === 'contact' ? 'yearly' : 'monthly',
        priority: priorities[key],
        alternates: {
          languages: Object.fromEntries(
            Object.entries(alternateLinks(key)).map(([code, localePath]) => [
              code,
              `${site.url}${localePath}`,
            ]),
          ),
        },
      })
    }
  }

  for (const project of projectFacts) {
    const params = { slug: project.slug }
    for (const locale of locales) {
      entries.push({
        url: `${site.url}${href(locale.code, 'project', params)}`,
        lastModified,
        changeFrequency: 'yearly',
        priority: priorities.project,
        alternates: {
          languages: Object.fromEntries(
            Object.entries(alternateLinks('project', params)).map(
              ([code, localePath]) => [code, `${site.url}${localePath}`],
            ),
          ),
        },
      })
    }
  }

  return entries
}
