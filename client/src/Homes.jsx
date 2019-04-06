import React from 'react';
import styles from './style.css';

const Homes = (props) => {
  const { data } = props;
  const listing = data.map((home) => {
    return (
      <div className="home">
        <img className="homePhoto" src={home.photoUrl} alt="" height="200px" width="350px" />
        <div className="allocText">{home.propertyAvail}</div>
        <div className="descText">{home.locationName}</div>
        <div className="priceText">${home.price} per night</div>
        <div>{home.rating} Stars</div>
      </div>
    );
  });
  return (
    <div>
      <h2 className="title"> More Homes You May Like</h2>
      <div className="homes">
        {listing}
      </div>
    </div>
  );
};

export default Homes;
