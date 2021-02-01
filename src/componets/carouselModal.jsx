import React, { Component } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { IconContext } from "react-icons";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const Slide = ({ image, onHideCarousel, visible }) => {
  return (
    <div className="slide-galery-item-main-container">
      {visible && <div className="overlay" onClick={onHideCarousel}></div>}
      <div className="image-container">
        <img src={image.url} alt="" />
      </div>
    </div>
  );
};

class CarouselModal extends Component {
  state = {};
  render() {
    const { visible, images, onHideCarousel, selectedImage } = this.props;
    let selectedImageIndex =
      images.findIndex((item) => item._id === selectedImage) || 0;

    const newArray = images.map((image) => (
      <Slide image={image} visible={visible} onHideCarousel={onHideCarousel} />
    ));

    return (
      <div
        className={
          visible
            ? "carousel-modal-main-container visible"
            : "carousel-modal-main-container"
        }
        style={{ display: visible ? "flex" : "none", zIndex: 999999999 }}
      >
        <AliceCarousel
          mouseTracking
          items={newArray}
          animationDuration={1000}
          infinite
          disableDotsControls
          activeIndex={selectedImageIndex}
          renderNextButton={() => (
            <div className="carousel-contol-btn right">
              <IconContext.Provider
                value={{ className: "galery-controls-icon " }}
              >
                <FiArrowRight />
              </IconContext.Provider>
            </div>
          )}
          renderPrevButton={() => (
            <div className="carousel-contol-btn left">
              <IconContext.Provider
                value={{ className: "galery-controls-icon " }}
              >
                <FiArrowLeft />
              </IconContext.Provider>
            </div>
          )}
          autoPlayInterval={5000}
        />
      </div>
    );
  }
}

export default CarouselModal;
