import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import RecipeCard from './RecipeCard';
import { MemoryRouter } from 'react-router-dom';

test('basic title', () => {
  render(
    <MemoryRouter>
      <RecipeCard />
    </MemoryRouter>);
  const donate = screen.getByTestId("recipeTitle");
  expect(donate).toBeInTheDocument();
});
