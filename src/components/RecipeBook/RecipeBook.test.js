import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import RecipeCard from '../RecipeCard/RecipeCard'
import CallToAction from '../CallToAction/CallToAction.js'
import { allRecipes } from '../../mockData.js'
import { MemoryRouter } from 'react-router-dom';
