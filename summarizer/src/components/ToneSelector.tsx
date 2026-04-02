export function ToneSelector({ options, setOptions }: any) {
  return (
    <select
      value={options.tone}
      onChange={(e) => setOptions((o: any) => ({ ...o, tone: e.target.value }))}
      className="p-2 border rounded"
    >
      <option value="formal">Formal</option>
      <option value="casual">Casual</option>
    </select>
  );
}
