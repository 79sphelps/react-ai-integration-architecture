import { useState } from "react";
import { useGenerator } from "../hooks/useGenerator";
import { OutputViewer } from "./OutputViewer";
import { SchemaViewer } from "./SchemaViewer";
import { GeneratorEmpty } from "./GeneratorEmpty";

export function GeneratorPanel() {
  const [input, setInput] = useState("");
  const { data, loading, error, run, cancel } = useGenerator();

  return (
    <div className="p-4 max-w-xl mx-auto space-y-3 border rounded-xl shadow-sm">
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border p-2 w-full rounded"
        placeholder="Describe a project..."
        rows={2}
      />

      <div className="flex gap-2">
        <button
          onClick={() => run(input)}
          disabled={loading}
          className="bg-blue-600 text-white px-3 py-1 rounded disabled:opacity-50"
        >
          Generate
        </button>

        {loading && (
          <button
            onClick={cancel}
            className="bg-gray-500 text-white px-3 py-1 rounded"
          >
            Cancel
          </button>
        )}
      </div>

      {!loading && !data && !error && <GeneratorEmpty />}

      {loading && <div className="text-sm text-gray-500">Generating...</div>}

      {error && <div className="text-red-500 text-sm">{error}</div>}

      {data && <OutputViewer data={data} />}

      <SchemaViewer />
    </div>
  );
}
