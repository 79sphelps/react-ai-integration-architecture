import { useFormAssistant } from "./hooks/useFormAssistant";
import { FormField } from "./components/FormField";
import { FormAssistantPanel } from "./components/FormAssistantPanel";
import { SubmitButton } from "./components/SubmitButton";

export default function FormAssistant() {
  const state = useFormAssistant();

  const hasErrors = Object.values(state.errors).some(Boolean);

  return (
    <div className="max-w-xl mx-auto p-6 space-y-6 bg-gray-50">
      <FormAssistantPanel {...state} />

      <div className="space-y-4 bg-white p-4 rounded-xl shadow">
        {(["name", "email", "company"] as const).map((field) => (
          <FormField
            key={field}
            name={field}
            value={state.fields[field]}
            error={state.errors[field]}
            suggestion={state.suggestions[field]}
            onChange={state.updateField}
            onApply={state.applySuggestion}
          />
        ))}
      </div>

      <SubmitButton disabled={hasErrors} />
    </div>
  );
}
