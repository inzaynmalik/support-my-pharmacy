'use client';

import React from 'react';
import { useScrollReveal } from '@/lib/animations';
import { useScrollObserver } from '@/lib/scroll-observer';

interface ClientWrapperProps {
  children: React.ReactNode;
}

export const ClientWrapper: React.FC<ClientWrapperProps> = ({ children }) => {
  // Initialize scroll reveal effects with the renamed hook
  useScrollReveal();

  // Use the scroll observer
  useScrollObserver();

  return <>{children}</>;
};
