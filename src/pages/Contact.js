// import React from 'react'

// const Contact = () => {
//   return (
//     <div id='contact' className='w-full h-screen mt-20 pt-20 text-white text-4xl flex flex-col items-center  bg-black'>
//     <div className='max-w-screen-xl '>
//    Contact
//    </div>
//    </div>
//   )
// }

// export default Contact
import React, { useRef,useState } from 'react';
import emailjs from '@emailjs/browser';
import Telegraf from '../Telegraf';
import Sentmessage from '../Sentmessage';

 const Contact = () => {
  const[clicked,setclicked]=useState(false);
  const form = useRef();
const toggleModal=()=>{
  setclicked(!clicked);
}
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_r995ido', 'template_jgml5ms', form.current, 'S704qm5VeuTp5lRB9')
      .then((result) => {
        toggleModal();
      console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <>
    <div id='contact' className='w-screen h-screen mt-20 pt-20 text-white text-4xl flex flex-col items-center z-10  bg-blue-950'>
      Write a message!!
    <form ref={form} onSubmit={sendEmail}  className='w-[80vw] sm:w-1/2 '>
    <div className='max-w-screen-xl flex flex-col pt-14'>
      <label className='text-lg p-2'>Name</label>
      <input type="text" required name="user_name" placeholder='Enter your name'  className='text-black text-lg p-2 rounded-md'/>
      <label className='text-lg p-2'>Email</label>
      <input type="email" required name="user_email" placeholder='Enter your email' className='text-black text-lg p-2 rounded-md' />
      <label className='text-lg p-2 '>Message</label>
      <textarea name="message" placeholder='Enter your message' className='text-black text-lg p-2 rounded-md' />
      <input type="submit" value="Send" className='border-white border m-5 rounded-md hover:cursor-pointer'/>
      </div>
    </form>
    </div>
    {clicked && <Sentmessage toggleModal={toggleModal} />}
    </>
  );
};
export default Contact;