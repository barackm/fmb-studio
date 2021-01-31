import React, { Component } from "react";
import { IconContext } from "react-icons";
import { GiAbstract062, GiArcheryTarget } from "react-icons/gi";
import { IoTelescopeSharp } from "react-icons/io5";
class About extends Component {
  state = {};
  render() {
    return (
      <div className="about-page-main-area">
        <div className="header">
          <h1 data-aos="fade-up">qui sommes nous ?</h1>
          <h3 data-aos="fade-up">-the best photography-</h3>
        </div>
        <div className="bio-area">
          <p data-aos="fade-up">
            La maison FMB STUDIO est une maison de production ouvrant en RDC,
            dans la province du nord Kivu, dans la ville de Goma Cette maison
            avait commencé sous l’initiative de Espoir MASTAJABU FUMBA , le 25
            octobre 2016. A cette époque, le monsieur en question faisait la G1
            a l’ISIG, cette idée a vu le jour grâce aux difficultés de payer
            certaines choses considérées comme besoin fondamentaux d’un étudiant
            car pour lui.
          </p>
        </div>
        <div className="about-grid-area">
          <div className="grid-container">
            <div className="grid-item-area" data-aos="fade-up-left">
              <div className="header">
                <div className="icon-container">
                  <IconContext.Provider
                    value={{ className: "about-grid-icon" }}
                  >
                    <GiAbstract062 />
                  </IconContext.Provider>
                </div>
                <h2 className="title">Strategie</h2>
              </div>
              <div className="body">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Adipisci ducimus cupiditate, vitae ea voluptate facere deserunt
              </div>
            </div>
            <div className="grid-item-area" data-aos="zoom-in-up">
              <div className="header">
                <div className="icon-container">
                  <IconContext.Provider
                    value={{ className: "about-grid-icon" }}
                  >
                    <IoTelescopeSharp />
                  </IconContext.Provider>
                </div>
                <h2 className="title">vision</h2>
              </div>
              <div className="body">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Adipisci ducimus cupiditate, vitae ea voluptate facere deserunt
              </div>
            </div>
            <div className="grid-item-area" data-aos="fade-up-right">
              <div className="header">
                <div className="icon-container">
                  <IconContext.Provider
                    value={{ className: "about-grid-icon" }}
                  >
                    <GiArcheryTarget />
                  </IconContext.Provider>
                </div>
                <h2 className="title">Objectif</h2>
              </div>
              <div className="body">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Adipisci ducimus cupiditate, vitae ea voluptate facere deserunt
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
