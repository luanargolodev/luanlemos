import Button from '../Button'
import Label from '../Label'
import Input from '../Input'
import Textarea from '../Textarea'

export default function Form() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const form = event.currentTarget
    const formData = new FormData(form)

    const data = Object.fromEntries(formData)

    console.log(data)

    alert('Ocorreu um erro ao enviar o e-mail')
  }

  return (
    <section className="mt-16 mb-5 lg:w-[532px] h-[427px] mx-auto">
      <form className="flex flex-col w-full" onSubmit={handleSubmit}>
        <Label id="name" title="Nome" />
        <Input type="text" id="name" placeholder="Seu nome" />

        <Label id="email" title="E-mail" />
        <Input type="email" id="email" placeholder="Seu e-mail" />

        <Label id="message" title="Mensagem" />
        <Textarea id="message" name="message" placeholder="Sua mensagem" />

        <button className="mt-4 h-[48px] bg-gradient-to-b from-[#00F5A0] to-[#00D9F5] rounded-[6px] text-[#252728]">
          Enviar
        </button>
      </form>
    </section>
  )
}
