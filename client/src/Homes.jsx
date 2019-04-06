import React from 'react';

const Homes = (props) => {
  const listing = props.data.map((home) => {
    return (
      <div className="home">
        <img src={home.photoUrl} alt="" height="200px" width="350px" />
        <div>{home.propertyAvail}</div>
        <div>{home.locationName}</div>
        <div>${home.price} per night</div>
        <div>{home.rating} Stars</div>
      </div>
    );
  });
  return listing;
};

export default Homes;
