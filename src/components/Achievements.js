import React from 'react'

function Achievements(props) {
    return (
        <>
            <div className='row'>
                <div className='col-sm-1 mt-4 mb-3'>
                    <span className='q-icon'>
                        <i className="fa-solid fa-star"></i>
                    </span>
                </div>
                <div className='col-sm-11'>
                    <span className='qualification-date'>{props.year}</span>
                    <h2 className='qualification-certificate'>{props.title}</h2>
                    <span className='qualification-location'>{props.medium}</span>
                    <hr />
                </div>
            </div>
        </>
    )
}

export default Achievements