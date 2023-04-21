import Image from 'next/image'
import Link from 'next/link'

import Button from '../Button'

import logoSvg from '../../assets/icons/logo.svg'

export default function Header() {
  return (
    <header className="flex items-center justify-between">
      <Link href="/">
        <Image src={logoSvg} alt="Logo" width={100} />
      </Link>

      <ul className="flex gap-8 items-center">
        <li>
          <Link href="/projects">Projetos</Link>
        </li>
        <li>
          <Link href="/contact">Contato</Link>
        </li>
      </ul>
    </header>
  )
}
