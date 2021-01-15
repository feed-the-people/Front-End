import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import RecipeCard from './RecipeCard';
import { MemoryRouter } from 'react-router-dom';

test('Ensure RecipeCard renders properly', () => {
  // render(
  //   <MemoryRouter>
  //     <RecipeCard />
  //   </MemoryRouter>);
  // const recipeName = screen.getByTestId("recipeTitle");
  // const rating = screen.getByTestId("recipeRating");
  // const image = screen.getByTestId("image");
  // const nonProfit = screen.getByTestId("NPO");
  // const recipeStory = screen.getByTestId("recipeStory");
  //
  // expect(recipeName).toBeInTheDocument();
  // expect(rating).toBeInTheDocument();
  // expect(image).toBeInTheDocument();
  // expect(nonProfit).toBeInTheDocument();
  // expect(recipeStory).toBeInTheDocument();
});
