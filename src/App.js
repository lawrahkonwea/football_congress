import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import './App.css';
import Homepage from './pages/homepage/Homepage';
import Navigation from './components/navigation';

export default function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="app">
      <div className="fixed w-full z-50 navbar">
        <Navigation />
      </div>
      <AnimatePresence>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}
