import React from 'react'
import Manual from '../../assets/question.png'
import { FaExclamationCircle } from "react-icons/fa";


const About = () => {

  const aboutData = [
    {
      icon: <FaExclamationCircle className="w-8 h-8 mr-2" />,
      title: "Since 2001",
      text: "Afec Cup was first held in 2001. The tournament was started by the football clubs",
    },
    {
      icon: <FaExclamationCircle className="w-8 h-8 mr-2" />,
      title: "Our Organisation",
      text: "Our organization consists of eight full-time employed staff and during the tournament more than 2500 people work.",
    },
    {
      icon: <FaExclamationCircle className="w-8 h-8 mr-2" />,
      title: "Address",
      text: "Through the years, over a million players from a total of 147 countries have participated in the tournament.",
    },
    {
      icon: <FaExclamationCircle className="w-8 h-8 mr-2" />,
      title: "More than a football tournament",
      text: "Encourage and back on moral education and academic scholarships for under 15-18 to overseas.Getting involved in children’s",
    }
  ]

  return (
    <>
    <div className='flex flex-col md:flex-row justify-between px-8'>
    <div className='pt-[200px] font-mono animate__fadeInDown'>
     <h1 className='text-sky-950 text-5xl font-bold'>AFEC Football</h1> 
     <h2 className='text-sky-600 text-4xl mt-2 font-bold'>Empowerment Congress</h2> 
     <p className='mt-5'>AFEC is the world’s largest and most international youth football tournament. Each year, around 1700 teams from 80 nations take part and they play 4500 games on 110 pitches.</p>
    </div>

    <div>
    <img src={Manual} alt="manual" className="w-full h-full animate-pulse pt-3 md:pt-20"/>
    </div>
    </div>

    <div className='items-center text-center'>
      <p className='font-mono'>SINCE 2001</p>
      <h1 className='text-4xl font-bold text-sky-950'>AFEC Cup</h1>
      <p className='px-40'>It’s the teams, and participants from around the world that make the tournament unique. A meeting place for the world’s youth, irrespective of religion, skin color or nationality, with football as the common denominator. </p>
    </div>

      <div>
        {aboutData.map((data, index) => (
          <div key={index}>
            <div>
              <>{data.icon}</>
            </div>
            <div>
              <h2>{data.title}</h2>
              <h2>{data.text}</h2>
            </div>
          </div>
        ))}
    </div>
    </>
  )
}

export default About;
