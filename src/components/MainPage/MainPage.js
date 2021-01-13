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
        image={recipe.image}
        title={recipe.title}
        charityName={recipe.charityName}
        description={recipe.description}
        key={index}
        id={recipe.id}
        />
      )
    })
  }
  return (
    <div className="MainPage">
      <section className='main-recipe-section'>
        {props.loading ? <h2> Loading Global Recipes...</h2> : recipeDisplay}
      </section>
      <Footer
        path1='/profilepage'
        path2='/recipeBook'
        label1='My Profile'
        label2='My Recipe Book'
      />
    </div>
  );
}

export default MainPage;
