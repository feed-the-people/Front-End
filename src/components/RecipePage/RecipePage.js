import './RecipePage.css';
import { Component } from 'react';
import CallToAction from '../CallToAction/CallToAction.js'
import {allRecipes} from '../../mockData.js'
import { recipeById } from '../../APICalls.js'

class RecipePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signedIn: false,
      user: '',
      allRecipes: [],
      loading: true,
    }
  }
  getRecipe = async (id) => {
    let response = await recipeById(id)
    let recipe = response.recipeById
    this.setState({recipe: recipe})
  }
  componentDidMount(){
    this.getRecipe(this.props.id)
  }
  render(){
    let user = JSON.parse(localStorage.getItem('user'))
    if (!user) {
      return <CallToAction title='You need to be signed in to view this recipe...' />
    } else if (this.state.recipe){
      return (
        <div className="RecipePage">
        <header className="RecipePage-header">
        <h1> Recipe Page </h1>
        </header>
        <section className="recipe-section">
        <h3>{this.state.recipe.title}</h3>
        <p><img src={this.state.recipe.image} alt='A dish of egg, bread, and other assorted garnishes' /></p>
        <p>{this.state.recipe.description}</p>
        <p>{this.state.recipe.instructions}</p>
        {/* {recipeIngredients} */}
        </section>
        </div>
      );
    } else {
      return (
      <div className="RecipePage">
      <header className="RecipePage-header">
      <h1> Recipe Page </h1>
      </header>
      <section className="recipe-section">
      <h3>Loading...</h3>
      </section>
      </div>
    )
    }
  }
}

export default RecipePage;
