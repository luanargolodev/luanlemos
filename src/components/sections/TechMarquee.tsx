import { techGroups, techIcons } from '@/data/tech'

const items = techGroups.flatMap((group) => group.items)

function MarqueeGroup({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul className="marquee-group" aria-hidden={hidden || undefined}>
      {items.map((item) => (
        <li key={item.name} className="marquee-item">
          <img
            src={techIcons[item.icon]}
            alt=""
            width={18}
            height={18}
            loading="lazy"
          />
          {item.name}
        </li>
      ))}
    </ul>
  )
}

export function TechMarquee() {
  return (
    <section
      aria-hidden="true"
      className="border-y border-line/60 bg-surface/30"
    >
      <div className="container-page flex items-center gap-8 py-4">
        <span className="hidden shrink-0 font-mono text-[9px] uppercase tracking-[0.16em] text-faint md:block">
          Stack
        </span>
        <div className="marquee min-w-0 flex-1">
          <div className="marquee-track">
            <MarqueeGroup />
            <MarqueeGroup hidden />
          </div>
        </div>
      </div>
    </section>
  )
}
