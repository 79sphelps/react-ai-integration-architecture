export function OutputViewer({ output, validation, loading }: any) {
  return (
    <div className="border rounded-xl p-4 h-full flex flex-col">
      <div className="flex justify-between items-center mb-2">
        <span className="font-medium">Output</span>
        {validation && (
          <span
            className={`text-sm ${
              validation.valid ? "text-green-600" : "text-red-600"
            }`}
          >
            {validation.valid ? "Valid JSON" : validation.error}
          </span>
        )}
      </div>

      <pre className="flex-1 overflow-auto text-sm bg-gray-50 p-3 rounded">
        {loading ? "Generating..." : format(output)}
      </pre>
    </div>
  );
}

function format(str: string) {
  try {
    return JSON.stringify(JSON.parse(str), null, 2);
  } catch {
    return str;
  }
}
