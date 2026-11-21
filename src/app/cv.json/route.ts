import { certifications } from '@/data/certifications'
import { experiences } from '@/data/experience'
import { profile } from '@/data/profile'
import { resume } from '@/data/resume'
import { site } from '@/data/site'
import { formatNumericPeriod } from '@/lib/dates'

export const dynamic = 'force-static'

export function GET() {
  const data = {
    name: resume.fullName,
    title: resume.title,
    summary: resume.summary,
    location: resume.location,
    availability: resume.availability,
    updatedAt: resume.updatedAt,
    objective: resume.objective,
    keySkills: resume.keySkills,
    openTo: 'Networking e conversas sobre front-end, e-commerce e produto',
    site: site.url,
    links: resume.links,
    contact: {
      email: profile.email,
      phone: profile.phone,
      linkedin: profile.socials[0].href,
      github: profile.socials[1].href,
    },
    skills: resume.skillGroups,
    experience: experiences.map((experience) => ({
      role: experience.role,
      company: experience.company,
      period: formatNumericPeriod(experience.start, experience.end),
      location: experience.location,
      summary: experience.summary,
      achievements: experience.achievements,
      stack: experience.stack,
    })),
    projects: resume.projects,
    education: {
      course: profile.education.course,
      institution: profile.education.institution,
      period: profile.education.period,
    },
    certifications: certifications.map((certification) => ({
      title: certification.title,
      issuer: certification.issuer,
      year: certification.year,
      type: certification.type,
      description: certification.description,
    })),
  }

  return Response.json(data, {
    headers: {
      'Cache-Control': 'public, max-age=0, s-maxage=86400',
    },
  })
}
