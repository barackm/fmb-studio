import React, { Component } from "react";
import HomeCarousel from "./carousel";

class Home extends Component {
  render() {
    const { onIncrementCounter } = this.props;
    return (
      <div className="home-main-area">
        <HomeCarousel onIncrementCounter={onIncrementCounter} />
      </div>
    );
  }
}

export default Home;
