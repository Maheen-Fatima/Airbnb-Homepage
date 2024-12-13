// src/App.js
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // use Routes in v6
import "./App.css"; 
import Homepage from './pages/Homepage';
import Footer from './components/Footer';
import Navbar from './components/Navbar'; // Import Navbar
import ListingDetailsPage from './pages/ListingDetailsPage';
import BookingPage from './pages/BookingPage';
import SignupPage from './pages/SignupPage'; // Import SignupPage
import LoginPage from './pages/LoginPage'; // Import LoginPage

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar /> {/* Navbar is now consistent across all pages */}
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/listing/:id" element={<ListingDetailsPage />} /> {/* Listing details route */}
          <Route path="/booking/:id" element={<BookingPage />} /> {/* Booking page route */}
          <Route path="/signup" element={<SignupPage />} /> {/* Signup page route */}
          <Route path="/login" element={<LoginPage />} /> {/* Login page route */}
        </Routes>
        <Footer /> {/* Footer will be rendered for the whole app */}
      </div>
    </Router>
  );
}

export default App;
