export function JsonSchemaEditor({ schema, setSchema }: any) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1">JSON Schema</label>
      <textarea
        value={schema}
        onChange={(e) => setSchema(e.target.value)}
        className="w-full h-24 p-2 border rounded font-mono text-sm"
      />
    </div>
  );
}
