import React from 'react';
import { FaExclamationCircle } from "react-icons/fa";

const Tournament = () => {
  return (
    <div className='hidden lg:block bg-white h-full pb-8 pt-5 cursor-pointer'>
    <ul className='flex '>
      <li className='ml-16 flex items-start '>
        <FaExclamationCircle className='text-4xl mt-1 mr-4' />
        <div>
          <p className='font-bold'>The centers</p>
          <p className=''>Our events areas</p>
        </div>
      </li>
      <li className='ml-16 flex items-start'>
        <FaExclamationCircle className='text-4xl mt-1 mr-4' />
        <div>
          <p className='font-bold'>Opening Ceremonies</p>
          <p>An evening to remember</p>
        </div>
      </li>
      {/* <li className='ml-16 flex items-start'>
        <FaExclamationCircle className='text-4xl mt-1 mr-4' />
        <div>
          <p className='font-bold'>Cost/fee</p>
          <p>What does it cost</p>
        </div>
      </li> */}
    </ul>
  </div>
  );
};

export default Tournament;
