import React from 'react';
import '../css/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">Airbnb</div>

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