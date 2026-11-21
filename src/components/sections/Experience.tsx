import { experiences } from '@/data/experience'
import { formatPeriod, getExperienceDuration } from '@/lib/dates'

import { SectionHeading } from '@/components/ui/SectionHeading'
import { Tag } from '@/components/ui/Tag'

export function Experience() {
  const duration = getExperienceDuration()

  return (
    <section id="experiencia" className="section border-t border-line/60">
      <div className="container-page">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <SectionHeading
            index="02"
            label="Experiência"
            title="Onde construí."
          />
          <p className="max-w-xl text-base leading-relaxed text-muted lg:justify-self-end">
            {duration} de trabalho em front-end, dos primeiros projetos em
            agência à operação de uma marca de alcance nacional. Abaixo, o que
            cada etapa me ensinou.
          </p>
        </div>

        <ol className="mt-14 border-t border-line/70">
          {experiences.map((item) => {
            const isCurrent = !item.end

            return (
              <li
                key={`${item.company}-${item.start}`}
                data-reveal
                className="grid gap-5 border-b border-line/70 py-8 md:grid-cols-[200px_1fr] md:gap-10 md:py-10"
              >
                <div className="flex items-start justify-between gap-3 md:flex-col md:justify-start md:gap-1.5">
                  <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-muted">
                    {formatPeriod(item.start, item.end)}
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
                        Atual
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
                        <span className="sr-only"> (abre em nova aba)</span>
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
          {experiences.length} posições ·{' '}
          {new Set(experiences.map((item) => item.company)).size} empresas ·
          jun/2022 — hoje
        </p>
      </div>
    </section>
  )
}
