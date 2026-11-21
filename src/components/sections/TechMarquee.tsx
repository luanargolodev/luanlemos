import { techIcons } from '@/content'
import type { Content } from '@/content/types'

interface MarqueeItem {
  name: string
  icon: string
}

function MarqueeGroup({
  items,
  hidden = false,
}: {
  items: MarqueeItem[]
  hidden?: boolean
}) {
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

export function TechMarquee({
  content,
  label,
}: {
  content: Content
  label: string
}) {
  const items = content.techGroups.flatMap((group) => group.items)

  return (
    <section
      aria-hidden="true"
      className="border-y border-line/60 bg-surface/30"
    >
      <div className="container-page flex items-center gap-8 py-4">
        <span className="hidden shrink-0 font-mono text-[9px] uppercase tracking-[0.16em] text-faint md:block">
          {label}
        </span>
        <div className="marquee min-w-0 flex-1">
          <div className="marquee-track">
            <MarqueeGroup items={items} />
            <MarqueeGroup items={items} hidden />
          </div>
        </div>
      </div>
    </section>
  )
}
