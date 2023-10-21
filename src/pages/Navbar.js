import React, { useState, useEffect } from 'react';
import useResponsive from '../utils/useResponsive';
import {motion} from "framer-motion"
const Navbar = () => {
  const width=useResponsive();
  const [showMenu, setShowMenu] = useState(false);
  const[scrolled,setScrolled]=useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 180) { 
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const renderNavbarContent = () => {
    if (width === 'minimum') {
      return (
         <div className="relative z-20">
         <button className="text-white p-3" onClick={toggleMenu}>
  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 256 256" width="30px" height="30px">
    <g fill="#ffffff" fillOpacity="0.38039" fillRule="nonzero">
      <g transform="scale(8.53333,8.53333)">
        <path d="M3,7c-0.36064,-0.0051 -0.69608,0.18438 -0.87789,0.49587c-0.18181,0.3115 -0.18181,0.69676 0,1.00825c0.18181,0.3115 0.51725,0.50097 0.87789,0.49587h24c0.36064,0.0051 0.69608,-0.18438 0.87789,-0.49587c0.18181,-0.3115 0.18181,-0.69676 0,-1.00825c-0.18181,-0.3115 -0.51725,-0.50097 -0.87789,-0.49587zM3,14c-0.36064,-0.0051 -0.69608,0.18438 -0.87789,0.49587c-0.18181,0.3115 -0.18181,0.69676 0,1.00825c0.18181,0.3115 0.51725,0.50097 0.87789,0.49587h24c0.36064,0.0051 0.69608,-0.18438 0.87789,-0.49587c0.18181,-0.3115 0.18181,-0.69676 0,-1.00825c-0.18181,-0.3115 -0.51725,-0.50097 -0.87789,-0.49587zM3,21c-0.36064,-0.0051 -0.69608,0.18438 -0.87789,0.49587c-0.18181,0.3115 -0.18181,0.69676 0,1.00825c0.18181,0.3115 0.51725,0.50097 0.87789,0.49587h24c0.36064,0.0051 0.69608,-0.18438 0.87789,-0.49587c0.18181,-0.3115 0.18181,-0.69676 0,-1.00825c-0.18181,-0.3115 -0.51725,-0.50097 -0.87789,-0.49587z"></path>
      </g>
    </g>
  </svg>
</button>

          {showMenu && (
            <div className="fixed inset-0 backdrop-blur-xl z-10 ">
              <div className="absolute top-0 w-full ">
                <ul className="inherit text-2xl flex flex-col cursor-pointer text-center relative top-11">
                <button className=" px-8 relative bottom-4 text-right flex justify-end "onClick={toggleMenu}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50px" height="50px" fill='#ffffff'>
  <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"/>
</svg>
                </button>
                <div className='pt-7'>
                 <a href='#home'> <li className="px-2 mx-5 py-8 border-b-2 " onClick={()=>toggleMenu()}>Home</li></a>
                 <a href='#about'> <li className="px-2 mx-5 py-8 border-b-2 " onClick={()=>toggleMenu()}>About</li></a>
                 <a href='#skills'><li className="px-2 mx-5 py-8 border-b-2" onClick={()=>toggleMenu()} >Skills</li></a>
                 <a href='#Projects'><li className="px-2 mx-5 py-8 border-b-2" onClick={()=>toggleMenu()}>Projects</li></a>
                 <a href='#contact'><li className="px-2 mx-5 py-8 border-b-2" onClick={()=>toggleMenu()}>Contact</li></a> 
                  </div>
                </ul>
              </div>
            </div>
          )}
        </div>
      );
    } else {
      return (
        <ul className="flex cursor-pointer pr-10 pb-4 md:h-7 h-5">
  <a href='#home'><li className="w-fit mx-10 font-semibold text-lg hover:text-blue-400 pl-4"> 
  <svg className=' pb-2 pl-2 fill-blue-400' xmlns="http://www.w3.org/2000/svg" width="30" height="28" viewBox="0 0 100 100">
  <path d="M50 8.3L5.5 45.8V90h33.7V63.7h26.6V90H94V45.8L50 8.3zm35 76.7H65V65.3H35v19.7H15V45.8L50 12.3l35 33.5v39.2z"/>
</svg><h1 className='relative left-9 bottom-8 '>Home</h1></li></a>
          <li className="w-fit mx-10 font-semibold text-lg hover:text-blue-400 pl-4">
          <svg className='pb-2 pl-2 fill-blue-400' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30">
  <path d="M2 21h20v-2H2v2zm4-4h16v-2H6v2zm0-4h16v-2H6v2zm0-4h16V7H6v2zm-4-3h2V4h2v2h2V4h2v2h2V4h2v2h2V4h1c1.11 0 2 .89 2 2v10c0 1.11-.89 2-2 2h-1v2h-2v-2h-2v2h-2v-2H6c-1.11 0-2-.89-2-2V6c0-1.11.89-2 2-2zm1 2v2h2V7H3zm12 0v2h2V7h-2zm-4 3v2h2v-2H11zm-6 4v2h2v-2H5zm0 4v2h2v-2H5zm12-4v2h2v-2h-2zm-4 3v2h2v-2h-2z"/>
</svg>
<a href='#skills'><h1 className='relative left-9 bottom-8 '>Skills</h1></a></li>
          <li className="w-fit mx-10 font-semibold text-lg hover:text-blue-400">
          <svg className=' pb-2 pl-2 fill-blue-400' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30">
  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 16h-2v-2h2v2zm0-4h-2v-6h2v6zm4 0h-2v-6h2v6zm4 0h-2v-6h2v6zm-8-8h-2v-6h2v6zm4 0h-2v-6h2v6zm4 0h-2v-6h2v6z"/>
</svg>
<a href='#Projects'><h1 className=' relative left-9 bottom-8 '>Projects</h1></a></li>
          <li className="w-fit mx-10 font-semibold text-lg hover:text-blue-400">
          <svg className=' pb-2 pl-2 fill-blue-400' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30">
  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-10h-2V7h2v3zm0 4h-2v-2h2v2z"/>
</svg>

<a href='#contact'><h1 className='relative left-9 bottom-8 '>Contact</h1></a></li>
        </ul>
      );
    }
  };

  return (
    <motion.div 
    initial={{ y: -80 }}  // Set the initial state to 0 to make the navbar initially visible
  animate={{ y: 0 }}
  transition={{ delay: 0.5 }}
      className={`${
        width === 'minimum' ? 'md:min-w-min' : 'md:min-w-max'
      }w-screen ${scrolled&&!showMenu&&'backdrop-blur-lg backdrop-brightness-200'} px-5 py-10 flex justify-between text-white shadow-2xl sticky top-0 z-20 `}
    >
      <a href='/'>
        <h1 className='font-playfair text-3xl cursor-pointer'>RishabhOG</h1>
      </a>
      <div className='z-99'>{renderNavbarContent()}</div>
    </motion.div>
  );
};

export default Navbar;
