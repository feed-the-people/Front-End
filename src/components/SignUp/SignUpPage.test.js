import SignUpPage from './SignUpPage';
import { MemoryRouter } from 'react-router-dom'
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/react';
import { registerUser } from '../../APICalls.js';
jest.mock('../../APICalls.js');

describe('SignUpPage', ()=>{
  it('should render all basic form elements', () => {
    render(
      <MemoryRouter>
        <SignUpPage />
      </MemoryRouter>
    );
    const title = screen.getByTestId("title");
    const tagLine = screen.getByTestId("tag-line");
    const username = screen.getByLabelText("Username");
    const password = screen.getByLabelText("Password");
    const imgURL = screen.getByLabelText("Image URL");
    const firstName = screen.getByLabelText("First Name");
    const lastName = screen.getByLabelText("Last Name");
    const email = screen.getByLabelText("Email");
    const street = screen.getByLabelText("Street");
    const city = screen.getByLabelText("City");
    const state = screen.getByLabelText("State");
    const zip = screen.getByLabelText("Zip Code");
    const submit = screen.getByTestId("submit-button");
    expect(title).toBeInTheDocument();
    expect(tagLine).toBeInTheDocument();
    expect(username).toBeInTheDocument();
    expect(password).toBeInTheDocument();
    expect(imgURL).toBeInTheDocument();
    expect(firstName).toBeInTheDocument();
    expect(lastName).toBeInTheDocument();
    expect(email).toBeInTheDocument();
    expect(street).toBeInTheDocument();
    expect(city).toBeInTheDocument();
    expect(state).toBeInTheDocument();
    expect(zip).toBeInTheDocument();
    expect(submit).toBeInTheDocument();
  });
  it('should have the submit disabled by default', () => {
    render(
      <MemoryRouter>
        <SignUpPage />
      </MemoryRouter>
    );
    const submit = screen.getByTestId("submit-button");
    expect(submit).toBeInTheDocument();
    expect(submit).toBeDisabled();
  });
  it('should enable submit after use inputs', () => {
    render(
      <MemoryRouter>
        <SignUpPage />
      </MemoryRouter>
    );
    const title = screen.getByTestId("title");
    const tagLine = screen.getByTestId("tag-line");
    const username = screen.getByLabelText("Username");
    const password = screen.getByLabelText("Password");
    const imgURL = screen.getByLabelText("Image URL");
    const firstName = screen.getByLabelText("First Name");
    const lastName = screen.getByLabelText("Last Name");
    const email = screen.getByLabelText("Email");
    const street = screen.getByLabelText("Street");
    const city = screen.getByLabelText("City");
    const state = screen.getByLabelText("State");
    const zip = screen.getByLabelText("Zip Code");
    const submit = screen.getByTestId("submit-button");
    userEvent.type(username, '12345')
    userEvent.type(password, '12345')
    userEvent.type(imgURL, '12345')
    userEvent.type(firstName, '12345')
    userEvent.type(lastName, '12345')
    userEvent.type(email, '12345')
    userEvent.type(street, '12345')
    userEvent.type(city, '12345')
    userEvent.type(state, '12345')
    userEvent.type(zip, '12345')
    expect(submit).toBeEnabled();
  });
  it('should enable submit after use inputs', () => {
    render(
      <MemoryRouter>
        <SignUpPage />
      </MemoryRouter>
    );
    const title = screen.getByTestId("title");
    const tagLine = screen.getByTestId("tag-line");
    const username = screen.getByLabelText("Username");
    const password = screen.getByLabelText("Password");
    const imgURL = screen.getByLabelText("Image URL");
    const firstName = screen.getByLabelText("First Name");
    const lastName = screen.getByLabelText("Last Name");
    const email = screen.getByLabelText("Email");
    const street = screen.getByLabelText("Street");
    const city = screen.getByLabelText("City");
    const state = screen.getByLabelText("State");
    const zip = screen.getByLabelText("Zip Code");
    const submit = screen.getByTestId("submit-button");
    userEvent.type(username, 'NathanielMillard')
    userEvent.type(password, '123')
    userEvent.type(imgURL, 'www.image.com')
    userEvent.type(firstName, 'Nathaniel')
    userEvent.type(lastName, 'Millard')
    userEvent.type(email, 'nathanielmillard@gmail.com')
    userEvent.type(street, '123 Street St. Apt. 123')
    userEvent.type(city, 'Denver')
    userEvent.type(state, 'Colorado')
    userEvent.type(zip, '12345')
    expect(submit).toBeEnabled()
    userEvent.click(submit)
    expect(registerUser).toHaveBeenCalledTimes(1)
    expect(registerUser).toHaveBeenCalledWith(
      'Nathaniel',
      'Millard',
      'nathanielmillard@gmail.com',
      '123 Street St. Apt. 123',
      'Denver',
      'Colorado',
      '12345',
      'www.image.com',
      'NathanielMillard',
      '123',
    )
  });
})

//Stretch Testing:
//Write and Test that there is sad path handling for:
  //five digit zip code
  //email formatting
  //case sensitivity on name?
  //username to not have spaces
  //password suggestions?
