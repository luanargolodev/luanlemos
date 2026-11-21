'use client'

import { useState, type ReactNode } from 'react'

const filters = [
  { key: 'todos', label: 'Todos' },
  { key: 'brasil', label: 'Brasil' },
  { key: 'internacional', label: 'Internacional' },
  { key: 'shopify', label: 'Shopify & Liquid' },
  { key: 'deco', label: 'Deco.cx' },
] as const

type FilterKey = (typeof filters)[number]['key']

export function ProjectsExplorer({
  children,
  total,
}: {
  children: ReactNode
  total: number
}) {
  const [active, setActive] = useState<FilterKey>('todos')

  return (
    <div>
      <div className="flex flex-wrap items-center gap-2">
        <div
          className="flex flex-wrap gap-2"
          role="group"
          aria-label="Filtrar projetos"
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
                {filter.label}
              </button>
            )
          })}
        </div>
        <span className="ml-auto font-mono text-[10px] uppercase tracking-[0.1em] text-faint">
          {total} projetos
        </span>
      </div>

      <p className="sr-only" aria-live="polite">
        {active === 'todos'
          ? `Mostrando todos os ${total} projetos`
          : `Filtrando projetos por ${filters.find((filter) => filter.key === active)?.label}`}
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
