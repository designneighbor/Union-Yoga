'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { initScrollAnimations } from '../utils/scrollAnimations';

interface ClientLayoutProps {
  children: React.ReactNode;
}

export function ClientLayout({ children }: ClientLayoutProps) {
  const pathname = usePathname();

  useEffect(() => {
    const cleanup = initScrollAnimations();
    return cleanup;
  }, [pathname]); // Re-run when pathname changes

  return <>{children}</>;
}