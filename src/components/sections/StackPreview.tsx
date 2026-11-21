import Link from 'next/link'

import { techGroups, techIcons } from '@/data/tech'

import { SectionHeading } from '@/components/ui/SectionHeading'
import { ArrowRight } from '@/components/ui/icons'

export function StackPreview() {
  return (
    <section id="stack" className="section border-t border-line/60">
      <div className="container-page">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            index="04"
            label="Stack"
            title="Ferramentas do dia a dia."
            description="A base técnica que uso para colocar interfaces em produção e integrar lojas."
          />
          <Link
            href="/stack"
            className="group inline-flex shrink-0 items-center gap-2 text-sm font-medium text-fg"
          >
            Ver stack completa
            <ArrowRight className="size-4 text-accent transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {techGroups.map((group) => (
            <article
              key={group.label}
              data-reveal
              className="rounded-2xl border border-line/80 bg-surface p-5"
            >
              <h3 className="font-display text-base font-semibold tracking-tight">
                {group.label}
              </h3>
              <p className="mt-1 text-[12px] leading-relaxed text-muted">
                {group.description}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.slice(0, 6).map((item) => (
                  <li
                    key={item.name}
                    className="flex items-center gap-2 rounded-lg border border-line/70 bg-canvas px-2.5 py-1.5 font-mono text-[9px] uppercase tracking-[0.06em] text-muted"
                  >
                    <img
                      src={techIcons[item.icon]}
                      alt=""
                      width={16}
                      height={16}
                      loading="lazy"
                      className="size-4 object-contain"
                    />
                    {item.name}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
