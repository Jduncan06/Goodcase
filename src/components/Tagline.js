import React from "react";
import { Col } from "reactstrap";
import Couch from "../app/assets/img/Couch.jpg";

const Tagline = () => {
  const isDesktop = window.innerWidth > 756 
  return (
    <div className="tagLine">
      <img   
      src={Couch} className="headshotBackground" alt="headshot"       
      style={ !isDesktop?{
        objectFit: "cover",
        height: "100vh",
      }:{
        
      }}
      />
      <Col className="content">
        <h1 style={{fontSize: '50pt'}}>Ryan Goodcase</h1>
      </Col>
    </div>
  );
};

export default Tagline;
