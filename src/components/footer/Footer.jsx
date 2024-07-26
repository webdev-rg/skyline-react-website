import React from 'react'
import "./footer.css"

import logo from "../../assets/images/logo.png"

export const Footer = () => {

  let date = new Date();

  return (
    <>
      <div className="footer-container">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="cw">
          @Copywrite {date.getFullYear()}
        </div>
      </div>
    </>
  )
}
