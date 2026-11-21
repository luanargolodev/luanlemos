import { SiteFooter } from '@/components/layout/SiteFooter'
import { SiteHeader } from '@/components/layout/SiteHeader'
import { About } from '@/components/sections/About'
import { Certifications } from '@/components/sections/Certifications'
import { Contact } from '@/components/sections/Contact'
import { Experience } from '@/components/sections/Experience'
import { Hero } from '@/components/sections/Hero'
import { Projects } from '@/components/sections/Projects'
import { TechMarquee } from '@/components/sections/TechMarquee'
import { TechStack } from '@/components/sections/TechStack'

export default function HomePage() {
  return (
    <div className="relative min-h-screen">
      <SiteHeader />
      <main id="conteudo" tabIndex={-1}>
        <Hero />
        <TechMarquee />
        <About />
        <Experience />
        <Projects />
        <TechStack />
        <Certifications />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  )
}
