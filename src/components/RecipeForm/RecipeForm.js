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
    let type = e.target.className
    let value = e.target.value
    this.setState({[type]: value})
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
            <input className='steps' type='text' onChange={this.updateInput}/>
          </label>
          <label>
            None Profit Organization
            <input className='NPO' type='text' onChange={this.updateInput}/>
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
