export function RunButton({ run, loading }: any) {
  return (
    <button
      onClick={run}
      disabled={loading}
      className="bg-blue-600 text-white px-4 py-2 rounded"
    >
      {loading ? "Summarizing..." : "Summarize"}
    </button>
  );
}
