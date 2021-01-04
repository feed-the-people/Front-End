import './MainPage.css';
import profile from '../../icons/user-icon.svg'
import recipeBook from '../../icons/recipe-book-icon.svg'
import {Link} from 'react-router-dom'
import {allRecipes} from '../../mockData.js'
import RecipeCard from '../RecipeCard/RecipeCard'

function MainPage() {
  //will ordinarily map over props being passed in, but in this case taking the direct import

  let recipeDisplay = allRecipes.map(recipe => {
    return (
      <RecipeCard recipe={recipe}/>
    )
  })
  return (
    <div className="MainPage">
      <header className="MainPage-sidebar">
        <Link to='/profile'><img src={profile} alt='navigate to user profile'/></Link>
        <Link to='recipeBook'><img src={recipeBook} alt='navigate to user recipe book'/></Link>
      </header>
      <section className='recipe-section'>
        {recipeDisplay}
      </section>
    </div>
  );
}

export default MainPage;
