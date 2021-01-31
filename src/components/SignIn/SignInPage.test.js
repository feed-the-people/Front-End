import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SignInPage from './SignInPage';
import { MemoryRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'
import { userSignIn } from '../../APICalls.js'
jest.mock('../../APICalls.js')

describe('SignInPage', () => {
  it('should render basic form elements', () => {
    render(
      <MemoryRouter>
      <SignInPage />
      </MemoryRouter>
    );
    const title = screen.getByTestId("sign-in-title");
    const username = screen.getByLabelText("Username");
    const password = screen.getByLabelText("Password");
    const submit = screen.getByTestId("submit-button");
    expect(title).toBeInTheDocument();
    expect(username).toBeInTheDocument();
    expect(password).toBeInTheDocument();
    expect(submit).toBeInTheDocument();
  });
  it('should render basic form elements', () => {
    render(
      <MemoryRouter>
      <SignInPage />
      </MemoryRouter>
    );
    const submit = screen.getByTestId("submit-button");
    expect(submit).toBeInTheDocument();
    expect(submit).toBeDisabled();
  });
  it('should render basic form elements', () => {
    render(
      <MemoryRouter>
      <SignInPage />
      </MemoryRouter>
    );
    const title = screen.getByTestId("sign-in-title");
    const username = screen.getByLabelText("Username");
    const password = screen.getByLabelText("Password");
    const submit = screen.getByTestId("submit-button");
    userEvent.type(username, '12345')
    userEvent.type(password, '12345')
    expect(submit).toBeEnabled();
  });
  it('should render basic form elements', () => {
    render(
      <MemoryRouter>
      <SignInPage />
      </MemoryRouter>
    );
    const title = screen.getByTestId("sign-in-title");
    const username = screen.getByLabelText("Username");
    const password = screen.getByLabelText("Password");
    const submit = screen.getByTestId("submit-button");
    userEvent.type(username, 'nathanielmillard')
    userEvent.type(password, '12345')
    expect(submit).toBeEnabled();
    userEvent.click(submit)
    expect(userSignIn).toHaveBeenCalledTimes(1)
    expect(userSignIn).toHaveBeenCalledWith('nathanielmillard', '12345')
  });
})

//Stretch Testing:
//Write and Test that there is sad path handling for:
  //username to not have spaces
  //password
  //rejections to sign in
