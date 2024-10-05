import React from 'react';
import Navbar from '../components/Navbar';  
import '../css/Homepage.css';
import Searchbar from '../components/Searchbar';  
import Categories from '../components/Categories'; 
import homepageImage from '../assets/picture.jpg'; 

function Homepage() {  
  return (
    <div className="homepage">
      <Navbar />
      <Searchbar />
      <Categories />
      <div className="homepage-image-container">
        <img src={homepageImage} alt="Beautiful Scenery" className="homepage-image" />
      </div>
    </div>
  );
}

export default Homepage;
