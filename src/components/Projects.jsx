import React from 'react';
import data from '../DataProvider/projectList'
import ProjectCard from './ProjectCard';

const Projects = () => {


  return (
    <div className='mt-[1rem]  bg-[#dadada] w-full h-auto flex flex-col justify-center items-center'>
    <div className="text-center px-4 md:px-8 lg:px-12 py-6 md:py-8 lg:py-10 text-bg-orange text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--bgOrange)]">
      Projects
    </div>
    <div className='project-container flex flex-col p-6   w-[65%]  justify-center gap-[65px] '
      >
      {
        data.map((project, index) => (
          <ProjectCard project={project} index={index} key={index} />
        ))
      }
    </div>
  </div>
  
  );
};

export default Projects;
