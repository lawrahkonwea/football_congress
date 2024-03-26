import React from 'react'
import { useForm, ValidationError } from '@formspree/react';
// import { participantsData } from './navComponents/data/participantsData';
// import { useNavigate } from 'react-router-dom';


const Footer = () => {
  const [state, handleSubmit] = useForm("xkndqnvl");

  if (state.succeeded) {
    setTimeout(() => {
      handleSubmit();
    }, 3000);

    return <p>Message received successfully. Redirecting...</p>;
  }


  return (
    <>
      <div className='bg-sky-950 text-white'>
        <div className='lg:flex flex-col md:flex-row justify-between py-8 px-20 '>
          <form onSubmit={handleSubmit} className='flex flex-col'>
          <p className='mb-6'>SEND US AN EMAIL</p>
            <p className='text-white text-lg pb-3'>Let us know what you have in mind</p>
            <input
              id="email"
              type="email"
              name="email"
              placeholder='Enter Your Email'
              className='rounded-lg p-3 w-96'
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
              className='rounded-lg p-5 mt-3 w-96'
              required
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <button className='rounded-lg border mt-3 w-24 bg-sky-100 p-2' type="submit" disabled={state.submitting}>
              Send
            </button>
          </form>
         
          <div className='pr-20 mt-8 md:mt-0'>
           <p className='mb-6'>ABOUT US</p>
            <p>Contact Us</p>
            <p>Partners</p>
            </div>

          <div className='pr-32 mt-8 md:mt-0'>
            <p className='mb-6'>YOUR PARTICIPATION</p>
            <p>Tournament Information</p>
            <p>Tornament Regulations</p>
            <p>Cost/Fee</p>
            <p>AFEC Account</p>
          </div>
          
        </div>
      </div>
    </>
  );
}


export default Footer;
