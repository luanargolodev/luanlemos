import type { Metadata } from 'next'

import { ProjectsExplorer } from '@/components/sections/ProjectsExplorer'
import { JsonLd } from '@/components/seo/JsonLd'
import { PageCTA } from '@/components/ui/PageCTA'
import { PageHero } from '@/components/ui/PageHero'
import { ProjectCard } from '@/components/ui/ProjectCard'
import { GitHub, ArrowUpRight } from '@/components/ui/icons'
import { projects } from '@/data/projects'
import { site } from '@/data/site'
import { buildBreadcrumbJsonLd, buildWebPageJsonLd, defaultOgImage } from '@/lib/seo'

export const metadata: Metadata = {
  title: { absolute: 'Projetos — Luan Lemos | E-commerce, React e Shopify' },
  description:
    'Cases de Luan Lemos em e-commerce: Zee.Dog, Zee.Now, operações internacionais Shopify, blog na Deco.cx e tema Liquid para Nannacay.',
  alternates: { canonical: '/projetos' },
  openGraph: {
    title: 'Projetos — Luan Lemos',
    description:
      'E-commerce no Brasil e lojas internacionais com React, Deco.cx, Shopify, Liquid e VTEX.',
    url: '/projetos',
    images: [defaultOgImage],
  },
}

const breadcrumbs = [
  { label: 'Início', href: '/' },
  { label: 'Projetos' },
]

const jsonLd = [
  {
    ...buildWebPageJsonLd({
      type: 'CollectionPage',
      name: 'Projetos — Luan Lemos',
      description:
        'Cases de e-commerce, operações internacionais e temas Shopify.',
      path: '/projetos',
      about: `${site.url}/#person`,
    }),
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: projects.map((project, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: project.title,
        url: `${site.url}/projeto/${project.slug}`,
      })),
    },
  },
  buildBreadcrumbJsonLd([
    { name: 'Início', path: '/' },
    { name: 'Projetos', path: '/projetos' },
  ]),
]

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        index="03"
        label="Projetos"
        title="Trabalho em produção."
        intro="Oito projetos entre Brasil e exterior: lojas, blogs e operações internacionais construídas com React, Deco.cx, VTEX, Shopify e Liquid."
        breadcrumbs={breadcrumbs}
      >
        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-[13px]">
          <a
            href="https://github.com/luanargolodev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-muted transition-colors hover:text-fg"
          >
            <GitHub className="size-4" />
            Ver GitHub
            <ArrowUpRight className="size-3.5" />
            <span className="sr-only">(abre em nova aba)</span>
          </a>
          <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-faint">
            {projects.length} projetos · Brasil e internacional
          </span>
        </div>
      </PageHero>

      <section className="section">
        <div className="container-page">
          <h2 className="sr-only">Todos os projetos</h2>
          <ProjectsExplorer total={projects.length}>
            {projects.map((project) => (
              <div
                key={project.slug}
                data-reveal
                data-project
                data-categories={project.categories.join(' ')}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </ProjectsExplorer>
        </div>
      </section>

      <PageCTA />
      <JsonLd data={jsonLd} />
    </>
  )
}
