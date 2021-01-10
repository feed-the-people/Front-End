import './Profile.css'

function Profile() {
  let user = JSON.parse(localStorage.getItem('user'))
  console.log(user)
  return (
    <div className="Profile">
      <h1>{`Welcome back ${user.firstName}! `}</h1>
      <section className='profileInfo'>
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
    </div>
  );
}

export default Profile;
