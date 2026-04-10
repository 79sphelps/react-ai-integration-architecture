import { generateWithProvider } from '../provider/providerRouter'
import { render } from '@testing-library/react'
import App from '../src/app/App'

test('full pipeline works', async () => {
  const result = await generateWithProvider('mock', 'hello')
  expect(result.output).toContain('Mock')
})



test('renders dashboard', () => {
  const { getByText } = render(<App />)
  expect(getByText(/Observability Dashboard/i)).toBeTruthy()
})