import './RecipePage.css';
import { Component } from 'react';
import CallToAction from '../CallToAction/CallToAction.js'
import Checkout from '../CheckoutForm/Checkout.js'
// import PurchaseModal from '../PurchaseModal/PurchaseModal.js'
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
    this.setState({recipe: recipe})
    this.getPurchasedRecipes(user.id)
  }
  getPurchasedRecipes = async (id) => {
    let response = await getUserWithRecipes(id)
    let updatedUserInfo = JSON.stringify(response.getUser)
    localStorage.setItem('user', updatedUserInfo)
    let foundUserRecipe = response.getUser.userRecipes.find(recipe => recipe.recipeId === this.state.recipe.id)
    let foundRecipe = response.getUser.recipes.find(recipe => recipe.id === this.state.recipe.id)
    if(foundRecipe || foundUserRecipe){
      this.setState({purchased: true})
    } else {
      this.setState({purchased: false})
    }
  }
  donate = async (e) => {
    let user = JSON.parse(localStorage.getItem('user'))
    e.preventDefault()
    let amount = e.target.parentElement.firstChild.lastChild.value
    let recipeId = this.props.id
    let response = await getAccessToRecipe(user.id, recipeId, amount)
    this.setState({purchased: true})
  }
  buildIngredients = () => {
    let list = this.state.recipe.ingredients.map(ingredient => {
      return <li>{ingredient.amount}: {ingredient.name} </li>
    })
    return (
      <ul>
        {list}
      </ul>
    )
  }

  // buildInstructions = () => {
  //   let steps = this.state.recipe.instructions.split("\n").map((item, key) => {
  //   return <span key={key}>{item}<br/></span>
  // })
  // }

  componentDidMount(){
    let user = JSON.parse(localStorage.getItem('user'))
    if(user) {
      this.getRecipe(this.props.id)
    }
  }
  render(){
    let user = JSON.parse(localStorage.getItem('user'))
    if (!user) {
      return <CallToAction title='You need to be signed in to view this recipe...' />
    } else if (this.state.recipe && this.state.purchased){
      return (
        <div className="RecipePage">
          <section className='left-section'>
            <div className='leftHeader'>
              <h1 className='recipe-name'>{this.state.recipe.title}</h1>
            </div>
            <img className='recipe-image' src={this.state.recipe.image} alt='A dish of egg, bread, and other assorted garnishes' />
          </section>

          <section className='right-section'>
            <section className='details'>
          <section className="ingredients-section">
          <div className='ingredientHeader'>
              <h1>Ingredients:</h1>
            </div>
            {this.buildIngredients()}
          </section>
            <section className='instructions-section'>
            <div className='instructionsHeader'>
              <h1>Instructions:</h1>
            </div>
            {/* {this.buildInstructions} */}
            <p>{this.state.recipe.instructions}</p>
            </section>
            </section>
      </section>

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
      <div className="RecipePage">
      {!this.state.purchased && <Checkout donate={this.donate} recipe={this.state.recipe}/>}
      <header className="RecipePage-header">
      <h1> Recipe Page </h1>
      </header>
      <section className="recipe-section">
      <h3>Loading...</h3>
      </section>
      <Footer
        path1='/recipebook'
        path2='/profilepage'
        label1="My Recipe Book"
        label2='My Profile'
        className='RecipeBook-Footer'
      />
      </div>
    )
    }
  }
}

export default RecipePage;
