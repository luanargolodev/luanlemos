import Image from 'next/image'

import Title from '../Title'
import Button from '../Button'

import personSvg from '../../assets/icons/person.svg'

export default function About() {
  return (
    <section className="flex flex-col items-center justify-center">
      <Image src={personSvg} alt="Person" width={319} height={219} />

      <h2 className="text-2xl mt-6 font-bold">Front-end Developer</h2>
      <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-[#00F5A0] to-[#00D9F5]">
        Luan Lemos
      </h1>

      <p className="text-sm mt-3 text-center mb-4">
        Estou em busca de novos desafios e será uma honra fazer parte da sua
        equipe 😄
      </p>

      <Button title="Fale comigo" />

      <div className="w-full mt-16">
        <Title title="Sobre mim" />
        <p className="text-lg tracking-wider">
          Sou desenvolvedor front-end, apaixonado por tecnologia e programação.
          Formado em Análise e Desenvolvimento de Sistemas, sempre me interessei
          a aprender sobre programação e desenvolvimento.
        </p>
      </div>
    </section>
  )
}
