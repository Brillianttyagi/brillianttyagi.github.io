import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import { Player } from "@lottiefiles/react-lottie-player";
import Front from "./images/front.json";
import Cookies from "universal-cookie";


class Homeimg extends Component {
  constructor(props) {
    super(props);
    const cookies = new Cookies();
    var prevtheme = cookies.get("mytheme");
    var theme = "light";
    if (prevtheme == undefined) {
      theme = "light";
    } else if (prevtheme == "dark") {
      theme = "dark";
    } else {
      theme = "light";
    }

    this.state = {
      theme: theme,
    };
  }
  render() {
    return (
        <div className="Upper-image">
          <Player src={Front} className="front" loop autoplay />
        </div>
    );
  }
}

export default Homeimg;
