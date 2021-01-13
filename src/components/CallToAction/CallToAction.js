import './CallToAction.css';
import { Link } from 'react-router-dom';

const CallToAction = (props) => {
  return (
    <section className='CallToAction'>
      <h1 data-testid='componentTitle'>{props.title || "Looks like you aren't signed in yet!"}</h1>
      <p data-testid='prompt'> Sign in if you already have an account with us,
      or signing up is easy. Get started sharing recipes and helping
      folks today! </p>
      <div className='buttons'>
        <Link to='/signin'> <button data-testid='signinButton'> Sign In </button> </Link>
        <Link to='/signup'> <button data-testid='signupButton'> Sign Up </button> </Link>
      </div>
      <footer className="CallToAction-footer">
        <Link to='/'><button data-testid='homeButton'> Take Me Back </button></Link>
      </footer>
    </section>
  )
}

export default CallToAction
