import React from 'react'
// import Manual from '../../assets/question.png'
import Light from '../assets/vector.png';
// import HackathonGuy from '../../assets/man-wearing-smart-glasses-touching-virtual-screen 1.png';
import { FaExclamationCircle } from "react-icons/fa";


const About = () => {

  const aboutData = [
    {
      icon: <FaExclamationCircle className="w-6 h-6 " />,
      title: "Since 2010",
      text: "Afec Cup was first held in 2010. The tournament was started by the football clubs",
    },
    {
      icon: <FaExclamationCircle className="w-6 h-6" />,
      title: "Our Organisation",
      text: "Our organization consists of eight full-time employed staff and during the tournament more than 250 people work.",
    },
    {
      icon: <FaExclamationCircle className="w-6 h-6 " />,
      title: "Address",
      text: "Through the years, over a hundreds of players from a total of 20 countries have participated in the tournament.",
    },
    {
      icon: <FaExclamationCircle className="w-6 h-6" />,
      title: "More than a football tournament",
      text: "Encourage and back on moral education and academic scholarships for under 15-18 to overseas.Getting involved in children’s",
    }
  ]

  return (
    <>
      <div className='px-4 pt-[150px] overflow-hidden'>
        <div className='px-6 md:ml-16'>
          <div className='flex lg:flex-row flex-col justify-around w-full items-center'>
            <div className='animate__fadeInDown w-[100%] '>
              <h1 className='text-sky-950 text-5xl font-bold'>AFEC Football</h1>
              <h2 className='text-sky-600 text-4xl mt-2 font-bold'>Empowerment Congress</h2>
              <p className='mt-5'>AFEC stands as a beacon of global youth football, recognized as the largest and most diverse tournament of its kind. With participation spanning across 80 nations, approximately 1700 teams unite on the field, igniting passion and camaraderie through 4500 exhilarating matches across 110 pitches.</p>
            </div>

            <div className="w-[100%] md:ml-16 text-center">
              <img
                src={Light}
                alt="light"
                // className="App-logo w-[50%] md:w-[70%] mt-[-350px] md:ml-[-10px] mix-blend-hard-light "
                className="App-logo  w-[60%] md:w-[70%] mt-8 w-full"
              />
            </div>
          </div>
        </div>

        <div className='text-center'>
          <p className=''>SINCE 2010</p>
          <h1 className='text-4xl font-bold text-sky-950'>AFEC Cup</h1>
          <p className='px-4 md:w-[60%] m-auto mb-8'>It’s the teams, and participants from around the world that make the tournament unique. A meeting place for the world’s youth, irrespective of religion, skin color or nationality, with football as the common denominator. </p>
        </div>

        <div className='flex justify-center flex-wrap'>
          {aboutData.map((data, index) => (
            <div className='md:w-[40%] ' key={index}>
              <div className='flex items-start gap-2'>
              <div className="bg-sky-950 rounded-lg p-2 text-center mr-4">
                <p className='text-xl text-white '>{data.icon}</p>
                </div>
                <div>
                  <h2 className='font-[600] text-[18px]'>{data.title}</h2>
                  <h2 className='text-[16px] mb-8'>{data.text}</h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default About;
