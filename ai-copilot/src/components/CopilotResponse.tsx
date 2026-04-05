import { CopilotActions } from './CopilotActions'
import { CopyButton } from './CopyButton'
import { ConfidenceBar } from './ConfidenceBar'
import { DebugPanel } from './DebugPanel'

export function CopilotResponse({ data }: any) {
  return (
    <div className="mt-4 p-3 border rounded bg-gray-50 space-y-2">
      <div className="flex justify-between">
        <div className="text-sm">{data.answer}</div>
        <CopyButton text={data.answer} />
      </div>

      <div className="text-xs text-gray-500">
        Intent: {data.intent}
      </div>

      <ConfidenceBar value={data.confidence} />

      <CopilotActions actions={data.actions} />

      <DebugPanel data={data} />
    </div>
  )
}