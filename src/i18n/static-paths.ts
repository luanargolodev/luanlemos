import 'server-only'

import { projectFacts } from '@/content/facts'
import { getLocaleMeta, navRoutes } from './config'

export interface SiteStaticPath {
  path: string[]
}

export function getSiteStaticPaths(locale: string): SiteStaticPath[] {
  const meta = getLocaleMeta(locale)
  const paths: SiteStaticPath[] = [{ path: [] }]

  for (const key of navRoutes) {
    paths.push({ path: meta.routes[key].split('/') })
  }

  const projectBase = meta.routes.project.split('/').slice(0, -1)
  for (const project of projectFacts) {
    paths.push({ path: [...projectBase, project.slug] })
  }

  return paths
}
