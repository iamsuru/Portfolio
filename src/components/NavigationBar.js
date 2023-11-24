import React from 'react';
import { NavbarBrand,NavLink, Button } from 'reactstrap';
const NavigationBar = () => {
  return (
    <nav className="navbar fixed-top bg-white navbar-expand-md">
      <div className='container'>
        <NavbarBrand href="/"><h3 className='brand-name'><span className='brand-name-start'>S</span>uryansh</h3></NavbarBrand>
        <Button className='navbar-toggler' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
        <span className="navbar-toggler-icon"></span>
        </Button>
        <div className='collapse navbar-collapse justify-content-end' id='navbarSupportedContent'>
          <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav_links" aria-current="page" href="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className='nav_links' href="/about" >About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className='nav_links' href="/services" >Resume</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className='nav_links' href="/projects" >Projects</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className='nav_links' href="/contact" >Contact Me</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
