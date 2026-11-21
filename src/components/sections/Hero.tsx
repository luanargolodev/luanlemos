import Image from 'next/image'

import { profile } from '@/data/profile'
import { getExperienceYears } from '@/lib/dates'

import { ButtonLink } from '@/components/ui/ButtonLink'
import {
  ArrowDown,
  ArrowRight,
  Download,
  GitHub,
  LinkedIn,
  MapPin,
} from '@/components/ui/icons'

const currentYear = new Date().getFullYear()

export function Hero() {
  const years = getExperienceYears()
  const [headlineBefore, headlineAfter] = profile.headline.split(
    profile.headlineHighlight,
  )

  return (
    <section
      id="top"
      data-glow
      className="relative overflow-hidden pb-16 pt-28 md:pb-24 md:pt-36"
    >
      <div aria-hidden="true" className="grid-bg absolute inset-0" />
      <div
        aria-hidden="true"
        className="animate-drift absolute -top-48 left-1/2 h-[520px] w-[min(900px,90vw)] -translate-x-1/2 rounded-full bg-glow blur-3xl"
      />
      <div
        aria-hidden="true"
        className="animate-drift-slow absolute -bottom-40 -right-24 size-[360px] rounded-full bg-glow blur-3xl"
      />
      <div aria-hidden="true" className="hero-cursor-glow" />

      <div className="container-page relative">
        <div className="grid items-center gap-14 lg:grid-cols-[1.18fr_0.82fr] lg:gap-16">
          <div className="animate-rise">
            <p className="inline-flex items-center gap-2.5 rounded-full border border-line/80 bg-surface/60 px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-muted backdrop-blur">
              <span className="relative flex size-1.5">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-status opacity-60" />
                <span className="relative inline-flex size-1.5 rounded-full bg-status" />
              </span>
              {profile.availability}
            </p>

            <h1 className="hero-title mt-7 font-display text-[clamp(3.5rem,10vw,6.25rem)] font-semibold leading-[0.9] tracking-[-0.045em]">
              <span className="mb-4 block font-mono text-[11px] font-normal uppercase tracking-[0.22em] text-accent md:text-xs">
                {profile.role}
              </span>
              Luan Lemos<span className="text-accent">.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted md:text-xl">
              {headlineBefore}
              <strong className="font-medium text-fg">
                {profile.headlineHighlight}
              </strong>
              {headlineAfter}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <ButtonLink href="/projetos" variant="accent" icon={<ArrowRight />}>
                Ver projetos
              </ButtonLink>
              <ButtonLink
                href={profile.cvUrl}
                variant="outline"
                external
                icon={<Download />}
              >
                Currículo
              </ButtonLink>
              <a
                href={profile.socials[0].href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-3 py-3 text-sm font-medium text-muted transition-colors hover:text-fg"
              >
                <LinkedIn className="size-4" />
                LinkedIn
                <span className="sr-only">(abre em nova aba)</span>
              </a>
            </div>

            <dl className="mt-12 grid max-w-lg grid-cols-3 gap-4 border-t border-line/70 pt-6">
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.12em] text-faint">
                  Experiência
                </dt>
                <dd className="mt-1.5 whitespace-nowrap font-display text-[17px] font-semibold tracking-tight md:text-2xl">
                  {years}+ anos
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.12em] text-faint">
                  Especialidade
                </dt>
                <dd className="mt-1.5 whitespace-nowrap font-display text-[17px] font-semibold tracking-tight md:text-2xl">
                  E-commerce
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.12em] text-faint">
                  Base
                </dt>
                <dd className="mt-1.5 whitespace-nowrap font-display text-[17px] font-semibold tracking-tight md:text-2xl">
                  Brasil
                </dd>
              </div>
            </dl>
          </div>

          <div className="animate-rise-delay-2 relative mx-auto w-full max-w-sm lg:mx-0" data-parallax="0.05">
            <div
              aria-hidden="true"
              className="absolute -inset-6 rounded-[2.5rem] bg-glow blur-2xl"
            />

            <div className="relative rounded-[1.75rem] border border-line/80 bg-surface/80 p-3 shadow-2xl shadow-black/5 backdrop-blur-xl" data-tilt data-tilt-strength="2">
              <div className="relative aspect-square overflow-hidden rounded-[1.35rem] bg-surface-2">
                <Image
                  src={profile.avatar}
                  alt={`Retrato de ${profile.name}`}
                  fill
                  priority
                  sizes="(min-width: 1024px) 340px, (min-width: 640px) 384px, 80vw"
                  className="object-cover saturate-[0.92]"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0"
                />

                <div className="absolute inset-x-4 top-4 flex items-center justify-between">
                  <span className="rounded-full border border-white/20 bg-black/30 px-3 py-1 font-mono text-[9px] uppercase tracking-[0.12em] text-white backdrop-blur">
                    @luanargolodev
                  </span>
                </div>

                <div className="absolute inset-x-4 bottom-4 text-white">
                  <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-white/60">
                    Atualmente
                  </p>
                  <p className="mt-1 text-sm font-medium">
                    Front-end Pleno · Zee.Dog
                  </p>
                </div>
              </div>

              <div className="px-3 pb-3 pt-5">
                <dl className="grid grid-cols-2 gap-4">
                  <div>
                    <dt className="font-mono text-[9px] uppercase tracking-[0.12em] text-faint">
                      Base
                    </dt>
                    <dd className="mt-1 flex items-center gap-1.5 text-[13px] text-fg">
                      <MapPin className="size-3.5 text-accent" />
                      {profile.location}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[9px] uppercase tracking-[0.12em] text-faint">
                      Foco
                    </dt>
                    <dd className="mt-1 text-[13px] text-fg">
                      E-commerce & performance
                    </dd>
                  </div>
                </dl>

                <div className="mt-5 flex items-center justify-between border-t border-line/70 pt-4">
                  <div className="flex items-center gap-1">
                    <a
                      href={profile.socials[0].href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn de Luan Lemos (abre em nova aba)"
                      className="grid size-8 place-items-center rounded-full text-muted transition-colors hover:bg-accent-soft hover:text-fg"
                    >
                      <LinkedIn className="size-4" />
                    </a>
                    <a
                      href={profile.socials[1].href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub de Luan Lemos (abre em nova aba)"
                      className="grid size-8 place-items-center rounded-full text-muted transition-colors hover:bg-accent-soft hover:text-fg"
                    >
                      <GitHub className="size-4" />
                    </a>
                  </div>
                  <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-faint">
                    portfólio · {currentYear}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <a
          href="#sobre"
          className="scroll-cue mt-16 hidden items-center gap-3 font-mono text-[10px] uppercase tracking-[0.16em] text-faint transition-colors hover:text-fg md:inline-flex"
        >
          <span className="grid size-8 place-items-center rounded-full border border-line/80">
            <ArrowDown className="size-3.5" />
          </span>
          Role para explorar
        </a>
      </div>
    </section>
  )
}
