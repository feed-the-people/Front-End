import './RecipeCard.css';
import { allRecipes, individualUserData, allNPOs } from '../../mockData.js'
import {Link} from 'react-router-dom'

function RecipeCard(props) {

  return (
    <div className="RecipeCard">
      <section className='left-section'>
        <div className='leftHeader'>
          <h1 className='recipe-name' data-testid='recipeTitle'>{props.title}</h1>
          <h3 className='recipe-rating'>5</h3>
        </div>
        <img className='recipe-image' src={props.image} />
        <div className='left-footer'>
          <h3 className='nonprofit-name'>{props.charityName}</h3>
          <Link to='/'><button className='purchase-button'>Give N' Get Recipe!</button></Link>
        </div>
      </section>
      <section className='right-section'>
        <h4>Tag Filter :</h4>
        <section className='star-rating'>
        </section>
        <p className='recipe-story'>{props.description}</p>
        <h4 className='tags'>Tags</h4>
        <h5 className='recipe-tags'></h5>
      </section>
    </div>
  );
}

export default RecipeCard;
