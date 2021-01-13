import Profile from '../Profile/Profile.js'
import CallToAction from '../CallToAction/CallToAction.js'
import './ProfilePage.css'

const ProfilePage = (props) => {
  let storage = localStorage.getItem('user')
  let user = storage ? JSON.parse(storage) : null
  return (
    <div data-testid='profilePage' className="ProfilePage">
      {user ? <Profile /> : <CallToAction />}
    </div>
  );
}

export default ProfilePage;
