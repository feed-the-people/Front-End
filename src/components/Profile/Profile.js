import { useState } from 'react'
import './Profile.css'
import {Link} from 'react-router-dom'
import recipeBook from '../../icons/recipe-book-icon.svg'
import globalIcon from '../../icons/global.svg'
import { Image, CloudinaryContext } from 'cloudinary-react'
import Footer from '../Footer/Footer'

function Profile() {
  let storage = localStorage.getItem('user')
  let user = storage ? JSON.parse(storage) : null
  console.log(user)
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
          {/* <img data-testid='profileImg' src={user.photo}/> */}
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
      </section>
      <Footer
        path1='/recipebook'
        path2='/profilepage'
        label1="My Recipe Book"
        label2='My Profile'
        className='Profile-Footer'
      />
    </div>
  );
}

export default Profile;
