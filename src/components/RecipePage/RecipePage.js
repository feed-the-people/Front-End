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
      rating: '',
      allRecipes: [],
      loading: true,
    }
  }
  getRecipe = async (id) => {
    let response = await recipeById(id)
    let recipe = response.recipeById
    this.setState({recipe: recipe})
  }
  updateState = (e) => {
    this.setState({[e.target.name]: e.target.value})
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
            <h2 className='recipeRating'>{this.state.rating}</h2>
          </header>
          <section className="recipe-section">
            <h3>{this.state.recipe.title}</h3>
            <p><img src={this.state.recipe.image} alt='image of recipe' /></p>
            <p>{this.state.recipe.description}</p>
            <p>{this.state.recipe.instructions}</p>
            {/* {recipeIngredients} */}
              <section className="ratingArea">
                <select className='ratingSelect' data-testid='ratingSelect' className='dropdown' name='rating' onChange={this.updateState} value={this.state.rating}>
                  <option value='notchosen'>Rate this recipe!</option>
                  <option value='1'>1 (Not Great)</option>
                  <option value='2'>2 (meh)</option>
                  <option value='3'>3 (It was alright.)</option>
                  <option value='4'>4 (I'd make this again!)</option>
                  <option value='5'>5 (SO. HECKIN'. GOOD.)</option>
                </select>
              </section>
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
