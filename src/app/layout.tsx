import type { Metadata } from 'next';
import { Quicksand } from 'next/font/google';
import type { ReactNode } from 'react';

import { cn } from '@/lib/utils';

import './globals.css';

// A Quicksand do app: geométrica e arredondada, com o texto corrido no 500 (globals.css).
const quicksand = Quicksand({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  metadataBase: new URL('https://biostar4life.com.br'),
  title: 'BioStar4Life · A clínica estética inteira num lugar só',
  description:
    'A clínica estética inteira num lugar só: agenda, pacientes, prontuário com fotos e termo de consentimento, estoque, pacotes de sessões, caixa, contas e comissão.',
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-BR" className={cn('font-sans', quicksand.variable)}>
      <body>{children}</body>
    </html>
  );
}
