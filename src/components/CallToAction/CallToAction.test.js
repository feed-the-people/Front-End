import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CallToAction from './CallToAction.js'
import { MemoryRouter } from 'react-router-dom';

//UNIT TESTS
test('prompt renders', () => {
  render(
    <MemoryRouter>
      <CallToAction />
    </MemoryRouter>);

  const componentTitle = screen.getByTestId('componentTitle')
  const prompt = screen.getByTestId('prompt')

  expect(componentTitle).toBeInTheDocument();
  expect(prompt).toBeInTheDocument();
});

test('nav renders', () => {
  render(
    <MemoryRouter>
      <CallToAction />
    </MemoryRouter>);

  const signinButton = screen.getByTestId('signinButton')
  const signupButton = screen.getByTestId('signupButton')
  const homeButton = screen.getByTestId('homeButton')

  expect(signinButton).toBeInTheDocument();
  expect(signupButton).toBeInTheDocument();
  expect(homeButton).toBeInTheDocument();
});
