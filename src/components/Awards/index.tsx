import Title from '../Title'
import Image from 'next/image'

import { awards, AwardsProps } from '../../utils/awards'

export default function Awards() {
  return (
    <section className="mt-16">
      <Title title="Prêmios e Reconhecimentos" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {awards.map((prize: AwardsProps) => (
          <div
            key={prize.id}
            className="bg-[#222525] rounded-lg shadow-lg p-4"
          >
            <Image
              src={prize.image}
              alt={prize.title}
              id={prize.id.toString()}
            />

            <h3 className="text-xl font-medium mt-4 uppercase">
              {prize.title}
            </h3>

            <p className="text-[#BDEBEA] mt-5 tracking-[0.04em] mb-4">
              {prize.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
