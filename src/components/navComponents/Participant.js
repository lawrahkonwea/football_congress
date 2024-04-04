import React from 'react';
import { participantsData } from './data/participantsData';
import { GiLaurelsTrophy } from "react-icons/gi";
import { useNavigate } from 'react-router-dom';

const Participant = ({ closeModal }) => {
  const tournamentDetails = participantsData;
  const navigate = useNavigate();

  return (
    <div className='nav-participant hidden lg:block bg-white h-full pb-10 pt-5'>
      <ul className='flex'>
        {tournamentDetails.map((tournamentDetail, index) => (
          <li
            className='ml-16 flex items-start cursor-pointer'
            key={index}
            onClick={() => {
              navigate(`/tournament_details/${tournamentDetail.id}`);
              closeModal();
            }}>
              
              <div className="bg-sky-950 rounded-lg p-3 text-center mr-4">
              <GiLaurelsTrophy className='text-2xl  text-white ' />
            </div>
            
            <div className=''>
              <p className='font-bold'>{tournamentDetail.title}</p>
              <p>{tournamentDetail.desc}</p>
            </div>
           
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Participant;
