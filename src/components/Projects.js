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
        {ProjectData.map((project, index) => (
          <Card key={index} title={project.title} link={project.link} type={project.type} description={project.description} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
