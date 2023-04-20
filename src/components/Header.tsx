import Image from 'next/image'

import logoSvg from '../assets/icons/logo.svg'

export default function Header() {
  return (
    <header className="flex items-center justify-between mx-6">
      <Image src={logoSvg} alt="Logo" width={100} />

      <ul className="flex lg:flex-col gap-8 items-center">
        <li>
          <a href="#">Projetos</a>
        </li>

        <li className="bg-[#5222D0] w-[105px] h-[45px] flex items-center justify-center rounded-[6px]">
          <a href="#">Contato</a>
        </li>
      </ul>
    </header>
  )
}
