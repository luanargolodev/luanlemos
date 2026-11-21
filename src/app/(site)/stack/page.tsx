import type { Metadata } from 'next'

import { TechStack } from '@/components/sections/TechStack'
import { JsonLd } from '@/components/seo/JsonLd'
import { PageCTA } from '@/components/ui/PageCTA'
import { PageHero } from '@/components/ui/PageHero'
import { site } from '@/data/site'
import { techGroups } from '@/data/tech'
import { buildBreadcrumbJsonLd, buildWebPageJsonLd, defaultOgImage } from '@/lib/seo'

export const metadata: Metadata = {
  title: { absolute: 'Stack — Luan Lemos | React, Next.js, BFF, GTM e GA4' },
  description:
    'Stack de Luan Lemos: React, Next.js, TypeScript, Tailwind CSS, Deco.cx, VTEX, Shopify, Liquid, BFF, Google Tag Manager e Google Analytics 4.',
  alternates: { canonical: '/stack' },
  openGraph: {
    title: 'Stack — Luan Lemos',
    description:
      'Ferramentas de front-end, e-commerce, backend for frontend e analytics.',
    url: '/stack',
    images: [defaultOgImage],
  },
}

const breadcrumbs = [
  { label: 'Início', href: '/' },
  { label: 'Stack' },
]

const highlights = [
  {
    title: 'Front-end em produção',
    description:
      'React, Next.js, TypeScript, Preact e Tailwind CSS para interfaces rápidas, acessíveis e fáceis de evoluir.',
  },
  {
    title: 'E-commerce de ponta a ponta',
    description:
      'Deco.cx, VTEX, Shopify e Liquid em lojas nacionais e internacionais, com catálogo, conteúdo e checkout.',
  },
  {
    title: 'BFF e integrações',
    description:
      'Camada de orquestração entre front-end e serviços, centralizando dados e integrações do ecossistema Zee.Dog/Zee.Now.',
  },
  {
    title: 'Analytics e mensuração',
    description:
      'Google Tag Manager e Google Analytics 4 para eventos, tags, implementações de ferramentas e integrações.',
  },
]

const jsonLd = [
  {
    ...buildWebPageJsonLd({
      type: 'CollectionPage',
      name: 'Stack — Luan Lemos',
      description:
        'Tecnologias e ferramentas usadas por Luan Lemos em front-end, e-commerce, BFF e analytics.',
      path: '/stack',
      about: `${site.url}/#person`,
    }),
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: techGroups
        .flatMap((group) => group.items)
        .map((item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item.name,
        })),
    },
  },
  buildBreadcrumbJsonLd([
    { name: 'Início', path: '/' },
    { name: 'Stack', path: '/stack' },
  ]),
]

export default function StackPage() {
  return (
    <>
      <PageHero
        index="04"
        label="Stack"
        title="Ferramentas que colocam produto no ar."
        intro="Não é uma lista de logos: é o que uso para construir interfaces, integrar lojas e manter o código sustentável."
        breadcrumbs={breadcrumbs}
      />

      <TechStack />

      <section className="section border-t border-line/60">
        <div className="container-page">
          <p className="eyebrow">Na prática</p>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold leading-tight tracking-tight md:text-[2.5rem]">
            Onde cada parte aparece no trabalho.
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {highlights.map((highlight) => (
              <article
                key={highlight.title}
                data-reveal
                className="rounded-2xl border border-line/80 bg-surface p-6"
              >
                <h3 className="font-display text-lg font-semibold tracking-tight">
                  {highlight.title}
                </h3>
                <p className="mt-3 text-[13px] leading-relaxed text-muted">
                  {highlight.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <PageCTA />
      <JsonLd data={jsonLd} />
    </>
  )
}
