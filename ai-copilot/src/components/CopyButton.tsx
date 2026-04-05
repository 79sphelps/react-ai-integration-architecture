export function CopyButton({ text }: { text: string }) {
  async function copy() {
    await navigator.clipboard.writeText(text)
  }

  return (
    <button
      onClick={copy}
      className="text-xs text-blue-500 hover:underline"
    >
      Copy
    </button>
  )
}