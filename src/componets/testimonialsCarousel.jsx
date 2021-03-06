import React, { Component } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { IconContext } from "react-icons";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import image from "../assets/img/profile.jpg";
import image1 from "../assets/img/22.jpg";
import image2 from "../assets/img/mardochee.jpeg";

const Slide = ({ image }) => {
  return (
    <div className="testimonial-slide-item" data-aos="zoom-in">
      <div className="Carousel-item-container">
        <div className="profile-wrapper">
          <img src={image} alt="" />
        </div>
        <div className="profile-details">
          <h3>John Fumba</h3>
          <span>CEO at JSF</span>
        </div>
        <div className="body">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est fugiat
          minus ipsa maxime recusandae, voluptate consequuntur perferendis.
          Cupiditatoluptate consequuntur perferendis.
        </div>
      </div>
    </div>
  );
};

class TestimonialsCarousel extends Component {
  state = {};
  render() {
    const items = [
      <Slide image={image1} />,
      <Slide image={image2} />,
      <Slide image={image} />,
    ];
    return (
      <div className="testimonials-carousel-main-container">
        <AliceCarousel
          mouseTracking
          items={items}
          animationDuration={1000}
          autoPlay
          infinite
          autoPlayInterval={5000}
          renderPrevButton={() => (
            <div className="carousel-control-btn-wrapper left">
              <IconContext.Provider
                value={{ className: "carousel-control-btn-icon" }}
              >
                <FiArrowLeft />
              </IconContext.Provider>
            </div>
          )}
          renderDotsItem={({ isActive }) => (
            <div
              className={isActive ? "carousel-dots active" : "carousel-dots"}
            ></div>
          )}
          renderNextButton={() => (
            <div className="carousel-control-btn-wrapper right">
              <IconContext.Provider
                value={{ className: "carousel-control-btn-icon" }}
              >
                <FiArrowRight />
              </IconContext.Provider>
            </div>
          )}
        />
      </div>
    );
  }
}

export default TestimonialsCarousel;
