import './SignUpPage.css'
import {Link} from 'react-router-dom'
import { Component } from 'react';

class SignUpPage extends Component {
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
      <div className="SignUpPage">
        <h1>Welcome to Feed The People</h1>
        <p>We need a little information from you below to make an account of
        your own and join our community!</p>
        <form>
          <label>
            Username
            <input type='text' onChange={this.updateInput}/>
          </label>
          <label>
            First Name
            <input type='text' onChange={this.updateInput}/>
          </label>
          <label>
            Last Name
            <input type='text' onChange={this.updateInput}/>
          </label>
          <label>
            Email
            <input type='email' onChange={this.updateInput}/>
          </label>
          <label>
            Password
            <input type='text' onChange={this.updateInput}/>
          </label>
          <button type='submit' onClick={this.submitForm}> Sign Me Up! </button>
        </form>
        <footer className="SignUpPage-footer">
          <Link to='/'><button> Take Me Back </button></Link>
        </footer>
      </div>
    );
  }
}

export default SignUpPage;
