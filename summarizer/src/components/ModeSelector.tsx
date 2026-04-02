export function ModeSelector({ options, setOptions }: any) {
  return (
    <select
      value={options.mode}
      onChange={(e) => setOptions((o: any) => ({ ...o, mode: e.target.value }))}
      className="p-2 border rounded"
    >
      <option value="paragraph">Paragraph</option>
      <option value="bullets">Bullet Points</option>
    </select>
  );
}
