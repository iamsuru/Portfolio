import React from 'react'
import { HashLink } from 'react-router-hash-link'
function Advertisement() {
    return (
        <div className='ad-container d-flex flex-column justify-content-center align-items-center'>
            <div className='container text-center'>
                <h2 className='ad-h1'>I'm <span style={{color:'#A0F669'}}>Available</span> for Fresher Openings</h2>
                <p className='ad-p'>Keen to kickstart my career and make a meaningful impact in an entry-level role.</p>
                <HashLink className='adv-anch' to='#contact'>HIRE ME</HashLink>
            </div>
        </div>
    )
}

export default Advertisement