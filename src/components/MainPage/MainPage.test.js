import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router-dom'
import MainPage from './MainPage.js';
import { allRecipes } from '../../mockData.js'
jest.mock('../../APICalls.js')
//UNIT TESTS
//Test that a loading message renders
//Test and Mock the global recipes displayed
//Test and Mock error handling

test('MainPage renders', () => {
//   render(
//     <MemoryRouter>
//       <MainPage allRecipes={allRecipes} loading={false}/>
//     </MemoryRouter>
//   );
//   const mainPage = screen.getByTestId('mainPage')
//   expect(mainPage).toBeInTheDocument();
// })

//INTEGRATION TESTS
// test('RecipeCard renders', () => {
//   render(
//     <MemoryRouter>
//       <MainPage allRecipes={allRecipes} loading={false}/>
//     </MemoryRouter>
//   );
//   const recipeName = screen.getByText('Egg Stuff')
//   expect(recipeName).toBeInTheDocument();
});
