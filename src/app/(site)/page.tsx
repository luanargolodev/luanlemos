import { AboutPreview } from '@/components/sections/AboutPreview'
import { ExperiencePreview } from '@/components/sections/ExperiencePreview'
import { Hero } from '@/components/sections/Hero'
import { ProjectsPreview } from '@/components/sections/ProjectsPreview'
import { TechMarquee } from '@/components/sections/TechMarquee'
import { StackPreview } from '@/components/sections/StackPreview'
import { JsonLd } from '@/components/seo/JsonLd'
import { PageCTA } from '@/components/ui/PageCTA'
import { site } from '@/data/site'
import { buildWebPageJsonLd } from '@/lib/seo'

const jsonLd = {
  ...buildWebPageJsonLd({
    type: 'ProfilePage',
    name: site.title,
    description: site.description,
    path: '/',
    about: `${site.url}/#person`,
  }),
  mainEntity: { '@id': `${site.url}/#person` },
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <TechMarquee />
      <AboutPreview />
      <ExperiencePreview />
      <ProjectsPreview />
      <StackPreview />
      <PageCTA id="contato" />
      <JsonLd data={jsonLd} />
    </>
  )
}
