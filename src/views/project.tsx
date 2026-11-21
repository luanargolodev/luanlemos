import Image from 'next/image'
import Link from 'next/link'

import { JsonLd } from '@/components/seo/JsonLd'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { PageCTA } from '@/components/ui/PageCTA'
import { Tag } from '@/components/ui/Tag'
import { ArrowRight, ArrowUpRight, Sparkle } from '@/components/ui/icons'
import type { Content, Project } from '@/content/types'
import blurData from '@/data/image-blur.json'
import { interpolate, type Messages } from '@/i18n/messages'
import { href, homeHref } from '@/i18n/routing'
import {
  buildBreadcrumbJsonLd,
  buildProjectJsonLd,
  buildWebPageJsonLd,
} from '@/lib/seo'
import { site } from '@/data/site'

const blurPlaceholders = blurData as Record<string, string>

function imageKey(image: string) {
  return image.split('/').pop()?.replace(/\.webp$/, '') ?? ''
}

function coverImage(image: string) {
  return image.replace('/images/projects/', '/images/projects/cover/')
}

function hostname(url: string) {
  try {
    return new URL(url).hostname.replace(/^www\./, '')
  } catch {
    return url
  }
}

export function ProjectView({
  locale,
  messages,
  content,
  project,
  index,
}: {
  locale: string
  messages: Messages
  content: Content
  project: Project
  index: number
}) {
  const path = href(locale, 'project', { slug: project.slug })
  const previous =
    content.projects[(index - 1 + content.projects.length) % content.projects.length]
  const next = content.projects[(index + 1) % content.projects.length]
  const blur = blurPlaceholders[imageKey(project.image)]

  const jsonLd = [
    buildProjectJsonLd({ locale, project, path }),
    {
      ...buildWebPageJsonLd({
        type: 'WebPage',
        name: interpolate(messages.project.metaTitle, {
          title: project.title,
          suffix: messages.project.metaSuffix,
        }),
        description: project.summary,
        path,
        locale,
        about: `${site.url}/#person`,
      }),
      mainEntity: { '@id': `${site.url}${path}#work` },
    },
    buildBreadcrumbJsonLd([
      { name: messages.common.home, path: homeHref(locale) },
      { name: messages.nav.projects, path: href(locale, 'projects') },
      { name: project.title, path },
    ]),
  ]

  return (
    <>
      <article>
        <header className="relative overflow-hidden border-b border-line/60 pb-10 pt-28 md:pb-12 md:pt-36">
          <div aria-hidden="true" className="grid-bg absolute inset-0" />
          <div
            aria-hidden="true"
            className="absolute -right-32 -top-32 size-[420px] rounded-full bg-glow blur-3xl"
          />
          <div className="container-page relative">
            <Breadcrumbs
              items={[
                { label: messages.common.home, href: homeHref(locale) },
                { label: messages.nav.projects, href: href(locale, 'projects') },
                { label: project.title },
              ]}
            />

            <p className="eyebrow mt-8">
              {interpolate(messages.project.eyebrow, {
                year: project.year,
                client: project.client,
              })}
            </p>
            <h1 className="mt-5 max-w-4xl font-display text-[clamp(2.75rem,8vw,5.5rem)] font-semibold leading-[0.92] tracking-[-0.045em]">
              {project.title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
              {project.summary}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              {project.url ? (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-line/80 px-4 py-2 text-[13px] font-medium text-fg transition-colors hover:border-accent/60 hover:bg-accent-soft"
                >
                  {messages.project.visit}
                  <ArrowUpRight className="size-3.5" />
                  <span className="sr-only">{messages.common.externalLink}</span>
                </a>
              ) : null}
              <Link
                href={href(locale, 'projects')}
                className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-[13px] text-muted transition-colors hover:text-fg"
              >
                <span aria-hidden="true">←</span>
                {messages.project.allProjects}
              </Link>
            </div>
          </div>
        </header>

        <div className="container-page">
          <div className="relative -mt-px aspect-[16/10] overflow-hidden rounded-b-2xl border border-t-0 border-line/80 bg-surface-2 md:rounded-2xl md:border-t">
            <div className="flex items-center gap-1.5 border-b border-line/70 bg-surface-2/60 px-4 py-2.5">
              <span className="size-1.5 rounded-full bg-line" />
              <span className="size-1.5 rounded-full bg-line" />
              <span className="size-1.5 rounded-full bg-line" />
              <span className="ml-2 truncate font-mono text-[9px] uppercase tracking-[0.08em] text-muted">
                {project.url ? hostname(project.url) : 'case'}
              </span>
            </div>
            <div className="relative h-[calc(100%-38px)] min-h-[260px]">
              <Image
                src={coverImage(project.image)}
                alt={project.imageAlt}
                fill
                priority
                sizes="(min-width: 1024px) 1200px, 100vw"
                placeholder={blur ? 'blur' : 'empty'}
                blurDataURL={blur}
                className="object-cover object-left-top"
              />
            </div>
          </div>

          <div className="mt-12 grid gap-12 lg:grid-cols-[0.32fr_0.68fr] lg:gap-16">
            <aside className="self-start lg:sticky lg:top-24">
              <dl className="border-t border-line/70">
                <div className="border-b border-line/70 py-3.5">
                  <dt className="font-mono text-[9px] uppercase tracking-[0.12em] text-faint">
                    {messages.project.client}
                  </dt>
                  <dd className="mt-1 text-sm text-fg">{project.client}</dd>
                </div>
                <div className="border-b border-line/70 py-3.5">
                  <dt className="font-mono text-[9px] uppercase tracking-[0.12em] text-faint">
                    {messages.project.year}
                  </dt>
                  <dd className="mt-1 text-sm text-fg">{project.year}</dd>
                </div>
                <div className="border-b border-line/70 py-3.5">
                  <dt className="font-mono text-[9px] uppercase tracking-[0.12em] text-faint">
                    {messages.project.role}
                  </dt>
                  <dd className="mt-1 text-sm text-fg">
                    {project.caseStudy.role}
                  </dd>
                </div>
                <div className="border-b border-line/70 py-3.5">
                  <dt className="font-mono text-[9px] uppercase tracking-[0.12em] text-faint">
                    {messages.project.stack}
                  </dt>
                  <dd className="mt-2 flex flex-wrap gap-1.5">
                    {project.stack.map((item) => (
                      <Tag key={item}>{item}</Tag>
                    ))}
                  </dd>
                </div>
              </dl>

              {project.url ? (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-fg"
                >
                  {messages.project.openSite}
                  <ArrowUpRight className="size-4 text-accent" />
                  <span className="sr-only">{messages.common.externalLink}</span>
                </a>
              ) : null}
            </aside>

            <div className="space-y-12">
              <section data-reveal aria-labelledby="case-context">
                <h2
                  id="case-context"
                  className="border-b border-line/70 pb-3 font-mono text-[10px] uppercase tracking-[0.16em] text-faint"
                >
                  {messages.project.context}
                </h2>
                <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-muted md:text-base">
                  {project.caseStudy.context.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>

              <section data-reveal aria-labelledby="case-challenge">
                <h2
                  id="case-challenge"
                  className="border-b border-line/70 pb-3 font-mono text-[10px] uppercase tracking-[0.16em] text-faint"
                >
                  {messages.project.challenge}
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-fg md:text-xl">
                  {project.caseStudy.challenge}
                </p>
              </section>

              <section data-reveal aria-labelledby="case-approach">
                <h2
                  id="case-approach"
                  className="border-b border-line/70 pb-3 font-mono text-[10px] uppercase tracking-[0.16em] text-faint"
                >
                  {messages.project.approach}
                </h2>
                <ol className="mt-5 space-y-4">
                  {project.caseStudy.approach.map((item, itemIndex) => (
                    <li key={item} className="flex gap-4">
                      <span className="font-mono text-[10px] text-accent">
                        0{itemIndex + 1}
                      </span>
                      <span className="text-[15px] leading-relaxed text-muted">
                        {item}
                      </span>
                    </li>
                  ))}
                </ol>
              </section>

              <section data-reveal aria-labelledby="case-outcome">
                <h2
                  id="case-outcome"
                  className="border-b border-line/70 pb-3 font-mono text-[10px] uppercase tracking-[0.16em] text-faint"
                >
                  {messages.project.outcome}
                </h2>
                <div className="mt-5 rounded-2xl border border-line/80 bg-surface p-5">
                  <div className="flex gap-2.5">
                    <Sparkle className="mt-0.5 size-4 shrink-0 text-accent" />
                    <p className="text-[15px] leading-relaxed text-fg">
                      {project.outcome}
                    </p>
                  </div>
                  <ul className="mt-4 space-y-2 border-t border-line/70 pt-4">
                    {project.caseStudy.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex gap-2.5 text-[13px] leading-relaxed text-muted"
                      >
                        <span className="mt-[7px] size-1 shrink-0 rounded-full bg-accent/70" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            </div>
          </div>
        </div>

        <div className="container-page mt-16">
          <div className="grid gap-4 border-t border-line/70 pt-8 md:grid-cols-2">
            <Link
              href={href(locale, 'project', { slug: previous.slug })}
              className="group rounded-2xl border border-line/80 bg-surface p-5 transition-colors hover:border-accent/40"
            >
              <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-faint">
                {messages.project.previous}
              </span>
              <span className="mt-3 flex items-center justify-between gap-4">
                <span className="font-display text-lg font-semibold tracking-tight">
                  {previous.title}
                </span>
                <ArrowRight className="size-4 rotate-180 text-accent transition-transform group-hover:-translate-x-1" />
              </span>
            </Link>
            <Link
              href={href(locale, 'project', { slug: next.slug })}
              className="group rounded-2xl border border-line/80 bg-surface p-5 text-right transition-colors hover:border-accent/40"
            >
              <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-faint">
                {messages.project.next}
              </span>
              <span className="mt-3 flex items-center justify-between gap-4">
                <span className="font-display text-lg font-semibold tracking-tight">
                  {next.title}
                </span>
                <ArrowRight className="size-4 text-accent transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </div>
        </div>
      </article>

      <PageCTA locale={locale} messages={messages} content={content} />
      <JsonLd data={jsonLd} />
    </>
  )
}
