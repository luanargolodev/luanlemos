import type { Content } from '@/content/types'
import {
  formatDuration,
  formatMonth,
  formatPeriod,
  getExperienceMonths,
} from '@/i18n/format'
import { getLocaleMeta } from '@/i18n/config'
import { interpolate, type Messages } from '@/i18n/messages'

import { Tag } from '@/components/ui/Tag'

export function Experience({
  locale,
  messages,
  content,
}: {
  locale: string
  messages: Messages
  content: Content
}) {
  const { dateLocale } = getLocaleMeta(locale)
  const duration = formatDuration(
    getExperienceMonths(content.profile.startDate),
    messages.common,
    locale === 'en' ? 'and' : 'e',
  )
  const companies = new Set(content.experience.map((item) => item.company)).size

  return (
    <section
      id={messages.home.sections.experience}
      className="section border-t border-line/60"
    >
      <div className="container-page">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div data-reveal>
            <p className="eyebrow">{messages.experience.timeline}</p>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight md:text-[2.5rem]">
              {messages.experience.title}
            </h2>
          </div>
          <p className="max-w-xl text-base leading-relaxed text-muted lg:justify-self-end">
            {interpolate(messages.experience.intro, { duration })}
          </p>
        </div>

        <ol className="mt-14 border-t border-line/70">
          {content.experience.map((item) => {
            const isCurrent = !item.end

            return (
              <li
                key={item.id}
                data-reveal
                className="grid gap-5 border-b border-line/70 py-8 md:grid-cols-[200px_1fr] md:gap-10 md:py-10"
              >
                <div className="flex items-start justify-between gap-3 md:flex-col md:justify-start md:gap-1.5">
                  <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-muted">
                    {formatPeriod(
                      item.start,
                      item.end,
                      dateLocale,
                      messages.common.present,
                    )}
                  </p>
                  <p className="font-mono text-[10px] uppercase tracking-[0.08em] text-faint">
                    {item.location}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                    <h3 className="text-xl font-semibold tracking-tight md:text-[1.4rem]">
                      {item.role}
                    </h3>
                    {isCurrent ? (
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-status/30 bg-status/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-status">
                        <span className="size-1.5 rounded-full bg-status" />
                        {messages.experience.current}
                      </span>
                    ) : null}
                  </div>

                  <p className="mt-1 text-sm text-accent">
                    {item.companyUrl ? (
                      <a
                        href={item.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-underline"
                      >
                        {item.company}
                        <span className="sr-only">
                          {' '}
                          {messages.common.externalLink}
                        </span>
                      </a>
                    ) : (
                      item.company
                    )}
                  </p>

                  <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
                    {item.summary}
                  </p>

                  <ul className="mt-4 space-y-2">
                    {item.achievements.map((achievement) => (
                      <li
                        key={achievement}
                        className="flex gap-2.5 text-[13px] leading-relaxed text-muted"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-[7px] size-1 shrink-0 rounded-full bg-accent/70"
                        />
                        {achievement}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {item.stack.map((tech) => (
                      <Tag key={tech}>{tech}</Tag>
                    ))}
                  </div>
                </div>
              </li>
            )
          })}
        </ol>

        <p
          data-reveal
          className="mt-8 font-mono text-[10px] uppercase tracking-[0.12em] text-faint"
        >
          {interpolate(messages.experience.summary, {
            positions: content.experience.length,
            companies,
            start: formatMonth(content.profile.startDate, dateLocale),
            present: messages.common.present,
          })}
        </p>
      </div>
    </section>
  )
}
