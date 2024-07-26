import "./about.css";
import { ProgressBar } from "./ProgressBar";

import img1 from "../../assets/images/box-award-1.png";
import img2 from "../../assets/images/box-award-2.png";
import img3 from "../../assets/images/box-award-3.png";
import img4 from "../../assets/images/box-award-4.png";

export const About = () => {
  return (
    <>
      <div className="about-container" id="about">
        <div className="about-content">
          <h1>About Us</h1>
          <div className="values-destination">
            <div className="values">
              <h2>Values</h2>
              <p>
                Since our foundation, Skyline has been the leading tour agency
                in Portugal, offering top-quality services. We take great pride
                in our diverse portfolio of tours in Portugal. We also offer
                high quality tours and experiences.
              </p>
              <a href="#">Read More</a>
            </div>
            <div className="destination">
              <h2>Destinations</h2>

              <div className="progress-bar-container">
                <ProgressBar title="Lisbon" value="75" />
                <ProgressBar title="Sintra" value="33" />
                <ProgressBar title="Oporto" value="88" />
                <ProgressBar title="Evora" value="75" />
                <ProgressBar title="Obidos" value="50" />
              </div>
            </div>
          </div>
          <div className="partners">
            <h2>Partners</h2>
            <div className="partner-images">
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
