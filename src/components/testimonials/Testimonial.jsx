import React from "react";
import "./testimonial.css";
import { TestimonialCard } from "./TestimonialCard";

import img1 from "../../assets/images/testimonials-1-68x68.jpg";
import img2 from "../../assets/images/testimonials-2-68x68.jpg";
import img3 from "../../assets/images/testimonials-3-68x68.jpg";

export const Testimonial = () => {
  const testimonialDetails = [
    {
      id: 1,
      image: img1,
      name: "Patrick Mills",
      desc: "I just wanted to share how much I enjoy dealing with Skyline. You have great people working to make traveling as unforgettable as possible. Thank you for great experience!",
    },
    {
      id: 2,
      image: img2,
      name: "Paul Johnston",
      desc: "Many, many thanks for helping me set up an amazing Portuguese adventure! My nephew and I had a blast! All of the accommodations were perfect and we liked everything!",
    },
    {
      id: 3,
      image: img3,
      name: "Michael Stanley",
      desc: "I had a marvelous time in our travels to Lisbon & Oporto, I had just wonderful experiences. I loved the capital of this country as I felt like it was only the time I got to see real Portugal.",
    },
  ];

  return (
    <>
      <div className="testimonial-container" id="testimonials">
        <div className="testimonial-content">
          <h1>Testimonials</h1>

          <div className="testimonial-card-container">
            {testimonialDetails.map((detail) => {
              return (
                <TestimonialCard
                  key={detail.id}
                  image={detail.image}
                  name={detail.name}
                  desc={detail.desc}
                />
              );
            })}
          </div>

          <div className="view-all-testimonials">
            <button>View All Testimonials</button>
          </div>

        </div>
          <div className="bottom-content">
            <div className="inner-content">
              <div className="icon">
              <i className="uil uil-users-alt"></i>
              </div>
              <h1>1.5M</h1>
              <h4>Happy Clients</h4>
            </div>
            <div className="inner-content">
              <div className="icon">
              <i className="uil uil-star"></i>
              </div>
              <h1>117</h1>
              <h4>Amazing Tours</h4>
            </div>
            <div className="inner-content">
              <div className="icon">
              <i className="uil uil-notebooks"></i>
              </div>
              <h1>231</h1>
              <h4>Partners</h4>
            </div>
            <div className="inner-content">
              <div className="icon">
              <i className="uil uil-comment-alt-message"></i>
              </div>
              <h1>6K</h1>
              <h4>Questions Answered</h4>
            </div>
          </div>
      </div>
    </>
  );
};
