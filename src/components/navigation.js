import React, { useState } from 'react';
import Participant from './navComponents/Participant';
import { FaExclamationCircle } from "react-icons/fa";
import { tournamentData } from './navComponents/data/tournamentData';
import { participantsData } from './navComponents/data/participantsData';
import Tournament from './navComponents/Tournament';
// import About from './navComponents/About'
import { FiMenu } from 'react-icons/fi';
import { BiLogoDribbble } from 'react-icons/bi';
import { RiCloseLine } from 'react-icons/ri';
import { FcGlobe } from "react-icons/fc";
import { RiArrowDropDownLine } from "react-icons/ri";
import { NavLink, useNavigate, Link } from 'react-router-dom';
import logo from '../assets/AFEC LOGO 3.png';
import clsx from 'clsx';
import SearchBar from './searchbar';



const Navigation = () => {

  const sideMenu = participantsData;
  const sideTournament = tournamentData;
  const navigate = useNavigate();

  const [sideMenuOpen, setMenu] = useState(false);
  const [showParticipation, setShowParticipation] = useState(false);
  const [showTournament, setShowTournament] = useState(false);
  const [modalActive, setModalActive] = useState(false);
  const [showParticipationSide, setShowParticipationSide] = useState(false);
  const [showTournamentSide, setShowTournamentSide] = useState(false);


  const navlinks = [
    {
      label: "Your Participation",
      link: "#"
    },
    {
      label: "Tournament",
      link: "#"
    },
    {
      label: "About us",
      link: "/aboutus"
    },
    {
      label: "Account",
      link: "/donate"
    }
    
  ];



  const handleParticipationModal = () => {
    setShowParticipation(!showParticipation);
    setShowTournament(false);
    setModalActive(true);
  }

  const handleTournamentModal = () => {
    setShowTournament(!showTournament)
    setShowParticipation(false)
    setModalActive(true);
  }

  const closeModal = () => {
    setShowTournament(false);
    setShowParticipation(false);
    setModalActive(false);
  }

  const handleParticipationSideModal = () => {
    setShowParticipationSide(!showParticipationSide);
    setShowTournamentSide(false);
  }

  const handleTournamentSideModal = () => {
    setShowTournamentSide(!showTournamentSide)
    setShowParticipationSide(false)
  }


  return (
    <>

      {/* top section before nav */}
      <main className=''>
        <section className="fixed w-full z-50 navbar">
          <div className='flex justify-between items-center text-center bg bg-yellow-400 w-full  py-2 px-12 text-white font-sans'>
            <div className='hidden lg:flex text-3xl '> <FcGlobe /></div>
            <div className='flex items-center text-center justify-between '>
              <h3 className=''>AFEC Football 2024 now fully Open!</h3>
            </div>
            <div className='hidden lg:flex'>
              <NavLink to="/register">Register with us!</NavLink>
            </div>
          </div>
          <nav className='flex bg-sky-700 justify-between py-2 px-8 items-center lg:px-10 '>
            <div className="flex items-center gap-8">
              <section className='flex items-center gap-4 '>
                {/* logo */}
                <FiMenu onClick={() => setMenu(true)} className='text-white  text-3xl cursor-pointer lg:hidden' />
                <NavLink to="/" className='text-4xl font-mono '>
                  <img className='w-10 my-1' src={logo} alt='ball' />
                </NavLink>
              </section>
              {navlinks.map((d, i) => (
                <button
                  key={i}
                  className=" hidden lg:flex flex items-center text-blue-100 hover:bg-blue-400 px-4 py-2 rounded-md transition duration-500 ease-in-out"

                  onClick={() => {
                    if (d.label === "Your Participation") {
                      handleParticipationModal();
                    } else if (d.label === "Tournament") {
                      handleTournamentModal();
                    }
                    navigate(`${d.link}`)
                  }}
                >

                  {d.label}
                  {d.label === "Your Participation" || d.label === "Tournament" ? (
                    <RiArrowDropDownLine className='ml-2 text-4xl' />
                  ) : null}
                </button>
              ))}
            </div>
            <SearchBar />


            {/* sidebar mobile menu */}
            <div className={clsx(
              'fixed h-screen w-screen md:hidden top-0 right-0 -translate-x-full transition-all', sideMenuOpen && 'translate-x-0'
            )}
            >
              <section className='overflow-y-auto  bg-white rounded-lg flex-col absolute left-4 top-4 h-5/6 w-11/12 p-8 gap-8 z-50 flex '>
                <div className='flex justify-between'>
                  <RiCloseLine onClick={() => setMenu(false)} className='mt-2 text-3xl cursor-pointer' />
                  <img className='w-12' src={logo} alt='ball' /></div>

                
                <div className='text-blue-950'>
                  <button onClick={() => handleParticipationSideModal()}>
                  <div  className='flex items-center'>
                  <span className='text-lg font-medium'>Your Participation</span>
                  <RiArrowDropDownLine  className='cursor pointer ml-[16px] text-4xl' />
                  </div>
                {sideMenu.map((evnt, index) => (
                  <Link to={`/tournament_details/${evnt.id}`} onClick={() => setMenu(false)} className='' key={index}>
                    {showParticipationSide ? ( 
                      <p className='flex items-center gap-3'><FaExclamationCircle className='text-2xl mt-1 mr-4' />{evnt.title}</p>
                    ) : '' } 
                  </Link>
                ))}
                </button>
                </div>

                <div className=''>
                  <button onClick={() => handleTournamentSideModal()}>
                  <div  className='flex items-center'>
                  <span className='text-lg font-medium'>Tournament</span>
                  <RiArrowDropDownLine  className='cursor pointer text-4xl' />
                  </div>
                {sideTournament.map((evnt, index) => (
                  <Link to={`/centers_details/${evnt.id}`} onClick={() => setMenu(false)} className='' key={index}>
                    {showTournamentSide ? ( 
                      <p className='flex items-center gap-3'><FaExclamationCircle className='text-2xl mt-1 mr-4' />{evnt.title}</p>
                    ) : '' } 
                  </Link>
                ))}
                </button>
                </div>
                <NavLink className='text-lg font-medium' onClick={() => setMenu(false)} to="/aboutus">About</NavLink>
                <NavLink className='text-lg font-medium' onClick={() => setMenu(false)} to="/donate">Donate</NavLink>
  
              </section>
            </div>
            <section className='flex items-center gap-4 text-3xl'>
              <BiLogoDribbble className='text-white' />
            </section>
          </nav>
          {showParticipation && (
            <Participant closeModal={closeModal} />
          )}
          {showTournament && (
            <Tournament closeModal={closeModal} />
          )}
          {
            modalActive && (
              <button onClick={closeModal} className=" w-screen h-screen top-0 bottom-0 left-0 closeModal_button">&apos;</button>
            )
          }
          <hr />
        </section>
      </main>
    </>
  )
}

export default Navigation;
