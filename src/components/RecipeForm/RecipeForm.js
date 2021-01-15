import './RecipeForm.css'
import {Link} from 'react-router-dom'
import { Component, Redirect } from 'react';
import { searchNonProfits, createRecipe } from '../../APICalls.js'
class RecipeForm extends Component {
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
    if (this.state.npoName &&
        this.state.image &&
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
    return (
      <div>{ingList}</div>
      )
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
      <div className="RecipeForm">
        <h1 data-testid='formPrompt'>Let's contribute!</h1>
        <p data-testid='formInstructions'>We need a little information from you below to make a recipe and
        connect it to a non profit organization you want to support!</p>
        <form data-testid='form'>
          <label>
            Recipe Name:
            <input className='title' type='text' onChange={this.updateInput}/>
          </label>
          <br/>
          <label>
            Recipe Description:
            <input className='description' type='text' onChange={this.updateInput}/>
          </label>
          <br/>
          <label>
            <h2>Ingredients</h2>
            {this.buildIngredientsList()}
            <div>
              <label>
                Ingredient Name
                <input className='workingIngredient' type='text' onChange={this.updateInput}/>
              </label>
              <br/>
              <label>
                Ingredient Amount
                <input className='workingAmount' type='text' onChange={this.updateInput}/>
              </label>
            
              <button type='submit' onClick={this.addIngredient}>Add Ingredient</button>
            </div>
          </label>
          <label>
            Steps
            <input className='instructions' type='text' onChange={this.updateInput}/>
          </label>
          <br/>
          <label>
            Recipe Image
            <input className='image' type='text' onChange={this.updateInput}/>
          </label>
          <br/>
          <label>
            Non-Profit Organization Search
            <input className='NPO' type='text' onChange={this.searchNPOS}/>
          </label>
          <br/>
          <label>
            Select from search results:
            {!this.state.viableNPOs.length ? <p>No relevant matches...</p> : <select onChange={this.chooseNPO}> {this.state.viableNPOs} </select>}
          </label>
          <br/>
          <button type='submit' data-testid='formSubmit' disabled={this.disableForm()} onClick={this.submitForm} onClick={this.disableForm()}> Submit My Recipe </button>
        </form>
        {this.state.redirect && <Redirect to="/"/>}
        <footer className="RecipeForm-footer">
          <Link to='/'><button data-testid='homeButton'> Take Me Back </button></Link>
        </footer>
      </div>
    )
  }
}

export default RecipeForm;
