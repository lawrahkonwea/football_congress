import React, { useState } from 'react'
import { useForm, ValidationError } from '@formspree/react';
import { participantsData } from './navComponents/data/participantsData';
import { Link } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {

  const data = participantsData;
  const [state, handleSubmit] = useForm("xkndqnvl");
  const [submitted, setSubmitted] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    await handleSubmit(e);
    setSubmitted(true);
  };

  return (
    <>
      <div className=" bg-sky-950 ">
      <div className='lg:flex flex-col md:flex-row justify-between py-8 px-4 md:px-16 '>
        {!submitted ? (
          <form onSubmit={handleFormSubmit} className='flex flex-col flex-wrap'>
            <p className='mb-6 text-lg md:text-lg text-white'>SEND US AN EMAIL</p>
            <p className='text-white text-sm md:text-lg pb-3'>Let us know what you have in mind</p>
            <input
              id="email"
              type="email"
              name="email"
              placeholder='Enter Your Email'
              className='rounded-lg p-3 md:p-4 w-full md:w-96'
              required
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />

            <textarea
              id="message"
              name="message"
              placeholder='Message'
              className='rounded-lg p-4 mt-3 w-full md:w-96'
              required
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <button className='text-white rounded-lg border mt-3 w-full md:w-24 bg-sky-250 p-2' type="submit" disabled={state.submitting}>
              Send
            </button>
          </form>
        ) : (
          <p className="text-white">Message sent successfully. We'll get back to you soon!</p>
        )}

        <div className='text-white pr-4 md:pr-20 mt-8 md:mt-0'>
          <p className='mb-6 text-lg md:text-lg'>ABOUT US</p>
          <Link to="/contacts" className='block mb-2'>Contact Us</Link>
          <p className='mb-2'>Partners</p>
        </div>

        <div className='text-white pr-4 md:pr-32 mt-8 md:mt-0'>
          <p className='mb-6 text-lg md:text-lg'>YOUR PARTICIPATION</p>
          {data.map((evnt, index) => (
            <Link to={`/tournament_details/${evnt.id}`} className='block mb-2' key={index}>{evnt.title}</Link>
          ))}
          <Link to="/donate" className='text-white block mb-2'>AFEC Account</Link>
        </div>
      </div>
        <div className="my-4 px-6">
          <hr />
        </div>
        <div className="pb-[5%]">
          <p className="text-center text-white py-4 text-[14px]">&copy; 2024 AFEC Africa. All rights reserved. Integrity policy</p>
          <div className="flex items-center justify-center gap-4 pb-4">
            <a href="https://www.facebook.com/samuelonyekajohnson?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer">
              <FaFacebook className='w-9 h-9 text-slate-400' />
            </a>
            <a href="https://www.instagram.com/africa__footballec" target="_blank" rel="noopener noreferrer">
              <FaInstagram className='w-9 h-9 text-slate-400' />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
              <AiOutlineYoutube className='w-9 h-9 text-slate-400' />
            </a>
            <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className='w-9 h-9 text-slate-400' />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}


export default Footer;
