import { enhancePrompt } from '../../src/ai/promptEnhancer'

describe('prompt enhancer', () => {
  it('adds quality modifiers', () => {
    const res = enhancePrompt('cat')
    expect(res).toContain('high quality')
  })
})