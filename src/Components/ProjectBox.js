

import React from 'react';
import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";

const ProjectBox = ({ projectPhoto, projectName, githubLink, demoLink }) => {
  return (
    <div className='projectBox'>
      <img className='projectPhoto' src={projectPhoto} alt="Project display" />
      <div>
        <h3>{projectName}</h3>
        
        <a href={githubLink} target='_blank' rel="noopener noreferrer">
          <button className='projectbtn'><FaGithub /> GitHub</button>
        </a>

        <a href={demoLink} target='_blank' rel="noopener noreferrer">
          <button className='projectbtn'><CgFileDocument /> Demo</button>
        </a>
      </div>
    </div>
  );
}

export default ProjectBox;
