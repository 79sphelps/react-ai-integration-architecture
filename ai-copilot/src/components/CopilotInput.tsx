import { useState } from "react";

export function CopilotInput({ onSubmit }: any) {
  const [value, setValue] = useState("");

  return (
    <div className="flex gap-2">
      <input
        className="border p-2 flex-1 rounded"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        onClick={() => onSubmit(value)}
        className="bg-blue-500 text-white px-3 rounded"
      >
        Ask
      </button>
    </div>
  );
}
