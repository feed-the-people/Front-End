import './App.css';
import MainPage from '../MainPage/MainPage'
import SignInPage from '../SignIn/SignInPage'
import SignUpPage from '../SignUp/SignUpPage'
import RecipePage from '../RecipePage/RecipePage'

import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <div className="App">
        <h1>Feed The People </h1>
        <Route path='/signin'>
          <SignInPage />
        </Route>
        <Route path='/signup'>
          <SignUpPage />
        </Route>
        <Route path='/recipepage'>
          <RecipePage />
        </Route>
        <Route path='/profile'>

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

export default App;
