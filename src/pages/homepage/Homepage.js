import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { ReactComponent as List } from '../../assets/svg/list terms.svg';
import VideoBg from "../../assets/football-video.mp4";
import Femaleaction from "../../assets/femaleaction.jpg";
import Streetphoto from "../../assets/streetphoto.jpg";
import Throwplayer from "../../assets/throwplayer.jpg";
import Femaleplayer from "../../assets/femaleplayer.jpg";
import { FaExclamationCircle } from "react-icons/fa";
import { BiLogoDribbble } from 'react-icons/bi';
import Tournament from '../../assets/tornament.jpg';
import Screening from '../../assets/screening-football.jpg'
import Femaletournament from "../../assets/female-tornament.jpg";
import Disabled from "../../assets/disabled.jpg";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { Typed } from 'react-typed';

import "./index.css";

const Homepage = () => {

  const [cards] = useState([
    { id: 1, title: 'Card 1', image: Throwplayer, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: 2, title: 'Card 2', image: Streetphoto, text: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.' },
    { id: 3, title: 'Card 3', image: Femaleplayer, text: 'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.' },
    { id: 4, title: 'Card 4', image: Femaleaction, text: 'Etiam porta sem malesuada magna mollis euismod.' },
    { id: 5, title: 'Card 5', image: Femaleaction, text: 'Etiam porta sem malesuada magna mollis euismod.' },
    { id: 6, title: 'Card 6', image: Femaleaction, text: 'Etiam porta sem malesuada magna mollis euismod.' },
    { id: 7, title: 'Card 7', image: Femaleaction, text: 'Etiam porta sem malesuada magna mollis euismod.' },
    { id: 8, title: 'Card 8', image: Femaleaction, text: 'Etiam porta sem malesuada magna mollis euismod.' },
  ]);

  const boxRef = useRef(null);
  const [isPrevDisabled, setPrevDisabled] = useState(true);
  const [isNextDisabled, setNextDisabled] = useState(false);

  const handlePrev = () => {
    const box = boxRef.current;
    if (box) {
      // const width = box.clientWidth;
      box.scrollLeft -= 450;
    }
  };

  const handleNext = () => {
    const box = boxRef.current;
    if (box) {
      // const width = box.clientWidth;
      box.scrollLeft += 450;
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const box = boxRef.current;
      if (box) {
        setPrevDisabled(box.scrollLeft === 0);
        setNextDisabled(box.scrollLeft + box.clientWidth >= box.scrollWidth);
      }
    };

    const box = boxRef.current;
    if (box) {
      box.addEventListener('scroll', handleScroll);
      return () => {
        box.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const targetElement = document.querySelector(location.hash);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const mainEvents = [
    {
      img: Tournament,
      icon: <FaExclamationCircle className="w-8 h-8 mr-2" />,
      title: "Tournament Hosting",
      text: "lorem Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
      id: 1,
    },
    {
      img: Screening,
      icon: <FaExclamationCircle alt="logo" className="w-8 h-8 mr-2" />,
      title: "Screening and scouting",
      text: "lorem Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
      id: 2,
    },
    {
      img: Femaletournament,
      icon: <FaExclamationCircle className="w-8 h-8 mr-2" />,
      title: "Female Tournaments",
      text: "lorem Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
      id: 3,
    },
    {
      img: Disabled,
      icon: <FaExclamationCircle alt="logo" className="w-8 h-8 mr-2" />,
      title: "Amputee/Disabled",
      text: "lorem Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
      id: 4,
    },
  ]



  const helpOpt = [
    {
      title: <>F&amp;Q</>,
      icon: <BiLogoDribbble className='text-white' />,
    },
    {
      title: <>Account</>,
      icon: <BiLogoDribbble className='text-white' />,
    },
    {
      title: <>Contact us</>,
      icon: <BiLogoDribbble className='text-white' />,
    },
  ]

  const testimonyEvent = [
    {
      text: "lorem Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
      img: Tournament,
      title: "Gerald Osifo",
      country: "Nigeria",
    },
    {
      text: "lorem Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
      img: Tournament,
      title: "Gerald Osifo",
      country: "Nigeria",
    },
    {
      text: "lorem Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
      img: Tournament,
      title: "Gerald Osifo",
      country: "Nigeria",
    },
    {
      text: "lorem Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
      img: Tournament,
      title: "Gerald Osifo",
      country: "Nigeria",
    }
  ]

  // span on hero section
  useEffect(() => {
    const options = {
      strings: ['African Football'],
      typeSpeed: 50,
      backSpeed: 50,
      cursorChar: '',
    };

    const typedLeft = new Typed('.text-left', options);

    const optionsRight = {
      ...options,
      strings: ['Empowerment Congress'],
    };

    const typedRight = new Typed('.text-right', optionsRight);

    return () => {
      typedLeft.destroy();
      typedRight.destroy();
    };
  }, []);

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
          <div className="font-sans content absolute w-full h-full flex top-0 items-center flex-col justify-center">
            {/* <h2 className=' text-4xl text-white text-center pb-12'>African Fooball</h2>
            <h1 className=' text-6xl text-center text-yellow-400'>Empowerment Congress</h1> */}

            <span className="text-white text-4xl text-left desktop:text-[36px] font-bold"></span>
            <span className=" text-yellow-400 text-6xl text-right desktop:text-[36px] font-bold"></span>

            <div className="flex items-center justify-center gap-4 mt-4">
              <p><FaFacebook className='w-9 h-9 text-slate-400' /></p>
              <p><FaInstagram className='w-9 h-9 text-slate-400' /></p>
              <p><AiOutlineYoutube className='w-9 h-9 text-slate-400'/></p>
              <p><FaWhatsapp className='w-9 h-9 text-slate-400' /></p>
            </div>
          </div>
          <div className="bg-sky-800">
            <p className="text-center px-4 py-[10px] text-[#fff]">JAN-DEC • 2024 • AFEC, AFRICA</p>
          </div>
          <div className="bg-sky-700 flex justify-around items-center gap-4">
            {helpOpt.map((opt) => (
              <div className="px-4 py-4 flex justify-center flex-col">
                <p className="m-auto pb-[2px]">{opt.icon}</p>
                <p className="text-[#fff]">{opt.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="px-4">
        <div className="flex mr-8 flex-col w-full justify-center mt-[40%] md:mt-[13%] ">
          <div>
            <h1 className='font-extrabold text-4xl items-start mx-8 mt-3'>Latest News</h1>
          </div>
          <div className="flex items-center gap-2">
            <button
              className={`px-2 py-1 mr-2 border-none ${isPrevDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
              onClick={handlePrev}
              disabled={isPrevDisabled}
            >
              <MdOutlineArrowBackIosNew className='md:hidden lg:block text-4xl text-blue-400 border-none' />
            </button>
            <div className="flex swiper-wrapper ml-[-10%] md:ml-[-3%] w-full overflow-x-auto xscrollbar h-full p-5" ref={boxRef}>
              {cards.map(card => (
                <div key={card.id} className="custom-shadow card_container bg-white m-4 w-[200px] rounded-lg ">
                  <img src={card.image} alt={card.title} className="justify-center h-[200px] w-full rounded-md" />
                  <div className="p-4">
                    <p className="text-center mt-2 text-xl font-semibold">{card.title}</p>
                    <p className="text-center mt-2 text-gray-900">{card.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <button
              className={`px-2 py-1 border-none ${isNextDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
              onClick={handleNext}
              disabled={isNextDisabled}
            >
             <MdOutlineArrowForwardIos className='md:hidden lg:block text-4xl text-blue-400 ' />
            </button>
          </div>
        </div>
        <section className="mx-auto bg-sky-950 my-8 md:my-16 py-8 md:py-16 rounded-2xl max-w-6xl ">
          <div className="my-2 md:my-4">
            <p className="font-extrabold text-lg md:text-2xl lg:text-3xl xl:text-4xl text-center text-white">Our Vision</p>
          </div>
          <div className='text-blue-200 text-sm md:text-base lg:text-base xl:text-base text-center'>
          <div className="px-16 flex gap-[3px]">
                  <div className=''>
                    <List />
                  </div>
                  <p className=" "> Our Vision is to empower individuals and team football players in Nigeria and beyond for a common goal regards to talent/skills and dreams on football to come true.</p>
          </div>
          <div className="px-16 flex gap-[3px] mt-5">
                  <div className=''>
                    <List />
                  </div>
                  <p className=" "> We want to advance grassroots football players through founder metal legal perspective and legitimate means by removing them from behind the camera to playing front of the camera.</p>
          </div>
          <div className="px-16 flex gap-[3px] mt-5">
                  <div className=''>
                    <List />
                  </div>
                  <p className=" "> We have alliances with coaches and big football team players in Africa and beyond on special offers for the great academy, tournament, and scouting programs.</p>
          </div>
          <div className="px-16 flex gap-[3px] mt-5">
                  <div className=''>
                    <List />
                  </div>
                  <p className=" "> We have teams on call around the clock that can take care and test the agility of a single player response to training guard. During our field training program, we can accommodate teams techniques that lead to external league standard.</p>
          </div>
          </div>
        </section>
        <section>
          <div className='text-center'>
            <p className='text-blue-600 text-lg sm:text-xl md:text-2xl'>What We Do</p>
            <h1 className='text-3xl sm:text-4xl md:text-5xl'>Our main events</h1>
            <h3 className='mt-5 text-blue-600 text-sm sm:text-md md:text-lg mx-4 sm:mx-12 md:mx-20 md:px-12 lg:px-40 mx-36'>
              We believe that it is important to make a tournament a lifelong memory. With moments for everyone – moments of harmony and fellowship - moments where everyone comes together.
            </h3>
          </div>
          <div className="main-event items-center grid grid-cols-1 md:grid-cols-2 gap-8 h-full w-full px-6 justify-center gap-6 my-8 ">
            {mainEvents.map((evnt, index) => (
              <div className='w-full px-8 event_container' key={index}>
                <img src={evnt.img} alt="action" className="rounded-2xl w-full h-auto max-h-60" />
                <div className="flex items-center mt-2">
                  <>{evnt.icon}</>
                  <p className="text-sm font-semibold">{evnt.title}</p>
                </div>
                <p className="text-sm px-10 ">{evnt.text}</p>
              </div>
            ))}
          </div>
        </section>
        <section className='bg-gradient-to-r from-blue-50 to-blue-sky-400'>
          <div className='text-center  '>
            <h1 className='text-2xl text-sky-400'>Testimonials</h1>
            <h1 className='mt-3 px-8 text-3xl font-bold'>We have worked with thousands of amazing people around the world</h1>
          </div>
          <div className='testimonials mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 h-full w-full px-6 md:px-16'>
            {testimonyEvent.map((testimony, index) => (
              <div className='custom-shadow bg-white rounded-lg px-8 py-8' key={index}>
                <h3 className='px-8'>{testimony.text}</h3>
                <div className='flex items-center gap-4'>
                  <img className='rounded-full w-10 h-10 md:w-12 md:h-12' src={testimony.img} alt="test-img" />
                  <div>
                    <p>{testimony.title}</p>
                    <p className='text-sm'>{testimony.country}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </section>
      </div>
    </motion.div>
  );
};

export default Homepage;
