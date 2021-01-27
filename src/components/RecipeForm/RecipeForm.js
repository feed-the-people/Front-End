import './RecipeForm.css'
import { Component, Redirect } from 'react';
import { searchNonProfits, createRecipe } from '../../APICalls.js'
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
    if (this.state.image &&
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
    if (results.length) {
      let options = results.map((result, index) => {
        return <option value={result.name} key={index} id={result.ein}> {result.name}: {result.city},{result.state} </option>
      })
      this.setState({viableNPOs: options})
    } else {
//Indicate to a user somehow the lack of available options
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

  render() {
    return (
      <div>
      <div className="RecipeForm">
        <h1 data-testid='formPrompt'>Let's contribute!</h1>
        <p data-testid='formInstructions'>We need a little information from you below to make a recipe and
        connect it to a non profit organization you want to support!</p><br/>
        <form data-testid='form'>
          <label>
            Recipe Name
            <input className='title' size='65' type='text' onChange={this.updateInput}/>
          </label>
          <label>
            Recipe Image URL
            <input className='image' size='65' type='text' onChange={this.updateInput}/>
          </label>
          <label>
            Recipe Description
            <textarea className='description' rows='10' cols='60' type='text' onChange={this.updateInput}/>
          </label>
          <label>
            Recipe Instructions
            <textarea className='instructions' rows='10' cols='60' type='text' onChange={this.updateInput}/>
          </label>
          <label>
            <h2>Ingredient List</h2>
          </label>
          { this.buildIngredientsList() }
          <label>Ingredient Name
            <input className='workingIngredient' type='text' onChange={this.updateInput}/>
          </label>
          <label>Ingredient Amount
            <input className='workingAmount' type='text' onChange={this.updateInput}/>
          </label>
          <button type='submit' onClick={this.addIngredient}>Add Ingredient</button>
          <div>
            <h2>Non-Profit Organization Search</h2>
            <label>
              Enter Search Term
              <input className='NPO' type='text' onChange={this.searchNPOS}/>
            </label>
          </div>
          <label>
            Select from search results:
            {!this.state.viableNPOs.length ? <p>No relevant matches...</p> : <select onChange={this.chooseNPO}> {this.state.viableNPOs} </select>}
          </label>
          <button type='submit' data-testid='formSubmit' disabled={this.disableForm()} onClick={this.submitForm}> Submit My Recipe </button>
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

      </div>
    )
  }
}

export default RecipeForm;
