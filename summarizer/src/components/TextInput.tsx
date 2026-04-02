export function TextInput({ text, setText }: any) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1">Input Text</label>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Paste text to summarize..."
        className="w-full h-40 p-3 border rounded-xl focus:ring-2 focus:ring-blue-500"
      />
      <div className="text-xs text-gray-500 mt-1">
        Tip: Longer inputs produce better summaries
      </div>
    </div>
  );
}
