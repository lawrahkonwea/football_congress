import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { tournamentData } from '../data/tournamentData';

const TournamentDetail = () => {
  const centersDetails = tournamentData;
  const { centersId } = useParams();
  const navigate = useNavigate();
  const centersDetail = centersDetails?.filter((centersDetail) => (centersDetail.id === centersId));

  return (
    <div className="pt-[140px]">
      <nav className="flex justify-between items-center gap-2 px-4 mb-4">
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
      <section className="px-4 mt-6">
        <div className="mt-[5%]">
          {centersDetail[0].content.map((detail, index) => (
            <div className="my-4 md:px-[15%]" key={index}>
              <h1 className="text-[23px] font-extrabold text-[#000]">{detail.ruleTitle}</h1>
              <p>{detail.ruleDesc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TournamentDetail;
