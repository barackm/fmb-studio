import React, { Component } from "react";
// import RingLoader from "react-spinners/RingLoader";
class Loading extends Component {
  state = {};
  render() {
    return (
      <div className="loadin-main-container">
        <h3>FMB</h3>
        {/* <RingLoader
          color={"white"}
          loading={this.props.loading}
          size={150}
          css={{ margin: 0 }}
        /> */}
      </div>
    );
  }
}

export default Loading;
