import React from 'react';
import '../css/Navbar.css';
import airbnbLogo from '../assets/logo.png';

function Navbar() {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
        <img
          src={airbnbLogo}
          alt="Airbnb Logo"
          style={{ width: '36px', height: '36px', marginRight: '9px', marginTop: '10px' }} // Adjust size as needed
        />
        Airbnb
      </div>

      {/* Navigation Links */}
      <ul className="navbar-links">
        <li>Home</li>
        <li>Experiences</li>
        <li>Online Experiences</li>
      </ul>

      {/* User Menu */}
      <div className="navbar-user-menu">
        <button>Login</button>
        <button>Signup</button>
      </div>
    </nav>
  );
}

export default Navbar;