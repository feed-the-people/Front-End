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
