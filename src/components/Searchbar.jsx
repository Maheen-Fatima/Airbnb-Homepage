
import React, { useState } from 'react';
import '../css/Searchbar.css'; 

function SearchBar() {
  const [location, setLocation] = useState('');

  const handleSearch = () => {
    console.log(`Searching for ${location}`); 
  };
  

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="What are you looking for?"
        value={location}
        onChange={(e) => setLocation(e.target.value)} 
      />
       <button className="search-button" onClick={handleSearch}>
        <i className="fas fa-search" aria-hidden="true"></i> 
      </button>
    </div>
  );
}

export default SearchBar;