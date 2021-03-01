import React from 'react';
import ProjectItem from './ProjectItem';
import projects from './data/projects';

const Projects = () => {
  return (
    <div className="section">
      <div className="projects">
        <div className="row">
          <div className="page-title">
            <h1>Recent Web Apps</h1>
          </div>
          <div className="container-fluid">
            <div className="d-flex align-items-stretch row mx-auto">
              { projects.map(project => (
                <div key={project.id} className="col-xl-4 col-lg-6 col-md-12">
                < ProjectItem project={project}/>
                </div>
              ))}
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Projects;