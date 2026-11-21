import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { getContent } from '@/content'
import { getMessages } from '@/i18n/messages'
import { matchPathname } from '@/i18n/routing'
import { getSiteStaticPaths } from '@/i18n/static-paths'
import { buildMetadata } from '@/lib/seo'
import { AboutView } from '@/views/about'
import { ContactView } from '@/views/contact'
import { ExperienceView } from '@/views/experience'
import { HomeView } from '@/views/home'
import { ProjectView } from '@/views/project'
import { ProjectsView } from '@/views/projects'
import { StackView } from '@/views/stack'

export async function generateStaticParams({
  params,
}: {
  params: { locale: string }
}) {
  return getSiteStaticPaths(params.locale)
}

function resolveRoute(locale: string, path: string[] | undefined) {
  const suffix = path?.length ? `/${path.join('/')}` : ''
  return matchPathname(`/${locale}${suffix}`)
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; path?: string[] }>
}): Promise<Metadata> {
  const { locale, path } = await params
  const match = resolveRoute(locale, path)
  const [messages, content] = await Promise.all([
    getMessages(locale),
    getContent(locale),
  ])

  const missingProject =
    match?.key === 'project' &&
    !content.projects.some((project) => project.slug === match.params.slug)

  if (!match || match.key === 'resume' || missingProject) {
    return {
      title: { absolute: `${messages.notFound.title} — Luan Lemos` },
      description: messages.notFound.description,
      robots: { index: false, follow: false },
    }
  }

  return buildMetadata({
    locale,
    key: match.key,
    params: match.params,
    content,
    messages,
  })
}

export default async function SitePage({
  params,
}: {
  params: Promise<{ locale: string; path?: string[] }>
}) {
  const { locale, path } = await params
  const match = resolveRoute(locale, path)
  if (!match || match.key === 'resume') notFound()

  const [messages, content] = await Promise.all([
    getMessages(locale),
    getContent(locale),
  ])

  switch (match.key) {
    case 'home':
      return <HomeView locale={locale} messages={messages} content={content} />
    case 'about':
      return <AboutView locale={locale} messages={messages} content={content} />
    case 'experience':
      return (
        <ExperienceView
          locale={locale}
          messages={messages}
          content={content}
        />
      )
    case 'projects':
      return (
        <ProjectsView locale={locale} messages={messages} content={content} />
      )
    case 'project': {
      const index = content.projects.findIndex(
        (project) => project.slug === match.params.slug,
      )
      if (index < 0) notFound()
      return (
        <ProjectView
          locale={locale}
          messages={messages}
          content={content}
          project={content.projects[index]}
          index={index}
        />
      )
    }
    case 'stack':
      return <StackView locale={locale} messages={messages} content={content} />
    case 'contact':
      return (
        <ContactView locale={locale} messages={messages} content={content} />
      )
    default:
      notFound()
  }
}
