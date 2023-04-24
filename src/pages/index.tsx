import { Montserrat } from 'next/font/google'

import Header from '@/components/Header'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Form from '@/components/Form'
import Footer from '@/components/Footer'
import Awards from '@/components/Awards'

const montserrat = Montserrat({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={`${montserrat.className} mx-6 lg:w-[1100px] lg:mx-auto`}>
      <Header />
      <About />
      <Projects />
      <Skills />
      <Awards />
      <Form />
      <Footer />
    </main>
  )
}
