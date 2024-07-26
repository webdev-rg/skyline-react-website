import React from 'react';
import "./tours.css";

export const TourCard = ({image, days, price, title}) => {
  return (
    <>
      <div className="tour-card">
        <div className="image">
          <img src={image} alt="grid-gallery-1" />
        </div>
        <div className="duration-price">
          <h4 className="days">{days}</h4>
          <p className='price'>From {price}</p>
        </div>
        <div className="title">
          <h2>{title}</h2>
        </div>
      </div>
    </>
  )
}
