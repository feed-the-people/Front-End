import './SignUpPage.css'
import {Link, Redirect} from 'react-router-dom'
import { Component } from 'react';
import { registerUser } from '../../APICalls.js'
import ImageUploader from 'react-images-upload'

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
    this.onDrop = this.onDrop.bind(this);
  }

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
    let response = registerUser(
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
    if(!response.ok) {
      alert('Something went wrong')
    } else {
      alert('Success! Log in to your new account!')
      this.setState({redirect: true})
    }
  }

  onDrop(imageFiles, pictureDataURLs) {
    this.setState({
      image: this.state.image.concat(imageFiles)
    });
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
            <input className='username'type='text' onChange={this.updateInput}/>
          </label>
          <label>
            Image
            <input id="file" type='file'
              name="picture"
              accept="image/*"
              multiple="false"
              onChange={this.changeHandler}/>
              <br/>
              {this.state.selectedFile ?
              <><img id="photo-preview" src={this.filePreview()}></img><br/>
              <input type="submit" value="Upload"></input></>
              
            : null}
            {/* <ImageUploader
              withIcon={true}
              buttonText='Choose images'
              onChange={[this.onDrop, this.updateInput]}
              imgExtension={['.jpg', '.gif', '.png', '.gif']}
              maxFileSize={5242880}
            /> */}
          </label>
          <label>
            First Name
            <input className='firstName'type='text' onChange={this.updateInput}/>
          </label>
          <label>
            Last Name
            <input className='lastName'type='text' onChange={this.updateInput}/>
          </label>
          <label>
            Email
            <input className='email'type='email' onChange={this.updateInput}/>
          </label>
          <label>
            Password
            <input className='password'type='text' onChange={this.updateInput}/>
          </label>
          Address Section
            <div className='addressSection'>
              <label>
                Street
                <input className='street'type='text' onChange={this.updateInput}/>
              </label>
              <label>
                City
                <input className='city'type='text' onChange={this.updateInput}/>
              </label>
              <label>
                State
                <input className='state'type='text' onChange={this.updateInput}/>
              </label>
              <label>
                Zip Code
                <input className='zip'type='text' onChange={this.updateInput}/>
              </label>
            </div>
          <button type='submit' disabled={this.disableForm()} onClick={this.submitForm}> Sign Me Up! </button>
        </form>
        <footer className="SignUpPage-footer">
          <Link to='/'><button> Take Me Back </button></Link>
        </footer>
        {this.state.redirect && <Redirect to="/signin"/>}
      </div>
    );
  }
}

export default SignUpPage;
