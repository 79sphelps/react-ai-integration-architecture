export function ConfidenceBar({ value }: { value: number }) {
  return (
    <div className="w-full bg-gray-200 h-2 rounded">
      <div
        className="bg-green-500 h-2 rounded"
        style={{ width: `${value * 100}%` }}
      />
    </div>
  )
}