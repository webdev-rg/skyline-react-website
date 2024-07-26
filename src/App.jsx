import React from "react";
import { Header } from "./components/header/Header";
import { Home } from "./components/home/Home";
import { Tours } from "./components/tours/Tours";
import { About } from "./components/about/About";
import { Experience } from "./components/experience/Experience";
import { Testimonial } from "./components/testimonials/Testimonial";
import { Blog } from "./components/blog/Blog";
import { Gallery } from "./components/gallery/Gallery";
import { Brands } from "./components/brands/Brands";
import { Contact } from "./components/contact/Contact";
import { Footer } from "./components/footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Tours />
      <About />
      <Experience />
      <Testimonial />
      <Blog />
      <Gallery />
      <Brands />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
