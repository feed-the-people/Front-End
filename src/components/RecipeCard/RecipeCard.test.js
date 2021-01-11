import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import RecipeCard from './RecipeCard';
import { MemoryRouter } from 'react-router-dom';

test('Left half of RecipeCard renders properly', () => {
  render(
    <MemoryRouter>
      <RecipeCard />
    </MemoryRouter>);
  const recipeName = screen.getByTestId("recipeTitle");
  const rating = screen.getByTestId("recipeRating");
  const image = screen.getByTestId("image");
  const nonProfit = screen.getByTestId("NPO");

  expect(recipeName).toBeInTheDocument();
  expect(rating).toBeInTheDocument();
  expect(image).toBeInTheDocument();
  expect(nonProfit).toBeInTheDocument();
});
