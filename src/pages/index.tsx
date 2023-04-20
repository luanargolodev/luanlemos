import { Montserrat } from 'next/font/google'

import Header from '@/components/Header'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Footer from '@/components/Footer'

const montserrat = Montserrat({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={`${montserrat.className} mx-6`}>
      <Header />
      <About />
      <Projects />
      <Skills />
      <Footer />
    </main>
  )
}
