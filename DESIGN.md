---
name: BioStar4Life · Site
description: A página de vendas no mesmo mundo do login do app, provada pelas telas do próprio sistema.
colors:
  brand: 'oklch(0.52 0.18 292)'
  brand-foreground: 'oklch(1 0 0)'
  brand-dot: 'oklch(0.52 0.18 292 / 0.28)'
  card: 'oklch(1 0 0)'
  background: 'oklch(0.985 0.002 247.839)'
  foreground: 'oklch(0.21 0.034 264.665)'
  muted-foreground: 'oklch(0.551 0.027 264.364)'
  border: 'oklch(0.967 0.003 264.542)'
typography:
  display:
    fontFamily: 'Figtree, var(--font-sans), sans-serif'
    fontSize: '3.75rem'
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: '-0.025em'
  headline:
    fontFamily: 'Figtree, var(--font-sans), sans-serif'
    fontSize: '3rem'
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: '-0.025em'
  title:
    fontFamily: 'Figtree, var(--font-sans), sans-serif'
    fontSize: '1.5rem'
    fontWeight: 700
    lineHeight: 1.375
  numeral:
    fontFamily: 'Figtree, var(--font-sans), sans-serif'
    fontSize: '3.75rem'
    fontWeight: 700
    lineHeight: 1
  lead:
    fontFamily: 'Figtree, var(--font-sans), sans-serif'
    fontSize: '1.125rem'
    fontWeight: 500
    lineHeight: 1.556
  body:
    fontFamily: 'Figtree, var(--font-sans), sans-serif'
    fontSize: '1rem'
    fontWeight: 500
    lineHeight: 1.5
  label:
    fontFamily: 'Figtree, var(--font-sans), sans-serif'
    fontSize: '0.875rem'
    fontWeight: 500
    lineHeight: 1.43
rounded:
  sm: '0.3rem'
  lg: '0.5rem'
  2xl: '0.9rem'
  full: '9999px'
spacing:
  gutter: '1.5rem'
  gutter-sm: '2.5rem'
  container: '72rem'
  section-y: '6rem'
  section-y-lg: '8rem'
  heading-to-content: '3.5rem'
  stack: '1.5rem'
  tour-gap-lg: '8rem'
components:
  button-primary:
    backgroundColor: '{colors.brand}'
    textColor: '{colors.brand-foreground}'
    typography: '{typography.body}'
    rounded: '{rounded.full}'
    height: '48px'
    padding: '0 24px'
  button-primary-sm:
    backgroundColor: '{colors.brand}'
    textColor: '{colors.brand-foreground}'
    typography: '{typography.label}'
    rounded: '{rounded.full}'
    height: '32px'
    padding: '0 12px'
  button-outline:
    backgroundColor: 'transparent'
    textColor: '{colors.brand}'
    rounded: '{rounded.full}'
    height: '48px'
    padding: '0 20px'
  button-outline-hover:
    backgroundColor: '{colors.brand}'
    textColor: '{colors.brand-foreground}'
  button-inverse:
    backgroundColor: '{colors.brand-foreground}'
    textColor: '{colors.brand}'
    rounded: '{rounded.full}'
    height: '48px'
    padding: '0 24px'
  screen-frame:
    backgroundColor: '{colors.card}'
    rounded: '{rounded.2xl}'
  screen-frame-url-bar:
    backgroundColor: '{colors.card}'
    textColor: '{colors.muted-foreground}'
    padding: '8px 16px'
---

# Design System: BioStar4Life · Site

## Overview

**Creative North Star: "A vitrine do próprio sistema"**

O site é a continuação do login do app: o branco sobre a malha de pontos violeta, a foto do lírio em luz rosa sangrando até a borda, a logo do anel e a Figtree. A prova vem antes da promessa: o que ocupa o espaço são as telas de verdade do BioStar4Life, capturadas da Clínica Demonstração, em janelas claras com o endereço do app na barra. O resto da página é texto grande, listas com fio fino e muito ar.

A densidade é baixa e o ritmo é de revista: seções largas que alternam o branco do card e o cinza muito claro do fundo, títulos em peso 700 sem nenhuma etiqueta acima, e o violeta da marca guardado para o que se clica, para os números dos passos e para a faixa cheia do fechamento. Não há cartões de recurso com ícone, métricas, depoimentos ou selos: a página recusa a landing de SaaS genérica, e o produto não tem esses números para mostrar.

O movimento é um só: a captura do Início sobe e assenta uma vez, para quem não pediu menos movimento. O resto é estado (cor no hover, o chevron que gira no FAQ, a rolagem suave até as âncoras).

**Key Characteristics:**

- Capturas reais do app em moldura de janela clara, com sombra suave tingida de violeta.
- Branco e cinza claro alternando por seção, separados só pelo tom e por fios finos.
- Violeta da marca nos botões em pílula, nos numerais dos passos e na faixa de fechamento.
- Figtree: 700 nos títulos, 500 no texto corrido.
- Listas com fio fino no lugar de grades de cartões.
- Um único momento de movimento, na capa.

## Colors

Um violeta só sobre neutros frios quase brancos, herdados do tema do design system DS.frontend-ui.REACT.

### Primary

- **Violeta do Anel** (`brand`, oklch(0.52 0.18 292)): o violeta da logo, com 5,9:1 contra o branco. Fundo do botão principal, contorno e texto do botão secundário, os numerais dos passos, o nome do papel na seção da equipe, o risco da lista "o que sai da rotina", o tracinho dos detalhes, o chevron do FAQ, a seleção de texto, o cursor e a faixa cheia do fechamento. Entra no tema como `--primary` e `--ring`; tela usa sempre o token semântico (`bg-primary`, `text-primary`), nunca cor crua.
- **Branco da Marca** (`brand-foreground`, oklch(1 0 0)): o texto sobre o violeta, e o fundo do botão invertido na faixa do fechamento.
- **Ponto Violeta** (`brand-dot`, a marca a 28%): só a malha de pontos da capa (1,2px a cada 22px), decorativa e `aria-hidden`.

O `--brand-pink` (a marca girada 26° na matiz) está definido no `globals.css` para o "4" do nome no app, mas o site não o usa: o degradê do anel chega pela imagem da logo.

### Neutral

- **Papel Branco** (`card`, oklch(1 0 0)): o fundo das seções de ênfase (capa, o sistema, por que, perguntas), da moldura de janela e da barra de endereço.
- **Cinza Névoa** (`background`, oklch(0.985 0.002 247.839)): o fundo da página, do cabeçalho fixo, do rodapé e das seções que alternam com o branco (rotina, equipe, como começa).
- **Tinta** (`foreground`, oklch(0.21 0.034 264.665)): títulos e texto principal; a 80% nos links do cabeçalho, a 70% nos itens riscados, a 10% no anel da moldura.
- **Cinza de Apoio** (`muted-foreground`, oklch(0.551 0.027 264.364)): linhas de apoio, respostas do FAQ, legendas das capturas, rodapé e a barra de endereço. Passa o AA sobre o branco e sobre o cinza névoa.
- **Fio** (`border`, oklch(0.967 0.003 264.542)): os fios finos entre itens de lista, entre os papéis da equipe e acima do rodapé.

### Named Rules

**The Um Violeta Rule.** A marca é o único acento. Verde, âmbar e vermelho do design system ficam para estados do app; no site não aparecem.

**The Tom Alterna Rule.** Seções vizinhas trocam entre o Papel Branco e o Cinza Névoa; a separação entre elas é o tom, sem borda nem sombra.

## Typography

**Display Font:** Figtree (via `next/font`, variável `--font-sans`)
**Body Font:** Figtree

**Character:** Uma geométrica amigável só, a mesma do app (desde 04/11, no lugar da Quicksand), firme e legível no texto pequeno. O texto corrido vai no 500, como no app, para segurar o cinza do corpo pequeno.

### Hierarchy

- **Display** (700, 2.25rem no celular e 3.75rem do `sm` para cima, entrelinha 1.05, tracking -0.025em, `text-balance`): só o título da capa.
- **Headline** (700, 1.875rem no celular e 3rem do `sm` para cima, entrelinha 1.25, tracking -0.025em, `text-balance`): o título de cada seção, terminado em ponto ou interrogação, como frase.
- **Title** (700, 1.5rem; 1.875rem nos títulos do tour do sistema do `sm` para cima; 1.25rem nos itens da lista "Feito para"): subtítulos de recurso, papel e passo.
- **Numeral** (700, 3.75rem, entrelinha 1, na marca): o número dos passos, só onde a ordem importa.
- **Lead** (500, 1.125rem; 1.25rem na capa do `sm` para cima, em `muted-foreground`, `text-pretty`): a linha de apoio sob o título.
- **Body** (500, 1rem no celular e 1.125rem do `sm` para cima, `muted-foreground`): textos de recurso, papéis, passos, respostas. Colunas limitadas por `max-w-xl` a `max-w-3xl`.
- **Label** (500, 0.875rem; 0.75rem na barra de endereço): legendas das capturas, links do cabeçalho e do rodapé, botões pequenos.

### Named Rules

**The Título Sem Etiqueta Rule.** Nenhum título leva rótulo, kicker ou sobrelinha acima. O título diz a coisa sozinho.

**The 500 no Corpo Rule.** O `html` fica no 500; não volte o texto corrido para o 400.

## Layout

Contêiner de 72rem (`max-w-6xl`) centrado, com respiro lateral de 1.5rem no celular e 2.5rem do `sm` para cima. Seções com 6rem de respiro vertical, 8rem do `lg` para cima; o título da seção fica a 3.5rem do conteúdo. As colunas desiguais são a regra: 4fr/7fr ou 5fr/6fr no `lg` (rotina, perguntas, recursos do tour), uma coluna no celular.

A capa e a faixa do fechamento sangram até as bordas: a grade de duas metades tem o texto alinhado ao contêiner (`max(2.5rem, (100vw - 72rem)/2 + 2.5rem)`) e a foto do lírio ocupando a metade direita inteira. No celular, o lírio vira uma faixa de 18rem (24rem no `sm`) entre o texto e a captura. A captura do Início sobe sobre a costura entre o branco e a foto com margem negativa (-7rem, -10rem no `sm`, -15rem no `lg`), num contêiner de 64rem.

O tour do sistema muda de ritmo de propósito: uma captura larga à direita, uma à esquerda, duas lado a lado, outra larga, com 6rem entre elas (8rem no `lg`). Abaixo do `sm`, cada captura troca pela versão tirada na largura do celular. O cabeçalho é fixo, e a rolagem até as âncoras para 5.5rem abaixo do topo.

## Elevation & Depth

Plano por padrão: a profundidade vem do tom (branco sobre cinza névoa) e dos fios finos. A única sombra do sistema é a da moldura das capturas, longa, macia e tingida pela marca, que faz a tela do app flutuar sobre a página; o anel de 1px da tinta a 10% desenha a borda da janela.

### Shadow Vocabulary

- **Janela flutuante** (`box-shadow: 0 24px 60px -20px color-mix(in oklch, var(--brand) 35%, transparent)`, mais `ring-1` da tinta a 10%): só a moldura das capturas.

### Named Rules

**The Só a Tela Flutua Rule.** Sombra é da captura do sistema. Botões, listas e seções ficam planos.

## Shapes

Três formas: a pílula (`rounded.full`) em todo botão do site, a janela de cantos generosos (0.9rem) na moldura das capturas, e o retângulo reto nas seções e faixas que sangram. A foto do lírio nunca leva canto nem moldura: é cortada pela borda da tela ou da faixa. Os fios são de 1px no tom `border`; o risco da lista da rotina é de 2px, na marca. Os anéis de foco usam `rounded.lg` (0.5rem) nos links soltos.

## Components

### Buttons

Pílulas firmes, sempre com texto, ícone do lucide só quando ajuda (balão de conversa, seta para baixo).

- **Shape:** pílula (`rounded.full`).
- **Primary:** fundo da marca, texto branco, 48px de altura e 24px de lado no grande, 32px e 12px no pequeno do cabeçalho; peso 500.
- **Outline:** contorno de 1px e texto na marca sobre transparente; no hover, vira o primário cheio.
- **Inverse:** branco com texto na marca, só sobre a faixa violeta do fechamento.
- **Hover / Focus:** o primário escurece com `brightness(0.9)`; foco com anel de 3px na marca a 50%. Transição de cor de 150ms.
- O botão do WhatsApp só existe com o número em `src/config/contact.ts`; sem ele, some, e a página não deixa o lugar vazio.

### Moldura de janela (assinatura)

A captura real do app num retângulo branco de cantos 0.9rem, com a barra de endereço em cima (cadeado e `app.biostar4life.com.br` em 0.75rem, cinza de apoio, fio embaixo), a sombra Janela flutuante e o anel da tinta a 10%. Leva a versão de celular abaixo do `sm` quando existe. Toda captura vem da Clínica Demonstração, com dados fictícios, e a página diz isso numa legenda ou no texto de apoio por perto.

### Listas com fio

O lugar dos cartões. Itens separados por fios de 1px, com fio em cima e embaixo da lista (`divide-y border-y`): a lista riscada da rotina (1.25 a 1.5rem, tinta a 70%, risco de 2px na marca), a lista de termos "Feito para" em duas colunas, os papéis da equipe separados por fios verticais no `md`, e os detalhes do recurso com um tracinho de 1rem na marca no lugar do marcador.

### FAQ

`details` e `summary` nativos, sem JavaScript: pergunta em 1.125rem 700, chevron na marca que gira 180° aberto, resposta no cinza de apoio, itens entre fios.

### Navigation

Cabeçalho fixo no cinza névoa: logo à esquerda (2.75rem de altura), âncoras em 0.875rem na tinta a 80% do `lg` para cima, que ficam na marca e sublinhadas com 8px de afastamento no hover; à direita, "Entrar no sistema" em pílula de contorno pequena e o WhatsApp pequeno. Rodapé com fio em cima, logo, "Gestão da beleza" e links no cinza de apoio que ficam na marca no hover.

### Faixa de fechamento

Faixa violeta cheia, de ponta a ponta, com o texto à esquerda (título em headline branco, apoio a 90%, botão invertido) e o lírio na metade direita. Só aparece com o número do WhatsApp; sem ele, o fechamento é uma linha centrada com "Entrar no sistema".

## Do's and Don'ts

### Do:

- **Do** mostrar o sistema pelas capturas reais da Clínica Demonstração, na Moldura de janela, com a versão de celular e a menção aos dados fictícios.
- **Do** usar só os tokens semânticos do tema (`bg-primary`, `bg-card`, `text-muted-foreground`), com a marca no `:root` próprio do fim do `globals.css`.
- **Do** alternar o Papel Branco e o Cinza Névoa entre seções vizinhas e separar itens com fios de 1px.
- **Do** manter todo botão em pílula, com a marca cheia no principal e o contorno no secundário.
- **Do** numerar só o que tem ordem, com o numeral de 3.75rem na marca.
- **Do** guardar o movimento para a entrada da captura da capa (sobe 2.5rem em 1s, `cubic-bezier(0.16, 1, 0.3, 1)`, só com `motion-safe`).

### Don't:

- **Don't** pôr rótulo, kicker ou sobrelinha acima dos títulos.
- **Don't** montar grade de cartões iguais com ícone para os recursos; use a lista com fio ou a captura.
- **Don't** inventar métrica, depoimento, cliente, selo ou preço, nem tela gerada: só a captura do app.
- **Don't** pôr sombra em botão, lista ou seção; a sombra é da moldura das capturas.
- **Don't** usar cor crua do Tailwind nem um segundo acento.
- **Don't** pôr canto ou moldura na foto do lírio; ela sangra até a borda.
