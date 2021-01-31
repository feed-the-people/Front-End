import { Image} from 'cloudinary-react'
import './Profile.scss'
import Footer from '../Footer/Footer'

function Profile() {
  let storage = localStorage.getItem('user')
  let user = storage ? JSON.parse(storage) : null
  let signOut = () => {
    localStorage.clear()
    window.location.reload()
  }
  return (
    <div className="Profile">
      <section className='profileInfo'>
        <h1 data-testid='welcomeMessage'>{`Welcome Back ${user.firstName}! `}</h1>
        <div className='whoYouAre'>
          <label>
            <h3>Name: </h3>
            <p data-testid='name'>{user.firstName} {user.lastName}</p>
          </label>
          <br/>
          <label>
            <h3>Username:</h3>
            <p data-testid='username'>{user.username}</p>
          </label>
          <Image cloudName='dygnrpjv8' publicId={user.image} />
        </div>
        <label>
          <h3>Email:</h3>
          <p data-testid='email'>{user.email}</p>
        </label>
        <br/>
        <label data-testid='address'>
          <h3>Address:</h3>
          <p>{user.street}</p>
          <p>{user.city}, {user.state}</p>
          <p>{user.zip}</p>
        </label>
        <button className='sign-out-button' onClick={signOut}> Sign Out </button>
      </section>
      <Footer
        path1='/recipebook'
        path2='/'
        label1="My Recipe Book"
        label2='Take Me Back'
        className='Profile-Footer'
      />
    </div>
  );
}

export default Profile;
