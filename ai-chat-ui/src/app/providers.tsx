import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

/**
 * App-level providers (future-proofing for:
 * - Zustand
 * - React Query
 * - Theme providers
 * - Feature flags
 */
export const AppProviders = ({ children }: Props) => {
  return <>{children}</>;
};