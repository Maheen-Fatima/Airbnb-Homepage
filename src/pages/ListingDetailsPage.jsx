import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../css/ListingDetailsPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faBath, faUser, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

function ListingDetailsPage() {
  const { id } = useParams();
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:5000/api/listings/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("API Response:", data);
        setListing(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching listing:", err);
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  const handleBookNow = () => {
    navigate(`/booking/${id}`);
  };

  const handleGoHome = () => {
    navigate('/'); // Navigate to the home page
  };

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>;
  if (!listing) return <div className="no-listing">No listing found</div>;

  return (
    <div className="listing-detail-container">
      <div className="listing-card">
        <div className="details-section">
          <h1 className="listing-title">{listing.title}</h1>
          <p className="listing-location">
            <FontAwesomeIcon icon={faMapMarkerAlt} /> {listing.city}
          </p>
          <div className="listing-attributes">
            <p><FontAwesomeIcon icon={faUser} /> {listing.guests} Guests</p>
            <p><FontAwesomeIcon icon={faBed} /> {listing.bedrooms} Bedrooms</p>
            <p><FontAwesomeIcon icon={faBath} /> {listing.bathrooms} Bathrooms</p>
          </div>
          <p className="listing-price">${listing.price} / night</p>
          <div className="listing-rating">
            <p>Rating: {listing.rating} / 5</p>
          </div>

          {/* Hardcoded Amenities Section */}
          <div className="listing-amenities">
            <h3>Essential Amenities:</h3>
            <ul>
              <li>Free Wi-Fi</li>
              <li>Air Conditioning</li>
              <li>Fully Equipped Kitchen</li>
              <li>Free Parking</li>
              <li>TV with Streaming Services</li>
              <li>Washer & Dryer</li>
              <li>24/7 Security</li>
            </ul>
          </div>

          <button className="book-now-button" onClick={handleBookNow}>
            Book Now
          </button>
        </div>
        
        {/* Smaller Home Button Inside the Container */}
        <button className="home-button-small" onClick={handleGoHome}>
          Home
        </button>
      </div>
    </div>
  );
}

export default ListingDetailsPage;
