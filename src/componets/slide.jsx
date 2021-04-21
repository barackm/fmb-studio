import React, { Component } from "react";
class Slide extends Component {
  render() {
    const { slide, index, activeSlide } = this.props;
    return (
      <div
        className={
          index === activeSlide
            ? "home-carousel-slide-area active"
            : "home-carousel-slide-area"
        }
        style={{ background: `url(${slide.image})` }}
        data-aos-once={false}
      >
        <div className="home-carousel-oveylay"></div>
        <div className="home-hero-main-area">
          <h2 data-aos="fade-up" data-aos-once-mirror={true}>
            {slide.title}
          </h2>
          <h1 data-aos="fade-left" data-aos-delay={1000}>
            {slide.subtitle}
          </h1>
          <h3 data-aos="fade-right" data-aos-delay={1500}>
            {slide.details}
          </h3>
          <div
            className="home-button"
            // data-aos-delay={1000}
            data-aos="fade-up"
          >
            voir plus
          </div>
        </div>
      </div>
    );
  }
}

export default Slide;
