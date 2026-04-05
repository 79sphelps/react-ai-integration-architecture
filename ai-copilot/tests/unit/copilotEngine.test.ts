import { runCopilot } from '../../src/ai/copilotEngine'

test('runs tool for summarize', async () => {
  const res = await runCopilot({
    query: 'summarize',
    selectedText: 'Hello world content',
  })

  expect(res.answer).toContain('Summary')
})