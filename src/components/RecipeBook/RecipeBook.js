import './RecipeBook.css';
import { Component } from 'react';
import profile from '../../icons/user-icon.svg'
import home from '../../icons/global.svg'
import {Link} from 'react-router-dom'
import RecipeCard from '../RecipeCard/RecipeCard'
import CallToAction from '../CallToAction/CallToAction.js'
import { getUserWithRecipes } from '../../APICalls.js'
import Footer from '../Footer/Footer'

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
          id={recipe.id}
          image={recipe.image}
          title={recipe.title}
          description={recipe.description}
          charityName={recipe.charityName}
          id={recipe.id}
          />
        )
      })
      this.setState({[kind]: section})
    }
  }
  componentDidMount(){
    let storage = localStorage.getItem('user')
    let user = storage ? JSON.parse(storage) : null
    if (user) {
      this.getRecipeSection('recipes', user.id)
      this.getRecipeSection('userRecipes', user.id)
    }
  }
  render(){
    let storage = localStorage.getItem('user')
    let user = storage ? JSON.parse(storage) : null
    if (!user) {
      return <CallToAction title='You need to be signed in to have a recipe book...' />
    } else {
      return (
        <div className="RecipeBook">
          <section className='my-recipe-section'>
            <h1>Recipes you have uploaded: </h1>
            <Link to='/recipeform'><button>Upload another recipe</button></Link>
            {this.state.recipes || <p>You haven't uploaded any recipes</p>}
          </section>
          <section className='purchased-recipe-section'>
            <h1>Recipes you have purchased: </h1>
            {this.state.userRecipes || <p>You haven't purchased an recipes</p>}
          </section>
          <Footer
            path1='/'
            path2='/profilepage'
            label1="Everyone's Recipes"
            label2='My Profile'
            className='RecipeBook-Footer'
          />
        </div>
      );
    }
  }
}

export default RecipeBook;
