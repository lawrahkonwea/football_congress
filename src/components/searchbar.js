import React from 'react'
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <div className='hidden lg:flex flex bg-blue-400 w-60 rounded-lg  p-2 items-center'>
    <FaSearch className='text-blue-100'/>
      <input className=' bg-transparent border-0 ml-3 w-full h-full focus:outline-none text-blue-100' placeholder='Search'/>
    </div>
  )
};

export default SearchBar;
