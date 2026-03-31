import { render, screen } from '@testing-library/react';
import App from '../src/app/App';

test('renders chat input', () => {
  render(<App />);
  expect(screen.getByLabelText(/chat input/i)).toBeInTheDocument();
});