import Link from 'next/link'

import { projects } from '@/data/projects'

import { SectionHeading } from '@/components/ui/SectionHeading'
import { ProjectCard } from '@/components/ui/ProjectCard'
import { ArrowRight } from '@/components/ui/icons'

const homeProjects = projects.slice(0, 4)

export function ProjectsPreview() {
  return (
    <section id="projetos" className="section border-t border-line/60">
      <div className="container-page">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            index="03"
            label="Projetos"
            title="Trabalho selecionado."
            description="E-commerce no Brasil e lojas internacionais — React, Deco.cx, VTEX, Shopify e Liquid."
          />
          <Link
            href="/projetos"
            className="group inline-flex shrink-0 items-center gap-2 text-sm font-medium text-fg"
          >
            Ver todos os projetos
            <ArrowRight className="size-4 text-accent transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {homeProjects.map((project) => (
            <div key={project.slug} data-reveal>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        <Link
          href="/projetos"
          className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-fg transition-colors hover:text-accent"
        >
          Explorar os 8 projetos
          <ArrowRight className="size-4" />
        </Link>
      </div>
    </section>
  )
}
