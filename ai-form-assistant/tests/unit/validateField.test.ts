import { validateField } from '../../src/utils/validateField'

test('invalid email fails', () => {
  const result = validateField('email', 'bad-email')
  expect(result.valid).toBe(false)
})

test('valid email passes', () => {
  const result = validateField('email', 'test@test.com')
  expect(result.valid).toBe(true)
})