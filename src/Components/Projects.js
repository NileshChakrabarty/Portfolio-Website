

import React from 'react';
import ProjectBox from './ProjectBox';
import MovieDeckImage from '../images/MovieDeckImage.png';
import NoteTakingAppImage from '../images/NoteTakingAppImage.png';
import BeYoungCloneImage from '../images/BeYoungCloneImage.png';

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
      {/* <ProjectBox 
          projectPhoto={PersonalPortfolioImage} 
          projectName="My Portfolio Website" 
          githubLink="" 
          demoLink="" 
        /> */}


        <ProjectBox 
          projectPhoto={NoteTakingAppImage} 
          projectName="Note-Taking Application" 
          githubLink="https://github.com/NileshChakrabarty/notionClone" 
          demoLink="https://notion-clone-lyart-xi.vercel.app/" 
        />

        <ProjectBox 
          projectPhoto={BeYoungCloneImage} 
          projectName="E-Commerce Website" 
          githubLink="https://github.com/NileshChakrabarty/Endsem-Project-Beyoung---EndSem-Projects-Beyoung---rstv7xyy6pvq" 
          demoLink="https://beyoung-clone-website.vercel.app/" 
        />

         <ProjectBox 
          projectPhoto={MovieDeckImage} 
          projectName="Movie Deck" 
          githubLink="https://github.com/NileshChakrabarty/Movie-Deck" 
          demoLink="https://d3dyfaf3iutrxo.cloudfront.net/file/subjective_upload/5c61a9127aa24f2581e001f7d03c9f9a.html" 
        />

      </div>
    </div>
  );
}

export default Projects;
