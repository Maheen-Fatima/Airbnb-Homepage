// src/pages/Homepage.jsx
import React from 'react';
import Navbar from '../components/Navbar';  
import '../css/Homepage.css';
import Searchbar from '../components/Searchbar';  
import homepageImage from '../assets/picture.jpg';  // Adjust this path if needed

function Homepage() {  
  return (
    <div className="homepage">
      <Navbar />
      <Searchbar />

      <div className="homepage-image-container">
        <img src={homepageImage} alt="Beautiful Scenery" className="homepage-image" />
      </div>
    </div>
  );
}

export default Homepage;
