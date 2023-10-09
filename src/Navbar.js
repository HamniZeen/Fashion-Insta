import React from 'react';
import './Navbar.css'; 

const Navbar = () => {
  const scrollTo = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h3>FashionInsta</h3>
      </div>
      <div className="navbar-buttons">
        <div className="button-container">
          <button onClick={() => scrollTo('home')}>Home</button>
          <button onClick={() => scrollTo('contact')}>Contact Us</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
