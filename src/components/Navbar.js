import './Navbar.css';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';

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
        <div className="user-circle">
          <FaUser />
        </div>
      </nav>
    </header>
  );
}
