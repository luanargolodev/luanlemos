import { Montserrat } from 'next/font/google'

import Header from '@/components/Header'
import About from '@/components/About'

const montserrat = Montserrat({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={`${montserrat.className} mx-6`}>
      <Header />
      <About />
    </main>
  )
}
