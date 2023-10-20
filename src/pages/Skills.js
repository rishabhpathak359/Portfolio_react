import React, { useState } from 'react';
import {motion} from 'framer-motion'
import Atom from '../components/Atom';
import { skillsarray } from '../utils/skillsarray';
const Skills = () => {
    const len=skillsarray.length;
    const [skills,setskills]=useState(skillsarray[0])
    return (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 1 } }}
          viewport={{ once: false }}
        >
        <div id='skills' className="w-full text-white text-4xl mt-11 px-4 flex md:flex-row flex-col-reverse">
            <div className="max-w-screen-xl relative flex flex-col items-center mx-auto">
                <h2 className="text-3xl font-semibold pb-8">Skills</h2>
                <div className='md:py-36 py-40 relative top-40'>
                <div className='bg-black w-[70vw] md:w-[40vw] overflow-scroll md:h-72 text-sm md:text-sm flex flex-row md:flex-col relative md:right-24 rounded-lg'>
                    <div className='flex md:flex-row flex-col text-center justify-center text-md md:text-lg sticky'>
                        <h1 className='p-4 cursor pointer hover:border-r-2 md:hover:border-b-2 flex ' onClick={()=>setskills(skillsarray[0])}><span className='px-2'><i class="fa-brands fa-js" ></i></span>Javascript</h1>
                        <h1 className='p-4 cursor pointer hover:border-r-2 md:hover:border-b-2 flex pr-16' onClick={()=>setskills(skillsarray[1])}><span className='px-1'><i class="fa-brands fa-react" ></i></span>ReactJS</h1>
                        <h1 className='p-4 cursor pointer hover:border-r-2 md:hover:border-b-2 flex pr-16' onClick={()=>setskills(skillsarray[2])}><span className='px-1'><i class="fa-brands fa-node-js" ></i></span> Nodejs</h1>
                        <h1 className='p-4 cursor pointer hover:border-r-2 md:hover:border-b-2 flex px-5' onClick={()=>setskills(skillsarray[3])}>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="27" height="25" viewBox="0 0 48 48" className='mr-1'>

  <path fill="#000000" stroke="#ffffff" stroke-width="2" stroke-miterlimit="10" d="M5.304,34.404C5.038,34.048,5,33.71,5,33.255 c0-3.744,0-15.014,0-18.759c0-0.758,0.417-1.458,1.094-1.836c3.343-1.872,13.405-7.507,16.748-9.38 c0.677-0.379,1.594-0.371,2.271,0.008c3.343,1.872,13.371,7.459,16.714,9.331c0.27,0.152,0.476,0.335,0.66,0.576L5.304,34.404z" clip-rule="evenodd"></path>
  
  <path fill="#000000" stroke="#000000" stroke-width="2" stroke-miterlimit="10" d="M22.903,3.286c0.679-0.381,1.515-0.381,2.193,0 c3.355,1.883,13.451,7.551,16.807,9.434C42.582,13.1,43,13.804,43,14.566c0,3.766,0,15.101,0,18.867 c0,0.762-0.418,1.466-1.097,1.847c-3.355,1.883-13.451,7.551-16.807,9.434c-0.679,0.381-1.515,0.381-2.193,0 c-3.355-1.883-13.451-7.551-16.807-9.434C5.418,34.899,5,34.196,5,33.434c0-3.766,0-15.101,0-18.867 c0-0.762,0.418-1.466,1.097-1.847C9.451,10.837,19.549,5.169,22.903,3.286z" clip-rule="evenodd"></path>
  
  <path fill="#ffffff" fill-rule="evenodd" d="M24,10c7.727,0,14,6.273,14,14s-6.273,14-14,14 s-14-6.273-14-14S16.273,10,24,10z M24,17c3.863,0,7,3.136,7,7c0,3.863-3.137,7-7,7s-7-3.137-7-7C17,20.136,20.136,17,24,17z" clip-rule="evenodd"></path>
  
  <path fill="#000000" fill-rule="evenodd" d="M42.485,13.205c0.516,0.483,0.506,1.211,0.506,1.784 c0,3.795-0.032,14.589,0.009,18.384c0.004,0.396-0.127,0.813-0.323,1.127L23.593,24L42.485,13.205z" clip-rule="evenodd"></path>
  <path fill="#ffffff" fill-rule="evenodd" d="M31 21H33V27H31zM38 21H40V27H38z" clip-rule="evenodd"></path>
  <path fill="#ffffff" fill-rule="evenodd" d="M29 23H35V25H29zM36 23H42V25H36z" clip-rule="evenodd"></path>
</svg> C++</h1>
                        <h1 className='p-4 cursor pointer hover:border-r-2 md:hover:border-b-2 pr-16' onClick={()=>setskills(skillsarray[4])}><span className='text-xl pr-2'><i class="fa-brands fa-java" ></i></span>Java</h1>
                        <h1 className='p-4 cursor pointer hover:border-r-2 md:hover:border-b-2 flex ' onClick={()=>setskills(skillsarray[5])}>
                        <svg id="Layer_1" viewBox="0 0 122.88 73.29" fill='#ffffff' fill-fillRule='evenodd' width="25px" className='p-1 '>
  <title>tailwind-css</title>
  <path className="cls-1" d="M61.44,0Q36.87,0,30.72,24.43q9.22-12.21,21.5-9.16c4.68,1.16,8,4.53,11.72,8.26,6,6.08,13,13.11,28.22,13.11q24.57,0,30.72-24.43-9.21,12.22-21.5,9.16c-4.68-1.16-8-4.53-11.72-8.26C83.64,7,76.67,0,61.44,0ZM30.72,36.64Q6.15,36.64,0,61.07q9.23-12.21,21.5-9.16c4.68,1.16,8,4.53,11.72,8.27,6,6.07,13,13.11,28.22,13.11q24.57,0,30.72-24.43Q82.95,61.07,70.66,58c-4.68-1.16-8-4.53-11.72-8.26-6-6.08-13-13.12-28.22-13.12Z"/>
</svg> Tailwindcss</h1>
                    </div>
                    <div className='flex my-auto py-auto px-7'>
                        {skills}
                    </div>
                    </div>
                </div>
            </div>
            <div className='relative top-72 mt-8 md:top-64 md:right-52 mx-auto px-auto'>
            <Atom/>
            </div>
        </div>
    </motion.div>
    );
}

export default Skills;



