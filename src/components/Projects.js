import React from 'react';
import ProjectData from '../data/ProjectData';

const Card = (props) => {
  return (
    <div className='col-md-4 p-4 text-center pro-container d-flex flex-column align-items-center justify-content-center'>
      <a href={props.link} target='_blank' rel="noreferrer" className='pr-anchor' style={{ paddingTop: '10px' }}>{props.title}</a>
      <h5 className='mt-2'>{props.type}</h5>
      <ul className='list-unstyled'>
        {props.description.map((desc, index) => (
          <li key={index}>{desc}</li>
        ))}
      </ul>
    </div>
  );
};

function Projects() {
  return (
    <div className='container-fluid text-center mb-5 div-mar'>
      <h1 className='mb-5 mt-5 profile-h2'>My Projects</h1>
      <p className='mb-5 profile-p'>A project is a temporary undertaking aimed at achieving a distinct objective within defined parameters and constraints.</p>
      <div className='row'>
        <Card title={ProjectData[0].title} link={ProjectData[0].link} type={ProjectData[0].type} description={ProjectData[0].description} />
        <Card title={ProjectData[1].title} link={ProjectData[1].link} type={ProjectData[1].type} description={ProjectData[1].description} />
        <Card title={ProjectData[2].title} link={ProjectData[2].link} type={ProjectData[2].type} description={ProjectData[2].description} />
        <Card title={ProjectData[3].title} link={ProjectData[3].link} type={ProjectData[3].type} description={ProjectData[3].description} />
        <Card title={ProjectData[4].title} link={ProjectData[4].link} type={ProjectData[4].type} description={ProjectData[4].description} />
        <Card title={ProjectData[5].title} link={ProjectData[5].link} type={ProjectData[5].type} description={ProjectData[5].description} />
        <Card title={ProjectData[6].title} link={ProjectData[6].link} type={ProjectData[6].type} description={ProjectData[6].description} />
      </div>
    </div>
  );
}

export default Projects;
