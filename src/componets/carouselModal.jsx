import React, { Component } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { IconContext } from "react-icons";

const Slide = () => {
  return (
    <div className="slide-galery-item-main-container">
      <div className="image-container"></div>
    </div>
  );
};

class CarouselModal extends Component {
  state = {};
  render() {
    const { carouselVisible, images } = this.props;
    const renderImages = [<Slide />, <Slide />];
    return (
      <div className="carousel-modal-main-container">
        <div className="overlay"></div>
        <AliceCarousel
          mouseTracking
          items={renderImages}
          animationDuration={1000}
          autoPlay
          infinite
          disableDotsControls
          renderNextButton={() => (
            <div className="carousel-contol-btn">
              <IconContext.Provider
                value={{ className: "galery-controls-icon" }}
              ></IconContext.Provider>
            </div>
          )}
          autoPlayInterval={5000}
        />
      </div>
    );
  }
}

export default CarouselModal;
