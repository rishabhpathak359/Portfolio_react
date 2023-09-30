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
    <div id='home' className={width=="minimum"?'flex flex-col justify-center text-center items-center relative top-32 w-full h-full':'flex-col sm:flex sm:flex-row-reverse justify-between pt-60 px-11 w-full h-full overflow-x-hidden z-10'}> {/* Added relative and z-10 */}
    <img
        src={DP}
        alt='Rishabh Pathak Profile Picture'
        className={width=="minimum"?
        "w-[180px]  mb-16":
        
        'w-[180px] sm:w-[300px] md:w-[350px] md:relative md:right-11 md:mr-7  sm:relative sm-8 sm:bottom-28 '}
        style={{ zIndex: 1 }}
      />
      <div className='font-serif text-orange-400 text-3xl sm:text-4xl md:text-5xl md:pl-20'>
        <Typewriter texts={texts}/>
      </div>
    </div>
  );
};

export default Home;
