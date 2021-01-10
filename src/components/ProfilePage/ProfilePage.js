import Profile from '../Profile/Profile.js'
import CallToAction from '../CallToAction/CallToAction.js'
import './ProfilePage.css'
import {Link} from 'react-router-dom'

const ProfilePage = (props) => {
  return (
    <div className="ProfilePage">
      {props.signedIn ? <Profile /> : <CallToAction />}
    </div>
  );
}

export default ProfilePage;
