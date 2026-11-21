import Link from 'next/link'

import { experiences } from '@/data/experience'
import { formatPeriod } from '@/lib/dates'

import { ButtonLink } from '@/components/ui/ButtonLink'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ArrowRight } from '@/components/ui/icons'

export function ExperiencePreview() {
  return (
    <section id="experiencia" className="section border-t border-line/60">
      <div className="container-page">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            index="02"
            label="Experiência"
            title="Onde construí."
            description="Do primeiro projeto em agência à operação de e-commerce de marcas de alcance nacional."
          />
          <Link
            href="/experiencia"
            className="group inline-flex shrink-0 items-center gap-2 text-sm font-medium text-fg"
          >
            Ver trajetória completa
            <ArrowRight className="size-4 text-accent transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {experiences.map((experience, index) => (
            <article
              key={`${experience.company}-${experience.start}`}
              data-reveal
              className="flex flex-col rounded-2xl border border-line/80 bg-surface p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40"
            >
              <div className="flex items-center justify-between gap-3 font-mono text-[10px] uppercase tracking-[0.1em] text-faint">
                <span>{formatPeriod(experience.start, experience.end)}</span>
                {index === 0 ? (
                  <span className="inline-flex items-center gap-1.5 text-status">
                    <span className="size-1.5 rounded-full bg-status" />
                    Atual
                  </span>
                ) : null}
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold leading-snug tracking-tight">
                {experience.role}
              </h3>
              <p className="mt-1 text-[13px] text-accent">{experience.company}</p>
              <p className="mt-3 text-[13px] leading-relaxed text-muted">
                {experience.summary}
              </p>
            </article>
          ))}
        </div>

        <ButtonLink href="/experiencia" variant="outline" className="mt-8">
          Ver experiência completa
        </ButtonLink>
      </div>
    </section>
  )
}
