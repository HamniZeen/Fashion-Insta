import React from 'react';
import './Navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h3>FashionInsta</h3>
      </div>
      <div className="navbar-buttons">
  <div className="button-container">
    <button>Home</button>
    <button>Contact Us</button>
  </div>
</div>
  
    </nav>
  );
};

export default Navbar;
