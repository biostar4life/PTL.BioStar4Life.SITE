// O tsc do lint roda antes do next build e, no CI, sem o next-env.d.ts, que o Next gera e fica fora do
// git. A referência aos tipos de imagem do Next vive aqui, para o import estático do .jpg compilar.
/// <reference types="next/image-types/global" />
