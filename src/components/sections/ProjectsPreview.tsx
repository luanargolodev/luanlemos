import Link from 'next/link'

import type { Content } from '@/content/types'
import type { Messages } from '@/i18n/messages/pt'
import { interpolate } from '@/i18n/messages'
import { href } from '@/i18n/routing'

import { SectionHeading } from '@/components/ui/SectionHeading'
import { ProjectCard } from '@/components/ui/ProjectCard'
import { ArrowRight } from '@/components/ui/icons'

export function ProjectsPreview({
  locale,
  messages,
  content,
}: {
  locale: string
  messages: Messages
  content: Content
}) {
  const homeProjects = content.projects.slice(0, 4)

  return (
    <section
      id={messages.home.sections.projects}
      className="section border-t border-line/60"
    >
      <div className="container-page">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            index={messages.projects.index}
            label={messages.projects.label}
            title={messages.projects.title}
            description={messages.projects.description}
          />
          <Link
            href={href(locale, 'projects')}
            className="group inline-flex shrink-0 items-center gap-2 text-sm font-medium text-fg"
          >
            {messages.projects.viewAll}
            <ArrowRight className="size-4 text-accent transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {homeProjects.map((project) => (
            <div key={project.slug} data-reveal>
              <ProjectCard
                project={project}
                locale={locale}
                messages={messages}
              />
            </div>
          ))}
        </div>

        <Link
          href={href(locale, 'projects')}
          className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-fg transition-colors hover:text-accent"
        >
          {interpolate(messages.projects.explore, {
            count: content.projects.length,
          })}
          <ArrowRight className="size-4" />
        </Link>
      </div>
    </section>
  )
}
