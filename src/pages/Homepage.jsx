import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "../css/Homepage.css";
import Navbar from "../components/Navbar";
import SearchBar from "../components/Searchbar";
import Categories from "../components/Categories";
import ListingCard from "../components/ListingCard";

function Homepage() {
  const [listings, setListings] = useState([]); // All listings data
  const [filteredListings, setFilteredListings] = useState([]); // Filtered listings by category
  const [activeCategory, setActiveCategory] = useState("Icons"); // Default category
  const navigate = useNavigate(); // Initialize useNavigate hook

  // Fetch Listings from Backend
  useEffect(() => {
    fetch("http://localhost:5000/api/listings") // Replace with your server URL
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch listings");
        }
        return response.json();
      })
      .then((data) => {
        setListings(data); // Set fetched data
        setFilteredListings(data.filter((listing) => listing.category === "Icons")); // Initialize filtered data
      })
      .catch((error) => console.error("Error fetching listings:", error));
  }, []);

  // Filter listings based on the selected category
  useEffect(() => {
    if (activeCategory) {
      setFilteredListings(listings.filter((listing) => listing.category === activeCategory));
    } else {
      setFilteredListings(listings); // Show all listings if no category is selected
    }
  }, [activeCategory, listings]);

  // Handle card click to navigate to Listing Details page
  const handleCardClick = (id) => {
    navigate(`/listing/${id}`); // Navigate to listing details page
  };

  return (
    <div className="homepage">
      <Navbar />
      <SearchBar onSearch={(query) => console.log(query)} />
      <Categories setActiveCategory={setActiveCategory} />
      <div className="listing-container">
        <div className="listing-card-container">
          {filteredListings.map((listing, index) => (
            <div 
              key={index} 
              onClick={() => handleCardClick(listing.id)} // Add onClick to navigate
              style={{ cursor: 'pointer' }} // Optional: Adds a pointer cursor to indicate it's clickable
            >
              <ListingCard
                image={listing.image}
                title={listing.title}
                type={listing.type}
                guests={listing.guests}
                bedrooms={listing.bedrooms}
                bathrooms={listing.bathrooms}
                price={listing.price}
                rating={listing.rating}
                city={listing.city}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Homepage;
