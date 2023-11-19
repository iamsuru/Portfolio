import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import { Icon } from '@iconify/react';
import leetcodeIcon from '@iconify-icons/simple-icons/leetcode';

function Social() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6 d-flex justify-content-center">
          <div className='icon-container d-flex flex-wrap justify-content-center align-items-center'>
            <a href='https://www.linkedin.com/in/iamsuru/' target='_blank'><FontAwesomeIcon icon={faLinkedin} className="fa-brands" /></a>
            <a href='https://github.com/iamsuru/' target='_blank'><FontAwesomeIcon icon={faGithub} className="fa-brands" /></a>
            <a href='https://www.instagram.com/i_amsuru07/' target='_blank'><FontAwesomeIcon icon={faInstagram} className="fa-brands" /></a>
            <a href='https://leetcode.com/iamsuru/' target='_blank'><Icon icon={leetcodeIcon} className="iconify-icon" /></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Social;
