import { generateWithProvider } from '../../src/ai/core/providerRouter'
import { registerProvider } from '../../src/ai/core/providerRegistry'

test('fallback works', async () => {
  registerProvider({
    name: 'fail',
    generate: async () => {
      throw new Error('fail')
    },
  })

  registerProvider({
    name: 'mock',
    generate: async () => 'ok',
  })

  const res = await generateWithProvider('fail', 'hi')

  expect(res).toBe('ok')
})