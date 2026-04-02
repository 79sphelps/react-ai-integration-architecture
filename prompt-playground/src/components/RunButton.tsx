export function RunButton({ run, loading }: any) {
  return (
    <button
      onClick={run}
      disabled={loading}
      className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 disabled:opacity-50 transition"
    >
      {loading ? "Running..." : "Run Prompt"}
    </button>
  );
}
