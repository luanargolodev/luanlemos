import { Contact } from '@/components/sections/Contact'
import { JsonLd } from '@/components/seo/JsonLd'
import { PageHero } from '@/components/ui/PageHero'
import type { Content } from '@/content/types'
import { type Messages } from '@/i18n/messages'
import { href, homeHref } from '@/i18n/routing'
import {
  buildBreadcrumbJsonLd,
  buildWebPageJsonLd,
} from '@/lib/seo'
import { site } from '@/data/site'

export function ContactView({
  locale,
  messages,
  content,
}: {
  locale: string
  messages: Messages
  content: Content
}) {
  const path = href(locale, 'contact')

  const jsonLd = [
    {
      ...buildWebPageJsonLd({
        type: 'ContactPage',
        name: messages.meta.contact.title,
        description: messages.meta.contact.description,
        path,
        locale,
        about: `${site.url}/#person`,
      }),
      mainEntity: { '@id': `${site.url}/#person` },
    },
    buildBreadcrumbJsonLd([
      { name: messages.common.home, path: homeHref(locale) },
      { name: messages.nav.contact, path },
    ]),
  ]

  return (
    <>
      <PageHero
        index={messages.contact.index}
        label={messages.contact.label}
        title={messages.contact.pageTitle}
        intro={messages.contact.pageIntro}
        breadcrumbs={[
          { label: messages.common.home, href: homeHref(locale) },
          { label: messages.nav.contact },
        ]}
      />

      <Contact messages={messages} content={content} />
      <JsonLd data={jsonLd} />
    </>
  )
}
