import { render, screen } from '@testing-library/react';
import App from './App';

test('should have instructions on screen', () => {
  render(<App />);
  const linkElement = screen.getByText(/Click Me/i);
  expect(linkElement).toBeInTheDocument();
});
