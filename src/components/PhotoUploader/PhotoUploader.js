import React, { Component } from 'react'

class PhotoUploader extends Component {
  constructor(props){
    super(props);

  this.state={
    image: null,
  }
  }

  changeHandler = event => {
    this.setState({
      image: event.target.files[0]
    })
  }

  filePreview=()=>{
    let url= URL.createObjectURL(this.state.image)
    return url
  }

  photoUploader = event =>{
    event.preventDefault();
  }
  render() {
    return(
      <label>
        Image
      <input id="image" type='file'
                      name="image"
                      accept="image/*"
                      multiple={false}
                      onChange={this.changeHandler}/>
                      {this.state.image && <img id="photo-preview" src={this.filePreview()}/>}
        </label>
    )
  }
}
export default PhotoUploader