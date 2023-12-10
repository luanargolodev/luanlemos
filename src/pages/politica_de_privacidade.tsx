/* eslint-disable react/no-unescaped-entities */
import { Montserrat } from 'next/font/google'

import Head from 'next/head'

const montserrat = Montserrat({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Política de Privacidade Round6 - Jogo da memória</title>
      </Head>
      <main className="flex flex-col justify-center gap-2">
        <h1>Política de Privacidade - Round6 - Jogo da Memória</h1>

        <p>
          Esta Política de Privacidade descreve como as informações pessoais dos
          usuários são coletadas, usadas, compartilhadas e protegidas pelo
          aplicativo Round6 - Jogo da Memória ("nós", "nosso" ou "aplicativo").
          Ao utilizar o aplicativo, você concorda com as práticas descritas
          nesta política.
        </p>

        <h2>1. Informações Coletadas</h2>

        <p>
          <strong>1.1 Informações Pessoais:</strong> O aplicativo Round6 - Jogo
          da Memória não coleta informações pessoais identificáveis, como nome,
          endereço de e-mail ou número de telefone.
        </p>

        <p>
          <strong>1.2 Informações de Uso:</strong> Coletamos informações sobre o
          uso do aplicativo, incluindo estatísticas de jogo, pontuações e
          desempenho. Essas informações são usadas para melhorar a experiência
          do usuário e a qualidade do aplicativo.
        </p>

        <h2>2. Uso das Informações</h2>

        <p>
          <strong>2.1 Melhoria do Aplicativo:</strong> As informações coletadas
          são utilizadas para analisar o desempenho do aplicativo, identificar
          áreas de melhoria e desenvolver novos recursos para aprimorar a
          experiência do usuário.
        </p>

        <p>
          <strong>2.2 Compartilhamento de Informações:</strong> Não
          compartilhamos informações pessoais com terceiros, a menos que seja
          exigido por lei ou necessário para fornecer suporte técnico.
        </p>

        <h2>3. Segurança</h2>

        <p>
          <strong>3.1 Segurança das Informações:</strong> Implementamos medidas
          de segurança para proteger as informações coletadas contra acesso não
          autorizado, divulgação ou destruição.
        </p>

        <p>
          <strong>3.2 Notificações de Violação:</strong> Em caso de violação de
          dados que comprometa a segurança das informações pessoais,
          comprometemo-nos a notificar os usuários afetados conforme exigido por
          lei.
        </p>

        <h2>4. Atualizações e Alterações</h2>

        <p>
          <strong>4.1 Atualizações da Política:</strong> Podemos atualizar esta
          política periodicamente para refletir alterações em nossas práticas de
          informações. Recomendamos que os usuários revisitem esta política
          regularmente para estar cientes de qualquer alteração.
        </p>

        <h2>5. Consentimento</h2>

        <p>
          <strong>5.1 Aceitação da Política:</strong> Ao baixar, instalar e usar
          o aplicativo Round6 - Jogo da Memória, você consente com esta Política
          de Privacidade.
        </p>

        <p>
          Para dúvidas ou esclarecimentos sobre esta política, entre em contato
          conosco em [seu endereço de e-mail de suporte].
        </p>

        <p>Data de vigência: [data de vigência da política]</p>

        <p>
          Obrigado por escolher o Round6 - Jogo da Memória! Divirta-se jogando!
        </p>
      </main>
    </>
  )
}
