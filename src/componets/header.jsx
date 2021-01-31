import React, { Component } from "react";
import { Link } from "react-router-dom";
class Header extends Component {
  constructor(props) {
    super(props);
    this.navbar = React.createRef();
  }
  state = {};
  componentDidMount() {
    const header = document.querySelector(".header-container-area");
    window.onscroll = () => {
      const height = window.scrollY;
      if (height > 70) {
        header.classList.add("scrolling");
      } else {
        header.classList.remove("scrolling");
      }
    };
  }
  handleToggleNavbar = () => {
    this.navbar.current.classList.toggle("open");
  };
  render() {
    return (
      <header className="header-container-area" ref={this.navbar}>
        <div className="header-logo-container">
          <Link to="/" className="logo-wrapper">
            <span>FMB STUDIO</span>
          </Link>
          <div className="hamburger-container">
            <div className="container" onClick={this.handleToggleNavbar}>
              <div className="burger"></div>
              <div className="burger"></div>
              <div className="burger"></div>
            </div>
          </div>
        </div>
        <div className="header-links-container">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">Apropos</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}

export default Header;
