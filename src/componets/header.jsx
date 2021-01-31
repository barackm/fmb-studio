import React, { Component } from "react";

class Header extends Component {
  state = {};
  render() {
    const { counter } = this.props;
    return (
      <header className="header-container-area">
        <div className="header-logo-container">
          <div className="logo-wrapper">
            <span>FMB STUDIO</span>
          </div>
        </div>
        <div className="header-links-container">
          <ul>
            <li>
              <a href="#1">Home</a>
            </li>
            <li>
              <a href="#1">Apropos</a>
            </li>
            <li>
              <a href="#1">Services</a>
            </li>
            <li>
              <a href="#1">Contact</a>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}

export default Header;
