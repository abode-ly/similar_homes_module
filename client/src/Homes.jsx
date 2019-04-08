import React from 'react';
import './style.css';
import Stars from './Stars';

const Homes = ({ handleNext, data, prev, next, handlePrev }) => {
  const listing = data.map(home => (
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
  ));
  if (next.length > 0 && prev.length === 0) {
    return (
      <div>
        <h2 className="title"> More Homes You May Like</h2>
        <div className="homes">
          {listing}
          <div className="nxt-container">
            <button type="button" className="nextButton" onClick={() => handleNext()}>
              {'>'}
            </button>
          </div>
        </div>
      </div>
    );
  } if (next.length > 0 && prev.length < 9) {
    return (
      <div>
        <h2 className="title"> More Homes You May Like</h2>
        <div className="homes">
          <div className="prev-container">
            <button type="button" className="prevButton" onClick={() => handlePrev()}>
              {'<'}
            </button>
          </div>
          {listing}
          <div className="nxt-container">
            <button type="button" className="nextButton" onClick={() => handleNext()}>
              {'>'}
            </button>
          </div>
        </div>
      </div>
    );
  } if (prev.length === 9) {
    return (
      <div>
        <h2 className="title"> More Homes You May Like</h2>
        <div className="homes">
          <div className="prev-container">
            <button type="button" className="prevButton" onClick={() => handlePrev()}>
              {'<'}
            </button>
          </div>
          {listing}
        </div>
      </div>
    );
  }
};

export default Homes;
