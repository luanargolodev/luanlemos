import type { ReactNode } from 'react'

import { Breadcrumbs, type BreadcrumbItem } from './Breadcrumbs'

interface PageHeroProps {
  index: string
  label: string
  title: ReactNode
  intro?: ReactNode
  breadcrumbs: BreadcrumbItem[]
  children?: ReactNode
}

export function PageHero({
  index,
  label,
  title,
  intro,
  breadcrumbs,
  children,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-line/60 pb-12 pt-28 md:pb-16 md:pt-36">
      <div aria-hidden="true" className="grid-bg absolute inset-0" />
      <div
        aria-hidden="true"
        className="absolute -right-32 -top-32 size-[420px] rounded-full bg-glow blur-3xl"
      />

      <div className="container-page relative">
        <Breadcrumbs items={breadcrumbs} />

        <p className="eyebrow mt-8">
          {index} — {label}
        </p>
        <h1 className="mt-5 max-w-4xl font-display text-[clamp(2.75rem,7vw,5.25rem)] font-semibold leading-[0.95] tracking-[-0.04em]">
          {title}
        </h1>
        {intro ? (
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
            {intro}
          </p>
        ) : null}
        {children}
      </div>
    </section>
  )
}
