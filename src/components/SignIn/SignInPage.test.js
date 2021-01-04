import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SignInPage from './SignInPage';

test('basic title', () => {
  render(<SignInPage />);
  const title = screen.getByText("Sign In Page");
  expect(title).toBeInTheDocument();
});
