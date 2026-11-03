import { MessageCircle } from 'lucide-react';

import { buttonVariants } from '@/components/ui/button';
import { CONTACT, whatsappHref } from '@/config/contact';
import { cn } from '@/lib/utils';

interface WhatsappButtonProps {
  // "inverse" é o botão claro sobre a faixa violeta do fechamento.
  tone?: 'primary' | 'inverse';
  size?: 'sm' | 'lg';
  className?: string;
}

// A chamada da página (SPEC do app, Fase 7): a conversa no WhatsApp, onde a gestora já está, com a mensagem
// pronta. Sem o número em src/config/contact.ts, o botão não aparece.
export function WhatsappButton({ tone = 'primary', size = 'lg', className }: WhatsappButtonProps) {
  if (CONTACT.whatsappNumber === null) {
    return null;
  }
  return (
    <a
      href={whatsappHref(CONTACT.whatsappNumber)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        buttonVariants({ size, shape: 'pill' }),
        size === 'lg' && 'px-6 text-base',
        tone === 'inverse' &&
          'border-primary-foreground bg-primary-foreground text-primary hover:bg-primary-foreground/90',
        className,
      )}
    >
      <MessageCircle aria-hidden="true" />
      Conversar no WhatsApp
    </a>
  );
}

export function hasWhatsapp(): boolean {
  return CONTACT.whatsappNumber !== null;
}
