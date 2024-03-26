import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import './App.css';
import Homepage from './pages/homepage/Homepage';
import Navigation from './components/navigation';
import ParticipantsDetail from './components/navComponents/participantsDetail/ParticipantsDetail';
import Footer from './components/footer';
import About from './components/navComponents/About';

export default function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="app">
      <div className="nav">
        <Navigation />
      </div>
      <AnimatePresence>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/tournament_details/:participantId" element={<ParticipantsDetail />} />
          <Route path="/aboutus" element={<About />} />
        </Routes>
      </AnimatePresence>
      <div>
        <Footer />
      </div>
    </div>
  );
}
