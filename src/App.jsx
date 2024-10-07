// src/App.js
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import "./App.css"; 
import Homepage from './pages/Homepage';
import Footer from './components/Footer'; // Import Footer

function App() {
  return (
    <div className="App">
      <Homepage />  
      <Footer /> {/* Footer will be rendered for the whole app */}
    </div>
  );
}

export default App;
