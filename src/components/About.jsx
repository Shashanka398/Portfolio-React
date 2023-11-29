import React from "react";
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import profImg from "../images/userAsset/User.png";
import dots from "../images/userAsset/dots.png";
import circle from "../images/userAsset/circle.png";
import cube from "../images/userAsset/cube.png";
import plus from "../images/userAsset/plus.png";
import zigzag from "../images/userAsset/zigzags.png";
import  {links} from "../DataProvider/linkList"

export const openLinkInNewBrowserTab = (url) => {
  const linkedInUrl = url;
  window.open(linkedInUrl, '_blank');
};
const About = () => {
  const typedRef = useRef(null);
  console.log("linkes",links)
  useEffect(() => {
    const options = {
      strings: ["Programmer", "Front-End Developer", "Web developer"],
      loop: true,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 1000,
    };
    typedRef.current = new Typed(".role", options);
    return () => {
      if (typedRef.current) {
        typedRef.current.destroy();
      }
    };
  }, []);


  
  return (
    <div className="w-[10/16] h-auto flex flex-row flex-wrap-reverse justify-around  p-5 overflow-hidden">
      <div className="fadetext select-none text-[8rem] font-bold text-[rgb(231,231,231)] absolute top-[29rem] left-[-2rem] -z-30">
        Shashank
      </div>
      <div className="flex flex-col gap-[3rem] mt-8 justify-center xl:w-[50%] lg:w-[40%] md:w-[50%] sm:w-[50%] ml-[3rem] ">
        <div className="text-[35px] text-[#343d68] opacity-90">
          Hi there !!..
        </div>
        <div className="text-[1.5rem]">
          I am <span className="role text-[#4e45d5]">!</span>
        </div>
        <div className="flex flex-shrink text-left sm:text-left ">
          &nbsp; &nbsp; 🎓 Recent Information Science Engineering graduate from NMAMIT, now crafting software in the dynamic world of startup. My portfolio is a fusion of academic brilliance and hands-on project mastery, ready to infuse innovation into solutions. Eagerly embarking on a perpetual journey of growth as a software virtuoso. 💻✨
        </div>
        <div class="btn-pink" onClick={()=>{openLinkInNewBrowserTab(links[0].profile)}}>
          Hire Me
        </div>
      </div>
      <div className="mt-12 transform hero-section-right sm:scale-65 md:scale-75 lg:scale-85 xl:scale-90 Design-container">
  <div className="absolute icon-dots">
    <img src={dots} alt="dots-img" className="about-icons" />
  </div>
  <div className="absolute icon-cube about-icos">
    <img src={cube} alt="cube-img"  className="about-icons"/>
  </div>
  <div className="absolute icon-circle">
    <img src={circle} alt="circle-img"  className="about-icons"/>
  </div>
  <div className="absolute icon-zigzag">
    <img src={zigzag} alt="zigzag-img"  className="about-icons"/>
  </div>
  <div className="absolute icon-plus">
    <img src={plus} alt="plus-img" className="about-icons"/>
  </div>
  <div className="p-10 transition-all duration-1000 user-image filter grayscale animate-scaleImage">
    <img className="z-[-9]" src={profImg} alt="usr-img" />
  </div>
</div>


    </div>
  );
};

export default About;
