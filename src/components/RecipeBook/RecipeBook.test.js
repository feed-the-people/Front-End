import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import RecipeCard from '../RecipeCard/RecipeCard'
import CallToAction from '../CallToAction/CallToAction.js'
import { allRecipes } from '../../mockData.js'
import { MemoryRouter } from 'react-router-dom';


//INTEGRATION TESTS
test('uploaded recipes render', () => {


});

test('purchased recipes render', () => {


});

test('CallToAction renders if user is not logged in', () => {


});

//UNIT TESTS
test('RecipeBook renders', () => {


});

test('error message renders if no recipes have been uploaded', () => {


});

test('error message renders if no recipes have been purchased', () => {


});
