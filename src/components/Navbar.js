import { NavLink } from 'react-router-dom';
import logo from '../images/logo.png';

const Navbar = () => (
  <nav>
    <div>
      <img src={logo} height="50" alt="Logo" />
      <p>Space Travelers&apos; Hub</p>
    </div>
    <ul>
      <li>
        <NavLink to="/rockets">Rockets</NavLink>
      </li>
      <li>
        <NavLink to="/missions">Missions</NavLink>
      </li>
      <li>
        <NavLink to="/profile">My Profile</NavLink>
      </li>
    </ul>
  </nav>
);

export default Navbar;
