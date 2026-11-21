import Link from 'next/link'

import { LanguageSwitcher } from '@/components/i18n/LanguageSwitcher'
import type { Content } from '@/content/types'
import { getLocaleMeta, locales } from '@/i18n/config'
import { formatNumericPeriod } from '@/i18n/format'
import { interpolate, type Messages } from '@/i18n/messages'
import { homeHref } from '@/i18n/routing'
import { serializeJsonLd } from '@/lib/seo'
import { site } from '@/data/site'

export function ResumeView({
  locale,
  messages,
  content,
}: {
  locale: string
  messages: Messages
  content: Content
}) {
  const { resume, profile, experience, certifications } = content
  const { dateLocale } = getLocaleMeta(locale)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfilePage',
        '@id': `${site.url}/${locale}/${locales.find((item) => item.code === locale)?.cvPath ?? 'cv'}#page`,
        url: resume.links.cv,
        name: messages.meta.resume.title,
        description: resume.summary,
        inLanguage: locales.find((item) => item.code === locale)?.htmlLang,
        mainEntity: { '@id': `${site.url}/#person` },
        significantLink: [
          resume.links.pdf,
          resume.links.linkedin,
          resume.links.github,
        ],
      },
      {
        '@type': 'DigitalDocument',
        '@id': `${resume.links.cv}#cv`,
        name: messages.meta.resume.title,
        encodingFormat: 'application/pdf',
        url: resume.links.pdf,
        inLanguage: locales.find((item) => item.code === locale)?.htmlLang,
        author: { '@id': `${site.url}/#person` },
      },
    ],
  }

  return (
    <main
      id="conteudo"
      tabIndex={-1}
      className="min-h-screen bg-canvas py-8 md:py-14"
    >
      <div className="container-page">
        <div className="cv-no-print mx-auto mb-6 flex max-w-3xl flex-wrap items-center justify-between gap-3">
          <Link
            href={homeHref(locale)}
            className="inline-flex items-center gap-2 text-[13px] text-muted transition-colors hover:text-fg"
          >
            <span aria-hidden="true">←</span>
            {messages.cv.back}
          </Link>
          <div className="flex flex-wrap items-center gap-3">
            <LanguageSwitcher
              locale={locale}
              locales={locales}
              labels={{
                language: messages.common.language,
                languageNav: messages.a11y.languageSelector,
                currentLanguage: messages.common.currentLanguage,
              }}
            />
            <a
              href={profile.cvUrl}
              download
              className="inline-flex items-center gap-2 rounded-full bg-fg px-4 py-2 text-[13px] font-medium text-canvas transition-all hover:-translate-y-0.5"
            >
              {messages.cv.download}
              <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>

        <article className="cv-document mx-auto max-w-3xl rounded-2xl border border-line/80 bg-white px-6 py-8 text-zinc-900 shadow-2xl shadow-black/10 md:px-10 md:py-12">
          <header className="cv-header border-b border-zinc-300 pb-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-indigo-600">
              {interpolate(messages.cv.updated, {
                date: resume.updatedAt,
              })}
            </p>
            <h1 className="mt-2 font-display text-3xl font-semibold tracking-tight md:text-[2.4rem]">
              {resume.fullName}
            </h1>
            <p className="mt-1 text-[15px] font-medium text-zinc-700">
              {resume.title}
            </p>
            <p className="mt-1 text-[12.5px] leading-relaxed text-zinc-600">
              <strong className="font-semibold text-zinc-700">
                {messages.cv.specialty}:
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
              <a className="cv-link" href={profile.phoneHref}>
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

          <section className="cv-section mt-6" aria-labelledby="cv-summary">
            <h2
              id="cv-summary"
              className="cv-section-title border-b border-zinc-200 pb-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-zinc-500"
            >
              {messages.cv.summary}
            </h2>
            <p className="mt-2.5 text-[13px] leading-relaxed text-zinc-700">
              {resume.summary}
            </p>
          </section>

          <section className="cv-section mt-6" aria-labelledby="cv-skills">
            <h2
              id="cv-skills"
              className="cv-section-title border-b border-zinc-200 pb-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-zinc-500"
            >
              {messages.cv.keySkills}
            </h2>
            <p className="mt-2.5 text-[13px] leading-relaxed text-zinc-700">
              {resume.keySkills}
            </p>
          </section>

          <section className="cv-section mt-6" aria-labelledby="cv-experience">
            <h2
              id="cv-experience"
              className="cv-section-title border-b border-zinc-200 pb-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-zinc-500"
            >
              {messages.cv.experience}
            </h2>

            <div className="mt-3 space-y-5">
              {experience.map((item) => (
                <div key={item.id} className="cv-entry">
                  <h3 className="text-[14px] font-semibold leading-snug text-zinc-900">
                    {item.role}
                  </h3>
                  <p className="mt-0.5 text-[13px] font-medium text-zinc-700">
                    {item.company}
                  </p>
                  <p className="mt-0.5 text-[12px] text-zinc-500">
                    {formatNumericPeriod(
                      item.start,
                      item.end,
                      messages.common.present,
                      dateLocale,
                    )}{' '}
                    · {item.location}
                  </p>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-zinc-700">
                    {item.summary}
                  </p>
                  <ul className="mt-1.5 list-disc space-y-1 pl-5 text-[13px] leading-relaxed text-zinc-700">
                    {item.achievements.map((achievement) => (
                      <li key={achievement}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="cv-section mt-6" aria-labelledby="cv-projects">
            <h2
              id="cv-projects"
              className="cv-section-title border-b border-zinc-200 pb-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-zinc-500"
            >
              {messages.cv.projects}
            </h2>

            <div className="mt-3 space-y-3.5">
              {resume.projects.map((project) => {
                const projectTitle =
                  content.projects.find((item) => item.slug === project.slug)
                    ?.title ?? project.slug
                return (
                <div key={project.slug} className="cv-entry">
                  <h3 className="text-[13px] font-semibold leading-snug text-zinc-900">
                    {projectTitle}
                    <span className="ml-2 font-normal text-zinc-500">
                      {project.period}
                    </span>
                  </h3>
                  <p className="mt-1 text-[12.5px] leading-relaxed text-zinc-700">
                    {project.description}
                  </p>
                  <p className="mt-0.5 text-[12px] text-zinc-500">
                    {messages.cv.stack}: {project.stack}
                  </p>
                  <p className="mt-0.5 text-[12px] text-zinc-500">
                    {messages.cv.links}: {project.links}
                  </p>
                </div>
                )
              })}
            </div>
          </section>

          <section className="cv-section mt-6" aria-labelledby="cv-tech">
            <h2
              id="cv-tech"
              className="cv-section-title border-b border-zinc-200 pb-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-zinc-500"
            >
              {messages.cv.skills}
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

          <section className="cv-section mt-6" aria-labelledby="cv-education">
            <h2
              id="cv-education"
              className="cv-section-title border-b border-zinc-200 pb-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-zinc-500"
            >
              {messages.cv.education}
            </h2>
            <p className="mt-2.5 text-[13px] font-medium text-zinc-900">
              {profile.education.course}
            </p>
            <p className="mt-0.5 text-[12.5px] text-zinc-600">
              {profile.education.institution} · {profile.education.period}
            </p>
          </section>

          <section
            className="cv-section mt-6"
            aria-labelledby="cv-certifications"
          >
            <h2
              id="cv-certifications"
              className="cv-section-title border-b border-zinc-200 pb-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-zinc-500"
            >
              {messages.cv.certifications}
            </h2>
            <ul className="mt-2.5 list-disc space-y-1 pl-5 text-[12.5px] leading-relaxed text-zinc-700">
              {certifications.map((certification) => (
                <li key={certification.id}>
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
            {messages.cv.footerBefore}{' '}
            <a className="cv-link" href={resume.links.cv}>
              luanlemos.dev
              {new URL(resume.links.cv).pathname}
            </a>{' '}
            {messages.cv.footerAnd}{' '}
            <a className="cv-link" href={resume.links.pdf}>
              luanlemos.dev{new URL(resume.links.pdf).pathname}
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
