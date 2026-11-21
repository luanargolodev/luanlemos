'use client'

import { useState, type ReactNode } from 'react'

import { interpolate } from '@/i18n/interpolate'

const filters = [
  { key: 'todos', labelKey: 'all' },
  { key: 'brasil', labelKey: 'brasil' },
  { key: 'internacional', labelKey: 'internacional' },
  { key: 'shopify', labelKey: 'shopify' },
  { key: 'deco', labelKey: 'deco' },
] as const

type FilterKey = (typeof filters)[number]['key']

export interface ProjectsExplorerLabels {
  filtersLabel: string
  filters: Record<
    'all' | 'brasil' | 'internacional' | 'shopify' | 'deco',
    string
  >
  count: string
  filterAllAnnouncement: string
  filterAnnouncement: string
}

export function ProjectsExplorer({
  children,
  total,
  labels,
}: {
  children: ReactNode
  total: number
  labels: ProjectsExplorerLabels
}) {
  const [active, setActive] = useState<FilterKey>('todos')

  return (
    <div>
      <div className="flex flex-wrap items-center gap-2">
        <div
          className="flex flex-wrap gap-2"
          role="group"
          aria-label={labels.filtersLabel}
        >
          {filters.map((filter) => {
            const isActive = filter.key === active

            return (
              <button
                key={filter.key}
                type="button"
                onClick={() => setActive(filter.key)}
                aria-pressed={isActive}
                className={`cursor-pointer rounded-full border px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.1em] transition-colors ${
                  isActive
                    ? 'border-fg bg-fg text-canvas'
                    : 'border-line/80 bg-transparent text-muted hover:border-accent/50 hover:text-fg'
                }`}
              >
                {labels.filters[filter.labelKey]}
              </button>
            )
          })}
        </div>
        <span className="ml-auto font-mono text-[10px] uppercase tracking-[0.1em] text-faint">
          {interpolate(labels.count, { count: total })}
        </span>
      </div>

      <p className="sr-only" aria-live="polite">
        {active === 'todos'
          ? interpolate(labels.filterAllAnnouncement, { count: total })
          : interpolate(labels.filterAnnouncement, {
              label: labels.filters[active],
            })}
      </p>

      <div
        className="projects-grid mt-10 grid gap-5 md:grid-cols-2"
        data-filter={active}
      >
        {children}
      </div>
    </div>
  )
}
