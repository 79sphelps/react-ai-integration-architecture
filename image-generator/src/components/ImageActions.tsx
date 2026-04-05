export function ImageActions({ url, prompt }: any) {
  function download() {
    const a = document.createElement('a')
    a.href = url
    a.download = 'image.png'
    a.click()
  }

  function copy() {
    navigator.clipboard.writeText(prompt)
  }

  return (
    <div className="flex gap-2 mt-1">
      <button
        onClick={download}
        className="text-xs text-blue-600"
      >
        Download
      </button>
      <button
        onClick={copy}
        className="text-xs text-gray-600"
      >
        Copy Prompt
      </button>
    </div>
  )
}