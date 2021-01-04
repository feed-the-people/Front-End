import './MainPage.css';
import profile from '../../icons/user-icon.svg'
import recipeBook from '../../icons/recipe-book-icon.svg'
import {Link} from 'react-router-dom'

function MainPage() {

  return (
    <div className="MainPage">
      <header className="MainPage-sidebar">
        <Link to='/profile'><img src={profile} alt='navigate to user profile'/></Link>
        <Link to='recipeBook'><img src={recipeBook} alt='navigate to user recipe book'/></Link>
      </header>
      <h1>Main Page</h1>
    </div>
  );
}

export default MainPage;
