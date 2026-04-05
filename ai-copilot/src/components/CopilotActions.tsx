export function CopilotActions({ actions }: { actions?: string[] }) {
  if (!actions?.length) return null

  return (
    <div className="flex gap-2 mt-2">
      {actions.map((a, i) => (
        <span
          key={i}
          className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded"
        >
          {a}
        </span>
      ))}
    </div>
  )
}