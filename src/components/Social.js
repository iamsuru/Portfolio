import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import { Icon } from '@iconify/react';
import leetcodeIcon from '@iconify-icons/simple-icons/leetcode';
import { NavLink } from 'reactstrap';

function Social() {
  return (
    <div className='container'>
      <div className='row text-center'>
      <div className='col-sm-3'>
      <NavLink href='https://www.linkedin.com/in/iamsuru/' target='_blank'><FontAwesomeIcon icon={faLinkedin} className="fa-brands" /></NavLink>
      </div>
      <div className='col-sm-3'>
      <NavLink href='https://github.com/iamsuru/' target='_blank'><FontAwesomeIcon icon={faGithub} className="fa-brands" /></NavLink>
      </div>
      <div className='col-sm-3'>
      <NavLink href='https://www.instagram.com/i_amsuru07/' target='_blank'><FontAwesomeIcon icon={faInstagram} className="fa-brands" /></NavLink>
      </div>
      <div className='col-sm-3'>
      <NavLink href='https://leetcode.com/iamsuru/' target='_blank'><Icon icon={leetcodeIcon} className="iconify-icon" /></NavLink>
      </div>
      </div>
    </div>
  )
}

export default Social;
