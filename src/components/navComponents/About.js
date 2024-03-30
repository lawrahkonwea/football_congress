import React from 'react'
// import Manual from '../../assets/question.png'
import Light from '../../assets/vector.png';
import HackathonGuy from '../../assets/man-wearing-smart-glasses-touching-virtual-screen 1.png';
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
      <div className='px-4 pt-[150px]'>
        <div className='px-4'>
          <div className='h-[100%] bg-red-200 md:ml-[5%] flex flex-col md:flex-row justify-between gap-4'>
            <div className='animate__fadeInDown w-[100%] '>
              <h1 className='text-sky-950 text-5xl font-bold'>AFEC Football</h1>
              <h2 className='text-sky-600 text-4xl mt-2 font-bold'>Empowerment Congress</h2>
              <p className='mt-5'>AFEC is the world’s largest and most international youth football tournament. Each year, around 1700 teams from 80 nations take part and they play 4500 games on 110 pitches.</p>
            </div>

            <div className="w-[100%]  md:ml-[10%]  ">
              <img
                src={HackathonGuy}
                alt="hackathon guy"
                className=" w-[50%] md:w-[70%] mix-blend-luminosity"
              />
              <img
                src={Light}
                alt="light"
                className="App-logo w-[50%] md:w-[70%] mt-[-350px] md:ml-[-10px] mix-blend-hard-light "
              />
            </div>
          </div>
        </div>

        <div className='text-center'>
          <p className=''>SINCE 2001</p>
          <h1 className='text-4xl font-bold text-sky-950'>AFEC Cup</h1>
          <p className='px-4 md:w-[60%] m-auto'>It’s the teams, and participants from around the world that make the tournament unique. A meeting place for the world’s youth, irrespective of religion, skin color or nationality, with football as the common denominator. </p>
        </div>

        <div className='flex justify-center flex-wrap'>
          {aboutData.map((data, index) => (
            <div className='md:w-[40%]' key={index}>
              <div className='flex items-start gap-2'>
                <p>{data.icon}</p>
                <div>
                  <h2 className='font-[600]'>{data.title}</h2>
                  <h2 className='text-[13px]'>{data.text}</h2>
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
