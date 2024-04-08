import React from 'react'
import { MdOutlinePhonelinkRing } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import { MdAlternateEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import President from '../assets/afec-president.jpg'
import Howard from '../assets/Howard jones.jpg'
import Randy from '../assets/Randy_moore.jpg';
import Vice from '../assets/afec-vice.jpg'
import Developer from '../assets/Developer.jpg'



const Contactus = () => {
  return (
    <>
      <div className='px-4 pt-[150px]'>
        <div className='text-center px-5 flex flex-col justify-center'>
          <h1 className='font-extrabold text-3xl'>Contact Us</h1>
          <p className="mt-2">Please don't hesitate to ask us your questions. Below you'll find our email addresses and phone numbers.</p>
          <p>Our Registered CAC NUMBER <span className='text-blue-400'>1979182</span></p>
        </div>

        <div className='flex flex-wrap justify-center md:justify-between text-center md:flex-row flex-col px-8'>
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
            <p>C/O National Stadium, Surulere.</p>
          </div>

          <div className='p-4'>
            <div className="bg-sky-950 rounded-lg p-4 inline-block">
              <MdAlternateEmail className='text-2xl text-white' />
            </div>
            <p>africafootballempowermentcongr@gmail.com</p>
          </div>

          <div className='p-4'>
            <div className="bg-sky-950 rounded-lg p-4 inline-block">
              <BsWhatsapp className='text-2xl text-white' />
            </div>
            <p>+234-80-3833-8613</p>
          </div>
        </div>

        <div className='text-center mt-8'>
          <h2 className='font-extrabold text-3xl'>Team Members</h2>
        </div>

        <div className='flex flex-wrap justify-center gap-8 px-8 mt-6'>
          <div className='items-center justify-center'>
            <img className='w-full h-[200px] md:h-auto md:max-h-[200px] rounded-lg mb-2 object-cover object-center' src={President} alt='members' />
            <h3 className='font-semibold'>DR. Samuel V.O Johnson</h3>
            <p>AFEC President</p>
          </div>

          <div className='items-center justify-center'>
            <img className='w-full h-[200px] md:h-auto md:max-h-[200px] rounded-lg mb-2 object-cover object-center' src={Vice} alt='members' />
            <h3 className='font-semibold'>DR. Diana Ajaine Asak-Johnson</h3>
            <p>AFEC Vice-President</p>
          </div>

          <div className='items-center justify-center'>
            <img className='w-full h-[200px] md:h-auto md:max-h-[200px] rounded-lg mb-2 object-cover object-center' src={Developer} alt='members' />
            <h3 className='font-semibold'>Konwea Amaka Laura</h3>
            <p>Web Developer</p>
            <p className='text-slate-500'>+234-703-071-0165</p>
            <p className='text-slate-500'>amakalaurakonwea@gmail.com</p>
          </div>
        </div>

        <div className='text-center mt-8'>
          <h2 className='font-extrabold text-3xl'>Partners</h2>
        </div>

        <div className='flex flex-wrap justify-center gap-12 px-8 mb-12'>
          <div className='items-center justify-center'>
            <img className='bg-zinc-400 w-[200px] h-[200px] rounded-lg mb-2 object-cover object-center' src={Randy} alt='members' />
            <h3 className='font-semibold'>Randy Moore</h3>
            <p>Agent/Partner</p>
          </div>

          <div className='bg-custom-bg items-center justify-center'>
            <img className='w-[200px] h-[200px] rounded-lg mb-2 object-cover object-center' src={Howard} alt='members' />
            <h3 className='font-semibold'> Howard Jones</h3>
            <p>Agent/Partner</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contactus;
