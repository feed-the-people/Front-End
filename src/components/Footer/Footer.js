import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = (props) => {
  return (
    <footer data-testid='footer' className='Footer'>
      <Link className='logo' to='/'>Feed The People</Link>
      <nav>
        <Link className='nav' to={props.path1}> {props.label1} </Link>
        <Link className='nav' to={props.path2}> {props.label2} </Link>
      </nav>
    </footer>
  )
}

export default Footer
