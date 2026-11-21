import { profile } from '@/data/profile'

import { SectionHeading } from '@/components/ui/SectionHeading'
import { ArrowRight } from '@/components/ui/icons'

export function About() {
  const [lead, ...rest] = profile.bio

  return (
    <section id="sobre" className="section relative">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="reveal">
            <SectionHeading index="01" label="Sobre" title="Interfaces que funcionam no mundo real." />

            <dl className="mt-10 space-y-4 border-t border-line/70 pt-6">
              <div className="grid grid-cols-[104px_1fr] gap-4">
                <dt className="font-mono text-[10px] uppercase tracking-[0.12em] text-faint">
                  Atualmente
                </dt>
                <dd className="text-sm text-fg">
                  Zee.Dog · Front-end Pleno
                </dd>
              </div>
              <div className="grid grid-cols-[104px_1fr] gap-4">
                <dt className="font-mono text-[10px] uppercase tracking-[0.12em] text-faint">
                  Formação
                </dt>
                <dd className="text-sm text-fg">
                  {profile.education.course}
                  <span className="mt-0.5 block text-xs text-muted">
                    {profile.education.institution} · {profile.education.period}
                  </span>
                </dd>
              </div>
              <div className="grid grid-cols-[104px_1fr] gap-4">
                <dt className="font-mono text-[10px] uppercase tracking-[0.12em] text-faint">
                  Base
                </dt>
                <dd className="text-sm text-fg">{profile.location}</dd>
              </div>
            </dl>

            <a
              href="#experiencia"
              className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-fg"
            >
              Ver trajetória
              <ArrowRight className="size-4 text-accent transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <div className="reveal">
            <p className="font-display text-2xl leading-snug tracking-tight text-fg md:text-[1.7rem]">
              {lead}
            </p>

            <div className="mt-7 space-y-5 text-[15px] leading-relaxed text-muted md:text-base">
              {rest.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[10px] uppercase tracking-[0.12em] text-faint">
              <span>React</span>
              <span>Next.js</span>
              <span>TypeScript</span>
              <span>Deco.cx</span>
              <span>VTEX</span>
              <span>Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
