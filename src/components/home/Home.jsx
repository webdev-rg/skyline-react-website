import React from "react";
import "./home.css";

export const Home = () => {
  return (
    <>
      <div className="home-container" id="home">
        <div className="home-content">
          <h1>
            The Best Trips Around
            <br />
            Portugal Begin With Us
          </h1>
          <div className="tours-content">
            <div className="drop-down">
              <select name="select-date" id="select-date">
                <option value="Date">Date</option>
                <option value="july-15-2024">July 15, 2024</option>
                <option value="august-05-2024">August 05, 2024</option>
                <option value="september-21-2024">September 21, 2024</option>
              </select>
            </div>
            <div className="drop-down">
              <select name="select-price" id="select-price">
                <option value="your-price-range">Your Price Range</option>
                <option value="$500-$800">$500 - $800</option>
                <option value="$700-$1000">$700 - $1000</option>
                <option value="$1200-$1500">$1,200 - $1,500</option>
              </select>
            </div>
            <div className="btn">
              <button>Search Tour</button>
            </div>
          </div>
          <div className="social-media">
            <ul>
              <li>
                <i className="uil uil-facebook-f"></i>
              </li>
              <li>
                <i className="uil uil-linkedin"></i>
              </li>
              <li>
                <i className="uil uil-twitter"></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
