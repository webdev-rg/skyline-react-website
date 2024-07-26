import React from "react";
import "./advantages.css";
import { AdvantageCard } from "./AdvantageCard";

export const Advantages = () => {
  return (
    <>
      <div className="advantages-container" id="advantages">
        <div className="advantages-content">
          <h1>Our Advantages</h1>
          <p>
            You can rely on our experience and the quality of services we
            <br />
            provide. Here are other reasons to book tours at Skyline.
          </p>

          <div className="advantage-card-container">
            <AdvantageCard />
            <AdvantageCard />
            <AdvantageCard />
            <AdvantageCard />
          </div>
        </div>
      </div>
    </>
  );
};
