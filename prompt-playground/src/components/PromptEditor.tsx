import React from "react";

export function PromptEditor({ template, setTemplate }: any) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1">Prompt Template</label>
      <textarea
        aria-label="Prompt template"
        value={template}
        onChange={(e) => setTemplate(e.target.value)}
        className="w-full h-32 p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Write a {tone} summary about {topic}"
      />
    </div>
  );
}
