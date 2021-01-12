import './Profile.css'
import {Link} from 'react-router-dom'
import recipeBook from '../../icons/recipe-book-icon.svg'
import globalIcon from '../../icons/global.svg'

function Profile() {
  let user = JSON.parse(localStorage.getItem('user'))
  console.log(user)
  return (
    <div className="Profile">
      <header className="Profile-sidebar">
        <Link to='/'><img src={globalIcon} alt='navigate to global feed' data-testid='homeButton'/></Link>
        <Link to='/recipebook'><img src={recipeBook} alt='navigate to user recipe book' data-testid='recipeBookButton'/></Link>
      </header>
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
    </div>
  );
}

export default Profile;
