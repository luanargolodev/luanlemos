import { AboutPreview } from '@/components/sections/AboutPreview'
import { ExperiencePreview } from '@/components/sections/ExperiencePreview'
import { Hero } from '@/components/sections/Hero'
import { ProjectsPreview } from '@/components/sections/ProjectsPreview'
import { StackPreview } from '@/components/sections/StackPreview'
import { TechMarquee } from '@/components/sections/TechMarquee'
import { JsonLd } from '@/components/seo/JsonLd'
import { PageCTA } from '@/components/ui/PageCTA'
import type { Content } from '@/content/types'
import type { Messages } from '@/i18n/messages/pt'
import { homeHref } from '@/i18n/routing'
import { buildWebPageJsonLd } from '@/lib/seo'
import { site } from '@/data/site'

export function HomeView({
  locale,
  messages,
  content,
}: {
  locale: string
  messages: Messages
  content: Content
}) {
  const jsonLd = {
    ...buildWebPageJsonLd({
      type: 'ProfilePage',
      name: messages.meta.home.title,
      description: messages.meta.home.description,
      path: homeHref(locale),
      locale,
      about: `${site.url}/#person`,
    }),
    mainEntity: { '@id': `${site.url}/#person` },
  }

  return (
    <>
      <Hero locale={locale} messages={messages} content={content} />
      <TechMarquee content={content} label={messages.nav.stack} />
      <AboutPreview locale={locale} messages={messages} content={content} />
      <ExperiencePreview
        locale={locale}
        messages={messages}
        content={content}
      />
      <ProjectsPreview locale={locale} messages={messages} content={content} />
      <StackPreview locale={locale} messages={messages} content={content} />
      <PageCTA
        locale={locale}
        messages={messages}
        content={content}
        id={messages.home.sections.contact}
      />
      <JsonLd data={jsonLd} />
    </>
  )
}
