import Link from 'next/link'

import type { Content } from '@/content/types'
import { formatPeriod } from '@/i18n/format'
import type { Messages } from '@/i18n/messages/pt'
import { href } from '@/i18n/routing'
import { getLocaleMeta } from '@/i18n/config'

import { ButtonLink } from '@/components/ui/ButtonLink'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ArrowRight } from '@/components/ui/icons'

export function ExperiencePreview({
  locale,
  messages,
  content,
}: {
  locale: string
  messages: Messages
  content: Content
}) {
  const { dateLocale } = getLocaleMeta(locale)

  return (
    <section
      id={messages.home.sections.experience}
      className="section border-t border-line/60"
    >
      <div className="container-page">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            index={messages.experience.index}
            label={messages.experience.label}
            title={messages.experience.title}
            description={messages.experience.previewDescription}
          />
          <Link
            href={href(locale, 'experience')}
            className="group inline-flex shrink-0 items-center gap-2 text-sm font-medium text-fg"
          >
            {messages.experience.viewAll}
            <ArrowRight className="size-4 text-accent transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {content.experience.map((experience, index) => (
            <article
              key={experience.id}
              data-reveal
              className="flex flex-col rounded-2xl border border-line/80 bg-surface p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40"
            >
              <div className="flex items-center justify-between gap-3 font-mono text-[10px] uppercase tracking-[0.1em] text-faint">
                <span>
                  {formatPeriod(
                    experience.start,
                    experience.end,
                    dateLocale,
                    messages.common.present,
                  )}
                </span>
                {index === 0 ? (
                  <span className="inline-flex items-center gap-1.5 text-status">
                    <span className="size-1.5 rounded-full bg-status" />
                    {messages.experience.current}
                  </span>
                ) : null}
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold leading-snug tracking-tight">
                {experience.role}
              </h3>
              <p className="mt-1 text-[13px] text-accent">
                {experience.company}
              </p>
              <p className="mt-3 text-[13px] leading-relaxed text-muted">
                {experience.summary}
              </p>
            </article>
          ))}
        </div>

        <ButtonLink
          href={href(locale, 'experience')}
          variant="outline"
          className="mt-8"
        >
          {messages.experience.viewAll}
        </ButtonLink>
      </div>
    </section>
  )
}
