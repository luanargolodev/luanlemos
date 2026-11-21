import { featuredProjects, otherProjects } from '@/data/projects'

import { SectionHeading } from '@/components/ui/SectionHeading'
import { OtherProjectRow, ProjectCard } from '@/components/ui/ProjectCard'
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
            description="Uma seleção do que construí em e-commerce: plataformas, campanhas e detalhes de interface que fazem diferença na experiência de compra."
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
          {restProjects.map((project, index) => {
            const isLast = index === restProjects.length - 1

            return (
              <div key={project.slug} className={isLast ? 'md:col-span-2' : ''}>
                <ProjectCard project={project} wide={isLast} />
              </div>
            )
          })}
        </div>

        <div className="reveal mt-16">
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <h3 className="font-display text-xl font-semibold tracking-tight">
              Outros trabalhos
            </h3>
            <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-faint">
              {otherProjects.length} projetos · 2022
            </p>
          </div>

          <ul className="mt-4 border-t border-line/70">
            {otherProjects.map((project) => (
              <OtherProjectRow key={project.title} project={project} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
