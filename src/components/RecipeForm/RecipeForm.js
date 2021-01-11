import './RecipeForm.css'
import {Link} from 'react-router-dom'
import { Component } from 'react';

class RecipeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    }
  }
  updateInput = (e) => {
    let type = e.target.type
    let value = e.target.value
    this.setState({[type]: value})
  }

  submitForm = () => {
    console.log('Submitted!')
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
            <input type='text' onChange={this.updateInput}/>
          </label>
          <label>
            Recipe Description:
            <input type='text' onChange={this.updateInput}/>
          </label>
          <label>
            Ingredients
            <input type='text' onChange={this.updateInput}/>
          </label>
          <label>
            Steps
            <input type='email' onChange={this.updateInput}/>
          </label>
          <label>
            None Profit Organization
            <input type='text' onChange={this.updateInput}/>
          </label>
          <button type='submit' data-testid='formSubmit' onClick={this.submitForm}> Submit My Recipe </button>
        </form>
        <footer className="RecipeForm-footer">
          <Link to='/'><button data-testid='homeButton'> Take Me Back </button></Link>
        </footer>
      </div>
    );
  }
}

export default RecipeForm;
