import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import RecipeCard from '../RecipeCard/RecipeCard'
import CallToAction from '../CallToAction/CallToAction.js'
import RecipeBook from './RecipeBook';
import { allRecipes } from '../../mockData.js'
import { MemoryRouter } from 'react-router-dom';
jest.mock('../../APICalls.js')
//Tests
//Test that recipe books renders
//Test that there is sad path handling for loading
//Test that there is sad path handling for an empty list
//Test that button to upload recipe fires

//INTEGRATION TESTS
test('uploaded recipes render', () => {
});

test('purchased recipes render', () => {

});

test('CallToAction renders if user is not logged in', () => {

});

//UNIT TESTS
test('RecipeBook renders', () => {
  // render(
  //   <MemoryRouter>
  //     <RecipeBook />
  //   </MemoryRouter>);
  // const uploadButton = screen.getByTestId('uploadRecipeButton')
  // const myRecipes = screen.getByTestId('myRecipes')
  // const purchasedRecipes = screen.getByTestId('purchasedRecipes')
  //
  // expect(uploadButton).toBeInTheDocument();
  // expect(myRecipes).toBeInTheDocument();
  // expect(purchasedRecipes).toBeInTheDocument();
});

test('sidebar renders', () => {
  // render(
  //   <MemoryRouter>
  //     <RecipeBook />
  //   </MemoryRouter>);
  // const profileIcon = screen.getByTestId('profileLinkIcon')
  // const homeIcon = screen.getByTestId('homeLinkIcon')
  //
  // expect(profileIcon).toBeInTheDocument();
  // expect(homeIcon).toBeInTheDocument();
});

test('error message renders if no recipes have been uploaded', () => {

});

test('error message renders if no recipes have been purchased', () => {

});
