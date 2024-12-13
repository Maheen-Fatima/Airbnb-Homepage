import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import '../css/Navbar.css';
import airbnbLogo from '../assets/logo.png';

function Navbar() {
  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo" onClick={() => navigate('/')}>
        <img
          src={airbnbLogo}
          alt="Airbnb Logo"
          style={{ width: '36px', height: '36px', marginRight: '9px', marginTop: '10px' }}
        />
        Airbnb
      </div>

      {/* Navigation Links */}
      <ul className="navbar-links">
        <li onClick={() => navigate('/')}>Home</li>
        <li>Experiences</li>
        <li>Online Experiences</li>
      </ul>

      {/* User Menu */}
      <div className="navbar-user-menu">
        <button onClick={() => navigate('/login')}>Login</button>
        <button onClick={() => navigate('/signup')}>Signup</button>
      </div>
    </nav>
  );
}

export default Navbar;
