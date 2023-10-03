import React from 'react';
import DP from '../assets/astronaut1.png';
import useResponsive from '../utils/useResponsive';
import Typewriter from '../utils/typewriter';
const Home = () => {
  const texts = [
    'Hi There!',
    'Welcome to My Website',
    'Myself Rishabh Pathak',
  ];
  const width=useResponsive();
  return (
    <div id='home' className={width=="minimum"?'flex flex-col  items-center relative top-28  w-full h-[100vh]':'flex-col sm:flex sm:flex-row-reverse justify-between pt-60 px-11 w-full h-screen overflow-x-hidden z-10'}> {/* Added relative and z-10 */}
    <img
        src={DP}
        alt='Rishabh Pathak Profile Picture'
        className={width=="minimum"?
        "w-[50vw] h-[30vh]  mb-16":
        
        'w-[180px] sm:w-[300px] md:w-[300px] sm:h-[50vh] md:relative md:right-16 md:mr-7  sm:relative sm-8 sm:bottom-28 '}
        style={{ zIndex: 1 }}
      />
      <div className='font-serif text-orange-400 text-3xl sm:text-4xl md:text-5xl md:pl-20 pt-8'>
        <Typewriter texts={texts}/>
      </div>
    </div>
  );
};

export default Home;
