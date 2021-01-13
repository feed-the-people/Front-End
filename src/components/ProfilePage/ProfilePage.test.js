import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router-dom';
import ProfilePage from './ProfilePage';

test('basic title', () => {
  render(
    <MemoryRouter>
      <ProfilePage />
    </MemoryRouter>
  )

  const profilePage = screen.getByTestId('profilePage')
  
  expect(profilePage).toBeInTheDocument()
});
