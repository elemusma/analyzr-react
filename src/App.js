import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import HeroSection from './components/HeroSection';


function App() {
  return (
    <>
    <Router>  
    <Navbar />
    <Routes>
      <Route exact path='/' element={<Home />} />
    </Routes>
    </Router>
    </>
  );
}

export default App;