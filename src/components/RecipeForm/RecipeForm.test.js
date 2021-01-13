import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import RecipeForm from './RecipeForm';
import { submitForm } from './RecipeForm.js';

//UNIT TESTS
test('form renders', () => {

  render(
    <MemoryRouter>
      <RecipeForm />
    </MemoryRouter>);

  const form = screen.getByTestId("form");
  const formSubmit = screen.getByTestId("formSubmit")

  expect(form).toBeInTheDocument();
  expect(formSubmit).toBeInTheDocument();
});

test('prompt and instructions render', () => {

  render(
    <MemoryRouter>
      <RecipeForm />
    </MemoryRouter>);

  const formPrompt = screen.getByTestId("formPrompt");
  const formInstructions = screen.getByTestId("formInstructions")

  expect(formPrompt).toBeInTheDocument();
  expect(formInstructions).toBeInTheDocument();
});

test('function fires on submit button click', () => {

  render(
    <MemoryRouter>
      <RecipeForm />
    </MemoryRouter>);

    const formSubmit = screen.getByText("Submit My Recipe")
    expect(formSubmit).toBeInTheDocument();
})
