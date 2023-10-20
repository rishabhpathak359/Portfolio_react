// import React from 'react'
// import "./Atom.css"
// const Atom = () => {
//     const numIcons = 5; // Number of icons
//     const radius = 150; // Radius of the circular path
//     const icons = [];
  
//     for (let i = 0; i < numIcons; i++) {
//       const angle = (i * 360) / numIcons; // Calculate angle between icons
//       const x = radius * Math.cos((angle * Math.PI) / 180); // Calculate x-coordinate
//       const y = radius * Math.sin((angle * Math.PI) / 180); // Calculate y-coordinate
  
//       icons.push(
//         <i
//           key={i}
//           className="fab fa-js language-icon"
//           style={{
//             top: `calc(50% - ${y}px)`,
//             left: `calc(50% + ${x}px)`,
//           }}
//         ></i>
//       );
//     }
//   return (
//     <div className='atom'>
//     <div className='line line-1'></div>
//     <div className='line line-2'></div>
//     <div className='line line-3'></div>
//     <div className='atom2'>
//         <div className='line4'>
//         {icons}
//         </div>
//     </div>
//     </div>
//   )
// }

// export default Atom
import React from 'react';
import "./Atom.css";
import useResponsive from '../utils/useResponsive';

const Atom = () => {
    const width=useResponsive();
    let radius;
    const icons = ['fa-js', 'fa-git-alt', 'fa-react', 'fa-java', 'fa-html5', 'fa-css3', 'fa-node',];
      if(width=='max'){
         radius=150;
      }
      else{
         radius=100;
      }
  const numIcons = icons.length;

  const iconElements = icons.map((icon, index) => {
    const angle = (index * 360) / numIcons; // Calculate angle between icons
    const x = radius * Math.cos((angle * Math.PI) / 180); // Calculate x-coordinate
    const y = radius * Math.sin((angle * Math.PI) / 180); // Calculate y-coordinate

    return (
      <i
        key={index}
        className={`fab ${icon} language-icon`}
        style={{
          top: `calc(50% - ${y}px)`,
          left: `calc(50% + ${x}px)`,
        }}
      ></i>
    );
  });

  return (
    <div className='complete'>
    <div className='atom'>
      <div className='line line-1'></div>
      <div className='line line-2'></div>
      <div className='line line-3'></div>
      <div className='atom2'>
        <div className='line4'>{iconElements}</div>
      </div>
    </div>
    </div>
  );
}

export default Atom;
