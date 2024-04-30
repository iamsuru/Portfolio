import React from 'react';
import image from '../images/profile2.png'

const Image = () => {
  return (
    <img src={image} className='float-end img-fluid profile-image' alt='Profileimage' />
  )
}

function Profile() {
  return (
    <div className='container'>
      <div className='row'>

        {/* image div */}
        <div className='col-md-6'>
          <Image />
        </div>

        {/* about div */}

        <div className='col-md-6'>
          <h2 className='mb-4 mt-5 profile-h2'>About Me</h2>
          <p className='mb-4 profile-p'>Proactive computer science student with a strong foundation in programming languages, algorithms, and data structures, seeking opportunities to apply theoretical knowledge to real-world projects.</p>

          <ul className='about-info mt-4 mb-5 px-md-0 px-2 list-unstyled profile-ul'>
            <li><span className='profile-tq'>Name:</span><span className='profile-ta'>Suryansh Shrivastava</span></li>
            <li><span className='profile-tq'>Date of birth:</span><span className='profile-ta'>November 7,2000</span></li>
            <li><span className='profile-tq'>Address:</span><span className='profile-ta'>Gotegaon,MP,India</span></li>
            <li><span className='profile-tq'>Zip Code</span><span className='profile-ta'>487118</span></li>
            <li><span className='profile-tq'>Email:</span><span className='profile-ta'>iamsuru07@gmail.com</span></li>
            <li><span className='profile-tq'>Phone:</span><span className='profile-ta'>+919589661210</span></li>
          </ul>
          <a className='adv-anch' href='https://drive.google.com/file/d/1iH0v3_cAo__EyrMg6tlIQPKls9uCXdsO/view?usp=sharing' rel="noopener noreferrer" target='_blank'>DOWNLOAD CV</a>
        </div>
      </div>
    </div>
  );
}

export { Profile, Image };
