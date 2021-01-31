import './SignUpPage.scss'
import {Link, Redirect} from 'react-router-dom'
import { Component } from 'react';
import { registerUser } from '../../APICalls.js'
import Footer from '../Footer/Footer'
// import PhotoUploader from '../PhotoUploader/PhotoUploader'
import axios from 'axios'
import { Image, CloudinaryContext } from 'cloudinary-react'


class SignUpPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username:'',
      image: null,
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

  changeHandler = event => {
    this.setState({
      uploadedFile: event.target.files[0]
    })
  }

  filePreview=()=>{
    let url= URL.createObjectURL(this.state.uploadedFile)
    return url
  }

  disableForm() {
    if (this.state.username &&
        this.state.uploadedFile &&
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
    e.preventDefault();
    const {uploadedFile} = this.state;
    const formData = new FormData();
    formData.append('file', uploadedFile);
    formData.append('upload_preset', 'hrqc7brr');
    console.log(formData)
    const imageCall = await axios.post(
      "https://api.cloudinary.com/v1_1/dygnrpjv8/upload",
      formData
      );
      console.log("It did the thing")
    this.setState({ image: imageCall.data.public_id});
    
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

    if(!response || response.error) {
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
            <label>
              Username
              <input className='username'type='text' onChange={this.updateInput}/>
            </label>
            <label>
              Password
              <input className='password' type='text' onChange={this.updateInput}/>
            </label>
            <label>
                Image
              <input id="image" 
                type='file'
                name="image"
                accept="image/*"
                multiple={false}
                onChange={this.changeHandler}/>
                {this.state.uploadedFile && <img id="photo-preview" src={this.filePreview()}/>}
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
            <button data-testid='submit-button' className='SignUp-submit' type='submit' disabled={this.disableForm()} onClick={this.submitForm}> Sign Me Up! </button>
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
