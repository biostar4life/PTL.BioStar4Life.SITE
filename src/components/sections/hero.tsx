import { ArrowDown } from 'lucide-react';
import Image from 'next/image';

import lilyPortrait from '@/assets/lily-portrait.jpg';
import inicioCelular from '@/assets/screens/inicio-celular.webp';
import inicio from '@/assets/screens/inicio.webp';
import { ScreenFrame } from '@/components/screen-frame';
import { buttonVariants } from '@/components/ui/button';
import { WhatsappButton } from '@/components/whatsapp-button';

// A malha de pontos do login do app, no violeta da marca sobre o branco. É decorativa.
export const DOT_TEXTURE =
  'pointer-events-none absolute inset-0 bg-[radial-gradient(color-mix(in_oklch,var(--brand)_28%,transparent)_1.2px,transparent_1.2px)] bg-size-[22px_22px]';

// A tela do sistema sobe e assenta uma vez, já visível desde o começo; quem pediu menos movimento a vê parada.
const SCREEN_ENTRANCE =
  'motion-safe:animate-in motion-safe:slide-in-from-bottom-10 motion-safe:duration-1000 motion-safe:ease-[cubic-bezier(0.16,1,0.3,1)]';

// A capa: a frase, o lírio do login do app e, por cima da costura entre os dois, o Início do sistema
// funcionando. A prova vem antes da promessa. No celular, o lírio vira uma faixa entre o texto e a tela.
export function Hero() {
  return (
    <section id="inicio" aria-labelledby="capa-titulo" className="relative bg-card">
      <div className="grid lg:grid-cols-2">
        <div className="relative px-6 pt-14 pb-14 sm:px-10 sm:pb-16 lg:pt-20 lg:pr-14 lg:pb-72 lg:pl-[max(2.5rem,calc((100vw-72rem)/2+2.5rem))]">
          <div aria-hidden="true" className={DOT_TEXTURE} />
          <div className="relative flex max-w-xl flex-col gap-6">
            <h1
              id="capa-titulo"
              className="text-4xl leading-[1.05] font-bold tracking-tight text-balance sm:text-6xl"
            >
              A clínica inteira num lugar só.
            </h1>
            <p className="text-lg text-pretty text-muted-foreground sm:text-xl">
              Agenda, pacientes, prontuário, estoque, caixa e comissão no mesmo sistema, feito para
              a clínica estética. Da primeira marcação ao fechamento do mês, sem planilha, caderno
              ou aplicativo solto.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <WhatsappButton />
              <a
                href="#sistema"
                className={buttonVariants({ variant: 'outline', size: 'lg', shape: 'pill' })}
              >
                Ver como funciona
                <ArrowDown aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
        <div className="relative h-72 sm:h-96 lg:h-auto">
          <Image
            src={lilyPortrait}
            alt=""
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            priority
            placeholder="blur"
            className="object-cover object-[50%_88%] lg:object-[50%_80%]"
          />
        </div>
      </div>
      <figure
        className={`relative z-10 mx-auto -mt-28 max-w-5xl px-4 sm:-mt-40 sm:px-10 lg:-mt-60 ${SCREEN_ENTRANCE}`}
      >
        <ScreenFrame
          image={inicio}
          mobileImage={inicioCelular}
          alt="O Início do BioStar4Life: o próximo atendimento, a linha do dia de cada profissional e os atendimentos de mais tarde."
          sizes="(min-width: 1024px) 960px, 100vw"
          priority
        />
        <figcaption className="mt-3 text-center text-sm text-muted-foreground">
          O Início da gestora, na Clínica Demonstração, com pacientes e valores fictícios.
        </figcaption>
      </figure>
    </section>
  );
}
