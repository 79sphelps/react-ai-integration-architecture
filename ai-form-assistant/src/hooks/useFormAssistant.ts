import { useState } from "react";
import { getSuggestions } from "../api/mockAssistant";
import { parseAssistantResponse } from "../utils/parseAssistantResponse";
import { validateField } from "../utils/validateField";
import type { FieldName, FieldValueMap, SuggestionsMap } from "../types";

const initialFields: FieldValueMap = {
  name: "",
  email: "",
  company: "",
};

export function useFormAssistant() {
  const [input, setInput] = useState("");
  const [fields, setFields] = useState<FieldValueMap>(initialFields);
  const [suggestions, setSuggestions] = useState<SuggestionsMap>({});
  const [errors, setErrors] = useState<Partial<Record<FieldName, string>>>({});
  const [loading, setLoading] = useState(false);

  const run = async () => {
    if (!input.trim()) return;

    setLoading(true);

    try {
      const raw = await getSuggestions(input);
      const parsed = parseAssistantResponse(raw);
      setSuggestions(parsed);
    } finally {
      setLoading(false);
    }
  };

  const updateField = (name: FieldName, value: string) => {
    setFields((prev) => ({ ...prev, [name]: value }));

    const result = validateField(name, value);

    setErrors((prev) => ({
      ...prev,
      [name]: result.valid ? undefined : result.error,
    }));
  };

  const applySuggestion = (name: FieldName) => {
    const suggestion = suggestions[name];
    if (!suggestion) return;

    updateField(name, suggestion.value);
  };

  return {
    input,
    setInput,
    fields,
    suggestions,
    errors,
    loading,
    run,
    updateField,
    applySuggestion,
  };
}
