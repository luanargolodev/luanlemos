import Image from 'next/image'

import Button from '../Button'

import logoSvg from '../../assets/icons/logo.svg'

export default function Header() {
  return (
    <header className="flex items-center justify-between">
      <Image src={logoSvg} alt="Logo" width={100} />

      <ul className="flex gap-8 items-center">
        <li>
          <a href="#projects">Projetos</a>
        </li>

        {/* <li className="w-[105px] h-[45px] flex items-center justify-center rounded-[6px]">
          <Button title="Contato" />
        </li> */}
      </ul>
    </header>
  )
}
