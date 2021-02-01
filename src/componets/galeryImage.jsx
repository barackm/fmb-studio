import React, { Component } from "react";
import { IconContext } from "react-icons";

import { BiSearchAlt } from "react-icons/bi";
import { FiLink } from "react-icons/fi";

class Images extends Component {
  render() {
    const { onShowCarousel, marginTop } = this.props;
    return (
      <div className="all-images-main-area">
        <div
          className="images-grid-container"
          style={{ marginTop: marginTop && marginTop }}
        >
          {this.props.images.map((item, index) => (
            <div
              className="image-container"
              key={item + index}
              data-aos={item.animation}
              data-aos-once={true}
              data-aos-mirror={true}
            >
              <img src={item.url} alt="" />
              <div className="image-overlay">
                <h3>Photography</h3>
                <h4>Design</h4>
                <div className="icons" onClick={() => onShowCarousel(item)}>
                  <IconContext.Provider value={{ className: "galery-icon" }}>
                    <BiSearchAlt />
                  </IconContext.Provider>
                  <IconContext.Provider value={{ className: "galery-icon" }}>
                    <FiLink />
                  </IconContext.Provider>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Images;
