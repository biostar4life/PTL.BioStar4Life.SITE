import { BrandLogo } from '@/components/brand-logo';
import { buttonVariants } from '@/components/ui/button';
import { WhatsappButton } from '@/components/whatsapp-button';
import { APP_LOGIN_URL } from '@/config/contact';

const SECTIONS = [
  { href: '#sistema', label: 'O sistema' },
  { href: '#equipe', label: 'A equipe' },
  { href: '#como-comeca', label: 'Como começa' },
  { href: '#perguntas', label: 'Perguntas' },
];

// O cabeçalho fica no alto ao rolar, em fundo cheio: as âncoras levam às seções, e quem já é cliente entra.
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-transparent bg-background">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-3 sm:px-10">
        <a href="#inicio" className="rounded-lg focus-visible:ring-3 focus-visible:ring-ring/50">
          <BrandLogo className="h-11" />
        </a>
        <nav aria-label="Seções" className="hidden items-center gap-7 text-sm lg:flex">
          {SECTIONS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="rounded text-foreground/80 underline-offset-8 hover:text-primary hover:underline focus-visible:ring-3 focus-visible:ring-ring/50"
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={APP_LOGIN_URL}
            className={buttonVariants({ variant: 'outline', size: 'sm', shape: 'pill' })}
          >
            Entrar no sistema
          </a>
          <WhatsappButton size="sm" className="hidden sm:inline-flex" />
        </div>
      </div>
    </header>
  );
}
