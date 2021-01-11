import './RecipeBook.css';
import profile from '../../icons/user-icon.svg';
import home from '../../icons/global.svg';
import { Link } from 'react-router-dom';
import { allRecipes } from '../../mockData.js';
import RecipeCard from '../RecipeCard/RecipeCard';
import CallToAction from '../CallToAction/CallToAction.js';

function RecipeBook(props) {
  //will ordinarily map over props being passed in, but in this case taking the direct import
  let myUploadedRecipes, myPurchasedRecipes;
  if (props.userRecipes){
    myUploadedRecipes = allRecipes.map((recipe, index)=> {
      return (
        <RecipeCard recipe={recipe} key={index}/>
      )
    })
    myPurchasedRecipes = allRecipes.map((recipe, index)=> {
      return (
        <RecipeCard recipe={recipe} key={index}/>
      )
    })
  }
  if (!props.loggedIn) {
    return <CallToAction title='You need to be signed in to have a recipe book...' />
  } else {
    return (
      <div className="RecipeBook">
        <header className="RecipeBook-sidebar">
          <Link to='/profilepage'><img src={profile} alt='navigate to user profile page' data-testid='profileLinkIcon'/></Link>
          <Link to='/'><img src={home} alt='navigate to main page' data-testid='homeLinkIcon'/></Link>
        </header>
        <section className='my-recipe-section' data-testid='myRecipes'>
          <h1>Recipes you have uploaded: </h1>
          <Link to='/recipeform'><button data-testid='uploadRecipeButton'>Upload another recipe</button></Link>
          {myUploadedRecipes || <h4 data-testid='uploadedError'>You haven't uploaded any recipes</h4>}
        </section>
        <section className='purchased-recipe-section' data-testid='purchasedRecipes'>
          <h1>Recipes you have purchased: </h1>
          {myPurchasedRecipes || <h4 data-testid='purchasedError'>You haven't purchased any recipes</h4>}
        </section>
      </div>
    );
  }
}

export default RecipeBook;
