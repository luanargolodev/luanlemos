import { techIcons } from '@/content'
import type { Content } from '@/content/types'
import type { Messages } from '@/i18n/messages/pt'

export function TechStack({
  messages,
  content,
}: {
  messages: Messages
  content: Content
}) {
  return (
    <section
      id={messages.home.sections.stack}
      className="section border-t border-line/60"
    >
      <div className="container-page">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div data-reveal>
            <p className="eyebrow">{messages.stack.label}</p>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight md:text-[2.5rem]">
              {messages.stack.detailedTitle}
            </h2>
          </div>
          <p className="max-w-xl text-base leading-relaxed text-muted lg:justify-self-end">
            {messages.stack.detailedDescription}
          </p>
        </div>

        <div className="mt-12 border-t border-line/70">
          {content.techGroups.map((group) => (
            <div
              key={group.id}
              data-reveal
              className="grid gap-5 border-b border-line/70 py-8 md:grid-cols-[230px_1fr] md:gap-10 md:py-10"
            >
              <div>
                <h3 className="font-display text-lg font-semibold tracking-tight">
                  {group.label}
                </h3>
                <p className="mt-1 text-[12px] leading-relaxed text-muted">
                  {group.description}
                </p>
              </div>

              <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {group.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-center gap-2.5 rounded-lg border border-line/70 bg-surface px-3 py-2 text-[13px] text-muted"
                  >
                    <img
                      src={techIcons[item.icon]}
                      alt=""
                      width={18}
                      height={18}
                      loading="lazy"
                      className="size-[18px] object-contain"
                    />
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
