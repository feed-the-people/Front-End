import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router-dom'
import MainPage from './MainPage.js';

test('basic title', () => {
  render(
    <MemoryRouter>
      <MainPage />
    </MemoryRouter>
  );
  const profileNav = screen.getByAltText("navigate to user profile page");
  const recipeNav = screen.getByAltText("navigate to user recipe book");
  expect(profileNav).toBeInTheDocument();
  expect(recipeNav).toBeInTheDocument();
});
