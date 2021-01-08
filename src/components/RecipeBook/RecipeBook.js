import './RecipeBook.css';
import profile from '../../icons/user-icon.svg'
import home from '../../icons/global.svg'
import {Link} from 'react-router-dom'
import {allRecipes} from '../../mockData.js'
import RecipeCard from '../RecipeCard/RecipeCard'

function RecipeBook() {
  //will ordinarily map over props being passed in, but in this case taking the direct import

  let recipeDisplay = allRecipes.map((recipe, index)=> {
    return (
      <RecipeCard recipe={recipe} key={index}/>
    )
  })
  return (
    <div className="RecipeBook">
      <header className="RecipeBook-sidebar">
        <Link to='/profilepage'><img src={profile} alt='navigate to user profile page'/></Link>
        <Link to='/'><img src={home} alt='navigate to main page'/></Link>
      </header>
      <section className='my-recipe-section'>
        <h1>Recipes you have uploaded: </h1>
        <Link to='/recipeform'><button>Upload another recipe</button></Link>
        {recipeDisplay}
      </section>
      <section className='purchased-recipe-section'>
        <h1>Recipes you have purchased: </h1>
        {recipeDisplay}
      </section>
    </div>
  );
}

export default RecipeBook;
