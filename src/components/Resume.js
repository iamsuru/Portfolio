import React from 'react'
import Qualification from './Qualification'
import Certificate from '../data/Certificate'
import { NavLink } from 'reactstrap'
import Skills from './Skills'
import Achievements from './Achievements'
function Resume() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-3 float-start mt-5'>
          <ul className='nav flex-column'>
            <li className='nav-item r-li'>
              <NavLink className='r-nav-li' href=''>Education</NavLink>
            </li>
            <li className='nav-item r-li'>
              <NavLink className='r-nav-li' href=''>Skills</NavLink>
            </li>
            <li className='nav-item r-li'>
              <NavLink className='r-nav-li' href=''>Achievements</NavLink>
            </li>
          </ul>
        </div>


        <div className='col-md-9'>
          <h2 className='r-hd mt-4 mb-4'>Education</h2>
          <Qualification date={Certificate[0].date} certificate={Certificate[0].certificate} location={Certificate[0].location} />
          <Qualification date={Certificate[1].date} certificate={Certificate[1].certificate} location={Certificate[1].location} />
          <Qualification date={Certificate[2].date} certificate={Certificate[2].certificate} location={Certificate[2].location} />
          <h2 className='r-hd mt-4 mb-4'>Skills</h2>
          <Skills />
          <h2 className='r-hd mt-4 mb-4'>Achievements</h2>
          <Achievements year='2022' title='Smart India Hackathon' medium='Government Of India' />
          <Achievements year='2022' title='5-Star SQL' medium='HackerRank' />
          <Achievements year='2022' title='3-Star Java' medium='HackerRank' />
        </div>
      </div>
    </div>
  )
}

export default Resume