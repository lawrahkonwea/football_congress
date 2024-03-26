import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { participantsData } from '../data/participantsData';

const ParticipantsDetail = () => {
  const tournamentDetails = participantsData;
  const { participantId } = useParams();
  const navigate = useNavigate();
  const tournamentDetail = tournamentDetails?.filter((tournamentDetail) => (tournamentDetail.id === participantId));

  return (
    <div className="pt-[140px]">
      <nav className="flex justify-between items-center gap-2 px-4 mb-4">
        <p className="text-[20px] font-[500] text-[#000]">{tournamentDetail[0].title}</p>
        <div className="flex gap-4 items-center">
          {tournamentDetails.slice(0, 3).map((td, index) => (
            <div key={index} onClick={() => navigate(`/tournament_details/${td.id}`)}>
              {td.title !== tournamentDetail[0].title ? (
                <p className="opacity-50 hover:opacity-100 cursor-pointer">{td.title}</p>
              ) : null}
            </div>
          ))}
        </div>
      </nav>
      <hr />
      <section className="px-4 mt-6">
        <div className="mt-[5%]">
          {tournamentDetail[0].content.map(detail => (
            <div className="my-4 md:px-[15%]">
              <h1 className="text-[23px] font-extrabold text-[#000]">{detail.ruleTitle}</h1>
              <p>{detail.ruleDesc}</p>
              <p>{detail.subRule1}</p>
              <p>{detail.subRule2}</p>
              <p>{detail.subRule3}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ParticipantsDetail;
