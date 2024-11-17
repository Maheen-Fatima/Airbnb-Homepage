import React from "react";
import '../css/categories.css';

function Categories() {
    return (
        <div className="container">
            <ul className="categor">
                <li className="cat">
                    <i className="fas fa-camera icon-camera"></i>
                    <span className="cat-name">Icons</span>
                </li>
                <li className="cat">
                    <i className="fas fa-home icon-home"></i>
                    <span className="cat-name">Cabins</span>
                </li>
                <li className="cat">
                    <i className="fas fa-star icon-trending"></i>
                    <span className="cat-name">Trending</span>
                </li>
                <li className="cat">
                    <i className="fas fa-door-open icon-rooms"></i>
                    <span className="cat-name">Rooms</span>
                </li>
                <li className="cat">
                    <i className="fas fa-archway icon-mansions"></i>
                    <span className="cat-name">Mansions</span>
                </li>
                <li className="cat">
                    <i className="fas fa-bed icon-bnb"></i>
                    <span className="cat-name">Bed & Breakfasts</span>
                </li>
                <li className="cat">
                    <i className="fas fa-water icon-lakefront"></i>
                    <span className="cat-name">Lakefront</span>
                </li>
                <li className="cat">
                    <i className="fas fa-umbrella-beach icon-islands"></i>
                    <span className="cat-name">Islands</span>
                </li>
                <li className="cat">
                    <i className="fas fa-futbol icon-play"></i>
                    <span className="cat-name">Play</span>
                </li>
                <li className="cat">
                    <i className="fas fa-paint-brush icon-design"></i>
                    <span className="cat-name">Design</span>
                </li>
            </ul>
        </div>
    );
}

export default Categories;
