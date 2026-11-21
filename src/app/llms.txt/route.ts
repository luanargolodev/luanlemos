import { certifications } from '@/data/certifications'
import { experiences } from '@/data/experience'
import { profile } from '@/data/profile'
import { featuredProjects } from '@/data/projects'
import { site } from '@/data/site'
import { techGroups } from '@/data/tech'
import { formatPeriod } from '@/lib/dates'

export const dynamic = 'force-static'

export function GET() {
  const lines: string[] = [
    `# ${profile.name} — ${profile.role}`,
    '',
    `> ${profile.summary}`,
    '',
    '## Perfil',
    `- Nome: ${profile.name}`,
    `- Cargo: ${profile.role}`,
    `- Local: ${profile.location}`,
    `- Disponibilidade: ${profile.availability}`,
    `- E-mail: ${profile.email}`,
    `- WhatsApp: ${profile.phone}`,
    `- LinkedIn: ${profile.socials[0].href}`,
    `- GitHub: ${profile.socials[1].href}`,
    `- Currículo: ${profile.cvUrl}`,
    `- Formação: ${profile.education.course}, ${profile.education.institution} (${profile.education.period})`,
    '',
    '## Experiência',
    ...experiences.flatMap((item) => [
      `- ${item.role} — ${item.company} (${formatPeriod(item.start, item.end)}): ${item.summary}`,
      ...item.achievements.map((achievement) => `  - ${achievement}`),
    ]),
    '',
    '## Projetos selecionados',
    ...featuredProjects.flatMap((project) => [
      `- ${project.title} — ${project.client} (${project.year}): ${project.summary} Stack: ${project.stack.join(', ')}.${project.url ? ` Link: ${project.url}` : ' Case sem link público.'}`,
    ]),
    '',
    '## Stack',
    ...techGroups.map(
      (group) => `- ${group.label}: ${group.items.map((item) => item.name).join(', ')}`,
    ),
    '',
    '## Certificados e reconhecimentos',
    ...certifications.map(
      (item) =>
        `- ${item.title} — ${item.issuer} (${item.year}, ${item.type}): ${item.description}`,
    ),
    '',
    '## Links',
    `- Site: ${site.url}`,
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
