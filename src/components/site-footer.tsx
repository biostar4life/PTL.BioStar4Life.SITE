import { BrandLogo } from '@/components/brand-logo';
import { APP_LOGIN_URL } from '@/config/contact';

export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-10">
        <div className="flex items-center gap-3">
          <BrandLogo className="h-10" />
          <span>Gestão da beleza · © 2026 BioStar4Life</span>
        </div>
        <nav aria-label="Rodapé" className="flex flex-wrap gap-x-6 gap-y-2">
          <a href="#sistema" className="hover:text-primary">
            O sistema
          </a>
          <a href="#perguntas" className="hover:text-primary">
            Perguntas
          </a>
          <a href={APP_LOGIN_URL} className="font-semibold text-primary hover:underline">
            Entrar no sistema
          </a>
        </nav>
      </div>
    </footer>
  );
}
