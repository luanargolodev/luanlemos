import type { Metadata } from 'next'

import { certifications } from '@/data/certifications'
import { experiences } from '@/data/experience'
import { profile } from '@/data/profile'
import { resume } from '@/data/resume'
import { site } from '@/data/site'
import { formatNumericPeriod } from '@/lib/dates'
import { serializeJsonLd } from '@/lib/seo'

export const metadata: Metadata = {
  title: {
    absolute:
      'Currículo — Luan Argolo Lemos | Desenvolvedor Front-end Pleno',
  },
  description: resume.summary,
  keywords: [
    'desenvolvedor front-end pleno',
    'front-end',
    'frontend',
    'React.js',
    'Next.js',
    'TypeScript',
    'JavaScript',
    'Preact',
    'Tailwind CSS',
    'Deco.cx',
    'VTEX',
    'Shopify',
    'Liquid',
    'Deno',
    'e-commerce',
    'currículo',
  ],
  alternates: {
    canonical: '/curriculo',
    types: {
      'application/pdf': profile.cvUrl,
      'application/json': '/cv.json',
    },
  },
  openGraph: {
    type: 'profile',
    locale: site.locale,
    url: '/curriculo',
    siteName: site.name,
    title: 'Currículo — Luan Argolo Lemos',
    description: resume.summary,
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Currículo — Luan Argolo Lemos, Desenvolvedor Front-end Pleno',
      },
    ],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfilePage',
      '@id': `${site.url}/curriculo#page`,
      url: `${site.url}/curriculo`,
      name: 'Currículo — Luan Argolo Lemos',
      description: resume.summary,
      inLanguage: 'pt-BR',
      mainEntity: { '@id': `${site.url}/#person` },
      significantLink: [
        resume.links.pdf,
        resume.links.linkedin,
        resume.links.github,
      ],
    },
    {
      '@type': 'DigitalDocument',
      '@id': `${site.url}/curriculo#cv`,
      name: 'Currículo — Luan Argolo Lemos — Desenvolvedor Front-end Pleno',
      encodingFormat: 'application/pdf',
      url: resume.links.pdf,
      author: { '@id': `${site.url}/#person` },
    },
  ],
}

export default function ResumePage() {
  return (
    <main id="conteudo" tabIndex={-1} className="min-h-screen bg-canvas py-8 md:py-14">
      <div className="container-page">
        <div className="cv-no-print mx-auto mb-6 flex max-w-3xl flex-wrap items-center justify-between gap-3">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-[13px] text-muted transition-colors hover:text-fg"
          >
            <span aria-hidden="true">←</span>
            Voltar ao portfólio
          </a>
          <div className="flex items-center gap-4">
            <a
              href={profile.cvUrl}
              download
              className="inline-flex items-center gap-2 rounded-full bg-fg px-4 py-2 text-[13px] font-medium text-canvas transition-all hover:-translate-y-0.5"
            >
              Baixar PDF
              <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>

        <article className="cv-document mx-auto max-w-3xl rounded-2xl border border-line/80 bg-white px-6 py-8 text-zinc-900 shadow-2xl shadow-black/10 md:px-10 md:py-12">
          <header className="cv-header border-b border-zinc-300 pb-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-indigo-600">
              Currículo · atualizado em {resume.updatedAt}
            </p>
            <h1 className="mt-2 font-display text-3xl font-semibold tracking-tight md:text-[2.4rem]">
              {resume.fullName}
            </h1>
            <p className="mt-1 text-[15px] font-medium text-zinc-700">
              {resume.title}
            </p>
            <p className="mt-1 text-[12.5px] leading-relaxed text-zinc-600">
              <strong className="font-semibold text-zinc-700">
                Especialidade:
              </strong>{' '}
              {resume.objective}
            </p>
            <p className="mt-3 text-[13px] leading-relaxed text-zinc-600">
              {resume.availability} · {resume.location}
            </p>
            <p className="mt-2 break-words text-[13px] leading-relaxed text-zinc-700">
              <a className="cv-link" href={`mailto:${resume.links.email}`}>
                {resume.links.email}
              </a>
              {' · '}
              <a className="cv-link" href={`tel:${profile.phoneHref}`}>
                {resume.links.phone}
              </a>
            </p>
            <p className="mt-1 break-words text-[13px] leading-relaxed text-zinc-700">
              <a
                className="cv-link"
                href={resume.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/luanargolo
              </a>
              {' · '}
              <a
                className="cv-link"
                href={resume.links.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/luanargolodev
              </a>
              {' · '}
              <a
                className="cv-link"
                href={resume.links.portfolio}
                target="_blank"
                rel="noopener noreferrer"
              >
                luanlemos.dev
              </a>
            </p>
          </header>

          <section className="cv-section mt-6" aria-labelledby="cv-resumo">
            <h2
              id="cv-resumo"
              className="cv-section-title border-b border-zinc-200 pb-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-zinc-500"
            >
              Resumo Profissional
            </h2>
            <p className="mt-2.5 text-[13px] leading-relaxed text-zinc-700">
              {resume.summary}
            </p>
          </section>

          <section className="cv-section mt-6" aria-labelledby="cv-competencias">
            <h2
              id="cv-competencias"
              className="cv-section-title border-b border-zinc-200 pb-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-zinc-500"
            >
              Competências Principais
            </h2>
            <p className="mt-2.5 text-[13px] leading-relaxed text-zinc-700">
              {resume.keySkills}
            </p>
          </section>

          <section className="cv-section mt-6" aria-labelledby="cv-experiencia">
            <h2
              id="cv-experiencia"
              className="cv-section-title border-b border-zinc-200 pb-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-zinc-500"
            >
              Experiência Profissional
            </h2>

            <div className="mt-3 space-y-5">
              {experiences.map((experience) => (
                <div key={`${experience.company}-${experience.start}`} className="cv-entry">
                  <h3 className="text-[14px] font-semibold leading-snug text-zinc-900">
                    {experience.role}
                  </h3>
                  <p className="mt-0.5 text-[13px] font-medium text-zinc-700">
                    {experience.company}
                  </p>
                  <p className="mt-0.5 text-[12px] text-zinc-500">
                    {formatNumericPeriod(experience.start, experience.end)} ·{' '}
                    {experience.location}
                  </p>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-zinc-700">
                    {experience.summary}
                  </p>
                  <ul className="mt-1.5 list-disc space-y-1 pl-5 text-[13px] leading-relaxed text-zinc-700">
                    {experience.achievements.map((achievement) => (
                      <li key={achievement}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="cv-section mt-6" aria-labelledby="cv-projetos">
            <h2
              id="cv-projetos"
              className="cv-section-title border-b border-zinc-200 pb-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-zinc-500"
            >
              Projetos Selecionados
            </h2>

            <div className="mt-3 space-y-3.5">
              {resume.projects.map((project) => (
                <div key={project.title} className="cv-entry">
                  <h3 className="text-[13px] font-semibold leading-snug text-zinc-900">
                    {project.title}
                    <span className="ml-2 font-normal text-zinc-500">
                      {project.period}
                    </span>
                  </h3>
                  <p className="mt-1 text-[12.5px] leading-relaxed text-zinc-700">
                    {project.description}
                  </p>
                  <p className="mt-0.5 text-[12px] text-zinc-500">
                    Stack: {project.stack}
                  </p>
                  <p className="mt-0.5 text-[12px] text-zinc-500">
                    Links: {project.links}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="cv-section mt-6" aria-labelledby="cv-habilidades">
            <h2
              id="cv-habilidades"
              className="cv-section-title border-b border-zinc-200 pb-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-zinc-500"
            >
              Habilidades Técnicas
            </h2>
            <div className="mt-2.5 space-y-1.5">
              {resume.skillGroups.map((group) => (
                <p
                  key={group.label}
                  className="text-[12.5px] leading-relaxed text-zinc-700"
                >
                  <strong className="font-semibold text-zinc-900">
                    {group.label}:
                  </strong>{' '}
                  {group.items}
                </p>
              ))}
            </div>
          </section>

          <section className="cv-section mt-6" aria-labelledby="cv-formacao">
            <h2
              id="cv-formacao"
              className="cv-section-title border-b border-zinc-200 pb-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-zinc-500"
            >
              Formação Acadêmica
            </h2>
            <p className="mt-2.5 text-[13px] font-medium text-zinc-900">
              {profile.education.course}
            </p>
            <p className="mt-0.5 text-[12.5px] text-zinc-600">
              {profile.education.institution} · {profile.education.period}
            </p>
          </section>

          <section className="cv-section mt-6" aria-labelledby="cv-certificacoes">
            <h2
              id="cv-certificacoes"
              className="cv-section-title border-b border-zinc-200 pb-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-zinc-500"
            >
              Certificações e Reconhecimentos
            </h2>
            <ul className="mt-2.5 list-disc space-y-1 pl-5 text-[12.5px] leading-relaxed text-zinc-700">
              {certifications.map((certification) => (
                <li key={certification.title}>
                  <strong className="font-semibold text-zinc-900">
                    {certification.title}
                  </strong>{' '}
                  — {certification.issuer}, {certification.year}.{' '}
                  {certification.description}
                </li>
              ))}
            </ul>
          </section>

          <footer className="cv-footer mt-8 border-t border-zinc-200 pt-4 text-[11px] leading-relaxed text-zinc-500">
            Aberto a networking e conversas sobre front-end, e-commerce e
            produto. Este currículo também está disponível em{' '}
            <a className="cv-link" href={resume.links.cv}>
              luanlemos.dev/curriculo
            </a>{' '}
            e em PDF em{' '}
            <a className="cv-link" href={profile.cvUrl}>
              luanlemos.dev{profile.cvUrl}
            </a>
            .
          </footer>
        </article>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
      />
    </main>
  )
}
