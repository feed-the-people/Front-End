import './RecipeForm.scss'
import { Component, Redirect } from 'react';
import { searchNonProfits, createRecipe } from '../../APICalls.js'
import axios from 'axios'
import { Image, CloudinaryContext } from 'cloudinary-react'
import Footer from '../Footer/Footer'

class RecipeForm extends Component {
  //This needs a refactor to hooks
  //Our form submission is also broken
  //And we need to look into photo uploading and storage
  //In general this component feels too complicated and buit out
  //Maybe consider breaking the recipe ingredients and NPOS search into their own componets?
  constructor(props) {
    super(props);
    this.state = {
      npoName: '',
      npoEIN: '',
      userId: '',
      image: '',
      title: '',
      description: '',
      instructions: '',
      ingredients: [],
      viableNPOs: [],
      workingIngredient: '',
      workingAmount: '',
      redirect: false,
    }
  }

  disableForm() {
    if (this.state.uploadedFile &&
        this.state.title &&
        this.state.description &&
        this.state.instructions &&
        this.state.ingredients) {
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

  searchNPOS = async (e) => {
    let searchTerm = e.target.value
    let results = await searchNonProfits(searchTerm)
    if (results && results.length) {
      let options = results.map((result, index) => {
        return <option value={result.name} key={index} id={result.ein}> {result.name}: {result.city},{result.state} </option>
      })
      this.setState({viableNPOs: options})
    } else {
      this.setState({ viableNPOs: [] })
    }
  }

  chooseNPO = (e) => {
    let name = e.target.value
    let index = e.target.selectedIndex;
    let ein = e.target.childNodes[index].id
    this.setState({npoName: name, npoEIN: ein})
  }

  submitForm = async (e) => {
    e.preventDefault()
    let storage = localStorage.getItem('user')
    let user = storage ? JSON.parse(storage) : null
    const {uploadedFile} = this.state;
    const formData = new FormData();
    formData.append('file', uploadedFile);
    formData.append('upload_preset', 'hrqc7brr');
    console.log(formData)
    const response = await axios.post(
      "https://api.cloudinary.com/v1_1/dygnrpjv8/upload",
      formData
      );
    console.log("It did the thing");
    console.log(response);
    this.setState({ image: response.data.public_id});

    let result = await createRecipe(
      user.id,
      this.state.image,
      this.state.title,
      this.state.description,
      this.state.instructions,
      this.state.npoEIN,
      this.state.npoName,
      this.state.ingredients
    )
    console.log(result)
    if(result.error) {
      alert('Something went wrong')
    } else {
      alert('Success!')
      this.setState({redirect: true})
    }
  }

  buildIngredientsList = () => {
    if (this.state.ingredients.length) {
      let ingList = this.state.ingredients.map((ing) => {
       return <div className='ingredientBox'>{ing.name}: {ing.amount}</div>
      }
     )
    return (<div>{ingList}</div>)
    } else {
      return <div>No ingredients added yet</div>
    }
  }

  addIngredient = (e) => {
    e.preventDefault();
    let ing = {name: this.state.workingIngredient, amount: this.state.workingAmount}
    let newList = this.state.ingredients
    newList.push(ing)
    this.setState({ingredients: newList})
  }

  changeHandler = event => {
    this.setState({
      uploadedFile: event.target.files[0]
    })
  }

  filePreview=()=>{
    let url= URL.createObjectURL(this.state.uploadedFile)
    return url
  }

  render() {
    return (
      <div>
      <form className='RecipeForm-form' data-testid='form'>
        <h1 data-testid='formPrompt'>Let's contribute!</h1>
        <p data-testid='formInstructions'>We need a little information from you below to make a recipe and
        connect it to a non profit organization you want to support!</p><br/>
        <label>
          Recipe Name
          <input className='title' size='65' type='text' onChange={this.updateInput}/>
        </label>
        <label>
          Recipe Image
            <input id="image" type='file'
                            name="image"
                            accept="image/*"
                            multiple={false}
                            onChange={this.changeHandler}/>
                            {this.state.uploadedFile && <img id="photo-preview" src={this.filePreview()}/>}
        </label>
        <label>
          Recipe Description
          <textarea className='description' rows='10' cols='60' type='text' onChange={this.updateInput}/>
        </label>
        <label>
          Recipe Instructions
          <textarea className='instructions' rows='10' cols='60' type='text' onChange={this.updateInput}/>
        </label>
          <h2>Ingredient List</h2>
          { this.buildIngredientsList() }
          <label>Ingredient name
            <input className='workingIngredient' type='text' onChange={this.updateInput}/>
          </label>
          <label>Ingredient Amount
            <input className='workingAmount' type='text' onChange={this.updateInput}/>
          </label>
          <button className='RecipeForm-button' type='submit' onClick={this.addIngredient}>Add Ingredient</button>
          <h2>Non-Profit Organization Search</h2>
          <label>
              Enter Search Term
              <input className='NPO' type='text' onChange={this.searchNPOS}/>
            </label>
          <label>
            Select from search results:
            {!this.state.viableNPOs.length ? <p>No relevant matches...</p> : <select onChange={this.chooseNPO}> {this.state.viableNPOs} </select>}
          </label>
          <button className='RecipeForm-button' type='submit' data-testid='formSubmit' disabled={this.disableForm()} onClick={this.submitForm}> Submit My Recipe </button>
        </form>
        {this.state.redirect && <Redirect to="/"/>}
        <div>
        <Footer
          path1='/recipebook'
          path2='/profilepage'
          label1="My Recipe Book"
          label2='My Profile'
        /></div>
      </div>
    )
  }
}

export default RecipeForm;
