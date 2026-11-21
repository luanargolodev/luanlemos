import Link from 'next/link'

import { LanguageSwitcher } from '@/components/i18n/LanguageSwitcher'
import type { Content } from '@/content/types'
import { locales } from '@/i18n/config'
import type { Messages } from '@/i18n/messages/pt'
import { cvHref, homeHref, navLinks } from '@/i18n/routing'

import { CvMenu } from './CvMenu'
import { DesktopNav } from './DesktopNav'
import { LogoMark } from './LogoMark'
import { MobileNav } from './MobileNav'
import { ThemeToggle } from './ThemeToggle'

export function SiteHeader({
  locale,
  messages,
  content,
}: {
  locale: string
  messages: Messages
  content: Content
}) {
  const items = navLinks(locale, {
    about: messages.nav.about,
    experience: messages.nav.experience,
    projects: messages.nav.projects,
    stack: messages.nav.stack,
    contact: messages.nav.contact,
  })

  const languageLabels = {
    language: messages.common.language,
    languageNav: messages.a11y.languageSelector,
    currentLanguage: messages.common.currentLanguage,
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/70 bg-canvas/80 backdrop-blur-xl">
      <div className="container-page flex h-16 items-center justify-between gap-3">
        <Link href={homeHref(locale)} className="group flex items-center gap-2.5">
          <span className="transition-transform duration-300 group-hover:-rotate-3">
            <LogoMark className="size-6" />
          </span>
          <span className="whitespace-nowrap font-display text-[15px] font-semibold tracking-tight">
            {content.profile.name}
          </span>
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.16em] text-faint lg:inline">
            {messages.header.roleTag}
          </span>
        </Link>

        <DesktopNav items={items} label={messages.a11y.mainNav} />

        <div className="flex items-center gap-2">
          <div className="hidden md:block">
            <ThemeToggle label={messages.common.themeToggle} />
          </div>
          <div className="hidden md:block">
            <LanguageSwitcher
              locale={locale}
              locales={locales}
              labels={languageLabels}
            />
          </div>
          <CvMenu
            labels={{
              button: messages.header.cvButton,
              webTitle: messages.header.cvWebTitle,
              webDescription: messages.header.cvWebDescription,
              pdfTitle: messages.header.cvPdfTitle,
              pdfDescription: messages.header.cvPdfDescription,
            }}
            webHref={cvHref(locale)}
            pdfHref={content.profile.cvUrl}
          />
          <MobileNav
            items={items}
            navLabel={messages.a11y.mainNav}
            locale={locale}
            locales={locales}
            cvWebHref={cvHref(locale)}
            cvPdfHref={content.profile.cvUrl}
            labels={{
              openMenu: messages.common.openMenu,
              closeMenu: messages.common.closeMenu,
              theme: messages.common.theme,
              cvWeb: messages.common.curriculumWeb,
              cvWebHint: messages.common.curriculumWebHint,
              cvPdf: messages.common.curriculumPdf,
              cvPdfHint: messages.common.curriculumPdfHint,
              language: messages.common.language,
              languageNav: messages.a11y.languageSelector,
              currentLanguage: messages.common.currentLanguage,
            }}
          />
        </div>
      </div>
    </header>
  )
}
