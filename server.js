const express = require("express");
const cors = require("cors");
const fs = require("fs");
const listings = require("./data/listings.json");
const bookingsPath = "./data/bookings.json";  // Path to your bookings.json file

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("Airbnb API is running!");
});

// API Endpoint for Listings
app.get("/api/listings", (req, res) => {
  res.json(listings); // Send the listings.json data
});

// Route to search listings by city in the URL
app.get("/api/listings/:city", (req, res) => {
  const city = req.params.city.toLowerCase(); // Get the city parameter from the URL
  console.log("Searching for listings in:", city); // For debugging

  // Filter listings by city
  const filteredListings = listings.filter(
    (listing) => listing.city.toLowerCase() === city
  );

  if (filteredListings.length === 0) {
    return res.status(404).json({ message: "Listing not found" });
  }

  res.status(200).json(filteredListings);
});

// Get listing details by ID
app.get("/api/listings/:id", (req, res) => {
  const { id } = req.params;
  const listing = listings.find((listing) => listing.id == id);

  if (!listing) {
    return res.status(404).json({ message: "Listing not found" });
  }

  res.json(listing);
});

// API Endpoint for Bookings
app.get("/api/bookings", (req, res) => {
  fs.readFile(bookingsPath, (err, data) => {
    if (err) {
      return res.status(500).json({ message: "Error reading bookings file" });
    }
    const bookings = JSON.parse(data);
    res.json(bookings);  // Send the bookings data
  });
});

// Create a new booking (POST request)
app.post("/api/bookings", (req, res) => {
  const newBooking = req.body;  // Get the booking data from the request body

  if (!newBooking || !newBooking.listingId || !newBooking.customerName || !newBooking.checkInDate || !newBooking.checkOutDate) {
    return res.status(400).json({ message: "Missing required booking fields" });
  }

  // Read current bookings
  fs.readFile(bookingsPath, (err, data) => {
    if (err) {
      return res.status(500).json({ message: "Error reading bookings file" });
    }

    const bookings = JSON.parse(data);

    // Add the new booking to the array
    bookings.push(newBooking);

    // Write the updated bookings to the bookings.json file
    fs.writeFile(bookingsPath, JSON.stringify(bookings, null, 2), (err) => {
      if (err) {
        return res.status(500).json({ message: "Error saving booking" });
      }

      // Return the new booking as a response
      res.status(201).json(newBooking);
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
