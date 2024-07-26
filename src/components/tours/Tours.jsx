import React from "react";
import "./tours.css";
import { TourCard } from "./TourCard";

import img1 from "../../assets/images/grid-gallery-1-370x260.jpg";
import img2 from "../../assets/images/grid-gallery-2-370x260.jpg";
import img3 from "../../assets/images/grid-gallery-3-370x260.jpg";
import img4 from "../../assets/images/grid-gallery-4-370x260.jpg";
import img5 from "../../assets/images/grid-gallery-5-370x260.jpg";
import img6 from "../../assets/images/grid-gallery-6-370x260.jpg";

export const Tours = () => {
  const tourDetails = [
    {
      id: 1,
      image: img1,
      days: "3 Days/ 2 Nights",
      price: "$1000",
      title: "Sintra, Lisbon and Fátima Three-Day Tour",
    },
    {
      id: 2,
      image: img2,
      days: "4 days/3 nights",
      price: "$500",
      title: "Douro Valley Group Tour with Wine Tasting",
    },
    {
      id: 3,
      image: img3,
      days: "1 day",
      price: "$800",
      title: "Sintra and Cascais Small-Group Day Trip from Lisbon",
    },
    {
      id: 4,
      image: img4,
      days: "7 days/6 nights",
      price: "$900",
      title: "Highlights of Portugal",
    },
    {
      id: 5,
      image: img5,
      days: "7 days/6 nights",
      price: "$1200",
      title: "Fátima, Nazaré, and Óbidos Small-Group Trip",
    },
    {
      id: 6,
      image: img6,
      days: "1 day",
      price: "$1500",
      title: "Sintra Full-Day Trip - A Journey through Wonderland",
    },
  ];
  return (
    <>
      <div className="tours-container" id="tours">
        <div className="tours-content">
          <h1>Best Sellers</h1>
          <div className="tour-card-container">
            {tourDetails.map((detail) => {
              return (
                <TourCard
                  key={detail.id}
                  image={detail.image}
                  days={detail.days}
                  price={detail.price}
                  title={detail.title}
                />
              );
            })}
          </div>
          <div className="view-all-tour">
            <button>View All Tours</button>
          </div>
        </div>
      </div>
    </>
  );
};
