import './RecipeForm.css'
import {Link} from 'react-router-dom'
import { Component, Redirect } from 'react';
import { searchNonProfits, createRecipe } from '../../APICalls.js'
import Footer from '../Footer/Footer'

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
        <center>
          <table id="simple-board">
            <tr id="row0">
              <tr id="sub-row0">
                <td id="cell0-0">
                  <label>
                    Recipe Name<br/>
                    <input className='title' size='65' type='text' onChange={this.updateInput}/>
                  </label>
                </td>
              </tr>
            </tr>
            <tr id="row1">
              <tr id="sub-row1">
                <td id="cell1-0">
                  <label>
                    Recipe Image URL<br/>
                    <input className='image' size='65' type='text' onChange={this.updateInput}/>
                  </label>
                </td>
                <td id="cell1-1"></td>
              </tr>
            </tr><br/>
            <tr id="row2">
              <td id="cell2-0">
                <label>
                  Recipe Description<br/>
                  <textarea className='description' rows='10' cols='60' type='text' onChange={this.updateInput}/>
                </label>
              </td>
            </tr>
            <tr id="row3">
              <td id="cell3-0">
                <label>
                  <br/>Recipe Instructions<br/>
                  <textarea className='instructions' rows='10' cols='60' type='text' onChange={this.updateInput}/>
                </label>
              </td>
            </tr>
            <center>
            <tr id="row4">
              <td id="cell4-0">
                <label>
                  <br/><h2>Ingredient List</h2><br/>
                </label>
              </td>
            </tr>
            <tr id="row5">
              <td id="cell5-0">
                { this.buildIngredientsList() }
              </td>
            </tr>
            <br/>
            <tr id="row6">
              <td id="cell6-0">
                <tr id="sub-row6-0">
                  <td><label>Ingredient Name</label></td>
                  <td><input className='workingIngredient' type='text' onChange={this.updateInput}/></td>
                </tr>
                <tr id="sub-row6-1">
                  <td><label>Ingredient Amount</label></td>
                  <td><input className='workingAmount' type='text' onChange={this.updateInput}/></td>
                </tr>
                  <br/><button type='submit' onClick={this.addIngredient}>Add Ingredient</button>
              </td>
            </tr>
            <tr id="row4">
              <td id="cell4-0">
                <label>
                  <br/><h2>Non-Profit Organization Search</h2><br/>
                  <label>
                    Enter Search Term
                    <input className='NPO' type='text' onChange={this.searchNPOS}/><br/><br/>
                  </label>
                </label>
              </td>
            </tr>
            <tr id="row5">
              <td id="cell5-0">
                <label>
                  Select from search results:
                  {!this.state.viableNPOs.length ? <p>No relevant matches...</p> : <select onChange={this.chooseNPO}> {this.state.viableNPOs} </select>}
                </label>
              </td>
            </tr>
            <br/>
            <button type='submit' data-testid='formSubmit' disabled={this.disableForm()} onClick={this.submitForm} onClick={this.disableForm()}> Submit My Recipe </button>
            </center>
          </table>
          </center>
        </form>
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
