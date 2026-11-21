import type { MetadataRoute } from 'next'

import { profile } from '@/data/profile'
import { projects } from '@/data/projects'
import { site } from '@/data/site'

const pages = [
  { path: '', priority: 1, changeFrequency: 'monthly' as const },
  { path: '/sobre', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/experiencia', priority: 0.9, changeFrequency: 'monthly' as const },
  { path: '/projetos', priority: 0.9, changeFrequency: 'monthly' as const },
  { path: '/stack', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/contato', priority: 0.7, changeFrequency: 'yearly' as const },
  { path: '/curriculo', priority: 0.8, changeFrequency: 'monthly' as const },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return [
    ...pages.map((page) => ({
      url: `${site.url}${page.path}`,
      lastModified,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    })),
    ...projects.map((project) => ({
      url: `${site.url}/projeto/${project.slug}`,
      lastModified,
      changeFrequency: 'yearly' as const,
      priority: 0.7,
    })),
    {
      url: `${site.url}${profile.cvUrl}`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.6,
    },
  ]
}
