export type FieldName = "name" | "email" | "company";

export interface FieldValueMap {
  name: string;
  email: string;
  company: string;
}

export interface FieldSuggestion {
  value: string;
  confidence: number;
}

export type SuggestionsMap = Partial<Record<FieldName, FieldSuggestion>>;

export interface ValidationResult {
  valid: boolean;
  error?: string;
}
