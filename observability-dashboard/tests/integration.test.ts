import { generateWithProvider } from '../provider/providerRouter'

test('full pipeline works', async () => {
  const result = await generateWithProvider('mock', 'hello')
  expect(result.output).toContain('Mock')
})