// Os três papéis do sistema, como na matriz de papéis do app: cada pessoa vê o que é dela.
const ROLES = [
  {
    name: 'A gestora',
    text: 'Vê a clínica inteira: as unidades, o dinheiro do dia, o estoque, as contas e a comissão. Cadastra a equipe, os procedimentos, os pacotes e as unidades.',
  },
  {
    name: 'A recepção',
    text: 'Marca, confirma e remarca, recebe os pagamentos, vende os pacotes e cuida do caixa e do estoque da unidade.',
  },
  {
    name: 'A profissional',
    text: 'Vê a própria agenda, abre o prontuário de quem atende, registra a evolução e as fotos e confere a própria comissão.',
  },
];

export function Team() {
  return (
    <section
      id="equipe"
      aria-labelledby="equipe-titulo"
      className="mx-auto max-w-6xl px-6 py-24 sm:px-10 lg:py-32"
    >
      <div className="flex max-w-3xl flex-col gap-5">
        <h2
          id="equipe-titulo"
          className="text-3xl leading-tight font-bold tracking-tight text-balance sm:text-5xl"
        >
          Cada pessoa da equipe no seu lugar.
        </h2>
        <p className="text-lg text-pretty text-muted-foreground">
          Cada uma entra com o próprio login e vê só o que é dela. O prontuário abre para a gestora
          e para a profissional que atende a paciente, e mais ninguém.
        </p>
      </div>
      <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-0 md:divide-x">
        {ROLES.map(({ name, text }) => (
          <div key={name} className="flex flex-col gap-3 md:px-8 md:first:pl-0 md:last:pr-0">
            <h3 className="text-2xl font-bold text-primary">{name}</h3>
            <p className="text-pretty text-muted-foreground sm:text-lg">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
