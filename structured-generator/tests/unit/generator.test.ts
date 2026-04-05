import { generateProject } from '../../src/ai/generator'

jest.mock('../ai/llm/llmClient', () => ({
  callLLM: async () =>
    JSON.stringify({
      projectType: 'dashboard',
      features: ['auth'],
      tech: ['React'],
    }),
}))

test('generates valid structured output', async () => {
  const res = await generateProject('dashboard with auth')

  expect(res.projectType).toBe('dashboard')
  expect(Array.isArray(res.features)).toBe(true)
})