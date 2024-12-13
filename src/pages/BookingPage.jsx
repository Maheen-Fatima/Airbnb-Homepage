import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"; // useParams to fetch id from the URL
import "../css/BookingPage.css"; // Ensure your CSS is properly imported

function BookingPage() {
  const { id } = useParams(); // Get listing ID from URL
  const [listing, setListing] = useState(null); // State to store listing details
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [guests, setGuests] = useState(1); // Default number of guests
  const [error, setError] = useState(""); // State for error handling
  const navigate = useNavigate(); // For navigation

  // Fetch listing data
  useEffect(() => {
    fetch(`http://localhost:5000/api/listings/${id}`)
      .then((response) => response.json())
      .then((data) => setListing(data))
      .catch((error) => console.error("Error fetching listing:", error));
  }, [id]);

  // Form validation before submission
  const validateForm = () => {
    if (!checkInDate || !checkOutDate || !guests) {
      setError("Please fill in all the fields.");
      return false;
    }
    if (new Date(checkInDate) >= new Date(checkOutDate)) {
      setError("Check-out date must be after the check-in date.");
      return false;
    }
    setError(""); // Clear any previous errors
    return true;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const totalPrice = calculateTotalPrice();
      alert(`Booking confirmed! Total price: $${totalPrice}`);
    }
  };

  // Calculate total price based on the number of nights and guests
  const calculateTotalPrice = () => {
    const pricePerNight = listing.price;
    const checkIn = new Date(checkInDate);
    const checkOut = new Date(checkOutDate);
    const nights = (checkOut - checkIn) / (1000 * 3600 * 24); // Convert milliseconds to days
    return pricePerNight * nights * guests;
  };

  // Navigate to home page
  const navigateHome = () => {
    navigate("/"); // Redirect to homepage
  };

  if (!listing) return <div>Loading...</div>;

  return (
    <div className="booking-page">
      <h1>Book Your Stay</h1>
      <div className="booking-summary">
        <div className="property-details">
          <h2>{listing.title}</h2>
          <p>{listing.type} in {listing.city}</p>
          <p><strong>${listing.price} per night</strong></p>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Check-in Date</label>
          <input
            type="date"
            value={checkInDate}
            onChange={(e) => setCheckInDate(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Check-out Date</label>
          <input
            type="date"
            value={checkOutDate}
            onChange={(e) => setCheckOutDate(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Guests</label>
          <input
            type="number"
            value={guests}
            min="1"
            onChange={(e) => setGuests(e.target.value)}
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit">Confirm Booking</button>
      </form>
      <button className="home-button" onClick={navigateHome}>
        Go to Home
      </button>
    </div>
  );
}

export default BookingPage;
