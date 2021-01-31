import React from "react";
import AOS from "aos";

import About from "./componets/about";
import Header from "./componets/header";
import Galery from "./componets/galery";
import Home from "./componets/home";

import "./functions/main";
import "aos/dist/aos.css";
import Footer from "./componets/footer";
import Acomplishments from "./componets/acomplishments";
import Team from "./componets/team";
import Testimonials from "./componets/testimonials";

AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
  initClassName: "aos-init", // class applied after initialization
  animatedClassName: "aos-animate", // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 1000, // values from 0 to 3000, with step 50ms
  easing: "ease-in-out", // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});

function App() {
  const [counter, setCounter] = React.useState(20);
  return (
    <div className="App">
      <div className="app-container">
        <Header counter={counter} />
        <Home onIncrementCounter={setCounter} />
        <About />
        <Galery />
        <Acomplishments />
        <Team />
        <Testimonials />
      </div>
      <div className="footer-container"></div>
      <Footer />
    </div>
  );
}

export default App;
