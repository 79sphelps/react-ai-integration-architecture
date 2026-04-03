export function RetryButton({ onRetry }: { onRetry: () => void }) {
  return (
    <button onClick={onRetry} className="text-sm text-blue-600 hover:underline">
      Retry
    </button>
  );
}
