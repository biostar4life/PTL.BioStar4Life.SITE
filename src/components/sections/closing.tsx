import Image from 'next/image';

import lilyPortrait from '@/assets/lily-portrait.jpg';
import { WhatsappButton, hasWhatsapp } from '@/components/whatsapp-button';
import { APP_LOGIN_URL } from '@/config/contact';

// O fechamento: a faixa violeta da marca de ponta a ponta, com o lírio na metade dela, e a conversa. Sem o
// número do WhatsApp, a faixa não tem para onde levar, e o fechamento fica só com o "Entrar no sistema" de
// quem já é cliente.
export function Closing() {
  if (!hasWhatsapp()) {
    return (
      <section
        aria-label="Para quem já é cliente"
        className="mx-auto max-w-6xl px-6 py-16 sm:px-10"
      >
        <p className="text-center text-lg text-muted-foreground">
          Já usa o BioStar4Life?{' '}
          <a
            href={APP_LOGIN_URL}
            className="font-bold text-primary underline-offset-4 hover:underline"
          >
            Entrar no sistema
          </a>
        </p>
      </section>
    );
  }
  return (
    <section
      aria-labelledby="conversa-titulo"
      className="grid bg-primary text-primary-foreground lg:grid-cols-2"
    >
      <div className="flex flex-col items-start gap-6 px-6 py-20 sm:px-10 lg:py-28 lg:pr-16 lg:pl-[max(2.5rem,calc((100vw-72rem)/2+2.5rem))]">
        <h2
          id="conversa-titulo"
          className="max-w-xl text-3xl leading-tight font-bold tracking-tight text-balance sm:text-5xl"
        >
          Vamos conversar sobre a sua clínica?
        </h2>
        <p className="max-w-xl text-lg text-pretty text-primary-foreground/90">
          A gente mostra o sistema funcionando, com a rotina de vocês, e tira as dúvidas.
        </p>
        <WhatsappButton tone="inverse" />
        <p className="text-sm text-primary-foreground/90">
          Já usa o BioStar4Life?{' '}
          <a href={APP_LOGIN_URL} className="font-bold underline underline-offset-4">
            Entrar no sistema
          </a>
        </p>
      </div>
      <div className="relative h-72 sm:h-96 lg:h-auto">
        <Image
          src={lilyPortrait}
          alt=""
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          placeholder="blur"
          className="object-cover object-[50%_80%]"
        />
      </div>
    </section>
  );
}
