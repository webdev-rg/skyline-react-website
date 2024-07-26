import React from "react";
import "./testimonial.css";

export const TestimonialCard = ({ image, name, desc }) => {
  return (
    <>
      <div className="testimonial-card">
        <div className="testimonial-image">
          <img src={image} alt="" />
        </div>
        <h2>{name}</h2>
        <h5>Regular Client</h5>
        <p>{desc}</p>
      </div>
    </>
  );
};
