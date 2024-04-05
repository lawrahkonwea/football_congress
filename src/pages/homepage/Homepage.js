import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

import { motion } from 'framer-motion';
import { useLocation, Link } from 'react-router-dom';
import { ReactComponent as List } from '../../assets/svg/list terms.svg';
import VideoBg from "../../assets/football-video.mp4";
import Femaleaction from "../../assets/grassroot_female.jpg";
import Streetphoto from "../../assets/streetphoto.jpg";
import Singleplayer from "../../assets/single player.jpg"
import Throwplayer from "../../assets/throwplayer.jpg";
import Femaleplayer from "../../assets/femaleplayer.jpg";
import Capman from "../../assets/yoruba testimonial.jpg"
import Young from "../../assets/young testimonial.jpeg"
import { FaStarOfDavid } from "react-icons/fa";
import { GiLaurelsTrophy } from "react-icons/gi";
import { GiHeadShot } from "react-icons/gi";
import { BiLogoDribbble } from 'react-icons/bi';
import Tournament from '../../assets/tornament.jpg';
import Screening from '../../assets/screening-football.jpg'
import Femaletournament from "../../assets/female-tornament.jpg";
import Disabled from "../../assets/disabled.jpg";
import Fifa from "../../assets/Fifa President.jpg"
import President from "../../assets/afec-president.jpg"
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { Typed } from 'react-typed'
import { FaRegCommentDots } from "react-icons/fa6";
import logo from "../../assets/AFEC LOGO 3.png";

import "./index.css";

const Homepage = () => {

  const [ref, inView] = useInView({
    triggerOnce: false,
  });
  const [scrollY, setScrollY] = useState(false);

  useEffect(() => {
    if (inView) {
      setScrollY(true);
    }
  }, [inView]);

  const [cards] = useState([
    { id: 1, subTitle: 'Afec Football', title: 'Lagos State FA Cup Final', image: Singleplayer, text: 'The Lagos State FA Cup Finals opened with grandeur and excitement. The event showcased the best of Lagos football culture, with teams ready to compete for victory.', date: '31st, March 2024.' },
    { id: 2, subTitle: 'Afec Football', title: 'Refugee Football Tournament', image: Streetphoto, text: 'The refugee football tournament for peace in Monrovia to promote peace in the Country. It was accompanied with great ethusiasm and zeal for the better good. ', date: '20th, Feb 2024.' },
    { id: 3, subTitle: 'Meet the world', title: '13th African Games Accra', image: Femaleplayer, text: ' Set against the backdrop of empowerment and athleticism, the event was a fierce competition and unforgettable moments on the field. Stay tuned as female athletes showcase their talent and passion for the beautiful game.', date: '20th, March 2024.' },
    { id: 4, subTitle: 'Afec Football', title: 'New Football Tournament to kickoff', image: Throwplayer, text: 'The tournament schdeuled for October this year is set to commence in ikorodu and will bear the nameAyangbure of Ikorodu', date: '4th, March 2024.' },
    { id: 5, subTitle: 'Afec Football', title: 'Football association in Conjunction with Lagos State', image: Femaleaction, text: 'The Lagos State Football Association held a seminar in conjunction with Lagos State Domestic and Sexual Violence Agency for the girl child', date: '18th, March 2024.' },
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
      icon: <GiLaurelsTrophy alt="logo" className='text-2xl text-white' />,
      title: "Tournament Hosting",
      text: "Hosting tournaments goes beyond matches; it's about community, sportsmanship, and talent nurturing. At Afec Football Congress, we offer top facilities, fair play, and memorable experiences. From grassroots to championships, we create an atmosphere where passion thrives and dreams take flight.",
      id: 1,
    },
    {
      img: Screening,
      icon: <FaStarOfDavid alt="logo" className='text-2xl text-white' />,
      title: "Screening and scouting",
      text: "We meticulously screen and scout for talent. Our process is dedicated to identifying individuals who not only possess exceptional skill but also align with our values of commitment and growth.  We leave no stone unturned in our pursuit of top talent, ensuring our team is comprised of the best individuals both on and off the field.",
      id: 2,
    },
    {
      img: Femaletournament,
      icon: <GiLaurelsTrophy alt="logo" className='text-2xl text-white' />,
      title: "Female Tournaments",
      text: "We champion equality in sports, hosting tournaments for female athletes. Our commitment extends beyond the pitch, fostering a supportive environment for talent to flourish. We showcase female prowess, inspire future generations, and contribute to women's football growth.",
      id: 3,
    },
    {
      img: Disabled,
      icon: <GiHeadShot alt="logo" className='text-2xl text-white' />,
      title: "Amputee/Disabled",
      text: "We celebrate diversity in football, offering opportunities for amputee and disabled players to showcase their skills and inspire others. it has been beautiful as we see dreams come to life. Together, let's champion equality and inclusion on the field, fostering a community where everyone can thrive",
      id: 4,
    },
  ]

  const helpOpt = [
    {
      title: <>Register</>,
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

  const registerIndex = 0;
  const contactIndex = 2;


  const testimonyEvent = [
    {
      text: "This is the kind of inter-schools tournament that will enable African Countries to develop grassroot football and detect the future class football players",
      img: Fifa,
      title: "Giovani Vincenzo Infantino",
      country: "Italy",
    },
    {
      text: "When I was growing up, I realised that not everyone has the same opportunities. It makes me so happy to have been able to help create opportunities for young people through the Afec Football – young people who may not always have the best conditions. And of course, Afec, which has done an amazing job.",
      img: President,
      title: "Samuel V.O Johnson",
      country: "Nigeria",
    },
    {
      text: "It is a great honor to be part of this family and contribute to providing thousands of young African players with the unique experience of multiculturalism through football. Accepting this challenge was daunting, but I am increasingly proud to help fulfill dreams and create lifelong memories for our community.",
      img: Young,
      title: "Gerald Osifo",
      country: "Monrovia",
    },
    {
      text: "Being part of Afec Football Congress has been an incredible journey. The sense of belonging to a community that values diversity, inclusivity, and excellence in football is truly inspiring.",
      img: Capman,
      title: "Garry Greatman",
      country: "Liberia",
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
          <div className="content absolute w-full h-full flex flex-wrap top-0 items-center flex-col justify-center">
            <span className="px-4 text-white md:text-4xl text-2xl text-left desktop:text-[36px] font-bold"></span>
            <span className="px-[3px] text-yellow-400 md:text-6xl text-3xl text-right desktop:text-[36px] font-bold"></span>

            <div className="flex items-center justify-center gap-4 mt-4">
              <a href="https://www.facebook.com/samuelonyekajohnson?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer">
                <FaFacebook className='w-9 h-9 text-slate-400' />
              </a>
              <a href="https://www.instagram.com/africa__footballec" target="_blank" rel="noopener noreferrer">
                <FaInstagram className='w-9 h-9 text-slate-400' />
              </a>
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                <AiOutlineYoutube className='w-9 h-9 text-slate-400' />
              </a>
              <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className='w-9 h-9 text-slate-400' />
              </a>
            </div>
          </div>
          <div className="bg-sky-800">
            <p className="text-center px-4 py-[10px] text-[#fff]">JAN-DEC • 2024 • AFEC, AFRICA</p>
          </div>
          <div className="bg-sky-700 flex justify-around items-center gap-4">
            {helpOpt.map((opt, index) => (
              <div className="px-4 py-4 flex justify-center flex-col">
                <p className="m-auto pb-[2px]">{opt.icon}</p>
                {index === registerIndex ? (
                  <Link to='/register' className="text-[#fff]">{opt.title}</Link>
                ) : index === contactIndex ? (
                  <Link to='/contacts' className="text-[#fff]">{opt.title}</Link>
                ) : (
                  <span className="text-[#fff]">{opt.title}</span>
                )}

              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="px-4 mb-6">
        <div className="bg-gradient-to-r from-blue-80 to-blue-sky-500 flex mr-8 flex-col w-full justify-center mt-[40%] md:mt-[13%]">
          <div>
            <h1 className='font-extrabold text-4xl md:mx-8 mt-3'>Latest News</h1>
          </div>
          <div className="flex items-center gap-2">
            <button
              className={`px-2 py-1 hidden md:block mr-2 border-none ${isPrevDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
              onClick={handlePrev}
              disabled={isPrevDisabled}
            >
              <MdOutlineArrowBackIosNew className='text-4xl text-blue-400 border-none' />
            </button>
            <div className="flex swiper-wrapper w-full ml-[-3%] overflow-x-auto xscrollbar h-full md:p-6" ref={boxRef}>
              {cards.map(card => (
                <div key={card.id} className="custom-shadow card_container bg-white m-4 w-[100%] md:w-[200px] rounded-lg ">
                  <img src={card.image} alt={card.title} className="justify-center h-[200px] w-full rounded-md" />
                  <div className="p-4">
                    <p className='text-start text-blue-400'>{card.subTitle}</p>
                    <p className="text-start mt-2 text-xl font-semibold">{card.title}</p>
                    <p className="text-start mt-2 text-slate-500">{card.text}</p>
                  </div>
                  <div className='flex items-start gap-2'>
                    <div className="rounded-full p-4 flex items-center">
                      <img src={logo} className='rounded-full w-10 h-10 md:w-12 md:h-12' alt="Logo" />
                    </div>
                    <div className='mt-4 mb-6'>
                      <p className="mb-1 font-meduim">AFEC</p>
                      <p className="text-sm text-gray-500">{card.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button
              className={`px-2 py-1 hidden md:block border-none ${isNextDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
              onClick={handleNext}
              disabled={isNextDisabled}
            >
              <MdOutlineArrowForwardIos className='text-4xl text-blue-400 ' />
            </button>
          </div>
        </div>
        <section className="mx-auto bg-sky-950 my-8 md:my-16 py-8 md:py-16 rounded-2xl max-w-6xl ">
          <div className="my-2 md:my-4">
            <p className="font-extrabold text-lg md:text-2xl lg:text-3xl xl:text-4xl text-center text-white">Our Vision</p>
          </div>
          <div className='text-blue-200 text-sm md:text-base lg:text-base xl:text-base'>
            <div className="px-4 md:px-16 flex items-start md:items-center gap-2">
              <div className='mt-2 md:mt-[1px]'>
                <List />
              </div>
              <p className=" "> Our Vision is to empower individuals and team football players in Nigeria and beyond for a common goal regards to talent/skills and dreams on football to come true.</p>
            </div>
            <div className="px-4 md:px-16 my-4 flex items-start md:items-center gap-2">
              <div className='mt-2 md:mt-[1px]'>
                <List />
              </div>
              <p className=" "> We want to advance grassroots football players through founder metal legal perspective and legitimate means by removing them from behind the camera to playing front of the camera.</p>
            </div>
            <div className="px-4 md:px-16 flex items-start md:items-center gap-2">
              <div className='mt-2 md:mt-[1px]'>
                <List />
              </div>
              <p className=" "> We have alliances with coaches and big football team players in Africa and beyond on special offers for the great academy, tournament, and scouting programs.</p>
            </div>
            <div className="px-4 md:px-16 flex mt-4 items-start md:items-center gap-2">
              <div className='mt-2 md:mt-[1px]'>
                <List />
              </div>
              <p className=" "> We have teams on call around the clock that can take care and test the agility of a single player response to training guard. During our field training program, we can accommodate teams techniques that lead to external league standard.</p>
            </div>
          </div>
        </section>
        <section>
          <div className={`${scrollY ? 'animate__slideInUp' : ''} animate__animated flex-1 text-center`} ref={ref}>
            <p className='text-blue-600 text-lg mt-8'>What We Do</p>
            <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold'>Our main events</h1>
            <h3 className='mt-3 text-slate-500 text-md md:text-lg mx-4 sm:mx-12 md:mx-20 md:px-12 lg:px-40 mx-36'>
              We believe that it is important to make a tournament a lifelong memory. With moments for everyone – moments of harmony and fellowship - moments where everyone comes together.
            </h3>
          </div>
          <div className=" main-event items-center py-2 grid grid-cols-1 md:grid-cols-2 gap-8 h-full w-full md:px-6 justify-center gap-6 my-8 ">
            {mainEvents.map((evnt, index) => (
              <div className='w-full px-2 md:px-8 event_container' key={index}>
                <img src={evnt.img} alt="action" className="rounded-2xl w-full h-auto max-h-60 mb-8" />
                <div className="mt-2">
                  <div className={`flex items-center gap-2 mr-4 mb-2`}>
                    <p className={`w-14 h-14 ${evnt.id === 2 || evnt.id === 3 ? 'bg-yellow-400' : 'bg-sky-600'} rounded-lg p-4 inline-block`}>{evnt.icon}</p>
                    <p className="font-semibold mb-3">{evnt.title}</p>
                  </div>
                  <div>
                    <p className="">{evnt.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className=''>
          <div className=''>
            <div className='text-center'>
              <h1 className='font-bold text-5xl my-4 mt-44'>Afec 2024</h1>
              <p className='text-slate-500 px-8 mb-8'>In 2024 the 3rd edition of Afec Tournament were held. 20740 goals were scored and matches were played on 107 pitches.</p>
            </div>

            <div className='md:flex flex-col items-center justify-center ' ref={ref}>
              <div className='text-center md:flex-row flex flex-col gap-4 md:gap-1'>
                <div className='bg-white custom-shadow py-6 px-24 rounded-md'>
                  <h1 className={`font-bold text-6xl text-sky-800 animate__animated ${scrollY ? 'animate__slideInUp' : ''}`}>200</h1>
                  <p className='text-slate-500'>Teams</p>
                </div>
                <div className='bg-white custom-shadow py-6 px-24 rounded-md'>
                  <h1 className={`font-bold text-6xl text-sky-800 animate__animated ${scrollY ? 'animate__slideInUp' : ''}`}>20</h1>
                  <p className='text-slate-500'>Countries</p>
                </div>
                <div className='bg-white custom-shadow py-6 px-24 rounded-md'>
                  <h1 className={`font-bold text-6xl text-sky-800 animate__animated ${scrollY ? 'animate__slideInUp' : ''}`}>10</h1>
                  <p className='text-slate-500'>Matches</p>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section className='bg-gradient-to-r from-blue-50 to-blue-sky-400'>
          <div className='text-center px-12 mt-44'>
            <h1 className='text-2xl text-sky-400'>Testimonials</h1>
            <h1 className='mt-3 text-2xl font-semibold'>We have worked with thousands of amazing people around the world</h1>
          </div>
          <div className='testimonials mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 h-full w-full px-6 md:px-16'>
            {testimonyEvent.map((testimony, index) => (
              <div className='custom-shadow bg-white rounded-lg px-8 py-8' key={index}>
                <div className='flex-col flex md:flex-row items-start gap-4'>
                  <img className='rounded-full w-10 m-auto h-10 md:w-12 md:h-12' src={testimony.img} alt="test-img" />
                  <div>
                    <h3><FaRegCommentDots className='text-slate-500 text-sm' />{testimony.text}</h3>
                    <p className="font-[600] text-slate-500 mt-2">{testimony.title}</p>
                    <p className='text-[13px] text-slate-500'>{testimony.country}</p>
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
