import './CallToAction.css';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer'

const CallToAction = (props) => {
  return (
    <section className='CallToAction'>
      <div className='action-items'>
        <h1 data-testid='componentTitle'>{props.title || "Looks like you aren't signed in yet!"}</h1>
        <p className='prompt' data-testid='prompt'> Sign in if you already have an account with us,
        or signing up is easy. Get started sharing recipes and helping
        folks today! </p>
        <div className='buttons'>
          <Link to='/signin' className='options' data-testid='signinButton'> Sign In </Link>
          <Link to='/signup' className='options' data-testid='signupButton'> Sign Up </Link>
        </div>
      </div>
      <Footer
        path1='/'
        path2='/recipeBook'
        label1="Take Me Back"
        label2='My Recipe Book'
        className='Profile-Footer'
      />
    </section>
  )
}

export default CallToAction
