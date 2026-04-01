import { render, screen, fireEvent } from '@testing-library/react'
import PromptPlayground from '../../src/PromptPlayground'

test('runs prompt and shows output', async () => {
  render(<PromptPlayground />)

  fireEvent.click(screen.getByText('Run Prompt'))

  expect(await screen.findByText(/Generating/)).toBeInTheDocument()
})