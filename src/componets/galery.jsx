import React, { Component } from "react";
import { IconContext } from "react-icons";
import image from "../assets/img/28.jpg";
import image2 from "../assets/img/18.jpg";
import image3 from "../assets/img/7.jpg";
import image4 from "../assets/img/8.jpg";
import image5 from "../assets/img/9.jpg";
import image6 from "../assets/img/10.jpg";
import image7 from "../assets/img/12.jpg";
import image8 from "../assets/img/13.jpg";
import image9 from "../assets/img/14.jpg";
import image10 from "../assets/img/15.jpg";
import image11 from "../assets/img/16.jpg";
import image12 from "../assets/img/17.jpg";

import image13 from "../assets/img/18.jpg";
import image14 from "../assets/img/19.jpg";
import image15 from "../assets/img/20.jpg";
import image16 from "../assets/img/21.jpg";
import image17 from "../assets/img/22.jpg";
import image18 from "../assets/img/23.jpg";
import image19 from "../assets/img/24.jpg";
import image20 from "../assets/img/25.jpg";
import image21 from "../assets/img/26.jpg";
import image22 from "../assets/img/33.jpg";
import image23 from "../assets/img/34.jpg";
import image24 from "../assets/img/35.jpg";

import { BiSearchAlt } from "react-icons/bi";
import { FiLink } from "react-icons/fi";
import CarouselModal from "./carouselModal";
const allImages = [
  {
    id: 1,
    categoryId: 1,
    url: image,
    animation: "zoom-in",
  },
  {
    id: 2,
    categoryId: 1,
    url: image2,
    animation: "zoom-in",
  },
  {
    id: 3,
    categoryId: 1,
    url: image3,
    animation: "zoom-in",
  },
  {
    id: 4,
    categoryId: 1,
    url: image4,
    animation: "zoom-in",
  },
  {
    id: 5,
    categoryId: 2,
    url: image5,
    animation: "zoom-in-up",
  },
  {
    id: 6,
    categoryId: 2,
    url: image6,
    animation: "zoom-in-up",
  },
  {
    id: 7,
    categoryId: 2,
    url: image7,
    animation: "zoom-in-up",
  },
  {
    id: 8,
    categoryId: 2,
    url: image8,
    animation: "zoom-in-up",
  },
  {
    id: 9,
    categoryId: 3,
    url: image9,
    animation: "flip-right",
  },
  {
    id: 10,
    categoryId: 3,
    url: image10,
    animation: "flip-right",
  },
  {
    id: 11,
    categoryId: 3,
    url: image11,
    animation: "flip-right",
  },
  {
    id: 12,
    categoryId: 3,
    url: image12,
    animation: "flip-right",
  },
  {
    id: 13,
    categoryId: 1,
    url: image13,
    animation: "zoom-in",
  },
  {
    id: 14,
    categoryId: 1,
    url: image14,
    animation: "zoom-in",
  },
  {
    id: 15,
    categoryId: 1,
    url: image15,
    animation: "zoom-in",
  },
  {
    id: 16,
    categoryId: 1,
    url: image16,
    animation: "zoom-in",
  },
  {
    id: 17,
    categoryId: 2,
    url: image17,
    animation: "zoom-in-up",
  },
  {
    id: 18,
    categoryId: 2,
    url: image18,
    animation: "zoom-in-up",
  },
  {
    id: 19,
    categoryId: 2,
    url: image19,
    animation: "zoom-in-up",
  },
  {
    id: 20,
    categoryId: 2,
    url: image20,
    animation: "zoom-in-up",
  },
  {
    id: 21,
    categoryId: 3,
    url: image21,
    animation: "flip-right",
  },
  {
    id: 22,
    categoryId: 3,
    url: image22,
    animation: "flip-right",
  },
  {
    id: 23,
    categoryId: 3,
    url: image23,
    animation: "flip-right",
  },
  {
    id: 24,
    categoryId: 3,
    url: image24,
    animation: "flip-right",
  },
];

const photographyImages = allImages.filter((image) => image.categoryId === 1);
const printImages = allImages.filter((image) => image.categoryId === 2);
const designImages = allImages.filter((image) => image.categoryId === 3);

class Images extends Component {
  render() {
    return (
      <div className="all-images-main-area">
        <div className="images-grid-container">
          {this.props.images.map((item) => (
            <div
              className="image-container"
              key={item}
              data-aos={item.animation}
              data-aos-once={true}
              data-aos-mirror={true}
            >
              <img src={item.url} alt="" />
              <div className="image-overlay">
                <h3>Photography</h3>
                <h4>Design</h4>
                <div className="icons">
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
class AllImages extends Component {
  render() {
    return <Images images={allImages} />;
  }
}

class Photographie extends Component {
  render() {
    return <Images images={photographyImages} />;
  }
}
class Print extends Component {
  render() {
    return <Images images={printImages} />;
  }
}
class Design extends Component {
  render() {
    return <Images images={designImages} />;
  }
}

class Galery extends Component {
  state = {
    selectedLink: "all",
    carouselVisible: true,
  };
  handleChangeLink = (selectedLink) => {
    this.setState({ selectedLink });
  };
  render() {
    const links = [
      { id: 1, name: "all" },
      { id: 2, name: "Photographie" },
      { id: 3, name: "Print" },
      { id: 4, name: "Design" },
    ];

    return (
      <>
        <div className="galery-main-area">
          <div className="header">
            <ul>
              {links.map((link) => (
                <li
                  className={
                    this.state.selectedLink === link.name ? "active" : ""
                  }
                  onClick={() => this.handleChangeLink(link.name)}
                  key={link.id}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="images-wrapper-area">
            {this.state.selectedLink === "all" && <AllImages />}
            {this.state.selectedLink === "Photographie" && <Photographie />}
            {this.state.selectedLink === "Print" && <Print />}
            {this.state.selectedLink === "Design" && <Design />}
          </div>
        </div>
        <CarouselModal
          visible={this.state.carouselVisible}
          images={allImages}
        />
      </>
    );
  }
}

export default Galery;
