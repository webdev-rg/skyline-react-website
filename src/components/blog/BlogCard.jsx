import React from "react";
import "./blog.css";


export const BlogCard = ({image, title, date_time}) => {
  return (
    <>
      <div
        className="blog-card"
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),url(${image})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="blog-content">
          <div className="btn">
            <span>News</span>
          </div>
          <div className="blog-text">
            <p>{date_time}</p>
            <h2>{title}</h2>
          </div>
        </div>
      </div>
    </>
  );
};
