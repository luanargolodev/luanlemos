import { ProjectsExplorer } from '@/components/sections/ProjectsExplorer'
import { JsonLd } from '@/components/seo/JsonLd'
import { PageCTA } from '@/components/ui/PageCTA'
import { PageHero } from '@/components/ui/PageHero'
import { ProjectCard } from '@/components/ui/ProjectCard'
import { ArrowUpRight, GitHub } from '@/components/ui/icons'
import type { Content } from '@/content/types'
import { interpolate, type Messages } from '@/i18n/messages'
import { href, homeHref } from '@/i18n/routing'
import {
  buildBreadcrumbJsonLd,
  buildWebPageJsonLd,
} from '@/lib/seo'
import { site } from '@/data/site'

export function ProjectsView({
  locale,
  messages,
  content,
}: {
  locale: string
  messages: Messages
  content: Content
}) {
  const path = href(locale, 'projects')

  const jsonLd = [
    {
      ...buildWebPageJsonLd({
        type: 'CollectionPage',
        name: messages.meta.projects.title,
        description: messages.meta.projects.description,
        path,
        locale,
        about: `${site.url}/#person`,
      }),
      mainEntity: {
        '@type': 'ItemList',
        itemListElement: content.projects.map((project, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: project.title,
          url: `${site.url}${href(locale, 'project', {
            slug: project.slug,
          })}`,
        })),
      },
    },
    buildBreadcrumbJsonLd([
      { name: messages.common.home, path: homeHref(locale) },
      { name: messages.nav.projects, path },
    ]),
  ]

  return (
    <>
      <PageHero
        index={messages.projects.index}
        label={messages.projects.label}
        title={messages.projects.pageTitle}
        intro={messages.projects.pageIntro}
        breadcrumbs={[
          { label: messages.common.home, href: homeHref(locale) },
          { label: messages.nav.projects },
        ]}
      >
        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-[13px]">
          <a
            href="https://github.com/luanargolodev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-muted transition-colors hover:text-fg"
          >
            <GitHub className="size-4" />
            {messages.projects.github}
            <ArrowUpRight className="size-3.5" />
            <span className="sr-only">{messages.common.externalLink}</span>
          </a>
          <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-faint">
            {interpolate(messages.projects.countLabel, {
              count: content.projects.length,
            })}
          </span>
        </div>
      </PageHero>

      <section className="section">
        <div className="container-page">
          <h2 className="sr-only">{messages.projects.listLabel}</h2>
          <ProjectsExplorer
            total={content.projects.length}
            labels={{
              filtersLabel: messages.projects.filtersLabel,
              filters: messages.projects.filters,
              count: messages.projects.count,
              filterAllAnnouncement: messages.projects.filterAllAnnouncement,
              filterAnnouncement: messages.projects.filterAnnouncement,
            }}
          >
            {content.projects.map((project) => (
              <div
                key={project.slug}
                data-reveal
                data-project
                data-categories={project.categories.join(' ')}
              >
                <ProjectCard
                  project={project}
                  locale={locale}
                  messages={messages}
                />
              </div>
            ))}
          </ProjectsExplorer>
        </div>
      </section>

      <PageCTA locale={locale} messages={messages} content={content} />
      <JsonLd data={jsonLd} />
    </>
  )
}
