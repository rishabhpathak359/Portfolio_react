import React, { useState, useEffect, useRef } from 'react';
import Telegraf from '../Telegraf';

const AboutMe = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsModalOpen(false);
      }
    };

    if (isModalOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isModalOpen]);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div id='about' className="h-screen flex items-center bg-gray-900 text-white flex-col p-4  md:p-0">
      <div className="w-full text-center pt-32">
        <h2 className="text-xl md:text-5xl font-semibold mb-4">Wanna know <span className='text-blue-400'>About</span> Me?</h2>
        <div className='flex justify-start items-start'>
        <ul className="text-sm md:text-lg flex flex-col mt-8 mb-4 md:mb-8 w-full px-2">
          <li className='w-full mb-8 mt-5'>My name is Rishabh Pathak.</li>
          <li className='w-full mb-8'>Currently, I am a second-year student pursuing my B.Tech in Electrical Engineering from NIT Raipur.</li>
          <li className='w-full mb-8'>Apart from coding, I am passionate about video editing and I am skilled in using software like Pr and Ae.</li>
          <li className='w-full mb-8'>Most of the time you can find me either coding some stuff or editing videos.</li>
        </ul>
        </div>
        <button
          onClick={toggleModal}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full transition duration-300 focus:outline-none"
        >
         Something For you
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div ref={modalRef} className="bg-orange-400 p-8 rounded-lg w-full h-[60vh] md:w-auto max-h-[80vh] md:max-h-[100vh] overflow-y-auto text-black">
            <button onClick={toggleModal} className=" absolute top-4 right-2 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="30px" height="50px" fill='#ffffff'>
                <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"/>
              </svg>
            </button>
            <Telegraf />
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutMe;
