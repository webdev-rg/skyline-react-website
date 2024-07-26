import React from 'react';
import "./blog.css";
import { BlogCard } from './BlogCard';

import img1 from "../../assets/images/grid-blog-1-570x350-223.jpg";
import img2 from "../../assets/images/grid-blog-2-570x350-364.jpg";
import img3 from "../../assets/images/grid-blog-3-570x350-33.jpg";
import img4 from "../../assets/images/grid-blog-4-570x350-812.jpg";

export const Blog = () => {

  const blogDetails = [
    {
      id: 1,
      image: img1,
      title: "7 Must-Sea Places in Portugal",
      date_time: "January 5, 2024, at 12:07 pm"
    },
    {
      id: 2,
      image: img2,
      title: "Top 5 Places You Probably Haven't Seen in Portugal Yet",
      date_time: "Feb 10, 2024, at 02:07 pm"
    },
    {
      id: 3,
      image: img3,
      title: "The Ultimate Porto Travel Guide",
      date_time: "March 8, 2024, at 12:015 pm"
    },
    {
      id: 4,
      image: img4,
      title: "The Best Time to Travel to Portugal: Opinions of Experts and Avid Travelers",
      date_time: "April 12, 2024, at 12:20 pm"
    }
  ]

  return (
    <>
      <div className="blog-container">
        <h1>Latest Blog Posts</h1>
        <div className="blog-card-container">
          {blogDetails.map((detail) => {
            return <BlogCard key={detail.id} image={detail.image} title={detail.title} date_time={detail.date_time} />
          })}
        </div>
        <div className="view-blog-btn">
          <button>View All Blog</button>
        </div>
      </div>
    </>
  )
}
