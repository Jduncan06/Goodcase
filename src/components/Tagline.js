import React from "react";
import { Col } from "reactstrap";
import Couch from "../app/assets/img/Couch.jpg";

const Tagline = () => {
  return (
    <div className="tagLine">
      <img   
      src={Couch} className="headshotBackground" alt="headshot"       
      />
      <Col className="content">
        <h1 style={{fontSize: '50pt'}}>Ryan Goodcase</h1>
      </Col>
    </div>
  );
};

export default Tagline;
