// O que sai da rotina quando tudo fica num lugar só: a mensagem da página, dita pelo que a gestora reconhece.
const LEFT_BEHIND = [
  'A agenda de papel e a do celular',
  'A planilha do caixa',
  'O caderno do estoque',
  'As fichas na pasta',
  'A conta da comissão no fim do mês',
  'O grupo do WhatsApp para saber quem vem',
];

export function Routine() {
  return (
    <section
      aria-labelledby="rotina-titulo"
      className="mx-auto max-w-6xl px-6 py-24 sm:px-10 lg:py-32"
    >
      <div className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-20">
        <div className="flex flex-col gap-5">
          <h2
            id="rotina-titulo"
            className="text-3xl leading-tight font-bold tracking-tight text-balance sm:text-5xl"
          >
            O que sai da rotina da clínica.
          </h2>
          <p className="text-lg text-pretty text-muted-foreground">
            A recepção marca, a profissional atende e registra, a gestora acompanha o dinheiro e o
            estoque. Cada um no mesmo sistema, e cada um vendo o que é seu.
          </p>
        </div>
        <ul className="flex flex-col divide-y border-y">
          {LEFT_BEHIND.map((item) => (
            <li key={item} className="py-4 text-xl text-foreground/70 sm:text-2xl">
              <s className="decoration-primary decoration-2">{item}</s>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
