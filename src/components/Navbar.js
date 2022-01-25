import './Navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header>
      <nav>
        <h1>Bookstore CMS</h1>
        <ul className="nav-links">
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
