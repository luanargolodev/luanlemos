import Image from 'next/image'
import { socials } from '../../utils/socials'

import { SocialItemProps } from './interfaces'

export default function SocialItem() {
  const handleSocials = (id: number) => () => {
    const social = socials.find((social) => social.id === id)
    if (social) {
      window.open(social.url, '_blank')
    }
  }

  return (
    <section className="flex w-full justify-between">
      {socials.map((social: SocialItemProps) => (
        <div
          key={social.id}
          className="flex flex-col items-center cursor-pointer"
          onClick={handleSocials(social.id)}
        >
          <Image src={social.icon} alt={social.title} />
          <h4 className="mt-2 uppercase text-xs tracking-[0.12em]">
            {social.title}
          </h4>
        </div>
      ))}
    </section>
  )
}
