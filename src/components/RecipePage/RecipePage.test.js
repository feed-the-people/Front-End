import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import RecipePage from './RecipePage';
import { MemoryRouter } from 'react-router-dom';

test('basic title', () => {
  render(<MemoryRouter><RecipePage /></MemoryRouter>);
});
