import './RecipeCard.css';
import { allRecipes, individualUserData, allNPOs } from '../../mockData.js'
import {Link} from 'react-router-dom'

function RecipeCard(props) {
  let route = `/recipepage/${props.id}`
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
        </section>
          <h3 className='recipe-rating' data-testid='recipeRating'>5</h3>
        <h3 className='nonprofit-name' data-testid='NPO'>{props.charityName}</h3>
        <Link to={route}><button className='purchase-button'>Give N' Get Recipe!</button></Link>
        <h5 className='recipe-tags' data-testid='recipeTags'></h5>
        <div className='right-footer'>
          <p className='recipe-story' data-testid='recipeStory'>{props.description}</p>
        </div>
      </section>
    </div>
  );
}

export default RecipeCard;
