import Image from 'next/image';

import { BrandLogo } from '@/components/brand-logo';
import { buttonVariants } from '@/components/ui/button';
import { WhatsappButton } from '@/components/whatsapp-button';
import { APP_LOGIN_URL } from '@/config/contact';
import { cn } from '@/lib/utils';
import lilyPortrait from '@/assets/lily-portrait.jpg';

// A malha de pontos do login do app, no violeta da marca sobre o branco. É decorativa.
const DOT_TEXTURE =
  'pointer-events-none absolute inset-0 bg-[radial-gradient(color-mix(in_oklch,var(--brand)_28%,transparent)_1.2px,transparent_1.2px)] bg-size-[22px_22px]';

// A página de vendas (SPEC do app, Fase 7, lote 7.1): a capa, com a foto do lírio do login do app, e o
// rodapé. As seções do que o sistema faz, do porquê e das perguntas entram no lote 7.2.
export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Cover />
      </main>
      <SiteFooter />
    </>
  );
}

function SiteHeader() {
  return (
    <header className="flex items-center justify-between gap-4 px-6 py-4 sm:px-10">
      <BrandLogo />
      <a
        href={APP_LOGIN_URL}
        className={buttonVariants({ variant: 'outline', size: 'sm', shape: 'pill' })}
      >
        Entrar no sistema
      </a>
    </header>
  );
}

function Cover() {
  return (
    <section
      aria-labelledby="capa-titulo"
      className="grid lg:min-h-[calc(100dvh-5rem)] lg:grid-cols-[9fr_11fr]"
    >
      <div className="relative flex flex-col justify-center gap-6 px-6 py-12 sm:px-10 lg:py-20 lg:pr-16 lg:pl-16">
        <div aria-hidden="true" className={DOT_TEXTURE} />
        <p className="relative text-sm font-bold tracking-widest text-primary uppercase">
          Gestão da beleza
        </p>
        <h1
          id="capa-titulo"
          className="relative text-4xl leading-tight font-bold text-balance sm:text-5xl"
        >
          Sua clínica estética organizada, da agenda ao caixa.
        </h1>
        <p className="relative max-w-xl text-lg text-pretty text-muted-foreground">
          Agenda por profissional e por sala, prontuário com fotos e termo de consentimento, estoque
          com baixa automática, pacotes de sessões, caixa e comissão. Para uma unidade ou para
          várias, num lugar só.
        </p>
        <WhatsappButton />
      </div>
      <div className="relative h-80 overflow-hidden sm:h-[60dvh] lg:h-auto">
        <Image
          src={lilyPortrait}
          alt=""
          fill
          sizes="(min-width: 1024px) 55vw, 100vw"
          priority
          placeholder="blur"
          className="object-cover object-[50%_44%]"
        />
      </div>
    </section>
  );
}

function SiteFooter() {
  return (
    <footer className="flex flex-col items-center justify-between gap-4 border-t px-6 py-8 text-sm text-muted-foreground sm:flex-row sm:px-10">
      <div className="flex items-center gap-3">
        <BrandLogo className="h-10" />
        <span>© 2026 BioStar4Life · Gestão da beleza</span>
      </div>
      <a href={APP_LOGIN_URL} className={cn(buttonVariants({ variant: 'link', size: 'sm' }))}>
        Entrar no sistema
      </a>
    </footer>
  );
}
