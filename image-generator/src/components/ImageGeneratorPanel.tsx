import { useState } from 'react'
import { useImageGenerator } from '../hooks/useImageGenerator'
import { useHistoryStore } from '../state/historyStore'
import { ImageGrid } from './ImageGrid'
import { PromptHistory } from './PromptHistory'

export function ImageGeneratorPanel() {
  const [input, setInput] = useState('')
  const { run, cancel, loading, error } = useImageGenerator()
  const addPrompt = useHistoryStore((s) => s.addPrompt)

  function handleSubmit() {
    if (!input.trim()) return
    run(input)
    addPrompt(input)
    setInput('')
  }

  return (
    <div className="max-w-xl mx-auto p-6 space-y-4">
      <h1 className="text-2xl font-bold">
        AI Image Generator
      </h1>

      <div className="flex gap-2">
        <label htmlFor="prompt" className="sr-only">
          Image Prompt
        </label>

        <input
          id="prompt"
          aria-label="Image prompt input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
          placeholder="Describe an image..."
          className="border p-2 flex-1 rounded focus:outline-none focus:ring"
        />

        {!loading ? (
          <button
            onClick={handleSubmit}
            className="bg-purple-600 text-white px-4 rounded"
          >
            Generate
          </button>
        ) : (
          <button
            onClick={cancel}
            className="bg-red-500 text-white px-4 rounded"
          >
            Cancel
          </button>
        )}
      </div>

      <PromptHistory onSelect={setInput} />

      {error && (
        <div role="alert" aria-live="assertive" className="text-red-500 text-sm">{error}</div>
      )}

      <ImageGrid loading={loading} />
    </div>
  )
}