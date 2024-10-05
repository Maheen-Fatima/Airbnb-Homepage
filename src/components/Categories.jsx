import React from "react";
import '../css/categories.css';

function Categories() {
    return (
        <div className="container">
            <ul className="categor">
                <li className="cat">
                    <i className="fas fa-camera"></i>
                    <span className="cat-name">Icons</span>
                </li>
                <li className="cat">
                    <i className="fas fa-home"></i>
                    <span className="cat-name">Cabins</span>
                </li>
                <li className="cat">
                    <i className="fas fa-star"></i>
                    <span className="cat-name">Trending</span>
                </li>
                <li className="cat">
                    <i className="fas fa-door-open"></i>
                    <span className="cat-name">Rooms</span>
                </li>
                <li className="cat">
                    <i className="fas fa-archway"></i>
                    <span className="cat-name">Mansions</span>
                </li>
                <li className="cat">
                    <i className="fas fa-bed"></i>
                    <span className="cat-name">Bed & Breakfasts</span>
                </li>
                <li className="cat">
                    <i className="fas fa-water"></i>
                    <span className="cat-name">Lakefront</span>
                </li>
                <li className="cat">
                    <i className="fas fa-umbrella-beach"></i>
                    <span className="cat-name">Islands</span>
                </li>
                <li className="cat">
                    <i className="fas fa-futbol"></i>
                    <span className="cat-name">Play</span>
                </li>
                <li className="cat">
                    <i className="fas fa-paint-brush"></i>
                    <span className="cat-name">Design</span>
                </li>
            </ul>
        </div>
    );
}

export default Categories;
