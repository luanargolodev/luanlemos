import { FormEvent, useState } from 'react'
import emailjs from '@emailjs/browser'
import { toast } from 'react-toastify'

import Button from '../Button'
import Label from '../Label'
import Input from '../Input'
import Textarea from '../Textarea'

export default function Form() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [name, setName] = useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (email === '' || message === '' || name === '') {
      toast('Preencha todos os campos', {
        hideProgressBar: true,
        autoClose: 2000,
        type: 'error',
      })
      return
    }

    const templateParams = {
      from_name: name,
      message: message,
      email: email,
    }
    emailjs
      .send(
        'service_fb3d0l3',
        'template_3n89eg7',
        templateParams,
        '_il3aP7krhrAp6pX8'
      )
      .then(
        (response) => {
          toast('E-mail enviado com sucesso', {
            hideProgressBar: true,
            autoClose: 2000,
            type: 'success',
          })
          setEmail('')
          setMessage('')
          setName('')
        },
        (err) => {
          toast('Ocorreu um erro ao enviar o e-mail', {
            hideProgressBar: true,
            autoClose: 2000,
            type: 'error',
          })
        }
      )
  }

  return (
    <section className="mt-16 mb-5 lg:w-[532px] h-[427px] mx-auto">
      <form className="flex flex-col w-full" onSubmit={handleSubmit}>
        <Label id="name" title="Nome" />
        <Input
          type="text"
          id="name"
          placeholder="Seu nome"
          value={name}
          onChange={(e: FormEvent<HTMLInputElement>) =>
            setName(e.currentTarget.value)
          }
        />

        <Label id="email" title="E-mail" />
        <Input
          type="email"
          id="email"
          placeholder="Seu e-mail"
          value={email}
          onChange={(e: FormEvent<HTMLInputElement>) =>
            setEmail(e.currentTarget.value)
          }
        />

        <Label id="message" title="Mensagem" />
        <Textarea
          id="message"
          name="message"
          placeholder="Sua mensagem"
          value={message}
          onChange={(e: FormEvent<HTMLTextAreaElement>) =>
            setMessage(e.currentTarget.value)
          }
        />

        <button className="mt-4 h-[48px] bg-gradient-to-b from-[#00F5A0] to-[#00D9F5] rounded-[6px] text-[#252728]">
          Enviar
        </button>
      </form>
    </section>
  )
}
