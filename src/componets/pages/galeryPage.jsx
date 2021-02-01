import React, { Component } from "react";
import CarouselModal from "../carouselModal";
import { allImages } from "../../data";
import Images from "../galeryImage";

class GaleryPage extends Component {
  state = {
    selectedLink: "all",
    carouselVisible: false,
    selectedImage: null,
    imagesDisplay: 12,
  };
  handleChangeLink = (selectedLink) => {
    this.setState({ selectedLink });
  };
  handleHideCarousel = () => {
    this.setState({ carouselVisible: false });
  };
  handleShowCarousel = (image) => {
    this.setState({ selectedImage: image._id, carouselVisible: true });
  };
  handleSeeMore = () => {
    const lastState = this.state.imagesDisplay;
    this.setState({ imagesDisplay: lastState + 12 });
  };
  render() {
    return (
      <div className="contact-page-main-container">
        <div className="header-contact-page galery">
          <div className="overlay"></div>
          <h1>Notre Galerie</h1>
          <h4>Meilleure collection</h4>
        </div>
        <div className="images-wrapper-area">
          <Images
            marginTop={0}
            onShowCarousel={this.handleShowCarousel}
            images={allImages.slice(0, this.state.imagesDisplay)}
            style={{ marginTop: 0 }}
          />
        </div>
        <CarouselModal
          selectedImage={this.state.selectedImage}
          onHideCarousel={this.handleHideCarousel}
          visible={this.state.carouselVisible}
          images={allImages}
        />
        <div className="view-more-btn-container">
          <a href="#1" className="btn-container" onClick={this.handleSeeMore}>
            Voir plus
          </a>
        </div>
      </div>
    );
  }
}

export default GaleryPage;
