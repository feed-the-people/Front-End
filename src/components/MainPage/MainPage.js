import './MainPage.css';
import profile from '../../icons/user-icon.svg'
import recipeBook from '../../icons/recipe-book-icon.svg'
import {Link} from 'react-router-dom'
import {allRecipes} from '../../mockData.js'
import RecipeCard from '../RecipeCard/RecipeCard'
import Footer from '../Footer/Footer'

function MainPage(props) {
  let recipeDisplay;
  if (props.allRecipes){
    recipeDisplay = props.allRecipes.map((recipe, index)=> {
      return (
        <RecipeCard
        charityName={recipe.charityName}
        description={recipe.description}
        key={index}
        id={recipe.id}
        recipeId={recipe.id}
        image={recipe.image}
        title={recipe.title}
        rating={recipe.avgRating}
        userId={recipe.userId}
        recipe={recipe}
        />
      )
    })
  }
  return (
    <div className="MainPage">
      <section data-testid='mainPage' className='main-recipe-section'>
        {props.loading ? <h2> Loading Global Recipes...</h2> : recipeDisplay}
      </section>
      <Footer
        path1='/recipebook'
        path2='/profilepage'
        label1="My Recipe Book"
        label2='My Profile'
      />
    </div>
  );
}

export default MainPage;
