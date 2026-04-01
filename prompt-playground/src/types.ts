export type Variables = Record<string, string>

export type ValidationResult =
  | { valid: true; parsed: any }
  | { valid: false; error: string }

export interface PromptPlaygroundState {
  template: string
  variables: Variables
  temperature: number
  schema: string
  output: string
  loading: boolean
  validation: ValidationResult | null
}