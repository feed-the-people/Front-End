import './RecipeForm.css'
import {Link} from 'react-router-dom'
import { Component } from 'react';
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
    console.log(results)
    if (results.length) {
      let options = results.map((result, index) => {
        return <option value={result.name} key={index} id={result.ein}> {result.name}: {result.city},{result.state} </option>
      })
      this.setState({viableNPOs: options})
    } else {

    }
    console.log(searchTerm)
  }

  chooseNPO = (e) => {
    let name = e.target.value
    let index = e.target.selectedIndex;
    let ein = e.target.childNodes[index].id
    this.setState({npoName: name, npoEIN: ein})
  }

  submitForm = async (e) => {
    e.preventDefault()
    let user = JSON.parse(localStorage.getItem('user'))
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
        <h1>Let's contribute!</h1>
        <p>We need a little information from you below to make a recipe and
        connect it to a non profit organization you want to support!</p>
        <form>
          <label>
            Recipe Name:
            <input className='title' type='text' onChange={this.updateInput}/>
          </label>
          <label>
            Recipe Description:
            <input className='description' type='text' onChange={this.updateInput}/>
          </label>
          <label>
            Ingredients
            {this.buildIngredientsList()}
            <form>
              <label>
                Ingredient Name
                <input className='workingIngredient' type='text' onChange={this.updateInput}/>
              </label>
              <label>
                Ingredient Amount
                <input className='workingAmount' type='text' onChange={this.updateInput}/>
              </label>
              <button type='submit' onClick={this.addIngredient}>Add Ingredient</button>
            </form>
          </label>
          <label>
            Steps
            <input className='instructions' type='text' onChange={this.updateInput}/>
          </label>
          <label>
            Recipe Image
            <input className='image' type='text' onChange={this.updateInput}/>
          </label>
          <label>
            Non-Profit Organization Search
            <input className='NPO' type='text' onChange={this.searchNPOS}/>
          </label>
          <label>
            Select from search results:
            {!this.state.viableNPOs.length ? <p>No relevant matches...</p> : <select onChange={this.chooseNPO}> {this.state.viableNPOs} </select>}
          </label>
          <button type='submit' onClick={this.submitForm}> Submit My Recipe </button>
        </form>

        <footer className="RecipeForm-footer">
          <Link to='/'><button> Take Me Back </button></Link>
        </footer>
      </div>
    )
  }
}

export default RecipeForm;
