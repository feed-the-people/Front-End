import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import RecipeCard from './RecipeCard';
import { MemoryRouter } from 'react-router-dom';
jest.mock('../../APICalls.js')
//test that recipe card renders data
//test that buttons fire
//test that button dynamically renders option
describe('RecipeCard', () => {
  it('should render all elements of the recipe card', () => {
    render(
        <MemoryRouter>
          <RecipeCard
          title='Meat Balls'
          image='www.image.com'
          rating='3'
          description='Balls of meat'
          charityName='NYLC' />
        </MemoryRouter>);
      const recipeName = screen.getByTestId("recipe-title");
      const image = screen.getByTestId("recipe-image");
      const nonProfit = screen.getByTestId("NPO");
      const recipeStory = screen.getByTestId("recipe-story");
      const recipeButton = screen.getByTestId("recipe-button");
      expect(recipeName).toBeInTheDocument();
      expect(image).toBeInTheDocument();
      expect(nonProfit).toBeInTheDocument();
      expect(recipeStory).toBeInTheDocument();
      expect(recipeButton).toBeInTheDocument();
    });
    it('should dynamically render all elements of the recipe card', () => {
      render(
          <MemoryRouter>
            <RecipeCard
              title='Meat Balls'
              image='www.image.com'
              rating='3'
              description='Balls of meat'
              charityName='NYLC'
            />
          </MemoryRouter>);
        const recipeName = screen.getByTestId("recipe-title");
        const image = screen.getByTestId("recipe-image");
        const nonProfit = screen.getByTestId("NPO");
        const recipeStory = screen.getByTestId("recipe-story");
        const recipeButton = screen.getByTestId("recipe-button");
        expect(recipeName).toBeInTheDocument();
        expect(image).toBeInTheDocument();
        expect(nonProfit).toBeInTheDocument();
        expect(recipeStory).toBeInTheDocument();
        expect(recipeButton).toBeInTheDocument();
      });

})

//CASE SENSITIVE NAMES ON ORGS
