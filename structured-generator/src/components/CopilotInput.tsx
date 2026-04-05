import { useState } from "react";
import { validateInput } from "../utils/validateInput";

export function CopilotInput({ onSubmit }: any) {
  const [value, setValue] = useState("");
  const [error, setError] = useState<string | null>(null);

  function handleSubmit() {
    const err = validateInput(value);

    if (err) {
      setError(err);
      return;
    }

    setError(null);
    onSubmit(value);
    setValue("");
  }

  return (
    <div>
      <textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="border p-2 w-full rounded"
        placeholder="Ask something..."
        rows={2}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSubmit();
          }
        }}
      />

      {error && <div className="text-red-500 text-xs mt-1">{error}</div>}

      <button
        onClick={handleSubmit}
        className="mt-2 bg-blue-600 text-white px-3 py-1 rounded"
      >
        Run
      </button>
    </div>
  );
}
