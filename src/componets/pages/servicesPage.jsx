import React, { Component } from "react";
import { IconContext } from "react-icons";
import { FaCameraRetro } from "react-icons/fa";
import { ImVideoCamera, ImPrinter } from "react-icons/im";
import Testimonials from "../testimonials";
class ServicesPage extends Component {
  state = {};
  render() {
    return (
      <div className="services-page-main-container">
        <div className="header-service-page">
          <div className="overlay"></div>
          <h1>No Services</h1>
          <h4>Studio digital crée depuis 2015</h4>
        </div>
        <div className="services-container">
          <div className="services-grid-wrapper">
            <div className="service-item-wrapper">
              <div className="service-item-icon-wrapper">
                <IconContext.Provider value={{ className: "service-icon" }}>
                  <FaCameraRetro />
                </IconContext.Provider>
              </div>
              <div className="service-item-details">
                <h1>Photographie</h1>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum,
                  asperiores et. Itaque, voluptatem quasi.
                </p>
              </div>
            </div>
            <div className="service-item-wrapper">
              <div className="service-item-icon-wrapper">
                <IconContext.Provider value={{ className: "service-icon" }}>
                  <ImVideoCamera />
                </IconContext.Provider>
              </div>
              <div className="service-item-details">
                <h1>Filmage</h1>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum,
                  asperiores et. Itaque, voluptatem quasi.
                </p>
              </div>
            </div>
            <div className="service-item-wrapper">
              <div className="service-item-icon-wrapper">
                <IconContext.Provider value={{ className: "service-icon" }}>
                  <ImPrinter />
                </IconContext.Provider>
              </div>
              <div className="service-item-details">
                <h1>Impression</h1>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum,
                  asperiores et. Itaque, voluptatem quasi.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Testimonials />
      </div>
    );
  }
}

export default ServicesPage;
