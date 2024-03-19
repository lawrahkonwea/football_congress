import React from 'react';
import { FaExclamationCircle } from "react-icons/fa";

const Participant = () => {
  return (

    <div className='nav-participant hidden lg:block bg-white h-full pb-10 pt-5'>
      <ul className='flex'>
        <li className='ml-16 flex items-start'>
          <FaExclamationCircle className='text-4xl mt-1 mr-4' />
          <div>
            <p className='font-bold'>Tournament Information</p>
            <p className=''>The most important information about the tournament</p>
          </div>
        </li>
        <li className='ml-16 flex items-start'>
          <FaExclamationCircle className='text-4xl mt-1 mr-4' />
          <div>
            <p className='font-bold'>Tournament regulations</p>
            <p>Rules of the match</p>
          </div>
        </li>
        <li className='ml-16 flex items-start'>
          <FaExclamationCircle className='text-4xl mt-1 mr-4' />
          <div>
            <p className='font-bold'>Cost/fee</p>
            <p>What does it cost</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Participant;
