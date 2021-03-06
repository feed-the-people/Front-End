import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router-dom';
import ProfilePage from './ProfilePage';
jest.mock('../../APICalls.js')
//UNIT TESTS
test('ProfilePage renders', () => {
  render(
    <MemoryRouter>
      <ProfilePage />
    </MemoryRouter>
  )
  const profilePage = screen.getByTestId('profilePage')
  expect(profilePage).toBeInTheDocument()
});

test('CallToAction renders', () => {
  render(
    <MemoryRouter>
      <ProfilePage />
    </MemoryRouter>
  )
  const componentTitle = screen.getByTestId('cta-title')
  expect(componentTitle).toBeInTheDocument()
});

//INTEGRATION TESTS
test('CallToAction buttons render' , () => {
  render(
    <MemoryRouter>
    <ProfilePage />
    </MemoryRouter>
  );
  const navButtons = screen.getByTestId('navButtons')
  expect(navButtons).toBeInTheDocument()
});

test('Footer renders' , () => {
  render(
    <MemoryRouter>
      <ProfilePage />
    </MemoryRouter>
  );
  const footer = screen.getByTestId('footer')
  expect(footer).toBeInTheDocument()
});
