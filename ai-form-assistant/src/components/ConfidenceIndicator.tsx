export function ConfidenceIndicator({ value }: { value: number }) {
  const percentage = Math.round(value * 100)

  return (
    <div className="text-xs text-gray-500">
      Confidence: {percentage}%
    </div>
  )
}