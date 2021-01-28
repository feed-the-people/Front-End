import './RecipeCard.scss';
import {Link} from 'react-router-dom'
import { getUser } from '../../APICalls.js'
import { Component, Redirect } from 'react';

 let RecipeCard = (props) => {
  //This whole card needs a thorough comb over and I think we could be performing
  //way less logic and actually just look at dynamic props

  let route = `/recipepage/${props.id}`
  let user = JSON.parse(localStorage.getItem('user'));
  let buttonText, rating;

  if(user && user.userRecipes.find(recipe => recipe.recipeId == props.id)){
    buttonText = 'Already Donated'
  } else if (user && props.userId === user.id) {
    buttonText = 'Your recipe'
  } else {
    buttonText = "Give N' Get Recipe"
  }

  if (props.rating !== null) {
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
          <p className='donation-blurb' >Donations go to: </p>
        </section>
        <h3 className='nonprofit-name' data-testid='NPO'>{props.charityName}</h3>
        <div className='right-footer'>
          <Link to={route} className='purchase-button'>{buttonText}</Link>
        </div>
      </section>
    </div>
  );
}

export default RecipeCard;
