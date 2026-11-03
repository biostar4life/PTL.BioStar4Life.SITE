import type { StaticImageData } from 'next/image';

import agendaCelular from '@/assets/screens/agenda-celular.webp';
import agenda from '@/assets/screens/agenda.webp';
import atendimentoCelular from '@/assets/screens/atendimento-celular.webp';
import atendimento from '@/assets/screens/atendimento.webp';
import comissoesCelular from '@/assets/screens/comissoes-celular.webp';
import comissoes from '@/assets/screens/comissoes.webp';
import contasCelular from '@/assets/screens/contas-celular.webp';
import contas from '@/assets/screens/contas.webp';
import estoqueCelular from '@/assets/screens/estoque-celular.webp';
import estoque from '@/assets/screens/estoque.webp';
import { ScreenFrame } from '@/components/screen-frame';
import { cn } from '@/lib/utils';

interface Feature {
  title: string;
  text: string;
  details?: string[];
  image: StaticImageData;
  // A mesma tela na largura do celular.
  mobileImage: StaticImageData;
  alt: string;
}

const AGENDA: Feature = {
  title: 'A agenda de cada profissional',
  text: 'Grade por profissional ou lista do dia, e o sistema barra o horário que já está ocupado. A recepção confirma, remarca e marca a falta; a profissional vê só a própria agenda, também no celular.',
  details: [
    'O valor do procedimento fica guardado no agendamento',
    'Cliente novo e termo pendente aparecem na agenda',
    'O Início mostra o próximo atendimento e o que ficou para trás',
  ],
  image: agenda,
  mobileImage: agendaCelular,
  alt: 'A agenda do dia em grade, com os atendimentos de quatro profissionais das 7h às 17h.',
};

const ATENDIMENTO: Feature = {
  title: 'O atendimento inteiro numa página',
  text: 'Quem vem, o procedimento, o valor e o pagamento: PIX, cartão, dinheiro, desconto e pacote de sessões. O termo de consentimento que a paciente aceita, os insumos que saíram do estoque e o caminho para o prontuário.',
  image: atendimento,
  mobileImage: atendimentoCelular,
  alt: 'A página de um atendimento, com os dados do horário e o pagamento em aberto.',
};

const SIDE_BY_SIDE: Feature[] = [
  {
    title: 'O estoque que baixa sozinho',
    text: 'Concluiu o atendimento, os insumos do procedimento saem do estoque da unidade. O que está abaixo do mínimo avisa no Início.',
    image: estoque,
    mobileImage: estoqueCelular,
    alt: 'O estoque da unidade, com o saldo e o mínimo de cada insumo.',
  },
  {
    title: 'O caixa e as contas da clínica',
    text: 'Caixa do dia com fundo de troco, sangria e fechamento conferido. As contas a pagar e a receber de cada unidade, com as vencidas no Início.',
    image: contas,
    mobileImage: contasCelular,
    alt: 'As contas a pagar, com o vencimento, a categoria, a unidade e a situação de cada uma.',
  },
];

const COMISSAO: Feature = {
  title: 'A comissão calculada, mês a mês',
  text: 'O percentual de cada profissional fica guardado quando o atendimento termina. A gestora fecha o mês, e a comissão vira conta a pagar; a profissional confere a dela.',
  image: comissoes,
  mobileImage: comissoesCelular,
  alt: 'A comissão do mês de cada profissional, com o percentual, os atendimentos e a situação.',
};

// Um dia na clínica nas telas de verdade: a agenda grande, o atendimento ao lado do texto, o estoque e o caixa
// lado a lado, e a comissão fechando o mês. O ritmo muda de uma para a outra.
export function SystemTour() {
  return (
    <section id="sistema" aria-labelledby="sistema-titulo" className="bg-card">
      <div className="mx-auto flex max-w-6xl flex-col gap-24 px-6 py-24 sm:px-10 lg:gap-32 lg:py-32">
        <div className="flex max-w-3xl flex-col gap-5">
          <h2
            id="sistema-titulo"
            className="text-3xl leading-tight font-bold tracking-tight text-balance sm:text-5xl"
          >
            Um dia na clínica, nas telas de verdade.
          </h2>
          <p className="text-lg text-pretty text-muted-foreground">
            As telas abaixo são do sistema funcionando, na Clínica Demonstração, com pacientes,
            profissionais e valores fictícios.
          </p>
        </div>

        <FeatureRow feature={AGENDA} imageSide="right" wide />
        <FeatureRow feature={ATENDIMENTO} imageSide="left" />

        <div className="grid gap-16 lg:grid-cols-2 lg:gap-12">
          {SIDE_BY_SIDE.map((feature) => (
            <article key={feature.title} className="flex flex-col gap-6">
              <ScreenFrame
                image={feature.image}
                mobileImage={feature.mobileImage}
                alt={feature.alt}
                sizes="(min-width: 1024px) 540px, 100vw"
              />
              <FeatureText feature={feature} />
            </article>
          ))}
        </div>

        <FeatureRow feature={COMISSAO} imageSide="right" wide />
      </div>
    </section>
  );
}

function FeatureRow({
  feature,
  imageSide,
  wide = false,
}: {
  feature: Feature;
  imageSide: 'left' | 'right';
  wide?: boolean;
}) {
  return (
    <article
      className={cn(
        'grid items-center gap-10 lg:gap-14',
        wide
          ? 'lg:grid-cols-[minmax(0,4fr)_minmax(0,7fr)]'
          : 'lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)]',
      )}
    >
      <div className={cn(imageSide === 'left' && 'lg:order-2')}>
        <FeatureText feature={feature} />
      </div>
      <ScreenFrame
        image={feature.image}
        mobileImage={feature.mobileImage}
        alt={feature.alt}
        sizes="(min-width: 1024px) 700px, 100vw"
        className={cn(imageSide === 'left' && 'lg:order-1')}
      />
    </article>
  );
}

function FeatureText({ feature }: { feature: Feature }) {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-2xl leading-snug font-bold tracking-tight text-balance sm:text-3xl">
        {feature.title}
      </h3>
      <p className="text-pretty text-muted-foreground sm:text-lg">{feature.text}</p>
      {feature.details !== undefined && (
        <ul className="flex flex-col gap-2 pt-1">
          {feature.details.map((detail) => (
            <li key={detail} className="flex gap-3 text-sm sm:text-base">
              <span aria-hidden="true" className="mt-2.5 h-px w-4 shrink-0 bg-primary" />
              {detail}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
