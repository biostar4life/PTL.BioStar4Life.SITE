import type { NextConfig } from 'next';

// O site é HTML estático (SPEC do app, Fase 7): o next build gera a pasta out/, que a hospedagem serve como
// arquivos, sem servidor. Por isso as imagens saem sem o otimizador, que precisaria de um, e cada página vira
// uma pasta com index.html.
const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
