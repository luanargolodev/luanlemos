import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Luan Lemos | Desenvolvedor front-end</title>
        <meta
          name="description"
          content="Portfólio de Luan Lemos, desenvolvedor front-end"
        />
      </Head>
      <Component {...pageProps} />
      <ToastContainer />
    </>
  )
}
