import SignUpPage from './SignUpPage';
import { MemoryRouter } from 'react-router-dom'
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/react';
import { registerUser } from '../../APICalls.js';
jest.mock('../../APICalls.js');
global.URL.createObjectURL = jest.fn();

describe('SignUpPage', ()=>{
  it('should render all basic form elements', () => {
    render(
      <MemoryRouter>
        <SignUpPage />
      </MemoryRouter>
    );
    const file = new File(['hello'], 'hello.png', { type: 'image/png' })
    const title = screen.getByTestId("title");
    const tagLine = screen.getByTestId("tag-line");
    const username = screen.getByLabelText("Username");
    const password = screen.getByLabelText("Password");
    const imageUpload = screen.getByLabelText("Image");
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
    expect(imageUpload).toBeInTheDocument();
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
    const file = new File(['hello'], 'hello.png', { type: 'image/png' })
    const title = screen.getByTestId("title");
    const tagLine = screen.getByTestId("tag-line");
    const username = screen.getByLabelText("Username");
    const password = screen.getByLabelText("Password");
    const imageUpload = screen.getByTestId("image-upload");
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
    userEvent.upload(imageUpload, file)
    userEvent.type(firstName, '12345')
    userEvent.type(lastName, '12345')
    userEvent.type(email, '12345@mail.com')
    userEvent.type(street, '12345')
    userEvent.type(city, '12345')
    userEvent.type(state, '12345')
    userEvent.type(zip, '12345')
    expect(submit).toBeEnabled();
  });
})

//Stretch Testing:
//Write and Test that there is sad path handling for:
  //five digit zip code
  //email formatting
  //case sensitivity on name?
  //username to not have spaces
  //password suggestions?
