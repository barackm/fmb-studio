import React, { Component } from "react";
import { IconContext } from "react-icons";
import { FaFacebookF, FaTwitter, FaMapMarkerAlt } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";
import { IoLogoWhatsapp, IoMdPhonePortrait } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { AiFillLinkedin, AiOutlineGlobal } from "react-icons/ai";
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
                    <a href="">Filmage</a>
                  </li>
                  <li>
                    <a href="">Design</a>
                  </li>
                  <li>
                    <a href="">Impresion sur T-shirt</a>
                  </li>
                  <li>
                    <a href="">Video live</a>
                  </li>
                  <li>
                    <a href="">Location matos</a>
                  </li>
                </ul>
              </div>
              <div className="link-item-wrapper">
                <h4>Navigation</h4>

                <ul>
                  <li>
                    <a href="">Home</a>
                  </li>
                  <li>
                    <a href="">A propos de nous</a>
                  </li>
                  <li>
                    <a href="">Services</a>
                  </li>
                  <li>
                    <a href="">Galery</a>
                  </li>
                  <li>
                    <a href="">Contact</a>
                  </li>
                </ul>
              </div>
              <div className="link-item-wrapper">
                <h4>Contactez nous</h4>

                <ul>
                  <li>
                    <a href="">
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
                    <a href="">
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
                    <a href="">
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
                    <a href="">
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
            <a href="https://">
              <IconContext.Provider
                value={{ className: "footer-link-social-media-icon" }}
              >
                <FaFacebookF />
              </IconContext.Provider>
            </a>
            <a href="https://">
              <IconContext.Provider
                value={{ className: "footer-link-social-media-icon" }}
              >
                <ImInstagram />
              </IconContext.Provider>
            </a>
            <a href="https://">
              <IconContext.Provider
                value={{ className: "footer-link-social-media-icon" }}
              >
                <IoLogoWhatsapp />
              </IconContext.Provider>
            </a>
            <a href="https://">
              <IconContext.Provider
                value={{ className: "footer-link-social-media-icon" }}
              >
                <AiFillLinkedin />
              </IconContext.Provider>
            </a>
            <a href="https://">
              <IconContext.Provider
                value={{ className: "footer-link-social-media-icon" }}
              >
                <FaTwitter />
              </IconContext.Provider>
            </a>
          </div>
          <div className="copyright">
            &copy;{" "}
            <span>
              {new Date().getFullYear()} FMB STUDIO Tous droits reservés |
              Powered by
              <a href="http://">Barack Mukelenga</a>{" "}
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
