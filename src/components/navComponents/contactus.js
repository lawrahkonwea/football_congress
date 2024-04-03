import React from 'react'
import { MdOutlinePhonelinkRing } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import { MdAlternateEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import President from '../../assets/Afec-president.jpg'
import Howard from '../../assets/Howard jones.jpg'
import Randy from '../../assets/Randy moore.jpg'
import Vice from '../../assets/afec-vice.jpg'
import Developer from '../../assets/Developer.jpg'
import Fifa from '../../assets/Fifa President.jpg'



const Contactus = () => {
  return (
    <>
      <div className='px-4 pt-[150px]'>
        <div className='text-center px-5'>
          <h1 className='font-extrabold text-3xl'>Contact Us</h1>
          <p>Please don't hesitate to ask us your questions. Below you'll find our email addresses and phone numbers.</p>
          <p>Our Registered CAC NUMBER <span className='text-blue-400'>1979182</span></p>
        </div>

        <div className='flex flex-wrap justify-between text-center md:flex-row flex-col px-8'>

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



        <div className='items-center'>
          <div className='text-center'>
            <div className='inline-block'>
              <img className='bg-zinc-400 md:w-[250px] md:h-[250px] w-full h-auto rounded-lg mb-2' src={Fifa} alt='members' />
              <h3 className='font-semibold'>Giovanni Vincenzo Infantino</h3>
              <p>Fifa President</p>
              {/* Add more text or elements here */}
            </div>
          </div>

          <div className='font-extrabold text-2xl ml-22 mb-2 mt-5'>
            <p>Management and Administration</p>
          </div>


          <div className='flex flex-wrap justify-around gap-8 px-8'>
            <div className='items-center justify-center'>
              <img className=' md:w-[250px] md:h-[250px] w-full h-auto rounded-lg mb-2' src={President} alt='members' />
              <h3 className='font-semibold'>DR. Samuel V.O Johnson</h3>
              <p>AFEC President</p>
            </div>

            <div className='bg-custom-bg items-center justify-center' >
              <img className=' md:w-[250px] md:h-[250px] w-full h-auto rounded-lg mb-2' src={Vice} alt='members' />
              <h3 className='font-semibold'>DR. Diana Ajaine Asak-Johnson</h3>
              <p>AFEC Vice-President</p>
            </div>

            <div className='bg-custom-bg items-center justify-center'>
              <img className=' md:w-[250px] md:h-[250px] w-full h-auto rounded-lg mb-2' src={Developer} alt='members' />
              <h3 className='font-semibold'>Konwea Amaka Laura</h3>
              <p>Web Developer</p>
              <p className='text-slate-500'>+234-703-071-0165</p>
              <p lassName='text-slate-500'>amakalaurakonwea@gmail.com</p>
            </div>
          </div>
        </div>


        <div className=''>
          <div>
            <p className='mt-5 font-extrabold text-2xl ml-6 mb-4 text-center'>Partners</p>
          </div>

          <div className='flex flex-wrap justify-center gap-12 px-8'>
            <div className='items-center justify-center'>
              <img className='bg-zinc-400  md:w-[250px] md:h-[250px] w-full h-auto rounded-lg mb-2' src={Randy} alt='members' />
              <h3 className='font-semibold'>Randy Moore</h3>
              <p>Agent/Partner</p>
            </div>

            <div className='bg-custom-bg items-center justify-center'>
              <img className=' md:w-[250px] md:h-[250px] w-full h-auto rounded-lg mb-2' src={Howard} alt='members' />
              <h3 className='font-semibold'> Howard Jones</h3>
              <p>Agent/Partner</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contactus;
