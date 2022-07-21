import { NavLink } from 'react-router-dom';
import { Nav, Navbar, Container } from 'react-bootstrap';
import logo from '../images/logo.png';

const brandStyle = {
  display: 'flex',
};

const NavBar = () => (
  <Navbar bg="light" variant="light" className="justify-content-between">
    <Container fluid>
      <Navbar.Brand style={brandStyle}>
        <img src={logo} height="50" alt="Logo" className="me-3" />
        <NavLink to="/" style={{ textDecoration: 'none' }}>
          Space Travelers Hub
        </NavLink>
      </Navbar.Brand>
      <Nav>
        <Nav.Link>
          <NavLink
            className="navLink"
            to="/rockets"
            style={{ textDecoration: 'none' }}
          >
            Rockets
          </NavLink>
        </Nav.Link>

        <Nav.Link>
          <NavLink
            className="navLink"
            to="/missions"
            style={{ textDecoration: 'none' }}
          >
            Missions
          </NavLink>
        </Nav.Link>
        <Nav.Link>
          <NavLink
            className="navLink"
            to="/profile"
            style={{ textDecoration: 'none' }}
          >
            My Profile
          </NavLink>
        </Nav.Link>
      </Nav>
    </Container>
  </Navbar>
);

export default NavBar;
