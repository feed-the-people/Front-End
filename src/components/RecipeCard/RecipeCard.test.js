import { render, screen } from '@testing-library/react';
import RecipeCard from './RecipeCard';

test('basic title', () => {
  render(<RecipeCard />);
  const title = screen.getByText("Recipe Card");
  expect(title).toBeInTheDocument();
});
