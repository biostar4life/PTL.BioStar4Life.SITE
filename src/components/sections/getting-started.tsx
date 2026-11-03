// Como começa: a ordem importa, então os passos levam o número.
const STEPS = [
  {
    title: 'Uma conversa no WhatsApp',
    text: 'Você conta como a clínica funciona hoje, e a gente mostra o sistema com a rotina de vocês.',
  },
  {
    title: 'A gente cria a sua clínica',
    text: 'Com a primeira unidade, e você recebe o convite por e-mail para entrar e definir a sua senha.',
  },
  {
    title: 'Você chama a equipe',
    text: 'Cadastra as outras unidades, as profissionais, a recepção, os procedimentos e os insumos, e a agenda começa.',
  },
];

export function GettingStarted() {
  return (
    <section
      id="como-comeca"
      aria-labelledby="como-comeca-titulo"
      className="mx-auto max-w-6xl px-6 py-24 sm:px-10 lg:py-32"
    >
      <h2
        id="como-comeca-titulo"
        className="text-3xl leading-tight font-bold tracking-tight text-balance sm:text-5xl"
      >
        Como começa.
      </h2>
      <ol className="mt-14 grid gap-12 md:grid-cols-3 md:gap-10">
        {STEPS.map(({ title, text }, index) => (
          <li key={title} className="flex flex-col gap-3">
            <span aria-hidden="true" className="text-6xl leading-none font-bold text-primary">
              {index + 1}
            </span>
            <h3 className="text-2xl font-bold">{title}</h3>
            <p className="text-pretty text-muted-foreground sm:text-lg">{text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
