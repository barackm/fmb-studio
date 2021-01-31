import React, { Component } from "react";
import { IconContext } from "react-icons";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import profile1 from "../assets/img/barack.jpg";
class Team extends Component {
  state = {};
  render() {
    return (
      <div className="team-main-area">
        <div className="header">
          <h1 data-aos="fade-up">Notre équipe</h1>
          <h3 data-aos="fade-up">-the best team ever-</h3>
        </div>
        <div className="team-members-container">
          <div className="team-members-grid">
            <div className="team-item-area">
              <img src={profile1} alt="" />
              <div className="team-item-ovelay">
                <h3>Barac mukelenga</h3>
                <h4>UI Designer</h4>
                <div className="team-member-links">
                  <a href="https://">
                    <IconContext.Provider
                      value={{ className: "team-member-link-icon" }}
                    >
                      <FaFacebookF />
                    </IconContext.Provider>
                  </a>
                  <a href="https://">
                    <IconContext.Provider
                      value={{ className: "team-member-link-icon" }}
                    >
                      <FaTwitter />
                    </IconContext.Provider>
                  </a>
                  <a href="https://">
                    <IconContext.Provider
                      value={{ className: "team-member-link-icon" }}
                    >
                      <FaYoutube />
                    </IconContext.Provider>
                  </a>
                </div>
              </div>
            </div>
            <div className="team-item-area">
              <img src={profile1} alt="" />
              <div className="team-item-ovelay">
                <h3>Barac mukelenga</h3>
                <h4>UI Designer</h4>
                <div className="team-member-links">
                  <a href="https://">
                    <IconContext.Provider
                      value={{ className: "team-member-link-icon" }}
                    >
                      <FaFacebookF />
                    </IconContext.Provider>
                  </a>
                  <a href="https://">
                    <IconContext.Provider
                      value={{ className: "team-member-link-icon" }}
                    >
                      <FaTwitter />
                    </IconContext.Provider>
                  </a>
                  <a href="https://">
                    <IconContext.Provider
                      value={{ className: "team-member-link-icon" }}
                    >
                      <FaYoutube />
                    </IconContext.Provider>
                  </a>
                </div>
              </div>
            </div>
            <div className="team-item-area">
              <img src={profile1} alt="" />
              <div className="team-item-ovelay">
                <h3>Barac mukelenga</h3>
                <h4>UI Designer</h4>
                <div className="team-member-links">
                  <a href="https://">
                    <IconContext.Provider
                      value={{ className: "team-member-link-icon" }}
                    >
                      <FaFacebookF />
                    </IconContext.Provider>
                  </a>
                  <a href="https://">
                    <IconContext.Provider
                      value={{ className: "team-member-link-icon" }}
                    >
                      <FaTwitter />
                    </IconContext.Provider>
                  </a>
                  <a href="https://">
                    <IconContext.Provider
                      value={{ className: "team-member-link-icon" }}
                    >
                      <FaYoutube />
                    </IconContext.Provider>
                  </a>
                </div>
              </div>
            </div>
            <div className="team-item-area">
              <img src={profile1} alt="" />
              <div className="team-item-ovelay">
                <h3>Barac mukelenga</h3>
                <h4>UI Designer</h4>
                <div className="team-member-links">
                  <a href="https://">
                    <IconContext.Provider
                      value={{ className: "team-member-link-icon" }}
                    >
                      <FaFacebookF />
                    </IconContext.Provider>
                  </a>
                  <a href="https://">
                    <IconContext.Provider
                      value={{ className: "team-member-link-icon" }}
                    >
                      <FaTwitter />
                    </IconContext.Provider>
                  </a>
                  <a href="https://">
                    <IconContext.Provider
                      value={{ className: "team-member-link-icon" }}
                    >
                      <FaYoutube />
                    </IconContext.Provider>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Team;
