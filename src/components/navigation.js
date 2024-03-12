import React, { useState } from 'react'

import { FiMenu } from 'react-icons/fi';
import { BiLogoDribbble } from 'react-icons/bi';
import { RiCloseLine } from 'react-icons/ri';
import { FcGlobe } from "react-icons/fc";
import { NavLink } from 'react-router-dom';
import logo from '../assets/caf-logo.png';
import clsx from 'clsx';
import SearchBar from './searchbar';



const Navigation = () => {
  const [sideMenuOpen, setMenu] = useState(false);

  const navlinks = [
    {
      label: "Your Participation",
      link: "#"
    },
    {
      label: "Tournament",
      link: "#"
    },
    {
      label: "About us",
      link: "#"
    },
    {
      label: "Donate",
      link: "#"
    }
  ];

  return (
    <>

    {/* top section before nav */}
      <main className='relative'>
        <div className='flex justify-between items-center bg bg-yellow-400 w-full  p-2 px-16 text-white font-sans'>
          <div className='hidden lg:flex text-3xl'> <FcGlobe /></div>
          <div className='flex items-center justify-between '>
            <h3>Gothia Cup 2024 now fully booked!</h3>
          </div>
          <div className='hidden lg:flex'>
            <h3>Create Account</h3>
          </div>
        </div>

        <nav className='flex justify-between px-8 items-center lg:px-10 '>
          <div className="flex items-center gap-8">
            <section className='flex items-center gap-4'>

              {/* logo */}
              <FiMenu onClick={() => setMenu(true)} className='text-3xl cursor-pointer lg:hidden' />

              <NavLink href={"/"} className='text-4xl font-mono '><img className='w-20' src={logo} alt='ball' />
              </NavLink>
            </section>
            {navlinks.map((d, i) => (
              <NavLink
                key={i}
                className="hidden lg:block text-blue-100 hover:bg-blue-400 px-4 py-2 rounded-md transition duration-500 ease-in-out "
                href={d.link}
              >
                {d.label}
              </NavLink>
            ))}

          </div>
          <SearchBar />

          {/* sidebar mobile menu */}
          <div className={clsx(
            'fixed h-full w-screen lg:hidden  top-0 right-0 -translate-x-full transition-all', sideMenuOpen && 'translate-x-0'
          )}
          >

            <section className='text-blue-400 bg-white rounded-lg flex-col absolute left-4 top-4 h-5/6 w-11/12 p-8 gap-8 z-50 flex '>

              <div className='flex justify-between'>
                <RiCloseLine onClick={() => setMenu(false)} className='mt-0 mb-8 text-3xl cursor-pointer' />
                <img className='w-20' src={logo} alt='ball' /></div>


              {navlinks.map((d, i) => (
                <NavLink key={i} className='font-bold' href={d.link}>
                  {d.label}

                </NavLink>
              ))}
            </section>
          </div>

          <section className='flex items-center gap-4 text-3xl'>
            <BiLogoDribbble className='text-white' />
          </section>
        </nav>
        <hr />
      </main>
    </>
  )
}

export default Navigation;
