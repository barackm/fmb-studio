import React, { Component } from "react";
import { IconContext } from "react-icons";
import { GiLinkedRings } from "react-icons/gi";
import { FaBirthdayCake } from "react-icons/fa";
import { MdLibraryMusic } from "react-icons/md";
import { BsSpeaker } from "react-icons/bs";

class Acomplishments extends Component {
  state = {};
  render() {
    return (
      <div className="acomplishments-main-container">
        <div className="accomplishemnt-item">
          <IconContext.Provider value={{ className: "accomplishment-icon" }}>
            <GiLinkedRings />
          </IconContext.Provider>
          <h1>25</h1>
          <span>Mariages céremonies</span>
        </div>
        <div className="accomplishemnt-item">
          <IconContext.Provider value={{ className: "accomplishment-icon" }}>
            <FaBirthdayCake />
          </IconContext.Provider>
          <h1>30</h1>
          <span>Céremonies d'anniversaires</span>
        </div>
        <div className="accomplishemnt-item">
          <IconContext.Provider value={{ className: "accomplishment-icon" }}>
            <MdLibraryMusic />
          </IconContext.Provider>
          <h1>40</h1>
          <span>Clips Chansons</span>
        </div>
        <div className="accomplishemnt-item">
          <IconContext.Provider value={{ className: "accomplishment-icon" }}>
            <BsSpeaker />
          </IconContext.Provider>
          <h1>20</h1>
          <span>Concerts</span>
        </div>
      </div>
    );
  }
}

export default Acomplishments;
