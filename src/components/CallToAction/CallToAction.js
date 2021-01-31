import './CallToAction.scss';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer'
//Let's add in a prop type here

const CallToAction = (props) => {
  return (
    <section className='CallToAction'>
      <div className='action-items'>
        <h1 data-testid='componentTitle'>{props.title || "Looks like you aren't signed in yet!"}</h1>
        {/*should a componet pass in a title it will render, otherwise the default message should*/}
        <p className='prompt' data-testid='prompt'> Sign in if you already have an account with us,
        or signing up is easy. Get started sharing recipes and helping
        folks today! </p>
        <div data-testid='navButtons' className='buttons'>
        {/*Presumably Links are best practice vs a button with a state change on a redirect, but I am not sure*/}
          <Link to='/signin' className='options' > Sign In </Link>
          <Link to='/signup' className='options' > Sign Up </Link>
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
