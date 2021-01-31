import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CallToAction from './CallToAction.js'
import { MemoryRouter } from 'react-router-dom';
jest.mock('../../APICalls.js')

//UNIT TESTS
// test that prompt renders
// check that both buttons fire when clicked
// check that form has error handling
// check that the props title will render
// check that the default title will render
test('prompt renders', () => {
  render(
    <MemoryRouter>
      <CallToAction />
    </MemoryRouter>);

  const componentTitle = screen.getByTestId('cta-title')
  const componentPrompt = screen.getByTestId('cta-prompt')
  const componentSignIn = screen.getByTestId('sign-in-link')
  const componentSignUp = screen.getByTestId('sign-up-link')

  expect(componentTitle).toBeInTheDocument();
  expect(componentPrompt).toBeInTheDocument();
  expect(componentSignIn).toBeInTheDocument();
  expect(componentSignUp).toBeInTheDocument();
});
