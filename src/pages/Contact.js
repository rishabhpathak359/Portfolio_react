import React, { useRef,useState } from 'react';
import emailjs from '@emailjs/browser';
import Sentmessage from '../Sentmessage';
import {motion} from "framer-motion"

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
    <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 1 } }}
          viewport={{ once: false }}
        >
    <div id='contact' className='w-screen h-screen mt-20 pt-20 text-white text-4xl flex flex-col items-center z-10  bg-blue-950'>
      <h1 className='text-5xl'>Write a message!!</h1>
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
    </motion.div>
    </>
  );
};
export default Contact;