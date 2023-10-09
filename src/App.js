import React from 'react';
import './App.css'; 
import HeroCarousel from './HeroCarousel'; 
import Navbar from './Navbar';
import ContactForm from './ContactForm';


function App() {
  return (
    <div className="App">
      <Navbar />
      <div id="home">
        <HeroCarousel />
      </div>
      <div id="contact">
        <ContactForm />
      </div>
    </div>
  );
}

export default App;
