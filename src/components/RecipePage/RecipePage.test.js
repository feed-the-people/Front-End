import { render, screen } from '@testing-library/react';
import RecipePage from './RecipePage';

test('basic title', () => {
  render(<RecipePage />);
  const title = screen.getByText("Recipe Page");
  expect(title).toBeInTheDocument();
});
