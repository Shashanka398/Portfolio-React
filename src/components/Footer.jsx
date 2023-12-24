import React from 'react';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import {openLinkInNewBrowserTab} from "./About";
import  {links} from "../DataProvider/linkList"
const Footer = () => {
  return (
    <div className='relative p-[3rem] bg-[#343d68] overflow-hidden cursor-pointer'>
      <div>
        <div className='select-none absolute left-0 bottom-0 text-[4rem] text-[#535c87] opacity-50 '>
          Shashank
        </div>
        <div className='z-40 flex flex-wrap justify-between gap-4 footer-content'>

          <div className='z-10 flex flex-shrink gap-5 text-3xl text-white footer-items ' style={{ flex: '1' }}>
            <Link to="projects" spy={true} smooth={true} duration={500} offset={-10} className='transition-all duration-500 hover:scale-105'>
              Projects
              </Link>
          </div>

          <div>
            <div className='flex gap-5 footer-icons'>
              <i className="text-3xl text-white transition-all duration-500 fa-brands fa-github fa-sm hover:scale-125"/>
              <i className="text-3xl text-white transition-all duration-500 fa-brands fa-linkedin hover:scale-125" onClick={()=>{openLinkInNewBrowserTab(links.profile)}}/>
              <i className="text-3xl text-white transition-all duration-500 fa-regular fa-envelope hover:scale-125" onClick={() => window.location = 'mailto:shashanksaagr398@gmail.com'}/>
              <i className="text-3xl text-white transition-all duration-500 fa-brands fa-whatsapp hover:scale-125" onClick={()=>{openLinkInNewBrowserTab(links.whatsApp)}}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
