import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router-dom';
import App from './App';
jest.mock('../../APICalls.js')

//INTEGRATION TESTS
//What do we need to test here?
//Route acceptance tests
// '/'
//When a user navigates to the main page they should
// '/signin'
// '/signup'
// '/profilepage'
// '/recipebook'
// '/recipeform'
// '/recipepage/:recipeId'

test('MainPage renders' , () => {
  render
    (<MemoryRouter>
      <App />
    </MemoryRouter>
    );
  const mainPage = screen.getByTestId('mainPage')
  expect(mainPage).toBeInTheDocument()
});

test('Footer renders' , () => {
  render
    (<MemoryRouter>
      <App />
    </MemoryRouter>
    );
  const footer = screen.getByTestId('footer')
  expect(footer).toBeInTheDocument()
});
