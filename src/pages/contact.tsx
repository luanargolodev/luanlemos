import { Montserrat } from 'next/font/google'

import Header from '@/components/Header'
import Form from '@/components/Form'
import Footer from '@/components/Footer'

const montserrat = Montserrat({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={`${montserrat.className} mx-6 lg:w-[1100px] lg:mx-auto`}>
      <Header />
      <Form />
      <Footer />
    </main>
  )
}
