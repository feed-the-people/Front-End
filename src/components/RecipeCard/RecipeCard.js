import './RecipeCard.css';
import {Link} from 'react-router-dom'
import { getUser } from '../../APICalls.js'

function RecipeCard(props) {
  let route = `/recipepage/${props.id}`

  let user = JSON.parse(localStorage.getItem('user'));
  if (!user) user = { userRecipes: [] }

  async function updateUser() {
    let response = await getUser(user.id)
    // localStorage.setItem('user', JSON.stringify(response.getInfo))
  }

  let rating;
  if (props.rating != null) {
    rating = props.rating + " out of 5";
  } else {
    rating = "Not yet rated";
  }

  function alreadyOwned(id) {
    for (var i = 0; i < user.userRecipes.length; i++) {
      if (+user.userRecipes[i].recipeId === +id) {
        return true
      }
    }
    return false
  }

  let button;
  if (alreadyOwned(props.recipeId)) {
     button = <div className='right-footer'>
                Already Purchased
              </div>
  } else if (user.id === props.userId) {
    button = <div className='right-footer'>
              Your Recipe
             </div>
  } else {
    button = <div className='right-footer' onClick={updateUser()}>
              <Link to={route} className='purchase-button'>Give N' Get Recipe!</Link>
             </div>
  }
  return (
    <div className="RecipeCard">
      <section className='left-section'>
        <div className='leftHeader'>
          <h1 className='recipe-name' data-testid='recipeTitle'>{props.title}</h1>
        </div>
        <img className='recipe-image' data-testid='image' src={props.image} />
      </section>
      <section className='right-section'>
        <section className='star-rating'>
          <h3 className='recipe-rating' data-testid='recipeRating'>{rating}</h3>
        </section>
        <section className='details'>
          <p className='recipe-story' data-testid='recipeStory'>{props.description}</p>
          <p className='donation-blurb' >Donations go to: </p>
        </section>
        <h3 className='nonprofit-name' data-testid='NPO'>{props.charityName}</h3>
        { button }
      </section>
    </div>
  );
}

export default RecipeCard;
