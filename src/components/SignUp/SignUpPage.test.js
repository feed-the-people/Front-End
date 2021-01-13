import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom'
import SignUpPage from './SignUpPage';

test('basic title', () => {
  render(
    <MemoryRouter>
      <SignUpPage />
    </MemoryRouter>
    );
  const title = screen.getByText("Welcome to Feed The People");
  expect(title).toBeInTheDocument();
});
