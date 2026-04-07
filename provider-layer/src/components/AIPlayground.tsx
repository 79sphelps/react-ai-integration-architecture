import { useState } from 'react'
import { useAI } from '../hooks/useAI'
import { ProviderSelector } from './ProviderSelector'
import { LoadingDots } from './LoadingDots'
import { OutputPanel } from './OutputPanel'
import { ProviderStatusBadge } from './ProviderStatusBadge'
import { useProviderStore } from '../state/providerStore'

export function AIPlayground() {
  const [input, setInput] = useState('')
  const { run, cancel, loading, output, error } = useAI()
  const provider = useProviderStore((s) => s.selected)

  return (
    <div className="p-6 space-y-6 max-w-2xl mx-auto">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">
          AI Provider Playground
        </h1>

        <ProviderStatusBadge provider={provider} />
      </div>

      <ProviderSelector />

      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask something..."
        className="border p-3 w-full rounded min-h-[120px]"
      />

      <div className="flex gap-2">
        <button
          onClick={() => run(input)}
          disabled={loading || !input}
          className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          {loading ? <LoadingDots /> : 'Generate'}
        </button>

        {loading && (
          <button
            onClick={cancel}
            className="bg-gray-200 px-4 py-2 rounded"
          >
            Cancel
          </button>
        )}
      </div>

      {error && (
        <div className="text-red-600 bg-red-50 p-3 rounded">
          {error}
        </div>
      )}

      <OutputPanel output={output} loading={loading} />
    </div>
  )
}