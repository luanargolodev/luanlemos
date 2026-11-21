import type { Metadata } from 'next'

import { getContent } from '@/content'
import { locales } from '@/i18n/config'
import { getMessages } from '@/i18n/messages'
import { buildMetadata } from '@/lib/seo'
import { ResumeView } from '@/views/resume'

export function generateStaticParams() {
  return locales.map((locale) => ({ locale: locale.code }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const [messages, content] = await Promise.all([
    getMessages(locale),
    getContent(locale),
  ])
  return buildMetadata({
    locale,
    key: 'resume',
    content,
    messages,
  })
}

export default async function CvPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const [messages, content] = await Promise.all([
    getMessages(locale),
    getContent(locale),
  ])

  return <ResumeView locale={locale} messages={messages} content={content} />
}
