import React, { Component } from "react";
import About from "../about";
import image1 from "../../assets/img/36.jpg";
import image2 from "../../assets/img/about-1.jpg";
import Acomplishments from "../acomplishments";
import Team from "../team";
import Testimonials from "../testimonials";
class AboutPage extends Component {
  state = {};
  render() {
    return (
      <div className="about-page-main-container-area">
        <div className="header-about-page">
          <div className="overlay"></div>
          <h1>A propos de nous</h1>
          <h4>Studio digital crée depuis 2015</h4>
        </div>
        <About />
        <div className="skills-main-area">
          <div className="image-wrapper">
            <img src={image1} alt="" srcset="" />
          </div>
          <div className="text-wrapper">
            <div className="skills-header">
              <h1>Nos Compétences</h1>
              <h4>Du sérieux dans le business </h4>
            </div>
            <div className="skill-slider-container">
              <h3>Photographie</h3>
              <div className="slider">
                <div className="slider-active"></div>
              </div>
            </div>
            <div className="skill-slider-container filmage">
              <h3>Filmage</h3>
              <div className="slider">
                <div className="slider-active filmage"></div>
              </div>
            </div>
            <div className="skill-slider-container">
              <h3>Design</h3>
              <div className="slider">
                <div className="slider-active design"></div>
              </div>
            </div>
            <div className="skill-slider-container ">
              <h3>Développement web</h3>
              <div className="slider">
                <div className="slider-active web"></div>
              </div>
            </div>
          </div>
        </div>
        <Acomplishments />
        <div className="about-page-about-us-area">
          <div className="text-container-area">
            <div className="about-about-header">
              <h1>A propos de nous</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus, repellat exercitationem. Veritatis natus aliquid
                illum odio quidem quo. Inventore perferendis alias quas
                voluptatibus fugiat et necessitatibus eveniet accusantium
                soluta. Corporis? Lorem <br /> ipsum dolor sit amet consectetur
                adipisicing elit. Quod, officiis iste? Illo, nemo. Officiis
                possimus eius, neque dolore quidem atque sapiente quaerat
                repellendus dolor odio fugit praesentium, beatae iusto magni?
              </p>
            </div>
          </div>
          <div className="image-wrapper-about">
            <img src={image1} alt="" srcset="" />
          </div>
        </div>
        <Team />
        <Testimonials />
      </div>
    );
  }
}

export default AboutPage;
