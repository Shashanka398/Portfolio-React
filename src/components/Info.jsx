import React from 'react'
import ImgList from "./../DataProvider/imageList";
import {openLinkInNewBrowserTab} from "./About"
import  {links} from "../DataProvider/linkList"
const Info = () => {
  return (
    <div className='Info-container w-full  relative flex flex-row   p-[3rem]   '>
    <div className="absolute text-[8rem] font-bold text-[rgb(231,231,231)] -bottom-12 -z-20 right-7 select-none overflow-hidden">Skills</div>

      <div className='flex flex-col flex-wrap gap-6 skill-section' >
        <h2 className='text-[3.125rem] text-[--bgOrange] font-bold'><span className='text-[5.625rem]'>M</span>e and <br/>My stacks</h2>
        <div className='skill-section-description  w-[60%] h-auto text-justify flex flex-col gap-4'>
        <p>
                &nbsp; &nbsp;      Proficient in C++, SQL, HTML, CSS, JavaScript, Vb.Net, Python, and React, along with expertise in  Data Structures, Operating Systems,
                 Computer Networks, and Docker, my skills cover a broad spectrum of computer languages and technologies.
              </p>
              <p>
                &nbsp; &nbsp;
                During a Software Engineering Internship, I played a pivotal role in developing the front-end of a company website using CSS, HTML, JavaScript, 
                and React. Simultaneously, I contributed to the creation of a billing system with Vb.Net Framework, implementing robust functionalities and utilizing MySQL
                 for efficient data storage.

              </p>
              <p>
                &nbsp; &nbsp; Enriching my expertise, I completed courses in Big Data, specializing in Machine Learning Methods Using Spark, earning a Certificate of Excellence in C++ Data Structures. 
                Additionally, I acquired skills in Big Data Essentials, exploring HDFS, MapReduce, and Spark RDD.
              </p>
              <p>
              &nbsp; &nbsp;  This diverse background forms the basis for my current focus on expanding into backend technologies. 
              Integrating frontend expertise with backend development, my goal is to approach software engineering with a seamless and holistic perspective. 
              Committed to continuous learning and practical experience, I am positioned as a versatile professional in the dynamic field of software development.


              </p>
             
        </div>
        <div>
                <button className='mt-4 btn-pink-res' onClick={()=>{openLinkInNewBrowserTab(links[0].resume)}} >View Resume</button>
              </div>
      </div>
      <div className='skills-con flex flex-wrap m-auto morder-3 h-[25%] w-[75%] relative gap-[2rem] justify-center '>
        <img src="/images/userAsset/blob-vector.png" className='blob-style' />
        {
          
          ImgList.map((item,index)=>(
            <img key={index} src={item} className='w-[3rem] transition-all duration-500 hover:scale-125'/>
          ))
        }

        
      </div>

    </div>
  )
}

export default Info