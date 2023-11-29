import React from "react";
import {openLinkInNewBrowserTab} from "./About"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
const ProjectCard = (props) => {
  const { project, index } = props;
  console.log(project);

  const cardStyle = {
    backgroundImage: `url(${project.img})`,
  };
  const marginClass =
    index % 2 === 0
      ? "lg:-ml-[6rem] xl:-ml-[6rem] sm:ml-0"
      : "lg:ml-[6rem] xl:ml-[6rem] sm:ml-0";

  const numberAlign =
    index % 2 === 0
      ? "-top-[6.5rem] -left-[2.5rem] "
      : "-top-[5rem] -right-[2.5rem]";
  return (
    <div
      className={`project-card flex flex-wrap relative w-full cursor-pointer    p-3  bg-cover bg-no-repeat  opacity-90 hover:opacity-100 shadow-md   ${marginClass} `}
      style={cardStyle}
    >
      <div className={`project-number ${numberAlign}`}>{project.id}</div>
      <div
        className={`flex  w-[70%]  flex-col flex-wrap  text-white z-10 gap-3 hover:scale-110 transition-all duration-300  p-[3rem] project-details`}
      >
        <div className="flex flex-wrap w-3/5 gap-5 project-images">
          {project.techStackImgs.map((items, index) => (
            <img key={index} src={items} className="img w-[30px] object-cover" />
          ))}
        </div>

        <h2 className="text-lg font-bold">{project.title}</h2>
        <div className="text-md flex  flex-shrink sm:text-left italic  max-h-[70vh] leading-12 overflow-auto">
          {project.description}
        </div>

        <div className="flex flex-wrap flex-shrink">
          <button
            className="btn-pink-proj" onClick={()=>(openLinkInNewBrowserTab(project.githublink))}
          >
            <i title="GitHubLink" className="mr-2 fa-brands fa-github "></i>Know
            More
          </button>

          <a onClick={()=>(openLinkInNewBrowserTab(project.demolink))}>
            <i title="Live Link" class="fa-solid fa-link icon ml-1"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
