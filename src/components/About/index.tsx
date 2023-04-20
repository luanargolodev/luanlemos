import Image from 'next/image'
import Title from '../Title'
import Resume from '../Resume'

import scrollSvg from '../../assets/icons/scroll.svg'

export default function About() {
  return (
    <section className="flex flex-col items-center justify-center">
      <Resume />

      <div className="hidden lg:flex animate-ping">
        <Image src={scrollSvg} alt="Scroll" width={18} height={28} />
      </div>

      <div className="w-full mt-16">
        <Title title="Sobre mim" />
        <p className="before:absolute before:bg-blue-500 before:w-[5px] before:left-[-15px] before:h-full before:bg-gradient-to-b from-[#00F5A0] to-[#00D9F5] before:rounded relative text-lg tracking-[0.04em] lg:w-[800px] text-[#BDEBEA]">
          Sou desenvolvedor front-end, apaixonado por tecnologia e programação.
          Formado em Análise e Desenvolvimento de Sistemas, sempre me interessei
          a aprender sobre programação e desenvolvimento.
        </p>
      </div>
    </section>
  )
}
