import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SignInPage from './SignInPage';
import { MemoryRouter } from 'react-router-dom'

//Test that sign in loads
//Test that sad path happens
//Test that mocked resonses will render different options
test('basic title', () => {
  render(
    <MemoryRouter>
      <SignInPage />
    </MemoryRouter>
  );
  const title = screen.getByText("Welcome Back! Sign In Below:");
  expect(title).toBeInTheDocument();
});
