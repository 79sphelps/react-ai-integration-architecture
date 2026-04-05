import { useState } from "react";

export function OutputViewer({ data }: any) {
  const [copied, setCopied] = useState(false);

  function copy() {
    navigator.clipboard.writeText(JSON.stringify(data, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <div className="bg-gray-900 text-green-300 p-3 rounded relative">
      <button
        onClick={copy}
        className="absolute top-2 right-2 text-xs bg-gray-700 px-2 py-1 rounded"
      >
        {copied ? "Copied" : "Copy"}
      </button>

      <pre className="text-xs overflow-auto">
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
}
