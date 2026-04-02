export function SearchInput({ query, setQuery, onSearch }: any) {
  return (
    <div className="flex gap-2">
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Ask a question..."
        className="flex-1 border p-2 rounded-lg"
      />
      <button
        onClick={onSearch}
        className="bg-blue-600 text-white px-4 rounded-lg"
      >
        Search
      </button>
    </div>
  );
}
