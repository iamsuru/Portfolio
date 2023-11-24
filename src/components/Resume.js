import React from 'react'
import Qualification from './Qualification'
import Certificate from '../data/Certificate'
import { NavLink } from 'reactstrap'
import Skills from './Skills'
import Achievements from './Achievements'
import { HashLink } from 'react-router-hash-link'
function Resume() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-3 float-start r-side-nav'>
          <ul className='nav flex-column'>
            <li className='nav-item r-li'>
              <HashLink className='r-nav-li' to='#education'>Education</HashLink>
            </li>
            <li className='nav-item r-li'>
              <HashLink className='r-nav-li' to='#skills'>Skills</HashLink>
            </li>
            <li className='nav-item r-li'>
              <HashLink className='r-nav-li' to='#achievements'>Achievements</HashLink>
            </li>
          </ul>
        </div>


        <div className='col-md-9'>
          <h2 className='r-hd' id='education'>Education</h2>
          <Qualification date={Certificate[0].date} certificate={Certificate[0].certificate} location={Certificate[0].location} />
          <Qualification date={Certificate[1].date} certificate={Certificate[1].certificate} location={Certificate[1].location} />
          <Qualification date={Certificate[2].date} certificate={Certificate[2].certificate} location={Certificate[2].location} />
          <div className='p-div' id='skills'>
            <h2 className='r-hd'>Skills</h2>
            <Skills />
          </div>
          <h2 className='r-hd p-div' id='achievements'>Achievements</h2>
          <Achievements year='2022' title='Smart India Hackathon' medium='Government Of India' />
          <Achievements year='2022' title='5-Star SQL' medium='HackerRank' />
          <Achievements year='2022' title='3-Star Java' medium='HackerRank' />
        </div>
      </div>
    </div>
  )
}

export default Resume