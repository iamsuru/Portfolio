import React from 'react'
import Qualification from './Qualification'
import Certificate from '../data/Certificate'
import { NavLink } from 'reactstrap'
import Skills from './Skills'
function Resume() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-3 float-start'>
          <ul className='nav flex-column'>
            <li className='nav-item r-li'>
              <NavLink href=''>Education</NavLink>
            </li>
            <li className='nav-item r-li'>
              <NavLink href=''>Skills</NavLink>
            </li>
            <li className='nav-item r-li'>
              <NavLink href=''>Achievements</NavLink>
            </li>
          </ul>
        </div>
        

        <div className='col-md-9'>
          <h2 className='r-hd mt-4 mb-4'>Education</h2>
          <Qualification date={Certificate[0].date} certificate={Certificate[0].certificate} location={Certificate[0].location}/>
          <Qualification date={Certificate[1].date} certificate={Certificate[1].certificate} location={Certificate[1].location}/>
          <Qualification date={Certificate[2].date} certificate={Certificate[2].certificate} location={Certificate[2].location}/>
          <h2 className='r-hd mt-4 mb-4'>Skills</h2>
          <Skills/>
          <h2 className='r-hd mt-4 mb-4'>Achievements</h2>
        </div>
      </div>
    </div>
  )
}

export default Resume