# PTL.BioStar4Life.SITE

O site de vendas do BioStar4Life, em `biostar4life.com.br`: uma página, estática, que apresenta o sistema à gestora da clínica estética e chama para a conversa no WhatsApp. O sistema fica em `app.biostar4life.com.br` (`PTL.BioStar4Life.NEXT`), e o plano do site está no SPEC dele, na Fase 7.

## Rodar

Requer Node 26 (`.nvmrc`).

```bash
npm ci
npm run dev        # http://localhost:3200
npm run build      # HTML estático em out/
npm run preview    # serve o out/ em http://localhost:3201
```

`npm run lint` roda o `tsc`, o ESLint e o Prettier, como o CI (`.github/workflows/ci.yml`), que também roda o build.

## Publicação

O site fica no GitHub Pages, com o domínio `biostar4life.com.br` (o `www` redireciona para ele). A cada push na `main`, o workflow de CI roda o lint e o build e publica a pasta `out/` pelo GitHub Actions; o pull request só roda o lint e o build. O repositório é público porque o plano gratuito da organização só publica no Pages repositório público: ele só tem o site, sem segredo nem dado de cliente.

O DNS fica no Cloudflare, em "DNS only": os quatro registros A do GitHub Pages no domínio raiz (`185.199.108.153` a `185.199.111.153`) e o CNAME `www` para `biostar4life.github.io`. O certificado HTTPS é do GitHub.

## Lotes (SPEC do app, Fase 7)

1. **7.1 Site no ar:** o repositório, o CI, a capa com o botão do WhatsApp e o rodapé, a publicação no GitHub Pages e o domínio raiz com o `www`. Falta o número do WhatsApp.
2. **7.2 A página inteira:** o que o sistema faz, o porquê, como começa, as perguntas frequentes, a política de privacidade e os termos de uso.
3. **7.3 Para ser achado:** metadados, Open Graph, sitemap, Search Console e o Web Analytics do Cloudflare.
