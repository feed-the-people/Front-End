import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CallToAction from './CallToAction.js'
import { MemoryRouter } from 'react-router-dom';

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

  const componentTitle = screen.getByTestId('componentTitle')
  const prompt = screen.getByTestId('prompt')

  expect(componentTitle).toBeInTheDocument();
  expect(prompt).toBeInTheDocument();
});
