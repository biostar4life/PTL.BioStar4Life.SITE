import { Lock } from 'lucide-react';
import Image, { type StaticImageData } from 'next/image';

import { cn } from '@/lib/utils';

interface ScreenFrameProps {
  image: StaticImageData;
  // A mesma tela capturada na largura do celular: abaixo de sm, ela entra no lugar da de computador, que ali
  // ficaria pequena demais para ler.
  mobileImage?: StaticImageData;
  // O que a tela mostra, para quem não vê a imagem.
  alt: string;
  sizes: string;
  priority?: boolean;
  className?: string;
}

// Uma captura do sistema numa janela clara, com o endereço de verdade do app na barra. As capturas são da
// Clínica Demonstração do seed do app, com dados fictícios, e a página diz isso perto delas.
export function ScreenFrame({
  image,
  mobileImage,
  alt,
  sizes,
  priority = false,
  className,
}: ScreenFrameProps) {
  const preload = priority ? { priority: true } : {};
  return (
    <div
      className={cn(
        'overflow-hidden rounded-2xl bg-card shadow-[0_24px_60px_-20px_color-mix(in_oklch,var(--brand)_35%,transparent)] ring-1 ring-foreground/10',
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="flex items-center gap-1.5 border-b bg-card px-4 py-2 text-xs text-muted-foreground"
      >
        <Lock className="size-3" />
        app.biostar4life.com.br
      </div>
      {mobileImage !== undefined && (
        <Image
          src={mobileImage}
          alt={alt}
          sizes="100vw"
          placeholder="blur"
          className="h-auto w-full sm:hidden"
          {...preload}
        />
      )}
      <Image
        src={image}
        alt={alt}
        sizes={sizes}
        placeholder="blur"
        className={cn('h-auto w-full', mobileImage !== undefined && 'hidden sm:block')}
        {...preload}
      />
    </div>
  );
}
