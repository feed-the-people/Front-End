import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router-dom';

import App from './App';

test('basic title', () => {
  render(<App />);
});

test('MainPage renders' , () => {
  render(<App />);

  const profileIcon = screen.getByTestId('profileicon')

  expect(profileIcon).toBeInTheDocument()
});
