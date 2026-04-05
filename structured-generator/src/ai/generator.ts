import { ProjectSchema } from '../schema/projectSchema'
import { buildPrompt } from './promptBuilder'
import { callLLM } from './llm/llmClient'
import { safeJsonParse } from '../utils/safeJsonParse'
import { retry } from '../utils/retry'
import { sanitizeLLMOutput } from '../utils/sanitizeLLMOutput'
import { dedupeRequest } from '../utils/requestCache'
import { logEvent } from '../utils/logger'

export async function generateProject(input: string) {
  return dedupeRequest(input, async () => {
    logEvent('generator:start', { input })

    const prompt = buildPrompt(input)
    const raw = await retry(() => callLLM(prompt))

    const clean = sanitizeLLMOutput(raw)
    const parsed = safeJsonParse(clean)

    if (!parsed) {
      logEvent('generator:error', raw)
      throw new Error('Invalid JSON from LLM')
    }

    const validated = ProjectSchema.parse(parsed)

    logEvent('generator:success', validated)

    return validated
  })
}