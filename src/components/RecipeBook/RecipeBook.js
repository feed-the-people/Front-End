import './RecipeBook.css';
import profile from '../../icons/user-icon.svg'
import home from '../../icons/global.svg'
import {Link} from 'react-router-dom'
import RecipeCard from '../RecipeCard/RecipeCard'
import CallToAction from '../CallToAction/CallToAction.js'
import { getUserWithRecipes } from '../../APICalls.js'

let RecipeBook = (props) => {
  let user = JSON.parse(localStorage.getItem('user'))
  let userRecipes, userBoughtRecipes
  // let getUserInfo = async (id) => {
  //   let userRecipes = await getUserWithRecipes(id)
  //   let userBoughtRecipes = await boughtRecipesByUser(id)
  //   if(userRecipes.recipes.length){
  //     userRecipes.recipes.map((recipe, index) => {
  //       return (
  //         <RecipeCard
  //           key={index}
  //           image={recipe.image}
  //           title={recipe.title}
  //           charityName={recipe.charityName}
  //           description={recipe.description}
  //           />
  //       )
  //     })
  //   }
  //   if(userBoughtRecipes.length){
  //     userBoughtRecipes.map((recipe, index) => {
  //       return (
  //         <RecipeCard
  //           key={index}
  //           image={recipe.image}
  //           title={recipe.title}
  //           charityName={recipe.charityName}
  //           description={recipe.description}
  //           />
  //       )
  //     })
  //   }
  //   return [userRecipes, userBoughtRecipes]
  // }
  let allRecipes;
  // let allRecipes = getUserInfo(user.id)
  // console.log(allRecipes[0])

  getUserWithRecipes(user.id)

  if (!user) {
    return <CallToAction title='You need to be signed in to have a recipe book...' />
  } else {
    return (
      <div className="RecipeBook">
        <header className="RecipeBook-sidebar">
          <Link to='/profilepage'><img src={profile} alt='navigate to user profile page'/></Link>
          <Link to='/'><img src={home} alt='navigate to main page'/></Link>
        </header>
        <section className='my-recipe-section'>
          <h1>Recipes you have uploaded: </h1>
          <Link to='/recipeform'><button>Upload another recipe</button></Link>
          {allRecipes || <h4>You haven't uploaded any recipes</h4>}
          </section>
          <section className='purchased-recipe-section'>
          <h1>Recipes you have purchased: </h1>
          {allRecipes || <h4>You haven't purchased any recipes</h4>}
        </section>
      </div>
    );
  }
}

export default RecipeBook;
