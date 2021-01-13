import './RecipePage.css';
import { Component } from 'react';
import CallToAction from '../CallToAction/CallToAction.js'
import PurchaseModal from '../PurchaseModal/PurchaseModal.js'
import {allRecipes} from '../../mockData.js'
import { recipeById, boughtRecipesByUser, getAccessToRecipe } from '../../APICalls.js'

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
    let user = JSON.parse(localStorage.getItem('user'))
    let response = await recipeById(id)
    let recipe = response.recipeById
    this.setState({recipe: recipe})
    this.getPurchasedRecipes(user.id)
  }
  getPurchasedRecipes = async (id) => {
    let response = await boughtRecipesByUser(id)
    if(!response){
      this.setState({purchased: false})
    }
  }
  donate = async (e) => {
    let user = JSON.parse(localStorage.getItem('user'))
    e.preventDefault()
    let amount = e.target.parentElement.firstChild.lastChild.value
    let recipeId = this.state.recipe.id
    let response = await getAccessToRecipe(user.id, recipeId, amount)
    this.setState({purchased: true})
  }
  componentDidMount(){
    this.getRecipe(this.props.id)
  }
  render(){
    let user = JSON.parse(localStorage.getItem('user'))
    if (!user) {
      return <CallToAction title='You need to be signed in to view this recipe...' />
    } else if (this.state.recipe && this.state.purchased){
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
      {!this.state.purchased && <PurchaseModal donate={this.donate} recipe={this.state.recipe}/>}
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
