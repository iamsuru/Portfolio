import React, { useState } from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink } from 'reactstrap';


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Navbar expand="md" className='fixed-top'>
      <NavbarBrand href="/"><h3 className='brand-name'><span className='brand-name-start'>S</span>uryansh</h3></NavbarBrand>
      <NavbarToggler onClick={toggleNavbar} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink className='nav_links' href="/" >Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className='nav_links' href="/about" >About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className='nav_links' href="/services" >Resume</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className='nav_links' href="/contact" >Projects</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className='nav_links' href="/contact" >Contact</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
