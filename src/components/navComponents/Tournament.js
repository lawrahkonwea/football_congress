import React  from 'react';
import { FaExclamationCircle } from "react-icons/fa";
import { tournamentData } from './data/tournamentData';
import { useNavigate } from 'react-router-dom';


const Tournament = ({ closeModal }) => {
  const centersDetails = tournamentData;
  const navigate = useNavigate();
  return (
  
  <div className='nav-participant hidden lg:block bg-white h-full pb-10 pt-5'>
      <ul className='flex'>
        {centersDetails.map((centersDetail, index) => (
          <li
            className='ml-16 flex items-start cursor-pointer'
            key={index}
            onClick={() => {
              navigate(`/centers_details/${centersDetail.id}`);
              closeModal();
            }}>
            <FaExclamationCircle className='text-4xl mt-1 mr-4' />
            <div>
              <p className='font-bold'>{centersDetail.title}</p>
              <p>{centersDetail.desc}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tournament;
