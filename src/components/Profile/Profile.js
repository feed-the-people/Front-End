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
        <h1>{`Welcome back ${user.firstName}! `}</h1>
        <h2>Your Information: </h2>
        <div className='whoYouAre'>
          <label>
            Your Name:
            <p>{user.firstName} {user.lastName}</p>
          </label>
          <label>
            Your Username:
            <p>{user.username}</p>
          </label>
          <img src={user.image}/>
        </div>
        <label>
          Your Email:
          <p>{user.email}</p>
        </label>
        <label>
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
