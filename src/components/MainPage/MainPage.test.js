import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router-dom'
import MainPage from './MainPage.js';
import { allRecipes } from '../../mockData.js'

<<<<<<< HEAD
//UNIT TESTS
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

//INTEGRATION TESTS
=======
>>>>>>> main
test('recipe card renders', () => {
  render(
    <MemoryRouter>
      <MainPage allRecipes={allRecipes} loading={false}/>
    </MemoryRouter>
  );
  const recipeName = screen.getByText('Egg Stuff')
  expect(recipeName).toBeInTheDocument();
});
