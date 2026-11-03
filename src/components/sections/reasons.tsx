// Os apoios do "tudo num lugar só", na ordem do PRODUCT.md: feito para a estética, várias unidades, segurança.
const REASONS = [
  {
    title: 'Procedimento com insumo e custo',
    text: 'Cada procedimento sabe o que consome e quanto custa, e o estoque baixa quando o atendimento termina.',
  },
  {
    title: 'Pacote de sessões',
    text: 'A venda, as sessões usadas e as que faltam, a validade e a prorrogação, com o pagamento em mais de uma vez ou de uma vez só.',
  },
  {
    title: 'Várias unidades numa conta só',
    text: 'Cada unidade com a sua agenda, o seu caixa e o seu estoque. A paciente é da clínica e é atendida em qualquer unidade.',
  },
  {
    title: 'Prontuário que não se perde',
    text: 'Anamnese, evolução, fotos de antes e depois e termo de consentimento. Nada clínico se apaga: a correção vira um adendo.',
  },
  {
    title: 'LGPD no dia a dia',
    text: 'A paciente consente com os dados e, à parte, com as fotos. Cada abertura de ficha fica registrada, e a gestora exporta os dados de uma paciente quando ela pede.',
  },
  {
    title: 'Seus dados no Brasil',
    text: 'O sistema roda no Brasil, e cada clínica fica isolada das outras no banco de dados.',
  },
];

export function Reasons() {
  return (
    <section aria-labelledby="por-que-titulo" className="bg-card">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:px-10 lg:py-32">
        <h2
          id="por-que-titulo"
          className="max-w-3xl text-3xl leading-tight font-bold tracking-tight text-balance sm:text-5xl"
        >
          Feito para a clínica estética.
        </h2>
        <dl className="mt-14 grid gap-x-16 border-t md:grid-cols-2">
          {REASONS.map(({ title, text }) => (
            <div key={title} className="flex flex-col gap-2 border-b py-7">
              <dt className="text-xl font-bold">{title}</dt>
              <dd className="text-pretty text-muted-foreground sm:text-lg">{text}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
