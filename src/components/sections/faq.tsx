import { ChevronDown } from 'lucide-react';

// As dúvidas de quem avalia o sistema, respondidas com o que o sistema faz hoje.
const QUESTIONS = [
  {
    question: 'Funciona para mais de uma unidade?',
    answer:
      'Sim. Cada unidade tem a sua agenda, o seu caixa e o seu estoque, e a gestora troca de unidade no topo do menu. A paciente é da clínica e é atendida em qualquer unidade.',
  },
  {
    question: 'Os dados das pacientes ficam seguros?',
    answer:
      'Cada clínica fica isolada das outras no banco de dados, e os dados ficam no Brasil. O prontuário só abre para a gestora e para a profissional que atende a paciente, cada abertura fica registrada, e nada clínico se apaga.',
  },
  {
    question: 'E a LGPD?',
    answer:
      'A paciente consente com o uso dos dados e, à parte, com as fotos clínicas, e o sistema guarda quando e quem registrou. Quando ela pede, a gestora exporta os dados dela.',
  },
  {
    question: 'Preciso instalar alguma coisa?',
    answer:
      'Não. O sistema abre no navegador, no computador da recepção ou no celular, e cada pessoa da equipe entra com o próprio e-mail e senha.',
  },
  {
    question: 'Quanto custa?',
    answer:
      'O valor a gente apresenta na conversa pelo WhatsApp, depois de entender como a sua clínica funciona.',
  },
];

export function Faq() {
  return (
    <section id="perguntas" aria-labelledby="perguntas-titulo" className="bg-card">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 sm:px-10 lg:grid-cols-[minmax(0,4fr)_minmax(0,7fr)] lg:gap-20 lg:py-32">
        <h2
          id="perguntas-titulo"
          className="text-3xl leading-tight font-bold tracking-tight text-balance sm:text-5xl"
        >
          Perguntas de quem está escolhendo.
        </h2>
        <div className="divide-y border-y">
          {QUESTIONS.map(({ question, answer }) => (
            <details key={question} className="group py-2">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 rounded-lg py-4 text-lg font-bold focus-visible:ring-3 focus-visible:ring-ring/50 [&::-webkit-details-marker]:hidden">
                {question}
                <ChevronDown
                  aria-hidden="true"
                  className="size-5 shrink-0 text-primary transition-transform group-open:rotate-180"
                />
              </summary>
              <p className="pb-5 text-pretty text-muted-foreground sm:text-lg">{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
