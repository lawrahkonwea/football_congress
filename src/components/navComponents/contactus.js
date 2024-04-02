import React from 'react'
import { MdOutlinePhonelinkRing } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import { MdAlternateEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import President from '../../assets/afec-president.jpg'
import Australian from '../../assets/Australian Partner.jpg'
import Randy from '../../assets/Randy Moore.jpg'
import Vice from '../../assets/afec-vice-president.jpg'


const Contactus = () => {
  return (
    <>
      <div className='px-4 pt-[150px]'>
        <div className='text-center px-5'>
          <h1 className='font-extrabold text-3xl'>Contact Us</h1>
          <p>Please don't hesitate to ask us your questions. Below you'll find our email addresses and phone numbers.</p>
          <p>Our Registered CAC NUMBER <span className='text-blue-400'>1979182</span></p>
        </div>

        <div className='flex justify-between text-center md:flex-row flex-col px-8'>

          <div className='p-4'>
            <div className="bg-sky-950 rounded-lg p-4 inline-block">
            <MdOutlinePhonelinkRing className='text-2xl text-white' />
            </div>
            <p>+234-912-801-2884</p>
          </div>

          <div className='p-4'>
            <div className="bg-sky-950 rounded-lg p-4 inline-block">
            <SlLocationPin className='text-2xl  text-white' />
            </div>
            <p>C/O National Staduim, Surulere.</p>
          </div>

          <div className='p-4'>
            <div className="bg-sky-950 rounded-lg p-4 inline-block">
              <MdAlternateEmail className='text-2xl text-white' />
            </div>
            <p className="">africafootballempowermentcongr@gmail.com</p>
          </div>

          <div className='p-4'>
            <div className="bg-sky-950 rounded-lg p-4 inline-block">
              <BsWhatsapp className='text-2xl text-white' />
            </div>
            <p className="">+234-80-3833-8613</p>
          </div>
        </div>


        <div>
          <div>
            <p>Management</p>
          </div>

          <div>
          <img src={President} alt='members'/>
          </div>

          <div>
          <img  src={Vice} alt='members'/>
          </div>

          <div>
          <img  src={Randy} alt='members'/>
          </div>

          <div>
          <img  src={Australian} alt='members'/>
          </div>
          
        </div>
      </div>
    </>
  )
}

export default Contactus;
