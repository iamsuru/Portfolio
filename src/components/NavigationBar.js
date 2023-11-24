import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { NavbarBrand, Button } from 'reactstrap';

const NavigationBar = () => {
  return (
    <nav className="navbar fixed-top navbar-expand-md nav-bg">
      <div className='container'>
        <NavbarBrand href="/"><h3 className='brand-name'><span className='brand-name-start'>S</span>uryansh</h3></NavbarBrand>
        <Button className='navbar-toggler' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
          <span className="navbar-toggler-icon"></span>
        </Button>
        <div className='collapse navbar-collapse justify-content-end' id='navbarSupportedContent'>
          <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to='#home' className='nav_links'>Homeee</Link>
            </li>
            <li className="nav-item">
              <Link to='#about' className='nav_links'>About</Link>
            </li>
            <li className="nav-item">
              <Link to='#resume' className='nav_links'>Resume</Link>
            </li>
            <li className="nav-item">
              <Link to='#projects' className='nav_links'>Projects</Link>
            </li>
            <li className="nav-item">
              <Link to='#contact' className='nav_links'>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
