import { useState } from 'react'
import './Profile.css'
import {Link} from 'react-router-dom'
import recipeBook from '../../icons/recipe-book-icon.svg'
import globalIcon from '../../icons/global.svg'
import ImageUploader from 'react-images-upload'

function Profile() {
  let storage = localStorage.getItem('user')
  let user = storage ? JSON.parse(storage) : null
  console.log(user.image)
  const [pictures, setPictures] = useState([]);
  const onDrop = picture => {
    setPictures([...pictures, picture]);
  };

  return (
    <div className="Profile">
      <header className="Profile-sidebar">
        <Link to='/'><img src={globalIcon} alt='navigate to global feed'/></Link>
        <Link to='/recipebook'><img src={recipeBook} alt='navigate to user recipe book'/></Link>
      </header>
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
          <img src={user.image} alt='the users chosen avatar' />
          <ImageUploader
            withIcon={true}
            buttonText='Choose images'
            onChange={onDrop}
            imgExtension={['.jpg', '.gif', '.png', '.gif']}
            maxFileSize={5242880}
          />
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
