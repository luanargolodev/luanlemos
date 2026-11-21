import { techGroups, techIcons } from '@/data/tech'

import { SectionHeading } from '@/components/ui/SectionHeading'

export function TechStack() {
  return (
    <section id="stack" className="section border-t border-line/60">
      <div className="container-page">
        <div className="reveal grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <SectionHeading
            index="04"
            label="Stack"
            title="Ferramentas do dia a dia."
          />
          <p className="max-w-xl text-base leading-relaxed text-muted lg:justify-self-end">
            Não é uma lista de logos: é o que uso para colocar interfaces em
            produção, integrar lojas e manter o código sustentável.
          </p>
        </div>

        <div className="reveal mt-12 border-t border-line/70">
          {techGroups.map((group) => (
            <div
              key={group.label}
              className="grid gap-5 border-b border-line/70 py-8 md:grid-cols-[230px_1fr] md:gap-10 md:py-10"
            >
              <div>
                <h3 className="font-display text-lg font-semibold tracking-tight">
                  {group.label}
                </h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-muted">
                  {group.description}
                </p>
              </div>

              <ul className="flex flex-wrap gap-2.5">
                {group.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-center gap-2.5 rounded-xl border border-line/70 bg-surface px-3 py-2 text-[13px] text-fg transition-colors hover:border-accent/40"
                  >
                    <img
                      src={techIcons[item.icon]}
                      alt=""
                      width={20}
                      height={20}
                      loading="lazy"
                      className={
                        item.icon === 'deco'
                          ? 'h-4 w-8 object-contain'
                          : 'size-5 object-contain'
                      }
                    />
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="reveal mt-6 font-mono text-[10px] uppercase tracking-[0.12em] text-faint">
          Sempre estudando performance, acessibilidade e arquitetura de
          front-end.
        </p>
      </div>
    </section>
  )
}
