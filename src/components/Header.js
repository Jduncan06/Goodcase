import { useState, useEffect } from "react";
import { Navbar, Collapse, NavbarToggler, Nav, NavItem } from "reactstrap";
import { HashLink as NavLink } from "react-router-hash-link";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 756);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 756);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Navbar
      className="navbar-dark"
      fixed="top"
      expand="md"
      style={{ zIndex: 5, background: isDesktop ? "transparent" : undefined }}
    >
      <NavbarToggler
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          position: 'absolute',
          top: isDesktop ? undefined : "20px",
          left: isDesktop ? undefined : "20px", // Set to left on mobile
          background: !isDesktop ? "rgba(0, 0, 0, 0.5)" : undefined,
          padding: !isDesktop ? "10px" : undefined,
          borderRadius: !isDesktop ? "5px" : undefined,
          zIndex: 1000
        }}
      />
      <Collapse isOpen={menuOpen} navbar style={ isDesktop ?{
        height: "60px",
      }:{}}>
        <Nav
          className="ms-auto"
          navbar
          style={{
            position: !isDesktop ? "fixed" : undefined,
            top: !isDesktop ? 0 : undefined,
            left: !isDesktop ? 0 : undefined,
            width: !isDesktop ? "100%" : undefined,
            height: !isDesktop ? "100%" : undefined,
            background: !isDesktop ? "rgba(0, 0, 0, 0.8)" : undefined,
            display: !isDesktop ? "flex" : undefined,
            flexDirection: !isDesktop ? "column" : undefined,
            justifyContent: !isDesktop ? "center" : undefined,
            alignItems: "center",
            zIndex: !isDesktop ? 999 : undefined
          }}
        >
          <NavItem>
            <NavLink
              className="nav-link"
              to="/#Shows"
              onClick={() => setMenuOpen(!menuOpen)}
              style={{ color: "white", fontSize: "24px", margin: "20px 0" }}
            >
              Shows
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className="nav-link"
              to="/#About"
              onClick={() => setMenuOpen(!menuOpen)}
              style={{ color: "white", fontSize: "24px", margin: "20px 0" }}
            >
              About
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className="nav-link"
              to="/#Contact"
              onClick={() => setMenuOpen(!menuOpen)}
              style={{ color: "white", fontSize: "24px", margin: "20px 0" }}
            >
              Contact
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className="nav-link"
              to="/#Video"
              onClick={() => setMenuOpen(!menuOpen)}
              style={{ color: "white", fontSize: "24px", margin: "20px 0" }}
            >
              Special
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
