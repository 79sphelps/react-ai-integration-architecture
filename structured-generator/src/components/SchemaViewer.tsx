export function SchemaViewer() {
  return (
    <div className="text-xs bg-gray-100 p-3 rounded">
      <div className="font-semibold mb-1">Schema</div>
      <pre>
        {`{
  "projectType": string,
  "features": string[],
  "tech": string[]
}`}
      </pre>
    </div>
  );
}
