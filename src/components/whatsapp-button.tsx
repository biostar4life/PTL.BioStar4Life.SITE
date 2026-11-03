import { MessageCircle } from 'lucide-react';

import { buttonVariants } from '@/components/ui/button';
import { CONTACT, whatsappHref } from '@/config/contact';
import { cn } from '@/lib/utils';

interface WhatsappButtonProps {
  className?: string;
}

// A chamada da página (SPEC do app, Fase 7): a conversa no WhatsApp, onde a gestora já está. Sem o número,
// o botão não aparece.
export function WhatsappButton({ className }: WhatsappButtonProps) {
  if (CONTACT.whatsappNumber === null) {
    return null;
  }
  return (
    <a
      href={whatsappHref(CONTACT.whatsappNumber)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(buttonVariants({ size: 'lg', shape: 'pill' }), 'px-6 text-base', className)}
    >
      <MessageCircle />
      Conversar no WhatsApp
    </a>
  );
}
