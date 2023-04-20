import { Montserrat } from 'next/font/google'

import Header from '@/components/Header'

const montserrat = Montserrat({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={`${montserrat.className}`}>
      <Header />
    </main>
  )
}
