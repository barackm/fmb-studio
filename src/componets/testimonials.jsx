import React, { Component } from "react";
import TestimonialsCarousel from "./testimonialsCarousel";

class Testimonials extends Component {
  state = {};
  render() {
    return (
      <div
        className="testimonials-main-container-area"
        style={{ minHeight: 800 }}
      >
        <div className="header">
          <h1 data-aos="fade-up">Temoignages</h1>
          <h3 data-aos="fade-up">-les clients satisfaits-</h3>
        </div>
        <div className="carousel-container">
          <TestimonialsCarousel />
        </div>
      </div>
    );
  }
}

export default Testimonials;
