import './RecipeCard.css';
import { allRecipes, individualUserData, allNPOs } from '../../mockData.js'
import {Link} from 'react-router-dom'

function RecipeCard(props) {

  return (
    <div className="RecipeCard">
      <section className='left-section'>
        <div className='leftHeader'>
          <h1 className='recipe-name' data-testid='recipeTitle'>{props.title}</h1>
          <h3 className='recipe-rating' data-testid='recipeRating'>5</h3>
        </div>
        <img className='recipe-image' data-testid='image' src={allRecipes[1].image} />
        <div className='left-footer'>
          <h3 className='nonprofit-name' data-testid='NPO'>{props.charityName}</h3>
          <Link to='/'><button className='purchase-button'>Give N' Get Recipe!</button></Link>
        </div>
      </section>
      <section className='right-section'>
        <h4>Tag Filter :</h4>
        <section className='star-rating'>
        </section>
        <p className='recipe-story' data-testid='recipeStory'>{props.description}</p>
        <h4 className='tags' >Tags</h4>
        <h5 className='recipe-tags' data-testid='recipeTags'></h5>
      </section>
    </div>
  );
}

export default RecipeCard;
