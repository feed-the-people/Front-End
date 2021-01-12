import './RecipeBook.css';
import { Component } from 'react';
import profile from '../../icons/user-icon.svg'
import home from '../../icons/global.svg'
import {Link} from 'react-router-dom'
import RecipeCard from '../RecipeCard/RecipeCard'
import CallToAction from '../CallToAction/CallToAction.js'
import { getUserWithRecipes } from '../../APICalls.js'

class RecipeBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      userRecipes: []
    }
  }
  getRecipeSection = async (kind, id) =>  {
    let results = await getUserWithRecipes(id)
    let section;
    if(!results.getUser[kind].length){
      section = undefined
    } else {
      let section = results.getUser[kind].map((recipe, index) => {
        return (
          <RecipeCard
          key={index}
          image={recipe.image}
          title={recipe.title}
          description={recipe.description}
          charityName={recipe.charityName}
          />
        )
      })
      this.setState({[kind]: section})
    }
  }
  render(){
    let user = JSON.parse(localStorage.getItem('user'))
    if (!user) {
      return <CallToAction title='You need to be signed in to have a recipe book...' />
    } else {
      this.getRecipeSection('recipes', user.id)
      this.getRecipeSection('userRecipes', user.id)
      return (
        <div className="RecipeBook">
          <header className="RecipeBook-sidebar">
            <Link to='/profilepage'><img src={profile} data-testid='profileIcon' alt='navigate to user profile page'/></Link>
            <Link to='/'><img src={home} data-testid='homeIcon' alt='navigate to main page'/></Link>
          </header>
          <section className='my-recipe-section' data-testid='myRecipes'>
            <h1>Recipes you have uploaded: </h1>
            <Link to='/recipeform'><button data-testid='uploadButton'>Upload another recipe</button></Link>
            {this.state.recipes || <p>You haven't uploaded any recipes</p>}
          </section>
          <section className='purchased-recipe-section' data-testid='purchasedRecipes'>
            <h1>Recipes you have purchased: </h1>
            {this.state.userRecipes || <p>You haven't purchased an recipes</p>}
          </section>
        </div>
      );
    }
  }
}

export default RecipeBook;
