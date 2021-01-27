import './SignInPage.css'
import {Link, Redirect} from 'react-router-dom'
import { Component } from 'react';
import Footer from '../Footer/Footer'

import { userSignIn } from '../../APICalls.js'

class SignInPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      redirect: false
    }
  }
  //refactor to include hooks
  //Look at how best to handle this redirect

  disableForm() {
    if (this.state.username &&
        this.state.password) {
      return false
    } else {
      return true
    }
  }

  updateInput = (e) => {
    let type = e.target.className
    let value = e.target.value
    this.setState({[type]: value})
  }

  submitForm = async (e) => {
    e.preventDefault()
    if (this.state.username.length && this.state.password.length) {
      let response = await userSignIn(this.state.username, this.state.password)
      if (response.errors) {
        alert('Something went wrong... try again?')
      } else {
        let userInfo = JSON.stringify(response.data.userSignIn.user)
        localStorage.setItem('userToken', response.data.userSignIn.token)
        localStorage.setItem('user', userInfo)
        this.setState({redirect: true})
      }
    }
  }

  render() {
    return (
      <div className="SignInPage">
      <div className='action-area'>
        <h1 data-testid='sign-in-title'> Welcome Back! Sign In Below: </h1>
        <form>
          <center>
            <table id="simple-board">
              <tr id="row0">
                <td id="cell0-0">
                  <label>
                    Username
                    <input type='text' onChange={this.updateInput} className='username'/>
                  </label>
                </td>
              </tr>
              <tr id="row1">
                <td id="cell1-0">
                  <label>
                    Password
                    <input type='password' onChange={this.updateInput} className='password'/>
                  </label>
                </td>
              </tr>
            </table>
            <br/><button data-testid='submit-button' type='submit' disabled={this.disableForm()} onClick={this.submitForm}> Submit </button>
          </center>
        </form>
      </div>
      {this.state.redirect && <Redirect to="/profilepage"/>}
      <Footer
      path1='/signup'
      path2='/'
      label1='Sign Up'
      label2="Take Me Back"
      />
      </div>
    );
  }
}

export default SignInPage;
