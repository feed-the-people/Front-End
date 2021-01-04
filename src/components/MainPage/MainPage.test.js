import { render, screen } from '@testing-library/react';
import MainPage from './MainPage.js';

test('basic title', () => {
  render(<MainPage />);
  const title = screen.getByText("Main Page");
  expect(title).toBeInTheDocument();
});
