import React from 'react'

function Qualification(props) {
  return (
    <>
    <dl className='row'>
      <dt className='col-sm-3 mt-4 mb-3'><span className='q-icon'><i className="fa-solid fa-user-graduate"></i></span></dt>
      <dd className='col-sm-9'>
      <span className='qualification-date'>{props.date}</span>
        <h2 className='qualification-certificate'>{props.certificate}</h2>
        <span className='qualification-location'>{props.location}</span>
        <hr/>
      </dd>
    </dl>
    </>
  )
}

export default Qualification