import React, { useState, useEffect } from "react";
import logo from "../../assets/images/logo.png";
import "./header.css";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  // Header Scrolling
  const handleScroll = () => {
    const offset = window.scrollY;

    if (offset > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    const navbar = document.querySelector("nav");
    const mobileMenu = document.querySelector(".mobile-menu-icon");
    const closeNavbar = document.querySelector(".close-navbar");

    const handleMobileMenuClick = () => {
      navbar.classList.add("active");
    };

    const handleCloseNabarClick = () => {
      navbar.classList.remove("active");
    };

    mobileMenu.addEventListener("click", handleMobileMenuClick);
    closeNavbar.addEventListener("click", handleCloseNabarClick);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      mobileMenu.removeEventListener("clicl", handleMobileMenuClick);
      closeNavbar.removeEventListener("click", handleCloseNabarClick);
    };
  }, []);

  return (
    <>
      <header className={`${scrolled ? "header scroll" : "header"}`}>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <nav>
          <div className="close-navbar">
            <i className="uil uil-times"></i>
          </div>
          <ul>
            <li>
              <a className="active" href="#home">
                Home
              </a>
            </li>
            <li>
              <a href="#tours">Tours</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#advantages">Advantages</a>
            </li>
            <li>
              <a href="#testimonials">Testimonials</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
        <div className="mobile-menu-icon">
          <i className="uil uil-bars"></i>
        </div>
      </header>
    </>
  );
};
