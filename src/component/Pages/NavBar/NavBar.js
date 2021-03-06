import { Link } from 'react-router-dom';
import '../../styles/NavBar.css';

const NavBar = () => (
  <>
    <div className="nav">
      <Link className="h1" to="/">
        <h1>Math Magicians</h1>
      </Link>
      <Link className="links" to="/">
        Home
      </Link>
      <Link className="links" to="/Calculator">
        Calculator
      </Link>
      <Link className="links" to="/Quotes">
        Quotes
      </Link>
    </div>
  </>
);

export default NavBar;
