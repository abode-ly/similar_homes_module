import React from 'react';
import styles from './style.css';
import Stars from './Stars';

const Homes = ({ handleNext, data, prev, next, handlePrev }) => {
  const listing = data.map(home => (
    <div className={styles.home} key={home.id}>
      <img className={styles.homePhoto} src={home.photoUrl} alt="" />
      <div className={styles.allocText}>{home.propertyAvail}</div>
      <div className={styles.descText}>{home.locationName}</div>
      <div className={styles.priceText}>${home.price} per night</div>
      <div className={styles.stars}>
        <Stars rating={parseFloat(home.rating)} />
        <span className={styles.totalReviews}>
          {home.reviewCount}
        </span>
      </div>
    </div>
  ));
  if (next.length > 0 && prev.length === 0) {
    return (
      <div>
        <h2 className={styles.title}> More Homes You May Like</h2>
        <div className={styles.homes}>
          {listing}
          <div className={styles.nxtContainer}>
            <button type="button" className={styles.nextButton} onClick={() => handleNext()}>
              {'>'}
            </button>
          </div>
        </div>
      </div>
    );
  } if (next.length > 0 && prev.length < 9) {
    return (
      <div>
        <h2 className={styles.title}> More Homes You May Like</h2>
        <div className={styles.homes}>
          <div className={styles.prevContainer}>
            <button type="button" className={styles.prevButton} onClick={() => handlePrev()}>
              {'<'}
            </button>
          </div>
          {listing}
          <div className={styles.nxtContainer}>
            <button type="button" className={styles.nextButton} onClick={() => handleNext()}>
              {'>'}
            </button>
          </div>
        </div>
      </div>
    );

  } if (prev.length === 9) {
    return (
      <div>
        <h2 className={styles.title}> More Homes You May Like</h2>
        <div className={styles.homes}>
          <div className={styles.prevContainer}>
            <button type="button" className={styles.prevButton} onClick={() => handlePrev()}>
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
