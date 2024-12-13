// src/components/ListingCard.js
import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import "../css/ListingCard.css"; // Import CSS

function ListingCard({ id, image, title, type, guests, bedrooms, bathrooms, price, rating, city }) {
  const navigate = useNavigate(); // Initialize navigate hook

  // Navigate to the listing details page when the image is clicked
  const handleCardClick = () => {
    navigate(`/listing/${id}`); // Navigate to the ListingDetailsPage with the listing ID
  };

  return (
    <div className="listing-card">
      {/* Make the image clickable to navigate to the listing details page */}
      <img 
        src={image} 
        alt={title} 
        className="listing-card-image" 
        onClick={handleCardClick} // Add onClick to the image
      />
      <div className="listing-card-details">
        <h3 className="listing-card-title">{title}</h3>
        <p className="listing-card-type">{type}</p>
        <p className="listing-card-city">{city}</p> {/* Display the city */}
        <p className="listing-card-info">
          {guests} guests · {bedrooms} bedrooms · {bathrooms} bathrooms
        </p>
        <div className="listing-card-footer">
          <p className="listing-card-price">${price} / night</p>
          <p className="listing-card-rating">★ {rating}</p>
        </div>
      </div>
    </div>
  );
}

export default ListingCard;
