import React from "react";

export function VariablesPanel({ variables, setVariables }: any) {
  const update = (key: string, value: string) => {
    setVariables((prev: any) => ({ ...prev, [key]: value }));
  };

  const addVariable = () => {
    const key = prompt("Enter variable name");
    if (!key) return;
    update(key, "");
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <span className="font-medium">Variables</span>
        <button
          onClick={addVariable}
          className="text-sm text-blue-600 hover:underline"
        >
          + Add
        </button>
      </div>

      {Object.entries(variables).map(([key, value]) => (
        <div key={key} className="flex gap-2 mb-2">
          <input
            value={key}
            disabled
            className="w-1/3 p-2 border rounded bg-gray-100 text-sm"
          />
          <input
            value={value}
            onChange={(e) => update(key, e.target.value)}
            className="w-2/3 p-2 border rounded text-sm"
          />
        </div>
      ))}
    </div>
  );
}
