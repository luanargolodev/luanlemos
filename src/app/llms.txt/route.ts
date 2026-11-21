import { certifications } from '@/data/certifications'
import { experiences } from '@/data/experience'
import { profile } from '@/data/profile'
import { projects } from '@/data/projects'
import { resume } from '@/data/resume'
import { site } from '@/data/site'
import { techGroups } from '@/data/tech'
import { formatPeriod } from '@/lib/dates'

export const dynamic = 'force-static'

export function GET() {
  const lines: string[] = [
    `# ${profile.fullName} (${profile.name}) — ${profile.role}`,
    '',
    `> ${resume.summary}`,
    '',
    '## Currículo e dados estruturados',
    `- Currículo web: ${site.url}/curriculo`,
    `- Currículo em PDF: ${site.url}${profile.cvUrl}`,
    `- Currículo em JSON: ${site.url}/cv.json`,
    '',
    '## Perfil',
    `- Nome completo: ${profile.fullName}`,
    `- Nome público: ${profile.name}`,
    `- Cargo: ${profile.role}`,
    `- Local: ${profile.location}`,
    `- Disponibilidade: ${profile.availability}`,
    `- Objetivo: ${resume.objective}`,
    `- Competências principais: ${resume.keySkills}`,
    `- Interesses: networking e conversas sobre front-end, e-commerce e produto`,
    `- E-mail: ${profile.email}`,
    `- WhatsApp: ${profile.phone}`,
    `- LinkedIn: ${profile.socials[0].href}`,
    `- GitHub: ${profile.socials[1].href}`,
    `- Formação: ${profile.education.course}, ${profile.education.institution} (${profile.education.period})`,
    '',
    '## Experiência',
    ...experiences.flatMap((item) => [
      `- ${item.role} — ${item.company} (${formatPeriod(item.start, item.end)}): ${item.summary}`,
      ...item.achievements.map((achievement) => `  - ${achievement}`),
    ]),
    '',
    '## Projetos selecionados',
    ...projects.flatMap((project) => [
      `- ${project.title} — ${project.client} (${project.year}): ${project.summary} Stack: ${project.stack.join(', ')}. Case: ${site.url}/projeto/${project.slug}.${project.url ? ` Site: ${project.url}` : ' Case sem link público.'}`,
    ]),
    '',
    '## Páginas',
    `- Sobre: ${site.url}/sobre`,
    `- Experiência: ${site.url}/experiencia`,
    `- Projetos: ${site.url}/projetos`,
    `- Stack: ${site.url}/stack`,
    `- Contato: ${site.url}/contato`,
    `- Currículo web: ${site.url}/curriculo`,
    `- Currículo PDF: ${site.url}${profile.cvUrl}`,
    `- Currículo JSON: ${site.url}/cv.json`,
    '',
    '## Stack',
    ...techGroups.map(
      (group) => `- ${group.label}: ${group.items.map((item) => item.name).join(', ')}`,
    ),
    '',
    '## Competências para ATS',
    ...resume.skillGroups.map((group) => `- ${group.label}: ${group.items}`),
    '',
    '## Certificados e reconhecimentos',
    ...certifications.map(
      (item) =>
        `- ${item.title} — ${item.issuer} (${item.year}, ${item.type}): ${item.description}`,
    ),
    '',
    '## Links',
    `- Site: ${site.url}`,
    `- Currículo web: ${site.url}/curriculo`,
    `- Currículo PDF: ${site.url}${profile.cvUrl}`,
    `- Currículo JSON: ${site.url}/cv.json`,
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
