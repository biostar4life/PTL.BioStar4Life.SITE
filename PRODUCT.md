# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- A gestora da clínica estética, dona ou administradora, avaliando um sistema para a clínica. Chega pelo Instagram, pelo Google ou por indicação, muitas vezes pelo celular, entre um atendimento e outro. O público é na maioria feminino.
- Quem já usa o sistema e chega pelo site para entrar: o "Entrar no sistema" leva ao app (`app.biostar4life.com.br`).

## Product Purpose

Apresentar o BioStar4Life à gestora e levá-la a uma conversa no WhatsApp com a equipe, que mostra o sistema funcionando e cria a clínica. O sucesso é a conversa começada pelo botão. O plano está no SPEC do app (`PTL.BioStar4Life.NEXT`, `docs/SPEC.md`, Fase 7).

## Positioning

Tudo num lugar só (escolha da dona do produto, 03/11/2026): agenda por profissional (a agenda por sala está a caminho, no lote 5.3 do app, e não se anuncia antes de entrar), pacientes e prontuário, estoque com baixa automática, procedimentos com custo, pagamentos, pacotes de sessões, caixa, contas a pagar e a receber e comissão, num sistema só, no lugar da planilha, do caderno e dos aplicativos soltos. Os apoios, nesta ordem: feito para a estética (procedimento com insumo e custo, pacote de sessões, foto clínica com consentimento, comissão da profissional); várias unidades numa conta só; segurança e LGPD (prontuário que não se apaga, registro de quem abriu cada ficha, consentimento da paciente, cada clínica isolada no banco, dados no Brasil).

## Operating Context

- O onboarding é manual: a conversa no WhatsApp, a demonstração, a equipe do BioStar4Life cria a clínica e convida a gestora por e-mail, e ela entra e cadastra a equipe e as unidades.
- A equipe da clínica entra com e-mail e senha (o login com o Google está pronto no app, mas só se anuncia quando estiver ligado). São três papéis: a gestora, a recepção e a profissional, cada um vendo só o que é dele.

## Capabilities and Constraints

- Site estático (Next.js com `output: 'export'`), publicado no GitHub Pages, com o repositório público.
- Sem preço e sem planos na página; sem cadastro sozinho e sem período de teste, que estão fora do escopo do produto.
- Em aberto: o número do WhatsApp (as chamadas ficam prontas e aparecem com ele, em `src/config/contact.ts`), o e-mail de contato, o Instagram, a razão social e o CNPJ, que a política de privacidade e os termos de uso esperam.

## Brand Commitments

- O nome BioStar4Life e a linha "Gestão da beleza".
- Os mesmos do app: a logo do anel em degradê com as quatro estrelas, a foto do lírio (Pexels), o violeta da marca (`--brand`), a fonte Quicksand e a malha de pontos do login.

## Evidence on Hand

- O próprio sistema, em produção em `app.biostar4life.com.br`. As capturas da página saem da Clínica Demonstração do seed do app, com dados fictícios, e dizem isso na página.
- Nenhuma clínica usa o sistema ainda (confirmado em 03/11/2026): não há cliente, depoimento, número ou selo para mostrar, e nada disso se inventa.

## Product Principles

- Mostrar o sistema funcionando em vez de prometer.
- Falar a língua da clínica, sem jargão de software.
- Toda página termina numa conversa.

## Accessibility & Inclusion

Contraste AA (4,5:1 no texto) como piso, como no app.
