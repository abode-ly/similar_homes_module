import React from 'react';
import './style.css';
import Stars from './Stars';

const Homes = (props) => {
  const { data } = props;
  const listing = data.map((home) => {
    return (
      <div className="home">
        <img className="homePhoto" src={home.photoUrl} alt="" />
        <div className="allocText">{home.propertyAvail}</div>
        <div className="descText">{home.locationName}</div>
        <div className="priceText">
          ${home.price} per night
        </div>
        <div className="stars">
          <Stars rating={home.rating} />
          <span className="totalReviews">
            {home.reviewCount}
          </span>
        </div>
      </div>
    );
  });
  return (
    <div>
      <h2 className="title"> More Homes You May Like</h2>
      <div className="homes">
        {listing}
        <div className="nxt-container">
          <button type="button" className="nextButton"> > </button>
        </div>
      </div>
    </div>
  );
};

export default Homes;
