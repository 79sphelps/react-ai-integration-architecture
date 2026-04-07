export interface AIProvider {
  name: string
  generate(prompt: string, signal?: AbortSignal): Promise<string>
}