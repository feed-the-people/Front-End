import './Profile.css'
import {Link} from 'react-router-dom'
import recipeBook from '../../icons/recipe-book-icon.svg'
import globalIcon from '../../icons/global.svg'
import Footer from '../Footer/Footer'

function Profile() {
  let storage = localStorage.getItem('user')
  let user = storage ? JSON.parse(storage) : null
  return (
    <div className="Profile">
      <section className='profileInfo'>
        <h1 data-testid='welcomeMessage'>{`Welcome back ${user.firstName}! `}</h1>
        <h2>Your Information: </h2>
        <div className='whoYouAre'>
          <label>
            Your Name:
            <p data-testid='name'>{user.firstName} {user.lastName}</p>
          </label>
          <label>
            Your Username:
            <p data-testid='username'>{user.username}</p>
          </label>
          <img data-testid='profileImg' src={user.image}/>
        </div>
        <label>
          Your Email:
          <p data-testid='email'>{user.email}</p>
        </label>
        <label data-testid='address'>
          Your address:
          <p>{user.street}</p>
          <p>{user.city}, {user.state}</p>
          <p>{user.zip}</p>
        </label>
      </section>
      <Footer
        path1='/'
        path2='/recipeBook'
        label1="Everyone's Recipes"
        label2='My Recipe Book'
        className='Profile-Footer'
      />
    </div>
  );
}

export default Profile;
