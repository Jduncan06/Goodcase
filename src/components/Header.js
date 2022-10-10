import { useState } from "react";
import { Navbar, Collapse, NavbarToggler, Nav, NavItem } from "reactstrap";
import { HashLink as NavLink } from "react-router-hash-link";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <Navbar className="navbar-dark" fixed="top" z-index="5" expand="md" >
      <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
      <Collapse isOpen={menuOpen} navbar>
        <Nav sticky="top" className="ms-auto" navbar>
          <NavItem>
            <NavLink
              className="nav-link"
              to="/#Shows"
              onClick={() => setMenuOpen(!menuOpen)}
              style={{color: '#F16A74' }}
              
            >
              Shows
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className="nav-link"
              to="/#About"
              onClick={() => setMenuOpen(!menuOpen)}
              style={{color: '#F16A74'}}
            >
              About
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className="nav-link"
              to="/#Vent"
              onClick={() => setMenuOpen(!menuOpen)}
              style={{color: '#F16A74'}}
            >
              Vent!
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className="nav-link"
              to="/#Contact"
              onClick={() => setMenuOpen(!menuOpen)}
              style={{color: '#F16A74'}}
            >
              Contact
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
