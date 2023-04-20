import Socials from '../Socials'

export default function Footer() {
  return (
    <footer className="mt-16 lg:w-[320px] lg:mx-auto" id="contacts">
      <Socials />

      <span className="w-full block mt-7 mb-7 text-center uppercase text-sm tracking-[0.04em] text-[#bdebea]">
        Feito com ♥ por Luan Lemos
      </span>
    </footer>
  )
}
