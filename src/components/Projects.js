import React from 'react';
import ProjectData from '../data/ProjectData';

const Card = (props) => {
  return (
    <div className='col-md-4 p-4 text-center pro-container d-flex flex-column align-items-center justify-content-center'>
      <h2 className='fw-bold'>{props.title}</h2>
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
    <div className='container-fluid text-center'>
      <h1 className='mb-5 mt-5 profile-h2'>My Projects</h1>
      <p className='mb-5 profile-p'>A project is a temporary undertaking aimed at achieving a distinct objective within defined parameters and constraints.</p>
      <div className='row'>
        <Card title={ProjectData[0].title} type={ProjectData[0].type} description={ProjectData[0].description}/>
        <Card title={ProjectData[1].title} type={ProjectData[1].type} description={ProjectData[1].description}/>
        <Card title={ProjectData[2].title} type={ProjectData[2].type} description={ProjectData[2].description}/>
        <Card title={ProjectData[3].title} type={ProjectData[3].type} description={ProjectData[3].description}/>
        <Card title={ProjectData[4].title} type={ProjectData[4].type} description={ProjectData[4].description}/>
        <Card title={ProjectData[5].title} type={ProjectData[5].type} description={ProjectData[5].description}/>
      </div>
    </div>
  );
}

export default Projects;
