import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'

import App from './App';

test('basic title', () => {
  render(<App />);
  const title = screen.getByText("Feed The People");
  expect(title).toBeInTheDocument();
});
