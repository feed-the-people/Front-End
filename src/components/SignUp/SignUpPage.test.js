import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom'
import SignUpPage from './SignUpPage';

//Test that all components render
//Test that there is sad path handling
//Test that buttons fire functions

test('basic title', () => {
  render(
    <MemoryRouter>
      <SignUpPage />
    </MemoryRouter>
    );
  const title = screen.getByText("Welcome to Feed The People");
  expect(title).toBeInTheDocument();
});
