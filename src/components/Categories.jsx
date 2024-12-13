// Categories.jsx
import React, { useState } from "react";
import "../css/categories.css";

function Categories({ setActiveCategory }) {
  const [activeCategory, setActiveCategoryState] = useState("");

  const categories = [
    { icon: "fas fa-camera icon-camera", name: "Icons" },
    { icon: "fas fa-home icon-home", name: "Cabins" },
    { icon: "fas fa-star icon-trending", name: "Trending" },
    { icon: "fas fa-door-open icon-rooms", name: "Rooms" },
    { icon: "fas fa-archway icon-mansions", name: "Mansions" },
    { icon: "fas fa-bed icon-bnb", name: "Bed & Breakfasts" },
    { icon: "fas fa-water icon-lakefront", name: "Lakefront" },
    { icon: "fas fa-umbrella-beach icon-islands", name: "Islands" },
    { icon: "fas fa-futbol icon-play", name: "Play" },
    { icon: "fas fa-paint-brush icon-design", name: "Design" },
  ];

  const handleCategoryClick = (categoryName) => {
    setActiveCategoryState(categoryName); // Update local state
    setActiveCategory(categoryName); // Update parent component state
  };

  return (
    <div className="container">
      <ul className="categor">
        {categories.map((category, index) => (
          <li
            key={index}
            className={`cat ${activeCategory === category.name ? "active" : ""}`}
            onClick={() => handleCategoryClick(category.name)}
          >
            <i className={category.icon}></i>
            <span className="cat-name">{category.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
