import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = (props) => {
  return (
    <footer className='Footer'>
      <Link className='logo' to='/'>Feed The People</Link>
      <nav>
        <Link to={props.path1}> {props.label1} </Link>
        <Link to={props.path2}> {props.label2} </Link>
      </nav>
    </footer>
  )
}

export default Footer
