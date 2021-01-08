import './SignInPage.css'
import {Link} from 'react-router-dom'
import { Component } from 'react';

class SignInPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    }
  }
  updateInput = (e) => {
    let type = e.target.type
    let value = e.target.value
    this.setState({[type]: value})
  }

  submitForm = () => {
    console.log('Submitted!')
  }

  render() {
    return (
      <div className="SignInPage">
      <h1> Welcome Back! Sign In Below: </h1>
        <form>
          <label>
            email
            <input type='email' onChange={this.updateInput}/>
          </label>
          <label>
            password
            <input type='password' onChange={this.updateInput}/>
          </label>
          <button type='submit' onClick={this.submitForm}> Submit </button>
        </form>
        <footer className="SignInPage-footer">
          <Link to='/'><button> Take Me Back </button></Link>
        </footer>
      </div>
    );
  }
}

export default SignInPage;
