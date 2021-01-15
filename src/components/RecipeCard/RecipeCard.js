import './RecipeCard.css';
import { allRecipes, individualUserData, allNPOs } from '../../mockData.js'
import {Link} from 'react-router-dom'

function RecipeCard(props) {
  let route = `/recipepage/${props.id}`
  console.log(props);

  let rating;
  if (props.rating != null) {
    rating = props.rating + " out of 5";
  } else {
    rating = "Not yet rated";
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
          <p className='donation-blurb' >Donations to for {props.title} go to: </p>
        </section>
        <h3 className='nonprofit-name' data-testid='NPO'>{props.charityName}</h3>
        <div className='right-footer'>
          <Link to={route} className='purchase-button'>Give N' Get Recipe!</Link>
        </div>
      </section>
    </div>
  );
}

export default RecipeCard;
