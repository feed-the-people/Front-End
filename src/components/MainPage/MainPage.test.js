import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router-dom'
import MainPage from './MainPage.js';

test('basic title', () => {
  render(
    <MemoryRouter>
      <MainPage />
    </MemoryRouter>
  );
  const title = screen.getByText("Main Page");
  expect(title).toBeInTheDocument();
});
