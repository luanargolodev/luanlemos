import type { Metadata } from 'next'
import Image from 'next/image'

import { ExperiencePreview } from '@/components/sections/ExperiencePreview'
import { JsonLd } from '@/components/seo/JsonLd'
import { PageCTA } from '@/components/ui/PageCTA'
import { PageHero } from '@/components/ui/PageHero'
import { profile } from '@/data/profile'
import { site } from '@/data/site'
import { getExperienceDuration } from '@/lib/dates'
import { buildBreadcrumbJsonLd, buildWebPageJsonLd, defaultOgImage } from '@/lib/seo'

export const metadata: Metadata = {
  title: { absolute: 'Sobre — Luan Lemos | Desenvolvedor Front-end Pleno' },
  description: profile.summary,
  alternates: { canonical: '/sobre' },
  openGraph: {
    title: 'Sobre — Luan Lemos',
    description: profile.summary,
    url: '/sobre',
    images: [defaultOgImage],
  },
}

const breadcrumbs = [
  { label: 'Início', href: '/' },
  { label: 'Sobre' },
]

const jsonLd = [
  buildWebPageJsonLd({
    type: 'AboutPage',
    name: 'Sobre — Luan Lemos',
    description: profile.summary,
    path: '/sobre',
    about: `${site.url}/#person`,
  }),
  buildBreadcrumbJsonLd([
    { name: 'Início', path: '/' },
    { name: 'Sobre', path: '/sobre' },
  ]),
]

const principles = [
  {
    title: 'Interfaces antes de abstrações',
    description:
      'Começo pelo que a pessoa precisa entender e fazer. Componente e abstração vêm depois — e só quando ajudam o produto a evoluir.',
  },
  {
    title: 'Performance é requisito',
    description:
      'Uma loja bonita que demora para abrir perde a venda. Trato peso, carregamento e responsividade como parte do design, não como acabamento.',
  },
  {
    title: 'Código que o próximo consegue manter',
    description:
      'Prefiro soluções claras e previsíveis. Documentação, consistência e handoff fazem parte de entregar bem, especialmente em times distribuídos.',
  },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        index="01"
        label="Sobre"
        title="Quem sou, o que faço e como trabalho."
        intro="Desenvolvedor front-end pleno com foco em e-commerce, interfaces de produto e a parte invisível que faz uma loja funcionar."
        breadcrumbs={breadcrumbs}
      />

      <section className="section">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
            <div data-reveal>
              <div className="relative aspect-square overflow-hidden rounded-2xl border border-line/80 bg-surface-2">
                <Image
                  src={profile.avatar}
                  alt={`Retrato de ${profile.name}`}
                  fill
                  sizes="(min-width: 1024px) 360px, 80vw"
                  className="object-cover saturate-[0.92]"
                />
              </div>

              <dl className="mt-6 space-y-4 border-t border-line/70 pt-6">
                <div className="grid grid-cols-[104px_1fr] gap-4">
                  <dt className="font-mono text-[10px] uppercase tracking-[0.12em] text-faint">
                    Atualmente
                  </dt>
                  <dd className="text-sm text-fg">Zee.Dog · Front-end Pleno</dd>
                </div>
                <div className="grid grid-cols-[104px_1fr] gap-4">
                  <dt className="font-mono text-[10px] uppercase tracking-[0.12em] text-faint">
                    Experiência
                  </dt>
                  <dd className="text-sm text-fg">
                    {getExperienceDuration()} em front-end
                  </dd>
                </div>
                <div className="grid grid-cols-[104px_1fr] gap-4">
                  <dt className="font-mono text-[10px] uppercase tracking-[0.12em] text-faint">
                    Formação
                  </dt>
                  <dd className="text-sm text-fg">
                    {profile.education.course}
                    <span className="mt-0.5 block text-xs text-muted">
                      {profile.education.institution} ·{' '}
                      {profile.education.period}
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
            </div>

            <div data-reveal>
              <p className="font-display text-2xl leading-snug tracking-tight text-fg md:text-[2rem]">
                {profile.bio[0]}
              </p>

              <div className="mt-7 space-y-5 text-[15px] leading-relaxed text-muted md:text-base">
                {profile.bio.slice(1).map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-8 rounded-2xl border border-line/80 bg-surface p-5">
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-faint">
                  O que estou estudando agora
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Performance em e-commerce, arquitetura de front-end,
                  acessibilidade e formas de usar IA para melhorar o fluxo de
                  desenvolvimento sem perder qualidade.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {[
                  'React.js',
                  'Next.js',
                  'TypeScript',
                  'Deco.cx',
                  'VTEX',
                  'Shopify',
                  'Liquid',
                  'BFF',
                  'GTM',
                  'GA4',
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-line/70 bg-surface px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.08em] text-muted"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section border-t border-line/60">
        <div className="container-page">
          <p className="eyebrow">Como trabalho</p>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold leading-tight tracking-tight md:text-[2.5rem]">
            Princípios que aparecem no código.
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {principles.map((principle, index) => (
              <article
                key={principle.title}
                data-reveal
                className="rounded-2xl border border-line/80 bg-surface p-6"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-accent">
                  0{index + 1}
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold leading-snug tracking-tight">
                  {principle.title}
                </h3>
                <p className="mt-3 text-[13px] leading-relaxed text-muted">
                  {principle.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ExperiencePreview />
      <PageCTA />
      <JsonLd data={jsonLd} />
    </>
  )
}
