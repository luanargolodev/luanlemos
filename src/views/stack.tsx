import { TechStack } from '@/components/sections/TechStack'
import { JsonLd } from '@/components/seo/JsonLd'
import { PageCTA } from '@/components/ui/PageCTA'
import { PageHero } from '@/components/ui/PageHero'
import type { Content } from '@/content/types'
import { type Messages } from '@/i18n/messages'
import { href, homeHref } from '@/i18n/routing'
import {
  buildBreadcrumbJsonLd,
  buildWebPageJsonLd,
} from '@/lib/seo'
import { site } from '@/data/site'

export function StackView({
  locale,
  messages,
  content,
}: {
  locale: string
  messages: Messages
  content: Content
}) {
  const path = href(locale, 'stack')
  const items = content.techGroups.flatMap((group) => group.items)

  const jsonLd = [
    {
      ...buildWebPageJsonLd({
        type: 'CollectionPage',
        name: messages.meta.stack.title,
        description: messages.meta.stack.description,
        path,
        locale,
        about: `${site.url}/#person`,
      }),
      mainEntity: {
        '@type': 'ItemList',
        itemListElement: items.map((item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item.name,
        })),
      },
    },
    buildBreadcrumbJsonLd([
      { name: messages.common.home, path: homeHref(locale) },
      { name: messages.nav.stack, path },
    ]),
  ]

  return (
    <>
      <PageHero
        index={messages.stack.index}
        label={messages.stack.label}
        title={messages.stack.pageTitle}
        intro={messages.stack.pageIntro}
        breadcrumbs={[
          { label: messages.common.home, href: homeHref(locale) },
          { label: messages.nav.stack },
        ]}
      />

      <TechStack messages={messages} content={content} />

      <section className="section border-t border-line/60">
        <div className="container-page">
          <p className="eyebrow">{messages.stack.practicalLabel}</p>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold leading-tight tracking-tight md:text-[2.5rem]">
            {messages.stack.practicalTitle}
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {messages.stack.highlights.map((highlight) => (
              <article
                key={highlight.title}
                data-reveal
                className="rounded-2xl border border-line/80 bg-surface p-6"
              >
                <h3 className="font-display text-lg font-semibold tracking-tight">
                  {highlight.title}
                </h3>
                <p className="mt-3 text-[13px] leading-relaxed text-muted">
                  {highlight.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <PageCTA locale={locale} messages={messages} content={content} />
      <JsonLd data={jsonLd} />
    </>
  )
}
