import './Navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Books</Link>
          </li>
          <li>
            <Link to="/categories">Categories</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
