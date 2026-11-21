import type { Metadata } from 'next'

import { Certifications } from '@/components/sections/Certifications'
import { Experience } from '@/components/sections/Experience'
import { JsonLd } from '@/components/seo/JsonLd'
import { PageCTA } from '@/components/ui/PageCTA'
import { PageHero } from '@/components/ui/PageHero'
import { site } from '@/data/site'
import { getExperienceDuration } from '@/lib/dates'
import { buildBreadcrumbJsonLd, buildWebPageJsonLd, defaultOgImage } from '@/lib/seo'

export const metadata: Metadata = {
  title: { absolute: 'Experiência — Luan Lemos | Front-end, BFF e E-commerce' },
  description:
    'Trajetória de Luan Lemos como desenvolvedor front-end: Zee.Dog, Zee.Now, BFF do ecossistema, lojas Deco.cx/Shopify, VTEX e reconhecimentos.',
  alternates: { canonical: '/experiencia' },
  openGraph: {
    title: 'Experiência — Luan Lemos',
    description:
      'Front-end pleno no ecossistema Zee.Dog, com BFF, Deco.cx, Shopify, VTEX e projetos internacionais.',
    url: '/experiencia',
    images: [defaultOgImage],
  },
}

const breadcrumbs = [
  { label: 'Início', href: '/' },
  { label: 'Experiência' },
]

const highlights = [
  {
    label: 'BFF',
    title: 'BFF de todo o ecossistema',
    description:
      'Um dos responsáveis pelo BFF de Zee.Dog e Zee.Now, centralizando integrações e dados consumidos pelo front-end.',
  },
  {
    label: 'Internacional',
    title: 'Operações fora do Brasil',
    description:
      'Lojas no Japão, Europa, Austrália e Peru combinando a camada de experiência na Deco.cx com catálogo e checkout na Shopify.',
  },
  {
    label: 'Analytics',
    title: 'Mensuração e tracking',
    description:
      'Google Tag Manager e Google Analytics 4 para criação de eventos, tags, implementações de ferramentas e integrações.',
  },
]

const jsonLd = [
  {
    ...buildWebPageJsonLd({
      type: 'ProfilePage',
      name: 'Experiência — Luan Lemos',
      description:
        'Trajetória profissional de Luan Lemos como desenvolvedor front-end.',
      path: '/experiencia',
      about: `${site.url}/#person`,
    }),
    mainEntity: { '@id': `${site.url}/#person` },
  },
  buildBreadcrumbJsonLd([
    { name: 'Início', path: '/' },
    { name: 'Experiência', path: '/experiencia' },
  ]),
]

export default function ExperiencePage() {
  return (
    <>
      <PageHero
        index="02"
        label="Experiência"
        title="Experiência e impacto."
        intro={`${getExperienceDuration()} de trabalho em front-end, de landing pages em agência à operação internacional de uma marca de alcance nacional.`}
        breadcrumbs={breadcrumbs}
      />

      <section className="section">
        <div className="container-page">
          <div className="grid gap-4 md:grid-cols-3">
            {highlights.map((highlight) => (
              <article
                key={highlight.title}
                data-reveal
                className="rounded-2xl border border-line/80 bg-surface p-6"
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-accent">
                  {highlight.label}
                </p>
                <h2 className="mt-4 font-display text-xl font-semibold leading-snug tracking-tight">
                  {highlight.title}
                </h2>
                <p className="mt-3 text-[13px] leading-relaxed text-muted">
                  {highlight.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Experience />
      <Certifications />
      <PageCTA />
      <JsonLd data={jsonLd} />
    </>
  )
}
