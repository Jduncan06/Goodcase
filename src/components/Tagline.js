import React from "react";
import { Col, Button } from "reactstrap";
import fullLogo from "../app/assets/img/fullLogo.png";
import ventPromo from "../app/assets/ventPromo.mp4";

const Tagline = () => {
  return (
    <div className="tagLine">
      <video src={ventPromo} loop autoPlay muted className="videoBackground" />
      <img src={fullLogo} alt="logo" className="logo d-none d-md-block" />
      <Col className="content">
        <h1 className="comedians ms-xs-1 ms-md-5 mt-xs-0">
          COMEDIANS
          <br />
          <span className="unpack ms-xs-1 ms-md-5 mt-xs-0">UNPACK</span>
          <br />
          Your Gripes!
          <br />
          <a href="/#Shows">
            <Button className="btn">Get Tickets!</Button>
          </a>
        </h1>
      </Col>
      <hr />
    </div>
  );
};

export default Tagline;
