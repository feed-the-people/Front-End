import './SignUpPage.css'
import {Link, Redirect} from 'react-router-dom'
import { Component } from 'react';
import { registerUser } from '../../APICalls.js'
// import ImageUploader from 'react-images-upload'
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
    this.onDrop = this.onDrop.bind(this);
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
      return true
    } else {
      return false
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
    if(response.error) {
      alert('Something went wrong, please try again')
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
        <div className='action-area'>
          <h1>Welcome to Feed The People</h1>
          <p>We need a little information from you below to make an account of
          your own and join our community!</p><br/>
          <form className='SignUp-form'>
            <table id="simple-board">
              <tr id="row0">
                <td id="cell0-0"><label>Username</label></td>
                <td id="cell0-1"><input className='username'type='text' onChange={this.updateInput}/></td>
              </tr>
              <tr id="row1">
                <td id="cell1-0"><label>Password</label></td>
                <td id="cell1-1"><input className='password' type='text' onChange={this.updateInput}/></td>
              </tr>
              <tr id="row2">
                <td id="cell2-0">
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
                </td>
              </tr>
              <tr id="row3">
                <td id="cell3-0"><label>First Name</label></td>
                <td id="cell3-1"><input className='firstName'type='text' onChange={this.updateInput}/></td>
              </tr>
              <tr id="row4">
                <td id="cell4-0"><label>Last Name</label></td>
                <td id="cell4-1"><input className='lastName'type='text' onChange={this.updateInput}/></td>
              </tr>
              <tr id="row5">
                <td id="cell5-0"><label>Email</label></td>
                <td id="cell5-1"><input className='email'type='email' onChange={this.updateInput}/></td>
              </tr>
              <tr id="row6">
                <td id="cell6-0"><label>Street</label></td>
                <td id="cell6-1"><input className='street'type='text' onChange={this.updateInput}/></td>
              </tr>
              <tr id="row7">
                <td id="cell7-0"><label>City</label></td>
                <td id="cell7-1"><input className='city'type='text' onChange={this.updateInput}/></td>
              </tr>
              <tr id="row8">
                <td id="cell8-0"><label>State</label></td>
                <td id="cell8-1"><input className='state'type='text' onChange={this.updateInput}/></td>
              </tr>
              <tr id="row9">
                <td id="cell9-0"><label>Zip</label></td>
                <td id="cell9-1"><input className='zip'type='text' onChange={this.updateInput}/></td>
              </tr>
            </table>
            <br/><button type='submit' disabled={this.disableForm()} onClick={this.submitForm}> Sign Me Up! </button>
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
