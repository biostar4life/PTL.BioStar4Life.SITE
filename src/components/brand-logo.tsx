import Image from 'next/image';

import logo from '@/assets/biostar4life-logo.png';
import { cn } from '@/lib/utils';

interface BrandLogoProps {
  className?: string;
}

// A logo do app: o "bio" e o "life" no anel em degradê, com as quatro estrelas do "Star4" no vão.
export function BrandLogo({ className }: BrandLogoProps) {
  return (
    <Image
      src={logo}
      alt="BioStar4Life"
      className={cn('h-12 w-auto shrink-0 object-contain', className)}
    />
  );
}
