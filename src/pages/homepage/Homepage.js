import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import Navigation from '../../components/navigation';
import VideoBg from "../../assets/football-video.mp4";

const Homepage = () => {
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
      <div className="w-full video">
        <div className='overlay'></div>
        <video className='' src={VideoBg} autoPlay loop muted />
        <div className="font-mono content absolute w-full h-full flex top-0 items-center flex-col justify-center">
          <h2 className=' text-4xl text-white text-center pb-12'>African Fooball</h2>
          <h1 className=' text-6xl text-center text-yellow-400'>Empowerment Congress</h1>
        </div>
      </div>
      <section className="px-6">
        <div className="my-4">
          <p className="font-extrabold text-[20px]">Latest News</p>
        </div>
      </section>
    </motion.div>
  );
};

export default Homepage;
