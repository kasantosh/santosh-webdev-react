/* eslint-disable*/
import React from 'react'

const ProjectItem = ({ project }) => {
  const { name, image, description, tools, deploy, github, id, projectType, projectType2 } = project; 
  
      return (
        <div className="project-box">
            
            <div className="project-type">
              <p>{projectType}</p>
            </div>
            <div className="project-type project-type2">
              <p>{projectType2}</p>
            </div>
            <div className="project-img">
              <img src={`/img/${image}`} alt={`project-${id}`} />
            </div>
            <div className="project-heading">
              <a href={deploy} target="_blank"><h4>{name}</h4></a>
            </div>
            
            <div className="project-desc">
              <p>{description}</p>
              <p><span className="text-success text-bold">Applications Used: </span>{tools}</p>
            </div>
    
            <div className="project-link-row">
              <div className="project-link">
                <a href={deploy} target="_blank">Visit Site</a>
              </div>
              <div className="project-link">
                <a href={github} target="_blank">Github Link</a>
              </div>
          </div>
                  
        </div>
      )    
}

export default ProjectItem;