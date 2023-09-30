// import React from 'react'

// const About = () => {
//   return (
//     <div className="container mx-auto py-10 max-w-screen-xl">
//         <h1 className='font-semibold text-white text-5xl font-playfair'>Wanna Know About Me?</h1>

//     </div>
//   )
// }

// export default About;
import React from 'react';

const AboutMe = () => {
  return (
    <div id='about' className="w-screen h-screen flex justify-center items-center">
      <div className="max-w-screen-xl text-center text-white">
        <h2 className="text-4xl font-semibold relative bottom-8">Wanna know About Me?</h2>
        <ul className="mt-24 text-2xl flex flex-col items-start">
          <li>Myself Rishabh Pathak</li>
          <li>Currently, I am a second-year student pursuing my B.Tech in Electrical Engineering from NIT Raipur</li>
          <li>Myself Rishabh Pathak</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutMe;

