# CLAUDE.md

@AGENTS.md

O site de vendas do BioStar4Life, em `biostar4life.com.br` (o sistema fica em `app.biostar4life.com.br`, no repositório `PTL.BioStar4Life.NEXT`). O plano, as decisões e os lotes estão no SPEC do app, na Fase 7: leia antes de começar um lote.

## Comandos

Requer Node 26 (`.nvmrc`).

```bash
npm ci
npm run dev       # http://localhost:3200
npm run lint      # tsc --noEmit, ESLint com --max-warnings=0 e prettier --check
npm run format
npm run build     # HTML estático em out/
npm run preview   # serve o out/ em http://localhost:3201, como a hospedagem
```

## O site é estático

- O `next.config.ts` liga o `output: 'export'`: o build gera a pasta `out/`, servida como arquivos, sem servidor. Nada de Server Action, Route Handler dinâmico, `cookies()`, `headers()`, middleware ou variável de ambiente: a página tem de sair inteira no build.
- As imagens entram por import estático com o `next/image`, sem o otimizador (`images.unoptimized`). O `src/types/next-image.d.ts` traz os tipos de imagem para o `tsc` do lint, que roda no CI antes do build.
- Cada página vira uma pasta com `index.html` (`trailingSlash`): o link interno termina em `/`.
- Publica no GitHub Pages pelo workflow de CI, a cada push na `main`, com o domínio `biostar4life.com.br` (README, "Publicação"). O repositório é público: nada de segredo, dado de cliente ou e-mail pessoal nele, e os commits saem com o e-mail privado do GitHub (`git config user.email` deste repositório).

## Visual

- O mesmo design system do app, o `DS.frontend-ui.REACT`, pelo registry `@frontend-ui` do `components.json`: item novo entra com `npx shadcn@4.23.0 add @frontend-ui/<item>`, revisando o diff. Tela usa só os tokens semânticos (`bg-primary`, `text-muted-foreground`), nunca cor crua.
- A marca é a do app: o `--brand` e o `--brand-pink` no `:root` do fim do `globals.css`, a fonte Quicksand (texto corrido no peso 500), a logo e a foto do lírio em `src/assets`, copiadas do app. Quando o app trocar alguma delas, a cópia daqui acompanha.

## Conteúdo

- Texto em português do Brasil, na linguagem da clínica, sem jargão de software. O texto é rascunhado aqui e revisado pela dona do produto antes de publicar.
- Nada se inventa: sem depoimento, cliente, número ou selo enquanto não existirem. Sem preço enquanto os planos não estiverem definidos.
- A chamada é a conversa no WhatsApp, com a mensagem pronta. O número e os outros contatos ficam em `src/config/contact.ts`; sem o número, o botão não aparece.

## Idioma e git

- Identificadores e arquivos em inglês; texto de tela, comentários, docs e commits em português.
- Commits como no app: `feature`, `docs`, `chore` e `ci`, com o lote da Fase 7 no fim (`feature(site): monta a capa (lote 7.1)`), só com o título e o corpo, sem linha de coautoria, e com a mensagem por `git commit -F <arquivo>`.
- Enquanto o site estiver nascendo, cada mudança terminada vai direto para a `main` e para o ar, como no app.
