import React, { Component } from "react";
import "./resources/style.css";
import { Element } from "react-scroll";
import Header from "./components/Header";
import Featured from "./components/Featured";
import VenueInfo from "./components/VenueInfo";
import Highlights from "./components/Highlights";
import Pricing from "./components/Pricing";
import Location from "./components/Location";
import Footer from "./components/Footer";

window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;
class App extends Component {
  render() {
    return (
      <div style={{ height: "1500px", background: "cornflowerblue" }}>
        <Header />
        <Element name="event">
          <Featured />
        </Element>
        <Element name="venue">
          <VenueInfo />
        </Element>
        <Element name="highlights">
          <Highlights />
        </Element>
        <Element name="pricing">
          <Pricing />
        </Element>
        <Element name="location">
          <Location />
        </Element>
        <Element name="footer">
          <Footer />
        </Element>
      </div>
    );
  }
}

export default App;
