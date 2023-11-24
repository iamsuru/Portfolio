import React from 'react'

function Qualification(props) {
  return (
    <>
      <div className='row mt-3 mb-4'>
        <div className='col-sm-1 mt-4 mb-3'>
          <span className='q-icon'>
            <i className="fa-solid fa-user-graduate"></i>
          </span>
        </div>
        <div className='col-sm-11'>
          <span className='qualification-date'>{props.date}</span>
          <h2 className='qualification-certificate'>{props.certificate}</h2>
          <span className='qualification-location'>{props.location}</span>
          <hr/>
        </div>
      </div>
    </>
  )
}

export default Qualification