export function CopilotTracePanel({ trace }: any) {
  if (!trace) return null;

  return (
    <div className="mt-4 text-xs bg-gray-900 text-green-300 p-3 rounded font-mono space-y-1">
      <div>Intent: {trace.intent}</div>
      <div>Tool Attempted: {trace.toolAttempted ? "Yes" : "No"}</div>
      <div>Tool Used: {trace.toolUsed ? "Yes" : "No"}</div>
      <div>LLM Fallback: {trace.llmUsed ? "Yes" : "No"}</div>
      <div>Memory Entries: {trace.memoryCount}</div>
    </div>
  );
}
