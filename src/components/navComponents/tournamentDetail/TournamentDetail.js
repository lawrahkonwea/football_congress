import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { tournamentData } from '../data/tournamentData';
import { FaCheckDouble } from "react-icons/fa";
import Underseventeen from "../../../assets/underseventeen.jpg"
// import { MdDetails } from 'react-icons/md';

const TournamentDetail = () => {
  const centersDetails = tournamentData;
  const { centersId } = useParams();
  const navigate = useNavigate();
  const centersDetail = centersDetails?.filter((centersDetail) => (centersDetail.id === centersId));

  return (
    <div className="pt-[140px]">
      <nav className="flex justify-between items-center gap-2 px-4 mb-4 text-blue-950">
        <p className="text-[20px] font-[500] text-[#000]">{centersDetail[0].title}</p>
        <div className="flex gap-4 items-center">
          {centersDetails.slice(0, 3).map((td, index) => (
            <div key={index} onClick={() => navigate(`/centers_details/${td.id}`)}>
              {td.title !== centersDetail[0].title ? (
                <p className="opacity-50 hover:opacity-100 cursor-pointer">{td.title}</p>
              ) : null}
            </div>
          ))}
        </div>
      </nav>
      <hr />
      <section className="px-4 mt-6 text-cyan-900">
        <div className='text-center items-start'>
          
        <img className='mt-4 custom-shadow inline-block w-full h-auto md:h-auto md:w-[500px] rounded-lg mb-2 object-cover object-center' src={Underseventeen} alt='student' />
         

        </div>
        <div className="mt-[5%]">
          {centersDetail[0].content.map((detail, index) => (
            <div className="my-4 md:px-[15%]" key={index}>
              <h1 className='text-[23px] text-cyan-900 font-bold text-[#000]'>{detail.titleMain}</h1>
               <h1 className=''>{detail.titleName}</h1>
              <h1 className="text-[23px] text-cyan-900 font-extrabold text-[#000]">{detail.ruleTitle}</h1>
              <h1 className="">{detail.subRule}</h1>
              <div  className="px-4 md:px-16 flex items-start md:items-center gap-2 mt-5">
                <div className='mr-5'>
                  < FaCheckDouble />
                </div>
                <p>{detail.ruleDesc}</p>
              </div>

            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TournamentDetail;
