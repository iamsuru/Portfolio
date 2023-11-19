import React from 'react';
import image from '../images/profile.png';

function Profile() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className='overlay'></div>
          <div className="profile-image-container" style={{ backgroundImage: `url(${image})`, height: '100vh', width: '100%', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        </div>
        <div className="col-md-6">
          <h1 className='big'>About Me</h1>
          <p>Proactive computer science student with a strong foundation in programming languages, algorithms, and data structures, seeking opportunities to apply theoretical knowledge to real-world projects.</p>
          <ul>
            <li className='d-flex'><span>Name:</span> <span>Suryansh Shrivastava</span></li>
            <li className='d-flex'><span>Date of birth:</span> <span>November 07, 2000</span></li>
            <li className='d-flex'><span>Address:</span> <span>Gotegaon, Madhya Pradesh, India</span></li>
            <li className='d-flex'><span>Zip Code:</span> <span>487118</span></li>
            <li className='d-flex'><span>Email:</span> <span>iamsuru07@gmail.com</span></li>
            <li className='d-flex'><span>Phone:</span> <span>+91 9589661210</span></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Profile;
