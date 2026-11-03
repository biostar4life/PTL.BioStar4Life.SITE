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

## Lotes (SPEC do app, Fase 7)

1. **7.1 Site no ar:** o repositório, o CI, a capa com o botão do WhatsApp e o rodapé, a hospedagem e o domínio raiz com o `www`. Falta o número do WhatsApp, a hospedagem e o domínio.
2. **7.2 A página inteira:** o que o sistema faz, o porquê, como começa, as perguntas frequentes, a política de privacidade e os termos de uso.
3. **7.3 Para ser achado:** metadados, Open Graph, sitemap, Search Console e o Web Analytics do Cloudflare.
