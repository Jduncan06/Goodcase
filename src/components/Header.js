import { useState } from "react";
import {
  Navbar,
  Collapse,
  NavbarToggler,
  Nav,
  NavItem,
  NavbarBrand,
} from "reactstrap";
import { HashLink as NavLink } from "react-router-hash-link";
import fullLogo from "../app/assets/img/fullLogo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <Navbar className="navbar-dark" fixed="top" z-index="5" expand="md">
      <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
      <Collapse isOpen={menuOpen} navbar>
        <Nav sticky="top" className="ms-auto" navbar>
          <NavItem>
            <NavLink
              className="nav-link"
              to="/#Shows"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              Shows
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className="nav-link"
              to="/#About"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              About
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className="nav-link"
              to="/#Vent"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              Vent!
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className="nav-link"
              to="/#Contact"
              onClick={() => setMenuOpen(!menuOpen)}
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
