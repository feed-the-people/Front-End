import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router-dom'
import MainPage from './MainPage.js';
import { allRecipes } from '../../mockData.js'

test('recipe card renders', () => {
  render(
    <MemoryRouter>
      <MainPage allRecipes={allRecipes} loading={false}/>
    </MemoryRouter>
  );
  const recipeName = screen.getByText('Egg Stuff')
  expect(recipeName).toBeInTheDocument();
});
