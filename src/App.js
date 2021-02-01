import React from "react";
import AOS from "aos";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./functions/main";
import "aos/dist/aos.css";
import Footer from "./componets/footer";
import { Switch, Route, Redirect } from "react-router-dom";
import AboutPage from "./componets/pages/aboutPage";
import Main from "./componets/main";
import Header from "./componets/header";
import ServicesPage from "./componets/pages/servicesPage";
import ContactPage from "./componets/pages/contact";
import GaleryPage from "./componets/pages/galeryPage";

AOS.init({
  // Global settings:
  disable: false,
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
  return (
    <div className="App">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Header />
      <div className="app-container">
        <Switch>
          <Route path="/about" component={AboutPage} />
          <Route path="/services" component={ServicesPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/galery" component={GaleryPage} />
          <Route path="/" component={Main} />
          <Redirect to="/" />
        </Switch>
      </div>
      <div className="footer-container"></div>
      <Footer />
    </div>
  );
}

export default App;
