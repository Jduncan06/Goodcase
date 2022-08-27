import { useState } from "react";
import{Navbar, NavbarBrand, Collapse, NavbarToggler, Nav, NavItem} from 'reactstrap';
import vSpeechBubble from '../app/assets/img/vSpeechBubble.png'
import { HashLink as NavLink } from 'react-router-hash-link';

const Header = () =>{
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <Navbar className="navbar-dark" z-index='5' expand='md'>
               
                    <NavbarBrand href='/'>
                    <img src={vSpeechBubble} width='30' height='30' alt="favicon" />                    
                    </NavbarBrand>
                    <NavbarToggler onClick={() => setMenuOpen(!menuOpen)}/>
                    <Collapse isOpen={menuOpen} navbar>
                        <Nav className='ms-auto' navbar>
                            <NavItem>
                                <NavLink className='nav-link' to='/#About'>
                                    About
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='nav-link' to='/#Shows'>
                                    Shows
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='nav-link' to='/#Vent'>
                                    Vent!
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='nav-link' to='/#Contact'>
                                    Contact
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
            
            </Navbar>
    );
};

export default Header;