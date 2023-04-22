import Image from 'next/image'

import Button from '../Button'

import personSvg from '../../assets/icons/person.svg'

export default function Resume() {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-center w-full lg:justify-between">
      <Image src={personSvg} alt="Person" className="lg:order-1" />

      <div className="flex flex-col items-center lg:items-start">
        <h2 className="text-2xl mt-6 font-bold">Desenvolvedor Front-end</h2>
        <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-[#00F5A0] to-[#00D9F5]">
          Luan Lemos
        </h1>

        <p className="text-sm mt-3 text-center mb-4 w-[400px] lg:text-left">
          Estou em busca de novos desafios e será uma honra fazer parte da sua
          equipe 😄
        </p>

        <a
          href="https://drive.google.com/file/d/1qGqKyTjGiVE1s1xEfRl2T_q-xxy9bKAa/view"
          target="_blank"
        >
          <Button title="Download CV" />
        </a>
      </div>
    </section>
  )
}
