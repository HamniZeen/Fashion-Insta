import React from 'react';
import './App.css'; 
import HeroCarousel from './HeroCarousel'; 
import Navbar from './Navbar';
import ContactForm from './ContactForm';


function App() {
  return (
    <div className="App">
     <Navbar/>
      <HeroCarousel />
      <ContactForm />
    </div>
  );
}

export default App;
