import React from 'react';

const Rating = ({ value, text }) => {
  return (
    <div className="rating">
      {
        [1,2,3,4,5].map(rating => {
          const starClass = value >= rating ? "fas fa-star" :
          value >= rating - 0.5 ? "fas fa-star-half-alt" :
          "far fa-star";

          return (
            <span key={rating}>
              <i className={
                `star-rating ${starClass}`
              }>
              </i>
            </span>
          )
        })
      }
      <span className="mx-1">{text && text}</span>
    </div>
  )
};

export default Rating;