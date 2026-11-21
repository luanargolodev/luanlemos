import { getContent } from '@/content'
import { formatNumericPeriod } from '@/i18n/format'
import { getLocaleMeta, locales } from '@/i18n/config'
import { getMessages } from '@/i18n/messages'

export const dynamic = 'force-static'

export function generateStaticParams() {
  return locales.map((locale) => ({ locale: locale.code }))
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ locale: string }> },
) {
  const { locale } = await params
  const [{ profile, experience, resume, certifications }, messages] = await Promise.all([
    getContent(locale),
    getMessages(locale),
  ])

  const { dateLocale } = getLocaleMeta(locale)

  const data = {
    locale,
    name: resume.fullName,
    title: resume.title,
    summary: resume.summary,
    location: resume.location,
    availability: resume.availability,
    updatedAt: resume.updatedAt,
    objective: resume.objective,
    keySkills: resume.keySkills,
    openTo: resume.openTo,
    site: resume.links.portfolio,
    links: resume.links,
    contact: {
      email: profile.email,
      phone: profile.phone,
      linkedin: profile.socials[0].href,
      github: profile.socials[1].href,
    },
    skills: resume.skillGroups,
    experience: experience.map((item) => ({
      role: item.role,
      company: item.company,
      period: `${formatNumericPeriod(item.start, item.end, messages.common.present, dateLocale)}`,
      location: item.location,
      summary: item.summary,
      achievements: item.achievements,
      stack: item.stack,
    })),
    projects: resume.projects,
    education: {
      course: profile.education.course,
      institution: profile.education.institution,
      period: profile.education.period,
    },
    certifications: certifications.map((item) => ({
      title: item.title,
      issuer: item.issuer,
      year: item.year,
      type: item.type,
      description: item.description,
    })),
  }

  return Response.json(data, {
    headers: {
      'Cache-Control': 'public, max-age=0, s-maxage=86400',
    },
  })
}
