import './SignInPage.css'
import {Link} from 'react-router-dom'

function SignInPage() {
  return (
    <div className="SignInPage">
      <form>
        <label>
          email
          <input type='email'/>
        </label>
        <label>
          password
          <input type='password'/>
        </label>
        <button> Submit </button>
      </form>
      <footer className="SignInPage-footer">
        <Link to='/'><button> Take Me Back </button></Link>
      </footer>
    </div>
  );
}

export default SignInPage;
