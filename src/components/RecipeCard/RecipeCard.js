import './RecipeCard.css';
import { allRecipes, individualUserData, allNPOs } from '../../mockData.js'
import {Link} from 'react-router-dom'

function RecipeCard() {

  let displayRecipeName = () => {

  }

  return (
    <div className="RecipeCard">
      <section className='left-section'>
        <div className='leftHeader'>
          <h1 className='recipe-name'>{allRecipes[0].title}</h1>
          <h3 className='recipe-rating'>5</h3>
        </div>
        <img className='recipe-image' src={allRecipes[0].image} />
        <div className='left-footer'>
          <h3 className='nonprofit-name'>{allNPOs[0].name}</h3>
          <Link to='/'><button className='purchase-button'>Give N' Get Recipe!</button></Link>
        </div>
      </section>
      <section className='right-section'>
        <h4>Tag Filter :</h4>
        <section className='star-rating'>
        </section>
        <p className='recipe-story'>{allRecipes[0].description}</p>
        <h4 className='tags'>Tags</h4>
        <h5 className='recipe-tags'></h5>
      </section>
    </div>
  );
}

export default RecipeCard;
