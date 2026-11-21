import Image from 'next/image'

import blurData from '@/data/image-blur.json'
import type { OtherProject, Project } from '@/data/projects'
import { cn } from '@/lib/utils'

const blurPlaceholders = blurData as Record<string, string>

import { ArrowUpRight, Sparkle } from './icons'
import { Tag } from './Tag'

function hostname(url: string) {
  return new URL(url).hostname.replace(/^www\./, '')
}

export function ProjectCard({
  project,
  wide = false,
}: {
  project: Project
  wide?: boolean
}) {
  return (
    <article
      className={cn(
        'group relative flex flex-col overflow-hidden rounded-2xl border border-line/80 bg-surface transition-colors duration-300 hover:border-accent/40',
        wide && 'lg:grid lg:grid-cols-[0.92fr_1.08fr]',
      )}
    >
      <div
        className={cn(
          'relative order-1 overflow-hidden border-b border-line/70 bg-surface-2/40',
          wide && 'lg:order-2 lg:border-b-0 lg:border-l',
        )}
      >
        <div className="flex items-center gap-1.5 border-b border-line/70 bg-surface-2/50 px-3.5 py-2.5">
          <span className="size-1.5 rounded-full bg-line" />
          <span className="size-1.5 rounded-full bg-line" />
          <span className="size-1.5 rounded-full bg-line" />
          <span className="ml-2 truncate font-mono text-[9px] uppercase tracking-[0.08em] text-faint">
            {project.url ? hostname(project.url) : 'case'}
          </span>
        </div>

        <div
          className={cn(
            'relative aspect-[16/10] overflow-hidden',
            wide && 'lg:aspect-auto lg:h-[calc(100%-38px)] lg:min-h-[300px]',
          )}
        >
          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            sizes={
              wide
                ? '(min-width: 1024px) 620px, 100vw'
                : '(min-width: 1024px) 480px, (min-width: 768px) 45vw, 100vw'
            }
            quality={82}
            placeholder={blurPlaceholders[project.slug] ? 'blur' : 'empty'}
            blurDataURL={blurPlaceholders[project.slug]}
            className="object-cover object-left-top transition-transform duration-700 ease-out group-hover:scale-[1.025]"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-canvas/10 to-transparent" />
        </div>
      </div>

      <div
        className={cn(
          'order-2 flex flex-1 flex-col p-5 md:p-6',
          wide && 'lg:order-1 lg:justify-center lg:p-9',
        )}
      >
        <p className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[10px] uppercase tracking-[0.12em] text-faint">
          <span>{project.client}</span>
          <span aria-hidden="true" className="text-line">
            /
          </span>
          <span>{project.year}</span>
        </p>

        <h3
          className={cn(
            'mt-3 font-semibold leading-tight tracking-tight',
            wide ? 'text-3xl md:text-[2.1rem]' : 'text-xl',
          )}
        >
          {project.title}
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-muted">
          {project.summary}
        </p>

        <div className="mt-4 flex gap-2.5 rounded-xl border border-line/70 bg-surface-2/40 p-3.5">
          <Sparkle className="mt-0.5 size-3.5 shrink-0 text-accent" />
          <p className="text-[13px] leading-relaxed text-muted">
            <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-faint">
              O que ficou ·{' '}
            </span>
            {project.outcome}
          </p>
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-1.5">
          {project.stack.map((item) => (
            <Tag key={item}>{item}</Tag>
          ))}
        </div>

        <div className="mt-auto flex items-center gap-4 pt-6">
          {project.url ? (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[13px] font-medium text-fg transition-colors hover:text-accent"
            >
              Ver site
              <ArrowUpRight className="size-3.5" />
              <span className="sr-only">de {project.title} (abre em nova aba)</span>
            </a>
          ) : (
            <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-faint">
              Case sem link público
            </span>
          )}

          {project.repo ? (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[13px] font-medium text-muted transition-colors hover:text-fg"
            >
              Código
              <ArrowUpRight className="size-3.5" />
              <span className="sr-only">
                de {project.title} no GitHub (abre em nova aba)
              </span>
            </a>
          ) : null}
        </div>
      </div>
    </article>
  )
}

export function OtherProjectRow({ project }: { project: OtherProject }) {
  return (
    <li className="group grid grid-cols-[1fr_auto] items-baseline gap-x-4 gap-y-1.5 border-b border-line/70 py-4 last:border-none sm:grid-cols-[1.3fr_1fr_1fr_auto] sm:gap-x-6">
      <div className="col-start-1 row-start-1 flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <h3 className="text-[15px] font-medium text-fg">{project.title}</h3>
        <span className="font-mono text-[10px] text-faint">{project.year}</span>
      </div>

      {project.url ? (
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="col-start-2 row-start-1 inline-flex items-center gap-1 justify-self-end text-[12px] text-muted transition-colors hover:text-accent sm:col-start-4"
        >
          Ver
          <ArrowUpRight className="size-3" />
          <span className="sr-only">
            {project.title} (abre em nova aba)
          </span>
        </a>
      ) : (
        <span className="col-start-2 row-start-1 hidden justify-self-end font-mono text-[9px] uppercase tracking-[0.08em] text-faint sm:col-start-4 sm:block">
          —
        </span>
      )}

      <p className="col-span-2 row-start-2 text-[12px] text-muted sm:col-span-1 sm:col-start-2 sm:row-start-1 sm:text-[13px]">
        {project.client}
      </p>
      <p className="col-span-2 row-start-3 font-mono text-[10px] uppercase tracking-[0.06em] text-faint sm:col-span-1 sm:col-start-3 sm:row-start-1">
        {project.stack.join(' · ')}
      </p>
    </li>
  )
}
