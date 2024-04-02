import React from 'react'
import { useForm, ValidationError } from '@formspree/react';
import { participantsData } from './navComponents/data/participantsData';
import { Link } from 'react-router-dom';


const Footer = () => {
  // const navigate = useNavigate();
  const data = participantsData;
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
        <div className='lg:flex flex-col md:flex-row justify-between py-8 px-4 md:px-16 '>
          <form onSubmit={handleSubmit} className='flex flex-col flex-wrap'>
            <p className='mb-6 text-lg md:text-xl'>SEND US AN EMAIL</p>
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
            <button className='rounded-lg border mt-3 w-full md:w-24 bg-sky-100 p-2' type="submit" disabled={state.submitting}>
              Send
            </button>
          </form>

          <div className='pr-4 md:pr-20 mt-8 md:mt-0'>
            <p className='mb-6 text-lg md:text-xl'>ABOUT US</p>
            <Link to="/contacts" className='block mb-2'>Contact Us</Link>
            <p className='mb-2'>Partners</p>
          </div>

          <div className='pr-4 md:pr-32 mt-8 md:mt-0'>
            <p className='mb-6 text-lg md:text-xl'>YOUR PARTICIPATION</p>
            {data.map((evnt, index) => (
              <Link to={`/tournament_details/${evnt.id}`} className='block mb-2' key={index}>{evnt.title}</Link>
            ))}
            <Link to="/donate" className='block mb-2'>AFEC Account</Link>
          </div>
        </div>
      </div>
    </>
  );
}


export default Footer;
