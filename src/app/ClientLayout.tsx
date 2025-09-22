'use client';

import { useEffect } from 'react';
import { initScrollAnimations } from '../utils/scrollAnimations';

interface ClientLayoutProps {
  children: React.ReactNode;
}

export function ClientLayout({ children }: ClientLayoutProps) {
  useEffect(() => {
    const cleanup = initScrollAnimations();
    return cleanup;
  }, []);

  return <>{children}</>;
}