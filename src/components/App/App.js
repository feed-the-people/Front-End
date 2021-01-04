import './App.css';
import MainPage from '../MainPage/MainPage'
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <h1>Feed The People </h1>
      <MainPage />
    </div>
    </BrowserRouter>
  );
}

export default App;
