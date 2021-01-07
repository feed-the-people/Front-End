import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import RecipeCard from './RecipeCard';

test('basic title', () => {
  render(<RecipeCard />);
  const donate = screen.getByTestId("Give N' Get Recipe!");
  expect(donate).toBeInTheDocument();
});
