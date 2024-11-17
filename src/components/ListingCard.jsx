// src/components/ListingCard.jsx
import React from "react";
import "../css/ListingCard.css"; // Importing CSS for ListingCard

function ListingCard({ image, title, type, guests, bedrooms, bathrooms, price, rating }) {
    console.log({ image, title, type, guests, bedrooms, bathrooms, price, rating }); // Debugging

    return (
        <div className="listing-card">
            <img src={image} alt={title} className="listing-card-image" />
            <div className="listing-card-details">
                <h3 className="listing-card-title">{title}</h3>
                <p className="listing-card-type">{type}</p>
                <p className="listing-card-info">
                    {guests} guests · {bedrooms} bedrooms · {bathrooms} bathrooms
                </p>
                <div className="listing-card-footer">
                    <p className="listing-card-price">${price} / night</p>
                    <p className="listing-card-rating">★ {rating}</p>
                </div>
            </div>
        </div>
    );
}


export default ListingCard;