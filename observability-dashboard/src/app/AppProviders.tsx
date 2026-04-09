import type { ReactNode } from "react";
import { ErrorBoundary } from "../components/system/ErrorBoundary";

interface Props {
  children: ReactNode;
}

export function AppProviders({ children }: Props) {
  return <ErrorBoundary>{children}</ErrorBoundary>;
}
