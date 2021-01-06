import './RecipeCard.css';
import { allRecipes, individualUserData, allNPOs } from '../../mockData.js'
import {Link} from 'react-router-dom'

//alrighty so based on the wireframe of the recipe cards we're gonna
//need a few more things other than just the recipe itself and the key.
//just gonna slap that in hardcoded for the start!

function RecipeCard() {
  return (
    <div className="RecipeCard">
      <section className='left-section'>
        <div className='leftHeader'>
          <h1 className='recipe-name'>{allRecipes[0].title}</h1>
          <h3 className='recipe-rating'>4.5</h3>
        </div>
        <div className='left-footer'>
          <h3 >NPO</h3>
          <h3>Give N' Get Recipe!</h3>
        </div>
      </section>
      <section className='right-section'>
        <h4>Tag Filter :</h4>
        <section className='star-rating'>
        </section>
        <p className='recipe-story'></p>
        <h4 className='tags'>Tags</h4>
        <h5 className='recipe-tags'>#this #is #where #tags #go</h5>
      </section>
    </div>
  );
}

export default RecipeCard;
