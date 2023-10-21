import React, { useState } from 'react';
import {motion} from 'framer-motion'
import Atom from '../components/Atom';
import { skillsarray } from '../utils/skillsarray';
const Skills = () => {
    const [skills,setskills]=useState(skillsarray[0])
return (
    <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 1 } }}
        viewport={{ once: false }}
    >
        <div id='skills' className='w-screen h-screen flex flex-col mx-auto px-auto pt-20'>
            <h1 className='text-4xl text-white text-center pb-16'>Skills</h1>
            <div className='flex md:flex-row flex-col-reverse justify-center items-center my-auto py-auto'>
                <div id="skills-modal" className='h-[40vh] md:w-[45vw] md:h-[50vh] bg-black overflow-scroll flex flex-col relative md:mr-28 md:mt-0 mt-28'>
                    <header className='w-full bg-gray-800 text-white p-4 text-center '>
                        <ul className='text-white flex justify-between text-xs'>
                            <li className='flex flex-col items-center cursor-pointer hover:' onClick={()=>setskills(skillsarray[0])}>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                                    height="30" 
                                    alt="javascript logo" 
                                    className='h-5 sm:h-10 mr-2 sm:mr-4 transition duration-300 ease-in-out hover:text-yellow-400 hover:bg-gray-700'
                                />
                                <span className='hidden md:inline'>Javascript</span>
                            </li>
                            <li className='flex flex-col items-center cursor-pointer' onClick={()=>setskills(skillsarray[1])}>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                                    height="30" 
                                    alt="react logo" 
                                    className='h-5 sm:h-10 mr-2 sm:mr-4'
                                />
                                <span className='hidden md:inline'>ReactJs</span>
                            </li>
                            <li className='flex flex-col items-center cursor-pointer' onClick={()=>setskills(skillsarray[2])}>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                                    height="30" 
                                    alt="nodejs logo" 
                                    className='h-5 sm:h-10 mr-2 sm:mr-4'
                                />
                                <span className='hidden md:inline'>NodeJs</span>
                            </li>
                            <li className='flex flex-col items-center cursor-pointer' onClick={()=>setskills(skillsarray[3])}>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
                                    height="30" 
                                    alt="java logo" 
                                    className='h-5 sm:h-10 mr-2 sm:mr-4'
                                />
                                <span className='hidden md:inline'>Java</span>
                            </li>
                            <li className='flex flex-col items-center cursor-pointer' onClick={()=>setskills(skillsarray[4])}>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
                                    height="30" 
                                    alt="cplusplus logo" 
                                    className='h-5 sm:h-10 mr-2 sm:mr-4'
                                />
                                <span className='hidden md:inline'>C++</span>
                            </li>
                            <li className='flex flex-col items-center cursor-pointer' onClick={()=>setskills(skillsarray[5])}>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
                                    height="30" 
                                    alt="tailwindcss logo" 
                                    className='h-5 sm:h-10 mr-2 sm:mr-4'
                                />
                                <span className='hidden md:inline'>Tailwindcss</span>
                            </li>
                        </ul>
                    </header>
                    <motion.div
                            className='text-white px-8 py-4 text-base mt-10 overflow-y-auto'
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ duration: 0.5 }}
                        >
                        {skills}
                        </motion.div>
                </div>
                <div>
                    <Atom/>
                </div>
            </div>
        </div>
    </motion.div>
);

}

export default Skills;



