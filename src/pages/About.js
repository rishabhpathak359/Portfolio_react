import React, { useState,useEffect, useRef } from 'react';
import Telegraf from '../Telegraf';

const AboutMe = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 1000) {
        setIsModalOpen(false);
      }
    };
  
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsModalOpen(false);
      }
    };
  
    if (isModalOpen) {
      window.addEventListener('scroll', handleScroll);
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
      window.removeEventListener('scroll', handleScroll);
    }
  
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isModalOpen]);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };


  return (
    <>
      <div id='about' className="w-screen h-screen flex justify-center items-center z-10">
        <div className="max-w-screen-xl text-center text-white">
          <h2 className="text-4xl font-semibold relative bottom-8">Wanna know About Me?</h2>
          <ul className="mt-24 text-2xl flex flex-col items-start">
            <li>Myself Rishabh Pathak</li>
            <li>Currently, I am a second-year student pursuing my B.Tech in Electrical Engineering from NIT Raipur</li>
            <li>Myself Rishabh Pathak</li>
            <button onClick={toggleModal}>Message</button>
          </ul>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div ref={modalRef} className="bg-orange-400 p-8 rounded-lg max-h-[100vh] overflow-y-auto">
          <button onClick={toggleModal}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50px" height="30px" fill='#ffffff'>
  <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"/>
</svg></button>
            <Telegraf />
          </div>
        </div>
      )}
    </>
  );
};

export default AboutMe;
