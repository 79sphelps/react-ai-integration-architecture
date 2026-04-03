// export function StrategyExplanation({ reason }: { reason: string }) {
//   return <div className="text-xs text-gray-500">{reason}</div>;
// }

export function StrategyExplanation({ reason }: { reason?: string }) {
  if (!reason) return null;

  return <div className="text-xs text-gray-500 italic">{reason}</div>;
}
