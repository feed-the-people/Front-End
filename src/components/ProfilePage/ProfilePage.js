import Profile from '../Profile/Profile.js'
import CallToAction from '../CallToAction/CallToAction.js'
import './ProfilePage.css'

const ProfilePage = (props) => {
  let user = JSON.parse(localStorage.getItem('user'))
  return (
    <div className="ProfilePage">
      {user ? <Profile /> : <CallToAction />}
    </div>
  );
}

export default ProfilePage;
