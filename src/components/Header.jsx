import React from 'react';
import logo from "../images/userAsset/NavLogo.png";
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

const Header = () => {
  return (
    <div className="flex flex-row flex-wrap justify-around p-1 overflow-hidden overflow-x-hidden overflow-y-auto border border-t-0 border-r-0 border-black shadow-xl navbar w-11/16 h-75">
      <div className='flex flex-row align-middle mt-2 ml-[-6rem]'>
        <img src={logo} className='w-[45px] h-[55px]  mt-[-0.5rem]' alt="logo" />
        <div className='font text-xl italic ml-[-4%]'>hashank</div>
      </div>
      <div className='flex flex-wrap mt-2 mr-3 text-lg cursor-pointer gap-7 nav-item'>
        <Link to="projects" spy={true} smooth={true} duration={500} offset={-10} className='flex transition-all duration-300 hover:scale-105'>
          Projects
        </Link>
        <Link to="skills" spy={true} smooth={true} duration={500} className='flex transition-all duration-300 hover:scale-105'>
          Skills
        </Link>
      </div>
    </div>
  );
}

export default Header;
