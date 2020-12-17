import { render, screen } from '@testing-library/react';
import SignUpPage from './SignUpPage';

test('basic title', () => {
  render(<SignUpPage />);
  const title = screen.getByText("Sign Up Page");
  expect(title).toBeInTheDocument();
});
