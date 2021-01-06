import './RecipeCard.css';
import { allRecipes, individualUserData, allNPOs } from '../../mockData.js'
import {Link} from 'react-router-dom'

//alrighty so based on the wireframe of the recipe cards we're gonna
//need a few more things other than just the recipe itself and the key.
//just gonna slap that in hardcoded for the start!

function RecipeCard() {
  return (
    <div className="RecipeCard">
      <section className='leftSection'>
        <div className='leftHeader'>
          <h1>Recipe Title</h1>
          <h3>Rating</h3>
        </div>
        <img alt='recipeImage'>
        <div className='leftFooter'>
          <h3>NPO</h3>
          <h3>Give N' Get Recipe!</h3>
        </div>
      </section>
      <section className='rightSection'>
        <h4>Tag Filter :</h4>
        <section className='starRating'>
          <img alt='theStarRatingImagesHere'>
        </section>
        <p className='recipeStory'></p>
        <h4>Tags</h4>
        <h5>#this #is #where #tags #go</h5>
      </section>
    </div>
  );
}

export default RecipeCard;
