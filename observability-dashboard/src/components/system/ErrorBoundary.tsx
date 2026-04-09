import { type ReactNode, useEffect, useState } from "react";

export function ErrorBoundary({ children }: { children: ReactNode }) {
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const handler = (event: ErrorEvent) => {
      setError(event.error);
    };

    window.addEventListener("error", handler);
    return () => window.removeEventListener("error", handler);
  }, []);

  if (error) {
    return (
      <div className="p-6 text-red-600">
        Something went wrong: {error.message}
      </div>
    );
  }

  return <>{children}</>;
}
