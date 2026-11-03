// O contato da página. O número do WhatsApp, o e-mail, o Instagram, a razão social e o CNPJ vêm da dona do
// produto (SPEC do app, Fase 7): enquanto o número faltar, o botão do WhatsApp não aparece.
interface Contact {
  // Só os dígitos, com o 55 e o DDD: "5531999999999".
  whatsappNumber: string | null;
}

export const CONTACT: Contact = {
  whatsappNumber: null,
};

// A conversa já começa com a mensagem pronta, e a pessoa só aperta enviar.
const WHATSAPP_MESSAGE = 'Olá! Quero conhecer o BioStar4Life para a minha clínica.';

export function whatsappHref(number: string): string {
  return `https://wa.me/${number}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
}

// Quem já é cliente chega pelo site e entra no sistema por aqui.
export const APP_LOGIN_URL = 'https://app.biostar4life.com.br/login';
