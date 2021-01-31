import './SignUpPage.scss'
import {Link, Redirect} from 'react-router-dom'
import { Component } from 'react';
import { registerUser } from '../../APICalls.js'
import Footer from '../Footer/Footer'

class SignUpPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username:'',
      image:'',
      firstName:'',
      lastName:'',
      email: '',
      password: '',
      street: '',
      city: '',
      state: '',
      zip: '',
      redirect: false,
    }
  }
  //Look at refactoring to hooks and adjust all the form inputs to not be state
  //Look at implimenting images
  //Have sad path handling to show the loading
  disableForm() {
    if (this.state.username &&
        this.state.image &&
        this.state.firstName &&
        this.state.lastName &&
        this.state.email &&
        this.state.password &&
        this.state.street &&
        this.state.city &&
        this.state.state &&
        this.state.zip) {
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
    let response = await registerUser(
      this.state.firstName,
      this.state.lastName,
      this.state.email,
      this.state.street,
      this.state.city,
      this.state.state,
      this.state.zip,
      this.state.image,
      this.state.username,
      this.state.password,
    );
    if(response && response.error) {
      alert('Something went wrong, please try again')
    } else {
      alert('Success! Log in to your new account!')
      this.setState({redirect: true})
    }
  }

  render() {
    return (
      <div className="SignUpPage">
        <div className='SignUp-action-area'>
          <h1 data-testid='title'>Welcome to Feed The People</h1>
          <p data-testid='tag-line'>We need a little information from you below to make an account of
          your own and join our community!</p><br/>
          <form className='SignUp-form'>
            <table id="simple-board">
              <tbody>
                <tr id="row0">
                  <td id="cell0-0">
                    <label>
                      Username
                      <input className='username'type='text' onChange={this.updateInput}/>
                    </label>
                  </td>
                </tr>
                <tr id="row1">
                  <td id="cell1-0">
                  <label>
                    Password
                    <input className='password' type='text' onChange={this.updateInput}/>
                  </label>
                  </td>
                </tr>
                <tr id="row2">
                  <td id="cell2-0">
                    <label>
                      Image URL
                      <input className='image' type='text' onChange={this.updateInput}/>
                    </label>
                  </td>
                </tr>
                <tr id="row3">
                  <td id="cell3-0">
                    <label>
                      First Name
                      <input className='firstName'type='text' onChange={this.updateInput}/>
                    </label>
                  </td>
                </tr>
                <tr id="row4">
                  <td id="cell4-0">
                    <label>
                      Last Name
                      <input className='lastName'type='text' onChange={this.updateInput}/>
                    </label>
                  </td>
                </tr>
                <tr id="row5">
                  <td id="cell5-0">
                    <label>
                      Email
                      <input className='email'type='email' onChange={this.updateInput}/>
                    </label>
                  </td>
                </tr>
                <tr id="row6">
                  <td id="cell6-0">
                    <label>
                      Street
                      <input className='street'type='text' onChange={this.updateInput}/>
                    </label>
                  </td>
                </tr>
                <tr id="row7">
                  <td id="cell7-0">
                    <label>
                      City
                      <input className='city'type='text' onChange={this.updateInput}/>
                    </label>
                  </td>
                </tr>
                <tr id="row8">
                  <td id="cell8-0">
                    <label>
                      State
                      <input className='state'type='text' onChange={this.updateInput}/>
                    </label>
                  </td>
                </tr>
                <tr id="row9">
                  <td id="cell9-0">
                    <label>
                      Zip Code
                      <input className='zip'type='text' onChange={this.updateInput}/>
                    </label>
                  </td>
                </tr>
              </tbody>
            </table>
            <br/><button data-testid='submit-button' className='SignUp-submit' type='submit' disabled={this.disableForm()} onClick={this.submitForm}> Sign Me Up! </button>
          </form>
        </div>
        <Footer
          path1='/signin'
          path2='/'
          label1='Sign In'
          label2="Take Me Back"
          className='Profile-Footer'
        />
        {this.state.redirect && <Redirect to="/signin"/>}
      </div>
    );
  }
}

export default SignUpPage;
