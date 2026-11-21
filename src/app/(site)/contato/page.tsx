import type { Metadata } from 'next'

import { Contact } from '@/components/sections/Contact'
import { JsonLd } from '@/components/seo/JsonLd'
import { PageHero } from '@/components/ui/PageHero'
import { site } from '@/data/site'
import { buildBreadcrumbJsonLd, buildWebPageJsonLd, defaultOgImage } from '@/lib/seo'

export const metadata: Metadata = {
  title: { absolute: 'Contato — Luan Lemos | Desenvolvedor Front-end Pleno' },
  description:
    'Fale com Luan Lemos por e-mail, LinkedIn, GitHub ou WhatsApp. Currículo web e PDF disponíveis.',
  alternates: { canonical: '/contato' },
  openGraph: {
    title: 'Contato — Luan Lemos',
    description:
      'Contato direto para networking, conversas sobre front-end e oportunidades em produto ou e-commerce.',
    url: '/contato',
    images: [defaultOgImage],
  },
}

const breadcrumbs = [
  { label: 'Início', href: '/' },
  { label: 'Contato' },
]

const jsonLd = [
  {
    ...buildWebPageJsonLd({
      type: 'ContactPage',
      name: 'Contato — Luan Lemos',
      description:
        'Canais de contato de Luan Lemos, desenvolvedor front-end pleno.',
      path: '/contato',
      about: `${site.url}/#person`,
    }),
    mainEntity: { '@id': `${site.url}/#person` },
  },
  buildBreadcrumbJsonLd([
    { name: 'Início', path: '/' },
    { name: 'Contato', path: '/contato' },
  ]),
]

export default function ContactPage() {
  return (
    <>
      <PageHero
        index="06"
        label="Contato"
        title="Contato direto."
        intro="Para networking, conversas sobre front-end, e-commerce e produto — ou para falar de um projeto em específico."
        breadcrumbs={breadcrumbs}
      />

      <Contact />
      <JsonLd data={jsonLd} />
    </>
  )
}
