import React from "react";
import "./brands.css";

import img1 from "../../assets/images/brand-1.png";
import img2 from "../../assets/images/brand-2.png";
import img3 from "../../assets/images/brand-3.png";
import img4 from "../../assets/images/brand-4.png";
import img5 from "../../assets/images/brand-5.png";
import img6 from "../../assets/images/brand-6.png";

export const Brands = () => {
  return (
    <>
      <div className="brands-container">
        <div className="brands-images">
          <div className="img">
            <img src={img1} alt="" />
          </div>
          <div className="img">
            <img src={img2} alt="" />
          </div>
          <div className="img">
            <img src={img3} alt="" />
          </div>
          <div className="img">
            <img src={img4} alt="" />
          </div>
          <div className="img">
            <img src={img5} alt="" />
          </div>
          <div className="img">
            <img src={img6} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};
