import { summarize } from '../../src/api/mockSummarizer'

test('returns bullet summary', async () => {
  const result = await summarize('Sentence one. Sentence two.', {
    length: 100,
    mode: 'bullets',
    tone: 'formal',
  })

  expect(result).toContain('bullets')
})