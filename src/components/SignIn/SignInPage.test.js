import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SignInPage from './SignInPage';
import { MemoryRouter } from 'react-router-dom'

test('basic title', () => {
  render(<MemoryRouter><SignInPage /></MemoryRouter>);
  const title = screen.getByText("Welcome Back! Sign In Below:");
  expect(title).toBeInTheDocument();
});
