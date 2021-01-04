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
      <MainPage />
    </div>
    </BrowserRouter>
  );
}

export default App;
