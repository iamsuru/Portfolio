import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import { Progress } from 'reactstrap'


const Card = (props) => {
    return (
        <div className='bg-white rounded-lg shadow p-4 text-center skill-container'>
            <h2 className='mb-4 s-hd'>{props.language}</h2>
            <div className='progress-container'>
                <CircularProgressbar strokeWidth={4} value={props.val} text={<tspan style={{ fontSize: '18px', fontWeight: 'bold' }}>{`${props.val}%`}</tspan>} styles={buildStyles({
                    strokeLinecap: 'butt',
                    pathColor: '#3e64ff',
                    textColor: 'black',
                    trailColor: '#d3d1d1'
                })} />
            </div>
        </div>
    )
}


const ProgressBar = (props) => {
    return (
        <div className='row'>
            <div className='col-sm-6'>
                <span className='h6 mr-4 mt-4 mb-4'>{props.language1}</span>
                <span className='h6 float-end'>{`${props.val1}%`}</span>
                <Progress color='#3e64ff' style={{ height: '10px' }} className="my-2 mt-3 mb-3" value={`${props.val1}`}></Progress>
            </div>
            <div className='col-sm-6'>
                <span className='h6 mr-4 mt-4 mb-4'>{props.language2}</span>
                <span className='h6 float-end'>{`${props.val2}%`}</span>
                <Progress color='#3e64ff' style={{ height: '10px' }} className="my-2 mt-3 mb-3" value={`${props.val2}`}></Progress>
            </div>
        </div>
    )
}

function Skills() {
    return (
        <>
            <div className='row'>
                <div className='col-lg-4 mb-4'>
                    <Card language='Core Java' val='80' />
                </div>
                <div className='col-lg-4 mb-4'>
                    <Card language='Node JS' val='75' />
                </div>
                <div className='col-lg-4 mb-4'>
                    <Card language='React JS' val='70' />
                </div>
            </div>

            <ProgressBar language1='HTML' val1='80' language2='CSS' val2='70' />
            <ProgressBar language1='JavaScript' val1='80' language2='JSP' val2='50' />
            <ProgressBar language1='Servlets' val1='60' language2='MySQL' val2='70' />
            <ProgressBar language1='Python' val1='50' language2='Express JS' val2='70' />
            <ProgressBar language1='MongoDB' val1='50' language2='Git' val2='70' />
            <ProgressBar language1='GitHub' val1='50' language2='REST API' val2='80' />
        </>
    )
}

export default Skills