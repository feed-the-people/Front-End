import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router-dom'
import MainPage from './MainPage.js';

test('main page renders', () => {
  render(
    <MemoryRouter>
      <MainPage />
    </MemoryRouter>
  );
  const profileNav = screen.getByTestId("profileicon");
  const recipeNav = screen.getByTestId("recipebookicon");
  expect(profileNav).toBeInTheDocument();
  expect(recipeNav).toBeInTheDocument();
});
