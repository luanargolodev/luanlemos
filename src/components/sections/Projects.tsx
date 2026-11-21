import { featuredProjects } from '@/data/projects'

import { SectionHeading } from '@/components/ui/SectionHeading'
import { ProjectCard } from '@/components/ui/ProjectCard'
import { ArrowUpRight, GitHub } from '@/components/ui/icons'

export function Projects() {
  const [leadProject, ...restProjects] = featuredProjects

  return (
    <section id="projetos" className="section border-t border-line/60">
      <div className="container-page">
        <div className="reveal flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            index="03"
            label="Projetos"
            title="Trabalho selecionado."
            description="Uma seleção do que construí em e-commerce: operações no Brasil e lojas internacionais, com foco em performance, consistência e detalhe."
          />

          <a
            href="https://github.com/luanargolodev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 text-sm text-muted transition-colors hover:text-fg"
          >
            <GitHub className="size-4" />
            Ver GitHub
            <ArrowUpRight className="size-3.5" />
            <span className="sr-only">(abre em nova aba)</span>
          </a>
        </div>

        <div className="reveal mt-12 grid gap-5 md:grid-cols-2">
          <div className="md:col-span-2">
            <ProjectCard project={leadProject} wide />
          </div>
          {restProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
