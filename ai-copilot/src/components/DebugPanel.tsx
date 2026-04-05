import React from "react";

export function DebugPanel({ data }: { data: any }) {
  const [open, setOpen] = React.useState(false)

  return (
    <div className="mt-3 text-xs">
      <button
        onClick={() => setOpen(!open)}
        className="text-gray-400"
      >
        Debug
      </button>

      {open && (
        <pre className="bg-gray-100 p-2 mt-1 rounded">
          {JSON.stringify(data, null, 2)}
        </pre>
      )}
    </div>
  )
}