import React, { Component } from "react";
import { IconContext } from "react-icons";
import { FaFacebookF, FaYoutube, FaMapMarkerAlt } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";
import { IoLogoWhatsapp, IoMdPhonePortrait } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { AiOutlineGlobal } from "react-icons/ai";
import { Link } from "react-router-dom";
class Footer extends Component {
  state = {};
  render() {
    return (
      <div className="footer-main-area">
        <div className="footer-upper-area">
          <div className="left-area">
            <h1>FMB STUDIO</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
              hic accusantium voluptas dolor vitae eius quo cupiditate enim
              architecto consectetur minima exercitationem unde sequi, officia,
              odit temporibus, placeat consequuntur rerum.
            </p>
          </div>
          <div className="right-links-area">
            <div className="links-grid-area">
              <div className="link-item-wrapper">
                <h4>Travailler avec nous</h4>

                <ul>
                  <li>
                    <a href="#1">Filmage</a>
                  </li>
                  <li>
                    <a href="#1">Design</a>
                  </li>
                  <li>
                    <a href="#1">Impresion sur T-shirt</a>
                  </li>
                  <li>
                    <a href="#1">Video live</a>
                  </li>
                  <li>
                    <a href="#1">Location matos</a>
                  </li>
                </ul>
              </div>
              <div className="link-item-wrapper">
                <h4>Navigation</h4>

                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">A propos de nous</Link>
                  </li>
                  <li>
                    <Link to="/services">Services</Link>
                  </li>
                  <li>
                    <Link to="/">Galery</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
              <div className="link-item-wrapper">
                <h4>Contactez nous</h4>

                <ul>
                  <li>
                    <a href="#1">
                      <IconContext.Provider
                        value={{
                          className: "footer-link-social-media-icon contact",
                        }}
                      >
                        <FaMapMarkerAlt />
                      </IconContext.Provider>{" "}
                      Goma Q. katindo Av. Masisi No. 204, RDC
                    </a>
                  </li>
                  <li>
                    <a href="#1">
                      {" "}
                      <IconContext.Provider
                        value={{
                          className: "footer-link-social-media-icon contact",
                        }}
                      >
                        <IoMdPhonePortrait />
                      </IconContext.Provider>{" "}
                      (+243) 977 962 061
                    </a>
                  </li>
                  <li>
                    <a href="#1">
                      <IconContext.Provider
                        value={{
                          className: "footer-link-social-media-icon contact",
                        }}
                      >
                        <MdEmail />
                      </IconContext.Provider>{" "}
                      espoirfmb@gmail.com
                    </a>
                  </li>
                  <li>
                    <a href="#1">
                      <IconContext.Provider
                        value={{
                          className: "footer-link-social-media-icon contact",
                        }}
                      >
                        <AiOutlineGlobal />
                      </IconContext.Provider>{" "}
                      www.fmbstudio.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom-area">
          <div className="links-wrapper">
            <a href="https://web.facebook.com/FMBStudio-240776083478314/?_rdc=1&_rdr">
              <IconContext.Provider
                value={{ className: "footer-link-social-media-icon" }}
              >
                <FaFacebookF />
              </IconContext.Provider>
            </a>
            <a href="https://www.instagram.com/espoirfmb/">
              <IconContext.Provider
                value={{ className: "footer-link-social-media-icon" }}
              >
                <ImInstagram />
              </IconContext.Provider>
            </a>
            <a href="https://wa.me/243977962061">
              <IconContext.Provider
                value={{ className: "footer-link-social-media-icon" }}
              >
                <IoLogoWhatsapp />
              </IconContext.Provider>
            </a>

            <a href="https://www.youtube.com/channel/UCILje3JnAGxfYvSS5Jbr7Lw">
              <IconContext.Provider
                value={{ className: "footer-link-social-media-icon" }}
              >
                <FaYoutube />
              </IconContext.Provider>
            </a>
          </div>
          <div className="copyright">
            &copy;{" "}
            <span>
              {new Date().getFullYear()} FMB STUDIO Tous droits reservés |
              Powered by
              <a href="https:/barackm.me">Barack Mukelenga</a>{" "}
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
