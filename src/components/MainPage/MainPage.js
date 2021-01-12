import './MainPage.css';
import profile from '../../icons/user-icon.svg'
import recipeBook from '../../icons/recipe-book-icon.svg'
import {Link} from 'react-router-dom'
import {allRecipes} from '../../mockData.js'
import RecipeCard from '../RecipeCard/RecipeCard'

function MainPage(props) {
  let recipeDisplay;
  if (props.allRecipes){
    recipeDisplay = props.allRecipes.map((recipe, index)=> {
      return (
        <RecipeCard
          title={recipe.title}
          charityName={recipe.charityName}
          description={recipe.description}
          key={index}
          image={recipe.image}
          />
      )
    })
  }
  return (
    <div className="MainPage">
      <header className="MainPage-sidebar">
        <Link to='/profilepage'><img src={profile} alt='navigate to user profile page'/></Link>
        <Link to='/recipebook'><img src={recipeBook} alt='navigate to user recipe book'/></Link>
      </header>
      <section className='recipe-section'>
        {props.loading ? <h2> Loading Global Recipes...</h2> : recipeDisplay}
      </section>
    </div>
  );
}

export default MainPage;
