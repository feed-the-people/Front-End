import './SignInPage.css'
import {Link, Redirect} from 'react-router-dom'
import { Component } from 'react';

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
      <h1> Welcome Back! Sign In Below: </h1>
        <form>
          <label>
            username
            <input type='text' onChange={this.updateInput} className='username'/>
          </label>
          <label>
            password
            <input type='password' onChange={this.updateInput} className='password'/>
          </label>
          <button type='submit' disabled={this.disableForm()} onClick={this.submitForm}> Submit </button>
        </form>
        {this.state.redirect && <Redirect to="/profilepage"/>}
        <footer className="SignInPage-footer">
          <Link to='/'><button> Take Me Back </button></Link>
        </footer>
      </div>
    );
  }
}

export default SignInPage;
