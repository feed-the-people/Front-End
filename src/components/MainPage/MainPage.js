import './MainPage.css';
import profile from '../../icons/user-icon.svg'
import recipeBook from '../../icons/recipe-book-icon.svg'
import {Link} from 'react-router-dom'
import { getUser } from '../../APICalls.js'
import RecipeCard from '../RecipeCard/RecipeCard'
import Footer from '../Footer/Footer'
import {useEffect} from 'react'
function MainPage(props) {
  let recipeDisplay;
  if (props.allRecipes){
    //this functionality could be simplified and escelated to where the API call happens
    recipeDisplay = props.allRecipes.map((recipe, index)=> {
      // Maybe look at refactoring to accept an object and have recipe card deconstruct said opbject
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
  let updateUser = async (id) => {
    let response = await getUser(id)
    let userInfo = JSON.stringify(response.data.getUser)
    localStorage.setItem('user', userInfo)
  }

  useEffect(() => {
    console.log('made it here')
    let user = JSON.parse(localStorage.getItem('user'));
    updateUser(user.id)
  })
  return (
    <div className="MainPage">
      <section data-testid='mainPage' className='main-recipe-section'>
        {/*Maybe look at having a prop passed down containing either recipes, loading message, or error message?*/}
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
