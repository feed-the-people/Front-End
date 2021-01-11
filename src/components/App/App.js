import './App.css';
import { Component } from 'react';
import MainPage from '../MainPage/MainPage'
import SignInPage from '../SignIn/SignInPage'
import SignUpPage from '../SignUp/SignUpPage'
import RecipePage from '../RecipePage/RecipePage'
import ProfilePage from '../ProfilePage/ProfilePage'
import RecipeBook from '../RecipeBook/RecipeBook'
import RecipeForm from '../RecipeForm/RecipeForm'
// working
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

// parse errors
import { createRecipe } from '../../APICalls.js'

// Need autopopulated form
import { updateUser } from '../../APICalls.js'
import { updateIngredient } from '../../APICalls.js'
import { updateRecipe } from '../../APICalls.js'


import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

class App extends Component {
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
    this.setState({allRecipes: response.allRecipes, loading: false})
  }

  render() {
    // working
    // getAllRecipes()
    // getUserWithRecipes(84)
    // recipeById(1)
    // getUser(1)
    // searchNonProfits("Food Bank of the Rockies")
    // createUserRecipe(1, 3, 2.5)
    // createIngredient(1, "name", "amount")
    // updateUserRecipeRating(2, 4) working but I found a bug in BE
    // registerUser("John", "Doe", "JD@gmail.com", "a street", "a city", "a state", "a zip", "an image", "new user", "1234")
    // userSignIn("mr_cook", "123")

    // parse errors (coming back to this one later, I cant figure out how to pass the ingredients in a way it likes)
    // createRecipe(1, "Chicken Parmesan", "A classic favorite", "1. chicken 2.???? 3. profit", 533423, "Give Logan Money", {name: "Chicken", amount: "2 lbs"}, {name: "Parmesan", amount: "5 gallons"})

    // Must have form fields autopopulated in order for these to work
    // updateUser()
    // updateIngredient()
    // updateRecipe() (Does not exist on BE yet)

    return (
      <BrowserRouter>
      <Switch>
        <div className="App">
          <Route path='/signin'>
            <SignInPage />
          </Route>
          <Route path='/signup'>
            <SignUpPage />
          </Route>
          <Route path='/recipepage'>
            <RecipePage />
          </Route>
          <Route path='/profilepage'>
            <ProfilePage />
          </Route>
          <Route path='/recipebook'>
            <RecipeBook />
          </Route>
          <Route path='/recipeform'>
            <RecipeForm />
          </Route>
          <Route exact path='/'>
            <MainPage allRecipes={this.state.allRecipes} loading={this.state.loading}/>
          </Route>
        </div>
      </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
