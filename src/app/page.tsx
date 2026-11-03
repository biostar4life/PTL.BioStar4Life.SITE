import { Closing } from '@/components/sections/closing';
import { Faq } from '@/components/sections/faq';
import { GettingStarted } from '@/components/sections/getting-started';
import { Hero } from '@/components/sections/hero';
import { Reasons } from '@/components/sections/reasons';
import { Routine } from '@/components/sections/routine';
import { SystemTour } from '@/components/sections/system-tour';
import { Team } from '@/components/sections/team';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';

// A página de vendas (SPEC do app, Fase 7, lote 7.2): a clínica inteira num lugar só, provada pelas telas do
// próprio sistema, até a conversa no WhatsApp.
export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Routine />
        <SystemTour />
        <Team />
        <Reasons />
        <GettingStarted />
        <Faq />
        <Closing />
      </main>
      <SiteFooter />
    </>
  );
}
