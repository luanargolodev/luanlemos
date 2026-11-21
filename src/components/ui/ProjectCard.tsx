import Image from 'next/image'
import Link from 'next/link'

import blurData from '@/data/image-blur.json'
import type { Project } from '@/data/projects'
import { cn } from '@/lib/utils'

import { ArrowRight, ArrowUpRight, Sparkle } from './icons'
import { Tag } from './Tag'

const blurPlaceholders = blurData as Record<string, string>

function hostname(url: string) {
  return new URL(url).hostname.replace(/^www\./, '')
}

function imageKey(image: string) {
  return image.split('/').pop()?.replace(/\.webp$/, '') ?? ''
}

export function ProjectCard({
  project,
  wide = false,
}: {
  project: Project
  wide?: boolean
}) {
  const caseHref = `/projeto/${project.slug}`
  const blur = blurPlaceholders[imageKey(project.image)]

  return (
    <article
      data-tilt
      data-project
      data-categories={project.categories.join(' ')}
      data-tilt-strength={wide ? 1.6 : 2.6}
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
          <span className="ml-2 truncate font-mono text-[9px] uppercase tracking-[0.08em] text-muted">
            {project.url ? hostname(project.url) : 'case'}
          </span>
        </div>

        <div
          className={cn(
            'relative aspect-[16/10] overflow-hidden',
            wide && 'lg:aspect-auto lg:h-[calc(100%-38px)] lg:min-h-[300px]',
          )}
        >
          <Link
            href={caseHref}
            aria-label={`Ver case ${project.title}`}
            className="relative block h-full w-full"
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
              placeholder={blur ? 'blur' : 'empty'}
              blurDataURL={blur}
              className="object-cover object-left-top transition-transform duration-700 ease-out group-hover:scale-[1.025]"
            />
          </Link>
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
          <Link href={caseHref} className="transition-colors hover:text-accent">
            {project.title}
          </Link>
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

        <div className="mt-auto flex flex-wrap items-center gap-4 pt-6">
          <Link
            href={caseHref}
            className="inline-flex items-center gap-1.5 text-[13px] font-medium text-fg transition-colors hover:text-accent"
          >
            Ver case
            <ArrowRight className="size-3.5" />
          </Link>

          {project.url ? (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[13px] font-medium text-muted transition-colors hover:text-fg"
            >
              Ver site
              <ArrowUpRight className="size-3.5" />
              <span className="sr-only">
                de {project.title} (abre em nova aba)
              </span>
            </a>
          ) : null}

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
