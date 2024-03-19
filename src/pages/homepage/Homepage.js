import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import VideoBg from "../../assets/football-video.mp4";
import Femaleaction from "../../assets/femaleaction.jpg";
import Streetphoto from "../../assets/streetphoto.jpg";
import Throwplayer from "../../assets/throwplayer.jpg";
import Femaleplayer from "../../assets/femaleplayer.jpg";
import { FaExclamationCircle } from "react-icons/fa";
import Tournament from '../../assets/tornament.jpg';
import Screening from '../../assets/screening-football.jpg'
import Femaletournament from "../../assets/female-tornament.jpg";
import Disabled from "../../assets/disabled.jpg";



const Homepage = () => {

  const [cards] = useState([
    { id: 1, title: 'Card 1', image: Throwplayer, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: 2, title: 'Card 2', image: Streetphoto, text: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.' },
    { id: 3, title: 'Card 3', image: Femaleplayer, text: 'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.' },
    { id: 4, title: 'Card 4', image: Femaleaction, text: 'Etiam porta sem malesuada magna mollis euismod.' },
    { id: 5, title: 'Card 4', image: Femaleaction, text: 'Etiam porta sem malesuada magna mollis euismod.' },
    { id: 6, title: 'Card 4', image: Femaleaction, text: 'Etiam porta sem malesuada magna mollis euismod.' },
    { id: 7, title: 'Card 4', image: Femaleaction, text: 'Etiam porta sem malesuada magna mollis euismod.' }
  ]);

  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    setStartIndex(prevIndex => Math.min(prevIndex + 2, cards.length - 3));
  };

  const handlePrev = () => {
    setStartIndex(prevIndex => Math.max(prevIndex - 2, 0));
  };




  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const targetElement = document.querySelector(location.hash);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 200 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 0 }}
      transition={{ delay: 0.25, type: 'spring' }}
      className="landing"
    >

      <section className='bg-gradient-to-r from-blue-50 to-blue-sky-400'>
        <div className="w-full video">
          <div className='overlay'></div>
          <video className='' src={VideoBg} autoPlay loop muted />
          <div className="font-mono content absolute w-full h-full flex top-0 items-center flex-col justify-center">
            <h2 className=' text-4xl text-white text-center pb-12'>African Fooball</h2>
            <h1 className=' text-6xl text-center text-yellow-400'>Empowerment Congress</h1>
          </div>
        </div>
        <div className="flex flex-col w-full  mt-8 ">
          <div>
            <h1 className='font-extrabold text-4xl items-start mx-8 mt-3 px-8'>Latest News</h1>
          </div>
          <div className="flex w-full h-full flex-wrap justify-center p-5">
            {cards.slice(startIndex, startIndex + 3).map(card => (
              <div key={card.id} className="custom-shadow bg-white m-4 lg:w-96 h-screen rounded-lg ">
                <img src={card.image} alt={card.title} className="justify-center rounded-md" />
                <p className="text-center mt-2 text-xl font-semibold justify-self-start">{card.title}</p>
                <p className="text-center mt-2 text-gray-900 items-start text-base ">{card.text}</p>
              </div>
            ))}
          </div>
          {cards.length > 2 && (
            <div className="mt-4 flex justify-center">
              <button
                className={`px-2 py-1 mr-2 rounded-full border border-gray-400 ${startIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                onClick={handlePrev}
                disabled={startIndex === 0}
              >
                Prev
              </button>
              <button
                className={`px-2 py-1 rounded-full border border-gray-400 ${startIndex + 3 >= cards.length ? 'opacity-50 cursor-not-allowed' : ''}`}
                onClick={handleNext}
                disabled={startIndex + 2 >= cards.length}
              >
                Next
              </button>
            </div>
          )}
        </div>



      </section>
      <section className="mx-auto bg-sky-950 my-8 md:my-16 py-8 md:py-16 px-4 md:px-8 lg:px-80 xl:px-20 rounded-2xl max-w-6xl ">
        <div className="my-2 md:my-4">
          <p className="font-extrabold text-lg md:text-2xl lg:text-3xl xl:text-4xl text-center text-white">Our Vision</p>
        </div>
        <div>
          <p className="text-sm md:text-base lg:text-base xl:text-base text-center text-blue-200 px-16">
            Our Vision is to empower individuals and team football players in Nigeria and beyond for a common goal regards to talent/skills and dreams on football to come true.
            <br /><br />
            We want to advance grassroots football players through founder metal legal perspective and legitimate means by removing them from behind the camera to playing front of the camera.
            <br /><br />
            We have alliances with coaches and big football team players in Africa and beyond on special offers for the great academy, tournament, and scouting programs.
            <br /><br />
            We have teams on call around the clock that can take care and test the agility of a single player response to training guard. During our field training program, we can accommodate teams techniques that lead to external league standard.
          </p>
        </div>
      </section>
      <section>
        <div className='text-center'>
          <p className='text-blue-600 text-lg sm:text-xl md:text-2xl'>What We Do</p>
          <h1 className='text-3xl sm:text-4xl md:text-5xl'>Our main events</h1>
          <h3 className='mt-5 text-blue-600 text-sm sm:text-md md:text-lg mx-4 sm:mx-12 md:mx-20 md:px-12 lg:px-40 mx-36'>We believe that it is important to make a tournament a lifelong memory. With moments for everyone – moments of harmony and fellowship - moments where everyone comes together.</h3>
        </div>
        <div className=" grid-flow-row p-5 mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 justify-items-center ">
          <div className=''>
            <img src={Tournament} alt="action" className=" lg:w-full rounded-2xl w-full h-full max-h-60" />
            <div className="flex items-center mt-2">
              <FaExclamationCircle className="w-8 h-8 mr-2" />
              <p className="text-sm font-semibold">Tournament Hosting</p>
            </div>
          </div>
          <div className=''>
            <img src={Screening} alt="action" className=" lg:w-full rounded-2xl w-full h-full max-h-60 " />
            <div className="flex items-center mt-2">
              <FaExclamationCircle alt="Logo 2" className="w-8 h-8 mr-2" />
              <p className="text-sm font-semibold">Screening and scouting</p>
            </div>
          </div>
          <div className=''>
            <img src={Femaletournament} alt="action" className=" lg:w-full rounded-2xl w-full h-full max-h-60" />
            <div className="flex items-center mt-2">
              <FaExclamationCircle className="w-8 h-8 mr-2" />
              <p className="text-sm font-semibold">Female Tournaments</p>
            </div>
          </div>
          <div className=''>
            <img src={Disabled} alt="action" className=" lg:w-full rounded-2xl w-full h-full max-h-60 " />
            <div className="flex items-center mt-2">
              <FaExclamationCircle alt="Logo 2" className="w-8 h-8 mr-2" />
              <p className="text-sm font-semibold">Amputee/Disabled</p>
            </div>
          </div>
        </div>

      
      </section>
    </motion.div>
  );
};

export default Homepage;
