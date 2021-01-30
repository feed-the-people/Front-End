import './RecipePage.scss';
import { Component } from 'react';
import CallToAction from '../CallToAction/CallToAction.js'
import Checkout from '../CheckoutForm/Checkout.js'
import { recipeById, getUserWithRecipes, getAccessToRecipe } from '../../APICalls.js'
import Footer from '../Footer/Footer'

class RecipePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      purchased: false,
      user: '',
      allRecipes: [],
      loading: true,
    }
  }
  //This component has similar comments as Recipe form
  //We need a refactor to hooks and to look at breaking apart functionality
  //I feel like this should have less logic and get more data from local storage
  getRecipe = async (id) => {
    let user = JSON.parse(localStorage.getItem('user'))
    let response = await recipeById(id)
    let recipe = response.recipeById
    let recipes= user.recipes.find(recipe => {return recipe.id === this.props.id})
    let userRecipes = user.userRecipes.find(recipe => {return recipe.recipeId === this.props.id})
    if(recipes || userRecipes) {
      this.setState({purchased: true})
    }
    this.setState({recipe: recipe})
  }

  buildIngredients = () => {
    let list = this.state.recipe.ingredients.map((ingredient, index) => {
      return <li key={index}>{ingredient.amount}: {ingredient.name} </li>
    })
    return (
      <ul>
        {list}
      </ul>
    )
  }

  updateUser = async (id) => {
    let response = await getUserWithRecipes(id)
    let userInfo = JSON.stringify(response.data.getUser)
    localStorage.setItem('user', userInfo)
  }

  componentDidMount(){
    let user = JSON.parse(localStorage.getItem('user'))
    if(user) {
      this.getRecipe(this.props.id)
    }
  }

  render(){
    let user = JSON.parse(localStorage.getItem('user'))
    if (!user) {
      return (
        <CallToAction title='You need to be signed in to view this recipe...' />
      )
    } else if (this.state.recipe) {
      return (
        <div className="RecipePage">
          <h1 className='recipe-name'>{this.state.recipe.title}</h1>
          <img className='recipe-image' src={this.state.recipe.image} alt='A dish of egg, bread, and other assorted garnishes' />
          <h1>Ingredients:</h1>
          {this.buildIngredients()}
          <h1>Instructions:</h1>
          <p>{this.state.recipe.instructions}</p>
          {!this.state.purchased && <Checkout recipe={this.state.recipe}/>}
          <Footer
            path1='/recipebook'
            path2='/profilepage'
            label1="My Recipe Book"
            label2='My Profile'
            className='RecipeBook-Footer'
          />
          </div>
      );
    } else {
      return (
        <h1>Loading...</h1>
      )
    }
  }
}

export default RecipePage;
