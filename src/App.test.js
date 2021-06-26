import { render, screen } from '@testing-library/react';
import App from './App';

test('renders projedt name', () => {
  render(<App />);
  const linkElement = screen.getByText(/Tableau Myriad/i);
  expect(linkElement).toBeInTheDocument();
});
