export function OutputPanel({
  output,
  loading,
}: {
  output: string
  loading: boolean
}) {
  return (
    <div className="bg-gray-100 p-4 rounded min-h-[160px] whitespace-pre-wrap relative">
      {loading && (
        <div className="absolute top-2 right-2 text-xs text-gray-400">
          generating...
        </div>
      )}

      {output || 'Output will appear here...'}
    </div>
  )
}