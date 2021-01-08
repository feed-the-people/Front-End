import Profile from '../Profile/Profile.js'
import './ProfilePage.css'
import {Link} from 'react-router-dom'

const ProfilePage = (props) => {
  const callToAction = (
      <section className ='callToAction'>
        <h1>Looks like you aren't signed in yet!</h1>
        <p> Sign in if you already have an acount with us,
        or signing up is easy. Get started sharing recipes and helping
        folks today! </p>
        <div className='buttons'>
          <Link to='/signin'> <button> Sign In </button> </Link>
          <Link to='/signup'> <button> Sign Up </button> </Link>
        </div>
        <footer className="callToAction-footer">
          <Link to='/'><button> Take Me Back </button></Link>
        </footer>
      </section>
    )
  return (
    <div className="ProfilePage">
      {props.signedIn ? <Profile /> : callToAction}
    </div>
  );
}

export default ProfilePage;
