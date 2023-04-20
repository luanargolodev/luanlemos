import Image from 'next/image'

import personSvg from '../../assets/icons/person.svg'

export default function About() {
  return (
    <section className="flex flex-col items-center justify-center">
      <Image src={personSvg} alt="Person" width={319} height={219} />

      <h2 className="text-2xl mt-6 font-bold">Front-end Developer</h2>
      <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-[#13B0F5] to-[#E70FAA]">
        Luan Lemos
      </h1>

      <p className="text-sm mt-3 text-center">
        Estou em busca de novos desafios e será uma honra fazer parte da sua
        equipe 😄
      </p>

      <button className="mt-4 w-[134px] h-[45px] bg-[#5222d0] rounded-[6px]">
        Fale comigo
      </button>

      <div className="w-full mt-16">
        <h3 className="text-2xl font-semibold mb-5">Sobre mim</h3>
        <p className="text-lg tracking-wider">
          Sou desenvolvedor front-end, apaixonado por tecnologia e programação.
          Formado em Análise e Desenvolvimento de Sistemas, sempre me interessei
          a aprender sobre programação e desenvolvimento.
        </p>
      </div>
    </section>
  )
}
