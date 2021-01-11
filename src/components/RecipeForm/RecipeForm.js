import './RecipeForm.css'
import {Link} from 'react-router-dom'
import { Component } from 'react';
import { searchNonProfits } from '../../APICalls.js'
class RecipeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      viableNPOs: [],
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
    // if (results.ok) {
    //   results.map(result => {
    //     return <option value={result.name}> result.name </option>
    //   })
    // }
    console.log(searchTerm)
  }

  submitForm = () => {
    console.log('Submitted!')
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
            <input className='ingredients' type='text' onChange={this.updateInput}/>
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
            Non-Profit Organization Options
            <select onChange={this.chooseNPO}>
              {this.state.viableNPOs}
            </select>
          </label>
          <button type='submit' onClick={this.submitForm}> Submit My Recipe </button>
        </form>
        <footer className="RecipeForm-footer">
          <Link to='/'><button> Take Me Back </button></Link>
        </footer>
      </div>
    );
  }
}

export default RecipeForm;
