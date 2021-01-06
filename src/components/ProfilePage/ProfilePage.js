import Profile from '../Profile/Profile.js'
import {Link} from 'react-router-dom'

const ProfilePage = (props) => {
  const switchBoard = (
      <section>
        <h1>Looks like you aren't sign in yet!</h1>
        <p> Sign in if you already have an acount with us,
        or signing up is easy. Get started sharing recipes and helping
        folks today! </p>
        <Link to='/signin'> <button> Sign In </button> </Link>
        <Link to='/signup'> <button> Sign Up </button> </Link>
      </section>
    )
  return (
    <div className="ProfilePage">
      <header className="ProfilePage-header">
      </header>
      {props.signedIn ? <Profile /> : switchBoard}
    </div>
  );
}

export default ProfilePage;
