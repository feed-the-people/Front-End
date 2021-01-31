import './RecipeCard.scss';
import {Link} from 'react-router-dom'
import { getUser } from '../../APICalls.js'
import { Component, Redirect } from 'react';
import StarRatingComponent from 'react-star-rating-component';
import Image from 'cloudinary-react'

 let RecipeCard = (props) => {
  //This whole card needs a thorough comb over and I think we could be performing
  //way less logic and actually just look at dynamic props
  let route = `/recipepage/${props.id}`
  let user = JSON.parse(localStorage.getItem('user'));
  let buttonText;

  if(user && user.userRecipes.find(recipe => recipe.recipeId === props.id)){
    buttonText = 'Already Donated'
  } else if (user && props.userId === user.id) {
    buttonText = 'Your recipe'
  } else {
    buttonText = "Give N' Get Recipe"
  }
  let charityName
  if (props.charityName.split(' ').length > 1) {
    charityName = props.charityName.toLowerCase()
    charityName = charityName.split(' ')
    charityName = charityName.map(word => {
      let letters = word.split('')
      letters[0] = letters[0].toUpperCase();
      return letters.join('')
    })
    charityName = charityName.join(' ')
  } else {
    charityName = props.charityName
  }

  return (
    <section className="RecipeCard">
      <header className='RecipeCard-header'>
        <h1 className='RecipeCard-title' data-testid='recipe-title'>{props.title}</h1>
        <StarRatingComponent
        className='RecipeCard-rating'
        data-testid="recipe-rating"
        name={'average-rating'} /* name of the radio input, it is required */
        value={5} /* number of selected icon (`0` - none, `1` - first) */
        starCount={props.rating} /* number of icons in rating, default `5` */
        starColor={'#f4c144'} /* color of selected icons, default `#ffb400` */
        emptyStarColor={'#fefaec'} /* color of non-selected icons, default `#333` */
        editing={false} /* is component available for editing, default `true` */
        />
      </header>
      <section className='bottom-section'>
        <Link to={route} className='image-link'>
          <img className='RecipeCard-image' data-testid='recipe-image' src={props.image} />
          {/* <Image className='RecipeCard-image' data-testid='recipe-image' cloudName='dygnrpjv8' publicId={props.image} /> */}
        </Link>
        <h3 className='nonprofit-name' data-testid='NPO'>{'Donations go to: ' + charityName}</h3>
        <p className='RecipeCard-story' data-testid='recipe-story'>{props.description}</p>
      </section>
      <footer className='RecipeCard-footer'>
        <Link to={route} className='full-view-button' data-testid='recipe-button'>{buttonText}</Link>
      </footer>
    </section>
  );
}

export default RecipeCard;
