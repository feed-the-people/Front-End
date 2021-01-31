// do we want to determine an code best practices for import order and placement?

import './App.scss';
import { Component } from 'react';
import MainPage from '../MainPage/MainPage'
import SignInPage from '../SignIn/SignInPage'
import SignUpPage from '../SignUp/SignUpPage'
import RecipePage from '../RecipePage/RecipePage'
import ProfilePage from '../ProfilePage/ProfilePage'
import RecipeBook from '../RecipeBook/RecipeBook'
import RecipeForm from '../RecipeForm/RecipeForm'
// working
//Which imports do we actually need here?
//Do we actually need all of these calls?
import { getAllRecipes } from '../../APICalls.js'
import { getUserWithRecipes } from '../../APICalls.js'
import { recipeById } from '../../APICalls.js'
import { getUser } from '../../APICalls.js'
import { createIngredient } from '../../APICalls.js'
import { createUserRecipe } from '../../APICalls.js'
import { updateUserRecipeRating } from '../../APICalls.js'
import { searchNonProfits } from '../../APICalls.js'
import { registerUser } from '../../APICalls.js'
import { userSignIn } from '../../APICalls.js'
import { createRecipe } from '../../APICalls.js'

// Need autopopulated form
// Good to know this is functionality we still need.
import { updateUser } from '../../APICalls.js'
import { updateIngredient } from '../../APICalls.js'
import { updateRecipe } from '../../APICalls.js'
import {Cloudinary} from 'cloudinary-core';


import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

class App extends Component {
  //How could we refactor this using hoooks?
  //Are we using all of these states?
  //Do we want to impliment prop types?
  constructor(props) {
    super(props);
    this.state = {
      signedIn: false,
      user: '',
      allRecipes: [],
      loading: true,
    }
  }
  async componentDidMount() {
    const response = await getAllRecipes()
    if (!response || response.error) {
      alert('Something went wrong')
    } else {
      this.setState({allRecipes: response.allRecipes, loading: false})
    }
  }

  render() {
    return (
      <BrowserRouter>
      {/*Do we want to refactor all routes to include a render?*/}
      {/*Escelate the BrowserRouter to the index.js level?*/}
      <div className="App">
      <Switch>
          <Route exact path='/signin'>
            <SignInPage />
          </Route>
          <Route exact path='/signup'>
            <SignUpPage />
          </Route>
          <Route
             exact path='/recipepage/:recipeId'
             render={({match})=>{
               const recipeId = match.params.recipeId
               return (
                 <RecipePage id={recipeId} />
               )
           }}/>
          <Route exact path='/profilepage'>
            <ProfilePage />
          </Route>
          <Route exact path='/recipebook'>
            <RecipeBook />
          </Route>
          <Route exact path='/recipeform'>
            <RecipeForm />
          </Route>
          <Route exact path='/'>
            <MainPage allRecipes={this.state.allRecipes} loading={this.state.loading}/>
          </Route>
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
