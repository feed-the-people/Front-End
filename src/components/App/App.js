import './App.css';
import { Component } from 'react';
import MainPage from '../MainPage/MainPage'
import SignInPage from '../SignIn/SignInPage'
import SignUpPage from '../SignUp/SignUpPage'
import RecipePage from '../RecipePage/RecipePage'
import ProfilePage from '../ProfilePage/ProfilePage'

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
    }
  }
  render() {
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
          <ProfilePage signedIn={this.state.signedIn}/>
        </Route>
        <Route path='/recipebook'>

        </Route>
        <Route path='/'>
          <MainPage />
        </Route>
      </div>
      </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
