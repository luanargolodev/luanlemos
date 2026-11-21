import { getContent } from '@/content'
import { locales } from '@/i18n/config'
import { getMessages } from '@/i18n/messages'
import {
  cvHref,
  href,
  homeHref,
} from '@/i18n/routing'
import { site } from '@/data/site'

export const dynamic = 'force-static'

export function generateStaticParams() {
  return locales.map((locale) => ({ locale: locale.code }))
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ locale: string }> },
) {
  const { locale } = await params
  const [content, messages] = await Promise.all([
    getContent(locale),
    getMessages(locale),
  ])
  const { profile, experience, projects, techGroups, certifications, resume } =
    content

  const lines: string[] = [
    `# ${profile.fullName} (${profile.name}) — ${profile.role}`,
    '',
    `> ${resume.objective}`,
    '',
    `## ${messages.llms.profile}`,
    `- Full name: ${profile.fullName}`,
    `- Public name: ${profile.name}`,
    `- Role: ${profile.role}`,
    `- Location: ${profile.location}`,
    `- Availability: ${profile.availability}`,
    `- Objective: ${resume.objective}`,
    `- Core skills: ${resume.keySkills}`,
    `- Open to: ${resume.openTo}`,
    `- Email: ${profile.email}`,
    `- WhatsApp: ${profile.phone}`,
    `- LinkedIn: ${profile.socials[0].href}`,
    `- GitHub: ${profile.socials[1].href}`,
    `- Education: ${profile.education.course}, ${profile.education.institution} (${profile.education.period})`,
    '',
    `## ${messages.llms.languages}`,
    `- Portuguese: ${site.url}/pt`,
    `- English: ${site.url}/en`,
    '',
    `## ${messages.llms.experience}`,
    ...experience.flatMap((item) => [
      `- ${item.role} — ${item.company} (${item.start}${item.end ? ` – ${item.end}` : ''}): ${item.summary}`,
      ...item.achievements.map((achievement) => `  - ${achievement}`),
    ]),
    '',
    `## ${messages.llms.projects}`,
    ...projects.flatMap((project) => [
      `- ${project.title} — ${project.client} (${project.year}): ${project.summary} Stack: ${project.stack.join(', ')}. Case: ${site.url}${href(locale, 'project', { slug: project.slug })}.${project.url ? ` Site: ${project.url}` : ' No public link.'}`,
    ]),
    '',
    `## ${messages.llms.pages}`,
    ...(
      [
        ['home', messages.common.home],
        ['about', messages.nav.about],
        ['experience', messages.nav.experience],
        ['projects', messages.nav.projects],
        ['stack', messages.nav.stack],
        ['contact', messages.nav.contact],
      ] as const
    ).map(([key, label]) => `- ${label}: ${site.url}${href(locale, key)}`),
    `- ${messages.common.curriculumWeb}: ${site.url}${cvHref(locale)}`,
    `- ${messages.common.curriculumPdf}: ${site.url}${profile.cvUrl}`,
    `- CV JSON: ${site.url}/${locale}/cv.json`,
    '',
    `## ${messages.llms.stack}`,
    ...techGroups.map(
      (group) =>
        `- ${group.label}: ${group.items.map((item) => item.name).join(', ')}`,
    ),
    '',
    `## ${messages.llms.ats}`,
    ...resume.skillGroups.map((group) => `- ${group.label}: ${group.items}`),
    '',
    `## ${messages.llms.certifications}`,
    ...certifications.map(
      (item) =>
        `- ${item.title} — ${item.issuer} (${item.year}, ${item.type}): ${item.description}`,
    ),
    '',
    `## ${messages.llms.links}`,
    `- Site: ${site.url}${homeHref(locale)}`,
    `- CV: ${site.url}${cvHref(locale)}`,
    `- CV PDF: ${site.url}${profile.cvUrl}`,
    `- CV JSON: ${site.url}/${locale}/cv.json`,
    `- Sitemap: ${site.url}/sitemap.xml`,
    `- GitHub: ${profile.socials[1].href}`,
    `- LinkedIn: ${profile.socials[0].href}`,
    '',
  ]

  return new Response(lines.join('\n'), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=0, s-maxage=86400',
    },
  })
}
