import React from "react";
import { Button } from "reactstrap";
import fullLogo from '../app/assets/img/fullLogo.png';
import timelapse from "../app/assets/timelapse.mp4";

const Tagline = () => {
  return (
    <div className="videoBackground">
      <video src={timelapse} loop autoPlay muted className="videoBackground"/>
      <img src={fullLogo} alt='logo' className='logo' />
      <div/>
      <div className="content">
        <jumbotron className="comedians">COMEDIANS
        <br/>
        <span className="unpack">UNPACK</span>
        <br/>
        Your Gripes!<br/>
        <Button>Get Tickets!</Button>
        </jumbotron>
        
      </div>
      <div/>
    </div>
  );
};

export default Tagline;
