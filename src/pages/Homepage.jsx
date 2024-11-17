// src/pages/Homepage.js
import React from 'react';
import '../css/Homepage.css';
import homepageImage from '../assets/picture.jpg';
import image1 from '../assets/image1.jpeg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import image4 from '../assets/image4.jpeg';
import image5 from '../assets/image5.jpeg'; // Quaint Farmhouse Escape
import image6 from '../assets/image6.jpg'; // Beautiful Countryside Villa
import image7 from '../assets/image7.jpg'; // Charming Cottage in the Hills
import image8 from '../assets/image8.jpg'; // Picturesque Rural Retreat
import Navbar from '../components/Navbar';
import Searchbar from '../components/Searchbar';
import Categories from '../components/Categories';
import ListingCard from '../components/ListingCard';

function Homepage() {
  return (
    <div className="homepage">
      <Navbar />
      <Searchbar />
      <Categories />
      <div className="listing-container"> {/* Listing Container */}
        <div className="listing-card-container">
          <ListingCard
            image={image1}
            title="Modern Loft in the Heart of the City"
            type="Entire home"
            guests={4}
            bedrooms={2}
            bathrooms={1}
            price={120}
            rating={4.9}
          />
          <ListingCard
            image={image2}
            title="Tranquil Forest Hideaway"
            type="Entire home"
            guests={2}
            bedrooms={1}
            bathrooms={1}
            price={90}
            rating={4.7}
          />
          <ListingCard
            image={image3}
            title="Luxury Oceanfront Condo"
            type="Entire home"
            guests={3}
            bedrooms={2}
            bathrooms={1}
            price={150}
            rating={4.8}
          />
          <ListingCard
            image={image4}
            title="Tropical Paradise Villa"
            type="Entire home"
            guests={5}
            bedrooms={3}
            bathrooms={2}
            price={200}
            rating={4.6}
          />
          <ListingCard
            image={image5} // Quaint Farmhouse Escape
            title="Quaint Farmhouse Escape"
            type="Entire home"
            guests={4}
            bedrooms={2}
            bathrooms={1}
            price={130}
            rating={4.8}
          />
          <ListingCard
            image={image6} // Beautiful Countryside Villa
            title="Beautiful Countryside Villa"
            type="Entire home"
            guests={6}
            bedrooms={3}
            bathrooms={2}
            price={150}
            rating={4.9}
          />
          <ListingCard
            image={image7} // Charming Cottage in the Hills
            title="Charming Cottage in the Hills"
            type="Entire home"
            guests={4}
            bedrooms={2}
            bathrooms={1}
            price={120}
            rating={4.7}
          />
          <ListingCard
            image={image8} // Picturesque Rural Retreat
            title="Picturesque Rural Retreat"
            type="Entire home"
            guests={7}
            bedrooms={3}
            bathrooms={2}
            price={140}
            rating={4.8}
          />
        </div>
      </div>
      {/* Removed Footer from here */}
    </div>
  );
}

export default Homepage;
