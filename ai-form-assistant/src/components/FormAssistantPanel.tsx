export function FormAssistantPanel({ input, setInput, run, loading }: any) {
  return (
    <div className="space-y-3">
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Describe yourself..."
        className="w-full border p-3 rounded-xl"
      />

      <button
        onClick={run}
        disabled={loading}
        className="bg-blue-600 text-white px-4 py-2 rounded-xl disabled:opacity-50"
      >
        {loading ? "Generating..." : "Generate Suggestions"}
      </button>
    </div>
  );
}
